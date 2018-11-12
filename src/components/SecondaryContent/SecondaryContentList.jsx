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
        else if (this.props.activePrimary !== nextProps.activePrimary){
            return true;
        }

        return false;
    }
    render(){
        return(
            <div style={{marginTop: '30px'}}> 
            {this.props.data.map(item => {
                let isActive = parseInt(this.props.activeJourneyCard) === item.index ? true : false;
                if(this.props.activePrimary === item.category){
                    return (
                        <SecondarySquares 
                        key={item.index}
                        item={item}
                        activeJourneyCard = {isActive}
                        onJourneyCardClicked={(e,index) => {this.props.onJourneyCardClicked(e,index)}}
                        toggleCommentary = {this.props.toggleCommentary}
                        onCommentIconClick={this.props.onCommentIconClick}
                        />
              
                    );
                } else return null;
               
            })}
            </div>
        )
    }
}

export default (SecondaryContentList)