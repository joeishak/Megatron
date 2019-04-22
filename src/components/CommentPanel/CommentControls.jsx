
import React, { Component } from 'react';
import {connect } from 'react-redux';

import * as actions from 'actions';
import ImageUploader from 'react-images-upload';
import styles from './CommentBox.css';
import addIcon from '../../assets/images/add-icon-black.svg';
import profilePic from '../../assets/images/user.png';
import CommentPanelHeader from './CommentPanelHeader';
import CommentPanelDate from './CommentPanelDate';
import CommentBox from './CommentBox';
class CommentControls extends Component {
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
    }

    componentDidMount(){
        let dateTime  = new Date().toDateString();
        this.setState({todaysDate: dateTime});
        this.commentInput.focus();
     
    }
   
   
    handleKeyPress(e){
       
        if(e.key==='Enter' && this.state.commentToBeRepliedTo === null){

         
            let comment= {
                id: this.props.comments.length,
                userName: this.props.user.name,
                time: new Date().toLocaleTimeString(),
                comment: e.target.value,
                replies: [],
            }

            // Post the Comment
                this.props.addNewCommentToSecondaryMetric(this.props.currentMetric,comment);
           
            
            this.setState({replyMessage: ''})
        } else if (e.key==='Enter' && this.state.commentToBeRepliedTo !== null){
            let comment= {
                id: this.props.comments[this.state.commentToBeRepliedTo].replies.length,
                userName: this.props.user.name,
                time: new Date().toLocaleTimeString(),
                comment: e.target.value
            }
          
            // Post the Comment
                this.props.addNewReplyToSecondaryMetric(this.props.currentMetric,this.state.commentToBeRepliedTo,comment);
        
           
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
    render(){
        
        return(
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
        )
    }
}

function mapStateToProps(state) {
    return {
    
    };
  }
  
  export default connect(
    mapStateToProps,
    actions
  )(CommentControls);
  