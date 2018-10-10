// Npm Modules
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid} from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
// Custom Components and Styles
import  * as actions from 'actions';
import styles from './TopSummaryBox.css'
import KendoDonutChart from '../KendoDonutChart/KendoDonutChart';
import ButtomSummaryBox from 'components/BottomSummaryBox/BottomSummaryBox';
import KendoBulletChart from '../KendoBullet/KendoBullet';
import * as _ from 'lodash';
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
            // data: (this.props.switchFilter === true) ? this.props.appData.journey: this.props.finData,
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
            this.props.getQueryFilteredJourneyIBEData(this.props.activeFilters,this.props.availableFilters);
            // this.props.getFilteredJourneyQtdData(this.props.activeFilters,this.props.availableFilters);


        }
        
        if(prevProps.switchFilter !== this.props.switchFilter){
            if(this.props.switchFilter=== false){
                this.props.updateFinancialSummaryActiveCard(this.props.finData[0])
            } else{
                this.props.updateJourneySummaryActiveCard(this.props.journeyData[0]);
            }
        }

        if(this.props.finData !== prevProps.finData && this.props.switchFilter === false){
            this.props.updateFinancialSummaryActiveCard(this.props.finData[this.props.activeSummaryIndex-1])
        }
        if(this.props.journeyData !== prevProps.journeyData && this.props.switchFilter === true){
            this.props.updateJourneySummaryActiveCard(this.props.journeyData[this.props.activeSummaryIndex-1])
        }
        // this.props.updateFinancialSummaryActiveCard(this.props.finData[0]);
    }

    shouldComponentUpdate(nextProps){
       
        if(this.props.finData !== nextProps.finData && this.props.switchFilter === false){

            return true;
        }  else if(this.props.journeyData !== nextProps.journeyData && this.props.switchFilter === true){
            return true;
        }
        
         else if(this.props.activeFilters != nextProps.activeFilters){
            this.props.getQueryFilteredIBEData(nextProps.activeFilters,this.props.availableFilters);
            this.props.getQueryFilteredJourneyIBEData(nextProps.activeFilters,this.props.availableFilters);
            return false;
        }
        else if(this.toggleCommentary !== nextProps.toggleCommentary){
            return true;
        } else return false;

        return false;
    }
    // finCardsIbeData() {


        // let processed = this.props.finData.map(ele => {
        //     console.log(ele);
        // })

        // console.log(processed);
        // this.props.finData[0].then(val => { 
        //     this.setState({
        //         finIBE: val
        //     })
        // });
        // this.props.finData[1].await(val => { 
        //     res2 = val; 
        // });
        // const target = this.props.finData[1].then(val => { targets = val });


    // }

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
    selectedCard (e, index) {
        e.preventDefault();
        let squareItem = this.props.finData[index -1]
        // Finds the passed props for the right card to set as active
        this.setState({activeCard: squareItem.css[0]});
        this.props.updateFinancialSummaryActiveCard(squareItem);
        // title 'Net New ARR'
        const selectedHeader = squareItem.header;

        // TO DO: pass on to the Bottom Summary Box and Render the view, or pass the index on the bottom summary box
        // console.log(selectedHeader);
    }

    // Event handler when the Journey Card is active and clicked
    onJourneyCardClicked (e, index) {
        e.preventDefault();
        let squareItem = this.props.journeyData[index -1];
        console.log(squareItem);
        // Finds the passed props for the right card to set as active
        this.setState({activeJourneyCard: squareItem.css[0]})
        this.props.updateJourneySummaryActiveCard(squareItem);
        // title 'Net New ARR'
        const selectedTitle = squareItem.title;
        const selectedSubtitle = squareItem.header;

              // TO DO: pass on to the Bottom Summary Box and Render the view, or pass the index on the bottom summary box
        // console.log(selectedTitle);
        // console.log(selectedSubtitle); 
          
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

    renderDollar(index) {
        let renderDollar = '';

        if (index === 1 || index === 2 ) { renderDollar = '' }

        return renderDollar;
    }

    renderUnits(value){
        let returnValue = '';
        // console.log(value);
        value = parseInt(value)
        if (value > 1000 && value <= 999999) {
            value = (value/1000).toFixed(1);
            returnValue =  value.toString() + 'K';
        } else if (value > 1000000 && value <= 999999999) {
            value = (value/1000000).toFixed(1);
            returnValue =  value.toString() + 'M';
            // returnValue = (value.toString() === '0.0') ? (value.toString() + 'K' : value.toString() + 'M'
        } else if (value > 1000000000 && value <= 999999999999) {
            value = (value/1000000000).toFixed(1);
            returnValue =  value.toString() + 'B';
        } else if (value > 1000000000 && value <= 999999999999999) {
            value = (parseInt(value)/1000000000000).toFixed(1);
            returnValue = value.toString() + 'T';
        } else {
            return  value.toString();
        }

        return returnValue;
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
  
         if(!this.props.switchFilter){
            return (
                <div className="chartRow">
              { this.props.finData.map(item=>{
                return (
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"  onClick = {this.enableChart1Arrow} key={item.index}>
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
                                            {this.state.show ? (
                                            // {/* Financial Summary  */}
                                            <div className={`sumChartSquare zoom ${activeCard === item.css[0] ? 'selectedCard ' : ''}`} onClick={e => this.selectedCard(e, item.index)}>
                                                <div className={`sumChartContent ${item.css[1]}`}>
                                                    <div className={`sumChartHeader ${activeCard === item.css[0] ? this.getColor(item.value, item.target, 'financial') : ''}`}>
                                                    <p className={`sumChartHeaderText ${activeCard === item.css[0] ? 'selectedCardText' : ''}`}
                                                    >{item.header}</p>
                                                    </div>
                                                     {/* Image Icon For Comments */}
                        {this.props.toggleCommentary ? (<span className="k-float-right finCommentIcon"><img  alt="" src={item.comments.length !== 0 ? commentIconOn: commentIconOff} onClick={e => this.onCommentIconClick(e, item.comments.length)}/></span>) : null}
                  
                                                        <div className={`donutChart ${activeCard === item.css[0] ? 'arrow_box' : ''}`}>
                                                            <div >
                                                            <KendoDonutChart donutColor={item.value >= item.target ? '#0DB16E': '#FF0000'} key={item.index} donutCenterRender= {()=> 
                                                            <div className="insideDonut"><span className={  item.value >= item.target ? ' valueText selectedCardFontColorGreen' : 'valueText selectedCardFontColorRed'}>{this.renderDollarValue(item.value)}</span><span className='targetText'>Target</span><span className='targetValueText'>{this.renderDollarValue(item.target)}</span></div>}/> 
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                        ): null}
                                        </CSSTransitionGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            })}
           
            </div>
            )  
        } else if(this.props.switchFilter === true) {
            return(
                <div className="row">
                <div className="col-lg-3 col-md-4">

                {this.props.journeyData.map(item => {
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

                                    {(item.index === 1 || item.index === 2) ?
                                     <div className={`col journeysAmount k-float-left ${item.value >= item.target ? 'journeysAmountGreen' : ''}`}>{this.renderUnits(item.value)}</div>:
                                     <div className={`col journeysAmount k-float-left ${item.value >= item.target ? 'journeysAmountGreen' : ''}`}>{item.value.toFixed(1)} %</div> }
                                    

                                    {(item.index === 1 || item.index === 2) ?
                                     <div className="col journeysTarget ">TARGET {this.renderUnits(item.value)}</div>:
                                     <div className="col journeysTarget ">TARGET {item.value.toFixed(1)}%</div> }
                                    
 
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

        // {console.log('THIS',this.props.finData);}
      
        var SummaryBoxStyles = classNames({
            summaryBox: true,
            summaryBox_financial: !this.props.switchFilter ? false: true
        });

        var JourneysSquareStyles = classNames({
            journeySquareStyle:true
        });

        var JourneysSquareHeader = classNames({
            journeySquareHeader: true
        });
        var JourneySquareContent = classNames({
            journeySquareContent: true
        });

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
        activeSummaryIndex: state.activeSummarySquare.index ,
        journeyData: state.journeyData

    }
}
export default connect(mapStateToProps,actions)(TopSummaryBox)