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

    shouldComponentUpdate(nextProps){
        if(this.props.activeMultichart[0][0] !== nextProps.activeMultichart[0][0] ){
            return true;
        } 
        if(this.props.activeUnits[0][0] !== nextProps.activeUnits[0][0] ){

            return true;
        } 
        if(this.props.multichartMetric !== nextProps.multichartMetric){

            return true;
        }
        if(this.props.chartHeight !== nextProps.chartHeight) {
            return true;
        }
        return false;
    }
    formatDataValues(arr){
        let newArr;
        if(arr !== undefined  ){
            newArr = arr.map(item=>{
                if(this.props.multichartMetric ===true){
                    return item.toFixed(1);

                }
                return item
               
            });
        } 

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

   

   

    render(){

        const chartData = (this.props.multichartMetric === true? this.props.activeMultichart : this.props.activeUnits);
        const categories = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'];
        const sharedTooltipRender = (props) => {
            const { points } = props;
            let bgColor = (points[0].value - points[1].value )> 0 ? 'ttBGGreen': 'ttBGRed';
              let textColor =  (points[0].value - points[1].value )> 0 ? 'textGreen': 'textRed';
            let borderColor = (points[0].value - points[1].value) > 0 ? '#0DB16E'  : '#FF0000';
            const title = props.categoryText;

            if(this.props.multichartMetric === true){
            return (
                <div className="tooltipContainer" style={{border: `4px solid ${borderColor}`}}>
                <div className="innerContent">
                    <div className={`tooltipTitle ${bgColor}` }><b>Week {title}</b></div>
                        {points.map((point) => (
                        <div key={this.state.count++}>
                            <div className={`actualMarker ${this.getTooltipType(point.series.name)}`}></div>
                            <b className="series-name">{point.series.name}</b> :
                                <div className="tooltipValue">
                                    {(point.series.name === 'Actual' ?
                                    <b className={`'series-value' + ${textColor}`}>{utils.formatMetric({valueType :this.props.valueType, value: point.value}, 'target')}</b> :
                                        <b className="series-value">{utils.formatMetric({valueType :this.props.valueType, value: point.value}, 'target')}
                                </b>)}
                                </div>
                        </div>))}
                </div>
                </div>


            );}
            else {
                return (
                    <div className="tooltipContainer" style={{border: `4px solid ${borderColor}`}}>
                    <div className="innerContent">
                        <div className={`tooltipTitle ${bgColor}` }><b>Week {title}</b></div>
                            {points.map((point) => (
                            <div key={this.state.count++}>
                                <div className={`actualMarker ${this.getTooltipType(point.series.name)}`}></div>
                                <b className="series-name">{point.series.name}</b> :
                                    <div className="tooltipValue">
                                        {(point.series.name === 'Actual' ?
                                        <b className={`'series-value' + ${textColor}`}>{utils.formatMetric({valueType :'units', value: point.value}, 'value')}</b> :
                                            <b className="series-value">{utils.formatMetric({valueType :'units', value: point.value}, 'value')}
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
            if(this.props.multichartMetric === true) {
                 return utils.formatMetric({valueType :this.props.valueType, value: props.value}, 'value'); }
            else{
                return utils.formatMetric({valueType :'units', value: props.value}, 'value');
            }
        }

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
                    <ChartTooltip shared={true} render={sharedTooltipRender}/>
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
        multichartMetric: state.multichartIsArr,
        activeUnits: state.secondaryData[state.activeCards.secondary].details.unitMultichart,
        activeMultichart: state.secondaryData[state.activeCards.secondary].details.multichart,
        valueType: state.secondaryData[state.activeCards.secondary].valueType
    }
}
export default connect(mapStateToProps,actions)( KendoMultiChart);
