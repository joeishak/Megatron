import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './FinancialSummary.css';
import FinancialSquare from './FinancialSquare.jsx'

class FinancialList extends Component {
    render(){
        return(
            <div className="chartRow">
            { this.props.data.map(item=>{
                let isActive = this.props.activeCard === item.css[0] ? true : false;
              return (
                  <FinancialSquare onCommentIconClick={this.props.onCommentIconClick} toggleCommentary={this.props.toggleCommentary} enableChart={this.props.enableChart1Arrow} selectedCard={(e,index) =>{this.props.selectedCard(e,index)}} key={item.index} activeCard={isActive} item={item}>  </FinancialSquare>

        )
            })}
            </div>
        )
    }
}

export default (FinancialList)