import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Grid} from 'react-bootstrap';
import SummaryHeader from 'components/SummaryHeader/SummaryHeader.jsx'
import classNames from 'classnames';

import * as actions from '../actions';
export default ChildComponent => {
    class ComposedComponent extends Component {
     
        componentDidMount(){
            this.props.getQueryFilteredIBEData(this.props.activeFilters,this.props.availableFilters);
            this.props.getQueryFilteredJourneyIBEData(this.props.activeFilters,this.props.availableFilters);
        }
        
        componentDidUpdate(prevProps){

            // If the old available filters change or the active filters change
            // Call for new data with the filters
            if(prevProps.availableFilters !== this.props.availableFilters || prevProps.activeFilters !== this.props.activeFilters ){
                this.props.getQueryFilteredIBEData(this.props.activeFilters, this.props.availableFilters);
                this.props.getQueryFilteredJourneyIBEData(this.props.activeFilters, this.props.availableFilters);
            }

            //If the user switches between summaries
            // do the following
            if(prevProps.switchFilter !== this.props.switchFilter){
                    //If the user switches to financials
                if(this.props.switchFilter === false){
                    //update the active card to the first Financial square
                    this.props.generateFilterData('fin');
                    this.props.updateFinancialSummaryActiveCard(this.props.finData[0]);
                } else  {
                    //uupdate the active card to the first Journey Square
                    this.props.generateFilterData('journ');

                    this.props.updateJourneySummaryActiveCard(this.props.journeyData[0]);
                }
            }
            //If the preferences change && the user is on Financials
            if(this.props.preferences !== prevProps.preferences && this.props.switchFilter === false && this.props.finData.length !== 0 ){
                // Update the active card to the Financial one chosen in data preferences
                this.props.updateFinancialSummaryActiveCard( this.props.finData[parseInt(this.props.preferences.defaultFinKpi)-1]);
            }
            //If the preferences change && the user is on Journeys

            if(this.props.preferences !== prevProps.preferences && this.props.switchFilter === true  && this.props.journeyData.length !== 0){
                // Update the active card to the Jourey Onne chosen in data preferences
                this.props.updateJourneySummaryActiveCard(this.props.journeyData[parseInt(this.props.preferences.defaultJournKpi)-1]);
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
                    if(this.props.switchFilter === true){
                        this.props.updateJourneySummaryActiveCard(this.props.finData[0]);
                    } else {
                        this.props.updateFinancialSummaryActiveCard(this.props.journeyData[0]);
                    }

                this.props.updateSwitchFilterValue(!this.props.switchFilter);

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
            // console.log('Default KPI from Sum HOC:',this.props.preferences.defaultFinKpi)
            if(this.props.switchFilter){
                 return (
                    <ChildComponent {...this.props}   
                    data={this.props.journeyData}
                    toggleCommentary = {this.props.toggleCommentary}
                    activeCard = {this.props.activeSummarySquare}
                    onCommentIconClick={this.onCommentIconClick}
                    defaultKpi = {this.props.preferences.defaultJournKpi}

                   />
                 )
            } else {
                return (
                    <ChildComponent {...this.props}   
                    onCommentIconClick={this.onCommentIconClick}
                    toggleCommentary={this.props.toggleCommentary} 
                    data = {this.props.finData} 
                    defaultKpi = {this.props.preferences.defaultFinKpi}
                    activeCard = {this.props.activeSummarySquare}

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
        // console.log(state);
        return { 
            filters: state.filters, /* Not sure if needed */
            switchFilter: state.switchFilter, /* WE can remove once completed new design */
            appData: state.adobeData, 
            finData: state.ibeData,
            toggleCommentary: state.toggleCommentaryBox,
            activeFilters: state.activeFilters,
            availableFilters: state.availableFilters,
            activeSummaryIndex: state.activeSummarySquare.index ,
            journeyData: state.journeyData,
            preferences: state.preferences,
            commentBoxIsOpen: state.commentBoxIsOpen,
            user: state.user

        }
    }
    return connect(mapStateToProps) (ComposedComponent);
}