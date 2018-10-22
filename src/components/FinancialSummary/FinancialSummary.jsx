import React, { Component } from 'react';
import {connect} from 'react-redux';
import  * as actions from 'actions';

import ReactDOM from 'react-dom';
import FinancialSquareList from 'components/FinancialSummary/FinancialSquareList.jsx'
import ButtomSummaryBox from 'components/BottomSummaryBox/BottomSummaryBox';
import styles from './FinancialSummary.css';
import {Grid} from 'react-bootstrap';
import SummaryHeader from 'components/SummaryHeader/SummaryHeader.jsx'
import SummaryHOC from 'components/SummaryHOC.js';

import classNames from 'classnames';
class FinancialSummary extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeCard:'card1'

        }
        this.selectedCard = this.selectedCard.bind(this);
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.data !== this.props.data){
            return true;
        } else if(nextState.activeCard !== this.state.activeCard){
            return true;
        }
        if(this.props.toggleCommentary!== nextProps.toggleCommentary){
            return true;
        }

        return false;
    }
    //Event handlers for each chart square to render the arrow
    enableChart1Arrow(event){
        this.props.handleSummaryClick(1);
    }
    //Event handler that sets the active card
    selectedCard (e, index) {
        e.preventDefault();
        let squareItem = this.props.data[index -1]
        // Finds the passed props for the right card to set as active
        this.setState({activeCard: squareItem.css[0]});
        this.props.updateFinancialSummaryActiveCard(squareItem);
        // title 'Net New ARR'
        const selectedHeader = squareItem.header;
    }
    render(){

        var SummaryBoxStyles = classNames({
            summaryBox: true,
            summaryBox_financial: !this.props.switchFilter ? false: true
        });

        return(

                <div className=' row ' >
                    <div style={{width:'100%'}}>
                        <FinancialSquareList 
                            onCommentIconClick={this.props.onCommentIconClick}
                            toggleCommentary={this.props.toggleCommentary} 
                            activeCard={this.state.activeCard} 
                            data = {this.props.data} 
                            enableChart={this.enableChart1Arrow} 
                            selectedCard={(e,index) =>{this.selectedCard(e,index)}} />
                        
                    </div>
                    <div style={{width:'100%'}} className='bottomSummaryContainer  '>
                        <ButtomSummaryBox chartHeight="400px" />
                    </div>
                </div>
            
       
        
        )
    }
}

export default connect(null,actions)(SummaryHOC(FinancialSummary))
