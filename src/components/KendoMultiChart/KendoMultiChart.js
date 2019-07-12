// Npm Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import styles from './KendoMultiChart.css';
import * as utils from '../../utilities.js';
import {SUMMARY_KPIS} from '../../Constants/consts';

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
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            data: [],
            overIsVisible: true,
            yAxisLabel: 'Million $',
            yAxisText: 'Million',
            multiChartValidIndexes: [3, 4, 5, 6],
            count: 0
        };
        this.formatDataValues = this.formatDataValues.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.activePrimary === 0) {
            if (this.props.activeMultichart[0][0] !== nextProps.activeMultichart[0][0]) {
                return true;
            }
        }
        if (this.props.multichartMetric !== nextProps.multichartMetric) {

            return true;
        }
        if (this.props.chartHeight !== nextProps.chartHeight) {
            return true;
        }
        if (this.props.activeMultichart !== nextProps.activeMultichart) {
            // if(this.props.activeMultichart[0][0] === nextProps.activeMultichart[0][0] &&
            //     this.props.activeMultichart[1][0] === nextProps.activeMultichart[1][0]){
            //     return false
            // }
            return true;
        }
        return false;
    }
    
    formatDataValues(arr) {
        let newArr;
        if (arr !== undefined) {
            newArr = arr.map(item => {
                if (this.props.multichartMetric === true) {
                    if (item) {
                        return parseFloat(item).toFixed(4)
                    }
                }
                return item
            });
        }
        return newArr;

    }

    getTooltipType = (seriesType) => {
        switch (seriesType) {
            case 'Actuals':
                return 'tooltipActual';
            case 'Targets':
                return 'tooltipTarget';
            case 'Last Quarter':
                return 'tooltipLastQuarter';
            case 'Last Year':
                return 'tooltipLastYear';
        }
    }

    getColor(activeSecondary, originalColor, type) {
        switch (originalColor) {
            case 'red':
                switch (type) {
                    case 'bg':
                        if (activeSecondary === SUMMARY_KPIS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_KPIS.RENEW_CANCEL ||
                            activeSecondary === SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM || activeSecondary ===SUMMARY_KPIS.RENEW_QTR_PF ||
                            activeSecondary === SUMMARY_KPIS.RENEW_QTR_UI || activeSecondary ===SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E) { return 'ttBGGreen' } else { return 'ttBGRed' }
                    case  'txt':
                        if (activeSecondary === SUMMARY_KPIS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_KPIS.RENEW_CANCEL ||
                            activeSecondary === SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM || activeSecondary ===SUMMARY_KPIS.RENEW_QTR_PF ||
                            activeSecondary === SUMMARY_KPIS.RENEW_QTR_UI || activeSecondary ===SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E) { return 'textGreen' } else { return 'textRed' }
                    case 'border':
                        if (activeSecondary === SUMMARY_KPIS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_KPIS.RENEW_CANCEL ||
                            activeSecondary === SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM || activeSecondary ===SUMMARY_KPIS.RENEW_QTR_PF ||
                            activeSecondary === SUMMARY_KPIS.RENEW_QTR_UI || activeSecondary ===SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E) { return '#0DB16E' } else { return '#FF0000' }
                }
            default:
            switch (type) {
                case 'bg':
                    if (activeSecondary === SUMMARY_KPIS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_KPIS.RENEW_CANCEL ||
                        activeSecondary === SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM || activeSecondary ===SUMMARY_KPIS.RENEW_QTR_PF ||
                        activeSecondary === SUMMARY_KPIS.RENEW_QTR_UI || activeSecondary ===SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E) { return 'ttBGRed' } else { return 'ttBGGreen' }
                case  'txt':
                    if (activeSecondary === SUMMARY_KPIS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_KPIS.RENEW_CANCEL ||
                        activeSecondary === SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM || activeSecondary ===SUMMARY_KPIS.RENEW_QTR_PF ||
                        activeSecondary === SUMMARY_KPIS.RENEW_QTR_UI || activeSecondary ===SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E) { return 'textRed' } else { return 'textGreen' }
                case 'border':
                    if (activeSecondary === SUMMARY_KPIS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_KPIS.RENEW_CANCEL ||
                        activeSecondary === SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM || activeSecondary ===SUMMARY_KPIS.RENEW_QTR_PF ||
                        activeSecondary === SUMMARY_KPIS.RENEW_QTR_UI || activeSecondary ===SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E) { return '#FF0000' } else { return '#0DB16E' }
            }
        }
    }

    render() {
        const chartData = (this.props.multichartMetric === true ? this.props.activeMultichart : this.props.activeUnits);
        const categories = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'];
    
        const sharedTooltipRender = (props) => {
 
            const activeSecondary = this.props.activeSecondary;
            const { points } = props;
            let bgColor = ( (points[0] && points[1]) ? (points[0].value - points[1].value) > 0 ? `${this.getColor(activeSecondary, 'green', 'bg')}` : `${this.getColor(activeSecondary, 'red', 'bg')}` : '');
            let textColor = ( (points[0] && points[1]) ? (points[0].value - points[1].value) > 0 ? `${this.getColor(activeSecondary, 'green', 'txt')}` : `${this.getColor(activeSecondary, 'red', 'txt')}` : '');
            let borderColor = ( (points[0] && points[1]) ? (points[0].value - points[1].value) > 0 ?`${this.getColor(activeSecondary, 'green', 'border')}` :`${this.getColor(activeSecondary, 'red', 'border')}` : '');
            const title = props.categoryText;

            if (this.props.multichartMetric === true) {
                return (
                    <div className="tooltipContainer" style={{ border: `5px solid ${borderColor}`, borderRadius: '5px' }}>
                        <div className="innerContent">
                            <div className={`tooltipTitle ${bgColor}`}><b>Week {title}</b></div>
                            {points.map((point) => (
                                <div key={this.state.count++}>
                                    <div className={`actualMarker ${this.getTooltipType(point.series.name)}`}></div>
                                    <b className="series-name">{point.series.name}</b> :
                                <div className="tooltipValue">
                                        {(point.series.name === 'Actuals' ?
                                            <b className={`'series-value' + ${textColor}`}>{utils.formatMetric({ valueType: this.props.valueType, value: point.value }, 'target')}</b> :
                                            <b className="series-value">{utils.formatMetric({ valueType: this.props.valueType, value: point.value }, 'target')}
                                            </b>)}
                                    </div>
                                </div>))}
                        </div>
                    </div>


                );
            }
            else {
                return (
                    <div className="tooltipContainer" style={{ border: `5px solid ${borderColor}`, borderRadius: '5px' }}>
                        <div className="innerContent">
                            <div className={`tooltipTitle ${bgColor}`}><b>Week {title}</b></div>
                            {points.map((point) => (
                                <div key={this.state.count++}>
                                    <div className={`actualMarker ${this.getTooltipType(point.series.name)}`}></div>
                                    <b className="series-name">{point.series.name}</b> :
                                    <div className="tooltipValue">
                                        {(point.series.name === 'Actuals' ?
                                            <b className={`'series-value' + ${textColor}`}>{utils.formatMetric({ valueType: 'units', value: point.value }, 'value')}</b> :
                                            <b className="series-value">{utils.formatMetric({ valueType: 'units', value: point.value }, 'value')}
                                            </b>)}
                                    </div>
                                </div>))}
                        </div>
                    </div>


                )
            }
        }
        // Y axis Values
        const labelContentRender = (props) => {
            if (this.props.multichartMetric === true) {
                return utils.formatMetric({ valueType: this.props.valueType, value: props.value }, 'value');
            }
            else {
                return utils.formatMetric({ valueType: 'units', value: props.value }, 'value');
            }
        }
        // legend labels
        const legendRender = (props) => {
            const customVisual = props.createVisual();
            return customVisual;
        }
        const chartLegend = this.props.deviceType === 'laptop' ?
            <ChartLegend position='bottom' labels={{ color: this.props.color }} >
                <ChartLegendItem visual={legendRender} />
            </ChartLegend> : <ChartLegend visible={false} />

        const ChartContainer = () => (
            <Chart pannable={false} zoomable={false} renderAs={'canvas'}>
                {chartLegend}
                <ChartTooltip shared={true} render={sharedTooltipRender} />
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem max='13' maxDivisions={13} />
                </ChartCategoryAxis>
                {/*  labels={{format: 'c0'}} */}
                <ChartAxisDefaults majorGridLines={false} minorGridLines={false} />
                <ChartArea background="transparent" height={this.props.chartHeight} />
                <ChartTitle text="" />
                <ChartValueAxis>
                    <ChartValueAxisItem color={this.props.color} labels={{ content: labelContentRender, skip: 1, step: 2 }} />
                </ChartValueAxis>
                <ChartCategoryAxis major >
                    <ChartCategoryAxisItem color={this.props.color} categories={categories}>
                        {/* Text title to months */}
                        <ChartCategoryAxisTitle text="" />
                    </ChartCategoryAxisItem>
                </ChartCategoryAxis>
                <ChartSeries >
                    <ChartSeriesItem name='Actuals' type="column" gap={2} width='20px' spacing={0.25} data={this.formatDataValues(chartData[0])} color={this.props.color} visible={this.state.seriesVisible} >
                        <ChartSeriesItemTooltip render={this.tooltipRender} background="#3c3c3c" />
                    </ChartSeriesItem>
                    <ChartSeriesItem name='Targets' type="bar" zIndex={0} spacing={0.25} data={this.formatDataValues(chartData[1])} color='#0E9CC6'>
                        <ChartSeriesItemTooltip background="#3c3c3c" />
                    </ChartSeriesItem>
                    <ChartSeriesItem name='Last Quarter' type="line" style="smooth" width={5} data={this.formatDataValues(chartData[3])} color='#DFDE43'  >
                        <ChartSeriesItemTooltip background="#3c3c3c" />
                    </ChartSeriesItem>
                    <ChartSeriesItem name='Last Year' type="line" style="smooth" width={5} data={this.formatDataValues(chartData[2])} color='purple'  >
                        <ChartSeriesItemTooltip background="#3c3c3c" />
                    </ChartSeriesItem>
                 
                </ChartSeries>
                }

                </Chart>
        );
        return (
            <div>
                <ChartContainer >
                </ChartContainer>
            </div>

        )
    }

}
function mapStateToProps(state) {
    return {
        multichartMetric: state.multichartIsArr,
        activePrimary: state.activeCards.primary,
        activeSecondary: state.activeCards.secondary,
        activeUnits: state.summaryData.secondary[state.activeCards.secondary].details.unitMultichart,
        activeMultichart: state.summaryData.secondary[state.activeCards.secondary].details.multichart,
        valueType: state.summaryData.secondary[state.activeCards.secondary].valueType
    }
}
export default connect(mapStateToProps, actions)(KendoMultiChart);
