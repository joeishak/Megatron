import React, { Component } from 'react';
import SecondarySquares from './SecondarySquares';
class SecondaryContentList extends Component {
    shouldComponentUpdate(nextProps){
        if(this.props.toggleCommentary !== nextProps.toggleCommentary){
            return true;
        }
        else if(this.props.data !== nextProps.data){
            return true;
        }
        else if(this.props.activeJourneyCard !== nextProps.activeJourneyCard){
            return true;
        }

        return false;
    }
    render(){
        return(
            this.props.data.map(item => {
                let isActive = parseInt(this.props.activeJourneyCard) === item.index ? true : false;

                return (
                    <SecondarySquares 
                    key={item.index}
                    item={item}
                    activeJourneyCard = {isActive}
                    getColor={this.props.getColor}
                    renderUnits={  this.props.renderUnits}
                    formatPercentage = {this.props.formatPercentage}
                    onJourneyCardClicked={(e,index) => {this.props.onJourneyCardClicked(e,index)}}
                    toggleCommentary = {this.props.toggleCommentary}
                    onCommentIconClick={this.props.onCommentIconClick}
                    />
          
                );
            })
        )
    }
}

export default (SecondaryContentList)