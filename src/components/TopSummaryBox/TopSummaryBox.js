// Npm Modules
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid} from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
// Custom Components and Styles
import  * as actions from 'actions';
import styles from './TopSummaryBox.css'
import ButtomSummaryBox from 'components/BottomSummaryBox/BottomSummaryBox';
import KendoBulletChart from '../KendoBullet/KendoBullet';

import commentIconOn from '../../assets/images/comments-on.svg';
import commentIconOff from '../../assets/images/comments-off.svg';

class TopSummaryBox extends Component {

    //When the component is constructed
    constructor(props){
        super(props);
        // Initialize state
        this.state = { 
            show: true,
            isToggleButtonChecked: this.props.switchFilter,
            summaryTitle: 'Financials Summary',
            activeJourneyCard: 'journeyCard1',
            activeCard:'card1',
            data: (this.props.switchFilter === true) ? this.props.appData.journey: this.props.finData,
            components:{
                squares: undefined,
                stats: undefined,
                multichart: undefined
            }

        };
        // this.finCardsIbeData = this.finCardsIbeData.bind(this);
        // console.log(this.props.finData);
        
        //Binding functions to this
        this.enableChart1Arrow = this.enableChart1Arrow.bind(this);
        this.enableChart2Arrow = this.enableChart2Arrow.bind(this);
        this.enableChart3Arrow = this.enableChart3Arrow.bind(this);
        this.enableChart4Arrow = this.enableChart4Arrow.bind(this);
        this.getSummaryContent = this.getSummaryContent.bind(this);
        // this.getFinancialSquares = this.getFinancialSquares.bind(this);

        // this.finCardsIbeData();

        // console.log(this.state);
    }

    componentDidUpdate(prevProps){
        if(prevProps.availableFilters !== this.props.availableFilters || prevProps.activeFilters !== this.props.activeFilters ){
            // console.log('Getting new data');
            this.props.getQueryFilteredIBEData(this.props.activeFilters,this.props.availableFilters);
        }
        
        if(prevProps.switchFilter !== this.props.switchFilter){
            if(!this.props.switchFilter){
                this.props.updateFinancialSummaryActiveCard(this.props.finData[0])
            } else{
                this.props.updateJourneySummaryActiveCard(this.props.appData.journey.squares[0]);
            }
        }

        if(this.props.finData !== prevProps.finData){
            this.props.updateFinancialSummaryActiveCard(this.props.finData[0])
        }
        // this.props.updateFinancialSummaryActiveCard(this.props.finData[0]);
    }

    shouldComponentUpdate(nextProps){
       
        if(this.props.appData !== nextProps.appData){
            return false;
        }
        
        else if(this.props.finData !== nextProps.finData){

            return true;
        } else if(this.props.activeFilters != nextProps.activeFilters){
            this.props.getQueryFilteredIBEData(nextProps.activeFilters,this.props.availableFilters);
            return false;
        }
        else if(this.toggleCommentary !== nextProps.toggleCommentary){
            return true;
        } else return false;

        return false;
    }
   //Event handlers for each chart square to render the arrow
    enableChart1Arrow(event){
        this.props.handleSummaryClick(1);
    }
    enableChart2Arrow(){
        this.props.handleSummaryClick(2);
    }
    enableChart3Arrow(){
        this.props.handleSummaryClick(3);
    }
    enableChart4Arrow(){
        this.props.handleSummaryClick(4);
    }

    //Event handler that sets the active card
    onFinancialCardClicked (e, index) {
        e.preventDefault();
        let squareItem = this.props.appData.financial.squares[index -1]
        // Finds the passed props for the right card to set as active
        this.setState({activeCard: squareItem.css[0]});
        this.props.updateFinancialSummaryActiveCard(squareItem);
     
    }

    // Event handler when the Journey Card is active and clicked
    onJourneyCardClicked (e, index) {
        e.preventDefault();
        let squareItem = this.props.appData.journey.squares[index -1];
        console.log(squareItem);
        // Finds the passed props for the right card to set as active
        this.setState({activeJourneyCard: squareItem.css[0]})
        this.props.updateJourneySummaryActiveCard(squareItem);      

    }

