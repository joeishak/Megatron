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
            showContainer: this.props.showContainer,
            activeFil: this.props.activeFilters
        }
        //Binding functions to this

    }

    componentDidUpdate(prevProps){
        if(prevProps.availableFilters !== this.props.availableFilters || prevProps.activeFilters !== this.props.activeFilters ){
            this.props.getQueryFilteredIBEData(this.props.activeFilters,this.props.availableFilters);
            this.props.getQueryFilteredJourneyIBEData(this.props.activeFilters,this.props.availableFilters);
        }
    }
  
    render(){
        const {availableFilters} = this.props;
   
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
                            <KendoDropDownList  type='quarters'
                            defaultItem={this.props.activeFilters.quarters} data={this.props.availableFilters.quarters}/>

                           
                        </div> 
       
                       <div className={quarterFilterContainer} >
                            <p> Geo</p>
                            <KendoDropDownList type='geos' defaultItem={this.props.activeFilters.geos} 
                            data={availableFilters.geos}/>
                        </div>
             
                        <div className={quarterFilterContainer} >
                            <p> Product Name</p>
                            <KendoDropDownList  
                                type='products' 
                                defaultItem={this.props.activeFilters.products} 
                                data={availableFilters.products}/>
                        </div>
             
                        <div className={quarterFilterContainer} >
                            <p> Subscription Offering</p>
                            <KendoDropDownList  
                                type='subscriptions' 
                                defaultItem={this.props.activeFilters.subscriptions}
                                data={availableFilters.subscriptionOfferings} />
                        </div>
                
                        <div className={quarterFilterContainer} >
                            <p> Market Area</p>
                            <KendoDropDownList 
                                type='markets' 
                                defaultItem={this.props.activeFilters.markets} 
                                data={availableFilters.marketAreas} />
                        </div>
               
                        <div className={quarterFilterContainer} >
                            <p>  Route To Market</p>
                            <KendoDropDownList 
                                type='routes' 
                                defaultItem={this.props.activeFilters.routes} 
                                data={availableFilters.routeToMarkets}/>
                        </div>
            
                        <div className={quarterFilterContainer} >
                            <p> Segment</p>

                            <KendoDropDownList  
                                type='segments' 
                                defaultItem={this.props.activeFilters.segments}
                                data={availableFilters.segments}/>
                        </div>
                
                        <div className={quarterFilterContainer + ' default'} >
                            
                            <input type='checkbox' /><span> Make these my default settings</span>
                        </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    // console.log(state.activeFilters)
    return {availableFilters: state.availableFilters,activeFilters: state.activeFilters};
  }
  
  export default connect(mapStateToProps,actions) (CustomDropDownPanel)