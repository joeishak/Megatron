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

    findFilter = (activeFilters, category) => {

        for (let i = 0; i < activeFilters.length; i++) {
            switch(category) {
                case 'geos':
                    const geoIndex = activeFilters.findIndex(x => x.category === category);

                    return [activeFilters[geoIndex]];
                    break;
                case 'marketAreas':
                    const marketAreasIndex = activeFilters.findIndex(x => x.category === category);
                    
                    return [activeFilters[marketAreasIndex]];
                    break;
                case 'productNames':
                    const productNamesIndex = activeFilters.findIndex(x => x.category === category);
      
                    return [activeFilters[productNamesIndex]];
                    break;
                case 'quarters':
                    const quartersIndex = activeFilters.findIndex(x => x.category === category);
      
                    return [activeFilters[quartersIndex]];
                    break;
                case 'routeToMarkets':
                    const routeToMarketsIndex = activeFilters.findIndex(x => x.category === category);
 
                    return [activeFilters[routeToMarketsIndex]];
                    break;
                case 'segments':
                    const segmentsIndex = activeFilters.findIndex(x => x.category === category);
     
                    return [activeFilters[segmentsIndex]];
                    break;
                case 'subscriptionOfferings':
                    const subscriptionOfferingsIndex = activeFilters.findIndex(x => x.category === category);

                    return [activeFilters[subscriptionOfferingsIndex]];
                    break;
            }
        }
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
                            <KendoDropDownList   data={availableFilters.quarters} defaultValue={this.findFilter(this.props.activeFilters, 'quarters')}/>
                        </div> 
       
                       <div className={quarterFilterContainer} >
                            <p> Geo</p>
                            <KendoDropDownList  data={availableFilters.geos} defaultValue={this.findFilter(this.props.activeFilters, 'geos')}/>
                        </div>
             
                        <div className={quarterFilterContainer} >
                            <p> Product Name</p>
                            <KendoDropDownList  data={availableFilters.products} defaultValue={this.findFilter(this.props.activeFilters, 'productNames')}/>
                        </div>
             
                        <div className={quarterFilterContainer} >
                            <p> Subscription Offering</p>
                            <KendoDropDownList  data={availableFilters.subscriptionOfferings} defaultValue={this.findFilter(this.props.activeFilters, 'subscriptionOfferings')}/>
                        </div>
                
                        <div className={quarterFilterContainer} >
                            <p> Market Area</p>
                            <KendoDropDownList  data={availableFilters.marketAreas} defaultValue={this.findFilter(this.props.activeFilters, 'marketAreas')}/>
                        </div>
               
                        <div className={quarterFilterContainer} >
                            <p>  Route To Market</p>
                            <KendoDropDownList data={availableFilters.routeToMarkets} defaultValue={this.findFilter(this.props.activeFilters, 'routeToMarkets')}/>
                        </div>
            
                        <div className={quarterFilterContainer} >
                            <p> Segment</p>
                            <KendoDropDownList  data={availableFilters.segments} defaultValue={this.findFilter(this.props.activeFilters, 'segments')}/>
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
    return {availableFilters: state.availableFilters, activeFilters: state.activeFilters};
  }
  
  export default connect(mapStateToProps,actions) (CustomDropDownPanel)