import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartArea,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels
  } from '@progress/kendo-react-charts';
class KendoDonutChart extends Component {
    constructor(props){
        super(props);
    }

    render(){
       const ChartContainer = () => (
        <Chart donutCenterRender={this.props.donutCenterRender}>
        <ChartLegend visible={false} />
        <ChartArea background="none" height={200}/>
        <ChartSeries>
            <ChartSeriesItem
            type="donut"
            startAngle={150}
            data={[{"kind":"Data","Share":.35},{ "kind": "Missed","Share":.25}]}
            field="Share"
            categoryField="kind"
            colorField="color"
            holeSize={85}
            dynamicHeight='true'
            >
            </ChartSeriesItem>
        </ChartSeries>
    </Chart>
       );
        return(
       <ChartContainer />
        )
    }
}

export default (KendoDonutChart)