import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import * as utils from '../../utilities.js'

import {SUMMARY_FILTERS} from '../../Constants/consts';
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


  render() {

    const formattedValue = utils.formatMetric({ valueType: this.props.valueType, value: this.props.values[0] }, 'value');
    const formattedTarget = utils.formatMetric({ valueType: this.props.valueType, value: this.props.values[1] }, 'target');
    const formattedTargetFQ = utils.formatMetric({ valueType: this.props.valueType, value: this.props.values[2] }, 'target');
    const bulletStyle = this.props.isMobileOrTablet ? { height: 36, width: this.props.width, float: 'right' } : { height: 36, width: this.props.width , display: 'inline-block'};

    const tooltipRender = ({ point }) => {
      const { value } = point;
      return (
        <span>
           Actuals:  {formattedValue}
          <br />
          Targets:  {formattedTarget}
          <br />
          FQ Target: {formattedTargetFQ || 0}
        </span>
      )
    };

    const colorRender = () => {
      let color = '';
      if (this.props.cardIndex !== undefined && this.props.cardIndex === SUMMARY_FILTERS.FINANCE_CANCEL_ARR || this.props.cardIndex === SUMMARY_FILTERS.RENEW_CANCEL ||
        this.props.cardIndex === SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM || this.props.cardIndex ===SUMMARY_FILTERS.RENEW_QTR_PF ||
        this.props.cardIndex === SUMMARY_FILTERS.RENEW_QTR_UI || this.props.cardIndex ===SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) {
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

    return (
      <div>
        <Chart zoomable={false} style={bulletStyle}>
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
