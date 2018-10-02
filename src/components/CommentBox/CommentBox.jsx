import React, { Component } from 'react';
import {connect } from 'react-redux';

import * as actions from 'actions';
import ImageUploader from 'react-images-upload';
import styles from './CommentBox.css';
import addIcon from '../../assets/images/add-icon-black.svg';
class CommentBox extends Component {
    constructor(props){
        super(props);
        this.state = {
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
            rerender: false
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.setAddCommentFocus = this.setAddCommentFocus.bind(this)
    }

    componentDidMount(){
        this.commentInput.focus();
    }
    shouldComponentUpdate(nextProps,nextState){
        if( nextProps.ibeData !== this.props.ibeData){
            if(!this.props.switchFilter){
            this.props.updateFinancialSummaryActiveCard(nextProps.ibeData[this.props.currentMetric-1]);
            } else
            {
                console.log(this.props.appData);
                this.props.updateJourneySummaryActiveCard(this.props.appData.journey.squares[this.props.currentMetric-1]);
            }
            return true;

        } else if(nextState.replyMessage !== this.state.replyMessage) {
        return true;

        } else {
            return false;
        }
    }
    setAddCommentFocus(e){
        this.setState({commentToBeRepliedTo: e.target.id,replyMessage: ''});
        this.commentInput.focus();
    }
    handleKeyPress(e){
       
        if(e.key==='Enter' && this.state.commentToBeRepliedTo === null){

            let comment= {
                id: this.props.comments.length,
                userName: 'Johnn Summerson',
                time: new Date().toLocaleTimeString(),
                comment: e.target.value,
                replies: [],
            }

            // Post the Comment
            this.props.addNewCommentToMetric(this.props.currentMetric,comment);
            
            this.setState({replyMessage: ''})
        } else if (e.key==='Enter' && this.state.commentToBeRepliedTo !== null){
            // console.log('The comment:',this.props.comments[this.state.commentToBeRepliedTo]);
            let comment= {
                id: this.props.comments[this.state.commentToBeRepliedTo].replies.length,
                userName: 'Johnn Summerson',
                time: new Date().toLocaleTimeString(),
                comment: e.target.value
                
            }
            console.log(
                'Current metric:',this.props.currentMetric, 'Comment To Be Replied To:',this.state.commentToBeRepliedTo,
                'Reply: ',comment
            )
            this.props.addNewReplyToMetricComment(this.props.currentMetric,this.state.commentToBeRepliedTo,comment);
            this.setState({
                commentToBeRepliedTo:null,
                replyMessage:''
            });
        }
    }
    updateValue(e){
            // Set the state for the comment box
            this.setState({replyMessage: e.target.value})
    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    onClose(e) {
        this.props.hideCommentBox();
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
                10th September 2018
                <hr></hr>
                </div>
              

            {/* Comments */}
                <div className='commentsContainer'>
                {
                        this.props.comments.map(comment=>{
                            return (
                                <div key = {comment.id} className='comment'>
                                <div className='commentUserHeader'>
                                    {/* Comment User Icon */}
                                    <div className='commentUserIcon' />
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
                                <a id={comment.id} className='replyArrow' onClick={this.setAddCommentFocus}></a>
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
                                                        <div className='commentUserIcon' />
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
                        })

                }
                

                </div>
            {/* Reply / Attachment Footer */}
                <div className='commentResponseFooter'>
                    <input ref={(input) => {this.commentInput=input;}} className='replyTextInput' type="text" onChange={this.updateValue} value={this.state.replyMessage} onKeyPress={this.handleKeyPress}placeholder='Add A Comment . . . '/>
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
    console.log('comment box', state);
    return {
        currentMetric: state.activeSummarySquare.index,
        comments: state.activeSummarySquare.comments,
        commentBoxHeader: state.activeSummarySquare.header,
        ibeData: state.ibeData,
        appData: state.adobeData,
        switchFilter: state.switchFilter   }
}
export default connect(mapStateToProps,actions) (CommentBox)
