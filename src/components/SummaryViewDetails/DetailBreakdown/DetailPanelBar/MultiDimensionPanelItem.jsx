import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as utils from "../../../../utilities.js";
import { DIMENSIONS, SUMMARY_FILTERS } from '../../../../Constants/consts';

class MultiDimensionPanelItem extends Component {

    getColor(activeSecondary, originalColor) {
        switch (originalColor) {
            case 'red':
                if (activeSecondary === SUMMARY_FILTERS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL ||
                    activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM || activeSecondary ===SUMMARY_FILTERS.RENEW_QTR_PF ||
                    activeSecondary === SUMMARY_FILTERS.RENEW_QTR_UI || activeSecondary ===SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) {
                    return 'greenBG';
                } else {
                    return 'redBG';
                }
            default:
            if (activeSecondary === SUMMARY_FILTERS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL ||
                activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM || activeSecondary ===SUMMARY_FILTERS.RENEW_QTR_PF ||
                activeSecondary === SUMMARY_FILTERS.RENEW_QTR_UI || activeSecondary ===SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) {
                return 'redBG';
            } else {
                return 'greenBG';
            }

        }
    }

    getMultiDimensionJourneyPanelItem(activeSecondary) {

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
                            {item.marketArea  }
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: this.props.valueType, value: item.actuals }, 'value')}
                        </div>

                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: this.props.valueType, value: item.qrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: this.props.valueType, value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${qtdColumnClass}` + " col " + `${this.getColor(activeSecondary, 'red')}`
                            : `${qtdColumnClass}` + " col " + `${this.getColor(activeSecondary, 'green')}`}>

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

                    if (this.props.type === DIMENSIONS.GEO ||this.props.type === DIMENSIONS.LTC || this.props.type === DIMENSIONS.SIGNAPP) {
                        if (item.type === calculatedGeo || item.type === prevGeo) {
                            calculatedGeo = "";
                        } else if (calculatedGeo === undefined || item.type !== calculatedGeo) {
                            calculatedGeo = item.type;
                        }
                    }

                    prevGeo = item.type;
                    return (<span key={marketCount++}>
                        <div className={`${weekColumnClass}` + " qtdGeoHeader col"}>
                            {calculatedGeo === "" ? <span>&nbsp;</span> : calculatedGeo}
                        </div>
                        <div className={`${weekColumnClass}` + " qtdMaHeader col"} >
                            {item.marketArea }
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: this.props.valueType, value: item.actuals }, 'value')}
                        </div>

                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: this.props.valueType, value: item.qrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: this.props.valueType, value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${weekColumnClass}` + " col " + `${this.getColor(activeSecondary, 'red')}`
                            : `${weekColumnClass}` + " col " + `${this.getColor(activeSecondary, 'green')}`}>
                            {utils.formatMetric({ valueType: 'percent', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.ww }, 'value')}
                        </div>
                    </span>)
                }));
        }
    }
    getMultiDimensionPanelItem(activeSecondary) {

        let calculatedGeo, prevGeo;
        let marketCount = 0;
        let qtdColumnClass, weekColumnClass;


        // Financial
        qtdColumnClass = 'qtdMarketColumn';
        weekColumnClass = 'weekMarketColumn';


        switch (this.props.timeMetric) {
           
            case 'qtd':
            // console.log('Multi', activeSecondary);
                return (this.props.data.qtd.map(item => {

                    // console.log('HERE',item);
                    if (this.props.type === DIMENSIONS.GEO  ) {
                        if (item.type === calculatedGeo || item.type === prevGeo) {
                            calculatedGeo = "";
                        } else if (calculatedGeo === undefined || item.type !== calculatedGeo) {
                            calculatedGeo = item.type;
                        }
                    }

                    prevGeo = item.type;
                    return (<div key={marketCount++}>
                        <div className={`${qtdColumnClass}` + " qtdGeoHeader col"}>
                            {calculatedGeo === "" ? <span>&nbsp;</span> : calculatedGeo}
                        </div>
                        <div className={`${qtdColumnClass}` + " qtdMaHeader col"} >
                            {item.marketArea }
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
                            ? `${qtdColumnClass}` + " col " + `${this.getColor(activeSecondary, 'red')}`
                            : `${qtdColumnClass}` + " col " + `${this.getColor(activeSecondary, 'green')}`}>

                            {utils.formatMetric({ valueType: 'percent', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.qq }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.yy }, 'value')}
                        </div>
                    </div>)
                }));
            default:
            // console.log('Multi', activeSecondary);
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
                            {item.marketArea }
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
                            ? `${weekColumnClass}` + " col " + `${this.getColor(activeSecondary, 'red')}`
                            : `${weekColumnClass}` + " col " + `${this.getColor(activeSecondary, 'green')}`}>
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
        let activeSecondary = this.props.activeSecondary !== undefined ? this.props.activeSecondary : 0;
        let MultiDimensionPanelItem = (this.props.isJourney === true) ? this.getMultiDimensionJourneyPanelItem(activeSecondary) : this.getMultiDimensionPanelItem(activeSecondary);
        return (MultiDimensionPanelItem)
    }
}

export default (MultiDimensionPanelItem)