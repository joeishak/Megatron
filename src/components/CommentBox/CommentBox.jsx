import React, { Component } from 'react';
import {connect } from 'react-redux';

import * as actions from 'actions';
import ImageUploader from 'react-images-upload';
import styles from './CommentBox.css';
import addIcon from '../../assets/images/add-icon-black.svg';
// profile pictures
import rick from '../../assets/images/rick.png';
import shaun from '../../assets/images/shaun.png';
import morty from '../../assets/images/morty.png';
import amit from '../Navigation/assets/images/amit-profile.png';
import profilePic from '../../assets/images/user.png';


class CommentBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentCommand: 'Add Comment . . .',
            commentingUser: false,
            replyMessage: '',
            comments: [
                {
                    id: 0,
                    userName: 'Erin Smith',
                    time: '8:34am',
                    comment: 'Check out the increased sales in this sector. This will make a huge difference.',
                    replies: [
                        {
                            id: 0,
                            userName: 'Bob Smith',
                            time: '9:04am',
                            comment: 'Wow! Great job team!'
                            
                        },
                        {
                            id: 1,
                            userName: 'Samantha Smith',
                            time: '9:34am',
                            comment: 'Was this for last month?'
                            
                        },
                        {
                            id: 2,
                            userName: 'Steve Smith',
                            time: '9:54am',
                            comment: 'Yes.'
                            
                        }
                    ]
                },
                {
                    id: 1,
                    userName: 'Shaun White',
                    time: '12:33pm',
                    comment: 'What happened in Quarter 3? ',
                    replies: [
                        {
                            id: 0,
                            userName: 'Bob Smith',
                            time: '8:34am',
                            comment: 'Our customers in Japan did not take to our marketing strategy. '
                            
                        }
                    ]
                }
             ],
            pictures: [],
            commentToBeRepliedTo: null,
            rerender: false,
            todaysDate: ''
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.setAddCommentFocus = this.setAddCommentFocus.bind(this);
        this.grabProfilePic = this.grabProfilePic.bind(this);
    }

    componentDidMount(){
        let dateTime  = new Date().toDateString();
        this.setState({todaysDate: dateTime});
        this.forceUpdate();
        this.commentInput.focus();
     
    }
   
    setAddCommentFocus = (e, userName) => {
       
        this.setState({commentToBeRepliedTo: e.target.id,replyMessage: '', commentCommand: `Responding to ${userName}...`, commentingUser: true});
        this.commentInput.focus();
    }
    handleKeyPress(e){
       
        if(e.key==='Enter' && this.state.commentToBeRepliedTo === null){

            console.log('debug',this.props.user);
            let comment= {
                id: this.props.comments.length,
                userName: this.props.user.name,
                time: new Date().toLocaleTimeString(),
                comment: e.target.value,
                replies: [],
            }

            // Post the Comment
            if(this.props.isPrimary){
                this.props.addNewJourneyComment(this.props.currentMetric,comment);
            }else{
                this.props.addNewCommentToMetric(this.props.currentMetric,comment);
            }
            
            this.setState({replyMessage: ''})
        } else if (e.key==='Enter' && this.state.commentToBeRepliedTo !== null){
            // console.log('The comment:',this.props.comments[this.state.commentToBeRepliedTo]);
            let comment= {
                id: this.props.comments[this.state.commentToBeRepliedTo].replies.length,
                userName: this.props.user.name,
                time: new Date().toLocaleTimeString(),
                comment: e.target.value
                
            }
            console.log(
                'Current metric:',this.props.currentMetric, 'Comment To Be Replied To:',this.state.commentToBeRepliedTo,
                'Reply: ',comment
            )
             // Post the Comment
             if(this.props.isPrimary){
                this.props.addNewJourneyReply(this.props.currentMetric,this.state.commentToBeRepliedTo,comment);
            }else{
                this.props.addNewReplyToMetricComment(this.props.currentMetric,this.state.commentToBeRepliedTo,comment);
            }
           
            this.setState({
                commentToBeRepliedTo :null,
                replyMessage:'',
                commentCommand: 'Add Comment . . .',
                commentingUser: false
            });

        }
    }
    updateValue(e){
            // Set the state for the comment box
        this.setState({replyMessage: e.target.value})
    }
    onDrop(picture) {
        this.setState({ pictures: this.state.pictures.concat(picture)});
    }

    onClose(e) {
        this.props.hideCommentBox();
    }

    mouseEnter = (e, userName) => {
        this.setState({commentCommand: `Respond to ${userName} . . .` });
        this.forceUpdate();
    }

    mouseLeave = (e, userName) => {
        this.state.commentingUser ? 
            this.setState({commentCommand: `Responding to ${userName} . . .`}) : 
            this.setState({commentCommand: 'Add A Comment . . .'});
        this.forceUpdate();
    }

    grabProfilePic (userName) {


        switch(userName) {
            case 'Rick Sanchez':
                return rick;
                break;
            case 'Morty Smith':
                return morty
                break;
            case 'Shaun White':
                return shaun
                break;
            case 'Amit Sethi':
                return amit
                break;
            default:
                return profilePic;
                break;
        }

    }

    render(){
        
        return(
            <div className = 'commentBoxContainer' >
            {/* Header */}
                <div className='commentBoxHeaderContainer'>
                    {this.props.commentBoxHeader}
                    <span className='exitContainer'>
                    <img src={addIcon} alt="" className='exitCommentsButton' onClick={e => this.onClose(e)} ></img>
                    </span>
                </div>
                {/* Date Text */}
                <div className='commentDate'>
                {/* 10th September 2018 */}
                {this.state.todaysDate}
                <hr></hr>
                </div>
              

            {/* Comments */}
                <div className='commentsContainer'>
                {
                    (this.props.comments !== undefined) ?
                        this.props.comments.map(comment=>{
                            return (
                                <div key = {comment.id} className='comment'>
                                <div className='commentUserHeader'>
                                    {/* Comment User Icon */}
                                    {/* <div className='commentUserIcon'/> */}
                                        <img src={this.grabProfilePic(comment.userName)} className="profilePictures"/>
                                    {/* Comment User Name */}
                                    <span className='commentUserName'>
                                    {comment.userName}
                                    </span>
                                    {/* Comment User Date */}
                                    <div className='commentTime'>
                                    {comment.time}</div>
                                </div>
                                <div className='mainCommentContent'>
                               {comment.comment}
                                <a id={comment.id} className='replyArrow' onMouseEnter={e => this.mouseEnter(e, comment.userName)}  onMouseLeave={e => this.mouseLeave(e, comment.userName)} onClick={ e => this.setAddCommentFocus(e, comment.userName)}></a>
                                </div>
                                <div className='repliesContainer'>
                                    <div className='repliesArrowContainer'>
                                        <span className='repliesArrow'>
                                        </span>
                                    </div>
                                    <div className='repliesList'>
                                        {comment.replies.map(reply=>{
                                            return(
                                                <div key={reply.id} className='reply'>
                                                {/* Reply Header */}
                                                    <div className='userReplyingHeader'>
                                                    {/* Reply Comment User Icon */}
                                                        {/* <div className='commentUserIcon' /> */}
                                                        <img src={this.grabProfilePic(reply.userName)} className="profilePictures"/>
                                                        {/* Reply Comment User Name */}
                                                        <span className='commentUserName'>
                                                        {reply.userName}
                                                        </span>
                                                        {/* Reply Comment User Date */}
                                                        <span className='commentTime'>
                                                        {reply.time}</span>
                                                    </div>
                                                {/* Reply Content */}
                                                <div className='replyContent'>
                                                {reply.comment}
                                                </div>
                                            </div>
                                            )
                                        })}
                                       
                                    </div>
                                </div>
                            </div>)
                        }) : null}

                }
                

                </div>
            {/* Reply / Attachment Footer */}
                <div className='commentResponseFooter'>
                    <input ref={(input) => {this.commentInput=input;}} className='replyTextInput' type="text" onChange={this.updateValue} value={this.state.replyMessage} onKeyPress={this.handleKeyPress}placeholder={this.state.commentCommand}/>
                     <ImageUploader
                        withIcon={false}
                        buttonText='Choose images'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png']}
                        maxFileSize={5242880}
                        buttonStyles={{backgroundColor: '#3c3c3c'}}
                    />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        appData: state.adobeData,
        user: state.user
    }
}
export default connect(mapStateToProps,actions) (CommentBox)
