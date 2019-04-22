import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as utils from "../../../../utilities.js";

class SingleDimensionPanelItem extends Component {

    getColor(activeSecondary, originalColor) {
        switch (originalColor) {
            case 'red':
                if (activeSecondary == 2 || activeSecondary === 27 || activeSecondary ===28 ||
                    activeSecondary === 32) {
                    return 'greenBG';
                } else {
                    return 'redBG';
                }
            default:
            if (activeSecondary == 2 || activeSecondary === 27 || activeSecondary ===28 ||
                activeSecondary === 32) {
                return 'redBG';
            } else {
                return 'greenBG';
            }

        }
    }
    
    getSingleDimensionJourneyPanelItem(activeSecondary) {
        let qtdColumnClass, weekColumnClass;
        qtdColumnClass = 'qtdJourneyColumn';
        weekColumnClass = 'weekJourneyColumn';

        switch (this.props.timeMetric) {
            case 'qtd':
                return (this.props.data.qtd.map(item => {
                    return (<span key={item.index}>

                        <div className={`${qtdColumnClass}` + " qtdGeoHeader col"}>
                            {item.type}
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
            case 'week':
                return (this.props.data.week.map(item => {
                    return (<span key={item.index}>
                        <div className={`${weekColumnClass}` + " weekGeoHeader col"}>
                            {item.type}
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
            default:
                break;
        }
    }
    getSingleDimensionPanelItem(activeSecondary) {
        let qtdColumnClass, weekColumnClass;

        // Financial
        qtdColumnClass = 'qtdColumn';
        weekColumnClass = 'weekColumn';
        switch (this.props.timeMetric) {
            case 'qtd':
            // console.log('Multi', activeSecondary);
                return (this.props.data.qtd.map(item => {

                    return (<span key={item.index}>
                        <div className={`${qtdColumnClass}` + " qtdGeoHeader col"}>
                            {item.type}
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
                    </span>)
                }));
            case 'week':
            // console.log('Multi', activeSecondary);
                return (this.props.data.week.map(item => {
                    return (<span key={item.index}>
                        <div className={`${weekColumnClass}` + " weekGeoHeader col"}>
                            {item.type}
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}` + " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.units }, 'value')}
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
            default:
                break;
        }
    }
    render() {
        // console.log('ACTIVE SECONDARY', this.props.activeSecondary)

        let activeSecondary = this.props.activeSecondary !== undefined ? this.props.activeSecondary : 0;
        let PanelItem = (this.props.isJourney === true) ? this.getSingleDimensionJourneyPanelItem(0) : this.getSingleDimensionPanelItem(activeSecondary)
        return (PanelItem)
    }
}

export default (SingleDimensionPanelItem)