import React, { Component } from 'react';
import KendoDonutChart from '../KendoDonutChart/KendoDonutChart';
import KendoBulletChart from '../KendoBullet/KendoBullet';
import { CSSTransitionGroup } from 'react-transition-group';
import commentIconOn from '../../assets/images/comments-on.svg';
import commentIconOff from '../../assets/images/comments-off.svg';
import styles from './PrimaryContent.css';
import classNames from 'classnames';

class PrimarySquare extends Component {
  
    
    renderM(index) {
        let renderM = '';
        if (index === 1 || index === 2 ) { renderM = 'M' } else {
            renderM = '%'
        }
        return renderM;
    }

    renderDollarValue(value) {
        let returnValue = '';
        value = parseInt(value)
        if (value > 1000 && value <= 999999) {
            value = (value/1000).toFixed(1);
            returnValue = '$' + value.toString() + 'K';
        } else if (value > 1000000 && value <= 999999999) {
            value = (value/1000000).toFixed(1);
            returnValue = '$' +  value.toString() + 'M';
            // returnValue = (value.toString() === '0.0') ? (value.toString() + 'K' : value.toString() + 'M'
        } else if (value > 1000000000 && value <= 999999999999) {
            value = (value/1000000000).toFixed(1);
            returnValue ='$' +  value.toString() + 'B';
        } else if (value > 1000000000 && value <= 999999999999999) {
            value = (parseInt(value)/1000000000000).toFixed(1);
            returnValue ='$' +  value.toString() + 'T';
        } else {
            return '$' + value.toString();
        }
        return returnValue;
    }
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
        const alignCenter = classNames({
            center: true
        })
        return(
            <div> 

                {/* Desktop View */}
                <div className="col-sm-12 col-md-2 col-lg-2 desktop"  
                        onClick = {this.props.enableChart}
                        key={this.props.item.index}>

                {/* Card */}
                <div className={`sumChartSquare zoom   ${this.props.item.css[1]} ${this.props.activeCard ? 'selectedCard ' : ''}`} onClick={e => this.props.selectedCard(e, this.props.item.index)}>
                        <div className={`sumChartContent  ${this.props.item.css[1]}`}>
                                        {this.props.toggleCommentary ? (<span className="k-float-right finCommentIcon"><img  alt="" src={this.props.item.comments.length !== 0 ? commentIconOn: commentIconOff} onClick={e => this.props.onCommentIconClick()}/></span>) : null}
                                        
                            {/* Header */}
                            <div className={`sumChartHeader ${this.props.activeCard ? this.getColor(this.props.item.value, this.props.item.target, 'financial') : ''}`}>
                                <p className={`sumChartHeaderText ${this.props.activeCard ? 'selectedCardText' : ''}`}>
                                    {this.props.item.category}
                                </p>
                            </div>

                                <div className={alignCenter}>
                                        <div className={` secondaryHeader`}>{this.props.item.header}</div>

                                        {/* REFACTOR: Remove formatted value , bullet chart, and formatter target to SummaryMetric 
                                        - - Pass Item down
                                        */}
                                        {/* Formatted Value $###.## (M / %)*/}
                                        <div className={  this.props.item.value >= this.props.item.target ? ' valueText selectedCardFontColorGreen' : 'valueText selectedCardFontColorRed'}>
                                            {this.props.item.value}
                                        </div>
                                        {/* Bullet Chart */}
                                                <div >
                                                {/* <KendoDonutChart donutColor={this.props.item.value >= this.props.item.target ? '#0DB16E': '#FF0000'} key={this.props.item.index} donutCenterRender= {()=>  */}
                                                {/*  <div className="insideDonut"><span className={  this.props.item.value >= this.props.item.target ? ' valueText selectedCardFontColorGreen' : 'valueText selectedCardFontColorRed'}>{this.renderDollarValue(this.props.item.value)}</span><span className='targetText'>Target</span><span className='targetValueText'>{this.renderDollarValue(this.props.item.target)}</span></div>}/> 
                                                
                                        */}                                            <KendoBulletChart values={[this.props.item.value, this.props.item.target]} valueType={this.props.item.valueType} color="black" key={this.props.item.index} ></KendoBulletChart>
                                                </div>
                                        {/* Formatted Target $###.## (M / %)*/}
                                        <div className='formattedTarget'>TARGET {this.props.item.target}</div>
                                </div> 
                            <div className={` ${this.props.activeCard ? 'arrow_box' : ''}`}></div>
                                        
                            </div>
                     
                     </div>
      
              
            </div>
                
                {/* Mobile View */}
                <div className="col-xs-12 mobile"  
                    onClick = {this.props.enableChart}
                    key={this.props.item.index}>

                {/* Card */}
                <div className={`sumChartSquare zoom   ${this.props.item.css[1]} ${this.props.activeCard ? 'selectedCard ' : ''}`} onClick={e => this.props.selectedCard(e, this.props.item.index)}>
                        <div className={`sumChartContent  ${this.props.item.css[1]}`}>
                            {/* Header */}
                            {/* <div className={`sumChartHeader ${this.props.activeCard ? this.getColor(this.props.item.value, this.props.item.target, 'financial') : ''}`}>
                                <p className={`sumChartHeaderText ${this.props.activeCard ? 'selectedCardText' : ''}`}>
                                    {this.props.item.category}
                                </p>
                            </div> */}

                                <div >
                                        <span className={`  secondaryCategory`}>{this.props.item.category}</span>
                                           {/* Formatted Value $###.## (M / %)*/}
                                           <span className={  this.props.item.value >= this.props.item.target ? '  valueText selectedCardFontColorGreen' : ' valueText selectedCardFontColorRed'}>
                                            {this.props.item.value}
                                        </span>
                                        <span className={`  secondaryHeader`}>{this.props.item.header}</span>

                                
                                      
                                        {/* Bullet Chart */}
                                             
                                       
                                        <span className='bullet'>
                                                   <KendoBulletChart 
                                                    values={[this.props.item.value, this.props.item.target]} 
                                                    valueType={this.props.item.valueType} 
                                                    color="black" 
                                                    key={this.props.item.index} ></KendoBulletChart>
                                                </span>
                                </div> 
                                        
                            </div>
                     
                     </div>
      
              
            </div>
            
            </div>
        )
    }
}

export default (PrimarySquare)