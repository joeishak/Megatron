import React, { Component } from 'react';
import styles from './FinancialSummary.css';
import FinancialSquare from './FinancialSquare.jsx'

class FinancialList extends Component {

    shouldComponentUpdate(nextProps){
        if(this.props.toggleCommentary !== nextProps.toggleCommentary){
            return true;
        }
        else if(this.props.data !== nextProps.data){
            return true;
        }
        else if(this.props.activeCard !== nextProps.activeCard){
            return true;
        }

        return false;
    }
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