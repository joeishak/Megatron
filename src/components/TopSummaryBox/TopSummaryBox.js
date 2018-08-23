import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import  KendoSwitch  from '../KendoSwitch/KendoSwitch';
import styles from './TopSummaryBox.css'
import KendoDonutChart from '../KendoDonutChart/KendoDonutChart';
import {Fade, Expand, Animation, Slide } from '@progress/kendo-react-animation';
import { CSSTransitionGroup } from 'react-transition-group';

//https://github.com/reactjs/react-transition-group/tree/v1-stable

// const inStyles = {

//     sumChartSqaure:{
//         height: '320px',
//         width: '100%',
//         // border: '1px solid #FD6060',
//         marginTop: '15px'
//     },
//     sumChartContent:{
//         height:'100%',
//         width:'100%',
//         backgroundColor:'white'
//     },
//     sumChartHeader:{
//         height: '18%',
//         width: '100%',
//         textAlign: 'center',
//         fontSize: '1.4em',
//         paddingTop:'10px',
//         backgroundColor: '#FD6060',
//     },
//     sumChartHeaderBack: {
//         height: '18%',
//         width: '100%',
//         textAlign: 'center',
//         fontSize: '1.4em',
//         paddingTop:'10px',
//         backgroundColor: 'white'
//     },
//     sumChartHeaderText: {
//         color: 'white',
//         paddingTop: '8px',
//     },
//     sumChartHeaderTextBack: {
//         color: 'black',
//         paddingTop: '8px',
//     },
//     slideContainer:{
//         width:'90%',
//         alignContent:'center'
//     }
// }
class TopSummaryBox extends Component {

    constructor(props){
        super(props);
        this.state = { 
            show: true,
            // chart1ArrowCSS: "arrow_box",
            // chart2ArrowCSS: "",
            // chart3ArrowCSS: "",
            // chart4ArrowCSS: "",
            // activeCard: 'card1',
            isToggleButtonChecked: false
        };
        this.enableChart1Arrow = this.enableChart1Arrow.bind(this);
        this.enableChart2Arrow = this.enableChart2Arrow.bind(this);
        this.enableChart3Arrow = this.enableChart3Arrow.bind(this);
        this.enableChart4Arrow = this.enableChart4Arrow.bind(this);

    }
  
    enableChart1Arrow(event){

        // this.setState({ chart1ArrowCSS: "arrow_box",
        //                 chart2ArrowCSS: "",
        //                 chart3ArrowCSS: "",
        //                 chart4ArrowCSS: "" });
        this.props.handleSummaryClick(1);
    }
    enableChart2Arrow(){
        // this.setState({ chart2ArrowCSS: "arrow_box",
        //                 chart1ArrowCSS: "",
        //                 chart3ArrowCSS: "",
        //                 chart4ArrowCSS: ""});
        this.props.handleSummaryClick(2);

    }
    enableChart3Arrow(){
        // this.setState({ chart3ArrowCSS: "arrow_box",
        //                 chart2ArrowCSS: "",
        //                 chart1ArrowCSS: "",
        //                 chart4ArrowCSS: ""});
        this.props.handleSummaryClick(3);

    }
    enableChart4Arrow(){
        // this.setState({ chart4ArrowCSS: "arrow_box",
        //                 chart2ArrowCSS: "",
        //                 chart1ArrowCSS: "",
        //                 chart3ArrowCSS: ""});
        this.props.handleSummaryClick(4);

    }

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

    //   Event handler for toggle change 'Financials' and 'Joruneys'
    onToggleButtonChanged = (e) => {
        let toggleState = this.state.isToggleButtonChecked;
        this.setState({isToggleButtonChecked: !toggleState});
    }
   
