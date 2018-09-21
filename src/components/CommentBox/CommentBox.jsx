import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './CommentBox.css';
import addIcon from '../../assets/images/add-icon-black.svg';

class CommentBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            replyMessage: '',
            comments: []
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateValue = this.updateValue.bind(this);
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
            {/* Comments */}
                <div className='commentsContainer'>
                    {
                        this.state.comments.map(comment=>{
                            return <span> {comment} </span>
                        })
                    }
                </div>
            {/* Reply / Attachment Footer */}
                <div className='commentResponseFooter'>

                    <input className='replyTextInput' type="text" onChange={this.updateValue} value={this.state.replyMessage} onKeyPress={this.handleKeyPress}placeholder='Add A Comment . . . '/>
                </div>
            </div>
        )
    }
}

export default (CommentBox)