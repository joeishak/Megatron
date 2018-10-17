// Npm Modules
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid} from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
// Custom Components and Styles
import  * as actions from 'actions';
import styles from './TopSummaryBox.css'
import KendoDonutChart from '../KendoDonutChart/KendoDonutChart';
import ButtomSummaryBox from 'components/BottomSummaryBox/BottomSummaryBox';
import KendoBulletChart from '../KendoBullet/KendoBullet';
import * as _ from 'lodash';
import commentIconOn from '../../assets/images/comments-on.svg';
import commentIconOff from '../../assets/images/comments-off.svg';
import JourneySquare from 'components/JourneySummary/JourneySquare.jsx';
import FinancialSquareList from 'components/FinancialSummary/FinancialSquareList.jsx';
import JourneySummary from 'components/JourneySummary/JourneySummary.jsx';
import FinancialSummary from 'components/FinancialSummary/FinancialSummary.jsx';
import SummaryHeader from 'components/SummaryHeader/SummaryHeader.jsx'
import SummaryHOC from '../SummaryHOC.js';
import { spawn } from 'child_process';
class TopSummaryBox extends Component {

    //When the component is constructed
    constructor(props){
        super(props);
        // Initialize state
        this.state = { 
            show: true,
            isToggleButtonChecked: this.props.switchFilter,
            summaryTitle: 'Financials Summary',
            activeJourneyCard: 'journeyCard1',
            activeCard:'card1',
            // data: (this.props.switchFilter === true) ? this.props.appData.journey: this.props.finData,
            components:{
                squares: undefined,
                stats: undefined,
                multichart: undefined
            }

        };
        //Binding functions to this
        this.getSummaryContent = this.getSummaryContent.bind(this);
    }

 

    // //Event handler that sets the active card
    // selectedCard (e, index) {
    //     e.preventDefault();
    //     let squareItem = this.props.finData[index -1]
    //     // Finds the passed props for the right card to set as active
    //     this.setState({activeCard: squareItem.css[0]});
    //     this.props.updateFinancialSummaryActiveCard(squareItem);
    //     // title 'Net New ARR'
    //     const selectedHeader = squareItem.header;
    // }

    // // Event handler when the Journey Card is active and clicked
    // onJourneyCardClicked (e, index) {
    //     e.preventDefault();
    //     let squareItem = this.props.journeyData[index -1];
    //     // Finds the passed props for the right card to set as active
    //     this.setState({activeJourneyCard: squareItem.css[0]})
    //     this.props.updateJourneySummaryActiveCard(squareItem);
    //     // title 'Net New ARR'
    //     const selectedTitle = squareItem.title;
    //     const selectedSubtitle = squareItem.header;
    // }
    // //   Event handler for toggle change 'Financials' and 'Joruneys'
    // onToggleButtonChanged = (e) => {
    //     let toggleState = this.state.isToggleButtonChecked;
    //     this.setState({isToggleButtonChecked: !toggleState},()=>{
    //         this.props.updateSwitchFilterValue(this.state.isToggleButtonChecked);
    //     });
    // }
    //Function to check state and return either Financials summary or Journeys Summary
    // getSummaryTitle() {
    //     if (this.props.switchFilter) {
    //         return 'Journeys Summary'
    //     } else {
    //         return 'Financials Summary'
    //     }
    // }

    // // Need to Refactor
    // getColor(value, target, type, header) {
    //     let retColor = '';
    //     if(type === 'financial' ) {
    //         if (value >= target) {
    //             retColor = 'selectedCardHeaderGreen';
    //         } else {
    //             retColor = 'selectedCardHeaderRed';
    //         }
    //     } else if (type === 'journey' && header === false) {
    //         if (value >= target) {
    //             retColor = 'journeyBoxAlertGreen';
    //         } else {
    //             retColor = 'journeyBoxAlert';
    //         }
    //     } else if (type === 'journey' && header !== false) {
    //         if (value >= target) {
    //             retColor = 'journeyHeaderAlertGreen';
    //         } else {
    //             retColor = 'journeyHeaderAlert';
    //         }
    //     } else if (type === 'donut') {
    //         if (value < target) {
    //             retColor = '#FF0000';
    //         } else {
    //             retColor = '#0DB16E';
    //         }
    //     }

