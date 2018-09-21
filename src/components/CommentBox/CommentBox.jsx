import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ImageUploader from 'react-images-upload';
import styles from './CommentBox.css';
import addIcon from '../../assets/images/add-icon-black.svg';
import cameraIcon from '../../assets/images/camera.png';
class CommentBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            replyMessage: '',
            comments: [ ],
            pictures: []
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    
    handleKeyPress(e){
        if(e.key==='Enter'){
            // Post the Comment
            this.setState({comments: [...this.state.comments,e.target.value],
                        replyMessage: ''})
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
    render(){
        
        return(
            <div className = 'commentBoxContainer' >
            {/* Header */}
                <div className='commentBoxHeaderContainer'>
                    Net New ARR
                    <span className='exitContainer'>
                    <img src={addIcon} alt="" className='exitCommentsButton' ></img>
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
                        // this.state.comments.map(comment=>{
                        //     return <div> {comment} </div>
                        // })

                    }
                <div className='comment'>
                    <div className='commentUserHeader'>
                        {/* Comment User Icon */}
                        <div className='commentUserIcon' />
                        {/* Comment User Name */}
                        <span className='commentUserName'>
                        Erin Smith
                        </span>
                        {/* Comment User Date */}
                        <div className='commentTime'>
                        8:34am</div>
                    </div>
                    <div className='mainCommentContent'>
                    Check out the increased sales in this sector. This will make a huge difference this qtr. <a className='replyArrow'></a>
                    <div className='repliesContainer'>

                    </div>
                    </div>
                    
                </div>
                <div className='comment'>
                    <div className='commentUserHeader'>
                        {/* Comment User Icon */}
                        <div className='commentUserIcon' />
                        {/* Comment User Name */}
                        <span className='commentUserName'>
                        Erin Smith
                        </span>
                        {/* Comment User Date */}
                        <div className='commentTime'>
                        8:34am</div>
                    </div>
                    <div className='mainCommentContent'>
                    Check out the increased sales in this sector. This will make a huge difference this qtr. <a className='replyArrow'></a>
                    <div className='repliesContainer'>

                    </div>
                    </div>
                    
                </div>
                <div className='comment'>
                    <div className='commentUserHeader'>
                        {/* Comment User Icon */}
                        <div className='commentUserIcon' />
                        {/* Comment User Name */}
                        <span className='commentUserName'>
                        Erin Smith
                        </span>
                        {/* Comment User Date */}
                        <div className='commentTime'>
                        8:34am</div>
                    </div>
                    <div className='mainCommentContent'>
                    Check out the increased sales in this sector. This will make a huge difference this qtr. <a className='replyArrow'></a>
                    <div className='repliesContainer'>

                    </div>
                    </div>
                    
                </div>
                <div className='comment'>
                    <div className='commentUserHeader'>
                        {/* Comment User Icon */}
                        <div className='commentUserIcon' />
                        {/* Comment User Name */}
                        <span className='commentUserName'>
                        Erin Smith
                        </span>
                        {/* Comment User Date */}
                        <div className='commentTime'>
                        8:34am</div>
                    </div>
                    <div className='mainCommentContent'>
                    Check out the increased sales in this sector. This will make a huge difference this qtr. <a className='replyArrow'></a>
                    <div className='repliesContainer'>
                        <div className='replyContainer'>
                        </div>
                    </div>
                    </div>
                    
                </div>

                </div>
            {/* Reply / Attachment Footer */}
                <div className='commentResponseFooter'>
                  
                    <input className='replyTextInput' type="text" onChange={this.updateValue} value={this.state.replyMessage} onKeyPress={this.handleKeyPress}placeholder='Add A Comment . . . '/>
                    {/* <input type="file" value="" className='newPhotoUploadIcon'/>
                    <a className='newPhotoUploadIcon'></a> */}
                     <ImageUploader
                        withIcon={false}
                        buttonText='Choose images'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', ' .gif', ' .png']}
                        maxFileSize={5242880}
                        buttonStyles={{backgroundColor: '#3c3c3c'}}
                    />
                </div>
            </div>
        )
    }
}

export default (CommentBox)