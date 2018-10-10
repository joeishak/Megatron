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
        this.state = {
             data: [],
             overIsVisible: true,
             yAxisLabel: 'Million $',
             yAxisText: 'Million'
            
        };
        this.formatDataValues = this.formatDataValues.bind(this);
    }
 
    formatYAxisValues = (valuesArr) => {
        // console.log(valuesArr);
        const returnValuesArr = valuesArr.map(ele => {
            if(ele> 1000000)
            return (ele/1000000);
            else return (ele/1000);
        });

        return returnValuesArr;
    }

    // renderDollarValue(value) {
    //     // 1000 - 100000
    //     // 1000000 - 1000000000
    //     let hundredLength = 3;
    //     let thousandsLength = 6;
    //     let millionsLength =  9;
    //     let billionsLength =  12;
    //     let trillionsLength = 15;
    //     let suffix = 'K';

    //     let returnValue = '';


    //     value = parseInt(value)
    //     // TODO ** Count only the left side of the decimal
    //     let length = value.toString().length;
    //     // console.log(value);
    //     if (value > 0 && value <=999){
    //         this.setState({yAxisText: 'Hundreds'});
    //         return value;
            
    //     }
    //     else if (value >= 1000 && length <= 999999) {
    //         this.setState({yAxisText: 'Thousands'});

    //         value = (value/1000).toFixed(2);
    //         returnValue = value ;
    //     } else if (value >= 1000000 && length <= 999999999) {
    //         value = (value/1000000).toFixed(2);
    //         returnValue = value ;
            
    //         // returnValue = (value.toString() === '0.0') ? (value.toString() + 'K' : value.toString() + 'M'
    //     } else if (length >= 1000000000 && length <= 999999999999) {
    //         value = (value/1000000).toFixed(2);
    //         returnValue = value ;

    //     } else if (length > 1000000000000 <= 999999999999999) {
    //         value = (parseInt(value)/100000000).toFixed(2);
    //         returnValue = value ;
    //     }

    //     return parseFloat(returnValue);
    // }

    labelContent(e){
        // console.log(e.value);
        const suffix = ' M';
        const prefix = '$';
        return ( prefix + (parseInt(e.value)/ 1000000) + suffix);
    }
 
    labelPercentageContent(e){
        const prefix = '% ';
        return ( prefix +e.value);

    }

    labelUnitsContent(e){
        const suffix = ' M';
        return ( parseInt(e.value)/1000000) + suffix
    }
   formatDataValues(arr){

    let newArr;

    newArr = arr.map(item=>{
        return item.toFixed(1);
    });
    
    return newArr;
   }
    render(){

        const chartData = (this.props.multichartMetric ? this.props.activeMultichart : this.props.activeUnits);
        const categories = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'];
        const ChartContainer = () => (
        <Chart pannable={false} zoomable={false} >
        {/* <ChartLegend labels={{legendlabels:{
            color:'white'}}} /> */}
            <ChartLegend  position='bottom' labels={{color: this.props.color}} />
        <ChartTooltip />
        <ChartCategoryAxis>
                    <ChartCategoryAxisItem max='13' maxDivisions={13} />
        </ChartCategoryAxis>
         <ChartAxisDefaults majorGridLines={false} minorGridLines={false} labels={{format: 'c0'}}/>

            <ChartArea background="transparent" height={this.props.chartHeight}/* gridLines='{visible: false}' */></ChartArea>
            <ChartTitle text="" />
            <ChartValueAxis>
             <ChartValueAxisItem color={this.props.color}   labels={{content: this.labelContent, skip: 1, step: 2}} />
            </ChartValueAxis>
            <ChartCategoryAxis major >
                <ChartCategoryAxisItem color={this.props.color} categories={categories}>
                {/* Text title to months */}
                <ChartCategoryAxisTitle text="" />
                </ChartCategoryAxisItem>
            </ChartCategoryAxis>
            {(this.props.multichartMetric) ?
            <ChartSeries >
            <ChartSeriesItem name='Actual' type="column" gap={2} spacing={0.25} data={this.formatDataValues(chartData[0])} color={this.props.color} >
            <ChartSeriesItemTooltip format='${0}' background="#3c3c3c" />
            </ChartSeriesItem>
            <ChartSeriesItem name='Target' type="line" data={this.formatDataValues(chartData[1])} color='#0E9CC6'>
            <ChartSeriesItemTooltip format='${0}' background="#3c3c3c"  />
            </ChartSeriesItem>
            <ChartSeriesItem name='Last Year' type="line" data={this.formatDataValues(chartData[2])} color='#DFDE43'  >
            <ChartSeriesItemTooltip format='${0}' background="#3c3c3c" />
            </ChartSeriesItem>
        </ChartSeries> : 
        <ChartSeries >
        <ChartSeriesItem name='Actual' type="column" gap={2} spacing={0.25} data={chartData[0]} color={this.props.color} >
        <ChartSeriesItemTooltip format='${0}' background="#3c3c3c" />
        </ChartSeriesItem>
        <ChartSeriesItem name='Target' type="line" data={chartData[1]} color='#0E9CC6'>
        <ChartSeriesItemTooltip format='${0}' background="#3c3c3c"  />
        </ChartSeriesItem>
        <ChartSeriesItem name='Last Year' type="line" data={chartData[2]} color='#DFDE43'  >
        <ChartSeriesItemTooltip format='${0}' background="#3c3c3c" />
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
    // console.log(state)
    return { switchFilter: state.switchFilter, multichartMetric: state.multichartIsArr, activeUnits: state.activeSummarySquare.details.unitMultichart, activeMultichart: state.activeSummarySquare.details.multichart,  }
}
export default connect(mapStateToProps,actions)( KendoMultiChart);