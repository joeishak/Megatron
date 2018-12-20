import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
import { connect } from 'react-redux';
import * as actions from 'actions';
import React, { Component } from 'react';
// import classNames from 'classnames'
import styles from './KendoPanelBar.css';
import '@progress/kendo-theme-default/dist/all.css';
import { DIMENSIONS } from '../../Constants/consts';
import * as utils from "../../utilities.js";

class KendoPanelBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
        this.getPanelContents = this.getPanelContents.bind(this);
        this.getTopHeader = this.getTopHeader.bind(this);
        this.getLowerHeader = this.getLowerHeader.bind(this);
        this.getTable = this.getTable.bind(this);
        this.getGeoContent = this.getGeoContent.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return true;
    }
    getLowerHeaderCategory(type) {
        switch (type) {
            case DIMENSIONS.GEO:
                return 'Geo';
            case DIMENSIONS.MARKET:
                return 'Geo';
            case DIMENSIONS.ROUTE:
                return 'Route';
            case DIMENSIONS.SEGMENT:
                return 'Segment';
            default:
                return 'Product';
        }
    }
    getLowerHeader(type) {

        let isMarket = type === DIMENSIONS.MARKET;
        let qtdColumnClass, weekColumnClass;
        let isJourney = this.props.activeSummary.index  > 3
        if(isJourney){
            // Journeys
            if(isMarket){
                qtdColumnClass = 'qtdJourneyMarketColumn';
                weekColumnClass = 'weekJourneyMarketColumn';
            } else{
                qtdColumnClass = 'qtdJourneyColumn';
                weekColumnClass = 'weekJourneyColumn';
            }
        } else{
            // Financial
            if(isMarket){
                qtdColumnClass = 'qtdMarketColumn';
                weekColumnClass = 'weekMarketColumn';
            } else{
                qtdColumnClass = 'qtdColumn';
                weekColumnClass = 'weekColumn';
            }
        } 
        
        let MAColumn = (isMarket) ? <div className={`${qtdColumnClass}  header qtdMaHeader col`}>
            Market Area
           </div> : <span></span>

        switch (this.props.timeMetric) {
            case 'qtd':
                return (<div className="lowerHeaderBar ">
                    <div className={`${qtdColumnClass}  header qtdGeoHeader col`}>
                        {this.getLowerHeaderCategory(type)}
                    </div>
                    {MAColumn}
                    <div className={`${qtdColumnClass}  header col`}>
                        Actuals
                    </div>
                    {isJourney? <span></span> :  
                        <div className={`${qtdColumnClass}  header col`}>
                            Units
                        </div>
                    }
                    <div className={`${qtdColumnClass}  header col`}>
                        QRF
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        QRF DIFF
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        vs QRF
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        Q/Q
                    </div>
                    <div className={`${qtdColumnClass}  header col`}>
                        Y/Y
                    </div>
                </div>);
            default:
                return (<div className="lowerHeaderBar ">
                    <div className={`${weekColumnClass} header weekGeoHeader  col`}>
                        {this.getLowerHeaderCategory(type)}
                    </div>
                    {(type === DIMENSIONS.MARKET) ? <div className={`${weekColumnClass} header weekMaHeader  col`}>
                        Market Area
                </div> : <span></span>}
                    <div className={`${weekColumnClass} header  col`}>
                        Actuals
                </div>
                {isJourney? <span></span> :  

                    <div className={`${weekColumnClass} header  col`}>
                        Units
                    </div>
                }
                    <div className={`${weekColumnClass} header  col`}>
                        QRF
                </div>
                    <div className={`${weekColumnClass} header  col`}>
                        QRF DIFF
                </div>
                    <div className={`${weekColumnClass} header  col`}>
                        vs QRF
                </div>
                    <div className={`${weekColumnClass} header  col`}>
                        W/W
                </div>
                </div>);
        }
    }

    getTopHeader() {
        switch (this.props.timeMetric) {
            case 'qtd':
                return (<div className=" topHeaderBar qtdDetailTitle col-md-11">Quarterly To Date</div>);
            default:
                return (<div className="topHeaderBar weekDetailTitle col-md-11">Week</div>);
        }
    }
    getMarketAreaContent() {
        let marketCount = 0;
        let qtdColumnClass, weekColumnClass;
        let isJourney = this.props.activeSummary.index  > 3
    
        if(isJourney){
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
                return (this.props.activeSummary.details.market.qtd.map(item => {
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
                        {isJourney? 
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
                return (this.props.activeSummary.details.market.week.map(item => {

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
    getGeoContent() {
        let isJourney = this.props.activeSummary.index  > 3

        let qtdColumnClass, weekColumnClass;
        if(isJourney){
            // Journeys
            
                qtdColumnClass = 'qtdJourneyColumn';
                weekColumnClass = 'weekJourneyColumn';
        } else{
            // Financial
                qtdColumnClass = 'qtdColumn';
                weekColumnClass = 'weekColumn';
        } 
               // {`${qtdColumnClass}`+ " qtdGeoHeader col"}
        // {`${qtdColumnClass}`+ " qtdMaHeader col"}
        // {`${qtdColumnClass}`+ " col"}
        // {`${qtdColumnClass}`+ " col redBG"}
        // {`${qtdColumnClass}`+ " col greenBG"}
        // {`${weekColumnClass}`+ " weekGeoHeader col"}
        // {`${weekColumnClass}`+ " weekMaHeader col"}
        // {`${weekColumnClass}`+ " col"}
        // {`${weekColumnClass}`+ " col redBG"}
        // {`${weekColumnClass}`+ " col greenBG"}

        switch (this.props.timeMetric) {
            case 'qtd':
                return (this.props.activeSummary.details.geo.qtd.map(item => {
                    return (<span key={item.index}>
                        <div className={`${qtdColumnClass}`+ " qtdGeoHeader col"}>
                            {item.type}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        {isJourney? <span> </span>:
                            <div className={`${qtdColumnClass}`+ " col"}>
                                {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                            </div>
                        }
                        
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ?`${qtdColumnClass}`+ " col redBG"
                            : `${qtdColumnClass}`+ " col greenBG"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.qq }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.yy }, 'value')}
                        </div>
                    </span>)
                }));
            case 'week':
                return (this.props.activeSummary.details.geo.week.map(item => {
                    return (<span key={item.index}>
                        <div className={`${weekColumnClass}`+ " weekGeoHeader col"}>
                            {item.type}
                        </div>
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        {isJourney? <span> </span>:

                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                        </div>
                        }
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${weekColumnClass}`+ " col redBG"
                            : `${weekColumnClass}`+ " col greenBG"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.ww }, 'value')}
                        </div>
                    </span>)
                }));
            default:
                break;
        }
    }
    getRoutesContent() {
        let isJourney = this.props.activeSummary.index  > 3

        let qtdColumnClass, weekColumnClass;
        if(isJourney){
            // Journeys
            
                qtdColumnClass = 'qtdJourneyColumn';
                weekColumnClass = 'weekJourneyColumn';
        } else{
            // Financial
                qtdColumnClass = 'qtdColumn';
                weekColumnClass = 'weekColumn';
        } 
               // {`${qtdColumnClass}`+ " qtdGeoHeader col"}
        // {`${qtdColumnClass}`+ " qtdMaHeader col"}
        // {`${qtdColumnClass}`+ " col"}
        // {`${qtdColumnClass}`+ " col redBG"}
        // {`${qtdColumnClass}`+ " col greenBG"}
        // {`${weekColumnClass}`+ " weekGeoHeader col"}
        // {`${weekColumnClass}`+ " weekMaHeader col"}
        // {`${weekColumnClass}`+ " col"}
        // {`${weekColumnClass}`+ " col redBG"}
        // {`${weekColumnClass}`+ " col greenBG"}

        switch (this.props.timeMetric) {
            case 'qtd':
                return (this.props.activeSummary.details.routes.qtd.map(item => {
                    return (<span key={item.index}>
                        <div className={`${qtdColumnClass}`+ " qtdGeoHeader col"}>
                            {item.type}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        {isJourney? <span> </span>:
                            <div className={`${qtdColumnClass}`+ " col"}>
                                {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                            </div>
                        }
                        
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ?`${qtdColumnClass}`+ " col redBG"
                            : `${qtdColumnClass}`+ " col greenBG"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.qq }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.yy }, 'value')}
                        </div>
                    </span>)
                }));
            case 'week':
                return (this.props.activeSummary.details.routes.week.map(item => {
                    return (<span key={item.index}>
                        <div className={`${weekColumnClass}`+ " weekGeoHeader col"}>
                            {item.type}
                        </div>
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        {isJourney? <span> </span>:

                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                        </div>
                        }
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${weekColumnClass}`+ " col redBG"
                            : `${weekColumnClass}`+ " col greenBG"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.ww }, 'value')}
                        </div>
                    </span>)
                }));
            default:
                break;
        }
    }
    getSegmentContent() {
        let isJourney = this.props.activeSummary.index  > 3

        let qtdColumnClass, weekColumnClass;
        if(isJourney){
            // Journeys
            
                qtdColumnClass = 'qtdJourneyColumn';
                weekColumnClass = 'weekJourneyColumn';
        } else{
            // Financial
                qtdColumnClass = 'qtdColumn';
                weekColumnClass = 'weekColumn';
        } 
               // {`${qtdColumnClass}`+ " qtdGeoHeader col"}
        // {`${qtdColumnClass}`+ " qtdMaHeader col"}
        // {`${qtdColumnClass}`+ " col"}
        // {`${qtdColumnClass}`+ " col redBG"}
        // {`${qtdColumnClass}`+ " col greenBG"}
        // {`${weekColumnClass}`+ " weekGeoHeader col"}
        // {`${weekColumnClass}`+ " weekMaHeader col"}
        // {`${weekColumnClass}`+ " col"}
        // {`${weekColumnClass}`+ " col redBG"}
        // {`${weekColumnClass}`+ " col greenBG"}

        switch (this.props.timeMetric) {
            case 'qtd':
                return (this.props.activeSummary.details.segment.qtd.map(item => {
                    return (<span key={item.index}>
                        <div className={`${qtdColumnClass}`+ " qtdGeoHeader col"}>
                            {item.type}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        {isJourney? <span> </span>:
                            <div className={`${qtdColumnClass}`+ " col"}>
                                {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                            </div>
                        }
                        
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ?`${qtdColumnClass}`+ " col redBG"
                            : `${qtdColumnClass}`+ " col greenBG"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.qq }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.yy }, 'value')}
                        </div>
                    </span>)
                }));
            case 'week':
                return (this.props.activeSummary.details.segment.week.map(item => {
                    return (<span key={item.index}>
                        <div className={`${weekColumnClass}`+ " weekGeoHeader col"}>
                            {item.type}
                        </div>
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        {isJourney? <span> </span>:

                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                        </div>
                        }
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${weekColumnClass}`+ " col redBG"
                            : `${weekColumnClass}`+ " col greenBG"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.ww }, 'value')}
                        </div>
                    </span>)
                }));
            default:
                break;
        }
    }
    getProductContent() {
        let isJourney = this.props.activeSummary.index  > 3

        let qtdColumnClass, weekColumnClass;
        if(isJourney){
            // Journeys
            
                qtdColumnClass = 'qtdJourneyColumn';
                weekColumnClass = 'weekJourneyColumn';
        } else{
            // Financial
                qtdColumnClass = 'qtdColumn';
                weekColumnClass = 'weekColumn';
        } 
               // {`${qtdColumnClass}`+ " qtdGeoHeader col"}
        // {`${qtdColumnClass}`+ " qtdMaHeader col"}
        // {`${qtdColumnClass}`+ " col"}
        // {`${qtdColumnClass}`+ " col redBG"}
        // {`${qtdColumnClass}`+ " col greenBG"}
        // {`${weekColumnClass}`+ " weekGeoHeader col"}
        // {`${weekColumnClass}`+ " weekMaHeader col"}
        // {`${weekColumnClass}`+ " col"}
        // {`${weekColumnClass}`+ " col redBG"}
        // {`${weekColumnClass}`+ " col greenBG"}

        switch (this.props.timeMetric) {
            case 'qtd':
                return (this.props.activeSummary.details.product.qtd.map(item => {
                    return (<span key={item.index}>
                        <div className={`${qtdColumnClass}`+ " qtdGeoHeader col"}>
                            {item.type}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        {isJourney? <span> </span>:
                            <div className={`${qtdColumnClass}`+ " col"}>
                                {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                            </div>
                        }
                        
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ?`${qtdColumnClass}`+ " col redBG"
                            : `${qtdColumnClass}`+ " col greenBG"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.qq }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.yy }, 'value')}
                        </div>
                    </span>)
                }));
            case 'week':
                return (this.props.activeSummary.details.product.week.map(item => {
                    return (<span key={item.index}>
                        <div className={`${weekColumnClass}`+ " weekGeoHeader col"}>
                            {item.type}
                        </div>
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        {isJourney? <span> </span>:

                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                        </div>
                        }
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${weekColumnClass}`+ " col redBG"
                            : `${weekColumnClass}`+ " col greenBG"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.ww }, 'value')}
                        </div>
                    </span>)
                }));
            default:
                break;
        }
    }
    getDataContent(type) {
        switch (type) {
            case DIMENSIONS.MARKET:
                return this.getMarketAreaContent();
            case DIMENSIONS.ROUTE:
                return this.getRoutesContent();
            case DIMENSIONS.SEGMENT:
                return this.getSegmentContent();
            case DIMENSIONS.PRODUCT:
                return this.getProductContent();
            default:
                return this.getGeoContent();
        }
    }
    getTable(type) {
        let isMarket = type === DIMENSIONS.MARKET;
        let qtdColumnClass, weekColumnClass;
        let isJourney = this.props.activeSummary.index  > 3
        if(isJourney){
            // Journeys
            if(isMarket){
                qtdColumnClass = 'qtdJourneyMarketColumn';
                weekColumnClass = 'weekJourneyMarketColumn';
            } else{
                qtdColumnClass = 'qtdJourneyColumn';
                weekColumnClass = 'weekJourneyColumn';
            }
        } else{
            // Financial
            if(isMarket){
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
                        {isMarket ? <div className={`${qtdColumnClass} qtdGeoHeader  col`}>
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
                        {isMarket ? <div className={`${weekColumnClass} header weekGeoHeader col`}>
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


    /* Return Contents for */
    getPanelContents(type) {
        return (
            <div className='row'>
                <div className='col-md-12 topPanelHeader'>
                    {this.getTopHeader()}
                </div>
                <div className='col-md-12'>
                    {this.getLowerHeader(type)}
                </div>
                <div className='col-md-12 geoTableContainer'>
                    {this.getTable(type)}
                </div>
            </div>
        );

    }
    render() {
        // var red = classNames({
        //     'red': true
        // });
        return (<div className={'panel-wrapper'}>
            <PanelBar >
                <PanelBarItem className="panelItemTitle" expanded={true} title='Geo'>
                    {this.getPanelContents(DIMENSIONS.GEO)}
                </ PanelBarItem>
                <PanelBarItem className="panelItemTitle" expanded={false} title='Market Area'>
                    {this.getPanelContents(DIMENSIONS.MARKET)}
                </ PanelBarItem>
                <PanelBarItem className="panelItemTitle" expanded={false} title='Route To Market'>
                    {this.getPanelContents(DIMENSIONS.ROUTE)}
                </PanelBarItem>
                <PanelBarItem className="panelItemTitle" expanded={false} title='Segments'>
                    {this.getPanelContents(DIMENSIONS.SEGMENT)}
                </ PanelBarItem>
                <PanelBarItem className="panelItemTitle" expanded={false} title='Product Name'>
                    {this.getPanelContents(DIMENSIONS.PRODUCT)}
                </PanelBarItem>

            </PanelBar>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        activeSummary: state.secondaryData[state.activeCards.secondary],
        activeGeo: state.secondaryData[state.activeCards.secondary].details.geo.qtd
    }
}
export default connect(mapStateToProps, actions)(KendoPanelBar);