    //   Event handler for toggle change 'Financials' and 'Joruneys'
    onToggleButtonChanged = (e) => {
        let toggleState = this.state.isToggleButtonChecked;
        
        this.setState({isToggleButtonChecked: !toggleState},()=>{
            this.props.updateSwitchFilterValue(this.state.isToggleButtonChecked);
        });
    }

 
    //Function to check state and return either Financials summary or Journeys Summary
    getSummaryTitle() {
        if (this.props.switchFilter) {
            return 'Journeys Summary'
        } else {
            return 'Financials Summary'
        }
    }

    // Need to Refactor
    getColor(value, target, type, isHeader) {

        let retColor = '';

        switch(type) {
            case 'financial':
                if (!isHeader) {
                    if (value > target) { retColor = 'journeyBoxAlertGreen' } else { retColor = 'journeyBoxAlert' };
                } else {
                    if (value > target) { retColor = 'journeyHeaderAlertGreen'} else { retColor = 'journeyHeaderAlert' };
                }

            break;
            case 'journey':
                if (!isHeader) {
                    if (value > target) { retColor = 'journeyBoxAlertGreen' } else { retColor = 'journeyBoxAlert' };
                } else {
                    if (value > target) { retColor = 'journeyHeaderAlertGreen'} else { retColor = 'journeyHeaderAlert' };
                }
            break;
            default:
            break;
        }

        return retColor;

   
    }


