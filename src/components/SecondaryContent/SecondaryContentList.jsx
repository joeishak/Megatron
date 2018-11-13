import React, { Component } from 'react';
import SecondarySquares from './SecondarySquares';
class SecondaryContentList extends Component {

    shouldComponentUpdate(nextProps){
        console.log('secondary', this.props.primaryDataCategory);
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
                <p className="primaryCateogryNav" onClick={e => console.log(e, 'go back click')}>{`<`}</p>
                <div className="primaryCategoryTitle">{this.props.primaryDataCategory}</div>
            </div> ): null;
        
        const renderStyle = isMobileAndTablet ? { height:'100%', border: '1px solid red'} : { height:'100%', border: '1px solid red', marginTop: '30px'};
        
        return(
            <div style={renderStyle}> 
                {/* Primary Category Title !! Not Viewable on Desktop View */}
                {navigationTitle}
                {this.props.data.map(item => {
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
                
                })}
                <div className="">

                </div>
            </div>
        )
    }
}

export default (SecondaryContentList)