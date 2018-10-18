import React, { Component } from 'react';
import JourneySquare from './JourneySquare.jsx';
class JourneySquareList extends Component {
    render(){
        return(
            this.props.data.map(item => {
                return (
                    <JourneySquare 
                    key={item.index}
                    item={item}
                    activeJourneyCard = {this.props.activeJourneyCard}
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

export default (JourneySquareList)