    renderDollar(index) {
        let renderDollar = '';

        if (index === 1 || index === 2 ) { renderDollar = '' }

        return renderDollar;
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

    onCommentIconClick = (e, commentArrayLength) => {
        // before opening, check if the card comments[] is not empty
        // if (commentArrayLength !== 0) {
            this.props.showCommentBox();
        // } 
    }
   
    getSummaryContent(){
        // console.log('Top Summary', this.state.finData);
        const { activeCard } = this.state;
        const { activeJourneyCard } = this.state;
        // this.setState({data:(this.props.switchFilter === true) ? this.props.appData.journey: this.props.appData.financial});
  
         if(this.props.switchFilter===false){
            return(
                <div className="row">
                <div className="col-lg-3 col-md-4">

                {this.props.appData.financial.squares.map(item => {
                    return (
                    <div className="financialBoxHover" key={item.index}>    
                     {/* <CSSTransitionGroup transitionName="example"
                    transitionAppear={true} transitionAppearTimeout={5000}
                    transitionEnter={false} transitionLeave={false} > */}
                    <div className={ `financialBox ${item.css[1]} ${activeCard === item.css[0] ? this.getColor(item.value, item.target, 'financial', false) : ''}`} 
                    onClick={e => this.onFinancialCardClicked(e, item.index)}>
                
                    <div  className={`financialHeader k-float-left ${activeCard === item.css[0] ? this.getColor(item.value,  item.target, 'financial', true) : ''}`} >
                        
                    </div>

                    {/* Image Icon For Comments */}
                    {this.props.toggleCommentary ? (<div className="k-float-right cardCommentIcon"><img alt="" src={item.comments.length !== 0 ? commentIconOn: commentIconOff} onClick={e => this.onCommentIconClick(e, item.comments.length)}/></div>) : null}
                  
                            <div className="journeyContent">
                                <p>{item.header}</p>
                                <div className="row">

                                    <div className={`col journeysAmount k-float-left ${item.value >=  item.target ? 'journeysAmountGreen' : ''}`}>
                                    {this.renderDollarValue(item.value)} </div>
                                    <div className="col journeysTarget ">TARGET {this.renderDollarValue( item.target)}</div>
 
                                </div>
                                <div className="row k-float-left">
                                    <div className="journeyKendoGraph">
                                        <KendoBulletChart values={[item.value,  item.target]} color="white" key={item.index} ></KendoBulletChart>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    {/* </CSSTransitionGroup> */}

                    </div>  
                    );
                })}
                
                </div>
                <div className="col-lg-9 col-md-8">
                    <ButtomSummaryBox chartHeight="350px"/>
                </div>
            </div>
            )
        
           
            
        } else if(this.props.switchFilter === true) {
            return(
                <div className="row">
                <div className="col-lg-3 col-md-4">

                {this.props.appData.journey.squares.map(item => {
                    return (
                    <div className="journeyBoxHover" key={item.index}>    
                     {/* <CSSTransitionGroup transitionName="example"
                    transitionAppear={true} transitionAppearTimeout={5000}
                    transitionEnter={false} transitionLeave={false} > */}
                    <div className={ `journeyBox ${item.css[1]} ${activeJourneyCard === item.css[0] ? this.getColor(item.value, item.target, 'journey', false) : ''}`} 
                    onClick={e => this.onJourneyCardClicked(e, item.index)}>
                
                    <div  className={`journeyHeader k-float-left ${activeJourneyCard === item.css[0] ? this.getColor(item.value, item.target, 'journey', true) : ''}`} >
                        <div className={item.css[2]}><p className="journeyHeaderTitle ">{item.title}</p></div>
                    </div>

                        {/* Image Icon For Comments */}
                        {this.props.toggleCommentary ? (<div className="k-float-right cardCommentIcon"><img  alt="" src={item.comments.length !== 0 ? commentIconOn: commentIconOff} onClick={e => this.onCommentIconClick(e, item.comments.length)}/></div>) : null}
                  
                        
                            <div className="journeyContent">
                                <p>{item.header}</p>
                                <div className="row">

                                    <div className={`col journeysAmount k-float-left ${item.value >= item.target ? 'journeysAmountGreen' : ''}`}>{this.renderDollar(item.index)}{item.value}{this.renderM(item.index)}</div>
                                    <div className="col journeysTarget ">TARGET {this.renderDollar(item.index)}{item.target}{this.renderM(item.index)}</div>
 
                                </div>
                                <div className="row k-float-left">
                                    <div className="journeyKendoGraph">
                                        <KendoBulletChart values={[item.value, item.target]} color="white" key={item.index} ></KendoBulletChart>
                                    </div>
                                </div>  
                            </div>
                        </div>
                {/* </CSSTransitionGroup> */}

                    </div>  
                    );
                })}
                
                </div>
                <div className="col-lg-9 col-md-8">
                    <ButtomSummaryBox chartHeight="350px"/>
                </div>
            </div>
            )
        }
    }
 

    render(){

      
        var SummaryBoxStyles = classNames({
            summaryBox: true,
            summaryBox_financial: !this.props.switchFilter ? false: true
        });

        // var JourneysSquareStyles = classNames({
        //     journeySquareStyle:true
        // });

        // var JourneysSquareHeader = classNames({
        //     journeySquareHeader: true
        // });
        // var JourneySquareContent = classNames({
        //     journeySquareContent: true
        // });

        return(
            
            <Grid className={SummaryBoxStyles} fluid>
            {/* {console.log('THIS', this.props.finData)} */}
                <CSSTransitionGroup transitionName="example"
                    transitionAppear={true} transitionAppearTimeout={1000}
                    transitionEnter={false} transitionLeave={false} >
                {/* Toggle Button */}
                <div className="container-fluid row">
                    <div className="col-md-6 summaryTitleCol k-float-left">{this.getSummaryTitle()}</div>
                        <div className="col-md-6 summaryTitleCol switchContainer ">
                            <label className="switch k-float-right">
                                <input type="checkbox" id="togBtn" checked={this.state.isToggleButtonChecked} onChange={(e) => this.onToggleButtonChanged(e)}></input>
                                <div className="slider round">
                                    <div className="on">Financials</div>
                                    <div className="off">Journeys</div>
                                </div>
                            </label>
                        </div>
                    </div>
                </CSSTransitionGroup>
                {this.getSummaryContent()}
                
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    // console.log(state);
    return { 
        filters: state.filters, 
        switchFilter:state.switchFilter, 
        appData: state.adobeData, 
        finData: state.ibeData,
        toggleCommentary: state.toggleCommentaryBox,
        activeFilters: state.activeFilters,
        availableFilters: state.availableFilters,
    }
}

export default connect(mapStateToProps,actions)(TopSummaryBox)
