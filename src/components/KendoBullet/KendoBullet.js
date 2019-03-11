import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import * as utils from '../../utilities.js'
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
      hidden: { visible: false }
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.values[0] !== nextProps.values[0]) {
      return true;
    }
    if (this.props.values[1] !== nextProps.values[1]) {
      return true;
    }

    return false;
  }

  renderUnits(value) {
    let returnValue = '';
    value = parseInt(value)
    if (value > 1000 && value <= 999999) {
      value = (value / 1000).toFixed(1);
      returnValue = value.toString() + ' K';
    } else if (value > 1000000 && value <= 999999999) {
      value = (value / 1000000).toFixed(1);
      returnValue = value.toString() + ' M';
    } else if (value > 1000000000 && value <= 999999999999) {
      value = (value / 1000000000).toFixed(1);
      returnValue = value.toString() + ' B';
    } else if (value > 1000000000 && value <= 999999999999999) {
      value = (parseInt(value) / 1000000000000).toFixed(1);
      returnValue = value.toString() + ' T';
    } else {
      return value.toString();
    }
    return returnValue;
  }

  renderValue = (type, value) => {
    switch (type) {
      case 'currency':
        return '$ ' + this.renderUnits(value);
      case 'units':
        return this.renderUnits(value);
      case 'percent':
        return (value / 100).toFixed(2).toString() + ' %';
    }
  }

  render() {

    const formattedValue = utils.formatMetric({ valueType: this.props.valueType, value: this.props.values[0] }, 'value');
    const formattedTarget = utils.formatMetric({ valueType: this.props.valueType, value: this.props.values[1] }, 'target');
    const formattedTargetFQ = utils.formatMetric({ valueType: this.props.valueType, value: this.props.values[2] }, 'target');
    const bulletStyle = this.props.isMobileOrTablet ? { height: 36, width: this.props.width, float: 'right' } : { height: 36, width: this.props.width };

    const tooltipRender = ({ point }) => {
      const { value } = point;
      return (
        <span>
          Target:  {formattedTarget}
          <br />
          Actual:  {formattedValue}
          <br />
          FQ Target: {formattedTargetFQ || 0}
        </span>
      )
    };

    const colorRender = () => {
      let color = '';

      if (this.props.cardIndex !== undefined && this.props.cardIndex === 2) {
        if (this.props.values[1] === 0 ) {
          color = '#3C3C3C';
        } else if (this.props.values[0] <= this.props.values[1]) {
          color = '#0DB16E';
        } else {
          color = '#FF0000';
        }
  
      } else {
        if (this.props.values[1] === 0 ) {
          color = '#3C3C3C';
        } else if (this.props.values[0] >= this.props.values[1]) {
          color = '#0DB16E';
        } else {
          color = '#FF0000';
        }
  
      }

      return color;
    }

    // const fqTarget = [this.props.values[0], this.props.values[1] - 500000];

    // {console.log(this.props.values)}

    return (
      <div>
        <Chart style={bulletStyle}>
          <ChartArea background="transparent" />
          <ChartSeries>
            <ChartSeriesItem type="bullet" color={colorRender} data={this.props.values} target={{ color: this.props.color }} />
            <ChartSeriesItem type="bullet" color={colorRender} data={[0, this.props.fqTarget]} target={{ color: this.props.color }} />
          </ChartSeries>
          <ChartCategoryAxis>
            <ChartCategoryAxisItem majorGridLines={true} minorGridLines={this.state.hidden} />
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


export default connect(mapStateToProps, actions)(KendoBulletChart);
