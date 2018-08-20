import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ResponsiveCalendar } from '@nivo/calendar'
class NivoCalendar extends Component {
    render(){
        return(
<ResponsiveCalendar
        data={[
            {
              "day": "2016-01-21",
              "value": 128
            },
            {
              "day": "2016-02-17",
              "value": 143
            },
            {
              "day": "2015-07-26",
              "value": 39
            },
            {
              "day": "2016-03-17",
              "value": 331
            },
            {
              "day": "2015-12-07",
              "value": 258
            },
            {
              "day": "2015-05-28",
              "value": 130
            },
            {
              "day": "2016-02-16",
              "value": 87
            },
            {
              "day": "2016-05-05",
              "value": 245
            },
            {
              "day": "2016-08-04",
              "value": 174
            },
            {
              "day": "2015-12-03",
              "value": 102
            },
            {
              "day": "2016-07-26",
              "value": 68
            },
            {
              "day": "2015-04-21",
              "value": 109
            },
            {
              "day": "2016-05-15",
              "value": 180
            },
            {
              "day": "2016-06-05",
              "value": 311
            },
            {
              "day": "2015-05-17",
              "value": 215
            },
            {
              "day": "2016-07-12",
              "value": 248
            },
            {
              "day": "2016-05-31",
              "value": 140
            },
            {
              "day": "2015-07-01",
              "value": 241
            }]}
        from="2015-03-01"
        to="2016-07-12"
        emptyColor="#eeeeee"
        colors={[
            "#61cdbb",
            "#97e3d5",
            "#e8c1a0",
            "#f47560"
        ]}
        margin={{
            "top": 100,
            "right": 30,
            "bottom": 60,
            "left": 30
        }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        monthLegendOffset={10}
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                "anchor": "bottom-right",
                "direction": "row",
                "translateY": 36,
                "itemCount": 4,
                "itemWidth": 34,
                "itemHeight": 36,
                "itemDirection": "top-to-bottom"
            }
        ]}
        theme={{
            "tooltip": {
                "container": {
                    "fontSize": "13px"
                }
            },
            "labels": {
                "textColor": "#555"
            }
        }}
    />
        )
    }
}

export default (NivoCalendar)