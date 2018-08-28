import React from 'react';

import {
  Chart,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartArea
} from '@progress/kendo-react-charts';

const KendoBulletChart = (props) => {
  const hidden = { visible: false };

  // const values = [146.7, 242.3];

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
      color = 'green';
    } else {
      color = 'red';
    }

    return color;
  }

  return (
    <div>
      <Chart style={{ height: 40, width: 240}}>
      <ChartArea background="transparent"></ChartArea>
          <ChartSeries>
              <ChartSeriesItem type="bullet" color={colorRender} data={props.values} />
          </ChartSeries>
          <ChartCategoryAxis>
            <ChartCategoryAxisItem  majorGridLines={false} minorGridLines={false} />
          </ChartCategoryAxis>
          <ChartTooltip render={tooltipRender} />
      </Chart>
    </div>
  );
};

export default (KendoBulletChart);