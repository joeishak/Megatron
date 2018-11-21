import React, { Component } from 'react';
import SecondarySquares from './SecondarySquares';
import Playground from '../MobileComponents/Playground/Playground';
import HorizontalSlider from '../MobileComponents/HorizontalSlider/HorizontalSlider.jsx';
import {
    PRIMARY, SECONDARY, MOBILE, TABLET, LAPTOP
} from  '../../Constants/consts.js';
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
        if(this.props.mobileSecondaryIsActive !== nextProps.mobileSecondaryIsActive){
            return true;
        }
        return false;
    }

    updateView = (e) => {
        this.props.updateMobileView(PRIMARY, true);
        this.props.updateMobileView(SECONDARY, false);
    }

    render(){


        const isMobileAndTablet = this.props.deviceType.includes(MOBILE) || this.props.deviceType.includes(TABLET);
        
        const navigationTitle = (isMobileAndTablet===true && this.props.mobileSecondaryIsActive === true) ? (
            <div className="primaryDataCategoryContainer">
                <p className="primaryCateogryNav" onClick={(e) => this.updateView(e)}>{`<`}</p>
                <div className="primaryCategoryTitle">{this.props.primaryDataCategory}</div>
            </div> ): null;



        const secondaryContentTop = ((this.props.mobileSecondaryIsActive === true && isMobileAndTablet===true) || isMobileAndTablet === false) ? this.props.data.map(item => {
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
        
        }) :null;

        const secondaryTopSlider = <HorizontalSlider 
            activeJourneyCard={this.props.activeJourneyCard}
            data={this.props.data} activePrimary={this.props.activePrimary} onCardClicked={this.props.onJourneyCardClicked}/>
   
        
        const renderStyle = isMobileAndTablet ? { height:'100%'} : { height:'100%', marginTop: '30px'};
        const secondaryContentBottom = isMobileAndTablet && this.props.mobileSecondaryIsActive ? <Playground></Playground>  : null;
        return(
            <div style={renderStyle}> 
                {/* Primary Category Title !! Not Viewable on Desktop View */}
                {navigationTitle}  
                {secondaryContentTop}
                {/* {secondaryTopSlider} */}
                <div className="secondaryContentBottom">
                   {secondaryContentBottom}
                </div>
            </div>
        )
    }
}

export default (SecondaryContentList)