    render(){
        const { activeCard } = this.state;

        const chart1 = this.state.show ? ( 
        <div className={`sumChartSquare ${activeCard === 'card1' ? 'selectedCard ' : ''}`} 
        onClick={e => this.selectedCard(e, 'card1')}>
            <div className="sumChartContent">
                <div className={`sumChartHeader ${activeCard === 'card1' ? 'selectedCardHeaderRed' : ''}`}>
                <p className={`sumChartHeaderText ${activeCard === 'card1' ? 'selectedCardText' : ''}`}
                >Net New ARR</p>
                </div>
                    <div className={`donutChart ${activeCard === 'card1' ? 'arrow_box' : ''}`}>
                        <div className="zoom">
                        <KendoDonutChart donutColor="red" donutCenterRender= {()=> 
                        <div><h2>$149.9M</h2><h6>Target</h6><h4>$277.9M</h4></div>}/> 
                        </div>
                    </div>
                </div>
        </div>) : null;

        const chart2 = this.state.show ? ( 
        <div className={`sumChartSquare ${activeCard === 'card2' ? 'selectedCard' : ''}`} 
        onClick={e => this.selectedCard(e, 'card2')}>
            <div className="sumChartContent">
                <div className={`sumChartHeader ${activeCard === 'card2' ? 'selectedCardHeaderRed' : ''}`} >
                    <p className={`sumChartHeaderTest ${activeCard === 'card2' ? 'selectedCardText' : ''}`}>Gross New ARR</p>
                    </div>
                    <div className={`donutChart ${activeCard === 'card2' ? 'arrow_box' : ''}`}>
                        <div className="zoom">
                            <KendoDonutChart donutColor="red" donutCenterRender= {()=> 
                                <div><h2>$159.9M</h2><h6>Target</h6><h4>$277.9M</h4></div>}/> 
                        </div>
                    </div>
                </div>
                
            </div>) : null;

        // Front of Chart 3
        const chart3 = this.state.show ? (
        <div className={`sumChartSquare ${activeCard === 'card3' ? 'selectedCard' : ''}`} 
        onClick={e => this.selectedCard(e, 'card3')} >
            <div className="sumChartContent">
            
                    <div className={`sumChartHeader ${activeCard === 'card3' ? 'selectedCardHeaderRed' : ''}`} >
                    <p className={`sumChartHeaderText ${activeCard === 'card3' ? 'selectedCardText' : ''}`}>Cancellations ARR</p>
                    </div>
                    <div className={`donutChart ${activeCard === 'card3' ? 'arrow_box' : ''}`}>
                        <div  className="zoom">
                        <KendoDonutChart donutColor="red" donutCenterRender= {()=> 
                        <div><h2>$217.5M</h2><h6>Target</h6><h4>$277.9M</h4></div>} />
                        </div>
                    </div>
                </div>
                
            </div>) : null;

        // Front of Chart 4
        const chart4 = this.state.show ? (                      
        <div className={`sumChartSquare ${activeCard === 'card4' ? 'selectedCard' : ''}`} 
        onClick={e => this.selectedCard(e, 'card4')} >
            <div className="sumChartContent">
                    <div className={`sumChartHeader ${activeCard === 'card4' ? 'selectedCardHeaderGreen' : ''}`} >
                    <p className={`sumChartHeaderText ${activeCard === 'card4' ? 'selectedCardText' : ''}`}
                >Renewel@FP ARR</p>
                    </div>
                    <div className={`donutChart ${activeCard === 'card4' ? 'arrow_box' : ''}`}>
                        <div className="zoom">
                        <KendoDonutChart donutColor="green" donutCenterRender= {()=> 
                        <div><h2>$278.0M</h2><h6>Target</h6><h4>$277.9M</h4></div>} />
                        </div>
                    </div>
                </div>
  
            </div>) : null;

        return(

            <Grid className="gridContainer" fluid>

                <CSSTransitionGroup transitionName="example"
                    transitionAppear={true} transitionAppearTimeout={1000}
                    transitionEnter={false} transitionLeave={false} >

                {/* Toggle Button */}
                <div className="container-fluid row">
                    <div className="col summaryTitleCol k-float-left">Financials Summary</div>
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

              
                <div className="chartRow">

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"  onClick = {this.enableChart1Arrow}>
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
                                         {chart1}
                                    </CSSTransitionGroup>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" onClick = {this.enableChart2Arrow}>
                    <div >
                            <div className="flipper">
                                <div className="front">
                                    {/* <!-- front content --> */}
                                    <CSSTransitionGroup
                                        className="chart1"
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={1000}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                          {chart2} 
                                    </CSSTransitionGroup>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" onClick = {this.enableChart3Arrow}>
                    <div >
                            <div className="flipper">
                                <div className="front">
                                    {/* <!-- front content --> */}
                                    <CSSTransitionGroup
                                        className="chart1"
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={1000}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                            {chart3} 
                                    </CSSTransitionGroup>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" onClick = {this.enableChart4Arrow}>
                    <div >
                            <div className="flipper">
                                <div className="front">
                                    {/* <!-- front content --> */}
                                    <CSSTransitionGroup
                                        className="chart1"
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={1000}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                            {chart4} 
                                    </CSSTransitionGroup>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>

            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return { filters: state.filters };
}

export default connect(mapStateToProps)(TopSummaryBox)