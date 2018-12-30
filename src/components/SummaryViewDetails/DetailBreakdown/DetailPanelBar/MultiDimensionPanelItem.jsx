import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as utils from "../../../../utilities.js";

class MultiDimensionPanelItem extends Component {
    
    getMultiDimensionPanelItem(){
        let marketCount = 0;
        let qtdColumnClass, weekColumnClass;
    
        if(this.props.isJourney){
            // Journeys
                qtdColumnClass = 'qtdJourneyMarketColumn';
                weekColumnClass = 'weekJourneyMarketColumn';
        } else{
            // Financial
                qtdColumnClass = 'qtdMarketColumn';
                weekColumnClass = 'weekMarketColumn';
        } 
 

        switch (this.props.timeMetric) {
            case 'qtd':
                return (this.props.data.qtd.map(item => {
                    return (<span key={marketCount++}>
                        <div className={`${qtdColumnClass}`+ " qtdGeoHeader col"}>
                            {item.type}
                        </div>
                        <div className={`${qtdColumnClass}`+ " qtdMaHeader col"} >
                            {item.marketArea}
                        </div>
                        <div className=    {`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        {this.props.isJourney? 
                      <span></span>
                        :    <div className=    {`${qtdColumnClass}`+ " col"}>
                        {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                    </div> }
                        <div className=    {`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className=    {`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                              ?  `${qtdColumnClass}`+ " col redBG"
                            :`${qtdColumnClass}`+ " col greenBG"}>

                            {utils.formatMetric({ valueType: 'currency', value: item.vsQrf }, 'value')}
                        </div>
                        <div className=    {`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.qq }, 'value')}
                        </div>
                        <div className=    {`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.yy }, 'value')}
                        </div>
                    </span>)
                }));
            default:
                return (this.props.data.week.map(item => {

                    return (<span key={marketCount++}>
                        <div className=  {`${weekColumnClass}`+ " weekGeoHeader col"}>
                            {item.type}
                        </div>
                        <div className={`${weekColumnClass}`+ " weekMaHeader col"}>
                            {item.marketArea}
                        </div>
                        <div className= {`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        <div className= {`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                        </div>
                        <div className= {`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className= {`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${weekColumnClass}`+ " col redBG"
                            : `${weekColumnClass}`+ " col greenBG"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.vsQrf }, 'value')}
                        </div>
                        <div className= {`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.ww }, 'value')}
                        </div>
                    </span>)
                }));
        }
    }
    render(){
        let MultiDimensionPanelItem = this.getMultiDimensionPanelItem();
        return(MultiDimensionPanelItem)
    }
}

export default (MultiDimensionPanelItem)