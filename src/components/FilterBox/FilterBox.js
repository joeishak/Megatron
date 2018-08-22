import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect } from 'react-redux';
import * as actions from 'actions';
import { Slide } from '@progress/kendo-react-animation';
import styles from './FilterBox.css';
import KendoMultiSelect  from '../KendoMultiSelect/KendoMultiSelect';
import KendoDropDownList from '../KendoDropDownList/KendoDropDownList'
import FilterPillBox from '../FilterPillBox/FilterPillBox';
import  classNames from 'classnames';
import { CSSTransitionGroup } from 'react-transition-group';

const inStyles={
    expansionBox: {
        height: '100%',
        width: '100%'
    }
}
class FilterBox extends Component {
    constructor(props){
        super(props);
        this.state= {
            filterPanelIsOpen: false,
            filterPanelIsClosed: true,
            newFilterSelected: false,
            addNewFilterActive: false,
            closeNewFilterActive: false,
            showSlide: false
        }

        this.changeFilterPanelStatus = this.changeFilterPanelStatus.bind(this);
        this.renderFilterPills = this.renderFilterPills.bind(this);
    }

    componentDidUpdate(){
        // console.log(this.props.marketAreaFilter);

    }
    renderFilterPills(){
        
    }
    changeFilterPanelStatus(){
        this.props.handleNewFilterClick();
        if(this.state.filterPanelIsOpen){
            this.setState({showSlide: false})
            this.setState({addNewFilterActive:false,closeNewFilterActive: true, filterPanelIsOpen: false,filterPanelIsClosed: true});

        } else{
            this.setState({addNewFilterActive:true,closeNewFilterActive: false,filterPanelIsOpen: true, filterPanelIsClosed: false,showSlide: true});
        }
    }
  
    render(){
     


        var newFilterButtonClass = classNames({
            newFilterButton: true,
            'newFilterButton-selected': this.state.addNewFilterActive,
            'newFilterButton-close': this.state.closeNewFilterActive
          });
       
        return(

            <div className="filterContainer">
                <div className="newFilterDiv"> 
                    <span className="newFilterText" >Add Filter</span> 
                    <div  className={newFilterButtonClass} onClick={this.changeFilterPanelStatus}>+</div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {filters: state.filters};
  }
  
  export default connect(mapStateToProps,actions) (FilterBox)