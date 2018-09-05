// Npm Modules
import React, { Component } from 'react';
import {connect } from 'react-redux';
import  classNames from 'classnames';
// Custom Components and Styles
import * as actions from 'actions';
import styles from './CustomDropDownPanel.css';
import KendoDropDownList from '../KendoDropDownList/KendoDropDownList'

class CustomDropDownPanel extends Component {
    //When the component is constructed
    constructor(props){
        super(props);
        // Initialize state
        this.state= {
            isOpen: false,
            isClosed: true,
            showSlide: this.props.showSlide,
            showContainer: this.props.showContainer
        }
        //Binding functions to this
    }

   
    render(){
        const {availableFilters} = this.props;
       const show = this.props.showSlide;
   
        var panelDropDownContainer = classNames({
            'panelDropDownContainer': true,
            'panelBarContainer-open': (this.props.showContainer)? true: false,
            'panelBarContainer-closed': (this.props.showContainer)? false: true

        });
        var quarterFilterContainer = classNames({
            'quarterFilterContainer': true,
            'quarterFilterContainer-open': (this.props.showContainer)? true: false,
            'quarterFilterContainer-closed': (this.props.showContainer)? false: true

        });
        return(
            <div className={panelDropDownContainer} >
                        <div className={quarterFilterContainer} >
                            <p> Quarter</p>
                            <KendoDropDownList   data={availableFilters.quarters}/>
                        </div> 
       
                       <div className={quarterFilterContainer} >
                            <p> Geo</p>
                            <KendoDropDownList  data={availableFilters.geos}/>
                        </div>
             
                        <div className={quarterFilterContainer} >
                            <p> Product Name</p>
                            <KendoDropDownList  data={availableFilters.products}/>
                        </div>
             
                        <div className={quarterFilterContainer} >
                            <p> Subscription Offering</p>
                            <KendoDropDownList  data={availableFilters.subscriptionOfferings} />
                        </div>
                
                        <div className={quarterFilterContainer} >
                            <p> Market Area</p>
                            <KendoDropDownList  data={availableFilters.marketAreas} />
                        </div>
               
                        <div className={quarterFilterContainer} >
                            <p>  Route To Market</p>
                            <KendoDropDownList data={availableFilters.routeToMarkets}/>
                        </div>
            
                        <div className={quarterFilterContainer} >
                            <p> Segment</p>
                            <KendoDropDownList  data={availableFilters.segments}/>
                        </div>
                
                        <div className={quarterFilterContainer + ' default'} >
                            
                            <input type='checkbox' /><span> Make these my default settings</span>
                        </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    // console.log(state.availableFilters)
    return {availableFilters: state.availableFilters};
  }
  
  export default connect(mapStateToProps,actions) (CustomDropDownPanel)