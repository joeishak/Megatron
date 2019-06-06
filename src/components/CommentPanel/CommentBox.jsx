import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import addIcon from '../../assets/images/add-icon-black.svg';
import profilePic from '../../assets/images/user.png';
// import CommentControls from './CommentControls';
import ImageUploader from 'react-images-upload';
import { connect } from 'react-redux';
import * as actions from 'actions';
import * as utils from '../../utilities';
import LoadingScreen from '../../Views/Loading/Loading';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentCommand: 'Add Comment . . .',
            replyMessage: '',
            commentingUser: this.props.user,
            commentToBeRepliedTo: null,
            isHovered: {
                userName: '',
                id: 999
            },
            isCommentHovered: {
                userName: '',
                id: 999
            },
            isLoading: false,

        }
    }
    componentDidMount() {
        this.props.isFetching(true);
        this.props.fetchComments(this.props.currentMetric);
        if (!this.props.commentsPackage.isLoading) {
            this.commentInput.focus();
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.commentsPackage.isLoading === false) {
            this.commentInput.focus();
        }
    }
    handleCommentMouseEnter = (e, userName) => {
        this.setState({ commentCommand: `Respond to ${userName} . . .` });
    }
    handleCommentMouseLeave = (e, userName) => {
        this.state.commentingUser ?
            this.setState({ commentCommand: `Responding to ${userName} . . .` }) :
            this.setState({ commentCommand: 'Add A Comment . . .' });
    }
    setAddCommentFocus = (e, userName) => {
        this.setState({ commentToBeRepliedTo: e.target.id, replyMessage: '', commentCommand: `Responding to ${userName}...`, commentingUser: true });
        if (!this.props.commentsPackage.isLoading) {
            this.commentInput.focus();
        }
    }
    handleKeyPress = (e)  => {

        if (e.key === 'Enter' && this.state.commentToBeRepliedTo === null) {
            let isCommenter = null;
            const params = {
                userId: this.props.user.sub,
                metricId: this.props.currentMetric,
                postDateTime: new Date().toISOString(),
                comment: e.target.value
            };
            // Post Comment
            // this.props.addNewCommentToSecondaryMetric(this.props.currentMetric,comment);
            // Write to DB, Refresh the metrics from the DB, then refresh Comments count for the comment Indicators
            // console.log('checking user privelages...', this.props.user.Groups);
            //check if undefined and comin back from okta

            if (this.props.user.Groups !== undefined) {
                isCommenter = this.props.user.Groups.includes('Commenters');
                // console.log('is commenter:', isCommenter);
            } else {
                // theres no groups coming back from okta, post the comments
                // this.forceUpdate(() => {
                this.props.isFetching(true);
                this.props.addNewCommentToSecondaryMetric(params, this.props.currentMetric);
               
                this.setState({ replyMessage: '' })
            }

            // check if commenter and only post commenter
            if (isCommenter !== null && isCommenter) {
                // this.forceUpdate(() => {
                this.props.isFetching(true);
                this.props.addNewCommentToSecondaryMetric(params, this.props.currentMetric);

                this.setState({ replyMessage: '' })
            } else {
                // user cannot comment
            }


        } else if (e.key === 'Enter' && this.state.commentToBeRepliedTo !== null) {
            let isCommenter = null;
            let params = {
                userId: this.props.user.sub,
                commentId: this.state.commentToBeRepliedTo,
                postDateTime: new Date().toISOString(),
                comment: e.target.value
            }
            if (this.props.user.Groups !== undefined) {
                isCommenter = this.props.user.Groups.includes('Commenters');
                // console.log('is commenter:', isCommenter);
            } else {
               
                this.props.isFetching(true);
                this.props.addNewReplyToSecondaryMetric(params, this.props.currentMetric);
                
                this.setState({
                    commentToBeRepliedTo: null,
                    replyMessage: '',
                    commentCommand: 'Add Comment . . .',
                    commentingUser: false
                });
            }

            if (isCommenter !== null && isCommenter) {
                
                this.props.isFetching(true);
                this.props.addNewReplyToSecondaryMetric(params, this.props.currentMetric);
                
                this.setState({
                    commentToBeRepliedTo: null,
                    replyMessage: '',
                    commentCommand: 'Add Comment . . .',
                    commentingUser: false
                });
            } else {
                // user cannot reply
            }
        }
    }
    updateValue = (e) => {
        // Set the state for the comment box
        this.setState({ replyMessage: e.target.value })
    }
    onDrop = (picture) => {
        this.setState({ pictures: this.state.pictures.concat(picture) });
    }
    mouseEnter = (e, userName) => {
        this.setState({ commentCommand: `Respond to ${userName} . . .` });
        this.forceUpdate();
    }
    mouseLeave = (e, userName) => {
        this.state.commentingUser ?
            this.setState({ commentCommand: `Responding to ${userName} . . .` }) :
            this.setState({ commentCommand: 'Add A Comment . . .' });
        this.forceUpdate();
    }
    
    onCommentDeleteEntered = (e, _id, _userName) => {
        e.preventDefault();
        this.setState({ isCommentHovered: { userName: _userName, id: _id } });
    }
    onCommentDeleteLeave = (e, id) => {
        e.preventDefault();
        this.setState({ isCommentHovered: { userName: '', id: 999 } });
    }
  
    onCommentDeleted = (e, commentId, commentResponses) => {
        this.props.isFetching(true);
        this.props.removeComment(commentId, this.props.currentMetric)
        
    }

    render() {
        let { commentsPackage } = this.props;
        let componentsData = commentsPackage.isLoading || this.state.isLoading ? <LoadingScreen></LoadingScreen> : <span><div className='commentsContainer' >
            {(commentsPackage.data !== undefined) ?
                commentsPackage.data.map(comment => {
                    return (
                        <div key={comment.id} className='comment'>
                            <div className='commentUserHeader'>
                                {/* Comment User Icon */}
                                {/* <div className='commentUserIcon'/> */}
                                <img src={profilePic} className="profilePictures" />
                                {/* Comment User Name */}
                                <span className='commentUserName' onMouseEnter={e => { this.onCommentDeleteEntered(e, comment.id, this.props.user.name) }}
                                    onMouseLeave={e => { this.onCommentDeleteLeave(e, comment.id) }}>
                                    {(comment.replies.length === 0 && this.state.isCommentHovered.id === comment.id && this.state.isCommentHovered.userName === comment.userName) ?
                                        <span style={{ color: 'red' }} onClick={e => { this.onCommentDeleted(e, comment.id, comment.replies) }} className="comment-delete">DELETE COMMENT</span> : comment.userName}
                                </span>
                                {/* Comment User Date */}
                                <div className='commentTime'>
                                    {comment.time}</div>
                            </div>
                            <div className='mainCommentContent'>
                                {comment.comment}
                                 </div>
                           
                        </div>)
                }) : null}
        </div>
            <div className='commentResponseFooter'>
                <input ref={(input) => { this.commentInput = input; }} className='replyTextInput' type="text" onChange={this.updateValue} value={this.state.replyMessage} onKeyPress={this.handleKeyPress} placeholder={this.state.commentCommand} />
                <ImageUploader
                    withIcon={false}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png']}
                    maxFileSize={5242880}
                    buttonStyles={{ backgroundColor: '#3c3c3c' }} />
            </div>
        </span>
        return (componentsData)
    }
}
function mapStateToProps(state) {
    return {
        currentMetric: state.activeCards.secondary,
        commentsPackage: state.commentsPackage
    }
}
export default connect(mapStateToProps, actions)(CommentBox)