    //     return retColor;
    // }

    // renderDollar(index) {
    //     let renderDollar = '';
    //     if (index === 1 || index === 2 ) { renderDollar = '' }
    //     return renderDollar;
    // }

    // renderUnits(value){
    //     let returnValue = '';
    //     // console.log(value);
    //     value = parseInt(value)
    //     if (value > 1000 && value <= 999999) {
    //         value = (value/1000).toFixed(1);
    //         returnValue =  value.toString() + 'K';
    //     } else if (value > 1000000 && value <= 999999999) {
    //         value = (value/1000000).toFixed(1);
    //         returnValue =  value.toString() + 'M';
    //         // returnValue = (value.toString() === '0.0') ? (value.toString() + 'K' : value.toString() + 'M'
    //     } else if (value > 1000000000 && value <= 999999999999) {
    //         value = (value/1000000000).toFixed(1);
    //         returnValue =  value.toString() + 'B';
    //     } else if (value > 1000000000 && value <= 999999999999999) {
    //         value = (parseInt(value)/1000000000000).toFixed(1);
    //         returnValue = value.toString() + 'T';
    //     } else {
    //         return  value.toString();
    //     }
    //     return returnValue;
    // }
    // renderM(index) {
    //     let renderM = '';
    //     if (index === 1 || index === 2 ) { renderM = 'M' } else {
    //         renderM = '%'
    //     }
    //     return renderM;
    // }

    // renderDollarValue(value) {
    //     let returnValue = '';
    //     value = parseInt(value)
    //     if (value > 1000 && value <= 999999) {
    //         value = (value/1000).toFixed(1);
    //         returnValue = '$' + value.toString() + 'K';
    //     } else if (value > 1000000 && value <= 999999999) {
    //         value = (value/1000000).toFixed(1);
    //         returnValue = '$' +  value.toString() + 'M';
    //         // returnValue = (value.toString() === '0.0') ? (value.toString() + 'K' : value.toString() + 'M'
    //     } else if (value > 1000000000 && value <= 999999999999) {
    //         value = (value/1000000000).toFixed(1);
    //         returnValue ='$' +  value.toString() + 'B';
    //     } else if (value > 1000000000 && value <= 999999999999999) {
    //         value = (parseInt(value)/1000000000000).toFixed(1);
    //         returnValue ='$' +  value.toString() + 'T';
    //     } else {
    //         return '$' + value.toString();
    //     }
    //     return returnValue;
    // }

    // onCommentIconClick = () => {
    //         this.props.showCommentBox();
    // }

    // formatPercentage(value) {
    //     return (value.toFixed(1) / 100).toFixed(2);
    // }
   
    getSummaryContent(){
        const { activeCard } = this.state;
        const { activeJourneyCard } = this.state;
         if(!this.props.switchFilter){
            return (    
                <FinancialSummary
                onCommentIconClick={this.onCommentIconClick}
                toggleCommentary={this.props.toggleCommentary} 
                activeCard={activeCard} 
                data = {this.props.finData} 
                enableChart1Arrow={this.enableChart1Arrow} 
                selectedCard={(e,index) =>{this.selectedCard(e,index)}} />
                   
            )  
        } else if(this.props.switchFilter === true) {
            return(
            <JourneySummary
                    data={this.props.journeyData}
                  activeJourneyCard = {activeJourneyCard}
                  getColor={this.getColor}
                  onJourneyCardClicked={(e,index) => {this.onJourneyCardClicked(e,index)}}
                  toggleCommentary = {this.props.toggleCommentary}
                  onCommentIconClick={this.onCommentIconClick} />
            )
        }
    }
 

    render(){

        var SummaryBoxStyles = classNames({
            summaryBox: true,
            summaryBox_financial: !this.props.switchFilter ? false: true
        });


        return(
            
            <Grid className={SummaryBoxStyles} fluid>
                <SummaryHeader summaryTitle = {this.getSummaryTitle()} isToggleButtonChecked={this.props.switchFilter} onToggleButtonChanged={this.onToggleButtonChanged} />
                {this.getSummaryContent()}
                
            </Grid>
        )
    }
}


export default connect(null,actions)(SummaryHOC(TopSummaryBox))