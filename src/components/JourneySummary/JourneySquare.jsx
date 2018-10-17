import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import commentIconOn from '../../assets/images/comments-on.svg';
import commentIconOff from '../../assets/images/comments-off.svg';
import KendoBulletChart from '../KendoBullet/KendoBullet';
import styles from './JourneySummary.css';
class JourneySquare extends Component {
    render(){
        return(
<div className="journeyBoxHover" key={this.props.item.index}>    
             
                    <div className={ `journeyBox ${this.props.item.css[1]} ${this.props.activeJourneyCard === this.props.item.css[0] ? this.props.getColor(this.props.item.value, this.props.item.target, 'journey', false) : ''}`} 
                    onClick={e => this.props.onJourneyCardClicked(e, this.props.item)}>
                
                    <div  className={`journeyHeader k-float-left ${this.props.activeJourneyCard === this.props.item.css[0] ? this.props.getColor(this.props.item.value, this.props.item.target, 'journey', true) : ''}`} >
                        <div className={this.props.item.css[2]}><p className="journeyHeaderTitle ">{this.props.item.title}</p></div>
                    </div>

                        {/* Image Icon For Comments */}
                        {this.props.toggleCommentary ? (<div className="k-float-right cardCommentIcon"><img  alt="" src={this.props.item.comments.length !== 0 ? commentIconOn: commentIconOff} onClick={this.props.onCommentIconClick}/></div>) : null}
                  
                        
                            <div className="journeyContent">
                                <p>{this.props.item.header}</p>
                                <div className="row">

                                    {(this.props.item.index === 1 || this.props.item.index === 2) ?
                                     <div className={`col journeysAmount k-float-left ${this.props.item.value >= this.props.item.target ? 'journeysAmountGreen' : ''}`}>{this.props.renderUnits(this.props.item.value)}</div>:
                                     <div className={`col journeysAmount k-float-left ${this.props.item.value >= this.props.item.target ? 'journeysAmountGreen' : ''}`}>{this.props.formatPercentage(this.props.item.value)} %</div> }
                                    

                                    {(this.props.item.index === 1 || this.props.item.index === 2) ?
                                     <div className="col journeysTarget ">TARGET {this.props.renderUnits(this.props.item.target)} </div>:
                                     <div className="col journeysTarget ">TARGET {this.props.formatPercentage(this.props.item.target) }%</div> }
                                </div>
                                <div className="row k-float-left">
                                    <div className="journeyKendoGraph">
                                        <KendoBulletChart values={[this.props.item.value, this.props.item.target]} color="white" key={this.props.item.index} ></KendoBulletChart>
                                    </div>
                                </div>  
                            </div>
                        </div>
                {/* </CSSTransitionGroup> */}

                    </div>  
        )
    }
}

export default (JourneySquare)