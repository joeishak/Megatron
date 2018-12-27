import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import addIcon from '../../assets/images/add-icon-black.svg';

const CommentPanelHeader = ({commentBoxHeader,onClose}) => {
    return(
        <div className='commentBoxHeaderContainer'>
            {commentBoxHeader}
            <span className='exitContainer'>
                <img src={addIcon} alt="" className='exitCommentsButton' onClick={e => onClose(e)} ></img>
            </span>
        </div>
    
    )
}

export default CommentPanelHeader;