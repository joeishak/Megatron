import React, { Component } from 'react';
import styles from './PrimaryContent.css';
import PrimarySquare from './PrimarySquare.jsx'

class PrimaryContentList extends Component {

    componentDidUpdate(prevProps){
        console.log(this.props.activeCard)

    }
    shouldComponentUpdate(nextProps){
        if(this.props.toggleCommentary !== nextProps.toggleCommentary){
            return true;
        }
        if(this.props.data !== nextProps.data){
            return true;
        }
        if(this.props.activeCard !== nextProps.activeCard){
            return true;
        }
        return false;
    }
    render(){
        return(
            <div className="row primaryRow">

            { this.props.data.map(item=>{
                let isActive = parseInt(this.props.activeCard) === item.index ? true : false;
              return (
                  <PrimarySquare onCommentIconClick={this.props.onCommentIconClick} toggleCommentary={this.props.toggleCommentary} enableChart={this.props.enableChart1Arrow} selectedCard={(e,index) =>{this.props.selectedCard(e,index)}} key={item.index} activeCard={isActive} item={item}>  </PrimarySquare>
            )
            })}
            </div>
        )
    }
}

export default (PrimaryContentList)