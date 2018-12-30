import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DIMENSIONS } from '../../../../Constants/consts';
import * as utils from "../../../../utilities.js";
import SingleDimensionPanelItem from './SingleDimensionPanelItem'
import MultiDimensionPanelItem from './MultiDimensionPanelItem';
class PanelItemTable extends Component {
    constructor(props){
        super(props);
        this.state={
            isJourney: this.props.activeSummary.index  > 3
        }
    }
    
    getDataContent(type) {
        switch (type) {
            case DIMENSIONS.MARKET:
                return (
                    <SingleDimensionPanelItem
                    timeMetric={this.props.timeMetric}
                    data={this.props.activeSummary.details.market}
                    isJourney={this.state.isJourney}/>
                    )
            case DIMENSIONS.ROUTE:
                return <SingleDimensionPanelItem
                timeMetric={this.props.timeMetric}
                data={this.props.activeSummary.details.routes}
                isJourney={this.state.isJourney}/>
            case DIMENSIONS.SEGMENT:
                return <SingleDimensionPanelItem
                timeMetric={this.props.timeMetric}
                data={this.props.activeSummary.details.segment}
                isJourney={this.state.isJourney}/>
            case DIMENSIONS.PRODUCT:
                return <SingleDimensionPanelItem
                timeMetric={this.props.timeMetric}
                data={this.props.activeSummary.details.product}
                isJourney={this.state.isJourney}/>
            default:
                return <MultiDimensionPanelItem
                        timeMetric={this.props.timeMetric}
                        data={this.props.activeSummary.details.geo}
                        isJourney={this.state.isJourney}/>

        }
    }
    getTable(type) {
        let isGeo = type === DIMENSIONS.GEO;
        let qtdColumnClass, weekColumnClass;
        let isJourney = this.props.activeSummary.index  > 3
        if(isJourney){
            // Journeys
            if(isGeo){
                qtdColumnClass = 'qtdJourneyMarketColumn';
                weekColumnClass = 'weekJourneyMarketColumn';
            } else{
                qtdColumnClass = 'qtdJourneyColumn';
                weekColumnClass = 'weekJourneyColumn';
            }
        } else{
            // Financial
            if(isGeo){
                qtdColumnClass = 'qtdMarketColumn';
                weekColumnClass = 'weekMarketColumn';
            } else{
                qtdColumnClass = 'qtdColumn';
                weekColumnClass = 'weekColumn';
            }
        } 
        
        switch (this.props.timeMetric) {
            case 'qtd':
                return (<div className=''>
                    <div className="  col-md-12">
                        {this.getDataContent(type)}
                    </div>
                    <div className="  col-md-12">
                        {isGeo ? <div className={`${qtdColumnClass} qtdGeoHeader  col`}>
                            &nbsp;
                          </div> : <span></span>}
                        <div className={`${qtdColumnClass} header qtdMaHeader col`}>
                            Total
                          </div>
                        <div className={`${qtdColumnClass} header col`}>
                            Actuals
                          </div>
                          {isJourney ? <span></span>: 
                        <div className={`${qtdColumnClass} header col`}>
                            Units
                          </div>}
                        <div className={`${qtdColumnClass} header col`}>
                            QRF
                          </div>
                        <div className={`${qtdColumnClass} header col`}>
                            QRF DIFF
                          </div>
                        <div className={`${qtdColumnClass} header col`}>
                            vs QRF
                          </div>
                        <div className={`${qtdColumnClass} header col`}>
                            Q/Q
                          </div>
                        <div className={`${qtdColumnClass} header col`}>
                            Y/Y
                        </div>
                    </div>
                </div>);
            case 'week':
                return (<div className=''>
                    <div className=" col-md-12">
                        {this.getDataContent(type)}

                    </div>
                    <div className=" col-md-12">
                        {isGeo ? <div className={`${weekColumnClass} header weekGeoHeader col`}>
                            &nbsp;
                          </div> : <span></span>}
                        <div className={`${weekColumnClass} header weekMaHeader col`}>
                            Total
                          </div>
                        <div className={`${weekColumnClass} header col`}>
                            Actuals
                          </div>
                          {isJourney ? <span></span>: 

                        <div className={`${weekColumnClass} header col`}>
                            Units
                          </div> }
                        <div className={`${weekColumnClass} header col`}>
                            QRF
                          </div>
                        <div className={`${weekColumnClass} header col`}>
                            QRF DIFF
                          </div>
                        <div className={`${weekColumnClass} header col`}>
                            vs QRF
                          </div>
                        <div className={`${weekColumnClass} header col`}>
                            W/W
                          </div>

                    </div>
                </div>);
            default:
                break;
        }
    }
  
    render(){
        return(

            this.getDataContent(this.props.type)

        )
    }
}

export default (PanelItemTable)