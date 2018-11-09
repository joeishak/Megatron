import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import {
  Chart,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartArea,
  ChartValueAxis,
  ChartValueAxisItem

} from '@progress/kendo-react-charts';


class KendoBulletChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hidden: {visible: false},
      targetColor: {color: 'white'}
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
            return  (value/ 100).toFixed(2).toString() + ' %';
    }
  }

  render () {

    const tooltipRender = ({ point }) => {
      const { value } = point;
      return (
        <span>
          Target:  {this.renderValue(this.props.valueType,value.target)}
          <br />
          Actual:  {this.renderValue(this.props.valueType,value.current)}
        </span>
      )};

    const colorRender = () => {
      let color = '';
      if (this.props.values[0] >= this.props.values[1]) {
          color = '#0DB16E';
      } else {
          color = '#FF0000';
      }
      return color;
    }

    return (
      <div>
      <Chart style={{ height: 36, width: this.props.width }}>
        <ChartArea background="transparent"/>
          <ChartSeries>
              <ChartSeriesItem type="bullet" color={colorRender} data={this.props.values} target={this.state.targetColor} />
          </ChartSeries>
          <ChartCategoryAxis>
            <ChartCategoryAxisItem majorGridLines={this.state.hidden} minorGridLines={this.state.hidden} />
          </ChartCategoryAxis>
          <ChartValueAxis>
            <ChartValueAxisItem labels={this.state.hidden} majorGridLines={this.state.hidden} minorTicks={this.state.hidden} />
          </ChartValueAxis>
          <ChartTooltip render={tooltipRender} />
      </Chart>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  
  }
}


export default connect(mapStateToProps,actions)(KendoBulletChart);