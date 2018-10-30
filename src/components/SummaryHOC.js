import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid} from 'react-bootstrap';
import SummaryHeader from 'components/SummaryHeader/SummaryHeader.jsx'
import classNames from 'classnames';

import * as actions from '../actions';
export default ChildComponent => {
    class ComposedComponent extends Component {
     
        componentDidMount(){
            // this.props.getQueryFilteredIBEData(this.props.activeFilters,this.props.availableFilters);
            // this.props.getQueryFilteredJourneyIBEData(this.props.activeFilters,this.props.availableFilters);
        }
        componentDidUpdate(prevProps){
            if(prevProps.availableFilters !== this.props.availableFilters || prevProps.activeFilters !== this.props.activeFilters ){
                this.props.getQueryFilteredIBEData(this.props.activeFilters, this.props.availableFilters);
                this.props.getQueryFilteredJourneyIBEData(this.props.activeFilters, this.props.availableFilters);
                this.props.getFilteredJourneyQtdData(this.props.activeFilters, this.props.availableFilters);
            }
            // if(prevProps.switchFilter !== this.props.switchFilter){
            //     if(this.props.switchFilter === false){
            //         this.props.updateFinancialSummaryActiveCard(this.props.finData[0]);
            //     } else {
            //         this.props.updateJourneySummaryActiveCard(this.props.journeyData[0]);
            //     }
            // }
            // if(this.props.preferences.defaultFinKpi !== undefined && this.props.finData[0] !== undefined){
            //     console.log(this.props.finData[parseInt(this.props.preferences.defaultFinKpi)-1]);

            //     if(this.props.preferences.defaultSummaryView === 'Financial'){
            //         this.props.updateFinancialSummaryActiveCard(this.props.finData[parseInt(this.props.preferences.defaultFinKpi)-1])

            //     } else  if(this.props.preferences.defaultSummaryView === 'Journey'){
            //         this.props.updateFinancialSummaryActiveCard(this.props.journeyData[parseInt(this.props.preferences.defaultJournKpi)-1])

            //     }
            // }
            if(this.props.finData !== prevProps.finData && this.props.switchFilter === false){
                this.props.updateFinancialSummaryActiveCard(this.props.finData[0])
            }
            if(this.props.journeyData !== prevProps.journeyData && this.props.switchFilter === true){
                this.props.updateJourneySummaryActiveCard(this.props.journeyData[0])
            }
        }
    
        shouldComponentUpdate(nextProps){
           
            if(this.props.finData !== nextProps.finData && this.props.switchFilter === false){
                return true;
            }  
            else if(this.props.journeyData !== nextProps.journeyData && this.props.switchFilter === true){
                return true;
            }
            else if(this.props.toggleCommentary !== nextProps.toggleCommentary){
                return true;
            } else if ( this.props.preferences !== nextProps.preferences){
                return true;
            }
            

            return false;
        }

        onCommentIconClick = () => {
            this.props.showCommentBox();
        }

         //   Event handler for toggle change 'Financials' and 'Joruneys'
        onToggleButtonChanged = (e) => {
                this.props.updateSwitchFilterValue(!this.props.switchFilter);
                    if(!this.props.switchFilter === true){
                        this.props.updateJourneySummaryActiveCard(this.props.finData[0]);
                    } else {
                        this.props.updateFinancialSummaryActiveCard(this.props.journeyData[0]);
                    }
        }
        //Function to check state and return either Financials summary or Journeys Summary
        getSummaryTitle() {
            if (this.props.switchFilter) {
                return 'Journeys Summary'
            } else {
                return 'Financials Summary'
            }
        }
        getChild(){
            console.log('Summary HOC', this.props.preferences);
            if(this.props.switchFilter){
                 return (
                    <ChildComponent {...this.props}   
                    data={this.props.journeyData}
                    toggleCommentary = {this.props.toggleCommentary}
                    onCommentIconClick={this.onCommentIconClick}
                    defaultKpi = {this.props.preferences.defaultFinKpi}
                   />
                 )
            } else {
                return (
                    <ChildComponent {...this.props}   
                    onCommentIconClick={this.onCommentIconClick}
                    toggleCommentary={this.props.toggleCommentary} 
                    data = {this.props.finData} 
                   />
                )
            }
        }
        render(){
            var SummaryBoxStyles = classNames({
                summaryBox: true,
                summaryBox_financial: !this.props.switchFilter ? false: true
            });
            return  (
            <Grid className={SummaryBoxStyles} fluid>
                <SummaryHeader summaryTitle = {this.getSummaryTitle()} isToggleButtonChecked={this.props.switchFilter} onToggleButtonChanged={this.onToggleButtonChanged} />
                {this.getChild()}
            </Grid>
            )
        }
    }

    function mapStateToProps(state) {
        return { 
            filters: state.filters, 
            switchFilter: state.switchFilter, 
            appData: state.adobeData, 
            finData: state.ibeData,
            toggleCommentary: state.toggleCommentaryBox,
            activeFilters: state.activeFilters,
            availableFilters: state.availableFilters,
            activeSummaryIndex: state.activeSummarySquare.index ,
            journeyData: state.journeyData,
            preferences: state.preferences
        }
    }
    return connect(mapStateToProps) (ComposedComponent);
}