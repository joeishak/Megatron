// Npm Modules
import React, {Component } from 'react';
import {connect } from 'react-redux';
import * as actions from 'actions';
import styles from './KendoMultiChart.css';
import * as utils from '../../utilities.js';

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
             multiChartValidIndexes: [3,4,5,6],
             count: 0
        };
        this.formatDataValues = this.formatDataValues.bind(this);
    }

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
            case 'Last Quarter':
                return 'tooltipLastQuarter';
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
            const { points } = props;
            let bgColor = (points[0].value - points[1].value )> 0 ? 'ttBGGreen': 'ttBGRed';
            let textColor =  (points[0].value - points[1].value )> 0 ? 'textGreen': 'textRed';
            let borderColor =  (points[0].value - points[1].value )> 0 ? 'borderGreen': 'borderRed';


            const title = props.categoryText;
            return (
                <div className={`'tooltipContainer ' + ${borderColor}`}>
                    <div className={`'tooltipTitle ' + ${bgColor}` }><b>Week {title}</b></div>
                    {points.map((point) => (
                    <div key={this.state.count++}>
                        <div className={`actualMarker ${this.getTooltipType(point.series.name)}`}></div>
                        <b className="series-name">{point.series.name} : </b>
                            <div className="tooltipValue">
                                {(point.series.name === 'Actual' ?
                                    <b className={`'series-value' + ${textColor}`}>{utils.formatMetric({valueType :this.props.valueType, value: point.value}, 'target')}</b> :
                                        <b className="series-value">{utils.formatMetric({valueType :this.props.valueType, value: point.value}, 'target')}
                                </b>)}
                            </div>
                    </div>))}
                </div>
            );
        }
        const sharedTooltipRender = (context) => (<SharedTooltip {...context}/>)

        // Y axis Values
        const labelContentRender = (props) => { return utils.formatMetric({valueType :this.props.valueType, value: props.value}, 'target'); }

        // legend labels
        const legendRender = (props) => {

            const customVisual = props.createVisual();

            return customVisual;
        }

        const chartLegend = this.props.deviceType === 'laptop' ?
        <ChartLegend  position='bottom' labels={{color: this.props.color}} >
            <ChartLegendItem visual={legendRender}/>
        </ChartLegend> : <ChartLegend visible={false} />

        const ChartContainer = () => (

                <Chart pannable={false} zoomable={false} >

                    {chartLegend}

                    <ChartTooltip shared={true}  border={{color: this.state.toolTipBorderColor, width: 0}} color="white" render={sharedTooltipRender}/>
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
                            <ChartSeriesItem name='Last Quarter' type="line" data={ this.formatDataValues(chartData[3])} color='purple'  >
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
                            <ChartSeriesItem name='Last Quarter' type="line" data={chartData[3]} color='purple'  >
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
    return {
        switchFilter: state.switchFilter,
        activeSummarySquare: state.secondaryData[state.activeCards.secondary],
        multichartMetric: state.multichartIsArr,
        activeUnits: state.secondaryData[state.activeCards.secondary].details.unitMultichart,
        activeMultichart: state.secondaryData[state.activeCards.secondary].details.multichart,
        valueType: state.secondaryData[state.activeCards.secondary].valueType
    }
}
export default connect(mapStateToProps,actions)( KendoMultiChart);
