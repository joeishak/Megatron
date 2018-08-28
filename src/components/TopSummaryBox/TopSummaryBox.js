// Npm Modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import {Fade, Expand, Animation, Slide } from '@progress/kendo-react-animation';
import { CSSTransitionGroup } from 'react-transition-group';
import classNames from 'classnames';
// Custom Components and Styles
import  * as actions from 'actions';
import styles from './TopSummaryBox.css'
import KendoSwitch  from '../KendoSwitch/KendoSwitch';
import KendoDonutChart from '../KendoDonutChart/KendoDonutChart';
import ButtomSummaryBox from 'components/BottomSummaryBox/BottomSummaryBox';
import KendoBulletChart from '../KendoBullet/KendoBullet';
class TopSummaryBox extends Component {

    //When the component is constructed
    constructor(props){
        super(props);
        // Initialize state
        this.state = { 
            show: true,
            isToggleButtonChecked: false,
            summaryTitle: 'Financials Summary',
            activeJourneyCard: '',
            activeCard:'',
            data: (this.props.switchFilter === true) ? this.props.appData.journey: this.props.appData.financial,
            components:{
                squares: undefined,
                stats: undefined,
                multichart: undefined
            }

        };
        
        //Binding functions to this
        this.enableChart1Arrow = this.enableChart1Arrow.bind(this);
        this.enableChart2Arrow = this.enableChart2Arrow.bind(this);
        this.enableChart3Arrow = this.enableChart3Arrow.bind(this);
        this.enableChart4Arrow = this.enableChart4Arrow.bind(this);
        this.getSummaryContent = this.getSummaryContent.bind(this);
        // this.getFinancialSquares = this.getFinancialSquares.bind(this);

        // console.log(this.state);
    }
    componentDidUpdate(){
        // console.log(this.props.switchFilter);
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
    selectedCard (e, card) {
        e.preventDefault();
        switch(card) {
          case 'card1':
            this.setState({activeCard: 'card1'});
            break;
          case 'card2':
            this.setState({activeCard: 'card2'});
            break;
          case 'card3':
            this.setState({activeCard: 'card3'});
            break;
          case 'card4':
            this.setState({activeCard: 'card4'});
            break;
        }
    }

    onJourneyCardClicked (e, card) {
          e.preventDefault();
          switch(card) {
            case 'journeyCard1':
              this.setState({activeJourneyCard: 'journeyCard1'});
              break;
            case 'journeyCard2':
              this.setState({activeJourneyCard: 'journeyCard2'});
              break;
            case 'journeyCard3':
              this.setState({activeJourneyCard: 'journeyCard3'});
              break;
            case 'journeyCard4':
              this.setState({activeJourneyCard: 'journeyCard4'});
              break;
            case 'journeyCard5':
              this.setState({activeJourneyCard: 'journeyCard5'});
              break;
          }
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
        if (this.state.isToggleButtonChecked) {
            return 'Journeys Summary'
        } else {
            return 'Financials Summary'
        }
    }

    getColor(value, target, type, header) {

        let retColor = '';
        if(type === 'financial' ) {
            if (value > target) {
                retColor = 'selectedCardHeaderGreen';
            } else {
                retColor = 'selectedCardHeaderRed';
            }
        } else if (type === 'journey' && header === false) {
            if (value > target) {
                retColor = 'journeyBoxAlertGreen';
            } else {
                retColor = 'journeyBoxAlert';
            }
        } else if (type === 'journey' && header !== false) {
            if (value > target) {
                retColor = 'journeyHeaderAlertGreen';
            } else {
                retColor = 'journeyHeaderAlert';
            }
        }

        return retColor;
    }
   
    getSummaryContent(){
        const { activeCard } = this.state;
        const { activeJourneyCard } = this.state;

         if(!this.props.switchFilter){
            return (
             <div className="chartRow">
              { this.state.data.squares.map(item=>{
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
                                            <div className={`sumChartSquare ${activeCard === item.css[0] ? 'selectedCard ' : ''}`} onClick={e => this.selectedCard(e, item.css[0])}>
                                                <div className={`sumChartContent ${item.css[1]}`}>
                                                    <div className={`sumChartHeader ${activeCard === item.css[0] ? this.getColor(item.value, item.target, 'financial') : ''}`}>
                                                    <p className={`sumChartHeaderText ${activeCard === item.css[0] ? 'selectedCardText' : ''}`}
                                                    >{item.header}</p>
                                                    </div>
                                                        <div className={`donutChart ${activeCard === item.css[0] ? 'arrow_box' : ''}`}>
                                                            <div className="zoom">
                                                            <KendoDonutChart donutColor={item.css[2]} key={item.index} donutCenterRender= {()=> 
                                                            <div><h2>${item.value}M</h2><h6>Target</h6><h4>${item.target}M</h4></div>}/> 
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
        } else {
            return(
                <div className="row">
                <div className="col-lg-3 col-md-3">

                {this.props.appData.journey.squares.map(item => {
                    return (
                                        
                    <div className={ `journeyBox ${item.css[1]} ${activeJourneyCard === item.css[0] ? this.getColor(item.value, item.target, 'journey', false) : ''}`} onClick={e => this.onJourneyCardClicked(e, item.css[0])}>
                
                    <div  className={`journeyHeader k-float-left ${activeJourneyCard === item.css[0] ? this.getColor(item.value, item.target, 'journey', true) : ''}`} >
                        <div className={item.css[2]}><p className="journeyHeaderTitle ">{item.title}</p></div>
                    </div>
                  
                        <div className="journeyBoxHover">
                            <div className="journeyContent">
                                <p>{item.header}</p>
                                <div className="row">
                                    <div className={`col journeysAmount k-float-left ${item.value > item.target ? 'journeysAmountGreen' : ''}`}
                                    >${item.value}M</div>
                                    <div className="col journeysTarget k-float-right">TARGET ${item.target}M</div>
                                    
                                </div>
                                <div className="row k-float-left">
                                    <div className="journeyKendoGraph">
                                        <KendoBulletChart values={[item.value, item.target]} ></KendoBulletChart>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>  
                    );
                })}
                
                </div>
                <div className="col-lg-9 col-md-9">
                    <ButtomSummaryBox />
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
                <CSSTransitionGroup transitionName="example"
                    transitionAppear={true} transitionAppearTimeout={1000}
                    transitionEnter={false} transitionLeave={false} >
                {/* Toggle Button */}
                <div className="container-fluid row">
                    <div className="col summaryTitleCol k-float-left">{this.getSummaryTitle()}</div>
                        <div className="col summaryTitleCol k-float-right"><label className="switch">
                            <input type="checkbox" id="togBtn" onChange={(e) => this.onToggleButtonChanged(e)}></input>
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
    return { filters: state.filters, switchFilter:state.switchFilter, appData: state.adobeData };
}

export default connect(mapStateToProps,actions)(TopSummaryBox)