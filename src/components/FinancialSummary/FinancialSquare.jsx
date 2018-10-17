import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import KendoDonutChart from '../KendoDonutChart/KendoDonutChart';
import { CSSTransitionGroup } from 'react-transition-group';
import commentIconOn from '../../assets/images/comments-on.svg';
import commentIconOff from '../../assets/images/comments-off.svg';
import styles from './FinancialSummary.css';
class FinancialSquare extends Component {
    constructor(props){
        super(props);
        // this.state = {};
        
    }
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
        return(
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"  onClick = {this.props.enableChart} key={this.props.item.index}>

            <div >
                <div className="flipper">
                    <div className="front ">
                        {/* <!-- front content --> */}
                        <CSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={1000}
                            transitionEnter={false} 
                            transitionLeave={false}>
                            {/* {this.state.show ? ( */}
                             {/* Financial Summary  */}
                            <div className={`sumChartSquare zoom ${this.props.activeCard ? 'selectedCard ' : ''}`} onClick={e => this.props.selectedCard(e, this.props.item.index)}>
                                <div className={`sumChartContent ${this.props.item.css[1]}`}>
                                    <div className={`sumChartHeader ${this.props.activeCard ? this.getColor(this.props.item.value, this.props.item.target, 'financial') : ''}`}>
                                    <p className={`sumChartHeaderText ${this.props.activeCard ? 'selectedCardText' : ''}`}
                                    >{this.props.item.header}</p>
                                    </div>
                                     {/* Image Icon For Comments */}
        {this.props.toggleCommentary ? (<span className="k-float-right finCommentIcon"><img  alt="" src={this.props.item.comments.length !== 0 ? commentIconOn: commentIconOff} onClick={e => this.props.onCommentIconClick()}/></span>) : null}
  
                                        <div className={`donutChart ${this.props.activeCard ? 'arrow_box' : ''}`}>
                                            <div >
                                            <KendoDonutChart donutColor={this.props.item.value >= this.props.item.target ? '#0DB16E': '#FF0000'} key={this.props.item.index} donutCenterRender= {()=> 
                                            <div className="insideDonut"><span className={  this.props.item.value >= this.props.item.target ? ' valueText selectedCardFontColorGreen' : 'valueText selectedCardFontColorRed'}>{this.renderDollarValue(this.props.item.value)}</span><span className='targetText'>Target</span><span className='targetValueText'>{this.renderDollarValue(this.props.item.target)}</span></div>}/> 
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        {/* ): null} */}
                        </CSSTransitionGroup>
                    </div>
                </div>
            </div>
            </div>

        )
    }
}

export default (FinancialSquare)