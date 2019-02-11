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

class MobileCommentBox extends Component {
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

        this.grabProfilePic = this.grabProfilePic.bind(this);
    }

    componentDidMount(){
        let dateTime  = new Date().toDateString();
        this.setState({todaysDate: dateTime});
        // this.forceUpdate();
        // this.commentInput.focus();
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
        <span className="parent">
            <div className='mobileCommentContainer'>

                <div className='theDateTime'> {this.state.todaysDate}</div>
                <div >
                {(this.props.commentsPackage !== undefined) ?
                        this.props.commentsPackage.map(comment=>{
                            return (
                                <div key={comment.id} className='mobileComment'>
                                <div className='mobileCommentUserHeader'>
                                    {/* Comment User Icon */}
                                        <img src={this.grabProfilePic(comment.userName)} className="profilePictures"/>
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
                                                        <img src={this.grabProfilePic(reply.userName)} className="profilePictures"/>
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
