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
            }

        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.setAddCommentFocus = this.setAddCommentFocus.bind(this);
        // this.grabProfilePic = this.grabProfilePic.bind(this);
    }
    componentDidMount() {
        this.props.isFetching(true);
        this.props.fetchComments(this.props.currentMetric);
        if (!this.props.commentsPackage.isLoading) {
            this.commentInput.focus();
        }
    }
    componentDidUpdate() {
        if (!this.props.commentsPackage.isLoading) {
            this.commentInput.focus();
        }
    }
    handleCommentMouseEnter(e, userName) {
        this.setState({ commentCommand: `Respond to ${userName} . . .` });
    }
    handleCommentMouseLeave(e, userName) {
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
    handleKeyPress(e) {

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
                    // utils.postComment(params);
                    // this.props.fetchComments(this.props.currentMetric);
                    this.props.fetchCommentsCount();
                // })

                this.setState({ replyMessage: '' })
            }

            // check if commenter and only post commenter
            if (isCommenter !== null && isCommenter) {
                this.props.isFetching(true);
                this.props.addNewCommentToSecondaryMetric(params, this.props.currentMetric);
                // utils.postComment(params);
                // this.props.fetchComments(this.props.currentMetric);
                this.props.fetchCommentsCount();
            // })

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
                // theres no groups for okta
                // this.forceUpdate(() => {
                //     this.props.isFetching(true);
                //     utils.postReply(params);
                //     this.props.fetchComments(this.props.currentMetric);
                //     this.props.fetchCommentsCount();
                // });
                this.props.isFetching(true);
                this.props.addNewReplyToSecondaryMetric(params, this.props.currentMetric);
                // utils.postComment(params);
                // this.props.fetchComments(this.props.currentMetric);
                this.props.fetchCommentsCount();
                this.setState({
                    commentToBeRepliedTo: null,
                    replyMessage: '',
                    commentCommand: 'Add Comment . . .',
                    commentingUser: false
                });
            }

            if (isCommenter !== null && isCommenter) {
                // this.forceUpdate(() => {
                //     this.props.isFetching(true);
                //     utils.postReply(params);
                //     this.props.fetchComments(this.props.currentMetric);
                //     this.props.fetchCommentsCount();
                // });
                this.props.isFetching(true);
                this.props.addNewReplyToSecondaryMetric(params, this.props.currentMetric);
                // utils.postComment(params);
                // this.props.fetchComments(this.props.currentMetric);
                this.props.fetchCommentsCount();
                this.setState({
                    commentToBeRepliedTo: null,
                    replyMessage: '',
                    commentCommand: 'Add Comment . . .',
                    commentingUser: false
                });
            } else {
                // user cannot reply
            }


            // this.forceUpdate(() => {
            //     this.props.isFetching(true);
            //     utils.postReply(params);
            //     this.props.fetchComments(this.props.currentMetric);
            //     this.props.fetchCommentsCount();
            // });

            // this.setState({
            //     commentToBeRepliedTo :null,
            //     replyMessage:'',
            //     commentCommand: 'Add Comment . . .',
            //     commentingUser: false
            // });
        }
    }
    updateValue(e) {
        // Set the state for the comment box
        this.setState({ replyMessage: e.target.value })
    }
    onDrop(picture) {
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
    onCommentReplyDeleteEntered = (e, _id, _userName) => {
        e.preventDefault();
        this.setState({ isHovered: { userName: _userName, id: _id } });
    }
    onCommentReplyDeleteLeave = (e, id) => {
        e.preventDefault();
        this.setState({ isHovered: { userName: '', id: 999 } });
    }
    onCommentDeleteEntered = (e, _id, _userName) => {
        e.preventDefault();
        this.setState({ isCommentHovered: { userName: _userName, id: _id } });
    }
    onCommentDeleteLeave = (e, id) => {
        e.preventDefault();
        this.setState({ isCommentHovered: { userName: '', id: 999 } });
    }
    onReplyDeleted = (e, replyId) => {
        alert('DELETE:');
    }
    onCommentDeleted = (e, commentId, commentResponses) => {
        // alert('DELETE COMMENT');
        this.props.isFetching(true);

        utils.removeComment({
            id: commentId
        })
        this.props.fetchComments(this.props.currentMetric);
        this.props.fetchCommentsCount();
        // this.props.removeComment(commentId, this.props.currentMetric);
        // const reponsesIdArr = commentResponses.map(ele => { return ele.id });
    }
    onBodyCommentCommentClick = (e) => {
        // console.log('GO BACK');
        // this.setState({commentToBeRepliedTo: null, replyMessage: '', commentCommand: `Add Comment . . .`, commentingUser: false});
        // if (!this.props.commentsPackage.isLoading) {
        //     this.commentInput.focus();
        // }
    }
    render() {
        let { commentsPackage } = this.props;

        // console.log('IS LOADING',commentsPackage.isLoading);

        let componentsData = commentsPackage.isLoading ? <LoadingScreen></LoadingScreen> : <span><div className='commentsContainer' onClick={e => { this.onBodyCommentCommentClick(e) }}>
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
                                <a id={comment.id} className='replyArrow' onMouseEnter={e => this.handleCommentMouseEnter(e, comment.userName)}
                                    onMouseLeave={e => this.handleCommentMouseLeave(e, comment.userName)} onClick={e => this.setAddCommentFocus(e, comment.userName)}></a>
                            </div>
                            <div className='repliesContainer'>
                                <div className='repliesArrowContainer'>
                                    <span className='repliesArrow'>
                                    </span>
                                </div>
                                <div className='repliesList'>
                                    {(comment.replies !== undefined) ? comment.replies.map(reply => {
                                        // console.log(this.props.user.name);
                                        return (
                                            <div key={reply.id} className='reply'>
                                                {/* Reply Header */}
                                                <div className='userReplyingHeader'>
                                                    {/* Reply Comment User Icon */}
                                                    {/* <div className='commentUserIcon' /> */}
                                                    <img src={profilePic} className="profilePictures" />
                                                    {/* Reply Comment User Name */}
                                                    <span className='commentUserName' onMouseEnter={e => { this.onCommentReplyDeleteEntered(e, reply.id, this.props.user.name) }}
                                                        onMouseLeave={e => { this.onCommentReplyDeleteLeave(e, reply.id) }}>
                                                        {(this.state.isHovered.id === reply.id && this.state.isHovered.userName === reply.userName) ?
                                                            <span style={{ color: 'red' }} onClick={e => { this.onReplyDeleted(e, reply.id) }} className="comment-delete">DELETE RESPONSE</span>
                                                            : reply.userName}
                                                    </span>
                                                    {/* Reply Comment User Date */}
                                                    <span className='commentTime'>
                                                        {this.state.isHovered.id === reply.id && this.state.isHovered.userName === reply.userName ? '' : reply.time}</span>
                                                </div>
                                                {/* Reply Content */}
                                                <div className='replyContent'>
                                                    {reply.comment}
                                                </div>
                                            </div>
                                        )
                                    }) : null}

                                </div>
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
    //  console.log(state);
    return {
        currentMetric: state.activeCards.secondary,
        // commentsPackage: state.summaryData.secondary[state.activeCards.secondary].comments,
        commentsPackage: state.commentsPackage
    }
}
export default connect(mapStateToProps, actions)(CommentBox)
