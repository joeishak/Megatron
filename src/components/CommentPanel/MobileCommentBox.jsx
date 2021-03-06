import React, { Component } from 'react';
import {connect } from 'react-redux';

import * as actions from 'actions';
import ImageUploader from 'react-images-upload';
import styles from './CommentBox.css';
import addIcon from '../../assets/images/add-icon-black.svg';
import profilePic from '../../assets/images/user.png';

class MobileCommentBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            commentCommand: 'Add Comment . . .',
            commentingUser: false,
            replyMessage: '',
            commentToBeRepliedTo: null,
            rerender: false,
            todaysDate: ''
        }

    }

    componentDidMount(){
        let dateTime  = new Date().toDateString();
        this.setState({todaysDate: dateTime});
    }


    render(){

        return(
        <span className="parent">
            <div className='mobileCommentContainer'>

                <div className='theDateTime'> {this.state.todaysDate}</div>

                {this.props.commentsPackage.data.length < 1 || this.props.commentsPackage.data == undefined ?
                    <div style={{color: 'white', alignContent: 'center'}}>
                    <h4>No Comments for this Metric</h4>
                </div>: null}

                <div >
                {(this.props.commentsPackage.data !== undefined) ?
                        this.props.commentsPackage.data.map(comment=>{
                            return (
                                <div key={comment.id} className='mobileComment'>
                                <div className='mobileCommentUserHeader'>
                                    {/* Comment User Icon */}
                                        <img src={profilePic} className="profilePictures"/>
                                    {/* Comment User Name */}
                                    <span className='mobileCommentUserName'>
                                    {comment.userName}
                                    </span>
                                    {/* Comment User Date */}
                                    <span className='mobileCommentTime'>
                                    {comment.time}</span>
                                </div>
                                <div className='mobileMainCommentContent'>
                               {comment.comment}
                                </div>
                                <div className="mobileCommentsReplies">
                                    {(comment.replies !== undefined) ? comment.replies.map(reply => {
                                        return (
                                          <div key={reply.id}>
                                                <div className='mobileCommentUserHeader'>
                                                    {/* Comment User Icon */}
                                                        <img src={profilePic} className="profilePictures"/>
                                                    {/* Comment User Name */}
                                                    <span className='mobileCommentUserName'>
                                                    {reply.userName}
                                                    </span>
                                                    {/* Comment User Date */}
                                                    <span className='mobileCommentTime'>
                                                    {reply.time}</span>
                                                </div>
                                                <div className='mobileMainCommentContent'>
                                                    {reply.comment}
                                                </div>
                                              
                                          </div>  
                                        );
                                    }) : null }
                                </div>
                            </div>)
                        }) : null}
                </div>
            </div>

            
        </span>
            
        )
    }
}

function mapStateToProps(state){
    return {
    }
}
export default connect(mapStateToProps,actions) (MobileCommentBox)
