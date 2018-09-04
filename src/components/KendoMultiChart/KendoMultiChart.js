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
        const [ firstSeries, secondSeries, thirdSeries ] = this.props.activeSummary.details.multichart;
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
                <ChartSeriesItem type="line" data={secondSeries} color='#0E9CC6' >
                <ChartSeriesItemTooltip background="#3c3c3c"  />

                </ChartSeriesItem>
                <ChartSeriesItem type="line" data={thirdSeries} color='#DFDE43'  >
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
    return { switchFilter: state.switchFilter, activeSummary: state.activeSummarySquare }
}
export default connect(mapStateToProps,actions)( KendoMultiChart);