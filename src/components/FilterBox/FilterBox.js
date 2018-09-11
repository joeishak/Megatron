// Npm Modules
import React, { Component } from 'react';
import {connect } from 'react-redux';
import  classNames from 'classnames';

// Custom Components and Styles
import addIcon from './add-icon.svg';
import * as actions from 'actions';
import FilterPillBox from '../FilterPillBox/FilterPillBox';
import styles from './FilterBox.css';

// // In Line Styles
// const inStyles={
//     expansionBox: {
//         height: '100%',
//         width: '100%'
//     }
// }
class FilterBox extends Component {
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
            filterBarArr: []
        }

        //Binding functions to this
        this.changeFilterPanelStatus = this.changeFilterPanelStatus.bind(this);
    }

   // Function that renders the Filter Pills
    renderFilterPills(){
        // As long as there is an active filter
        let filters = this.props.activeFilters
        
    let filterBarArr=
            [
                filters.quarters[0],filters.products[0],
                filters.markets[0],filters.segments[0],
                filters.geos[0],filters.subscriptions[0],
                filters.routes[0]
            ]
        
        if(filterBarArr.length>0){
            // Return this 
        return(
            //For each active filter, return a Filter Pill Box Component mapped to the filter
            filterBarArr.map(filter =>{
                if(filter!==undefined){
                    return <FilterPillBox key={filter.index} data={filter} />
                }
            })
        )
    }
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
    console.log('Active Filters: ', state.activeFilters);
    return {filters: state.filters, activeFilters: state.activeFilters};
  }
  
  export default connect(mapStateToProps,actions) (FilterBox)