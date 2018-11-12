import React, { Component } from 'react';
import KendoDonutChart from '../KendoDonutChart/KendoDonutChart';
import KendoBulletChart from '../KendoBullet/KendoBullet';
import { CSSTransitionGroup } from 'react-transition-group';
import commentIconOn from '../../assets/images/comments-on.svg';
import commentIconOff from '../../assets/images/comments-off.svg';
import styles from './PrimaryContent.css';
import classNames from 'classnames';
import * as utils from '../../utilities.js';

class PrimarySquare extends Component {
  
    shouldComponentUpdate(nextProps){
        return true;
    }
     // Need to Refactor
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

    render(){
        const isMobile = (this.props.deviceType.includes('mobile') ? true : false);
        const isLaptop = (this.props.deviceType.includes('laptop') ? true : false);
        const isTablet = (this.props.deviceType.includes('tablet') ? true : false);

        // {utils.getDeviceType(this.props.window)}
        const formattedValue = utils.formatMetric(this.props.item,'value');
        const formattedTarget = utils.formatMetric(this.props.item,'target');
        const alignCenter = classNames({
            center: true
        });


        const responsiveSquareSize = classNames({
            "col-sm-12 col-md-2 col-lg-2 ": isLaptop,
            "col-xs-12 ": (isMobile || isTablet) ? true: false
        })
        const responsiveSumChartSquare = classNames({
            sumChartSquare: true,
            mobileSumChartSquare: isMobile,
            tabletSumChartSquare: isTablet,
            laptopSumChartSquare:  isLaptop

        });
        // const responsiveSumChartContent= classNames({
        //     sumChartContent: true
        //     // mobileSumChartContent: isMobile,
        //     // tabletSumChartContent: isTablet,
        //     // laptopSumChartContent:  isLaptop

        // });
        // const responsiveZoom = classNames({
        //     zoom: true
        // });
        const responsiveSelectedCard = classNames({
            selectedCard: true,
            mobileSelectedCard: isMobile,
            tabletSelectedCard:  isTablet,
            laptopSelectedCard: isLaptop

        });
        const responsiveCommentIcon = classNames({
            finCommentIcon: true,
            mobileCommentIcon: isMobile,
            tabletCommentIcon: isTablet,
            laptopCommentIcon: isLaptop
        });

        const responsiveEmptyComment = classNames({
            emptyIcon: true
        });
        const responsiveSumChartHeader = classNames({
            sumChartHeader: true,
            mobileSumChartHeader: isMobile,
            tabletSumChartHeader: isTablet,
            laptopSumChartHeader: isLaptop
        });

        const responsiveSumChartHeaderText = classNames({
            sumChartHeaderText: true,
            mobileSumChartHeaderText: isMobile,
            tabletSumChartHeaderText: isTablet,
            laptopSumChartHeaderText: isLaptop
        });
        
        const responsiveSelectedCardText = classNames({
            selectedCardText: true,
            mobileSelectedCardText: isMobile,
            tabletSelectedCardText: isTablet,
            laptopSelectedCardText: isLaptop
        });

        const responsiveSecondaryHeader = classNames({
            secondaryHeader: true,
            mobileSecondaryHeader: isMobile,
            tabletSecondaryHeader: isTablet,
            laptopSecondaryHeader: isLaptop
        });

        const responsiveValueText  = classNames({
            valueText: true,
            mobileValueText: isMobile,
            tabletValueText: isTablet,
            laptopValuesText: isLaptop
        });

        const responsiveTarget = classNames({
            formattedTarget: true,
            mobileTargetText: isMobile,
            tabletTargetText: isTablet,
            laptopTargetText: isLaptop
        });
        return(
            <div> 

                {/* Desktop View */}
                <div className={responsiveSquareSize}  
                        onClick = {this.props.enableChart}
                        key={this.props.item.index}>

                {/* Card */}
                <div className={`${responsiveSumChartSquare}    ${this.props.item.css[1]} ${this.props.activeCard ? responsiveSelectedCard : ''}`} onClick={e => this.props.selectedCard(e, this.props.item.index)}>
                        <div className={`sumChartContent  ${this.props.item.css[1]}`}>
                                        {this.props.toggleCommentary ? (<span className={` k-float-right   ${responsiveCommentIcon}`}><img  alt="" src={this.props.item.comments.length !== 0 ? commentIconOn: commentIconOff} onClick={e => this.props.onCommentIconClick()}/></span>) : <div className="emptyIcon"></div>}
                                        
                            {/* Header */}
                            <div className={`${responsiveSumChartHeader} ${this.props.activeCard ? this.getColor(this.props.item.value, this.props.item.target, 'financial') : ''}`}>
                                <p className={`${responsiveSumChartHeaderText} ${this.props.activeCard ? responsiveSelectedCardText : ''}`}>
                                    {this.props.item.category}
                                </p>
                            </div>

                                <div className={alignCenter}>
                                        <div className={responsiveSecondaryHeader}>{this.props.item.header}</div>

                                        {/* REFACTOR: Remove formatted value , bullet chart, and formatter target to SummaryMetric 
                                        - - Pass Item down
                                        */}
                                        {/* Formatted Value $###.## (M / %)*/}
                                     

                                        <div className={`${responsiveValueText}  ${this.props.item.value >= this.props.item.target ?  'selectedCardFontColorGreen' : ' selectedCardFontColorRed'} `}>
                                            {formattedValue}
                                        </div>
                                        {/* Bullet Chart */}
                                                <div >
                                                {/* <KendoDonutChart donutColor={this.props.item.value >= this.props.item.target ? '#0DB16E': '#FF0000'} key={this.props.item.index} donutCenterRender= {()=>  */}
                                                {/*  <div className="insideDonut"><span className={  this.props.item.value >= this.props.item.target ? ' valueText selectedCardFontColorGreen' : 'valueText selectedCardFontColorRed'}>{this.renderDollarValue(this.props.item.value)}</span><span className='targetText'>Target</span><span className='targetValueText'>{this.renderDollarValue(this.props.item.target)}</span></div>}/> 
                                                
                                        */} 
                                        <KendoBulletChart values={[this.props.item.value, this.props.item.target]} valueType={this.props.item.valueType} color="#3c3c3c" key={this.props.item.index} ></KendoBulletChart>
                                                </div>
                                        {/* Formatted Target $###.## (M / %)*/}
                                        <div className={responsiveTarget}>TARGET {formattedTarget}</div>
                                </div> 
                            {(isMobile || isTablet) ? null : <div className={` ${this.props.activeCard ? 'arrow_box' : ''}`}></div>}
                                        
                            </div>
                     
                     </div>
      
              
            </div>
                
            
            </div>
        )
    }
}

// export default (PrimarySquare)

export default (PrimarySquare);