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

    renderFilterPills(){
        
    }
    changeFilterPanelStatus(){
        console.log('I been clicked');
        if(this.state.filterPanelIsOpen){
            this.setState({showSlide: false})
            this.setState({addNewFilterActive:false,closeNewFilterActive: true, filterPanelIsOpen: false,filterPanelIsClosed: true});

        } else{
            this.setState({addNewFilterActive:true,closeNewFilterActive: false,filterPanelIsOpen: true, filterPanelIsClosed: false,showSlide: true});

           
        }
    }
    removeFilter(){
        console.log('removing filter');
    }
    render(){
        const show =  this.state.showSlide  ;
        const expandChildren = show ? (
            <div className="content">
              <CSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={100}
                        transitionEnter={false} 
                        transitionLeave={true}>
                            <div className="quarterFilterContainer" >
                                <p> Quarter</p>
                                <KendoDropDownList />
                            </div>
                    </CSSTransitionGroup>
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={300}
                        transitionEnter={false} 
                        transitionLeave={false}>
                            <div className="quarterFilterContainer" >
                                <p> Geo</p>
                                <KendoDropDownList />
                            </div>
                    </CSSTransitionGroup>
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnter={false} 
                        transitionLeave={false}>
                            <div className="quarterFilterContainer" >
                                <p> Product Name</p>
                                <KendoDropDownList />
                            </div>
                    </CSSTransitionGroup>
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={700}
                        transitionEnter={false} 
                        transitionLeave={false}>
                            <div className="quarterFilterContainer" >
                                <p> Subscription Offering</p>
                                <KendoDropDownList />
                            </div>
                    </CSSTransitionGroup>
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={900}
                        transitionEnter={false} 
                        transitionLeave={false}>
                            <div className="quarterFilterContainer" >
                                <p> Market Area</p>
                                <KendoDropDownList />
                            </div>
                    </CSSTransitionGroup>
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={1100}
                        transitionEnter={false} 
                        transitionLeave={false}>
                            <div className="quarterFilterContainer" >
                                <p>  Route To Market</p>
                                <KendoDropDownList />
                            </div>
                    </CSSTransitionGroup>
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={1300}
                        transitionEnter={false} 
                        transitionLeave={false}>
                            <div className="quarterFilterContainer" >
                                <p> Segment</p>
                                <KendoDropDownList />
                            </div>
                    </CSSTransitionGroup>
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={1500}
                        transitionEnter={false} 
                        transitionLeave={true}>
                            <div className="quarterFilterContainer" >
                            <p> Make these my default settings</p>
                            <input type='checkbox' />
                            </div>
                    </CSSTransitionGroup>
            </div>
        ) : null;//End Children


        var newFilterButtonClass = classNames({
            newFilterButton: true,
            'newFilterButton-selected': this.state.addNewFilterActive,
            'newFilterButton-close': this.state.closeNewFilterActive
          });
        var panelDropDownContainer = classNames({
            panelDropDownContainer: true,
            'panelBarContainer-open': this.state.filterPanelIsOpen,
            'panelBarContainer-closed': this.state.filterPanelIsClosed

        })
        return(

            <div className="filterContainer">
                
               {/* {this.renderFilterPills} */}

                <div className="newFilterDiv"> 
                    <span className="newFilterText" >Add Filter</span> 
                    <div  className={newFilterButtonClass} onClick={this.changeFilterPanelStatus}>+</div>
                </div>
                <div className={panelDropDownContainer} >
                   
                    {expandChildren}

                </div>

                
                 {/* <KendoMultiSelect className="multiSelect" />  */}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {filters: state.filters};
  }
  
  export default connect(mapStateToProps,actions) (FilterBox)