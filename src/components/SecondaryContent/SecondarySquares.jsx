import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import commentIconOn from '../../assets/images/comments-on.svg';
import commentIconOff from '../../assets/images/comments-off.svg';
import KendoBulletChart from '../KendoBullet/KendoBullet';
import styles from './SecondaryContent.css';
import  * as utils from '../../utilities.js';
import classNames from 'classnames';
class SecondarySquares extends Component {

    // Need to Refactor
    componentDidUpdate(prevProps){
            console.log('Debug that secondary!' ,this.props.deviceType)

    }
    getColor(value, target, type, header) {
        let retColor = '';
        if(type === 'financial' ) {
            if (value >= target) {
                retColor = 'selectedCardHeaderGreen';
            } else {
                retColor = 'selectedCardHeaderRed';
            }
        } else if (type === 'journey' && header === false) {
            if (value >= target) {
                retColor = 'journeyBoxAlertGreen';
            } else {
                retColor = 'journeyBoxAlert';
            }
        } else if (type === 'journey' && header !== false) {
            if (value >= target) {
                retColor = 'journeyHeaderAlertGreen';
            } else {
                retColor = 'journeyHeaderAlert';
            }
        } else if (type === 'donut') {
            if (value < target) {
                retColor = '#FF0000';
            } else {
                retColor = '#0DB16E';
            }
        }

        return retColor;
    }
    getLaptopContent() {
        // const isMobile = (this.props.deviceType.includes('mobile') ? true : false);
        const isLaptop = (this.props.deviceType.includes('laptop') ? true : false);
        // const isTablet = (this.props.deviceType.includes('tablet') ? true : false);

        const formattedValue = utils.formatMetric(this.props.item,'value');
        const formattedTarget = utils.formatMetric(this.props.item,'target');

        const secondaryBoxHover = classNames({'journeyBoxHover': isLaptop });
        const secondaryBox = classNames({ 'journeyBox': isLaptop });
        const secondaryBoxHeader = classNames({'journeyHeader k-float-left': isLaptop});
        const commentsIcon = classNames({'k-float-right cardCommentIcon': isLaptop});
        const secondaryBoxContent = classNames({'journeyContent': isLaptop});
        const seconaryBoxContentAmount = classNames({'journeysAmount': isLaptop})
        const boxContentTarget = classNames({'secondaryTarget': isLaptop});

       
        return ( <div className={secondaryBoxHover} key={this.props.item.index}>    
            <div className={ `${secondaryBox}  ${this.props.activeJourneyCard === true ? this.getColor(this.props.item.value, this.props.item.target, 'journey', false) : ''}`} 
                onClick={e => this.props.onJourneyCardClicked(e, this.props.item.index)}>
                <div  className={`${secondaryBoxHeader} ${this.props.activeJourneyCard === true ? this.getColor(this.props.item.value, this.props.item.target, 'journey', true) : ''}`} >
                    {/* <div className={this.props.item.css[2]}><p className="journeyHeaderTitle ">{this.props.item.title}</p></div> */}
                </div>
                    {/* Image Icon For Comments */}
                    {this.props.toggleCommentary ? (<div className={commentsIcon}><img  alt="" src={this.props.item.comments.length !== 0 ? commentIconOn: commentIconOff} onClick={this.props.onCommentIconClick}/></div>) : null}  
                    <div className={secondaryBoxContent}>
                        <div >{this.props.item.header}</div>
                        <div  className={`  ${seconaryBoxContentAmount} ${this.props.item.value >= this.props.item.target ? 'journeysAmountGreen' : ''}`}>{formattedValue}</div>
                        <div className=''>
                            <KendoBulletChart 
                                width={175} 
                                values={[this.props.item.value, this.props.item.target]} 
                                valueType={this.props.item.valueType} 
                                color="white" 
                                key={this.props.item.index} ></KendoBulletChart></div>
                        <div className={boxContentTarget}>{formattedTarget}</div>
                    </div>
                </div>
            </div>);


    }

    getMobileContent() {
        
        const isTablet = (this.props.deviceType.includes('tablet') ? true : false);
        const isMobile = (this.props.deviceType.includes('mobile') ? true : false);

        const formattedValue = utils.formatMetric(this.props.item,'value');
        const formattedTarget = utils.formatMetric(this.props.item,'target');

        const secondaryBoxHover = classNames({'mobileSecondaryHover': isTablet || isMobile });
        const secondaryBox = classNames({ 'mobileSecondaryBox':isTablet || isMobile });
        const secondaryBoxHeader = classNames({'mobileSecondaryHeader': isTablet || isMobile});
        const commentsIcon = classNames({'mobileCommentsIcon': isTablet || isMobile});
        const secondaryBoxContent = classNames({'mobileSecondaryContent': isTablet || isMobile});
        const seconaryBoxContentAmount = classNames({'mobileSecondaryBoxContentAmount': isTablet || isMobile})
        const boxContentTarget = classNames({'mobileSecondaryContentTarget': isTablet || isMobile});
        const boxContentAmountGreen = classNames({'mobileSecondaryContanetAmountGreen': isTablet || isMobile})
        const boxBullet = classNames({'mobileSecondaryBullet': isTablet || isMobile})
        const secondaryBoxHeaderTitle = classNames({'secondaryBoxHeaderTitle': isTablet || isMobile})
       
        return ( <div className={secondaryBoxHover} key={this.props.item.index}>    
            <div className={ `${secondaryBox}  ${this.props.activeJourneyCard === true ? this.getColor(this.props.item.value, this.props.item.target, 'journey', false) : ''}`} 
                onClick={e => this.props.onJourneyCardClicked(e, this.props.item.index)}>
                <div  className={`${secondaryBoxHeader} ${this.props.activeJourneyCard === true ? this.getColor(this.props.item.value, this.props.item.target, 'journey', true) : ''}`} >
                    {/* <div className={this.props.item.css[2]}><p className="journeyHeaderTitle ">{this.props.item.title}</p></div> */}
                </div>
                    {/* Image Icon For Comments */}
                    {this.props.toggleCommentary ? (<div className={commentsIcon}><img  alt="" src={this.props.item.comments.length !== 0 ? commentIconOn: commentIconOff} onClick={this.props.onCommentIconClick}/></div>) : null}  
                    <div className={secondaryBoxContent}>
                        <div className={secondaryBoxHeaderTitle}>{this.props.item.header}</div>
                        <div  className={`  ${seconaryBoxContentAmount} ${this.props.item.value >= this.props.item.target ? `${boxContentAmountGreen}` : ''}`}>{formattedValue}</div>
                        <div className={boxBullet}>
                            <KendoBulletChart 
                                width={175} 
                                values={[this.props.item.value, this.props.item.target]} 
                                valueType={this.props.item.valueType} 
                                color="white" 
                                key={this.props.item.index} ></KendoBulletChart></div>
                        <div className={boxContentTarget}>{formattedTarget}</div>
                    </div>
                </div>
            </div>);
    }

    render(){
        {console.log('debug', this.props.deviceType )}

        const isMobile = (this.props.deviceType.includes('mobile') ? true : false);
        const isLaptop = (this.props.deviceType.includes('laptop') ? true : false);
        const isTablet = (this.props.deviceType.includes('tablet') ? true : false);

        return(
            <div>
                <div>{isMobile ? this.getMobileContent() : null}</div>
                <div>{isTablet ? this.getMobileContent() : null}</div>
                <div>{isLaptop ? this.getLaptopContent() : null}</div>
            </div>
        )
    }
}

export default (SecondarySquares)