// Npm Modules
import React, { Component } from 'react';
import {connect } from 'react-redux';
import {CSSTransitionGroup} from 'react-transition-group';
// Custom Components and Styles
import styles from './FilterPillBox.css';
import * as actions from 'actions';

class FilterPillBox extends  Component {
    //When the component is constructed
    constructor(props){
        super(props);
        // Initialize state
        this.state = {
            value: this.props.data.value
        }

        //Binding functions to this
        this.removeFilter = this.removeFilter.bind(this);
    }
    
    //Function that calls the action which removes the specified multifilter according to the index
    removeFilter(){
        this.props.removeMultiFilter(this.props.data);
        // this.props.getFilteredIBEDAta(this.props.activeFilters,this.props.availableFilters)
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
    return {
    
    }
}
export default connect(mapStateToProps,actions)(FilterPillBox)