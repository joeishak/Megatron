import React from 'react';

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

const KendoBulletChart = (props) => {
  const hidden = { visible: false };
  const targetColor = { color: 'white'};

  const tooltipRender = ({ point }) => {
    const { value } = point;
    return (
      <span>
        Target: { value.target }
        <br />
        Actual: { value.current }
      </span>
    )};

  const colorRender = () => {
    let color = '';
    if (props.values[0] > props.values[1]) {
      color = '#0DB16E';
    } else {
      color = '#FF0000';
    }

    return color;
  }

  return (
    <div>

      <Chart style={{ height: 36, width: 240 }}>
        <ChartArea background="transparent"/>
          <ChartSeries>
            
              <ChartSeriesItem type="bullet" color={colorRender} data={props.values} target={targetColor} />
          </ChartSeries>
          <ChartCategoryAxis>
            <ChartCategoryAxisItem majorGridLines={hidden} minorGridLines={hidden} />
          </ChartCategoryAxis>
          <ChartValueAxis>
            <ChartValueAxisItem labels={hidden} majorGridLines={hidden} minorTicks={hidden} />
          </ChartValueAxis>
          <ChartTooltip render={tooltipRender} />
      </Chart>
    </div>
  );
};

export default (KendoBulletChart);