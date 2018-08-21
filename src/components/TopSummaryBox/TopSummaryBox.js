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

const inStyles = {

    sumChartSqaure:{
        height: '320px',
        width: '100%',
        // border: '1px solid #FD6060',
        marginTop: '15px'
    },
    sumChartContent:{
        height:'100%',
        width:'100%',
        backgroundColor:'white'
    },
    sumChartHeader:{
        height: '18%',
        width: '100%',
        textAlign: 'center',
        fontSize: '1.4em',
        paddingTop:'10px',
        backgroundColor: '#FD6060',
    },
    sumChartHeaderText: {
        color: 'white',
        paddingTop: '8px',
        
    },
    slideContainer:{
        width:'90%',
        alignContent:'center'
    }
}
class TopSummaryBox extends Component {

    constructor(props){
        super(props);
        this.state = { 
            show: true,
            chart1ArrowCSS: "",
            chart2ArrowCSS: "",
            chart3ArrowCSS: "",
            chart4ArrowCSS: "",

        
        };
        this.enableChart1Arrow = this.enableChart1Arrow.bind(this);
        this.enableChart2Arrow = this.enableChart2Arrow.bind(this);
        this.enableChart3Arrow = this.enableChart3Arrow.bind(this);
        this.enableChart4Arrow = this.enableChart4Arrow.bind(this);

    }
  
    enableChart1Arrow(event){

        this.setState({ chart1ArrowCSS: "arrow_box",
                        chart2ArrowCSS: "",
                        chart3ArrowCSS: "",
                        chart4ArrowCSS: "" });
        this.props.handleSummaryClick(1);
    }
    enableChart2Arrow(){
        this.setState({ chart2ArrowCSS: "arrow_box",
                        chart1ArrowCSS: "",
                        chart3ArrowCSS: "",
                        chart4ArrowCSS: ""});
        this.props.handleSummaryClick(2);

    }
    enableChart3Arrow(){
        this.setState({ chart3ArrowCSS: "arrow_box",
                        chart2ArrowCSS: "",
                        chart1ArrowCSS: "",
                        chart4ArrowCSS: ""});
        this.props.handleSummaryClick(3);

    }
    enableChart4Arrow(){
        this.setState({ chart4ArrowCSS: "arrow_box",
                        chart2ArrowCSS: "",
                        chart1ArrowCSS: "",
                        chart3ArrowCSS: ""});
        this.props.handleSummaryClick(4);

    }
   
