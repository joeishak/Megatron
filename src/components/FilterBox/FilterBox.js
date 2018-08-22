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
import addIcon from './add-icon.svg';

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
            showSlide: false,
            filterButtonTitle: 'Add Filters'
        }

        this.changeFilterPanelStatus = this.changeFilterPanelStatus.bind(this);
        // this.renderFilterPills = this.renderFilterPills.bind(this);
    }

    componentDidUpdate(){
        // console.log(this.props.marketAreaFilter);

    }
    renderFilterPills(){
        console.log('rendering pill boxes');
        return(
            this.props.activeFilters.map(filter =>{
                return <FilterPillBox data={filter} />
            })
        )
        this.render();
    }
    changeFilterPanelStatus = () => {
        
        this.props.handleNewFilterClick();
        if(this.state.filterPanelIsOpen){
            this.setState({filterButtonTitle: 'Add Filters'})
            this.setState({showSlide: false})
            this.setState({addNewFilterActive:false,closeNewFilterActive: true, filterPanelIsOpen: false,filterPanelIsClosed: true});
        } else{
            this.setState({filterButtonTitle: 'Hide Filters'})
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

            <div className="filterContainer container-fluid">
                { this.renderFilterPills()}
                <div className="newFilterDiv"> 
                    <span className="newFilterText" >{this.state.filterButtonTitle}</span> 
                    <img src={addIcon} className={newFilterButtonClass} onClick={(e) => this.changeFilterPanelStatus(e)}></img>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {filters: state.filters, activeFilters: state.activeFilters};
  }
  
  export default connect(mapStateToProps,actions) (FilterBox)