import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as utils from "../../../../utilities.js";
import { DIMENSIONS, SUMMARY_FILTERS } from '../../../../Constants/consts';
import * as _ from 'lodash';
class MultiDimensionPanelItem extends Component {

    getColor(activeSecondary, originalColor) {
        switch (originalColor) {
            case 'red':
                if (activeSecondary === SUMMARY_FILTERS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL ||
                    activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM || activeSecondary === SUMMARY_FILTERS.RENEW_QTR_PF ||
                    activeSecondary === SUMMARY_FILTERS.RENEW_QTR_UI || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) {
                    return 'greenBG';
                } else {
                    return 'redBG';
                }
            default:
                if (activeSecondary === SUMMARY_FILTERS.FINANCE_CANCEL_ARR || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL ||
                    activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_ADOBECOM || activeSecondary === SUMMARY_FILTERS.RENEW_QTR_PF ||
                    activeSecondary === SUMMARY_FILTERS.RENEW_QTR_UI || activeSecondary === SUMMARY_FILTERS.RENEW_CANCEL_RESLLER_E) {
                    return 'redBG';
                } else {
                    return 'greenBG';
                }

        }
    }


     getQTDSubTotals(arr){
        let  actuals = 0, units = 0, qrf = 0, vsQrf= 0, qrfDiff=0, qq=0,yy=0
       let b =  arr.forEach(function(obj){
            actuals += obj['actuals'];
            units += obj['units'];
            qrf += obj['qrf'];
            // vsQrf += obj['vsQrf'];
            vsQrf= (qrf==0 || actuals==0)? 0:(actuals-qrf)/qrf 
            qrfDiff += obj['qrfDiff'];
            // qq += obj['qq'];
            // yy += obj['yy'];
            qq=0
            yy=0
        });

        return {
        actuals,units,qrf,vsQrf,qrfDiff,qq,yy
        };
        
    }
    getWeekSubTotals(arr){
        let  actuals = 0, units = 0, qrf = 0, vsQrf= 0, qrfDiff=0, ww=0
       let b =  arr.forEach(function(obj){
            actuals += obj['actuals'];
            units += obj['units'];
            qrf += obj['qrf'];
            // vsQrf += obj['vsQrf'];
            vsQrf= (qrf==0 || actuals==0)? 0:(actuals-qrf)/qrf 
            qrfDiff += obj['qrfDiff'];
           // ww += obj['ww'];
           ww=0
        });

        return {
        actuals,units,qrf,vsQrf,qrfDiff,ww
        };
        
    }
    getJourneyQTDSubTotals(arr){
        let  actuals = 0,  qrf = 0, vsQrf= 0, qrfDiff=0, qq=0,yy=0
       let b =  arr.forEach(function(obj){
            actuals += obj['actuals'];
            qrf += obj['qrf'];
            // vsQrf += obj['vsQrf'];
            vsQrf= (qrf==0 || actuals==0)? 0:(actuals-qrf)/qrf 
            qrfDiff += obj['qrfDiff'];
            //qq += obj['qq'];
            //yy += obj['yy'];
            qq=0
            yy=0
        });

        return {
        actuals,qrf,vsQrf,qrfDiff,qq,yy
        };
        
    }
    getJourneyWeekSubTotals(arr){
        let  actuals = 0, qrf = 0, vsQrf= 0, qrfDiff=0, ww=0
       let b =  arr.forEach(function(obj){
            actuals += obj['actuals'];
          
            qrf += obj['qrf'];
            // vsQrf += obj['vsQrf'];
            vsQrf= (qrf==0 || actuals==0)? 0:(actuals-qrf)/qrf 
            qrfDiff += obj['qrfDiff'];
            //ww += obj['ww'];
            ww=0
        });

        return {
        actuals,qrf,vsQrf,qrfDiff,ww
        };
        
    }
    getMultiDimensionJourneyPanelItem(activeSecondary) {

        let calculatedGeo, prevGeo;
        let marketCount = 0;
        let qtdColumnClass, weekColumnClass;

        // Journeys
        qtdColumnClass = 'qtdJourneyMarketColumn';
        weekColumnClass = 'weekJourneyMarketColumn';
        let groupedQTD = _.groupBy(this.props.data.qtd, function (item) { return item.type });
        let groupedWeek = _.groupBy(this.props.data.week, function (item) { return item.type });
        
        
        let qtdARR = [],weekARR=[];
        _.keys(groupedQTD).forEach(item => {
            console.log(groupedQTD[item]);
            qtdARR.push(...groupedQTD[item])
           qtdARR.push({...this.getJourneyQTDSubTotals(groupedQTD[item]),marketArea: 'Total', type: item});
        });
        _.keys(groupedWeek).forEach(item => {
            console.log(groupedWeek[item]);
            weekARR.push(...groupedWeek[item])
           weekARR.push({...this.getJourneyWeekSubTotals(groupedWeek[item]),marketArea: 'Total', type: item});
        });
        
        console.log("MultiDimensionPanelItem Journey")
        console.log(groupedQTD)
        switch (this.props.timeMetric) {
            case 'qtd':
                let journeyQTD = (qtdARR.map((item,index) => {

                    if (this.props.type === DIMENSIONS.GEO || this.props.type === DIMENSIONS.SIGNAPP || this.props.type === DIMENSIONS.LTC) {
                        if (item.type === calculatedGeo || item.type === prevGeo) {
                            calculatedGeo = "";
                        } else if (calculatedGeo === undefined || item.type !== calculatedGeo) {
                            calculatedGeo = item.type;
                        }
                    }

                    let TotalStyle = item.marketArea === 'Total'? ' boldFont ' : ''; 
                    let NoBorder = calculatedGeo === "" ? ' NoBorder' : ' BottomBorderTransparent';
                    let KeepBottomBorder= (weekARR.length-1)=== index ? ' KeepBottomBorder': '';
                    prevGeo = item.type;
                    return (<span key={marketCount++}>
                        <div className={`${qtdColumnClass}`+ NoBorder  + ` ${KeepBottomBorder} qtdGeoHeader col`}>
                            {calculatedGeo === "" ? <span>&nbsp;</span> : calculatedGeo}
                        </div>
                        <div className={`${qtdColumnClass}`  + TotalStyle + " qtdMaHeader col"} >
                            {item.marketArea}
                        </div>
                        <div className={`${qtdColumnClass}` + TotalStyle +" col"}>
                            {utils.formatMetric({ valueType: this.props.valueType, value: item.actuals }, 'value')}
                        </div>

                        <div className={`${qtdColumnClass}`+ TotalStyle + " col"}>
                            {utils.formatMetric({ valueType: this.props.valueType, value: item.qrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + TotalStyle+ " col"}>
                            {utils.formatMetric({ valueType: this.props.valueType, value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${qtdColumnClass}`+ TotalStyle + " col " + `${this.getColor(activeSecondary, 'red')}`
                            : `${qtdColumnClass}`+ TotalStyle + " col " + `${this.getColor(activeSecondary, 'green')}`}>

                            {utils.formatMetric({ valueType: 'percent', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}` + TotalStyle+ " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.qq }, 'value')}
                        </div>
                        <div className={`${qtdColumnClass}`+ TotalStyle + " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.yy }, 'value')}
                        </div>
                    </span>
                    )
                }));

                console.log('Journey QTD', journeyQTD);
                return journeyQTD;
            default:
                return (weekARR.map((item, index) => {

                    if (this.props.type === DIMENSIONS.GEO || this.props.type === DIMENSIONS.LTC || this.props.type === DIMENSIONS.SIGNAPP) {
                        if (item.type === calculatedGeo || item.type === prevGeo) {
                            calculatedGeo = "";
                        } else if (calculatedGeo === undefined || item.type !== calculatedGeo) {
                            calculatedGeo = item.type;
                        }
                    }
                    let TotalStyle = item.marketArea === 'Total'? ' boldFont ' : ''; 
                    let NoBorder = calculatedGeo === "" ? ' NoBorder' : ' BottomBorderTransparent';
                    let KeepBottomBorder= (weekARR.length-1)=== index ? ' KeepBottomBorder': '';
                    
                    prevGeo = item.type;    
                    return (<span key={marketCount++}>
                        <div className={`${weekColumnClass}` + NoBorder +  ` ${KeepBottomBorder} qtdGeoHeader col`}>
                            {calculatedGeo === "" ? <span>&nbsp;</span> : calculatedGeo}
                        </div>
                        <div className={`${weekColumnClass}`+ TotalStyle + " qtdMaHeader col"} >
                            {item.marketArea}
                        </div>
                        <div className={`${weekColumnClass}`+ TotalStyle + " col"}>
                            {utils.formatMetric({ valueType: this.props.valueType, value: item.actuals }, 'value')}
                        </div>

                        <div className={`${weekColumnClass}`+ TotalStyle + " col"}>
                            {utils.formatMetric({ valueType: this.props.valueType, value: item.qrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}` + TotalStyle+ " col"}>
                            {utils.formatMetric({ valueType: this.props.valueType, value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${weekColumnClass}`+ TotalStyle + " col " + `${this.getColor(activeSecondary, 'red')}`
                            : `${weekColumnClass}`+ TotalStyle + " col " + `${this.getColor(activeSecondary, 'green')}`}>
                            {utils.formatMetric({ valueType: 'percent', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ TotalStyle + " col"}>
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
        let actuals = 0, units = 0, qrf = 0, qrfdiff = 0, vsqrf = 0, qq = 0, yy = 0, ww = 0;
        let count = 0;
        // Financial
        qtdColumnClass = 'qtdMarketColumn';
        weekColumnClass = 'weekMarketColumn';
        let groupedQTD = _.groupBy(this.props.data.qtd, function (item) { return item.type });
        let groupedWeek = _.groupBy(this.props.data.week, function (item) { return item.type });

        let qtdARR = [],weekARR=[];
        _.keys(groupedQTD).forEach(item => {
            console.log(groupedQTD[item]);
            qtdARR.push(...groupedQTD[item])
           qtdARR.push({...this.getQTDSubTotals(groupedQTD[item]),marketArea: 'Total', type: item});
        });
        _.keys(groupedWeek).forEach(item => {
            console.log(groupedWeek[item]);
            weekARR.push(...groupedWeek[item])
           weekARR.push({...this.getWeekSubTotals(groupedWeek[item]),marketArea: 'Total', type: item});
        });
        
        console.log("MultiDimensionPanelItem")
        console.log(groupedQTD)
        switch (this.props.timeMetric) {
            case 'qtd':
                // console.log('Multi', activeSecondary);
                return (qtdARR.map((item,index) => {
                    let subTotalRow;
                    // console.log('HERE',item);
                    if (this.props.type === DIMENSIONS.GEO) {
                        if (item.type === calculatedGeo || item.type === prevGeo) {
                            calculatedGeo = "";
                        } else if (calculatedGeo === undefined || item.type !== calculatedGeo) {
                            calculatedGeo = item.type;
                        }
                    }
                    count++;
                    let TotalStyle = item.marketArea === 'Total'? ' boldFont ' : ''; 
                    let NoBorder = calculatedGeo === "" ? ' NoBorder' : ' BottomBorderTransparent';
                    let KeepBottomBorder= (weekARR.length-1)=== index ? ' KeepBottomBorder': '';
                    prevGeo = item.type;
                    return (
                        <div key={marketCount++}>
                            <div className={`${qtdColumnClass}`+ NoBorder + ` ${KeepBottomBorder} qtdGeoHeader col`}>
                                {calculatedGeo === "" ? <span>&nbsp;</span> : calculatedGeo}
                            </div>
                            <div className={`${qtdColumnClass}`+ TotalStyle + " qtdMaHeader col"} >
                                {item.marketArea}
                            </div>
                            <div className={`${qtdColumnClass}`+ TotalStyle + " col"}>
                                {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                            </div>
                            <div className={`${qtdColumnClass}`+ TotalStyle + " col"}>
                                {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                            </div>
                            <div className={`${qtdColumnClass}`+ TotalStyle + " col"}>
                                {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                            </div>
                            <div className={`${qtdColumnClass}`+ TotalStyle + " col"}>
                                {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                            </div>
                            <div className={(
                                item.vsQrf <= 0)
                                ? `${qtdColumnClass}`+ TotalStyle + " col " + `${this.getColor(activeSecondary, 'red')}`
                                : `${qtdColumnClass}`+ TotalStyle + " col " + `${this.getColor(activeSecondary, 'green')}`}>

                                {utils.formatMetric({ valueType: 'percent', value: item.vsQrf }, 'value')}
                            </div>
                            <div className={`${qtdColumnClass}`+ TotalStyle + " col"}>
                                {utils.formatMetric({ valueType: 'percent', value: item.qq }, 'value')}
                            </div>
                            <div className={`${qtdColumnClass}`+ TotalStyle + " col"}>
                                {utils.formatMetric({ valueType: 'percent', value: item.yy }, 'value')}
                            </div>
                        </div>)
                }));
            default:
                // console.log('Multi', activeSecondary);
                return (weekARR.map((item,index) => {
                    if (this.props.type === DIMENSIONS.GEO || this.props.type === DIMENSIONS.LTC) {
                        if (item.type === calculatedGeo || item.type === prevGeo) {
                            calculatedGeo = "";
                        } else if (calculatedGeo === undefined || item.type !== calculatedGeo) {
                            calculatedGeo = item.type;
                        }
                    }
                    
                    let TotalStyle = item.marketArea === 'Total'? ' boldFont ' : ''; 
                    let NoBorder = calculatedGeo === "" ? ' NoBorder' : ' BottomBorderTransparent';
                    let KeepBottomBorder= (weekARR.length-1)=== index ? ' KeepBottomBorder': '';
                    prevGeo = item.type;
                    return (<span key={marketCount++}>
                        <div className={`${weekColumnClass}`+ NoBorder + ` ${KeepBottomBorder} weekGeoHeader col`}>
                            {calculatedGeo === "" ? <span>&nbsp;</span> : calculatedGeo}
                        </div>
                        <div className={`${weekColumnClass}`+ TotalStyle + " weekMaHeader col"}>
                            {item.marketArea}
                        </div>
                        <div className={`${weekColumnClass}`+ TotalStyle + " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.actuals }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ TotalStyle + " col"}>
                            {utils.formatMetric({ valueType: 'units', value: item.units }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ TotalStyle + " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ TotalStyle + " col"}>
                            {utils.formatMetric({ valueType: 'currency', value: item.qrfDiff }, 'value')}
                        </div>
                        <div className={(
                            item.vsQrf <= 0)
                            ? `${weekColumnClass}`+ TotalStyle + " col " + `${this.getColor(activeSecondary, 'red')}`
                            : `${weekColumnClass}`+ TotalStyle + " col " + `${this.getColor(activeSecondary, 'green')}`}>
                            {utils.formatMetric({ valueType: 'percent', value: item.vsQrf }, 'value')}
                        </div>
                        <div className={`${weekColumnClass}`+ TotalStyle + " col"}>
                            {utils.formatMetric({ valueType: 'percent', value: item.ww }, 'value')}
                        </div>
                    </span>)
                }));
        }
    }
    
    render() {
        console.log("Rendering MultiDimensionalPanelItem")
        let activeSecondary = this.props.activeSecondary !== undefined ? this.props.activeSecondary : 0;
        let MultiDimensionPanelItem = (this.props.isJourney === true) ? this.getMultiDimensionJourneyPanelItem(activeSecondary) : this.getMultiDimensionPanelItem(activeSecondary);
        return (MultiDimensionPanelItem)
    }
}

export default (MultiDimensionPanelItem)