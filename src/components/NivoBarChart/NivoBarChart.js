import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ResponsiveBar } from '@nivo/bar'
import data from './data.js';
class NivoBarChart extends Component {
    render(){
        return(
            <ResponsiveBar
            data={[{
                "country": "AD",
                "hot dog": 108
              },
              {
                "country": "AE",
                "hot dog": 82
                
              },
              {
                "country": "AF",
                "hot dog": 82
                
              },
              {
                "country": "AG",
                "hot dog": 82
                
              },
              {
                "country": "AH",
                "hot dog": 82
                
              }]}
              
            keys={[
                "hot dog",
                "burger",
                "sandwich",
                "kebab",
                "fries",
                "donut"
            ]}
            indexBy="country"
            margin={{
                "top": 50,
                "right": 130,
                "bottom": 50,
                "left": 60
            }}
            padding={0.3}
            colors="nivo"
            colorBy="id"
            defs={[
                {
                    "id": "dots",
                    "type": "patternDots",
                    "background": "inherit",
                    "color": "#38bcb2",
                    "size": 4,
                    "padding": 1,
                    "stagger": true
                },
                {
                    "id": "lines",
                    "type": "patternLines",
                    "background": "inherit",
                    "color": "#eed312",
                    "rotation": -45,
                    "lineWidth": 6,
                    "spacing": 10
                }
            ]}
            fill={[
                {
                    "match": {
                        "id": "fries"
                    },
                    "id": "dots"
                },
                {
                    "match": {
                        "id": "sandwich"
                    },
                    "id": "lines"
                }
            ]}
            borderColor="inherit:darker(1.6)"
            axisBottom={{
                "orient": "bottom",
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "country",
                "legendPosition": "center",
                "legendOffset": 36
            }}
            axisLeft={{
                "orient": "left",
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "food",
                "legendPosition": "center",
                "legendOffset": -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor="inherit:darker(1.6)"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            legends={[
                {
                    "dataFrom": "keys",
                    "anchor": "bottom-right",
                    "direction": "column",
                    "translateX": 120,
                    "itemWidth": 100,
                    "itemHeight": 20,
                    "itemsSpacing": 2,
                    "symbolSize": 20
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

export default (NivoBarChart)