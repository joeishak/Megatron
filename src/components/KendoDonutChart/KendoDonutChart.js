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

const inStyles = {
    offColor:{
        color: '#F6F5F5'
    },
    onColor:{
        color: '#FD4D4D'
    }
}
  
class KendoDonutChart extends Component {
    constructor(props){
        super(props);
    }



    render(){
       const ChartContainer = () => (
        <Chart donutCenterRender={this.props.donutCenterRender}>
        <ChartLegend visible={false} />
        <ChartArea background="none" height={210}/>
        <ChartSeries>
            <ChartSeriesItem
            type="donut"
            startAngle={90}
            padding={0}
            data={[{"kind":"Data","Share":.65, "color": '#FD6060'},{ "kind": "Missed","Share":.25, "color": '#F6F5F5' }]}
            field="Share"
            categoryField="kind"
            colorField="color"
            holeSize={90}
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