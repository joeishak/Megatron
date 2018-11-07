// Npm Modules
import React, {Component } from 'react';
import {connect } from 'react-redux';
import * as actions from 'actions';
import styles from './KendoMultiChart.css';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem,
    ChartAxisDefaults,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartArea,
    ChartSeriesItemTooltip,
    ChartTooltip,
    ChartLegend,
    ChartLegendItem
} from '@progress/kendo-react-charts';


class KendoMultiChart extends Component {

    //When the component is constructed
    constructor(props){
        super(props);
        // Initialize state
        this.state = {
             data: [],
             overIsVisible: true,
             yAxisLabel: 'Million $',
             yAxisText: 'Million',
             multiChartValidIndexes: [3,4,5,6]
            
        };
        this.formatDataValues = this.formatDataValues.bind(this);
    }
 
    // formatYAxisValues = (valuesArr) => {
    //     const returnValuesArr = valuesArr.map(ele => {
    //         if(ele> 1000000)
    //         return (ele/1000000);
    //         else return (ele/1000);
    //     });

    //     return returnValuesArr;
    // }

    // labelContent = (type, e) => {
    //     console.log('debug', e.value);
    //     console.log('debug', type);
    //     const suffix = ' M';
    //     const prefix = '$';
    //     return ( prefix + (parseInt(e.value)/ 1000000) + suffix);
    // }
 
    // labelPercentageContent(e){
    //     const prefix = '% ';
    //     return ( prefix +e.value);

    // }

    // labelUnitsContent(e){
    //     const suffix = ' M';
    //     return ( parseInt(e.value)/1000000) + suffix
    // }

    formatDataValues(arr){
        let newArr;
        newArr = arr.map(item=>{
            return item.toFixed(1);
        });
        return newArr;
    }

    getTooltipType = (seriesType) => {
        switch (seriesType) {
            case 'Actual':
                return 'tooltipActual';
            case 'Target':
                return 'tooltipTarget';
            case 'Last Year':
                return 'tooltipLastYear';
        }
    }

    renderUnits(value) {
        let returnValue = '';
        value = parseInt(value)
        if (value > 1000 && value <= 999999) {
            value = (value/1000).toFixed(1);
            returnValue =  value.toString() + ' K';
        } else if (value > 1000000 && value <= 999999999) {
            value = (value/1000000).toFixed(1);
            returnValue =  value.toString() + ' M';
        } else if (value > 1000000000 && value <= 999999999999) {
            value = (value/1000000000).toFixed(1);
            returnValue =  value.toString() + ' B';
        } else if (value > 1000000000 && value <= 999999999999999) {
            value = (parseInt(value)/1000000000000).toFixed(1);
            returnValue = value.toString() + ' T';
        } else {
            return  value.toString();
        }
        return returnValue;
    }

    renderValue = (type, value) => {
        switch (type) {
            case 'currency':
                return  '$ ' + this.renderUnits(value);
            case 'units':
                return  this.renderUnits(value);
            case 'percent':
                return  (value/ 10).toFixed(2).toString() + ' %';
        }
    }

