import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import addIcon from '../../assets/images/add-icon-black.svg';
import profilePic from '../../assets/images/user.png';
import CommentControls from './CommentControls';
import ImageUploader from 'react-images-upload';
import {connect } from 'react-redux';
import * as actions from 'actions';
import * as utils from '../../utilities';

 class CommentBox extends Component {
     constructor(props){
         super(props);
         this.state = {           
             commentCommand: 'Add Comment . . .',
             replyMessage: '',
             commentingUser: this.props.user,
             commentToBeRepliedTo: null,

        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.setAddCommentFocus = this.setAddCommentFocus.bind(this);
        this.grabProfilePic = this.grabProfilePic.bind(this);
     }
    componentDidMount(){
        this.props.fetchComments(this.props.currentMetric);
        this.commentInput.focus();
    }
    componentDidUpdate(){
        this.commentInput.focus();
    }
    handleCommentMouseEnter(e,userName){
        this.setState({commentCommand: `Respond to ${userName} . . .` });

    }
    handleCommentMouseLeave(e,userName){
        this.state.commentingUser ? 
            this.setState({commentCommand: `Responding to ${userName} . . .`}) : 
            this.setState({commentCommand: 'Add A Comment . . .'});
    }
    setAddCommentFocus = (e, userName) => {
       
        this.setState({commentToBeRepliedTo: e.target.id,replyMessage: '', commentCommand: `Responding to ${userName}...`, commentingUser: true});
        this.commentInput.focus();
    }
    handleKeyPress(e){
       
        if(e.key==='Enter' && this.state.commentToBeRepliedTo === null){
         
            // let comment= {
            //     id: this.props.comments.length,
            //     userName: this.props.user.name,
            //     time: new Date().toLocaleTimeString(),
            //     comment: e.target.value,
            //     replies: [],
            // }

            const params = {
                userId: this.props.user.sub, 
                metricId: this.props.currentMetric, 
                postDateTime: new Date().toISOString(),
                comment: e.target.value
            };

                    // Post Comment
                    // this.props.addNewCommentToSecondaryMetric(this.props.currentMetric,comment);
                    // Write to DB, Refresh the metrics from the DB, then refresh Comments count for the comment Indicators
                    utils.postComment(params);
                    this.props.fetchComments(this.props.currentMetric);
                    this.props.fetchCommentsCount();
  
            
            this.setState({replyMessage: ''})
        } else if (e.key==='Enter' && this.state.commentToBeRepliedTo !== null){

            let params =  {
                userId: this.props.user.sub,
                commentId: this.state.commentToBeRepliedTo,
                postDateTime: new Date().toISOString(),
                comment: e.target.value
            }
            
            // let comment= {
            //     id: this.props.comments[this.state.commentToBeRepliedTo].replies.length,
            //     userName: this.props.user.name,
            //     time: new Date().toLocaleTimeString(),
            //     comment: e.target.value 
            // }
          
                // Post the Comment
                //this.props.addNewReplyToSecondaryMetric(this.props.currentMetric,this.state.commentToBeRepliedTo,comment);
                    utils.postReply(params);
                    this.props.fetchComments(this.props.currentMetric);
                    this.props.fetchCommentsCount();
      
           
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
         
            default:
                return profilePic;
                break;
        }

    }
     render(){
         let {commentsPackage} = this.props
         console.log(this.props.commentsPackage);
    return(
        <span>  <div className='commentsContainer'>
            {
                (commentsPackage !== undefined) ?
                commentsPackage.map(comment=>{
                        return (
                            <div key = {comment.id} className='comment'>
                            <div className='commentUserHeader'>
                                {/* Comment User Icon */}
                                {/* <div className='commentUserIcon'/> */}
                                    <img src={profilePic} className="profilePictures"/>
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
                            <a id={comment.id} className='replyArrow' onMouseEnter={e => this.handleCommentMouseEnter(e, comment.userName)}  onMouseLeave={e => this.handleCommentMouseLeave(e, comment.userName)} onClick={ e => this.setAddCommentFocus(e, comment.userName)}></a>
                            </div>
                            <div className='repliesContainer'>
                                <div className='repliesArrowContainer'>
                                    <span className='repliesArrow'>
                                    </span>
                                </div>
                                <div className='repliesList'>
                                    {(comment.replies !== undefined) ? comment.replies.map(reply=>{
                                        return(
                                            <div key={reply.id} className='reply'>
                                            {/* Reply Header */}
                                                <div className='userReplyingHeader'>
                                                {/* Reply Comment User Icon */}
                                                    {/* <div className='commentUserIcon' /> */}
                                                    <img src={profilePic} className="profilePictures"/>
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
                                    }) :null} 
                                   
                                </div>
                            </div>
                        </div>)
                    }) : null}
                    
            </div>
              <div className='commentResponseFooter'>
              <input ref={(input) => {this.commentInput=input;}} className='replyTextInput' type="text" onChange={this.updateValue} value={this.state.replyMessage} onKeyPress={this.handleKeyPress} placeholder={this.state.commentCommand}/>
               <ImageUploader
                  withIcon={false}
                  buttonText='Choose images'
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.gif', '.png']}
                  maxFileSize={5242880}
                  buttonStyles={{backgroundColor: '#3c3c3c'}}
              />
          </div>
          </span>
    )
                }
 }

 function mapStateToProps(state){
    //  console.log(state);
    return {
        currentMetric: state.activeCards.secondary,
        // commentsPackage: state.summaryData.secondary[state.activeCards.secondary].comments,
        commentsPackage: state.commentsPackage
    }
}
export default connect(mapStateToProps,actions) (CommentBox)
