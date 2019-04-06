import React, { Component } from 'react';
import {connect } from 'react-redux';

import * as actions from 'actions';
import styles from './CommentBox.css';
import addIcon from '../../assets/images/add-icon-black.svg';

import CommentPanelHeader from './CommentPanelHeader';
import CommentPanelDate from './CommentPanelDate';
import CommentBox from './CommentBox';
// import CommentControls from './CommentControls';
class CommentPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            todaysDate: ''
        }
    }
    componentDidMount(){
        let dateTime  = new Date().toDateString();
        this.setState({todaysDate: dateTime});
    }
    onClose(e) {
        this.props.hideCommentBox();
    }
    render(){
        let {currentMetric, isPrimary, commentBoxHeader,commentBoxIsOpen,user} = this.props;
        
        const DynamicCommentPanel = commentBoxIsOpen ?
            <div className = 'commentBoxContainer' >
            <CommentPanelHeader
            onClose={(e)=>{this.onClose(e)}}
            commentBoxHeader={commentBoxHeader}/>
            <CommentPanelDate 
            todaysDate={this.state.todaysDate}/>
            <CommentBox
            user={user}/>
            </div>
                :
            <span></span>;

        return(
           DynamicCommentPanel
        )
    }
}

function mapStateToProps(state) {
    return {
        commentBoxIsOpen: state.commentBoxIsOpen,
        currentMetric: state.activeCards.secondary,
        commentBoxHeader: state.summaryData.secondary[state.activeCards.secondary].header
    };
  }
  
  export default connect(
    mapStateToProps,
    actions
  )(CommentPanel);
  