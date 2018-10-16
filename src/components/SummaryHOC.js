import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
export default ChildComponent => {
    class ComposedComponent extends Component {
        componentDidUpdate(prevProps){
            if(prevProps.availableFilters !== this.props.availableFilters || prevProps.activeFilters !== this.props.activeFilters ){
                this.props.getQueryFilteredIBEData(this.props.activeFilters,this.props.availableFilters);
                this.props.getQueryFilteredJourneyIBEData(this.props.activeFilters,this.props.availableFilters);
            }
            if(prevProps.switchFilter !== this.props.switchFilter){
                if(this.props.switchFilter=== false){
                    this.props.updateFinancialSummaryActiveCard(this.props.finData[0])
                } else{
                    this.props.updateJourneySummaryActiveCard(this.props.journeyData[0]);
                }
            }
            if(this.props.finData !== prevProps.finData && this.props.switchFilter === false){
                this.props.updateFinancialSummaryActiveCard(this.props.finData[this.props.activeSummaryIndex-1])
            }
            if(this.props.journeyData !== prevProps.journeyData && this.props.switchFilter === true){
                this.props.updateJourneySummaryActiveCard(this.props.journeyData[this.props.activeSummaryIndex-1])
            }
        }
    
        shouldComponentUpdate(nextProps){
            if(this.props.finData !== nextProps.finData && this.props.switchFilter === false){
                return true;
            }  else if(this.props.journeyData !== nextProps.journeyData && this.props.switchFilter === true){
                return true;
            }
             else if(this.props.activeFilters != nextProps.activeFilters){
                this.props.getQueryFilteredIBEData(nextProps.activeFilters,this.props.availableFilters);
                this.props.getQueryFilteredJourneyIBEData(nextProps.activeFilters,this.props.availableFilters);
                return false;
            }
            else if(this.toggleCommentary !== nextProps.toggleCommentary){
                return true;
            } else return false;
    
            return false;
        }
        render(){
            return <ChildComponent {...this.props}/>;
        }
    }

    function mapStateToProps(state) {
        return { 
            filters: state.filters, 
            switchFilter:state.switchFilter, 
            appData: state.adobeData, 
            finData: state.ibeData,
            toggleCommentary: state.toggleCommentaryBox,
            activeFilters: state.activeFilters,
            availableFilters: state.availableFilters,
            activeSummaryIndex: state.activeSummarySquare.index ,
            journeyData: state.journeyData
        }
    }
    return connect(mapStateToProps) (ComposedComponent);
}