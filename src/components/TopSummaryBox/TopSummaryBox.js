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
    sumChartHeaderBack: {
        height: '18%',
        width: '100%',
        textAlign: 'center',
        fontSize: '1.4em',
        paddingTop:'10px',
        backgroundColor: 'white'
    },
    sumChartHeaderText: {
        color: 'white',
        paddingTop: '8px',
    },
    sumChartHeaderTextBack: {
        color: 'black',
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
        this.state = { show: true };
    }
  
   
    render(){

        // Back of Chart 1
        const chart1Back = this.state.show ? (
        <div style={inStyles.sumChartSqaure} >
            <div style={inStyles.sumChartContent}>
                <div style={inStyles.sumChartHeaderBack} >
                <p style={inStyles.sumChartHeaderTextBlack}>Chart 1 Back Title</p>
                </div>
                    <div className="donutChart ">
                        {/* Back Content for Chart 1 Goes Here */}
                    </div>
                </div>
        </div>): null;

        // Front of Chart 1
        const chart1 = this.state.show ? ( 
        <div style={inStyles.sumChartSqaure} >
            <div style={inStyles.sumChartContent}>
                <div style={inStyles.sumChartHeader} >
                <p style={inStyles.sumChartHeaderText}>Net New ARR</p>
                </div>
                    {/* arrow_box on bottom when clicked */}
                    <div className="donutChart ">
                    <KendoDonutChart donutCenterRender= {()=> 
                    <div><h2>$149.9M</h2><span>TARGET</span><h6>$277.9M</h6></div>}/> 
                    </div>
                </div>
        </div>) : null;

        // Back of Chart 2
        const chart2Back = this.state.show ? (
            <div style={inStyles.sumChartSqaure} >
                <div style={inStyles.sumChartContent}>
                    <div style={inStyles.sumChartHeaderBack} >
                    <p style={inStyles.sumChartHeaderTextBlack}>Chart 2 Back Title</p>
                    </div>
                      {/* arrow_box on bottom when clicked */}
                        <div className="donutChart ">
                            {/* Back Content for Chart 1 Goes Here */}
                        </div>
                    </div>
            </div>): null;

        // Front of Chart 2
        const chart2 = this.state.show ? ( 
        <div style={inStyles.sumChartSqaure} >
            <div style={inStyles.sumChartContent}>
            <div style={inStyles.sumChartContent}>
                    <div style={inStyles.sumChartHeader} >
                    <p style={inStyles.sumChartHeaderText}>Gross New ARR</p>
                    </div>
                      {/* arrow_box on bottom when clicked */}
                        <div className="donutChart">
                        <KendoDonutChart donutCenterRender= {()=> 
                            <div><h2>$159.9M</h2><span>TARGET</span><h6>$277.9M</h6></div>}/> 
                        </div>
                </div>
                </div>
            </div>) : null;

        // Back of Chart 3
        const chart3Back = this.state.show ? (
            <div style={inStyles.sumChartSqaure} >
                <div style={inStyles.sumChartContent}>
                    <div style={inStyles.sumChartHeaderBack} >
                    <p style={inStyles.sumChartHeaderTextBlack}>Chart 3 Back Title</p>
                    </div>
                      {/* arrow_box on bottom when clicked */}
                        <div className="donutChart ">
                            {/* Back Content for Chart 1 Goes Here */}
                        </div>
                    </div>
            </div>): null;


        // Front of Chart 3
        const chart3 = this.state.show ? (
        <div style={inStyles.sumChartSqaure} >
            <div style={inStyles.sumChartContent}>
            <div style={inStyles.sumChartContent}>
                    <div style={inStyles.sumChartHeader} >
                    <p style={inStyles.sumChartHeaderText}>Cancellations ARR</p>
                    </div>
                      {/* arrow_box on bottom when clicked */}
                    <div className="donutChart">
                    <KendoDonutChart donutCenterRender= {()=> 
                    <div><h2>$217.5M</h2><span>TARGET</span><h6>$277.9M</h6></div>} />
                    </div>
                </div>
                </div>
            </div>) : null;

        // Back of Chart 4
        const chart4Back = this.state.show ? (
            <div style={inStyles.sumChartSqaure} >
                <div style={inStyles.sumChartContent}>
                    <div style={inStyles.sumChartHeaderBack} >
                    <p style={inStyles.sumChartHeaderTextBlack}>Chart 4 Back Title</p>
                    </div>
                        {/* Put arrow_box class on bottom div when activated or clicked */}
                        <div className="donutChart ">
                            {/* Back Content for Chart 1 Goes Here */}
                        </div>
                    </div>
            </div>): null;

        // Front of Chart 4
        const chart4 = this.state.show ? (                      
        <div style={inStyles.sumChartSqaure} >
            <div style={inStyles.sumChartContent}>
            <div style={inStyles.sumChartContent}>
                    <div style={inStyles.sumChartHeader} >
                    
                    <p style={inStyles.sumChartHeaderText}>Renewel@FP ARR</p>
                    </div>
                      {/* arrow_box on bottom when clicked */}
                    <div className="donutChart">
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

                    {/* Card 1 */}
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="front">
                                {/* <!-- front content --> */}
                                <CSSTransitionGroup
                                    transitionName="example"
                                    transitionAppear={true}
                                    transitionAppearTimeout={1000}
                                    transitionEnter={false} 
                                    transitionLeave={false} onClick = {this.props.handleSummaryClick}>
                                        {chart1} 
                                </CSSTransitionGroup>
                            </div>
                            <div class="back">
                                {/* <!-- back content --> */}
                                <CSSTransitionGroup
                                    transitionName="example"
                                    transitionAppear={true}
                                    transitionAppearTimeout={1000}
                                    transitionEnter={false} 
                                    transitionLeave={false} onClick = {this.props.handleSummaryClick}>
                                        {chart1Back} 
                                </CSSTransitionGroup>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="front">
                                {/* <!-- front content --> */}
                                <CSSTransitionGroup
                                    transitionName="example"
                                    transitionAppear={true}
                                    transitionAppearTimeout={1000}
                                    transitionEnter={false} 
                                    transitionLeave={false} onClick = {this.props.handleSummaryClick}>
                                        {chart2} 
                                </CSSTransitionGroup>
                            </div>
                            <div class="back">
                                {/* <!-- back content --> */}
                                <CSSTransitionGroup
                                    transitionName="example"
                                    transitionAppear={true}
                                    transitionAppearTimeout={1000}
                                    transitionEnter={false} 
                                    transitionLeave={false} onClick = {this.props.handleSummaryClick}>
                                        {chart2Back} 
                                </CSSTransitionGroup>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="front">
                                {/* <!-- front content --> */}
                                <CSSTransitionGroup
                                    transitionName="example"
                                    transitionAppear={true}
                                    transitionAppearTimeout={1000}
                                    transitionEnter={false} 
                                    transitionLeave={false} onClick = {this.props.handleSummaryClick}>
                                        {chart3} 
                                </CSSTransitionGroup>
                            </div>
                            <div class="back">
                                {/* <!-- back content --> */}
                                <CSSTransitionGroup
                                    transitionName="example"
                                    transitionAppear={true}
                                    transitionAppearTimeout={1000}
                                    transitionEnter={false} 
                                    transitionLeave={false} onClick = {this.props.handleSummaryClick}>
                                        {chart3Back} 
                                </CSSTransitionGroup>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="front">
                                {/* <!-- front content --> */}
                                <CSSTransitionGroup
                                    transitionName="example"
                                    transitionAppear={true}
                                    transitionAppearTimeout={1000}
                                    transitionEnter={false} 
                                    transitionLeave={false} onClick = {this.props.handleSummaryClick}>
                                        {chart4} 
                                </CSSTransitionGroup>
                            </div>
                            <div class="back">
                                {/* <!-- back content --> */}
                                <CSSTransitionGroup
                                    transitionName="example"
                                    transitionAppear={true}
                                    transitionAppearTimeout={1000}
                                    transitionEnter={false} 
                                    transitionLeave={false} onClick = {this.props.handleSummaryClick}>
                                        {chart4Back} 
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