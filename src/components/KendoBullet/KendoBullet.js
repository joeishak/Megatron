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

const KendoBulletChart = () => {
  const hidden = { visible: false };

  const hum = [146.7, 242.3];

  const tooltipRender = ({ point }) => {
    const { value } = point;

    return (
      <span>
        Target: { value.target }
        <br />
        Actual: { value.current }
      </span>
    )};

  return (
    <div>
      <Chart style={{ height: 40 }}>
      <ChartArea background="transparent"></ChartArea>
          <ChartSeries>
              <ChartSeriesItem type="bullet" color="red" data={hum} />
          </ChartSeries>
          <ChartCategoryAxis>
            <ChartCategoryAxisItem majorGridLines={false} minorGridLines={false} />
          </ChartCategoryAxis>
          <ChartTooltip render={tooltipRender} />
      </Chart>
    </div>
  );
};

export default (KendoBulletChart);