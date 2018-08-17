import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import  KendoSwitch  from '../KendoSwitch/KendoSwitch';
import styles from './TopSummaryBox.css'
import KendoDonutChart from '../KendoDonutChart/KendoDonutChart';
import {Fade, Expand, Animation, Slide } from '@progress/kendo-react-animation';

const inStyles = {

    sumChartSqaure:{
        height: '270px',
        width: '100%',
        border: '2px solid red',
        marginTop: '15px'
    },
    sumChartContent:{
        height:'100%',
        width:'100%',
        backgroundColor:'white'
    },
    sumChartHeader:{
        height: '25%',
        width: '100%',
        textAlign: 'center',
        fontSize: '1.4em',
        paddingTop:'10px'
     
    },
    slideContainer:{

         width:'90%',
        alignContent:'center'
    }
}
class TopSummaryBox extends Component {

    constructor(props){
        super(props);
      
        this.state = { show: false };
        this.ShowCharts =  this.ShowCharts.bind(this);
        this.ShowCharts();
    }
  
   
    ShowCharts(){
        this.timeout =  setTimeout(() => { 
        this.setState({ show: !this.state.show});
        }, 1000);
    }
    render(){
        
        const chart1 = this.state.show ? (<KendoDonutChart donutCenterRender= {()=> <div><h3>$149.9M</h3><span>TARGET</span><h6>$277.9M</h6></div>}/> ) : null;
        const chart2 = this.state.show ? (<KendoDonutChart donutCenterRender= {()=> <div><h3>$335.3M</h3><span>TARGET</span><h6>$277.9M</h6></div>} />) : null;
        const chart3 = this.state.show ? (<KendoDonutChart donutCenterRender= {()=> <div><h3>$217.5M</h3><span>TARGET</span><h6>$277.9M</h6></div>} />) : null;
        const chart4 = this.state.show ? (<KendoDonutChart donutCenterRender= {()=> <div><h3>$32.1M</h3><span>TARGET</span><h6>$277.9M</h6></div>} />) : null;
        return(

            <Grid className="gridContainer" fluid>
                <Row >
                    <Col className="summaryTitleCol" xs={12} md={12} lg={12} >
                    Summary
                    <div className="switchCol">
                        <span className="financialsLabel">Financials</span>
                        < KendoSwitch   onLabel="F" offLabel="J" />
                        <span className="journeysLabel">Journeys</span>
                    </div>
                    </Col>
                    {/* <Col  xs={12} md={6} lg={3} >&nbsp;</Col> */}
                    {/* <Col  xs={12} md={6} lg={3}>
                    
                    </Col> */}
                </Row>
                <Row className="chartRow">
                
                    <Col  xs={12} s={12} md={6} lg={3} onClick = {this.props.handleSummaryClick} >
                      
                        <div style={inStyles.sumChartSqaure} >
                            <div style={inStyles.sumChartContent}>
                                <div style={inStyles.sumChartHeader} >
                                Net New ARR
                                </div>
                                <Slide style={inStyles.slideContainer}>
                                {chart1}
                                </Slide>
                                
                            </div>
                        </div>

                    </Col>
                    <Col  xs={12} s={12} md={6} lg={3} onClick = {this.props.handleSummaryClick}>
                        <div style={inStyles.sumChartSqaure} >
                        <div style={inStyles.sumChartContent}>
                        <div style={inStyles.sumChartContent}>
                                <div style={inStyles.sumChartHeader} >
                                Gross New ARR
                                </div>
                                <Slide style={inStyles.slideContainer}>
                                {chart2}
                                </Slide>

                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col  xs={12} s={12} md={6} lg={3} onClick = {this.props.handleSummaryClick}>
                        <div style={inStyles.sumChartSqaure} >
                        <div style={inStyles.sumChartContent}>
                        <div style={inStyles.sumChartContent}>
                                <div style={inStyles.sumChartHeader} >
                                Cancellations ARR
                                </div>
                                <Slide style={inStyles.slideContainer}>
                                {chart3}
                                </Slide>

                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} s={12} md={6} lg={3} onClick = {this.props.handleSummaryClick}>
                        <div style={inStyles.sumChartSqaure} >
                        <div style={inStyles.sumChartContent}>
                        <div style={inStyles.sumChartContent}>
                                <div style={inStyles.sumChartHeader} >
                                Renewel@FP ARR
                                </div>
                                <Slide style={inStyles.slideContainer}>
                                {chart4}
                                </Slide>
                            </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default (TopSummaryBox)