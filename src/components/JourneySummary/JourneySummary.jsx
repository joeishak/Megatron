import React, { Component } from 'react';
import JourneySquareList from 'components/JourneySummary/JourneySquareList.jsx';
import ButtomSummaryBox from 'components/BottomSummaryBox/BottomSummaryBox';
import {connect} from 'react-redux';
import  * as actions from 'actions';
import SummaryHOC from 'components/SummaryHOC.js';

class JourneySummary extends Component {

    constructor(props){
        super(props);
        this.state ={
            activeJourneyCard: undefined 
        }
        this.onJourneyCardClicked = this.onJourneyCardClicked.bind(this);
    }

    componentDidUpdate(prevProps){
        
    //    if(prevProps.defaultKpi !== this.props.defaultKpi){
    //        this.setState({activeCard: `'${this.props.defaultKpi}'`});
    //        this.props.updateJourneySummaryActiveCard
    //    }
    }
    shouldComponentUpdate(nextProps,nextState){

        if(nextProps.data !== this.props.data){
            return true;
        } 
        if(nextState.activeJourneyCard !== this.state.activeJourneyCard){
            return true;
        }
        if(this.props.toggleCommentary!== nextProps.toggleCommentary){
            return true;
        }
        if(nextProps.defaultKpi !== this.props.defaultKpi ){
            return true;
        }

        return false;

    }
    formatPercentage(value) {
        // console.log(value);
        return (value * 100).toFixed(2);
    }

     // Event handler when the Journey Card is active and clicked
     onJourneyCardClicked (e, square) {
        e.preventDefault();
        let squareItem =square;
        // Finds the passed props for the right card to set as active
        this.setState({activeJourneyCard: squareItem.css[0]})
        this.props.updateJourneySummaryActiveCard(squareItem);
        // title 'Net New ARR'
 
    }

     // Need to Refactor
     getColor(value, target, type, header) {
        let retColor = '';
        if(type === 'financial' ) {
            if (value >= target) {
                retColor = 'selectedCardHeaderGreen';
            } else {
                retColor = 'selectedCardHeaderRed';
            }
        } else if (type === 'journey' && header === false) {
            if (value >= target) {
                retColor = 'journeyBoxAlertGreen';
            } else {
                retColor = 'journeyBoxAlert';
            }
        } else if (type === 'journey' && header !== false) {
            if (value >= target) {
                retColor = 'journeyHeaderAlertGreen';
            } else {
                retColor = 'journeyHeaderAlert';
            }
        } else if (type === 'donut') {
            if (value < target) {
                retColor = '#FF0000';
            } else {
                retColor = '#0DB16E';
            }
        }

        return retColor;
    }
    renderUnits(value){
        let returnValue = '';
        // console.log(value);
        value = parseInt(value)
        if (value > 1000 && value <= 999999) {
            value = (value/1000).toFixed(1);
            returnValue =  value.toString() + 'K';
        } else if (value > 1000000 && value <= 999999999) {
            value = (value/1000000).toFixed(1);
            returnValue =  value.toString() + 'M';
            // returnValue = (value.toString() === '0.0') ? (value.toString() + 'K' : value.toString() + 'M'
        } else if (value > 1000000000 && value <= 999999999999) {
            value = (value/1000000000).toFixed(1);
            returnValue =  value.toString() + 'B';
        } else if (value > 1000000000 && value <= 999999999999999) {
            value = (parseInt(value)/1000000000000).toFixed(1);
            returnValue = value.toString() + 'T';
        } else {
            return  value.toString();
        }
        return returnValue;
    }
    render(){
        return(
            <div className="row" style={{height:'1024px'}}>
            <div className="col-lg-3 col-md-4" style={{height:'100%'}}>
            <JourneySquareList
              data={this.props.data}
              activeJourneyCard = {this.state.activeJourneyCard || this.props.defaultKpi}
              getColor={this.getColor}
              renderUnits={  this.renderUnits}
              formatPercentage = {this.formatPercentage}
              onJourneyCardClicked={this.onJourneyCardClicked}
              toggleCommentary = {this.props.toggleCommentary}
              onCommentIconClick={this.props.onCommentIconClick}
            />
            </div>
            <div className="col-lg-9 col-md-8">
                <ButtomSummaryBox chartHeight="450px"/>
            </div>
        </div>
        )
    }
}

export default connect(null,actions)(SummaryHOC(JourneySummary))