    render(){

        const chart1 = this.state.show ? ( 
        <div style={inStyles.sumChartSqaure} >
            <div style={inStyles.sumChartContent}>
                <div style={inStyles.sumChartHeader} >
                <p style={inStyles.sumChartHeaderText}>Net New ARR</p>
                </div>
                    <div className={"donutChart " + this.state.chart1ArrowCSS}>
                    <KendoDonutChart donutCenterRender= {()=> 
                    <div><h2>$149.9M</h2><span>TARGET</span><h6>$277.9M</h6></div>}/> 
                    </div>
                </div>
        </div>) : null;
        const chart2 = this.state.show ? ( 
        <div style={inStyles.sumChartSqaure} >
            <div style={inStyles.sumChartContent}>
            <div style={inStyles.sumChartContent}>
                    <div style={inStyles.sumChartHeader} >
                    <p style={inStyles.sumChartHeaderText}>Gross New ARR</p>
                    </div>
                        <div className={ "donutChart " + this.state.chart2ArrowCSS}>
                        <KendoDonutChart donutCenterRender= {()=> 
                            <div><h2>$159.9M</h2><span>TARGET</span><h6>$277.9M</h6></div>}/> 
                        </div>
                </div>
                </div>
            </div>) : null;
        const chart3 = this.state.show ? (
        <div style={inStyles.sumChartSqaure} >
            <div style={inStyles.sumChartContent}>
            <div style={inStyles.sumChartContent}>
                    <div style={inStyles.sumChartHeader} >
                    <p style={inStyles.sumChartHeaderText}>Cancellations ARR</p>
                    </div>
                    <div className={"donutChart "+ this.state.chart3ArrowCSS}>
                    <KendoDonutChart donutCenterRender= {()=> 
                    <div><h2>$217.5M</h2><span>TARGET</span><h6>$277.9M</h6></div>} />
                    </div>
                </div>
                </div>
            </div>) : null;
        const chart4 = this.state.show ? (                      
        <div style={inStyles.sumChartSqaure} >
            <div style={inStyles.sumChartContent}>
            <div style={inStyles.sumChartContent}>
                    <div style={inStyles.sumChartHeader} >
                    
                    <p style={inStyles.sumChartHeaderText}>Renewel@FP ARR</p>
                    </div>
                    <div className= {"donutChart "+ this.state.chart4ArrowCSS}>
                    <KendoDonutChart donutCenterRender= {()=> 
                    <div><h2>$32.1M</h2><span></span><h6>$277.9M</h6></div>} />
                    </div>
                </div>
                </div>
            </div>) : null;

        return(

            <Grid className="gridContainer" fluid>
                <Row bsClass="fluid">
                <CSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={1000}
                            transitionEnter={false} 
                            transitionLeave={false} >
                    <Col className="summaryTitleCol" xs={12} md={12} lg={12} >
                    Summary
                    <div className="switchCol">
                        <span className="financialsLabel">Financials</span>
                        < KendoSwitch   onLabel="F" offLabel="J" />
                        <span className="journeysLabel">Journeys</span>
                    </div>
                    </Col>
                    </CSSTransitionGroup>

                </Row>
                <div className="chartRow">

                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3"  onClick = {this.enableChart1Arrow}>
                        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                            <div className="flipper">
                                <div className="front">
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
                                <div className="back">
                                    {/* <!-- back content --> */}
                                    <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={1000}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                        <div style={inStyles.sumChartSqaure} >
                                            <div style={inStyles.sumChartContent}>
                                                <div style={inStyles.sumChartHeader} >
                                                <p style={inStyles.sumChartHeaderText}>Net New ARR</p>
                                                </div>
                                                    <div  className={this.state.chart1ArrowCSS}>
                                                    Hello World
                                                    <div><h2>$149.9M</h2><span>TARGET</span><h6>$277.9M</h6></div>
                                                    </div>
                                                </div>
                                        </div>
                                    </CSSTransitionGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" onClick = {this.enableChart2Arrow}>
                    <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
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
                                <div className="back">
                                    {/* <!-- back content --> */}
                                    <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={1000}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                        <div style={inStyles.sumChartSqaure} >
                                            <div style={inStyles.sumChartContent}>
                                                <div style={inStyles.sumChartHeader} >
                                                <p style={inStyles.sumChartHeaderText}>Net New ARR</p>
                                                </div>
                                                    <div  className={this.state.chart2ArrowCSS}>
                                                    Hello World
                                                    <div><h2>$149.9M</h2><span>TARGET</span><h6>$277.9M</h6></div>
                                                    </div>
                                                </div>
                                        </div>
                                    </CSSTransitionGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" onClick = {this.enableChart3Arrow}>
                    <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
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
                                <div className="back">
                                    {/* <!-- back content --> */}
                                    <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={1000}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                        <div style={inStyles.sumChartSqaure} >
                                            <div style={inStyles.sumChartContent}>
                                                <div style={inStyles.sumChartHeader} >
                                                <p style={inStyles.sumChartHeaderText}>Net New ARR</p>
                                                </div>
                                                    <div  className={this.state.chart3ArrowCSS}>
                                                    Hello World
                                                    <div><h2>$149.9M</h2><span>TARGET</span><h6>$277.9M</h6></div>
                                                    </div>
                                                </div>
                                        </div>
                                    </CSSTransitionGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" onClick = {this.enableChart4Arrow}>
                    <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
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
                                <div className="back">
                                    {/* <!-- back content --> */}
                                    <CSSTransitionGroup
                                        transitionName="example"
                                        transitionAppear={true}
                                        transitionAppearTimeout={1000}
                                        transitionEnter={false} 
                                        transitionLeave={false} >
                                        <div style={inStyles.sumChartSqaure} >
                                            <div style={inStyles.sumChartContent}>
                                                <div style={inStyles.sumChartHeader} >
                                                <p style={inStyles.sumChartHeaderText}>Net New ARR</p>
                                                </div>
                                                    <div  className={this.state.chart4ArrowCSS}>
                                                    Hello World
                                                    <div><h2>$149.9M</h2><span>TARGET</span><h6>$277.9M</h6></div>
                                                    </div>
                                                </div>
                                        </div>
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