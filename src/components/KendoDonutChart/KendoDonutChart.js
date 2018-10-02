import React, { Component } from 'react';
import {
    Chart,
    ChartLegend,
    ChartArea,
    ChartSeries,
    ChartSeriesItem,
  } from '@progress/kendo-react-charts';

  
class KendoDonutChart extends Component {


    constructor(props){
        super(props);
    }

    render(){

       const ChartContainer = () => (
        <Chart donutCenterRender={this.props.donutCenterRender}>
        <ChartLegend visible={false} />
        <ChartArea background="none" height={160}/>
        <ChartSeries>
            <ChartSeriesItem
            type="donut"
            startAngle={90}
            padding={0}
            data={[{"kind":"Data","Share":.65, "color": this.props.donutColor},{ "kind": "Missed","Share":.25, "color": '#F6F5F5' }]}
            field="Share"
            categoryField="kind"
            colorField="color"
            holeSize={67}
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