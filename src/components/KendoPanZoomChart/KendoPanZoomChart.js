// Npm Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import styles from './KendoPanZoomChart.css';
import * as utils from '../../utilities.js';
import {SUMMARY_KPIS} from '../../Constants/consts';
import * as _ from 'lodash'

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


class KendoPanZoomChart extends Component {

    //When the component is constructed
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            data: [],
            overIsVisible: true,
            yAxisLabel: 'Gross New ARR',
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
                        return parseFloat(item/1000000).toFixed(2)
                    }
                }
                return item
            });
        }
        return newArr;

    }

    getTooltipType = (seriesType) => {
        switch (seriesType) {
            case 'Gross New ARR':
                return 'Gross New ARR';
            case 'Organic Visits':
                return 'Organic Visits';
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

    resetChart = (e)=>{
            
        this.forceUpdate()
    }

    render() {
        
        const chartData = (this.props.multichartMetric === true ? this.props.activeMultichart : this.props.activeUnits);
        //Nullifying the Targets
        if (this.props.nullifyQrf){
            chartData[1]= Array.from(Array(chartData[1].length),()=>0)
        }
        const categories = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'];
    
        const sharedTooltipRender = (props) => {
            // console.log(props)
            const activeSecondary = this.props.activeSecondary;
            const { points } = props;
            // let bgColor = ( (points[0] && points[1]) ? (points[0].value - points[1].value) > 0 ? `${this.getColor(activeSecondary, 'green', 'bg')}` : `${this.getColor(activeSecondary, 'red', 'bg')}` : '');
            let bgColor = 'ttBGNeutral';
            // let textColor = ( (points[0] && points[1]) ? (points[0].value - points[1].value) > 0 ? `${this.getColor(activeSecondary, 'green', 'txt')}` : `${this.getColor(activeSecondary, 'red', 'txt')}` : '');
            let textColor ='ttBGNeutral'
            // let borderColor = ( (points[0] && points[1]) ? (points[0].value - points[1].value) > 0 ?`${this.getColor(activeSecondary, 'green', 'border')}` :`${this.getColor(activeSecondary, 'red', 'border')}` : '');
            let borderColor = '#2990c4'
            const title = props.categoryText;
            let dateparts = props.categoryText.split('/')
                                        let dateString = dateparts[2]+ "-"
                                                        + (dateparts[0].length==2? dateparts[0]: ('0'+dateparts[0])) +"-"
                                                            + (dateparts[1].length==2? dateparts[1]: ('0'+dateparts[1])) 
                                                              + "T00:00:00"

            let originalRecord = _.find(this.props.correlationChart, {time_interval: dateString})  
           
                return (
                    <div className="tooltipContainer" style={{ border: `5px solid ${borderColor}`, borderRadius: '5px'}}>
                        <div className="innerContent">
                            <div className={`tooltipTitle ${bgColor}`}><b style={{fontSize: '1.2em' }}> {title}</b></div>
                            {points.map((point) => {
                                let toolTipValue;
                                let textColor
                                switch(point.series.name){
                                    case 'Gross New ARR':
                                          
                                        toolTipValue = `${parseFloat(originalRecord.gross_new_arr/1000000).toFixed(2)} M`                           
                                        // toolTipValue = `${parseFloat(this.props.correlationChart[point.categoryIndex].gross_new_arr/1000000).toFixed(2)} M`
                                        textColor= '#fbbc05'
                                        break;
                                            
                                    case 'New QFMs':
                                            toolTipValue= originalRecord.new_qfms
                                            // toolTipValue = this.props.correlationChart[point.categoryIndex].new_qfms
                                            textColor= '#fbbc05'
                                            break;
                                    case 'New UQFMs':
                                            toolTipValue= originalRecord.new_uqfms
                                            // toolTipValue = this.props.correlationChart[point.categoryIndex].new_uqfms
                                            textColor= '#fbbc05'
                                            break;
                                    case 'Organic Visits':
                                            toolTipValue= originalRecord.organic_visits
                                            // toolTipValue = this.props.correlationChart[point.categoryIndex].organic_visits
                                            textColor= '#fbbc05'
                                            break;
                                    case 'Paid Visits':
                                            toolTipValue= originalRecord.paid_visits
                                            // toolTipValue = this.props.correlationChart[point.categoryIndex].paid_visits
                                            textColor= '#fbbc05'
                                            break;
                                    case 'Total Downloads Free':
                                            toolTipValue= originalRecord.total_downloads_free
                                            // toolTipValue = this.props.correlationChart[point.categoryIndex].total_downloads_free
                                            textColor= '#fbbc05'
                                            break;
                                }

                                const textStyle={
                                    color: {textColor},
                                    fontWeight: "900"
                                }
                                return (
                                <div key={this.state.count++}>
                                    <div className={`actualMarker ${this.getTooltipType(point.series.name)}`}></div>
                                    <b className="series-name" style={{textStyle}}>{point.series.name}</b> :
                                <div className="tooltipValue">
                                <b className="series-value">{toolTipValue}
                                            </b>
                                    </div>
                                </div>)})}
                        </div>
                    </div>


                );
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

        
        const calculateMean= (data, key)=>{
            // console.log(data.map(item=>item[key]))
             return data.map(item=>item[key]).reduce((a, b)=>(Number(a)+ Number(b)))/data.length
        }

        const calculateSD=(data, key, m)=>{
            return Math.sqrt(data.reduce(function (sm, a) {
                return sm + Math.pow(a[key] - m, 2);
            }, 0) / (data.length - 1));
        }

        const getNormalizedSeries = (data)=>{
            const mean_new_qfms = calculateMean(data, 'new_qfms')
            const mean_new_uqfms = calculateMean(data, 'new_uqfms')
            const mean_organic_visits = calculateMean(data, 'organic_visits')
            const mean_paid_visits = calculateMean(data, 'paid_visits')
            const mean_total_downloads_free = calculateMean(data, 'total_downloads_free')

            const sd_new_qfms = calculateSD(data, 'new_qfms', mean_new_qfms)
            const sd_new_uqfms = calculateSD(data, 'new_qfms', mean_new_uqfms)
            const sd_organic_visits = calculateSD(data, 'new_qfms', mean_organic_visits)
            const sd_paid_visits = calculateSD(data, 'new_qfms', mean_paid_visits)
            const sd_total_downloads_free = calculateSD(data, 'new_qfms', mean_total_downloads_free)

            // console.log(mean_new_qfms, sd_new_qfms)

            return data.map(item =>{ return {
                gross_new_arr : item.gross_new_arr,
                new_qfms : item.new_qfms,
                new_uqfms: item.new_uqfms,
                organic_visits: item.organic_visits,
                paid_visits: item.paid_visits,
                total_downloads_free: item.total_downloads_free,
                time_interval: item.time_interval,
                z_new_qfms : (item.new_qfms - mean_new_qfms)/ sd_new_qfms,
                z_new_uqfms: (item.new_uqfms - mean_new_uqfms)/ sd_new_uqfms,
                z_organic_visits: (item.organic_visits - mean_organic_visits)/ sd_organic_visits,
                z_paid_visits: (item.paid_visits - mean_paid_visits)/ sd_paid_visits,
                z_total_downloads_free: (item.total_downloads_free - mean_total_downloads_free)/ sd_total_downloads_free,
                
                
            }

            })
          }

        const normalizedData = getNormalizedSeries(this.props.correlationChart)
        // console.log(normalizedData)

        const ChartContainer = () => (

            <Chart  pannable={{lock: 'y'}} 
                    zoomable={{ mousewheel: {lock: 'y'}, selection:{lock:'y'}}} 
                    renderAs={'canvas'} 
                    onPlotAreaClick={this.resetChart}
                    >
                
                {chartLegend}
                <ChartTooltip shared={true} render={sharedTooltipRender} position={'left'}/>
                {/* <ChartCategoryAxis>
                    <ChartCategoryAxisItem max='100' maxDivisions={100} />
                    <ChartCategoryAxisItem  categories={this.props.correlationChart.map(item=>item.time_interval)} />
                </ChartCategoryAxis> */}
                {/*  labels={{format: 'c0'}} */}
                <ChartAxisDefaults majorGridLines={false} minorGridLines={false} />
                <ChartArea background="#131313" height={this.props.chartHeight} />
                <ChartTitle text="" />
                <ChartValueAxis>
                    <ChartValueAxisItem name={'grossnewarr'} title={{text:"Gross New ARR"}} color={this.props.color} labels={{ content: [-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], skip: 1, step: 2 }} />
                    <ChartValueAxisItem name={"normalized"} title={{text:"Normalized"}} color={this.props.color} labels={{ content: [-5,-4,-3,-2,-1,0,1,2,3,4,5], skip: 1, step: 1 }} />

                </ChartValueAxis>
                <ChartCategoryAxis major >
                     
                    <ChartCategoryAxisItem  maxDivisions={10} color={this.props.color} 
                                            min={this.props.correlationChart.length>180? 
                                                new Date(this.props.correlationChart[this.props.correlationChart.length-180].time_interval)
                                                : new Date(this.props.correlationChart[0].time_interval)} 
                                            categories={this.props.correlationChart.map(item=>new Date(item.time_interval))} 
                                            axisCrossingValues={[0,new Date(3000,0,1)]}>
                     
                        <ChartCategoryAxisTitle text="" />
                    </ChartCategoryAxisItem>
                </ChartCategoryAxis>
                <ChartSeries >
                    {/* <ChartSeriesItem name='Actuals1' type="column" gap={2} width='20px' spacing={0.25} data={this.formatDataValues(chartData[0])} color={this.props.color} visible={this.state.seriesVisible} >
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
                    </ChartSeriesItem> */}
                    <ChartSeriesItem name='Gross New ARR' axis="grossnewarr" style="smooth" width={3} markers={{visible:false}} data={normalizedData.map(item=>{return { value: parseFloat(item.gross_new_arr/1000000).toFixed(2), category: new Date(item.time_interval)}})} color="#fbbc05">
                        <ChartSeriesItemTooltip background="#3c3c3c" />
                    </ChartSeriesItem>
                    <ChartSeriesItem name='New QFMs' type="line" axis="normalized" style="smooth" width={3} markers={{visible:false}} data={normalizedData.map(item=>{return { value: parseFloat(item.z_new_qfms).toFixed(2), category: new Date(item.time_interval)}})}  color="#0f9bc7">
                        <ChartSeriesItemTooltip background="#3c3c3c" />
                    </ChartSeriesItem>
                    <ChartSeriesItem name='New UQFMs' type="line" axis="normalized" style="smooth" width={3} markers={{visible:false}} data={normalizedData.map(item=>{return { value: parseFloat(item.z_new_uqfms).toFixed(2), category: new Date(item.time_interval)}})}  color="#34a852">
                        <ChartSeriesItemTooltip background="#3c3c3c" />
                    </ChartSeriesItem>
                    <ChartSeriesItem name='Organic Visits' type="line" axis="normalized" style="smooth" width={3} markers={{visible:false}} data={normalizedData.map(item=>{return { value: parseFloat(item.z_organic_visits).toFixed(2), category: new Date(item.time_interval)}})}  color="#aa45be">
                        <ChartSeriesItemTooltip background="#3c3c3c" />
                    </ChartSeriesItem>
                              
                    <ChartSeriesItem name='Paid Visits' type="line" axis="normalized" style="smooth" width={3} markers={{visible:false}} data={normalizedData.map(item=>{return { value: parseFloat(item.z_paid_visits).toFixed(2), category: new Date(item.time_interval)}})} color="#dd4b39">
                        <ChartSeriesItemTooltip background="#3c3c3c" />
                    </ChartSeriesItem>
                    <ChartSeriesItem name='Total Downloads Free' type="line" axis="normalized" style="smooth" width={3} markers={{visible:false}} data={normalizedData.map(item=>{return { value: parseFloat(item.z_total_downloads_free).toFixed(2), category: new Date(item.time_interval)}})}   color="#512da8">
                        <ChartSeriesItemTooltip background="#3c3c3c" />
                    </ChartSeriesItem>
                 
                </ChartSeries>
                

                </Chart>
        );
        // console.log('Chart Data')
        // console.log(this.props.correlationChart.map(item=>{return { value: parseFloat(item.gross_new_arr/1000000).toFixed(2), category: new Date(item.time_interval)}}))
                
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
        valueType: state.summaryData.secondary[state.activeCards.secondary].valueType,
        correlationChart: state.correlationData.chart,
        correlationAnalysis: state.correlationData.analysis,
        correlationPrediction: state.correlationData.prediction
    }
}
export default connect(mapStateToProps, actions)(KendoPanZoomChart);
