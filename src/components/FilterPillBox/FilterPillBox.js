import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './FilterPillBox.css';
import {connect } from 'react-redux';
import * as actions from 'actions';
import KendoMultiSelect  from '../KendoMultiSelect/KendoMultiSelect';
import {CSSTransitionGroup} from 'react-transition-group';

class FilterPillBox extends  Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.data.value
        }

        console.log(this.props);
        this.removeFilter = this.removeFilter.bind(this);
    }
    
    removeFilter(){
        this.props.removeMultiFilter(this.props.data.index);
    }
    render(){
        return(
            <CSSTransitionGroup
                                        className="chart1"
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={1000}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
            <span className="filterText" >{this.state.value}<span className="xButton" onClick={this.removeFilter}>x</span></span>
            </CSSTransitionGroup>

        )
    }
}
function mapStateToProps(state){
    return {}
}
export default connect(mapStateToProps,actions)(FilterPillBox)