    render(){

        const chartData = (this.props.multichartMetric ? this.props.activeMultichart : this.props.activeUnits);
        const categories = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'];

        const SharedTooltip = (props) => {
            // console.log('debug', props);
            const { points } = props;
            const title = props.categoryText;
            return (
                <div className="tooltipContainer">
                    <div className="tooltipTitle"><b>Week {title}</b></div>
                    {points.map((point) => ( 

                    <div>
                        <div className={`actualMarker ${this.getTooltipType(point.series.name)}`}></div> 
                        <b>{point.series.name}</b> : <div className="tooltipValue"> {this.renderValue(this.props.valueType, point.value)} </div>
                    </div>))}
                </div>
            );
        }
        const sharedTooltipRender = (context) => (<SharedTooltip {...context}/>)

        // Y axis Values
        const labelContentRender = (props) => { return this.renderValue(this.props.valueType, props.value); }

        // legend labels
        const legendRender = (props) => {
           
            const customVisual = props.createVisual();

            return customVisual;
        }

        const ChartContainer = () => (
            
                <Chart pannable={false} zoomable={false} >
                    <ChartLegend  position='bottom' labels={{color: this.props.color}} >
                        <ChartLegendItem visual={legendRender}/>
                    </ChartLegend>
                    <ChartTooltip shared={true} background="black" color="white" render={sharedTooltipRender}/>
                    <ChartCategoryAxis>
                            <ChartCategoryAxisItem max='13' maxDivisions={13} />
                    </ChartCategoryAxis>
                        {/*  labels={{format: 'c0'}} */}
                    <ChartAxisDefaults majorGridLines={false} minorGridLines={false}/>
                    <ChartArea background="transparent" height={this.props.chartHeight} />
                    <ChartTitle text="" />
                    <ChartValueAxis>
                        <ChartValueAxisItem color={this.props.color} labels={{content: labelContentRender, skip: 1, step: 2}} />
                    </ChartValueAxis>
                    <ChartCategoryAxis major >
                        <ChartCategoryAxisItem color={this.props.color} categories={categories}>
                        {/* Text title to months */}
                        <ChartCategoryAxisTitle text="" />
                        </ChartCategoryAxisItem>
                    </ChartCategoryAxis>
                    {(this.props.multichartMetric) ?
                        <ChartSeries >
                            <ChartSeriesItem name='Actual' type="column"   gap={2}  width='20px' spacing={0.25} data={this.formatDataValues(chartData[0])} color={this.props.color} visible={this.state.seriesVisible} >
                                    <ChartSeriesItemTooltip render={this.tooltipRender} background="#3c3c3c" />
                            </ChartSeriesItem>
                            <ChartSeriesItem name='Target' type="bar"   zIndex={0} spacing={0.25} data={this.formatDataValues(chartData[1])} color='#0E9CC6'>
                                    <ChartSeriesItemTooltip  background="#3c3c3c"   />
                            </ChartSeriesItem>
                            <ChartSeriesItem name='Last Year' type="line" data={this.formatDataValues(chartData[2])} color='#DFDE43'  >
                                    <ChartSeriesItemTooltip  background="#3c3c3c"  />
                            </ChartSeriesItem>
                            <ChartSeriesItem name='Last Quarter' type="line" data={chartData[3]} color='white'  >
                                <ChartSeriesItemTooltip  background="#3c3c3c"  />
                            </ChartSeriesItem>
                        </ChartSeries> : 
                        <ChartSeries >
                            <ChartSeriesItem name='Actual' type="column" gap={2} spacing={0.25} data={chartData[0]} color={this.props.color} >
                                <ChartSeriesItemTooltip  background="#3c3c3c"   />
                            </ChartSeriesItem>
                            <ChartSeriesItem name='Target' type="line" data={chartData[1]} color='#0E9CC6'>
                                <ChartSeriesItemTooltip background="#3c3c3c"   />
                            </ChartSeriesItem>
                            <ChartSeriesItem name='Last Year' type="line" data={chartData[2]} color='#DFDE43'  >
                                <ChartSeriesItemTooltip  background="#3c3c3c"  />
                            </ChartSeriesItem>
                            <ChartSeriesItem name='Last Quarter' type="line" data={chartData[3]} color='white'  >
                                <ChartSeriesItemTooltip  background="#3c3c3c"  />
                            </ChartSeriesItem>
                        </ChartSeries>
                    }
                    
                </Chart>
    );
    return(
        <ChartContainer />
    )
}

}
function mapStateToProps(state){
    // console.log('debug',state.activeSummarySquare.valueType);
    return { 
        switchFilter: state.switchFilter, 
        activeSummarySquare: state.activeSummarySquare,
        multichartMetric: state.multichartIsArr, 
        activeUnits: state.activeSummarySquare.details.unitMultichart, 
        activeMultichart: state.activeSummarySquare.details.multichart, 
        valueType: state.activeSummarySquare.valueType
    }
}
export default connect(mapStateToProps,actions)( KendoMultiChart);