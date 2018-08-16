import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import  KendoSwitch  from '../KendoSwitch/KendoSwitch';
import styles from './TopSummaryBox.css'
import KendoDonutChart from '../KendoDonutChart/KendoDonutChart';
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
     
    }
}
class TopSummaryBox extends Component {
    componentDidMount(){

    }
    render(){
        return(

            <Grid className="gridContainer" fluid>
                <Row >
                    <Col className="summaryTitleCol" xs={12} md={12} lg={12}>
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
                    <Col  xs={12} s={12} md={6} lg={3} >
                        <div style={inStyles.sumChartSqaure} >
                            <div style={inStyles.sumChartContent}>
                                <div style={inStyles.sumChartHeader} >
                                Net New ARR
                                </div>
                                <KendoDonutChart donutCenterRender= {()=> <h3>"149.9M"</h3>} />
                                
                            </div>
                        </div>
                    </Col>
                    <Col  xs={12} s={12} md={6} lg={3}>
                        <div style={inStyles.sumChartSqaure} >
                        <div style={inStyles.sumChartContent}>
                        <div style={inStyles.sumChartContent}>
                                <div style={inStyles.sumChartHeader} >
                                Gross New ARR

                                </div>
                                <KendoDonutChart donutCenterRender= {()=> <h3>"149.9M"</h3>} />

                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col  xs={12} s={12} md={6} lg={3} >
                        <div style={inStyles.sumChartSqaure} >
                        <div style={inStyles.sumChartContent}>
                        <div style={inStyles.sumChartContent}>
                                <div style={inStyles.sumChartHeader} >
                                Cancellations ARR

                                </div>
                                <KendoDonutChart donutCenterRender= {()=> <h3>"149.9M"</h3>} />

                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} s={12} md={6} lg={3} >
                        <div style={inStyles.sumChartSqaure} >
                        <div style={inStyles.sumChartContent}>
                        <div style={inStyles.sumChartContent}>
                                <div style={inStyles.sumChartHeader} >
                                Renewel@FP ARR

                                </div>
                                <KendoDonutChart donutCenterRender= {()=> <h3>"149.9M"</h3>} />

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