import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import commentIconOn from '../../assets/images/comments-on.svg';
import commentIconOff from '../../assets/images/comments-off.svg';
import KendoBulletChart from '../KendoBullet/KendoBullet';
import styles from './SecondaryContent.css';
class SecondarySquares extends Component {
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
    <div className="journeyBoxHover" key={this.props.item.index}>    
             
                    <div className={ `journeyBox  ${this.props.activeJourneyCard === true ? this.getColor(this.props.item.value, this.props.item.target, 'journey', false) : ''}`} 
                    onClick={e => this.props.onJourneyCardClicked(e, this.props.item.index)}>
                
                    <div  className={`journeyHeader k-float-left ${this.props.activeJourneyCard === true ? this.getColor(this.props.item.value, this.props.item.target, 'journey', true) : ''}`} >
                        {/* <div className={this.props.item.css[2]}><p className="journeyHeaderTitle ">{this.props.item.title}</p></div> */}
                    </div>

                        {/* Image Icon For Comments */}
                        {this.props.toggleCommentary ? (<div className="k-float-right cardCommentIcon"><img  alt="" src={this.props.item.comments.length !== 0 ? commentIconOn: commentIconOff} onClick={this.props.onCommentIconClick}/></div>) : null}
                  
                        <div className='journeyContent'>
                            <div >{this.props.item.header}</div>
                            <div  className={`   ${this.props.item.value >= this.props.item.target ? 'journeysAmountGreen' : ''}`}>{this.props.item.value}</div>
                            <div className=''><KendoBulletChart width={175} values={[this.props.item.value, this.props.item.target]} valueType={this.props.item.valueType} color="white" key={this.props.item.index} ></KendoBulletChart></div>
                            <div className='secondaryTarget'>{this.props.item.target}</div>
                        </div>
                            {/* <div className="journeyContent">
                                <p>{this.props.item.header}</p>
                            

                                    {(this.props.item.index === 1 || this.props.item.index === 2) ?
                                     <div className={` journeysAmount  ${this.props.item.value >= this.props.item.target ? 'journeysAmountGreen' : ''}`}>{this.props.renderUnits(this.props.item.value)}</div>:
                                     <div className={` journeysAmount  ${this.props.item.value >= this.props.item.target ? 'journeysAmountGreen' : ''}`}>{this.props.formatPercentage(this.props.item.value)} %</div> }
                                    
                               
                                    <div className="journeyKendoGraph">
                                        <KendoBulletChart width={175} values={[this.props.item.value, this.props.item.target]} valueType={this.props.item.valueType} color="white" key={this.props.item.index} ></KendoBulletChart>
                                    </div>
                                {(this.props.item.index === 1 || this.props.item.index === 2) ?
                                     <div className=" journeysTarget ">TARGET {this.props.renderUnits(this.props.item.target)} </div>:
                                     <div className="journeysTarget ">TARGET {this.props.formatPercentage(this.props.item.target) }%</div> }
                            </div> */}
                        </div>
                {/* </CSSTransitionGroup> */}

                    </div>  
        )
    }
}

export default (SecondarySquares)