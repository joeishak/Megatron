// Npm Modules
import React, {Component } from 'react';
import {connect } from 'react-redux';
import * as actions from 'actions';
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem,
    ChartArea,
    ChartAxisDefaults,
    ChartSeriesItemTooltip,
    ChartTooltip,
    ChartLegend
} from '@progress/kendo-react-charts';

class KendoMultiChart extends Component {

    //When the component is constructed
    constructor(props){
        super(props);
        // Initialize state
        this.state = { data: [] };
    }

    render(){
        const [ firstSeries, secondSeries, thirdSeries ] = [[100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                                                            [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                                                            [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]];
        const categories = ['Q3Y18', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'];
        const ChartContainer = () => (
        <Chart pannable={false} zoomable={false} >
        <ChartTooltip />
        <ChartLegend position="bottom" orientation="horizontal" />

         <ChartAxisDefaults majorGridLines={false} minorGridLines={false}/>
            <ChartArea background="transparent" height={this.props.chartHeight}/* gridLines='{visible: false}' */></ChartArea>
            <ChartTitle text="" />
            <ChartCategoryAxis major>
                <ChartCategoryAxisItem categories={categories}>
                <ChartCategoryAxisTitle text="Months" />
                </ChartCategoryAxisItem>
            </ChartCategoryAxis>
            <ChartSeries>
                <ChartSeriesItem type="column" gap={2} spacing={0.25} data={firstSeries} color={this.props.color}>
                <ChartSeriesItemTooltip background="#3c3c3c" />
                </ChartSeriesItem>
                <ChartSeriesItem type="line" data={secondSeries} >
                <ChartSeriesItemTooltip background="#3c3c3c" />

                </ChartSeriesItem>
                <ChartSeriesItem type="line" data={thirdSeries} >
                <ChartSeriesItemTooltip background="#3c3c3c" />

                </ChartSeriesItem>
            </ChartSeries>
        </Chart>
    );
    return(
        <ChartContainer />
    )
}

}
function mapStateToProps(state){
    return { switchFilter: state.switchFilter }
}
export default connect(mapStateToProps,actions)( KendoMultiChart);