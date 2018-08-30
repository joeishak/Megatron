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
    componentDidMount(){
        // this.setState({data:(this.props.switchFilter === true) ? this.props.appData.journey: this.props.appData.financial})
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
    selectedCard (e, index) {
        e.preventDefault();
        let squareItem = this.props.appData.financial.squares[index -1]
        // Finds the passed props for the right card to set as active
        this.setState({activeCard: squareItem.css[0]});
        this.props.updateFinancialSummaryActiveCard(squareItem);
        // title 'Net New ARR'
        const selectedHeader = squareItem.header;

        // TO DO: pass on to the Bottom Summary Box and Render the view, or pass the index on the bottom summary box
        console.log(selectedHeader);
    }

    // Event handler when the Journey Card is active and clicked
    onJourneyCardClicked (e, index) {
        e.preventDefault();
        let squareItem = this.props.appData.journey.squares[index -1];
        // Finds the passed props for the right card to set as active
        this.setState({activeJourneyCard: squareItem.css[0]})
        this.props.updateJourneySummaryActiveCard(squareItem);
        // title 'Net New ARR'
        const selectedTitle = squareItem.title;
        const selectedSubtitle = squareItem.header;

              // TO DO: pass on to the Bottom Summary Box and Render the view, or pass the index on the bottom summary box
        console.log(selectedTitle);
        console.log(selectedSubtitle); 
          
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

    renderDollar(index) {
        let renderDollar = '';

        if (index === 1 || index === 2 || index === 5) { renderDollar = '$' }

        return renderDollar;
    }

    renderM(index) {
        let renderM = '';

        if (index === 1 || index === 2 || index === 5) { renderM = 'M' } else {
            renderM = '%'
        }

        return renderM;
    }


   
    getSummaryContent(){
        const { activeCard } = this.state;
        const { activeJourneyCard } = this.state;
        // this.setState({data:(this.props.switchFilter === true) ? this.props.appData.journey: this.props.appData.financial});
         if(this.props.switchFilter===false){
            return (
             <div className="chartRow">
              { this.props.appData.financial.squares.map(item=>{
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
                                                        <div className={`donutChart ${activeCard === item.css[0] ? 'arrow_box' : ''}`}>
                                                            <div >
                                                            <KendoDonutChart donutColor={item.css[2]} key={item.index} donutCenterRender= {()=> 
                                                            <div className="insideDonut"><h2 className={`${item.value > item.target ? 'selectedCardFontColorGreen' : 'selectedCardFontColorRed'}`}>${item.value}M</h2><h6>Target</h6><h4>${item.target}M</h4></div>}/> 
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

                {this.props.appData.journey.squares.map(item => {
                    return (
                    <div className="journeyBoxHover" key={item.index}>    
                    <div className={ `journeyBox ${item.css[1]} ${activeJourneyCard === item.css[0] ? this.getColor(item.value, item.target, 'journey', false) : ''}`} 
                    onClick={e => this.onJourneyCardClicked(e, item.index)}>
                
                    <div  className={`journeyHeader k-float-left ${activeJourneyCard === item.css[0] ? this.getColor(item.value, item.target, 'journey', true) : ''}`} >
                        <div className={item.css[2]}><p className="journeyHeaderTitle ">{item.title}</p></div>
                    </div>
                  
                        
                            <div className="journeyContent">
                                <p>{item.header}</p>
                                <div className="row">

                                    <div className={`col journeysAmount k-float-left ${item.value > item.target ? 'journeysAmountGreen' : ''}`}>{this.renderDollar(item.index)}{item.value}{this.renderM(item.index)}</div>
                                    <div className="col journeysTarget ">TARGET {this.renderDollar(item.index)}{item.target}{this.renderM(item.index)}</div>
 
                                </div>
                                <div className="row k-float-left">
                                    <div className="journeyKendoGraph">
                                        <KendoBulletChart values={[item.value, item.target]} color="white" key={item.index} ></KendoBulletChart>
                                    </div>
                                </div>  
                            </div>
                        </div>
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
    return { filters: state.filters, switchFilter:state.switchFilter, appData: state.adobeData, activeCard: state.activeSummarySquare };
}

export default connect(mapStateToProps,actions)(TopSummaryBox)