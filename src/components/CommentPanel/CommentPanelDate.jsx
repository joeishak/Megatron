import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const CommentPanelDate = ({todaysDate}) => {
    return(
         <div className='commentDate'>
         {/* 10th September 2018 */}
         {todaysDate}
         <hr></hr>
         </div>
    
    )
}

export default CommentPanelDate;