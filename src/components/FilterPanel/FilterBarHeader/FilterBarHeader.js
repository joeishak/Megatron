// Npm Modules
import React, { Component } from 'react';
import {connect } from 'react-redux';
import  classNames from 'classnames';

// Custom Components and Styles
import addIcon from '../../../assets/images/add-icon-white.svg';
import * as actions from 'actions';
import FilterPillBox from '../FilterPillBox/FilterPillBox.js';
import styles from './FilterBarHeader.css';

class FilterBarHeader extends Component { 
    //When the component is constructed
    constructor(props){
        super(props);

        // Initialize state
        this.state= {
            filterPanelIsOpen: false,
            filterPanelIsClosed: true,
            newFilterSelected: false,
            addNewFilterActive: false,
            closeNewFilterActive: false,
            showSlide: false,
            filterButtonTitle: 'Add Filters',
            filterBarArr: [],
            totalFilterPills: 0
        }

        //Binding functions to this
        this.changeFilterPanelStatus = this.changeFilterPanelStatus.bind(this);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.totalFilterPills !== nextState.totalFilterPills) {
    //         return false;
    //     }
    //     return true;
    // }

   // Function that renders the Filter Pills
    renderFilterPills(){
        // As long as there is an active filter
        let filters = this.props.filters
        let filterBarArr= [];
        filters.quarters.valueFilters.forEach(item=>{
            filterBarArr.push(item);
        });
        if(filters.geos.valueFilters.length!==0){
        filters.geos.valueFilters.forEach(item=>{
            filterBarArr.push(item);
        });
        }
        if(filters.products.valueFilters.length!==0){
        filters.products.valueFilters.forEach(item=>{
            filterBarArr.push(item);
        });
        }
        if(filters.subscriptions.valueFilters.length!==0){
        filters.subscriptions.valueFilters.forEach(item=>{
            filterBarArr.push(item);
        });
        }
        if(filters.markets.valueFilters.length!==0){
        filters.markets.valueFilters.forEach(item=>{
            filterBarArr.push(item);
        });
        }
        if(filters.routes.valueFilters.length!==0){
        filters.routes.valueFilters.forEach(item=>{
            filterBarArr.push(item);
        });
        }
        filters.segments.valueFilters.forEach(item=>{
            filterBarArr.push(item);
        });
        if(filterBarArr.length>0) {
            // Return this 
        return(
            //For each active filter, return a Filter Pill Box Component mapped to the filter
            filterBarArr.map(filter =>{
                if(filter!==undefined){

                    return <FilterPillBox key={this.state.totalFilterPills++} data={filter} />
                } else return <span />
            })
        )
    } 
    else return null;
       
    }


    changeFilterPanelStatus = () => {
        
        this.props.handleNewFilterClick();
        if(this.state.filterPanelIsOpen){
            this.setState({
                filterButtonTitle: 'Add Filters',
                showSlide: false,
                addNewFilterActive:false,
                closeNewFilterActive: true, 
                filterPanelIsOpen: false,
                filterPanelIsClosed: true});
        } else{
            this.setState({
                filterButtonTitle: 'Hide Filters',
                addNewFilterActive:true,
                closeNewFilterActive: false,
                filterPanelIsOpen: true, 
                filterPanelIsClosed: false,
                showSlide: true});
        }
    }
  
    render(){
        var newFilterButtonClass = classNames({
            newFilterButton: true,
            'newFilterButton-selected': this.state.addNewFilterActive,
            'newFilterButton-close': this.state.closeNewFilterActive
          });
       
        return(
            <div className="filterContainer container-fluid row">
                <div className="pillsContainer col-10">
                { this.renderFilterPills()}
                </div>
                <div className="newFilterDiv col-2"> 
                    <span className="newFilterText" >{this.state.filterButtonTitle}</span> 
                        <img src={addIcon} alt="" className={newFilterButtonClass} onClick={this.changeFilterPanelStatus}></img>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {filters: state.filters};
  }
  
  export default connect(mapStateToProps,actions) (FilterBarHeader)