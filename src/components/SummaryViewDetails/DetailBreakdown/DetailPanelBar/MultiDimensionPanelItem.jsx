import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as utils from "../../../../utilities.js";
import { DIMENSIONS } from '../../../../Constants/consts';

class MultiDimensionPanelItem extends Component {

    getMultiDimensionJourneyPanelItem() {

        let calculatedGeo, prevGeo;
        let marketCount = 0;
        let qtdColumnClass, weekColumnClass;
        // Journeys
        qtdColumnClass = 'qtdJourneyMarketColumn';
        weekColumnClass = 'weekJourneyMarketColumn';



        switch (this.props.timeMetric) {
            case 'qtd':
                return (this.props.data.qtd.map(item => {

                    if (this.props.type === DIMENSIONS.GEO || this.props.type === DIMENSIONS.SIGNAPP  || this.props.type === DIMENSIONS.LTC  ) {
                        if (item.type === calculatedGeo || item.type === prevGeo) {
                            calculatedGeo = "";
                        } else if (calculatedGeo === undefined || item.type !== calculatedGeo) {
                            calculatedGeo = item.type;
                        }
                    }

                    prevGeo = item.type;
                    return (<span key={marketCount++}>
                        <div className={`${qtdColumnClass}` + " qtdGeoHeader col"}>
                            {calculatedGeo === "" ? <span>&nbsp;</span> : calculatedGeo}
                        </div>
                        <div className={`${qtdColumnClass}` + " qtdMaHeader col"} >
                            {item.marketArea || item.visit}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.actuals }, 'value')}
                        </div>

                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${qtdColumnClass}` + " col redBG"
                            : `${qtdColumnClass}` + " col greenBG"}>

                            {utils.formatMetric({ valueType: 'percent', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.qq }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.yy }, 'value')}
                        </div>
                    </span>)
                }));
            default:
                return (this.props.data.week.map(item => {

                    if (this.props.type === DIMENSIONS.GEO ||this.props.type === DIMENSIONS.LTC) {
                        if (item.type === calculatedGeo || item.type === prevGeo) {
                            calculatedGeo = "";
                        } else if (calculatedGeo === undefined || item.type !== calculatedGeo) {
                            calculatedGeo = item.type;
                        }
                    }

                    prevGeo = item.type;
                    return (<span key={marketCount++}>
                        <div className={`${qtdColumnClass}` + " qtdGeoHeader col"}>
                            {calculatedGeo === "" ? <span>&nbsp;</span> : calculatedGeo}
                        </div>
                        <div className={`${qtdColumnClass}` + " qtdMaHeader col"} >
                            {item.marketArea || item.visit}
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.actuals }, 'value')}
                        </div>

                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${weekColumnClass}` + " col redBG"
                            : `${weekColumnClass}` + " col greenBG"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.ww }, 'value')}
                        </div>
                    </span>)
                }));
        }
    }
    getMultiDimensionPanelItem() {

        let calculatedGeo, prevGeo;
        let marketCount = 0;
        let qtdColumnClass, weekColumnClass;


        // Financial
        qtdColumnClass = 'qtdMarketColumn';
        weekColumnClass = 'weekMarketColumn';


        switch (this.props.timeMetric) {
            case 'qtd':
                return (this.props.data.qtd.map(item => {

                    if (this.props.type === DIMENSIONS.GEO ||this.props.type === DIMENSIONS.ltc) {
                        if (item.type === calculatedGeo || item.type === prevGeo) {
                            calculatedGeo = "";
                        } else if (calculatedGeo === undefined || item.type !== calculatedGeo) {
                            calculatedGeo = item.type;
                        }
                    }

                    prevGeo = item.type;
                    return (<span key={marketCount++}>
                        <div className={`${qtdColumnClass}` + " qtdGeoHeader col"}>
                            {calculatedGeo === "" ? <span>&nbsp;</span> : calculatedGeo}
                        </div>
                        <div className={`${qtdColumnClass}` + " qtdMaHeader col"} >
                            {item.marketArea || item.visit}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${qtdColumnClass}` + " col redBG"
                            : `${qtdColumnClass}` + " col greenBG"}>

                            {utils.formatMetric({ valueType: 'percent', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.qq }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.yy }, 'value')}
                        </div>
                    </span>)
                }));
            default:
                return (this.props.data.week.map(item => {
                    if (this.props.type === DIMENSIONS.GEO ||this.props.type === DIMENSIONS.LTC) {
                        if (item.type === calculatedGeo || item.type === prevGeo) {
                            calculatedGeo = "";
                        } else if (calculatedGeo === undefined || item.type !== calculatedGeo) {
                            calculatedGeo = item.type;
                        }
                    }
                    return (<span key={marketCount++}>
                        <div className={`${weekColumnClass}` + " weekGeoHeader col"}>
                            {calculatedGeo === "" ? <span>&nbsp;</span> : calculatedGeo}
                        </div>
                        <div className={`${weekColumnClass}` + " weekMaHeader col"}>
                            {item.marketArea || item.visit}
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${weekColumnClass}` + " col redBG"
                            : `${weekColumnClass}` + " col greenBG"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.ww }, 'value')}
                        </div>
                    </span>)
                }));
        }
    }
    render() {
        let MultiDimensionPanelItem = (this.props.isJourney === true) ? this.getMultiDimensionJourneyPanelItem() : this.getMultiDimensionPanelItem();
        return (MultiDimensionPanelItem)
    }
}

export default (MultiDimensionPanelItem)