import React, { Component } from 'react';
import SecondarySquares from './SecondarySquares';
import Playground from '../MobileComponents/Playground/Playground';
import HorizontalSlider from '../MobileComponents/HorizontalSlider/HorizontalSlider.jsx';

class SecondaryContentList extends Component {

    shouldComponentUpdate(nextProps){

        if(this.props.toggleCommentary !== nextProps.toggleCommentary){
            return true;
        }
        if(this.props.data !== nextProps.data){
            return true;
        }
        if(this.props.activeJourneyCard !== nextProps.activeJourneyCard){
            return true;
        }
        if (this.props.activePrimary !== nextProps.activePrimary){
            return true;
        }
        if (this.props.deviceType !== nextProps.deviceType) {
            return true;
        }
        return false;
    }
    render(){


        const isMobileAndTablet = this.props.deviceType.includes('mobile') || this.props.deviceType.includes('tablet');
        const navigationTitle = isMobileAndTablet ? (
            <div className="primaryDataCategoryContainer">
                <p className="primaryCateogryNav" onClick={(e) => this.props.updateMobileView(e,'primary')}>{`<`}</p>
                <div className="primaryCategoryTitle">{this.props.primaryDataCategory}</div>
            </div> ): null;

        const secondaryContentTop = this.props.data.map(item => {
            let isActive = parseInt(this.props.activeJourneyCard) === item.index ? true : false;
            if(this.props.activePrimary === item.category){
                return (
                    <SecondarySquares 
                        deviceType={this.props.deviceType}
                        key={item.index}
                        item={item}
                        activeJourneyCard = {isActive}
                        onJourneyCardClicked={(e,index) => {this.props.onJourneyCardClicked(e,index)}}
                        toggleCommentary = {this.props.toggleCommentary}
                        onCommentIconClick={this.props.onCommentIconClick}
                    />
                );
            } else return null;
        
        });

        const secondaryTopSlider = <HorizontalSlider 
            activeJourneyCard={this.props.activeJourneyCard}
            data={this.props.data} activePrimary={this.props.activePrimary} onCardClicked={this.props.onJourneyCardClicked}/>
   
        
        const renderStyle = isMobileAndTablet ? { height:'100%'} : { height:'100%', marginTop: '30px'};
        const secondaryContentBottom = isMobileAndTablet ? <Playground></Playground>  : null;
        return(
            <div style={renderStyle}> 
                {/* Primary Category Title !! Not Viewable on Desktop View */}
                {navigationTitle}
                {/* {secondaryContentTop} */}
                {secondaryTopSlider}
                <div className="secondaryContentBottom">
                   {secondaryContentBottom}
                </div>
            </div>
        )
    }
}

export default (SecondaryContentList)