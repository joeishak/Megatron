import React, {Component } from 'react';
import ReactDOM from 'react-dom';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

class KendoMultiChart extends Component {

    constructor(props){
        super(props);
        this.state = { data: [] };
    }

    render(){
        const [ firstSeries, secondSeries, thirdSeries, fourthSeries ] = [[100, 123, 234, 343], [120, 67, 231, 196], [45, 124, 189, 143], [87, 154, 210, 215]];
        const categories = ['Q1', 'Q2', 'Q3', 'Q4'];
        const ChartContainer = () => (
        <Chart>
            <ChartTitle text="Units sold" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories}>
                <ChartCategoryAxisTitle text="Months" />
                </ChartCategoryAxisItem>
            </ChartCategoryAxis>
            <ChartSeries>
                <ChartSeriesItem type="bar" gap={2} spacing={0.25} data={firstSeries} />
                <ChartSeriesItem type="bar" data={secondSeries} />
                <ChartSeriesItem type="line" data={thirdSeries} />
                <ChartSeriesItem type="line" data={fourthSeries} />
            </ChartSeries>
        </Chart>
    );
    return(
        <ChartContainer />
    )
}

}
export default KendoMultiChart;