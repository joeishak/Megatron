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
    ChartValueAxis,
    ChartValueAxisItem,
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
        this.state = { data: [], overIsVisible: true };
    }

    render(){
        const  firstSeries = this.props.activeMultichart[0];
        const  secondSeries = this.props.activeMultichart[1];
        const  thirdSeries = this.props.activeMultichart[2];

        // console.log(this.props.activeSummary.details.multichart[0]);
        // console.log(this.props.activeSummary.details.multichart[1]);
        // console.log(this.props.activeSummary.details.multichart[2]);

        const categories = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'];
        const ChartContainer = () => (
        <Chart pannable={false} zoomable={false} >
        <ChartLegend  />

        <ChartTooltip />

         <ChartAxisDefaults majorGridLines={false} minorGridLines={false}/>
            <ChartArea background="transparent" height={this.props.chartHeight}/* gridLines='{visible: false}' */></ChartArea>
            <ChartTitle text="" />
            <ChartValueAxis>
             <ChartValueAxisItem color={this.props.color} />
            </ChartValueAxis>
            <ChartCategoryAxis major >
                <ChartCategoryAxisItem color={this.props.color} categories={categories}>
                <ChartCategoryAxisTitle text="Months" />
                </ChartCategoryAxisItem>
            </ChartCategoryAxis>
            <ChartSeries >
                <ChartSeriesItem type="column" gap={2} spacing={0.25} data={this.props.activeMultichart[0]} color={this.props.color}>
                <ChartSeriesItemTooltip background="#3c3c3c" />
                </ChartSeriesItem>
                <ChartSeriesItem type="line" data={this.props.activeMultichart[1]} color='#0E9CC6' >
                <ChartSeriesItemTooltip background="#3c3c3c"  />
                </ChartSeriesItem>
                <ChartSeriesItem type="line" data={this.props.activeMultichart[2]} color='#DFDE43'  >
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
    return { switchFilter: state.switchFilter,  activeMultichart: state.activeSummarySquare.details.multichart }
}
export default connect(mapStateToProps,actions)( KendoMultiChart);