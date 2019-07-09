import {
    ADD_NEW_PRIMARY_COMMENT,
    ADD_NEW_PRIMARY_REPLY,
    ADD_NEW_SECONDARY_COMMENT,
    ADD_NEW_SECONDARY_REPLY,
    GET_SUMMARY_DATA,
    // FETCH_COMMENTS_COUNT,
    UPDATE_USE_IS_LOADING,
    UPDATE_RENEW_CANCEL_IS_LOADING,
    UPDATE_RENEW_IS_LOADING,
    UPDATE_RENEW_DETAILS_IS_LOADING,
    GET_RENEW_SECONDARY_DATA,
    GET_RENEW_DETAILS_DATA,
    GET_RENEW_CANCEL_DATA,
    GET_PRIMARY_DATA,
    GET_FINANCE_SECONDARY_DATA,
    GET_FINANCE_XDC1_SECONDARY_DATA,
    GET_FINANCE_XDC2_SECONDARY_DATA,
    GET_DISCOVER_SECONDARY_DATA,
    GET_TRY_SECONDARY_DATA,
    GET_TRAFFIC_SECONDARY_DATA,
    GET_MKTG_SECONDARY_DATA,
    GET_BUY_SECONDARY_DATA,
    GET_BUY_TRAFFIC_SECONDARY_DATA,
    GET_BUY_MKTG_SECONDARY_DATA,
    GET_BUY_FINANCE_SECONDARY_DATA,
    GET_USE_SECONDARY_DATA,
    DELETE_COMMENT,
    RESET_DATA,
    UPDATE_BUY_CONVERSION_IS_LOADING,
    UPDATE_BUY_MARKET_IS_LOADING,
    UPDATE_BUY_GROSS_IS_LOADING,
    UPDATE_PRIMARY_IS_LOADING,
    UPDATE_DISCOVER_SECONDARY_IS_LOADING,
    UPDATE_FINANCE_SECONDARY_IS_LOADING,
    UPDATE_TRY_IS_LOADING,
    UPDATE_TRAFFIC_IS_LOADING,
    UPDATE_MU_IS_LOADING,
    UPDATE_FINANCE_XDC_1_IS_LOADING,
    UPDATE_FINANCE_XDC_2_IS_LOADING,
    // FETCH_COMMENTS
} from 'actions/types';
import { SUMMARY_KPIS } from '../Constants/consts';
import _ from 'lodash'
import {
    SecondaryData
} from '../variables.js';
import { PrimaryData } from '../variables.js';
let newState;
let copyOfSquare;
let index = 0;
let copyOfState;
let commentIndex;
let currentMulti,
    newMulti,
    secondary;
export default function (state = {
    primary: PrimaryData,
    secondary: SecondaryData,
    renewCancelIsLoaded: false,
    renewIsLoaded: false,
    renewDetailsIsLoaded: false,
}, action) {
    switch (action.type) {
        case UPDATE_PRIMARY_IS_LOADING:
            return {
                ...state, primaryIsLoaded: action.payload
            }
        case UPDATE_DISCOVER_SECONDARY_IS_LOADING:
            return {
                ...state, discoverSecondaryIsLoaded: action.payload
            }
        case UPDATE_FINANCE_SECONDARY_IS_LOADING:
            return {
                ...state, financeSecondaryIsLoaded: action.payload
            }
        case UPDATE_TRAFFIC_IS_LOADING:
            return {
                ...state, trafficIsLoaded: action.payload
            }
        case UPDATE_FINANCE_XDC_1_IS_LOADING:
            return {
                ...state, financeXDC1IsLoaded: action.payload
            }
        case UPDATE_FINANCE_XDC_2_IS_LOADING:
            return {
                ...state, financeXDC2IsLoaded: action.payload
            }
        case UPDATE_MU_IS_LOADING:
            return {
                ...state, muIsLoaded: action.payload
            }
        case UPDATE_TRY_IS_LOADING:
            return {
                ...state, tryIsLoaded: action.payload
            }
        case UPDATE_BUY_CONVERSION_IS_LOADING:
            return {
                ...state, buyConversionIsLoaded: action.payload
            }
        case UPDATE_BUY_GROSS_IS_LOADING:
            return {
                ...state, buyGrossIsLoaded: action.payload
            }
        case UPDATE_BUY_MARKET_IS_LOADING:
            return {
                ...state, buyMarketIsLoaded: action.payload
            }
        case UPDATE_RENEW_IS_LOADING:
            return {
                ...state, renewIsLoaded: action.payload
            }
        case UPDATE_RENEW_DETAILS_IS_LOADING:
            return {
                ...state, renewDetailsIsLoaded: action.payload
            }
        case UPDATE_RENEW_CANCEL_IS_LOADING:
            return {
                ...state, renewCancelIsLoaded: action.payload
            }
        case UPDATE_USE_IS_LOADING:
            return {
                ...state, useIsLoaded: action.payload
            }
        case RESET_DATA:
            return {
                ...state,
                primaryIsLoaded: false,
                discoverSecondaryIsLoaded: false,
                financeSecondaryIsLoaded: false,
                financeXDC1IsLoaded: false,
                financeXDC2IsLoaded: false,
                trafficIsLoaded: false,
                muIsLoaded: false,
                tryIsLoaded: false,
                buyGrossIsLoaded: false,
                buyMarketIsLoaded: false,
                buyConversionIsLoaded: false,
                useIsLoaded: false,
                renewIsLoaded: false,
                renewCancelIsLoaded: false,
                renewDetailsIsLoaded: false,

            }
        case GET_PRIMARY_DATA:
            console.log('Request For Primary Data: ', action.payload);
            //Make a Stringify copy of state
            newState = JSON.parse(JSON.stringify(state));
            //Assign action  payload data to new state primary
            newState.primary[0].value = action.payload[0].data[0].NewARRActual;
            newState.primary[0].targetFQ = action.payload[0].data[0].NewARRTargetFQ;
            newState.primary[0].target = action.payload[0].data[0].NewARRTarget;
            newState.primary[0].vsqrf = action.payload[0].data[0].NewVsQrf;
            newState.primary[1].value = action.payload[1].data[0].TrafficActual;
            newState.primary[1].target = action.payload[1].data[0].TrafficTarget;
            newState.primary[1].targetFQ = action.payload[1].data[0].TrafficTargetFQ;
            newState.primary[1].vsqrf = action.payload[1].data[0].TrafficVsQrf;
            newState.primary[2].value = action.payload[2].data[0].NewQFMSActual;
            newState.primary[2].target = action.payload[2].data[0].NewQFMsTarget;
            newState.primary[2].vsqrf = action.payload[2].data[0].NewQFMsVsQrf;
            newState.primary[2].targetFQ = action.payload[2].data[0].NewQFMSTargetFQ;
            newState.primary[3].value = action.payload[3].data[0].ConversionActual;
            newState.primary[3].target = action.payload[3].data[0].ConversionTarget;
            newState.primary[3].vsqrf = action.payload[3].data[0].ConversionVsQrf;
            newState.primary[3].targetFQ = action.payload[3].data[0].ConversionTargetFQ;
            newState.primary[4].value = action.payload[4].data[0].RepeatMAUActual;
            newState.primary[4].target = action.payload[4].data[0].RepeatMAUTarget;
            newState.primary[4].vsqrf = action.payload[4].data[0].RepeatMAUVsQRF;
            newState.primary[4].targetFQ = action.payload[4].data[0].RepeatMAUTargetFQ;
            newState.primary[5].value = action.payload[5].data[0].UIRateActual;
            newState.primary[5].target = action.payload[5].data[0].UIRateTarget;
            newState.primary[5].vsqrf = action.payload[5].data[0].UIRateVsQrf;
            newState.primary[5].targetFQ = action.payload[5].data[0].UIRateTargetFQ;
            //Return a copy of newstate
            return { ...newState, primaryIsLoaded: true };
        case GET_DISCOVER_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('Request For Discover Secondary Tiles Data: ', action.payload);
            processTrafficSecondaryData(action.payload[1].data[0], newState.secondary);
            processUQFMSecondaryData(action.payload[2].data[0], newState.secondary);
            processMUSecondaryData(action.payload[0].data[0], newState.secondary);
            processPMSSSecondaryData(action.payload[3].data[0], newState.secondary);
            return { ...newState, discoverSecondaryIsLoaded: true }
        case GET_FINANCE_SECONDARY_DATA:
            console.log('Request For Finance Secondary Details Data: ', action.payload);
            newState = JSON.parse(JSON.stringify(state));
            processXDC1FinanceSecondaryData(action.payload[0], newState.secondary);
            processXDC2FinanceSecondaryData(action.payload[1], newState.secondary);

            return { ...newState, financeSecondaryIsLoaded: true };
        case GET_FINANCE_XDC1_SECONDARY_DATA:
            console.log("Request for XDC 1 Finance: ", action.payload);
            newState = JSON.parse(JSON.stringify(state));
            processXDC1FinanceSecondaryData(action.payload[0], newState.secondary);
            processXDC1FinancialMultichart(newState.secondary, action.payload[1].data);
            processXDC1FinancialUnitsMultichart(newState.secondary, action.payload[2].data);
            processXDC1FinancialQTD(newState.secondary, action.payload[3].data);
            processXDC1FinancialGeoQTD(newState.secondary, action.payload[4].data);
            processXDC1FinancialGeoWeek(newState.secondary, action.payload[4].data)
            processXDC1FinancialMarketQTD(newState.secondary, action.payload[5].data);
            processXDC1FinancialMarketWeek(newState.secondary, action.payload[5].data);
            processXDC1FinancialrouteQTD(newState.secondary, action.payload[7].data);
            processXDC1FinancialrouteWeek(newState.secondary, action.payload[7].data)
            processXDC1FinancialSegmentQTD(newState.secondary, action.payload[6].data);
            processXDC1FinancialSegmentWeek(newState.secondary, action.payload[6].data);
            processXDC1FinancialproductQTD(newState.secondary, action.payload[8].data);
            processXDC1FinancialProductWeek(newState.secondary, action.payload[8].data);
            return { ...newState, financeXDC1IsLoaded: true };
        case GET_FINANCE_XDC2_SECONDARY_DATA:
            console.log("Request for XDC 2 Finance: ", action.payload);
            newState = JSON.parse(JSON.stringify(state));
            processXDC2FinanceSecondaryData(action.payload[0], newState.secondary);
            processXDC2FinancialMultichart(newState.secondary, action.payload[1].data);
            processXDC2FinancialUnitsMultichart(newState.secondary, action.payload[2].data);
            processXDC2FinancialQTD(newState.secondary, action.payload[3].data);
            processXDC2FinancialGeoQTD(newState.secondary, action.payload[4].data);
            processXDC2FinancialGeoWeek(newState.secondary, action.payload[4].data)
            processXDC2FinancialMarketQTD(newState.secondary, action.payload[5].data);
            processXDC2FinancialMarketWeek(newState.secondary, action.payload[5].data);
            processXDC2FinancialrouteQTD(newState.secondary, action.payload[7].data);
            processXDC2FinancialrouteWeek(newState.secondary, action.payload[7].data)
            processXDC2FinancialSegmentQTD(newState.secondary, action.payload[6].data);
            processXDC2FinancialSegmentWeek(newState.secondary, action.payload[6].data);
            processXDC2FinancialproductQTD(newState.secondary, action.payload[8].data);
            processXDC2FinancialProductWeek(newState.secondary, action.payload[8].data);
            console.log('New State for XDC2', newState);
            return { ...newState, financeXDC2IsLoaded: true };
        case GET_TRAFFIC_SECONDARY_DATA:
            console.log('Request For Traffic + UQFM Conv Secondary Details Data: ', action.payload);
            newState = JSON.parse(JSON.stringify(state));
            processTrafficSecondaryData(action.payload[0].data[0], newState.secondary);
            processTrafficMultichartData(action.payload[1].data, newState.secondary);
            processTrafficQTDData(action.payload[2].data[0], newState.secondary);
            processTrafficGeoQTDData(action.payload[3].data, newState.secondary);
            processTrafficMarketQTDData(action.payload[4].data, newState.secondary);
            processTrafficWebSegmentQTDData(action.payload[5].data, newState.secondary);
            processTrafficLTCQTDData(action.payload[6].data, newState.secondary);
            //Replacing Conversion with Customer
            // processTrafficConvQTDData(action.payload[7].data, newState.secondary);
            processTrafficCustomerQTDData(action.payload[7].data, newState.secondary );
            processTrafficMobDeskQTDData(action.payload[8].data, newState.secondary);
            processTrafficNewRepQTDData(action.payload[9].data, newState.secondary);


            processUQFMSecondaryData(action.payload[10].data[0], newState.secondary);
            processUQFMMultichartData(action.payload[11].data, newState.secondary);
            processUQFMQTDData(action.payload[12].data[0], newState.secondary);
            processUQFMGeoQTDData(action.payload[13].data, newState.secondary);
            processUQFMMarketQTDData(action.payload[14].data, newState.secondary);
            return { ...newState, trafficIsLoaded: true };
        case GET_MKTG_SECONDARY_DATA:
            console.log('Request For Marketable Universe Secondary Details Data: ', action.payload);
            newState = JSON.parse(JSON.stringify(state));


            processMUSecondaryData(action.payload[0].data[0], newState.secondary);
            processMUMultichartData(action.payload[1].data, newState.secondary);
            processMUQTDData(action.payload[2].data[0], newState.secondary);
            processMUGeoQTDData(action.payload[3].data, newState.secondary);
            processMUMarketQTDData(action.payload[4].data, newState.secondary);
            processMUChannelQTDData(action.payload[5].data, newState.secondary);

            processPMSSSecondaryData(action.payload[6].data[0], newState.secondary);
            processPMSSMultichartData(action.payload[7].data, newState.secondary);
            processPMSSQTDData(action.payload[8].data[0], newState.secondary);
            processPMSSGeoQTDData(action.payload[9].data, newState.secondary);
            processPMSSMarketQTDData(action.payload[10].data, newState.secondary);
            processPMSSChannelQTDData(action.payload[11].data, newState.secondary);

            return { ...newState, muIsLoaded: true };
        case GET_TRY_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('Request For Try Secondary Details Data: ', action.payload);

            processTrySecondaryData(action.payload[0].data[0], newState.secondary);
            processTryMultichartData(action.payload[1].data, newState.secondary);
            processTryQTDData(action.payload[2].data[0], newState.secondary);
            processTryGeoQTDData(action.payload[3].data, newState.secondary);
            processTryMarketQTDData(action.payload[4].data, newState.secondary);
            processTryProductQTDData(action.payload[5].data, newState.secondary);
            processTrySignUpAppQTDData(action.payload[6].data, newState.secondary);
            processTrySignUpCatQTDData(action.payload[7].data, newState.secondary);
            processTryDownloadQTDData(action.payload[8].data, newState.secondary);
            processTryQFMQTDData(action.payload[9].data, newState.secondary);

            return { ...newState, tryIsLoaded: true };
        case GET_BUY_SECONDARY_DATA:
            console.log('Request for Buy Secondary Data: ', action.payload);
            newState = JSON.parse(JSON.stringify(state));
            processBuyMKTSourcedSecondary(action.payload[1].data[0], newState.secondary);
            processBuyPMSSSecondaryData(action.payload[2].data[0], newState.secondary);
            processBuyGrossSecondaryData(action.payload[3].data[0], newState.secondary);
            processBuyConversionSecondaryData(action.payload[0].data[0], newState.secondary);
            processBuyLTVSourcedSecondary(action.payload[4].data[0], newState.secondary);
            

            return { ...newState, buySecondaryIsLoaded: true };
        case GET_BUY_TRAFFIC_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('Request For Buy Conversion Data ', action.payload);
            processBuyConversionSecondaryData(action.payload[0].data[0], newState.secondary);
            processBuyConversionMultichartData(action.payload[1].data, newState.secondary);
            processBuyConversionQTDData(action.payload[2].data[0], newState.secondary);
            processBuyConversionGeoQTDData(action.payload[3].data, newState.secondary);
            processBuyConversionMarketQTDData(action.payload[4].data, newState.secondary);
            processBuyConversionWebSegmentQTDData(action.payload[5].data, newState.secondary);
            processBuyConversionLTCQTDData(action.payload[6].data, newState.secondary);
            processBuyConversionConvQTDData(action.payload[7].data, newState.secondary);
            processBuyConversionMobDeskQTDData(action.payload[8].data, newState.secondary);
            processBuyConversionNewRepQTDData(action.payload[9].data, newState.secondary);
            processBuyConversionQFMData(action.payload[10].data, newState.secondary);

            return { ...newState, buyConversionIsLoaded: true };
        case GET_BUY_MKTG_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('Request For Mktg Sourced + PM Sourced & Spend Secondary Details Data: ', action.payload);

            processBuyMKTSourcedSecondary(action.payload[0].data[0], newState.secondary);
            processBuyMKTSourcedMultichart(action.payload[1].data, newState.secondary);
            processBuyMKTSourcedQTD(action.payload[2].data[0], newState.secondary);
            processBuyMKTSourcedGeoQTD(action.payload[3].data, newState.secondary);
            processBuyMKTSourcedMAQTD(action.payload[4].data, newState.secondary);
            processBuyMKTSourcedChannelQTD(action.payload[5].data, newState.secondary);
            processBuyPMSSSecondaryData(action.payload[6].data[0], newState.secondary);
            processBuyMKTSourcedSegmentQTD(action.payload[13].data, newState.secondary);
            processBuyMKTSourcedProductQTD(action.payload[12].data, newState.secondary);

            processBuyPMSSMultichartData(action.payload[7].data, newState.secondary);
            processBuyPMSSQTDData(action.payload[8].data[0], newState.secondary);
            processBuyPMSSGeoQTDData(action.payload[9].data, newState.secondary);
            processBuyPMSSMarketQTDData(action.payload[10].data, newState.secondary);
            processBuyPMSSChannelQTDData(action.payload[11].data, newState.secondary);


            processBuyLTVSourcedSecondary(action.payload[14].data[0], newState.secondary);
            processBuyLTVSourcedMultichart(action.payload[15].data, newState.secondary);
            processBuyLTVSourcedQTD(action.payload[16].data[0], newState.secondary);
            processBuyLTVSourcedGeoQTD(action.payload[17].data, newState.secondary);
            processBuyLTVSourcedMAQTD(action.payload[18].data, newState.secondary);
            processBuyLTVSourcedProductQTD(action.payload[19].data, newState.secondary);
            processBuyLTVSourcedSegmentQTD(action.payload[20].data, newState.secondary);
            processBuyLTVSourcedSubscriptionQTD(action.payload[21].data, newState.secondary);

            return { ...newState, buyMarketIsLoaded: true };
        case GET_BUY_FINANCE_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('Request For Buy Gross ARR Secondary Details Data: ', action.payload);
            processBuyGrossSecondaryData(action.payload[0].data[0], newState.secondary);
            processBuyGrossMultichart(newState.secondary, action.payload[1].data);
            processBuyGrossQTD(newState.secondary, action.payload[2].data);
            processBuyGrossGeoQTD(newState.secondary, action.payload[3].data);
            processBuyGrossGeoWeek(newState.secondary, action.payload[3].data)
            processBuyGrossMarketQTD(newState.secondary, action.payload[4].data);
            processBuyGrossMarketWeek(newState.secondary, action.payload[4].data);
            processBuyGrossrouteQTD(newState.secondary, action.payload[6].data);
            processBuyGrossrouteWeek(newState.secondary, action.payload[6].data)
            processBuyGrossSegmentQTD(newState.secondary, action.payload[5].data);
            processBuyGrossSegmentWeek(newState.secondary, action.payload[5].data);
            processBuyGrossproductQTD(newState.secondary, action.payload[7].data);
            processBuyGrossProductWeek(newState.secondary, action.payload[7].data);
            processBuyGrossQFMTypeQTD(newState.secondary, action.payload[8].data);

            return { ...newState, buyGrossIsLoaded: true };
        case GET_USE_SECONDARY_DATA:
            console.log('Request For Use   Secondary Details Data: ', action.payload);
            processUseSecondaryData(action.payload[0].data[0], newState.secondary, action.payload[7].data[0]);
            processUseMultichartData(action.payload[1].data, newState.secondary);
            processUseQTDData(action.payload[2].data, newState.secondary);
            processUseGeoQTDData(action.payload[3].data, newState.secondary);
            processUseMarketQTDData(action.payload[4].data, newState.secondary);
            processUseSegmentQTDData(action.payload[5].data, newState.secondary);
            processUseSubscriptionQTDData(action.payload[6].data, newState.secondary);
            return { ...newState, useIsLoaded: true };
        case GET_RENEW_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));

            console.log('Request For Renew  Secondary  Data: ', action.payload);
            // 0-6 = Renew XDC , 7-15 = Finance2XDC

            processRenewSecondaryData(action.payload, newState.secondary);


            return { ...newState, renewIsLoaded: true };
        case GET_RENEW_CANCEL_DATA:
            newState = JSON.parse(JSON.stringify(state));

            console.log('Request For Renew  Cancel  Data: ', action.payload);
            processRenewCancelSecondaryData(action.payload[0], newState.secondary, action.payload[7], action.payload[14]);
            processRenewCancelMultichart(newState.secondary, action.payload[1].data, action.payload[8].data, action.payload[15].data);
            processRenewCancelQTD(newState.secondary, action.payload[2].data[0], action.payload[9].data[0], action.payload[16].data[0]);
            processRenewCancelGeoQTD(newState.secondary, action.payload[3].data, action.payload[10].data, action.payload[17].data);
            processRenewCancelGeoWeek(newState.secondary, action.payload[3].data, action.payload[10].data, action.payload[17].data)
            processRenewCancelMarketQTD(newState.secondary, action.payload[4].data, action.payload[11].data, action.payload[18].data);
            processRenewCancelMarketWeek(newState.secondary, action.payload[4].data, action.payload[11].data, action.payload[18].data);
            processRenewCancelSegmentQTD(newState.secondary, action.payload[5].data, action.payload[12].data, action.payload[19].data);
            processRenewCancelSegmentWeek(newState.secondary, action.payload[5].data, action.payload[12].data, action.payload[19].data);
            processRenewCancelproductQTD(newState.secondary, action.payload[6].data, action.payload[13].data, action.payload[20].data);
            processRenewCancelProductWeek(newState.secondary, action.payload[7].data, action.payload[13].data, action.payload[20].data);

            return { ...newState, renewCancelIsLoaded: true };
        case GET_RENEW_DETAILS_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('Request For Renew  Details   Data: ', action.payload);
            processRenewDetailSecondaryData(action.payload[0], newState.secondary, action.payload[6], action.payload[12]);
            processRenewMultichartData(action.payload[1].data, newState.secondary, action.payload[7].data, action.payload[13].data);
            processRenewQTDData(action.payload[2].data[0], newState.secondary, action.payload[8].data[0], action.payload[14].data[0]);
            processRenewGeoQTDData(action.payload[3].data, newState.secondary, action.payload[9].data, action.payload[15].data);
            processRenewMarketQTDData(action.payload[4].data, newState.secondary, action.payload[10].data, action.payload[16].data);
            processRenewSegmentQTDData(action.payload[5].data, newState.secondary, action.payload[11].data, action.payload[17].data);
            processRenewProductQTDData(action.payload[18].data, newState.secondary, action.payload[19].data);
            return { ...newState, renewDetailsIsLoaded: true };
        default:
            return state;
    }
}

/** Custom function to Reorder QTD Details with row always last */
function processQTDOrder(data) {
    if (data.length !== 0) {

        // Before re-ordering check if there are rows re-order
        let hasRows = false;
        for (let e = 0; e < data.length; e++) {
            if (data[e].marketArea === "ROW") {
                hasRows = true;
                break;
            }
        }

        // if it contains rows re-order else then return the data
        if (hasRows) {
            let groupByMarketArea = _.groupBy(data, function (item) { return item.marketArea });
            let arr = Object.entries(groupByMarketArea);
            let rowsArr = groupByMarketArea.ROW;
            let compiledArray = [];
            let noRowsArr = [];
            let removedRows = _.filter(arr, function (o) {
                return o[0] !== 'ROW';
            });

            //  separate all non rows
            for (let i = 0; i < removedRows.length; i++) {
                let items = removedRows[i][1];
                for (let j = 0; j < items.length; j++) {
                    noRowsArr.push(items[j]);
                }
            }

            for (let k = 0; k < noRowsArr.length; k++) {
                compiledArray.push(noRowsArr[k]);
                let toFind = noRowsArr[k];
                for (let a = 0; a < noRowsArr.length; a++) {
                    if (noRowsArr[a].type === toFind.type && noRowsArr[a] !== toFind) {
                        compiledArray.push(noRowsArr[a]);
                        noRowsArr.splice(a, 1);
                    }
                }
                for (let n = 0; n < rowsArr.length; n++) {
                    if (toFind.type === rowsArr[n].type) {
                        compiledArray.push(rowsArr[n]);
                        rowsArr.splice(n, 1);
                    }
                }
            }

            return compiledArray.concat(rowsArr);
        } else {
            return data;
        }

    } else {
        return [];
    }

}

//XDC1
export function processXDC1FinanceSecondaryData(g1, newState) {
    //Finance
    // Assigns the values from the first item in the g1 data array to Net New ARR for actual, target, targetFQ, and vsQrf
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].value = g1.data[0].NewARRActual;
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].target = g1.data[0].NewARRTarget;
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].targetFQ = g1.data[0].NewARRTargetFQ;
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].vsQrf = g1.data[0].NewVsQrf;
    // //Gross New Arr
    // Assigns the values from the first item in the g1 data array to Gross New ARR for actual, target, targetFQ, and vsQrf
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].value = g1.data[0].GrossARRActual;
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].targetFQ = g1.data[0].GrossARRTargetFQ;
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].target = g1.data[0].GrossARRTarget;
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].vsQrf = g1.data[0].GrossVsQrf;

}
export function processXDC1FinancialMultichart(newState, data) {

    // Remap the week 1 value of 'Q2W1' to 1
    let weekFlag = data.map(item => {
        // If the the system cannot parse the week into an integer, it knows that is week one
        // This is true because the first week is the only way labeled this way
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })

    // Re order the data into the newData array
    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);
    // Instantiate necessary objects for mapping
    let netArr = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    },
        grossArr = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        }
    //Get Net New and Gross New Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        netArr.actual.push(item.NewARRActual);
        netArr.target.push(item.NewARRTargetFQ);
        netArr.ly.push(item.NewARRLY);
        netArr.lq.push(item.NewARRLQ);
        grossArr.actual.push(item.GrossARRActual);
        grossArr.target.push(item.GrossARRTargetFQ);
        grossArr.ly.push(item.GrossARRLY);
        grossArr.lq.push(item.GrossARRLQ);
        
    };
    //Set Multichart Values for the first and second objects in secondary state
    // Net New = 0 and Gross New = 1
    for (let i = 0; i <= 2; i++) {
        switch (i) {
            case 0:
                currentMulti = [netArr.actual, netArr.target, netArr.ly, netArr.lq];
                break;
            case 1:
                currentMulti = [grossArr.actual, grossArr.target, grossArr.ly, grossArr.lq];
                break;
            default:
                break;
        }
        newState[i]['details'].multichart = currentMulti;
    }
}
export function processXDC1FinancialUnitsMultichart(newState, data) {
    // Remap the week 1 value of 'Q2W1' to 1
    let weekFlag = data.map(item => {
       // If the the system cannot parse the week into an integer, it knows that is week one
        // This is true because the first week is the only way labeled this way
         return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // Re order the data into the newData array
    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);
    // Instantiate necessary objects for mapping
    let netUnits = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    },
        grossUnits = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        };


    //Push Multichart Values for the first and second objects in secondary state to a new array
    // Net New and Gross New
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        netUnits.actual.push(item.NewUnitsActual);
        netUnits.target.push(item.NewUnitsTarget);
        netUnits.ly.push(item.NewUnitsLY);
        netUnits.lq.push(item.NeWUnitsLQ);
       
        grossUnits.actual.push(item.GrossUnitsActual);
        grossUnits.target.push(item.GrossUnitsTarget);
        grossUnits.ly.push(item.GrossUnitsLY);
        grossUnits.lq.push(item.GrossUnitsLQ);
        
    };

    // Set Units Multichart in state for Net New and Gross New
    for (let i = 0; i <= 2; i++) {
        newMulti = []
        switch (i) {
            case 0:
                newMulti = [netUnits.actual, netUnits.target, netUnits.ly, netUnits.lq];
                break;
            case 1:
                newMulti = [grossUnits.actual, grossUnits.target, grossUnits.ly, grossUnits.lq];
                break;

            default:
                break;
        }
        newState[i]['details'].unitMultichart = newMulti;
    }
}
export function processXDC1FinancialQTD(newState, data) {
    newState = Object.assign([], newState);
    // console.log(data)
    // State Order: Actual, Units, QRF, QRFDiff, VSQrf, QQ, YY
    for (let i = 0; i <= 2; i++) {
        let findata = data[0];
        switch (i) {
            // New New Arr
            case 0:
                newState[i].details.qtdw.qtd =
                    [
                        {
                            index: 1,
                            header: 'Actuals',
                            value: findata.NewActuals
                        },
                        {
                            index: 2,
                            header: 'Units',
                            value: findata.NewUnitsActual
                        },
                        {
                            index: 3,
                            header: 'QRF',
                            value: findata.NewTarget
                        },
                        {
                            index: 4,
                            header: 'QRF Diff',
                            value: findata.NewVsQrfDiff
                        },
                        {
                            index: 5,
                            header: 'Vs Qrf',
                            value: findata.NewARRVsQrf
                        },
                        {
                            index: 6,
                            header: 'Q/Q',
                            value: findata.NewARRQQTY
                        },
                        {
                            index: 7,
                            header: 'Y/Y',
                            value: findata.NewARRYY
                        }
                    ]

                newState[i].details.qtdw.week[0].value = findata.NewARRCW
                newState[i].details.qtdw.week[1].value = findata.NewUnitsCW;
                newState[i].details.qtdw.week[2].value = findata.NewARRTargetCW
                newState[i].details.qtdw.week[3].value = findata.NewCWVsQrfDiff;
                newState[i].details.qtdw.week[4].value = findata.NewCWVsQrf;
                newState[i].details.qtdw.week[5].value = findata.NewWW;
                newState[i].details.stats[0].value = findata.NewARRVsQrf;
                newState[i].details.stats[1].value = findata.NewARRQQTY;
                newState[i].details.stats[2].value = findata.NewARRQQLY;
                newState[i].details.stats[3].value = findata.NewARRYY;
                break;
            // Gross New Arr
            case 1:
                newState[i].details.qtdw.qtd[0].value = findata.GrossActuals;
                newState[i].details.qtdw.qtd[1].value = findata.GrossUnitsActual;
                newState[i].details.qtdw.qtd[2].value = findata.GrossTarget;
                newState[i].details.qtdw.qtd[3].value = findata.GrossVsQrfDiff;
                newState[i].details.qtdw.qtd[4].value = findata.GrossARRVsQrf;
                newState[i].details.qtdw.qtd[5].value = findata.GrossARRQQTY;
                newState[i].details.qtdw.qtd[6].value = findata.GrossARRYY;
                newState[i].details.qtdw.week[0].value = findata.GrossARRCW
                newState[i].details.qtdw.week[1].value = findata.GrossUnitsCW;
                newState[i].details.qtdw.week[2].value = findata.GrossARRTargetCW
                newState[i].details.qtdw.week[3].value = findata.GrossCWVsQrfDiff;
                newState[i].details.qtdw.week[4].value = findata.GrossCWVsQrf;
                newState[i].details.qtdw.week[5].value = findata.GrossWW;
                newState[i].details.stats[0].value = findata.GrossARRVsQrf;
                newState[i].details.stats[1].value = findata.GrossARRQQTY;
                newState[i].details.stats[2].value = findata.GrossARRQQLY;
                newState[i].details.stats[3].value = findata.GrossARRYY;
                break;

        }
    }
}
export function processXDC1FinancialGeoQTD(newState, data) {
    // console.log('YO', data);
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewActuals,
            units: item.NewUnitsActual,
            marketArea: item.market_area_group,
            qq: item.NewARRQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.NewARRVsQrf,
            yy: item.NewARRYY
        }
        // console.log(net);
        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_group,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.geo_code,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_group,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.geo_code,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewalActuals,
            marketArea: item.market_area_group,
            qq: item.RenewalARRQQTY,
            qrf: item.RenewalTarget,
            qrfDiff: item.RenewalVsQrfDiff,
            type: item.geo_code,
            units: item.RenewalUnitsActual,
            vsQrf: item.RenewalARRVsQrf,
            yy: item.RenewalARRYY
        }

        item1.push(net);
        item2.push(gross);

    }

    // console.log('YO', item1);
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.geo.qtd = processQTDOrder(item1);
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.geo.qtd = processQTDOrder(item2);
    // newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.geo.qtd = processQTDOrder(item3);
    // newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.geo.qtd = processQTDOrder(item4);
}
export function processXDC1FinancialGeoWeek(newState, data) {
    // console.log(data);
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewARRCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.NewARRTargetCW,
            qrfDiff: item.NewCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.NewCWVsQrf,
            ww: item.NewWW

        }
        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }
        let ren = {
            index: i,
            actuals: item.RenewalARRCW,
            units: item.RenewalUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.RenewalARRTargetCW,
            qrfDiff: item.RenewalCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.RenewalCWVsQrf,
            ww: item.RenewalWW
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.geo.week = processQTDOrder(item1);
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.geo.week = processQTDOrder(item2);
    // newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.geo.week = processQTDOrder(item3);
    // newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.geo.week = processQTDOrder(item4);
}
export function processXDC1FinancialMarketQTD(newState, data) {

    //Clear old Values
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.market.qtd = [];
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.market.qtd = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewActuals,
            units: item.NewUnitsActual,
            marketArea: item.market_area_code,
            qq: item.NewARRQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.NewARRVsQrf,
            yy: item.NewARRYY
        }
        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.market_area_code,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.market_area_code,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewalARRQQTY,
            qrf: item.RenewalTarget,
            qrfDiff: item.RenewalVsQrfDiff,
            type: item.market_area_code,
            units: item.RenewalUnitsActual,
            vsQrf: item.RenewalARRVsQrf,
            yy: item.RenewalARRYY
        }

        newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.market.qtd.push(net);
        newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.market.qtd.push(gross);
        // newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.market.qtd.push(canc);
        // newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.market.qtd.push(ren);

    }

}
export function processXDC1FinancialMarketWeek(newState, data) {
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewARRCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.NewARRTargetCW,
            qrfDiff: item.NewCWVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.NewCWVsQrf,
            ww: item.NewWW

        }
        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }
        let ren = {
            index: i,
            actuals: item.RenewalARRCW,
            units: item.RenewalUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewalARRTargetCW,
            qrfDiff: item.RenewalCWVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.RenewalCWVsQrf,
            ww: item.RenewalWW
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.market.week = item1;
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.market.week = item2;
    // newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.market.week = item3;
    // newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.market.week = item4;
}
export function processXDC1FinancialrouteQTD(newState, data) {

    //Clear old Values
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.route.qtd = [];
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.route.qtd = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewActuals,
            units: item.NewUnitsActual,
            marketArea: item.market_area_code,
            qq: item.NewARRQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.NewARRVsQrf,
            yy: item.NewARRYY
        }
        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.route_to_market,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.route_to_market,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewalARRQQTY,
            qrf: item.RenewalTarget,
            qrfDiff: item.RenewalVsQrfDiff,
            type: item.route_to_market,
            units: item.RenewalUnitsActual,
            vsQrf: item.RenewalARRVsQrf,
            yy: item.RenewalARRYY
        }

        newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.route.qtd.push(net);
        newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.route.qtd.push(gross);
        // newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.route.qtd.push(canc);
        // newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.route.qtd.push(ren);

    }

}
export function processXDC1FinancialrouteWeek(newState, data) {
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewARRCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.NewARRTargetCW,
            qrfDiff: item.NewCWVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.NewCWVsQrf,
            ww: item.NewWW

        }
        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }
        let ren = {
            index: i,
            actuals: item.RenewalARRCW,
            units: item.RenewalUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewalARRTargetCW,
            qrfDiff: item.RenewalCWVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.RenewalCWVsQrf,
            ww: item.RenewalWW
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.route.week = item1;
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.route.week = item2;
    // newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.route.week = item3;
    // newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.route.week = item4;
}
export function processXDC1FinancialSegmentQTD(newState, data) {

    //Clear old Values
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.segment.qtd = [];
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.segment.qtd = [];
    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.segment.qtd = [];
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.segment.qtd = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewActuals,
            units: item.NewUnitsActual,
            marketArea: item.market_area_code,
            qq: item.NewARRQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.NewARRVsQrf,
            yy: item.NewARRYY
        }
        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.segment_pivot,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.segment_pivot,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewalARRQQTY,
            qrf: item.RenewalTarget,
            qrfDiff: item.RenewalVsQrfDiff,
            type: item.segment_pivot,
            units: item.RenewalUnitsActual,
            vsQrf: item.RenewalARRVsQrf,
            yy: item.RenewalARRYY
        }

        newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.segment.qtd.push(net);
        newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.segment.qtd.push(gross);
        // newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.segment.qtd.push(canc);
        // newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.segment.qtd.push(ren);

    }

}
export function processXDC1FinancialSegmentWeek(newState, data) {
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewARRCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.NewARRTargetCW,
            qrfDiff: item.NewCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.NewCWVsQrf,
            ww: item.NewWW

        }
        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }
        let ren = {
            index: i,
            actuals: item.RenewalARRCW,
            units: item.RenewalUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewalARRTargetCW,
            qrfDiff: item.RenewalCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.RenewalCWVsQrf,
            ww: item.RenewalWW
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.segment.week = item1;
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.segment.week = item2;

}
export function processXDC1FinancialproductQTD(newState, data) {

    //Clear old Values
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.product.qtd = [];
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.product.qtd = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewActuals,
            units: item.NewUnitsActual,
            marketArea: item.market_area_code,
            qq: item.NewARRQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.product_category,
            vsQrf: item.NewARRVsQrf,
            yy: item.NewARRYY
        }
        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.product_category,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.product_category,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewalARRQQTY,
            qrf: item.RenewalTarget,
            qrfDiff: item.RenewalVsQrfDiff,
            type: item.product_category,
            units: item.RenewalUnitsActual,
            vsQrf: item.RenewalARRVsQrf,
            yy: item.RenewalARRYY
        }

        newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.product.qtd.push(net);
        newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.product.qtd.push(gross);


    }

}
export function processXDC1FinancialProductWeek(newState, data) {
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewARRCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.NewARRTargetCW,
            qrfDiff: item.NewCWVsQrfDiff,
            type: item.product_category,
            vsQrf: item.NewCWVsQrf,
            ww: item.NewWW

        }
        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.product_category,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.product_category,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }
        let ren = {
            index: i,
            actuals: item.RenewalARRCW,
            units: item.RenewalUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewalARRTargetCW,
            qrfDiff: item.RenewalCWVsQrfDiff,
            type: item.product_category,
            vsQrf: item.RenewalCWVsQrf,
            ww: item.RenewalWW
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.product.week = item1;
    newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.product.week = item2;

}
//XDC2
export function processXDC2FinanceSecondaryData(g1, newState) {
    //Finance
    // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].value = g1.data[0].NewARRActual;
    // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].target = g1.data[0].NewARRTarget;
    // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].targetFQ = g1.data[0].NewARRTargetFQ;
    // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].vsQrf = g1.data[0].NewVsQrf;
    // // //Gross New Arr
    // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].value = g1.data[0].GrossARRActual;
    // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].targetFQ = g1.data[0].GrossARRTargetFQ;
    // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].target = g1.data[0].GrossARRTarget;
    // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].vsQrf = g1.data[0].GrossVsQrf;
    //  //Cacncellations
    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].value = g1.data[0].CancelARRActual;
    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].targetFQ = g1.data[0].CancelARRTargetFQ;
    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].target = g1.data[0].CancelARRTarget;
    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].vsQrf = g1.data[0].CancelVsQrf;
    //   //Renewal
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].value = g1.data[0].RenewActuals;
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].targetFQ = g1.data[0].RenewARRTargetFQ;
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].target = g1.data[0].RenewARRTarget;
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].vsQrf = g1.data[0].RenewVSQRF;
    // console.log('New State AT the end of secondary',newState);
}
export function processXDC2FinancialMultichart(newState, data) {

    let weekFlag = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])

    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);
    let netArr = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    },
        netCancellations = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        grossArr = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        termRenewal = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        };
    //Get Financial Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        netArr.actual.push(item.NewARRActual);
        netArr.target.push(item.NewARRTargetFQ);
        netArr.ly.push(item.NewARRLY);
        netArr.lq.push(item.NewARRLQ);
        netCancellations.actual.push(item.CancelARRActual);
        netCancellations.target.push(item.CancelARRTargetFQ);
        netCancellations.ly.push(item.CancelARRLY);
        netCancellations.lq.push(item.CancelARRLQ);
        grossArr.actual.push(item.GrossARRActual);
        grossArr.target.push(item.GrossARRTargetFQ);
        grossArr.ly.push(item.GrossARRLY);
        grossArr.lq.push(item.GrossARRLQ);
        termRenewal.actual.push(item.RenewARRActual);
        termRenewal.target.push(item.RenewARRTargetFQ);
        termRenewal.ly.push(item.RenewARRLY);
        termRenewal.lq.push(item.RenewARRLQ);
    };

    let canc = [netCancellations.actual, netCancellations.target, netCancellations.ly, netCancellations.lq];
    let ren = [termRenewal.actual, termRenewal.target, termRenewal.ly, termRenewal.lq];
    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR]['details'].multichart = canc;
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR]['details'].multichart = ren;

}
export function processXDC2FinancialUnitsMultichart(newState, data) {
    let weekFlag = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])

    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);
    let netUnits = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    },
        netCancUnits = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        grossUnits = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        termUnits = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        };


    // Units Multi multiChart
    // Get Units
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        netUnits.actual.push(item.NewUnitsActual);
        netUnits.target.push(item.NewUnitsTarget);
        netUnits.ly.push(item.NewUnitsLY);
        netUnits.lq.push(item.NeWUnitsLQ);
        netCancUnits.actual.push(item.CancelUnitsActual);
        netCancUnits.target.push(item.CancelUnitsTarget);
        netCancUnits.ly.push(item.CancelUnitsLY);
        netCancUnits.lq.push(item.CancelUnitsLQ);
        grossUnits.actual.push(item.GrossUnitsActual);
        grossUnits.target.push(item.GrossUnitsTarget);
        grossUnits.ly.push(item.GrossUnitsLY);
        grossUnits.lq.push(item.GrossUnitsLQ);
        termUnits.actual.push(item.RenewUnitsActual);
        termUnits.target.push(item.RenewUnitsTarget);
        termUnits.ly.push(item.RenewUnitsLY);
        termUnits.lq.push(item.RenewUnitsLQ);
    };

    // Set Units
    for (let i = 2; i <= 3; i++) {
        newMulti = []
        switch (i) {
            case 2:
                newMulti = [netCancUnits.actual, netCancUnits.target, netCancUnits.ly, netCancUnits.lq];
                break;
            case 3:
                newMulti = [termUnits.actual, termUnits.target, termUnits.ly, termUnits.lq];
                break;
            default:
                break;
        }
        newState[i]['details'].unitMultichart = newMulti;
    }
}
export function processXDC2FinancialQTD(newState, data) {
    newState = Object.assign([], newState);
    // console.log(data)
    // State Order: Actual, Units, QRF, QRFDiff, VSQrf, QQ, YY
    for (let i = 0; i < newState.length; i++) {
        let findata = data[0];
        switch (i) {
            // New New Arr
            // case 0:
            //     newState[i].details.qtdw.qtd =
            //         [
            //             {
            //                 index: 1,
            //                 header: 'Actuals',
            //                 value: findata.NewActuals
            //             },
            //             {
            //                 index: 2,
            //                 header: 'Units',
            //                 value: findata.NewUnitsActual
            //             },
            //             {
            //                 index: 3,
            //                 header: 'QRF',
            //                 value: findata.NewTarget
            //             },
            //             {
            //                 index: 4,
            //                 header: 'QRF Diff',
            //                 value: findata.NewVsQrfDiff
            //             },
            //             {
            //                 index: 5,
            //                 header: 'Vs Qrf',
            //                 value: findata.NewARRVsQrf
            //             },
            //             {
            //                 index: 6,
            //                 header: 'Q/Q',
            //                 value: findata.NewARRQQTY
            //             },
            //             {
            //                 index: 7,
            //                 header: 'Y/Y',
            //                 value: findata.NewARRYY
            //             }
            //         ]

            //     newState[i].details.qtdw.week[0].value = findata.NewARRCW
            //     newState[i].details.qtdw.week[1].value = findata.NewUnitsCW;
            //     newState[i].details.qtdw.week[2].value = findata.NewARRTargetCW
            //     newState[i].details.qtdw.week[3].value = findata.NewCWVsQrfDiff;
            //     newState[i].details.qtdw.week[4].value = findata.NewCWVsQrf;
            //     newState[i].details.qtdw.week[5].value = findata.NewWW;
            //     newState[i].details.stats[0].value = findata.NewARRVsQrf;
            //     newState[i].details.stats[1].value = findata.NewARRQQLY;
            //     newState[i].details.stats[2].value = findata.NewARRQQTY;
            //     newState[i].details.stats[3].value = findata.NewARRYY;
            //     break;
            // // Gross New Arr
            // case 1:
            //     newState[i].details.qtdw.qtd[0].value = findata.GrossActuals;
            //     newState[i].details.qtdw.qtd[1].value = findata.GrossUnitsActual;
            //     newState[i].details.qtdw.qtd[2].value = findata.GrossTarget;
            //     newState[i].details.qtdw.qtd[3].value = findata.GrossVsQrfDiff;
            //     newState[i].details.qtdw.qtd[4].value = findata.GrossARRVsQrf;
            //     newState[i].details.qtdw.qtd[5].value = findata.GrossARRQQTY;
            //     newState[i].details.qtdw.qtd[6].value = findata.GrossARRYY;
            //     newState[i].details.qtdw.week[0].value = findata.GrossARRCW
            //     newState[i].details.qtdw.week[1].value = findata.GrossUnitsCW;
            //     newState[i].details.qtdw.week[2].value = findata.GrossARRTargetCW
            //     newState[i].details.qtdw.week[3].value = findata.GrossCWVsQrfDiff;
            //     newState[i].details.qtdw.week[4].value = findata.GrossCWVsQrf;
            //     newState[i].details.qtdw.week[5].value = findata.GrossWW;
            //     newState[i].details.stats[0].value = findata.GrossARRVsQrf;
            //     newState[i].details.stats[1].value = findata.GrossARRQQTY;
            //     newState[i].details.stats[2].value = findata.GrossARRQQLY;
            //     newState[i].details.stats[3].value = findata.GrossARRYY;
            //     break;
            // Cancellations Arr
            case 2:
                newState[i].details.qtdw.qtd[0].value = findata.CancelActuals;
                newState[i].details.qtdw.qtd[1].value = findata.CancelUnitsActual;
                newState[i].details.qtdw.qtd[2].value = findata.CancelTarget;
                newState[i].details.qtdw.qtd[3].value = findata.CancelVsQrfDiff;
                newState[i].details.qtdw.qtd[4].value = findata.CancelARRVsQrf;
                newState[i].details.qtdw.qtd[5].value = findata.CancelARRQQTY;
                newState[i].details.qtdw.qtd[6].value = findata.CancelARRYY;
                newState[i].details.qtdw.week[0].value = findata.CancelARRCW;
                newState[i].details.qtdw.week[1].value = findata.CancelUnitsCW;
                newState[i].details.qtdw.week[2].value = findata.CancelARRTargetCW
                newState[i].details.qtdw.week[3].value = findata.CancelCWVsQrfDiff;
                newState[i].details.qtdw.week[4].value = findata.CancelCWVsQrf;
                newState[i].details.qtdw.week[5].value = findata.CancelWW;

                newState[i].details.stats[0].value = findata.CancelARRVsQrf;
                newState[i].details.stats[1].value = findata.CancelARRQQTY;
                newState[i].details.stats[2].value = findata.CancelARRQQLY;
                newState[i].details.stats[3].value = findata.CancelARRYY;


                break;
            // Renewals Arr
            case 3:
                newState[i].details.qtdw.qtd[0].value = findata.RenewalActuals;
                newState[i].details.qtdw.qtd[1].value = findata.RenewalUnitsActual;
                newState[i].details.qtdw.qtd[2].value = findata.RenewalTarget;
                newState[i].details.qtdw.qtd[3].value = findata.RenewalVsQrfDiff;
                newState[i].details.qtdw.qtd[4].value = findata.RenewalARRVsQrf;
                newState[i].details.qtdw.qtd[5].value = findata.RenewalARRQQTY;
                newState[i].details.qtdw.qtd[6].value = findata.RenewalARRYY;
                newState[i].details.qtdw.week[0].value = findata.RenewalARRCW
                newState[i].details.qtdw.week[1].value = findata.RenewalUnitsCW;
                newState[i].details.qtdw.week[2].value = findata.RenewalARRTargetCW
                newState[i].details.qtdw.week[3].value = findata.RenewalCWVsQrfDiff;
                newState[i].details.qtdw.week[4].value = findata.RenewalCWVsQrf;
                newState[i].details.qtdw.week[5].value = findata.RenewalWW;

                newState[i].details.stats[0].value = findata.RenewalARRVsQrf;
                newState[i].details.stats[1].value = findata.RenewalARRQQTY;
                newState[i].details.stats[2].value = findata.RenewalARRQQLY;
                newState[i].details.stats[3].value = findata.RenewalARRYY;
                break;
        }
    }
}
export function processXDC2FinancialGeoQTD(newState, data) {
    // console.log('YO', data);
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewActuals,
            units: item.NewUnitsActual,
            marketArea: item.market_area_group,
            qq: item.NewARRQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.NewARRVsQrf,
            yy: item.NewARRYY
        }
        // console.log(net);
        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_group,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.geo_code,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_group,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.geo_code,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewalActuals,
            marketArea: item.market_area_group,
            qq: item.RenewalARRQQTY,
            qrf: item.RenewalTarget,
            qrfDiff: item.RenewalVsQrfDiff,
            type: item.geo_code,
            units: item.RenewalUnitsActual,
            vsQrf: item.RenewalARRVsQrf,
            yy: item.RenewalARRYY
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }

    // console.log('YO', item1);
    // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.geo.qtd = processQTDOrder(item1);
    // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.geo.qtd = processQTDOrder(item2);
    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.geo.qtd = processQTDOrder(item3);
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.geo.qtd = processQTDOrder(item4);
}
export function processXDC2FinancialGeoWeek(newState, data) {
    // console.log(data);
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewARRCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.NewARRTargetCW,
            qrfDiff: item.NewCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.NewCWVsQrf,
            ww: item.NewWW

        }
        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }
        let ren = {
            index: i,
            actuals: item.RenewalARRCW,
            units: item.RenewalUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.RenewalARRTargetCW,
            qrfDiff: item.RenewalCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.RenewalCWVsQrf,
            ww: item.RenewalWW
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.geo.week = processQTDOrder(item1);
    // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.geo.week = processQTDOrder(item2);
    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.geo.week = processQTDOrder(item3);
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.geo.week = processQTDOrder(item4);
}
export function processXDC2FinancialMarketQTD(newState, data) {

    //Clear old Values

    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.market.qtd = [];
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.market.qtd = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewActuals,
            units: item.NewUnitsActual,
            marketArea: item.market_area_code,
            qq: item.NewARRQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.NewARRVsQrf,
            yy: item.NewARRYY
        }
        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.market_area_code,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.market_area_code,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewalARRQQTY,
            qrf: item.RenewalTarget,
            qrfDiff: item.RenewalVsQrfDiff,
            type: item.market_area_code,
            units: item.RenewalUnitsActual,
            vsQrf: item.RenewalARRVsQrf,
            yy: item.RenewalARRYY
        }

        // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.market.qtd.push(net);
        // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.market.qtd.push(gross);
        newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.market.qtd.push(canc);
        newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.market.qtd.push(ren);

    }

}
export function processXDC2FinancialMarketWeek(newState, data) {
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewARRCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.NewARRTargetCW,
            qrfDiff: item.NewCWVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.NewCWVsQrf,
            ww: item.NewWW

        }
        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }
        let ren = {
            index: i,
            actuals: item.RenewalARRCW,
            units: item.RenewalUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewalARRTargetCW,
            qrfDiff: item.RenewalCWVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.RenewalCWVsQrf,
            ww: item.RenewalWW
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.market.week = item1;
    // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.market.week = item2;
    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.market.week = item3;
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.market.week = item4;
}
export function processXDC2FinancialrouteQTD(newState, data) {

    //Clear old Values

    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.route.qtd = [];
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.route.qtd = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewActuals,
            units: item.NewUnitsActual,
            marketArea: item.market_area_code,
            qq: item.NewARRQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.NewARRVsQrf,
            yy: item.NewARRYY
        }
        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.route_to_market,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.route_to_market,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewalARRQQTY,
            qrf: item.RenewalTarget,
            qrfDiff: item.RenewalVsQrfDiff,
            type: item.route_to_market,
            units: item.RenewalUnitsActual,
            vsQrf: item.RenewalARRVsQrf,
            yy: item.RenewalARRYY
        }

        // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.route.qtd.push(net);
        // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.route.qtd.push(gross);
        newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.route.qtd.push(canc);
        newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.route.qtd.push(ren);

    }

}
export function processXDC2FinancialrouteWeek(newState, data) {
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewARRCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.NewARRTargetCW,
            qrfDiff: item.NewCWVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.NewCWVsQrf,
            ww: item.NewWW

        }
        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }
        let ren = {
            index: i,
            actuals: item.RenewalARRCW,
            units: item.RenewalUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewalARRTargetCW,
            qrfDiff: item.RenewalCWVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.RenewalCWVsQrf,
            ww: item.RenewalWW
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.route.week = item1;
    // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.route.week = item2;
    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.route.week = item3;
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.route.week = item4;
}
export function processXDC2FinancialSegmentQTD(newState, data) {

    //Clear old Values

    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.segment.qtd = [];
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.segment.qtd = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewActuals,
            units: item.NewUnitsActual,
            marketArea: item.market_area_code,
            qq: item.NewARRQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.NewARRVsQrf,
            yy: item.NewARRYY
        }
        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.segment_pivot,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.segment_pivot,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewalARRQQTY,
            qrf: item.RenewalTarget,
            qrfDiff: item.RenewalVsQrfDiff,
            type: item.segment_pivot,
            units: item.RenewalUnitsActual,
            vsQrf: item.RenewalARRVsQrf,
            yy: item.RenewalARRYY
        }

        // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.segment.qtd.push(net);
        // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.segment.qtd.push(gross);
        newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.segment.qtd.push(canc);
        newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.segment.qtd.push(ren);

    }

}
export function processXDC2FinancialSegmentWeek(newState, data) {
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewARRCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.NewARRTargetCW,
            qrfDiff: item.NewCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.NewCWVsQrf,
            ww: item.NewWW

        }
        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }
        let ren = {
            index: i,
            actuals: item.RenewalARRCW,
            units: item.RenewalUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewalARRTargetCW,
            qrfDiff: item.RenewalCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.RenewalCWVsQrf,
            ww: item.RenewalWW
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.segment.week = item1;
    // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.segment.week = item2;
    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.segment.week = item3;
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.segment.week = item4;
}
export function processXDC2FinancialproductQTD(newState, data) {

    //Clear old Values

    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.product.qtd = [];
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.product.qtd = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewActuals,
            units: item.NewUnitsActual,
            marketArea: item.market_area_code,
            qq: item.NewARRQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.product_category,
            vsQrf: item.NewARRVsQrf,
            yy: item.NewARRYY
        }
        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.product_category,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.product_category,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewalARRQQTY,
            qrf: item.RenewalTarget,
            qrfDiff: item.RenewalVsQrfDiff,
            type: item.product_category,
            units: item.RenewalUnitsActual,
            vsQrf: item.RenewalARRVsQrf,
            yy: item.RenewalARRYY
        }

        // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.product.qtd.push(net);
        // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.product.qtd.push(gross);
        newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.product.qtd.push(canc);
        newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.product.qtd.push(ren);

    }

}
export function processXDC2FinancialProductWeek(newState, data) {
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewARRCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.NewARRTargetCW,
            qrfDiff: item.NewCWVsQrfDiff,
            type: item.product_category,
            vsQrf: item.NewCWVsQrf,
            ww: item.NewWW

        }
        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.product_category,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.product_category,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }
        let ren = {
            index: i,
            actuals: item.RenewalARRCW,
            units: item.RenewalUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewalARRTargetCW,
            qrfDiff: item.RenewalCWVsQrfDiff,
            type: item.product_category,
            vsQrf: item.RenewalCWVsQrf,
            ww: item.RenewalWW
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    // newState[SUMMARY_KPIS.FINANCE_NET_NEW_ARR].details.product.week = item1;
    // newState[SUMMARY_KPIS.FINANCE_GROSS_NEW_ARR].details.product.week = item2;
    newState[SUMMARY_KPIS.FINANCE_CANCEL_ARR].details.product.week = item3;
    newState[SUMMARY_KPIS.FINANCE_RENEW_ARR].details.product.week = item4;
}
/**Discover**/
//Traffic
export function processTrafficSecondaryData(g5, newState) {
    // console.log(g5, newState);

    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].value = g5.TrafficActual;
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].target = g5.TrafficTarget;
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].targetFQ = g5.TrafficTargetFQ;
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].vsQrf = g5.TrafficVsQrf;
    //Bounce Rate
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].value = g5.BounceRateActual;
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].target = g5.BounceRateTarget;
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].targetFQ = g5.BounceRateTargetFQ;
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].vsQrf = g5.BounceRateVsQrf;

    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].target = 0;

}
export function processTrafficMultichartData(g5, newState) {
    let weekG5Flag = g5.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])
    let newG5 = _.orderBy(weekG5Flag, ['weekNo'], ['asc']);

    let traffic = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    },
        bounceRate = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        }
    //Get Discover G5 Multichart values
    for (let i = 0; i < g5.length; i++) {
        let item = newG5[i];
        //traffic
        traffic.actual.push(item.TrafficActual);
        traffic.target.push(item.TrafficTarget);
        traffic.ly.push(item.TrafficLY);
        traffic.lq.push(item.TrafficLQ);
        // Bounce
        bounceRate.actual.push(item.BounceRateActual);
        bounceRate.target.push(item.BounceRateTarget);
        bounceRate.ly.push(item.BounceRateLY);
        bounceRate.lq.push(item.BounceRateLQ);

    };
    //Set Multichart Values
    let trafMulti = [traffic.actual, traffic.target, traffic.ly, traffic.lq];
    let bounceMulti = [bounceRate.actual, bounceRate.target, bounceRate.ly, bounceRate.lq];
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC]['details'].multichart = trafMulti;
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE]['details'].multichart = bounceMulti;
}
export function processTrafficQTDData(g5, newState) {
    // console.log(g5, newState);

    for (let i = 5; i < newState.length; i++) {

        switch (i) {
            // Traffic
            case 5:
                newState[i].details.qtdw.qtd[0].value = g5.TrafficActuals;
                newState[i].details.qtdw.qtd[1].value = g5.TrafficTarget;
                newState[i].details.qtdw.qtd[2].value = g5.TrafficVsQrfDiff
                newState[i].details.qtdw.qtd[3].value = g5.TrafficVsQrf;
                newState[i].details.qtdw.qtd[4].value = g5.TrafficQQTY;
                newState[i].details.qtdw.qtd[5].value = g5.TrafficYY;

                newState[i].details.qtdw.week[0].value = g5.TrafficCW;
                newState[i].details.qtdw.week[1].value = g5.TrafficTargetCW;
                newState[i].details.qtdw.week[2].value = g5.TrafficCWVsQrfDiff;
                newState[i].details.qtdw.week[3].value = g5.TrafficCWVsQrf;
                newState[i].details.qtdw.week[4].value = g5.TrafficWW;

                newState[i].details.stats[0].value = g5.TrafficVsQrf;
                newState[i].details.stats[1].value = g5.TrafficQQTY;
                newState[i].details.stats[2].value = g5.TrafficQQLY;
                newState[i].details.stats[3].value = g5.TrafficYY;
                break;
            // Bounce Rate
            case 9:
                newState[i].details.qtdw.qtd[0].value = g5.BounceRateActuals;
                newState[i].details.qtdw.qtd[1].value = g5.BounceRateTarget;
                newState[i].details.qtdw.qtd[2].value = g5.BounceRateVsQrfDiff;
                newState[i].details.qtdw.qtd[3].value = g5.BounceRateVsQrf;
                newState[i].details.qtdw.qtd[4].value = g5.BounceRateQQTY;
                newState[i].details.qtdw.qtd[5].value = g5.BounceRateYY;

                newState[i].details.qtdw.week[0].value = g5.BounceRateCW;
                newState[i].details.qtdw.week[1].value = g5.BounceRateTargetCW;
                newState[i].details.qtdw.week[2].value = g5.BounceRateCWVsQrfDiff;
                newState[i].details.qtdw.week[3].value = g5.BounceRateCWVsQrf;
                newState[i].details.qtdw.week[4].value = g5.BounceRateWW;

                newState[i].details.stats[0].value = g5.BounceRateVsQrf;
                newState[i].details.stats[1].value = g5.BounceRateQQLY;
                newState[i].details.stats[2].value = g5.BounceRateQQLY;
                newState[i].details.stats[3].value = g5.BounceRateYY;
                break;
        }
    }
}
export function processTrafficGeoQTDData(g5, newState) {
    // console.log(g5)
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.geo.qtd = [];
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.geo.qtd = [];
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.geo.week = [];
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.geo.week = [];

    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActuals,
            marketArea: item.market_area_group,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficActuals - item.TrafficTarget,
            type: item.geo_code,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        let trafficPM =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.TrafficCW,
            qrf: item.TrafficTargetCW,
            qrfDiff: item.TrafficCWVsQrfDiff,
            vsQrf: item.TrafficCWVsQrf,
            ww: item.TrafficWW,
            type: item.geo_code,
        }
        let bounce = {
            index: i,
            actuals: item.BounceRateActuals,
            marketArea: item.market_area_group,
            qq: item.BounceRateQQTY,
            qrf: item.BounceRateTarget,
            qrfDiff: item.BounceRateVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.BounceRatevsQrf,
            yy: item.BounceRateYY
        }
        let bouncePM =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.BounceRateCW,
            qrf: item.BounceRateTargetCW,
            qrfDiff: item.BounceRateCWVsQrfDiff,
            vsQrf: item.BounceRateCWVsQrf,
            ww: item.BounceRateWW,
            type: item.geo_code,
        }
        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.geo.qtd.push(traffic);
        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.geo.qtd.push(bounce);
        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.geo.week.push(trafficPM);
        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.geo.week.push(bouncePM);
    }
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.geo.qtd)
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.geo.qtd)
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.geo.week)
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.geo.week)
}
export function processTrafficMarketQTDData(g5, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.market.qtd = [];
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.market.qtd = [];
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.market.week = [];
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.market.week = [];


    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActuals,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficActuals - item.TrafficTarget,
            type: item.market_area_code,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        let trafficPM =
        {
            index: i,
            actuals: item.TrafficCW,
            qrf: item.TrafficTargetCW,
            qrfDiff: item.TrafficCWVsQrfDiff,
            vsQrf: item.TrafficCWVsQrf,
            ww: item.TrafficWW,
            type: item.market_area_code,
        }
        let bounce = {
            index: i,
            actuals: item.BounceRateActuals,
            qq: item.BounceRateQQTY,
            qrf: item.BounceRateTarget,
            qrfDiff: item.BounceRateVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.BounceRateVsQrf,
            yy: item.BounceRateYY
        }
        let bouncePM =
        {
            index: i,
            actuals: item.BounceRateCW,
            qrf: item.BounceRateTargetCW,
            qrfDiff: item.BounceRateCWVsQrfDiff,
            vsQrf: item.BounceRateCWVsQrf,
            ww: item.BounceRateWW,
            type: item.market_area_code,
        }
        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.market.qtd.push(traffic);
        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.market.qtd.push(bounce);
        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.market.week.push(trafficPM);
        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.market.week.push(bouncePM);
    }

}
export function processTrafficWebSegmentQTDData(g5, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.segment.qtd = [];

    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.segment.qtd = [];
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.segment.week = [];

    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.segment.week = [];

    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActuals,
            marketArea: item.market_area_group,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficActuals - item.TrafficTarget,
            type: item.web_segment,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        let trafficPM =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.TrafficCW,
            qrf: item.TrafficTargetCW,
            qrfDiff: item.TrafficCWVsQrfDiff,
            vsQrf: item.TrafficCWVsQrf,
            ww: item.TrafficWW,
            type: item.web_segment,
        }
        let bounce = {
            index: i,
            actuals: item.BounceRateActuals,
            marketArea: item.market_area_group,
            qq: item.BounceRateQQTY,
            qrf: item.BounceRateTarget,
            qrfDiff: item.BounceRateVsQrfDiff,
            type: item.web_segment,
            vsQrf: item.BounceRateVsQrf,
            yy: item.BounceRateYY
        }
        let bouncePM =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.BounceRateCW,
            qrf: item.BounceRateTargetCW,
            qrfDiff: item.BounceRateCWVsQrfDiff,
            vsQrf: item.BounceRateCWVsQrf,
            ww: item.BounceRateWW,
            type: item.web_segment,
        }
        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.segment.qtd.push(traffic);
        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.segment.qtd.push(bounce);
        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.segment.week.push(trafficPM);
        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.segment.week.push(bouncePM);
    }
}
export function processTrafficLTCQTDData(g5, newState) {

    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details = { ...newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details, ltc: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details = { ...newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details, ltc: { qtd: [], week: [] } };

    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let traffic = {
            index: i,
            marketArea: item.last_touch_channel,
            actuals: item.TrafficActuals,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficActuals - item.TrafficTarget,
            type: item.visit_type,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        let trafficPM =
        {
            index: i,
            marketArea: item.last_touch_channel,
            actuals: item.TrafficCW,
            qrf: item.TrafficTargetCW,
            qrfDiff: item.TrafficCWVsQrfDiff,
            vsQrf: item.TrafficCWVsQrf,
            ww: item.TrafficWW,
            type: item.visit_type,
        }
        let bounce = {
            index: i,
            marketArea: item.last_touch_channel,
            actuals: item.BounceRateActuals,
            qq: item.BounceRateQQTY,
            qrf: item.BounceRateTarget,
            qrfDiff: item.BounceRateVsQrfDiff,
            type: item.visit_type,
            vsQrf: item.BounceRateVsQrf,
            yy: item.BounceRateYY
        }
        let bouncePM =
        {
            index: i,
            marketArea: item.last_touch_channel,
            actuals: item.BounceRateCW,
            qrf: item.BounceRateTargetCW,
            qrfDiff: item.BounceRateCWVsQrfDiff,
            vsQrf: item.BounceRateCWVsQrf,
            ww: item.BounceRateWW,
            type: item.visit_type,

        }
        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.ltc.qtd.push(traffic);
        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.ltc.qtd.push(bounce);
        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.ltc.week.push(trafficPM);
        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.ltc.week.push(bouncePM);
    }
}
export function processTrafficConvQTDData(g5, newState) {
    // console.log(g5);
    // console.log(newState);
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.conversion.qtd = [];
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.conversion.qtd = [];
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.conversion.week = [];
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.conversion.week = [];

    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActuals,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficActuals - item.TrafficTarget,
            type: item.conversion_type,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        let trafficPM =
        {
            index: i,
            actuals: item.TrafficCW,
            qrf: item.TrafficTargetCW,
            qrfDiff: item.TrafficCWVsQrfDiff,
            vsQrf: item.TrafficCWVsQrf,
            ww: item.TrafficWW,
            type: item.conversion_type,
        }

        let bounce = {
            index: i,
            actuals: item.BounceRateActuals,
            qq: item.BounceRateQQTY,
            qrf: item.BounceRateTarget,
            qrfDiff: item.BounceRateVsQrfDiff,
            type: item.conversion_type,
            vsQrf: item.BounceRateVsQrf,
            yy: item.BounceRateYY
        }
        let bouncePM =
        {
            index: i,
            actuals: item.BounceRateCW,
            qrf: item.BounceRateTargetCW,
            qrfDiff: item.BounceRateCWVsQrfDiff,
            vsQrf: item.BounceRateCWVsQrf,
            ww: item.BounceRateWW,
            type: item.conversion_type,
        }
        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.conversion.qtd.push(traffic);
        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.conversion.qtd.push(bounce);
        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.conversion.week.push(trafficPM);
        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.conversion.week.push(bouncePM);
    }
}

export function processTrafficCustomerQTDData(g5, newState) {
    // console.log(g5);
    // console.log(newState);
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.customer.qtd = [];
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.customer.qtd = [];
    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.customer.week = [];
    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.customer.week = [];

    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActuals,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficActuals - item.TrafficTarget,
            type: item.customer_type,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        let trafficPM =
        {
            index: i,
            actuals: item.TrafficCW,
            qrf: item.TrafficTargetCW,
            qrfDiff: item.TrafficCWVsQrfDiff,
            vsQrf: item.TrafficCWVsQrf,
            ww: item.TrafficWW,
            type: item.customer_type,
        }

        let bounce = {
            index: i,
            actuals: item.BounceRateActuals,
            qq: item.BounceRateQQTY,
            qrf: item.BounceRateTarget,
            qrfDiff: item.BounceRateVsQrfDiff,
            type: item.customer_type,
            vsQrf: item.BounceRateVsQrf,
            yy: item.BounceRateYY
        }
        let bouncePM =
        {
            index: i,
            actuals: item.BounceRateCW,
            qrf: item.BounceRateTargetCW,
            qrfDiff: item.BounceRateCWVsQrfDiff,
            vsQrf: item.BounceRateCWVsQrf,
            ww: item.BounceRateWW,
            type: item.customer_type,
        }
        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.customer.qtd.push(traffic);
        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.customer.qtd.push(bounce);
        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.customer.week.push(trafficPM);
        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.customer.week.push(bouncePM);
    }
}
export function processTrafficMobDeskQTDData(g5, newState) {

    //Clear old Values

    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details = { ...newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details, mvd: { qtd: [], week: [] } };

    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details = { ...newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details, mvd: { qtd: [], week: [] } };



    for (let i = 0; i < g5.length; i++) {

        let item = g5[i];

        let traffic = {

            index: i,

            actuals: item.TrafficActuals,

            qq: item.TrafficQQTY,

            qrf: item.TrafficTarget,

            qrfDiff: item.TrafficActuals - item.TrafficTarget,

            type: item.mobile_or_desktop,

            vsQrf: item.TrafficVsQrf,

            yy: item.TrafficYY

        }

        let trafficPM =
        {
            index: i,

            actuals: item.TrafficCW,

            qrf: item.TrafficTargetCW,

            qrfDiff: item.TrafficCWVsQrfDiff,

            vsQrf: item.TrafficVsQrfCW,

            ww: item.TrafficWW,

            type: item.mobile_or_desktop,



        }

        let bounce = {
            index: i,
            actuals: item.BounceRateActuals,
            qq: item.BounceRateQQTY,
            qrf: item.BounceRateTarget,
            qrfDiff: item.BounceRateVsQrfDiff,
            type: item.mobile_or_desktop,
            vsQrf: item.BounceRateVsQrf,
            yy: item.BounceRateYY
        }

        let bouncePM =
        {
            index: i,
            actuals: item.BounceRateCW,
            qrf: item.BounceRateTargetCW,
            qrfDiff: item.BounceRateCWVsQrfDiff,
            vsQrf: item.BounceRateCWVsQrf,
            ww: item.BounceRateWW,
            type: item.mobile_or_desktop,
        }

        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.mvd.qtd.push(traffic);

        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.mvd.qtd.push(bounce);

        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.mvd.week.push(trafficPM);

        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.mvd.week.push(bouncePM);

    }

}
export function processTrafficNewRepQTDData(g5, newState) {

    //Clear old Values

    newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details = { ...newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details, nvr: { qtd: [], week: [] } };

    newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details = { ...newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details, nvr: { qtd: [], week: [] } };



    for (let i = 0; i < g5.length; i++) {

        let item = g5[i];

        let traffic = {

            index: i,

            actuals: item.TrafficActuals,

            marketArea: item.market_area_group,

            qq: item.TrafficQQTY,

            qrf: item.TrafficTarget,

            qrfDiff: item.TrafficActuals - item.TarfficTarget,

            type: item.new_or_repeat,

            vsQrf: item.TrafficVsQrf,

            yy: item.TrafficYY

        }

        let trafficPM =

        {

            index: i,

            marketArea: item.market_area_group,

            actuals: item.TrafficCW,

            qrf: item.TrafficTargetCW,

            qrfDiff: item.TrafficCWVsQrfDiff,

            vsQrf: item.TrafficCWVsQrf,

            ww: item.TrafficWW,

            type: item.new_or_repeat,

        }

        let bounce = {

            index: i,

            actuals: item.BounceRateActuals,

            marketArea: item.market_area_group,

            qq: item.BounceRateQQTY,

            qrf: item.BounceRateTarget,

            qrfDiff: item.BounceRateVsQrfDiff,

            type: item.new_or_repeat,

            vsQrf: item.BounceRateVsQrf,

            yy: item.BounceRateYY

        }

        let bouncePM =

        {

            index: i,

            marketArea: item.market_area_group,

            actuals: item.BounceRateCW,

            qrf: item.BounceRateTargetCW,

            qrfDiff: item.BounceRateCWVsQrfDiff,

            vsQrf: item.BounceRateCWVsQrf,

            ww: item.BounceRateWW,

            type: item.new_or_repeat,

        }

        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.nvr.qtd.push(traffic);

        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.nvr.qtd.push(bounce);

        newState[SUMMARY_KPIS.DISCOVER_TRAFFIC].details.nvr.week.push(trafficPM);

        newState[SUMMARY_KPIS.DISCOVER_BOUNCE_RATE].details.nvr.week.push(bouncePM);

    }

}
//End Traffic

// UQFM
export function processUQFMSecondaryData(data, newState) {
    newState[SUMMARY_KPIS.DISCOVER_UQFM].value = data.UQFMConvActual;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].target = data.UQFMConvTarget;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].targetFQ = data.UQFMConvTargetFQ;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].vsQrf = data.UQFMConvVsQrf;
}
export function processUQFMMultichartData(data, newState) {


    let weekFlag = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])


    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);

    let uqfm = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }

    //Get Discover uqfm Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        //uqfm
        uqfm.actual.push(item.UQFMConvActual);
        uqfm.target.push(item.UQFMConvTarget);
        uqfm.ly.push(item.UQFMConvLY);
        uqfm.lq.push(item.UQFMConvLQ);
    };
    currentMulti = [uqfm.actual, uqfm.target, uqfm.ly, uqfm.lq];
    newState[SUMMARY_KPIS.DISCOVER_UQFM]['details'].multichart = currentMulti;


}
export function processUQFMQTDData(data, newState) {


    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.qtdw.qtd[0].value = data.UQFMConvActuals;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.qtdw.qtd[1].value = data.UQFMConvTarget;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.qtdw.qtd[2].value = data.UQFMConvVsQrfDiff
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.qtdw.qtd[3].value = data.UQFMConvvsQrf;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.qtdw.qtd[4].value = data.UQFMConvQQTY;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.qtdw.qtd[5].value = data.UQFMConvYY;

    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.qtdw.week[0].value = data.UQFMConvCW;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.qtdw.week[1].value = data.UQFMConvTargetCW;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.qtdw.week[2].value = data.UQFMConvCWVsQrfDiff;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.qtdw.week[3].value = data.UQFMConvCWVsQrf;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.qtdw.week[4].value = data.UQFMConvWW;

    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.stats[0].value = data.UQFMConvvsQrf;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.stats[1].value = data.UQFMConvQQTY;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.stats[2].value = data.UQFMConvQQLY;
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.stats[3].value = data.UQFMConvYY;

}
export function processUQFMGeoQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.geo.qtd = [];
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.geo.week = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let uqfm = {
            index: i,
            actuals: item.UQFMConvActuals,
            marketArea: item.market_area_group,
            qq: item.UQFMConvQQTY,
            qrf: item.UQFMConvTarget,
            qrfDiff: item.UQFMConvVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.UQFMConvvsQrf,
            yy: item.UQFMConvYY
        }
        let uqfmWeek =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.UQFMConvCW,
            qrf: item.UQFMConvTargetCW,
            qrfDiff: item.UQFMConvCWVsQrfDiff,
            vsQrf: item.UQFMConvCWVsQrf,
            ww: item.UQFMConvWW,
            type: item.geo_code,
        }

        newState[SUMMARY_KPIS.DISCOVER_UQFM].details.geo.qtd.push(uqfm);
        newState[SUMMARY_KPIS.DISCOVER_UQFM].details.geo.week.push(uqfmWeek);
    }

    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_UQFM].details.geo.qtd);
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_UQFM].details.geo.week);
}
export function processUQFMMarketQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.market.qtd = [];
    newState[SUMMARY_KPIS.DISCOVER_UQFM].details.market.week = [];


    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let uqfm = {
            index: i,
            type: item.market_area_code,
            actuals: item.UQFMConvActuals,
            qq: item.UQFMConvQQTY,
            qrf: item.UQFMConvTarget,
            qrfDiff: item.UQFMConvVsQrfDiff,
            vsQrf: item.UQFMConvvsQrf,
            yy: item.UQFMConvYY
        }
        let uqfmWeek =
        {
            index: i,
            type: item.market_area_code,
            actuals: item.UQFMConvCW,
            qrf: item.UQFMConvTargetCW,
            qrfDiff: item.UQFMConvCWVsQrfDiff,
            vsQrf: item.UQFMConvCWVsQrf,
            ww: item.UQFMConvWW,
        }
        newState[SUMMARY_KPIS.DISCOVER_UQFM].details.market.qtd.push(uqfm);
        newState[SUMMARY_KPIS.DISCOVER_UQFM].details.market.week.push(uqfmWeek);
    }
}
//End UQFM

// Marketable  Universe
export function processMUSecondaryData(data, newState) {

    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].value = data.NetChangeMUActual;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].target = data.NetChangeMUTarget;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].targetFQ = data.NetChangeMUTargetFQ;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].vsQrf = data.NetChangeMUVsQrf;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.value = data.CumuMUActual;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.target = data.CumuMUTarget;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.targetFQ = data.CumuMUTargetFQ;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.vsQrf = data.CumuMUVsQrf;
}
export function processMUMultichartData(data, newState) {
    let weekFlag = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);

    let netMu = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    },
        cumuMu = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        }
    //Get Discover Mu Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        //traffic
        netMu.actual.push(item.NetChangeMUActual);
        netMu.target.push(item.NetChangeMUTarget);
        netMu.ly.push(item.NetChangeMULY);
        netMu.lq.push(item.NetChangeMULQ);
        // Bounce
        cumuMu.actual.push(item.CumuMUActual);
        cumuMu.target.push(item.CumuMUTarget);
        cumuMu.ly.push(item.CumuMULY);
        cumuMu.lq.push(item.CumuMULQ);

    };
    let currentMuMulti = [netMu.actual, netMu.target, netMu.ly, netMu.lq];
    let currentCumuMulti = [cumuMu.actual, cumuMu.target, cumuMu.ly, cumuMu.lq];
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE]['details'].multichart = currentMuMulti;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.multichart = currentCumuMulti;

}
export function processMUQTDData(data, newState) {
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.qtdw.qtd[0].value = data.NetChangeMUActuals;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.qtdw.qtd[1].value = data.NetChangeMUTarget;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.qtdw.qtd[2].value = data.NetChangeMUVsQrfDiff
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.qtdw.qtd[3].value = data.NetChangeMUVsQrf;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.qtdw.qtd[4].value = data.NetChangeMUQQTY;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.qtdw.qtd[5].value = data.NetChangeMUYY;

    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.qtdw.week[0].value = data.NetChangeMUCW;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.qtdw.week[1].value = data.NetChangeMUTargetCW;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.qtdw.week[2].value = data.NetChangeMUCWVsQrfDiff;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.qtdw.week[3].value = data.NetChangeMUCWVsQrf;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.qtdw.week[4].value = data.NetChangeMUWW;

    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.stats[0].value = data.NetChangeMUVsQrf;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.stats[1].value = data.NetChangeMUQQTY;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.stats[2].value = data.NetChangeMUQQLY;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.stats[3].value = data.NetChangeMUYY;

    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.qtdw.qtd[0].value = data.CumuMUActuals;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.qtdw.qtd[1].value = data.CumuMUTarget;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.qtdw.qtd[2].value = data.CumuMUVsQrfDiff;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.qtdw.qtd[3].value = data.CumuMUVsQrf;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.qtdw.qtd[4].value = data.CumuMUQQTY;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.qtdw.qtd[5].value = data.CumuMUYY;

    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.qtdw.week[0].value = data.CumuMUCW;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.qtdw.week[1].value = data.CumuMUTargetCW;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.qtdw.week[2].value = data.CumuMUCWVsQrfDiff;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.qtdw.week[3].value = data.CumuMUCWVsQrf;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.qtdw.week[4].value = data.CumuMUWW;

    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.stats[0].value = data.CumuMUVsQrf;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.stats[1].value = data.CumuMUQQTY;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.stats[2].value = data.CumuMUQQLY;
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.stats[3].value = data.CumuMUYY;

}
export function processMUGeoQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details = { ...newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details, geo: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details = { ...newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details, geo: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let netMu = {
            index: i,
            actuals: item.NetChangeMUActuals,
            marketArea: item.market_area_group,
            qq: item.NetChangeMUQQTY,
            qrf: item.NetChangeMUTarget,
            qrfDiff: item.NetChangeMUVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.NetChangeMUVsQrf,
            yy: item.NetChangeMUYY
        }

        let cumuMu =
        {
            index: i,
            actuals: item.CumuMUActuals,
            marketArea: item.market_area_group,
            qq: item.CumuMUQQTY,
            qrf: item.CumuMUTarget,
            qrfDiff: item.CumuMUVsQrfDif,
            type: item.geo_code,
            vsQrf: item.CumuMUVsQrf,
            yy: item.CumuMUYY
        }

        let netWeek = {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.NetChangeMUCW,
            qrf: item.NetChangeMUTargetCW,
            qrfDiff: item.NetChangeMUCWVsQrfDiff,
            vsQrf: item.NetChangeMUCWVsQrf,
            ww: item.NetChangeMUWW,
            type: item.geo_code,
        }

        let cumuWeek =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.CumuMUCW,
            qrf: item.CumuMUTargetCW,
            qrfDiff: item.CumuMUCWVsQrfDiff,
            vsQrf: item.CumuMUCWVsQrf,
            ww: item.CumuMUWW,
            type: item.geo_code,
        }
        newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.geo.qtd.push(netMu);
        newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.geo.qtd.push(cumuMu);
        newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.geo.week.push(cumuWeek);
        newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.geo.week.push(netWeek);
    }

    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.geo.qtd);
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.geo.qtd);
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.geo.week);
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.geo.week);
}
export function processMUMarketQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details = { ...newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details, market: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details = { ...newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details, market: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let netMu = {
            index: i,
            actuals: item.NetChangeMUActuals,
            type: item.market_area_code,
            qq: item.NetChangeMUQQTY,
            qrf: item.NetChangeMUTarget,
            qrfDiff: item.NetChangeMUVsQrfDiff,
            vsQrf: item.NetChangeMUVsQrf,
            yy: item.NetChangeMUYY
        }
        let cumuMu =
        {
            index: i,
            actuals: item.CumuMUActuals,
            marketArea: item.market_area_code,
            qq: item.CumuMUQQTY,
            qrf: item.CumuMUTarget,
            qrfDiff: item.CumuMUVsQrfDif,
            type: item.geo_code,
            vsQrf: item.CumuMUVsQrf,
            yy: item.CumuMUYY
        }

        let netWeek = {
            index: i,
            type: item.market_area_code,
            actuals: item.NetChangeMUCW,
            qrf: item.NetChangeMUTargetCW,
            qrfDiff: item.NetChangeMUCWVsQrfDiff,
            vsQrf: item.NetChangeMUCWVsQrf,
            ww: item.NetChangeMUWW,
        }

        let cumuWeek =
        {
            index: i,
            type: item.market_area_code,
            actuals: item.CumuMUCW,
            qrf: item.CumuMUTargetCW,
            qrfDiff: item.CumuMUCWVsQrfDiff,
            vsQrf: item.CumuMUCWVsQrf,
            ww: item.CumuMUWW,
        }
        newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.market.qtd.push(netMu);
        newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.market.qtd.push(cumuMu);
        newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.market.week.push(cumuWeek);
        newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.market.week.push(netWeek);
    }
}
export function processMUChannelQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details = { ...newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details, channel: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details = { ...newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details, channel: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let netMu = {
            index: i,
            actuals: item.NetChangeMUActuals,
            type: item.channel,
            qq: item.NetChangeMUQQTY,
            qrf: item.NetChangeMUTarget,
            qrfDiff: item.NetChangeMUVsQrfDiff,
            vsQrf: item.NetChangeMUVsQrf,
            yy: item.NetChangeMUYY
        }
        let cumuMu =
        {
            index: i,
            actuals: item.CumuMUActuals,
            marketArea: item.market_area_group,
            qq: item.CumuMUQQTY,
            qrf: item.CumuMUTarget,
            qrfDiff: item.CumuMUVsQrfDif,
            type: item.geo_code,
            vsQrf: item.CumuMUVsQrf,
            yy: item.CumuMUYY
        }

        let netWeek = {
            index: i,
            type: item.channel,
            actuals: item.NetChangeMUCW,
            qrf: item.NetChangeMUTargetCW,
            qrfDiff: item.NetChangeMUCWVsQrfDiff,
            vsQrf: item.NetChangeMUCWVsQrf,
            ww: item.NetChangeMUWW,
        }

        let cumuWeek =
        {
            index: i,
            type: item.channel,
            actuals: item.CumuMUCW,
            qrf: item.CumuMUTargetCW,
            qrfDiff: item.CumuMUCWVsQrfDiff,
            vsQrf: item.CumuMUCWVsQrf,
            ww: item.CumuMUWW,
        }
        newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.channel.qtd.push(netMu);
        newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.channel.qtd.push(cumuMu);
        newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].cumulative.details.channel.week.push(cumuWeek);
        newState[SUMMARY_KPIS.DISCOVER_MARKETABLE_UNIVERSE].details.channel.week.push(netWeek);
    }
}
//End Marketable Universe 

//  Paid Media spend and sourced
export function processPMSSSecondaryData(data, newState) {

    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].value = data.PMSpendDiscoverActual;
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].target = data.PMSpendDiscoverTarget;
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].targetFQ = data.PMSpendDiscoverTargetFQ;
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].vsQrf = data.PMSpendDiscoverVsQrf;
    //Bounce Rate
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].value = data.PMUQFMActual;
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].target = data.PMUQFMTarget;
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].targetFQ = data.PMUQFMTargetFQ;
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].vsQrf = data.PMUQFMVsQrf;
}
export function processPMSSMultichartData(data, newState) {

    let weekData = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])


    let newData = _.orderBy(weekData, ['weekNo'], ['asc']);

    let pm = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    },

        pmuqfm = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        }


    //Get Discover G5 Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        //traffic
        pm.actual.push(item.PMSpendDiscoverActual);
        pm.target.push(item.PMSpendDiscoverTarget);
        pm.ly.push(item.PMSpendDiscoverLY);
        pm.lq.push(item.PMSpendDiscoverLQ);
        // Bounce
        pmuqfm.actual.push(item.PMUQFMActual);
        pmuqfm.target.push(item.PMUQFMTarget);
        pmuqfm.ly.push(item.PMUQFMLY);
        pmuqfm.lq.push(item.PMUQFMLQ);
    };
    //Set Multichart Values
    for (let i = 7; i <= 8; i++) {
        switch (i) {
            case 7:
                currentMulti = [pm.actual, pm.target, pm.ly, pm.lq];
                break;
            case 8:
                currentMulti = [pmuqfm.actual, pmuqfm.target, pmuqfm.ly, pmuqfm.lq];
                break;
            default:
                break;
        }
        newState[i]['details'].multichart = currentMulti;
    }

}
export function processPMSSQTDData(data, newState) {

    for (let i = 7; i <= 8; i++) {

        switch (i) {
            // Pm Spend
            case 7:
                newState[i].details.qtdw.qtd[0].value = data.PMSpendDiscoverActuals;
                newState[i].details.qtdw.qtd[1].value = data.PMSpendDiscoverTarget;
                newState[i].details.qtdw.qtd[2].value = data.PMSpendDiscoverVsQrfDiff
                newState[i].details.qtdw.qtd[3].value = data.PMSpendDiscoverVsQrf;
                newState[i].details.qtdw.qtd[4].value = data.PMSpendDiscoverQQTY;
                newState[i].details.qtdw.qtd[5].value = data.PMSpendDiscoverYY;

                newState[i].details.qtdw.week[0].value = data.PMSpendDiscoverCW;
                newState[i].details.qtdw.week[1].value = data.PMSpendDiscoverTargetCW;
                newState[i].details.qtdw.week[2].value = data.PMSpendDiscoverCWVsQrfDiff;
                newState[i].details.qtdw.week[3].value = data.PMSpendDiscoverCWVsQrf;
                newState[i].details.qtdw.week[4].value = data.PMSpendDiscoverWW;

                newState[i].details.stats[0].value = data.PMSpendDiscoverVsQrf;
                newState[i].details.stats[1].value = data.PMSpendDiscoverQQTY;
                newState[i].details.stats[2].value = data.PMSpendDiscoverQQLY;
                newState[i].details.stats[3].value = data.PMSpendDiscoverYY;
                break;
            // PM Sourced UQFM
            case 8:
                newState[i].details.qtdw.qtd[0].value = data.PMUQFMActuals;
                newState[i].details.qtdw.qtd[1].value = data.PMUQFMTarget;
                newState[i].details.qtdw.qtd[2].value = data.PMUQFMVsQrfDiff;
                newState[i].details.qtdw.qtd[3].value = data.PMUQFMVsQrf;
                newState[i].details.qtdw.qtd[4].value = data.PMUQFMQQTY;
                newState[i].details.qtdw.qtd[5].value = data.PMUQFMYY;

                newState[i].details.qtdw.week[0].value = data.PMUQFMCW;
                newState[i].details.qtdw.week[1].value = data.PMUQFMTargetCW;
                newState[i].details.qtdw.week[2].value = data.PMUQFMCWVsQrfDiff;
                newState[i].details.qtdw.week[3].value = data.PMUQFMCWVsQrf;
                newState[i].details.qtdw.week[4].value = data.PMUQFMWW;

                newState[i].details.stats[0].value = data.PMUQFMVsQrf;
                newState[i].details.stats[1].value = data.PMUQFMQQTY;
                newState[i].details.stats[2].value = data.PMUQFMQQLY;
                newState[i].details.stats[3].value = data.PMUQFMYY;
                break;
        }
    }
}
export function processPMSSGeoQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details = { ...newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details, geo: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details = { ...newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details, geo: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let pm = {
            index: i,
            actuals: item.PMSpendDiscoverActuals,
            marketArea: item.market_area_group,
            qq: item.PMSpendDiscoverQQTY,
            qrf: item.PMSpendDiscoverTarget,
            qrfDiff: item.PMSpendDiscoverVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.PMSpendDiscoverVsQrf,
            yy: item.PMSpendDiscoverYY
        }
        let pmWeek =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.PMSpendDiscoverCW,
            qrf: item.PMSpendDiscoverTargetCW,
            qrfDiff: item.PMSpendDiscoverCWVsQrfDiff,
            vsQrf: item.PMSpendDiscoverCWVsQrf,
            ww: item.PMSpendDiscoverWW,
            type: item.geo_code,
        }

        let pmuqfm = {
            index: i,
            actuals: item.PMUQFMActuals,
            marketArea: item.market_area_group,
            qq: item.PMUQFMQQTY,
            qrf: item.PMUQFMTarget,
            qrfDiff: item.PMUQFMVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.PMUQFMVsQrf,
            yy: item.PMUQFMYY
        }
        let pmuqfmWeek =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.PMUQFMCW,
            qrf: item.PMUQFMTargetCW,
            qrfDiff: item.PMUQFMCWVsQrfDiff,
            vsQrf: item.PMUQFMCWVsQrf,
            ww: item.PMUQFMWW,
            type: item.geo_code,
        }
        newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details.geo.qtd.push(pm);
        newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details.geo.qtd.push(pmuqfm);
        newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details.geo.week.push(pmWeek);
        newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details.geo.week.push(pmuqfmWeek);
    }

    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details.geo.qtd);
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details.geo.qtd);
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details.geo.week);
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details.geo.week);
}
export function processPMSSMarketQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details = { ...newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details, market: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details = { ...newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details, market: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let pm = {
            index: i,
            actuals: item.PMSpendDiscoverActuals,
            qq: item.PMSpendDiscoverQQTY,
            qrf: item.PMSpendDiscoverTarget,
            qrfDiff: item.PMSpendDiscoverVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.PMSpendDiscoverVsQrf,
            yy: item.PMSpendDiscoverYY
        }
        let pmWeek =
        {
            index: i,
            type: item.market_area_code,
            marketArea: item.market_area_code,
            actuals: item.PMSpendDiscoverCW,
            qrf: item.PMSpendDiscoverTargetCW,
            qrfDiff: item.PMSpendDiscoverCWVsQrfDiff,
            vsQrf: item.PMSpendDiscoverCWVsQrf,
            ww: item.PMSpendDiscoverWW,
        }

        let pmuqfm = {
            index: i,
            type: item.market_area_code,
            actuals: item.PMUQFMActuals,
            qq: item.PMUQFMQQTY,
            qrf: item.PMUQFMTarget,
            qrfDiff: item.PMUQFMVsQrfDiff,
            vsQrf: item.PMUQFMVsQrf,
            yy: item.PMUQFMYY
        }
        let pmuqfmWeek =
        {
            index: i,
            type: item.market_area_code,
            actuals: item.PMUQFMCW,
            qrf: item.PMUQFMTargetCW,
            qrfDiff: item.PMUQFMCWVsQrfDiff,
            vsQrf: item.PMUQFMCWVsQrf,
            ww: item.PMUQFMWW,
        }
        newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details.market.qtd.push(pm);
        newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details.market.qtd.push(pmuqfm);
        newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details.market.week.push(pmWeek);
        newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details.market.week.push(pmuqfmWeek);
    }
}

export function processPMSSChannelQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details = { ...newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details, channel: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details = { ...newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details, channel: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let pm = {
            index: i,
            actuals: item.PMSpendDiscoverActuals,
            qq: item.PMSpendDiscoverQQTY,
            qrf: item.PMSpendDiscoverTarget,
            qrfDiff: item.PMSpendDiscoverVsQrfDiff,
            type: item.PM_channel,
            vsQrf: item.PMSpendDiscoverVsQrf,
            yy: item.PMSpendDiscoverYY
        }
        let pmWeek =
        {
            index: i,
            type: item.PM_channel,
            actuals: item.PMSpendDiscoverCW,
            qrf: item.PMSpendDiscoverTargetCW,
            qrfDiff: item.PMSpendDiscoverCWVsQrfDiff,
            vsQrf: item.PMSpendDiscoverCWVsQrf,
            ww: item.PMSpendDiscoverWW,
        }

        let pmuqfm = {
            index: i,
            type: item.PM_channel,
            actuals: item.PMUQFMActuals,
            qq: item.PMUQFMQQTY,
            qrf: item.PMUQFMTarget,
            qrfDiff: item.PMUQFMVsQrfDiff,
            vsQrf: item.PMUQFMVsQrf,
            yy: item.PMUQFMYY
        }
        let pmuqfmWeek =
        {
            index: i,
            type: item.PM_channel,
            actuals: item.PMUQFMCW,
            qrf: item.PMUQFMTargetCW,
            qrfDiff: item.PMUQFMCWVsQrfDiff,
            vsQrf: item.PMUQFMCWVsQrf,
            ww: item.PMUQFMWW,
        }
        newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details.channel.qtd.push(pm);
        newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details.channel.qtd.push(pmuqfm);
        newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SPEND].details.channel.week.push(pmWeek);
        newState[SUMMARY_KPIS.DISCOVER_PAID_MEDIA_SOURCED].details.channel.week.push(pmuqfmWeek);
    }
}
//End  Paid Media spend and sourced

/**Try**/
export function processTrySecondaryData(data, newState) {


    //   New UQFMS
    newState[SUMMARY_KPIS.TRY_NEW_UQFM].value = data.NewUQFMSActual;
    newState[SUMMARY_KPIS.TRY_NEW_UQFM].targetFQ = data.NewUQFMSTargetFQ;
    newState[SUMMARY_KPIS.TRY_NEW_UQFM].target = data.NewUQFMsTarget;
    newState[SUMMARY_KPIS.TRY_NEW_UQFM].vsQrf = data.NewUQFMsVsQrf;
    // Cumulative UQFMS
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM].value = data.CumUQFMsActual;
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM].targetFQ = data.CumUQFMsTargetFQ;
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM].target = data.CumUQFMsTarget;
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM].vsQrf = data.CumUQFMsVsQrf;
    //  New QFMS
    newState[SUMMARY_KPIS.TRY_NEW_QFM].value = data.NewQFMSActual;
    newState[SUMMARY_KPIS.TRY_NEW_QFM].targetFQ = data.NewQFMSTargetFQ;
    newState[SUMMARY_KPIS.TRY_NEW_QFM].target = data.NewQFMsTarget;
    newState[SUMMARY_KPIS.TRY_NEW_QFM].vsQrf = data.NewQFMsVsQrf;
    //Cumulative QFMs
    newState[SUMMARY_KPIS.TRY_CUMU_QFM].value = data.CumQFMsActual;
    newState[SUMMARY_KPIS.TRY_CUMU_QFM].targetFQ = data.CumQFMsTargetFQ;
    newState[SUMMARY_KPIS.TRY_CUMU_QFM].target = data.CumQFMsTarget;
    newState[SUMMARY_KPIS.TRY_CUMU_QFM].vsQrf = data.CumQFMsVsQrf;
    //28 Day New UQFM to QFM
    newState[SUMMARY_KPIS.TRY_DAY_28].value = data.Day28NewUQFMActual;
    newState[SUMMARY_KPIS.TRY_DAY_28].targetFQ = data.Day28NewUQFMTargetFQ;
    newState[SUMMARY_KPIS.TRY_DAY_28].vsQrf = data.Day28NewUQFMVsQrf;
    newState[SUMMARY_KPIS.TRY_DAY_28].target = data.Day28NewUQFMTarget;
    //Cum. UQFM to QFM
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].value = data.CumUQFMToQFMActual;
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].targetFQ = data.CumUQFMToQFMTargetFQ;
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].vsQrf = data.CumUQFMToQFMVsQrf;
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].target = data.CumUQFMToQFMTarget;

}
export function processTryMultichartData(g2, newState) {

    console.log('Try G2, ', g2);
    let weekG2Flag = g2.map(item => {
        return { ...item, weekNo: parseInt(item.wkno) ? parseInt(item.wkno) : 1 }
    })

    // _.orderBy(weekFlag, weekNo, ['asc'])
    console.log('Try WeekG2, ', weekG2Flag);

    let newG2 = _.orderBy(weekG2Flag, ['weekNo'], ['asc']);
    console.log('Try newG2, ', newG2);

    let newQfm = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    },
        newUqfm = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        cumuUQfm = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        cumuQfm = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        day28 = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        cumuUQT = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        }

    //Get Discover G2 Multichart values
    for (let i = 0; i < g2.length; i++) {
        let item = newG2[i];
        //newQfm
        newQfm.actual.push(item.NewQFMSActual);
        newQfm.target.push(item.NewQFMSTargetFQ);
        newQfm.ly.push(item.NewQFMSLY);
        newQfm.lq.push(item.NewQFMSLQ);
        //newUqfm
        newUqfm.actual.push(item.NewUQFMsSActual);
        newUqfm.target.push(item.NewUQFMsSTargetFQ);
        newUqfm.ly.push(item.NewUQFMsSLY);
        newUqfm.lq.push(item.NewUQFMsSLQ);
        //cumulativeUqfm
        cumuUQfm.actual.push(item.CumUQFMsSActual);
        cumuUQfm.target.push(item.CumUQFMsSTargetFQ);
        cumuUQfm.ly.push(item.CumUQFMsSLY);
        cumuUQfm.lq.push(item.CumUQFMsSLQ);
        //cumulativeQfm
        cumuQfm.actual.push(item.CumQFMsSActual);
        cumuQfm.target.push(item.CumQFMsSTargetFQ);
        cumuQfm.ly.push(item.CumQFMsSLY);
        cumuQfm.lq.push(item.CumQFMsSLQ);
        //day28New
        day28.actual.push(item.Day28NewUQFMActual);
        day28.target.push(item.Day28NewUQFMTargetFQ);
        day28.ly.push(item.Day28NewUQFMLY);
        day28.lq.push(item.Day28NewUQFMLQ);
        //cumUqfm
        cumuUQT.actual.push(item.CumUQFMToQFMActual);
        cumuUQT.target.push(item.CumUQFMToQFMTarget);
        cumuUQT.ly.push(item.CumUQFMToQFMLY);
        cumuUQT.lq.push(item.CumUQFMToQFMLQ);
    };
    console.log(cumuUQT);
    //Set Multichart Values
    for (let i = 10; i <= 15; i++) {
        switch (i) {
            case 10:
                currentMulti = [newUqfm.actual, newUqfm.target, newUqfm.ly, newUqfm.lq];
                break;
            case 11:
                currentMulti = [cumuUQfm.actual, cumuUQfm.target, cumuUQfm.ly, cumuUQfm.lq];
                break;
            case 12:
                currentMulti = [newQfm.actual, newQfm.target, newQfm.ly, newQfm.lq];
                break;
            case 13:
                currentMulti = [cumuQfm.actual, cumuQfm.target, cumuQfm.ly, cumuQfm.lq];
                break;
            case 14:
                currentMulti = [day28.actual, day28.target, day28.ly, day28.lq];
                break;
            case 15:
                currentMulti = [cumuUQT.actual, cumuUQT.target, cumuUQT.ly, cumuUQT.lq];
                break;
            default:
                break;
        }
        newState[i]['details'].multichart = currentMulti;
        console.log('Checking Mutltichart', newState[i]['details'].multichart);
    }
    console.log(newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.multichart);
}
export function processTryQTDData(data, newState) {
    for (let i = 10; i <= 15; i++) {
        switch (i) {

            case 10:
                newState[i].details.qtdw.qtd[0].value = data.NewUQFMsActuals;
                newState[i].details.qtdw.qtd[1].value = data.NewUQFMsTarget;
                newState[i].details.qtdw.qtd[2].value = data.NewUQFMsVsQrfDiff;
                newState[i].details.qtdw.qtd[3].value = data.NewUQFMsVsQrf;
                newState[i].details.qtdw.qtd[4].value = data.NewUQFMsQQTY;
                newState[i].details.qtdw.qtd[5].value = data.NewUQFMsYY;

                newState[i].details.qtdw.week[0].value = data.NewUQFMsCW;
                newState[i].details.qtdw.week[1].value = data.NewUQFMsTargetCW;
                newState[i].details.qtdw.week[2].value = data.NewUQFMsCWVsQrfDiff;
                newState[i].details.qtdw.week[3].value = data.NewUQFMsCWVsQrf;
                newState[i].details.qtdw.week[4].value = data.NewUQFMsWW;


                newState[i].details.stats[0].value = data.NewUQFMsCWVsQrf;
                newState[i].details.stats[1].value = data.NewUQFMsQQTY;
                newState[i].details.stats[2].value = data.NewUQFMsQQLY;
                newState[i].details.stats[3].value = data.NewUQFMsYY;
                break;
            case 11:
                newState[i].details.qtdw.qtd[0].value = data.CumUQFMsActuals;
                newState[i].details.qtdw.qtd[1].value = data.CumUQFMsTarget;
                newState[i].details.qtdw.qtd[2].value = data.CumUQFMsVsQrfDiff;
                newState[i].details.qtdw.qtd[3].value = data.CumUQFMsVsQrf;
                newState[i].details.qtdw.qtd[4].value = data.CumUQFMsQQTY;
                newState[i].details.qtdw.qtd[5].value = data.CumUQFMsYY;

                newState[i].details.qtdw.week[0].value = data.CumUQFMsCW;
                newState[i].details.qtdw.week[1].value = data.CumUQFMsTargetCW;
                newState[i].details.qtdw.week[2].value = data.CumUQFMsCWVsQrfDiff;
                newState[i].details.qtdw.week[3].value = data.CumUQFMsCWVsQrf;
                newState[i].details.qtdw.week[4].value = data.CumUQFMsWW;

                newState[i].details.stats[0].value = data.CumUQFMsVsQrf;
                newState[i].details.stats[1].value = data.CumUQFMsQQTY;
                newState[i].details.stats[2].value = data.CumUQFMsQQLY;
                newState[i].details.stats[3].value = data.CumUQFMsYY;
                break;
            case 12:
                newState[i].details.qtdw.qtd[0].value = data.NewQFMsActuals;
                newState[i].details.qtdw.qtd[1].value = data.NewQFMsTarget;
                newState[i].details.qtdw.qtd[2].value = data.NewQFMsVsQrfDiff;
                newState[i].details.qtdw.qtd[3].value = data.NewQFMsVsQrf;
                newState[i].details.qtdw.qtd[4].value = data.NewQFMsQQTY;
                newState[i].details.qtdw.qtd[5].value = data.NewQFMsYY;

                newState[i].details.qtdw.week[0].value = data.NewQFMsCW;
                newState[i].details.qtdw.week[1].value = data.NewQFMsTargetCW;
                newState[i].details.qtdw.week[2].value = data.NewQFMsCWVsQrfDiff;
                newState[i].details.qtdw.week[3].value = data.NewQFMsCWVsQrf;
                newState[i].details.qtdw.week[4].value = data.NewQFMsWW;

                newState[i].details.stats[0].value = data.NewQFMsVsQrf;
                newState[i].details.stats[1].value = data.NewQFMsQQTY;
                newState[i].details.stats[2].value = data.NewQFMsQQLY;
                newState[i].details.stats[3].value = data.NewQFMsYY;
                break;
            case 13:
                newState[i].details.qtdw.qtd[0].value = data.CumQFMsActuals;
                newState[i].details.qtdw.qtd[1].value = data.CumQFMsTarget;
                newState[i].details.qtdw.qtd[2].value = data.CumQFMsVsQrfDiff;
                newState[i].details.qtdw.qtd[3].value = data.CumQFMsVsQrf;
                newState[i].details.qtdw.qtd[4].value = data.CumQFMsQQTY;
                newState[i].details.qtdw.qtd[5].value = data.CumQFMsYY;

                newState[i].details.qtdw.week[0].value = data.CumQFMsCW;
                newState[i].details.qtdw.week[1].value = data.CumQFMsTargetCW;
                newState[i].details.qtdw.week[2].value = data.CumQFMsCWVsQrfDiff;
                newState[i].details.qtdw.week[3].value = data.CumQFMsCWVsQrf;
                newState[i].details.qtdw.week[4].value = data.CumQFMsWW;

                newState[i].details.stats[0].value = data.CumQFMsVsQrf;
                newState[i].details.stats[1].value = data.CumQFMsQQTY;
                newState[i].details.stats[2].value = data.CumQFMsQQLY;
                newState[i].details.stats[3].value = data.CumQFMsYY;
                break;
            case 14:
                newState[i].details.qtdw.qtd[0].value = data.Day28NewUQFMActuals;
                newState[i].details.qtdw.qtd[1].value = data.Day28NewUQFMTarget;
                newState[i].details.qtdw.qtd[2].value = data.Day28NewUQFMVsQrfDiff;
                newState[i].details.qtdw.qtd[3].value = data.Day28NewUQFMVsQrf;
                newState[i].details.qtdw.qtd[4].value = data.Day28NewUQFMQQTY;
                newState[i].details.qtdw.qtd[5].value = data.Day28NewUQFMYY;

                newState[i].details.qtdw.week[0].value = data.Day28NewUQFMCW;
                newState[i].details.qtdw.week[1].value = data.Day28NewUQFMTargetCW;
                newState[i].details.qtdw.week[2].value = data.Day28NewUQFMCWVsQrfDiff;
                newState[i].details.qtdw.week[3].value = data.Day28NewUQFMCWVsQrf;
                newState[i].details.qtdw.week[4].value = data.Day28NewUQFMWW;

                newState[i].details.stats[0].value = data.Day28NewUQFMVsQrf;
                newState[i].details.stats[1].value = data.Day28NewUQFMQQTY;
                newState[i].details.stats[2].value = data.Day28NewUQFMQQLY;
                newState[i].details.stats[3].value = data.Day28NewUQFMYY;
                break;
            case 15:
                newState[i].details.qtdw.qtd[0].value = data.CumUQFMToQFMActuals;
                newState[i].details.qtdw.qtd[1].value = data.CumUQFMToQFMTarget;
                newState[i].details.qtdw.qtd[2].value = data.CumUQFMToQFMVsQrfDiff;
                newState[i].details.qtdw.qtd[3].value =  data.CumUQFMToQFMVsQrf;
                newState[i].details.qtdw.qtd[4].value = data.CumUQFMToQFMQQTY;
                newState[i].details.qtdw.qtd[5].value = data.CumUQFMToQFMYY;

                newState[i].details.qtdw.week[0].value = data.CumUQFMToQFMCW;
                newState[i].details.qtdw.week[1].value = data.CumUQFMToQFMTargetCW;
                newState[i].details.qtdw.week[2].value = data.CumUQFMToQFMCWVsQrfDiff;
                newState[i].details.qtdw.week[3].value = data.CumUQFMToQFMCWVsQrf;
                newState[i].details.qtdw.week[4].value = data.CumUQFMToQFMWW;

                newState[i].details.stats[0].value = data.CumUQFMToQFMVsQrf;
                newState[i].details.stats[1].value = data.CumUQFMToQFMQQTY;
                newState[i].details.stats[2].value = data.CumUQFMToQFMQQLY;
                newState[i].details.stats[3].value = data.CumUQFMToQFMYY;
                break;
        }
    }
}
export function processTryGeoQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.TRY_NEW_UQFM].details = { ...newState[SUMMARY_KPIS.TRY_NEW_UQFM].details, geo: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details = { ...newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details, geo: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_NEW_QFM].details = { ...newState[SUMMARY_KPIS.TRY_NEW_QFM].details, geo: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_CUMU_QFM].details = { ...newState[SUMMARY_KPIS.TRY_CUMU_QFM].details, geo: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_DAY_28].details = { ...newState[SUMMARY_KPIS.TRY_DAY_28].details, geo: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details = { ...newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details, geo: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        //New QFM
        let newQFM = {
            index: i,
            actuals: item.NewQFMsActuals,
            marketArea: item.market_area_group,
            qq: item.NewQFMsQQTY,
            qrf: item.NewQFMsTarget,
            qrfDiff: item.NewQFMsVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.NewQFMsVsQrf,
            yy: item.NewQFMsYY
        }
        let newQFMWeek =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.NewQFMsCW,
            qrf: item.NewQFMsTargetCW,
            qrfDiff: item.NewQFMsCWVsQrfDiff,
            vsQrf: item.NewQFMsCWVsQrf,
            ww: item.NewQFMsWW,
            type: item.geo_code,
        }
        //New UQFM
        let newUQFM = {
            index: i,
            actuals: item.NewUQFMsActuals,
            marketArea: item.market_area_group,
            qq: item.NewUQFMsQQTY,
            qrf: item.NewUQFMsTarget,
            qrfDiff: item.NewUQFMsVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.NewUQFMsVsQrf,
            yy: item.NewUQFMsYY
        }
        let newUQFMWeek =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.NewUQFMsCW,
            qrf: item.NewUQFMsTargetCW,
            qrfDiff: item.NewUQFMsCWVsQrfDiff,
            vsQrf: item.NewUQFMsCWVsQrf,
            ww: item.NewUQFMsWW,
            type: item.geo_code,
        }
        //Cumu UQFM
        let cumuUQFM = {
            index: i,
            actuals: item.CumUQFMsActuals,
            marketArea: item.market_area_group,
            qq: item.CumUQFMsQQTY,
            qrf: item.CumUQFMsTarget,
            qrfDiff: item.CumUQFMsVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.CumUQFMsVsQrf,
            yy: item.CumUQFMsYY
        }
        let cumuUQFMWeek =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.CumUQFMsCW,
            qrf: item.CumUQFMsTargetCW,
            qrfDiff: item.CumUQFMsCWVsQrfDiff,
            vsQrf: item.CumUQFMsCWVsQrf,
            ww: item.CumUQFMsWW,
            type: item.geo_code,
        }
        //Cumu QFM
        let cumuQFM = {
            index: i,
            actuals: item.CumQFMsActuals,
            marketArea: item.market_area_group,
            qq: item.CumQFMsQQTY,
            qrf: item.CumQFMsTarget,
            qrfDiff: item.CumQFMsVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.CumQFMsVsQrf,
            yy: item.CumQFMsYY
        }
        let cumuQFMWeek =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.CumQFMsCW,
            qrf: item.CumQFMsTargetCW,
            qrfDiff: item.CumQFMsCWVsQrfDiff,
            vsQrf: item.CumQFMsCWVsQrf,
            ww: item.CumQFMsWW,
            type: item.geo_code,
        }
        //Day 28
        let day28 = {
            index: i,
            actuals: item.Day28NewUQFMActuals,
            marketArea: item.market_area_group,
            qq: item.Day28NewUQFMQQTY,
            qrf: item.Day28NewUQFMTarget,
            qrfDiff: item.Day28NewUQFMVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.Day28NewUQFMVsQrf,
            yy: item.Day28NewUQFMYY
        }
        let day28Week =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.Day28NewUQFMCW,
            qrf: item.Day28NewUQFMTargetCW,
            qrfDiff: item.Day28NewUQFMCWVsQrfDiff,
            vsQrf: item.Day28NewUQFMCWVsQrf,
            ww: item.Day28NewUQFMWW,
            type: item.geo_code,
        }
        //Cumu UQFM to QFM
        let cumuUTQ = {
            index: i,
            actuals: item.CumUQFMToQFMActuals,
            marketArea: item.market_area_group,
            qq: item.CumUQFMToQFMQQTY,
            qrf: item.CumUQFMToQFMTarget,
            qrfDiff: item.CumUQFMToQFMVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.CumUQFMToQFMVsQrf,
            yy: item.CumUQFMToQFMYY
        }
        let cumuUTQWeek =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.CumUQFMToQFMCW,
            qrf: item.CumUQFMToQFMTargetCW,
            qrfDiff: item.CumUQFMToQFMCWVsQrfDiff,
            vsQrf: item.CumUQFMToQFMCWVsQrf,
            ww: item.CumUQFMToQFMWW,
            type: item.geo_code,
        }

        newState[SUMMARY_KPIS.TRY_NEW_QFM].details.geo.qtd.push(newQFM);
        newState[SUMMARY_KPIS.TRY_NEW_QFM].details.geo.week.push(newQFMWeek);
        newState[SUMMARY_KPIS.TRY_NEW_UQFM].details.geo.qtd.push(newUQFM);
        newState[SUMMARY_KPIS.TRY_NEW_UQFM].details.geo.week.push(newUQFMWeek);
        newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details.geo.qtd.push(cumuUQFM);
        newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details.geo.week.push(cumuUQFMWeek);
        newState[SUMMARY_KPIS.TRY_CUMU_QFM].details.geo.qtd.push(cumuQFM);
        newState[SUMMARY_KPIS.TRY_CUMU_QFM].details.geo.week.push(cumuQFMWeek);
        newState[SUMMARY_KPIS.TRY_DAY_28].details.geo.qtd.push(day28);
        newState[SUMMARY_KPIS.TRY_DAY_28].details.geo.week.push(day28Week);
        newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.geo.qtd.push(cumuUTQ);
        newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.geo.week.push(cumuUTQWeek);
    }

    newState[SUMMARY_KPIS.TRY_NEW_QFM].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.TRY_NEW_QFM].details.geo.qtd);
    newState[SUMMARY_KPIS.TRY_NEW_QFM].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.TRY_NEW_QFM].details.geo.week);
    newState[SUMMARY_KPIS.TRY_NEW_UQFM].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.TRY_NEW_UQFM].details.geo.qtd);
    newState[SUMMARY_KPIS.TRY_NEW_UQFM].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.TRY_NEW_UQFM].details.geo.week);
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details.geo.qtd);
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details.geo.week);
    newState[SUMMARY_KPIS.TRY_CUMU_QFM].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.TRY_CUMU_QFM].details.geo.qtd);
    newState[SUMMARY_KPIS.TRY_CUMU_QFM].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.TRY_CUMU_QFM].details.geo.week);
    newState[SUMMARY_KPIS.TRY_DAY_28].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.TRY_DAY_28].details.geo.qtd);
    newState[SUMMARY_KPIS.TRY_DAY_28].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.TRY_DAY_28].details.geo.week);
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.geo.qtd);
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.geo.week);
}
export function processTryMarketQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.TRY_NEW_UQFM].details = { ...newState[SUMMARY_KPIS.TRY_NEW_UQFM].details, market: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details = { ...newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details, market: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_NEW_QFM].details = { ...newState[SUMMARY_KPIS.TRY_NEW_QFM].details, market: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_CUMU_QFM].details = { ...newState[SUMMARY_KPIS.TRY_CUMU_QFM].details, market: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_DAY_28].details = { ...newState[SUMMARY_KPIS.TRY_DAY_28].details, market: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details = { ...newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details, market: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        //New QFM
        let newQFM = {
            index: i,
            actuals: item.NewQFMsActuals,
            type: item.market_area_code,
            qq: item.NewQFMsQQTY,
            qrf: item.NewQFMsTarget,
            qrfDiff: item.NewQFMsVsQrfDiff,
            vsQrf: item.NewQFMsVsQrf,
            yy: item.NewQFMsYY
        }
        let newQFMWeek =
        {
            index: i,
            type: item.market_area_code,
            actuals: item.NewQFMsCW,
            qrf: item.NewQFMsTargetCW,
            qrfDiff: item.NewQFMsCWVsQrfDiff,
            vsQrf: item.NewQFMsCWVsQrf,
            ww: item.NewQFMsWW,
        }
        //New UQFM
        let newUQFM = {
            index: i,
            actuals: item.NewUQFMsActuals,
            type: item.market_area_code,
            qq: item.NewUQFMsQQTY,
            qrf: item.NewUQFMsTarget,
            qrfDiff: item.NewUQFMsVsQrfDiff,
            vsQrf: item.NewUQFMsVsQrf,
            yy: item.NewUQFMsYY
        }
        let newUQFMWeek =
        {
            index: i,
            type: item.market_area_code,
            actuals: item.NewUQFMsCW,
            qrf: item.NewUQFMsTargetCW,
            qrfDiff: item.NewUQFMsCWVsQrfDiff,
            vsQrf: item.NewUQFMsCWVsQrf,
            ww: item.NewUQFMsWW,
        }
        //Cumu UQFM
        let cumuUQFM = {
            index: i,
            actuals: item.CumUQFMsActuals,
            type: item.market_area_code,
            qq: item.CumUQFMsQQTY,
            qrf: item.CumUQFMsTarget,
            qrfDiff: item.CumUQFMsVsQrfDiff,
            vsQrf: item.CumUQFMsVsQrf,
            yy: item.CumUQFMsYY
        }
        let cumuUQFMWeek =
        {
            index: i,
            type: item.market_area_code,
            actuals: item.CumUQFMsCW,
            qrf: item.CumUQFMsTargetCW,
            qrfDiff: item.CumUQFMsCWVsQrfDiff,
            vsQrf: item.CumUQFMsCWVsQrf,
            ww: item.CumUQFMsWW,
        }
        //Cumu QFM
        let cumuQFM = {
            index: i,
            actuals: item.CumQFMsActuals,
            type: item.market_area_code,
            qq: item.CumQFMsQQTY,
            qrf: item.CumQFMsTarget,
            qrfDiff: item.CumQFMsVsQrfDiff,
            vsQrf: item.CumQFMsVsQrf,
            yy: item.CumQFMsYY
        }
        let cumuQFMWeek =
        {
            index: i,
            type: item.market_area_code,
            actuals: item.CumQFMsCW,
            qrf: item.CumQFMsTargetCW,
            qrfDiff: item.CumQFMsCWVsQrfDiff,
            vsQrf: item.CumQFMsCWVsQrf,
            ww: item.CumQFMsWW,
        }
        //Day 28
        let day28 = {
            index: i,
            actuals: item.Day28NewUQFMActuals,
            type: item.market_area_code,
            qq: item.Day28NewUQFMQQTY,
            qrf: item.Day28NewUQFMTarget,
            qrfDiff: item.Day28NewUQFMVsQrfDiff,
            vsQrf: item.Day28NewUQFMVsQrf,
            yy: item.Day28NewUQFMYY
        }
        let day28Week =
        {
            index: i,
            type: item.market_area_code,
            actuals: item.Day28NewUQFMCW,
            qrf: item.Day28NewUQFMTargetCW,
            qrfDiff: item.Day28NewUQFMCWVsQrfDiff,
            vsQrf: item.Day28NewUQFMCWVsQrf,
            ww: item.Day28NewUQFMWW,
        }
        //Cumu UQFM to QFM
        let cumuUTQ = {
            index: i,
            actuals: item.CumUQFMToQFMActuals,
            type: item.market_area_code,
            qq: item.CumUQFMToQFMQQTY,
            qrf: item.CumUQFMToQFMTarget,
            qrfDiff: item.CumUQFMToQFMVsQrfDiff,
            vsQrf: item.CumUQFMToQFMVsQrf,
            yy: item.CumUQFMToQFMYY
        }
        let cumuUTQWeek =
        {
            index: i,
            type: item.market_area_code,
            actuals: item.CumUQFMToQFMCW,
            qrf: item.CumUQFMToQFMTargetCW,
            qrfDiff: item.CumUQFMToQFMCWVsQrfDiff,
            vsQrf: item.CumUQFMToQFMCWVsQrf,
            ww: item.CumUQFMToQFMWW,
        }

        newState[SUMMARY_KPIS.TRY_NEW_QFM].details.market.qtd.push(newQFM);
        newState[SUMMARY_KPIS.TRY_NEW_QFM].details.market.week.push(newQFMWeek);
        newState[SUMMARY_KPIS.TRY_NEW_UQFM].details.market.qtd.push(newUQFM);
        newState[SUMMARY_KPIS.TRY_NEW_UQFM].details.market.week.push(newUQFMWeek);
        newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details.market.qtd.push(cumuUQFM);
        newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details.market.week.push(cumuUQFMWeek);
        newState[SUMMARY_KPIS.TRY_CUMU_QFM].details.market.qtd.push(cumuQFM);
        newState[SUMMARY_KPIS.TRY_CUMU_QFM].details.market.week.push(cumuQFMWeek);
        newState[SUMMARY_KPIS.TRY_DAY_28].details.market.qtd.push(day28);
        newState[SUMMARY_KPIS.TRY_DAY_28].details.market.week.push(day28Week);
        newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.market.qtd.push(cumuUTQ);
        newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.market.week.push(cumuUTQWeek);

    }
}
export function processTryProductQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.TRY_NEW_QFM].details = { ...newState[SUMMARY_KPIS.TRY_NEW_QFM].details, product: { qtd: [], week: [] } };



    //New QFM
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        //New QFM
        let newQFM = {
            index: i,
            actuals: item.NewQFMsActuals,
            type: item.product_name,
            qq: item.NewQFMsQQTY,
            qrf: item.NewQFMsTarget,
            qrfDiff: item.NewQFMsVsQrfDiff,
            vsQrf: item.NewQFMsVsQrf,
            yy: item.NewQFMsYY
        }
        let newQFMWeek =
        {
            index: i,
            type: item.product_name,
            actuals: item.NewQFMsCW,
            qrf: item.NewQFMsTargetCW,
            qrfDiff: item.NewQFMsCWVsQrfDiff,
            vsQrf: item.NewQFMsCWVsQrf,
            ww: item.NewQFMsWW,
        }


        newState[SUMMARY_KPIS.TRY_NEW_QFM].details.product.qtd.push(newQFM);
        newState[SUMMARY_KPIS.TRY_NEW_QFM].details.product.week.push(newQFMWeek);


    }
}
export function processTrySignUpAppQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.TRY_NEW_UQFM].details = { ...newState[SUMMARY_KPIS.TRY_NEW_UQFM].details, signUpApp: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details = { ...newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details, signUpApp: { qtd: [], week: [] } };


    //New QFM
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        //New UQFM
        let newUQFM = {
            index: i,
            actuals: item.NewUQFMsActuals,
            marketArea: item.signup_app,
            type: item.signup_category,
            qq: item.NewUQFMsQQTY,
            qrf: item.NewUQFMsTarget,
            qrfDiff: item.NewUQFMsVsQrfDiff,
            vsQrf: item.NewUQFMsVsQrf,
            yy: item.NewUQFMsYY
        }
        let newUQFMWeek =
        {
            index: i,
            marketArea: item.signup_app,
            type: item.signup_category,
            actuals: item.NewUQFMsCW,
            qrf: item.NewUQFMsTargetCW,
            qrfDiff: item.NewUQFMsCWVsQrfDiff,
            vsQrf: item.NewUQFMsCWVsQrf,
            ww: item.NewUQFMsWW,
        }
        //Cumu UQFM
        let cumuUQFM = {
            index: i,
            marketArea: item.signup_app,
            type: item.signup_category,
            actuals: item.CumUQFMsActuals,
            qq: item.CumUQFMsQQTY,
            qrf: item.CumUQFMsTarget,
            qrfDiff: item.CumUQFMsVsQrfDiff,
            vsQrf: item.CumUQFMsVsQrf,
            yy: item.CumUQFMsYY
        }
        let cumuUQFMWeek =
        {
            index: i,
            marketArea: item.signup_app,
            type: item.signup_category,
            actuals: item.CumUQFMsCW,
            qrf: item.CumUQFMsTargetCW,
            qrfDiff: item.CumUQFMsCWVsQrfDiff,
            vsQrf: item.CumUQFMsCWVsQrf,
            ww: item.CumUQFMsWW,
        }

        newState[SUMMARY_KPIS.TRY_NEW_UQFM].details.signUpApp.qtd.push(newUQFM);
        newState[SUMMARY_KPIS.TRY_NEW_UQFM].details.signUpApp.week.push(newUQFMWeek);
        newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details.signUpApp.qtd.push(cumuUQFM);
        newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details.signUpApp.week.push(cumuUQFMWeek);

    }
}
export function processTrySignUpCatQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.TRY_NEW_QFM].details = { ...newState[SUMMARY_KPIS.TRY_NEW_QFM].details, signUpCat: { qtd: [], week: [] } };

    newState[SUMMARY_KPIS.TRY_CUMU_QFM].details = { ...newState[SUMMARY_KPIS.TRY_CUMU_QFM].details, signUpCat: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_DAY_28].details = { ...newState[SUMMARY_KPIS.TRY_DAY_28].details, signUpCat: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details = { ...newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details, signUpCat: { qtd: [], week: [] } };


    //New QFM
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        //New QFM
        let newQFM = {
            index: i,
            actuals: item.NewQFMsActuals,
            type: item.signup_category,
            qq: item.NewQFMsQQTY,
            qrf: item.NewQFMsTarget,
            qrfDiff: item.NewQFMsVsQrfDiff,
            vsQrf: item.NewQFMsVsQrf,
            yy: item.NewQFMsYY
        }
        let newQFMWeek =
        {
            index: i,
            type: item.signup_category,
            actuals: item.NewQFMsCW,
            qrf: item.NewQFMsTargetCW,
            qrfDiff: item.NewQFMsCWVsQrfDiff,
            vsQrf: item.NewQFMsCWVsQrf,
            ww: item.NewQFMsWW,
        }

        //Cumu QFM
        let cumuQFM = {
            index: i,
            actuals: item.CumQFMsActuals,
            type: item.signup_category,
            qq: item.CumQFMsQQTY,
            qrf: item.CumQFMsTarget,
            qrfDiff: item.CumQFMsVsQrfDiff,
            vsQrf: item.CumQFMsVsQrf,
            yy: item.CumQFMsYY
        }
        let cumuQFMWeek =
        {
            index: i,
            type: item.signup_category,
            actuals: item.CumQFMsCW,
            qrf: item.CumQFMsTargetCW,
            qrfDiff: item.CumQFMsCWVsQrfDiff,
            vsQrf: item.CumQFMsCWVsQrf,
            ww: item.CumQFMsWW,
        }
        //Day 28
        let day28 = {
            index: i,
            actuals: item.Day28NewUQFMActuals,
            type: item.signup_category,
            qq: item.Day28NewUQFMQQTY,
            qrf: item.Day28NewUQFMTarget,
            qrfDiff: item.Day28NewUQFMVsQrfDiff,
            vsQrf: item.Day28NewUQFMVsQrf,
            yy: item.Day28NewUQFMYY
        }
        let day28Week =
        {
            index: i,
            type: item.signup_category,
            actuals: item.Day28NewUQFMCW,
            qrf: item.Day28NewUQFMTargetCW,
            qrfDiff: item.Day28NewUQFMCWVsQrfDiff,
            vsQrf: item.Day28NewUQFMCWVsQrf,
            ww: item.Day28NewUQFMWW,
        }
        //Cumu UQFM to QFM
        let cumuUTQ = {
            index: i,
            actuals: item.CumUQFMToQFMActuals,
            type: item.signup_category,
            qq: item.CumUQFMToQFMQQTY,
            qrf: item.CumUQFMToQFMTarget,
            qrfDiff: item.CumUQFMToQFMVsQrfDiff,
            vsQrf: item.CumUQFMToQFMVsQrf,
            yy: item.CumUQFMToQFMYY
        }
        let cumuUTQWeek =
        {
            index: i,
            type: item.signup_category,
            actuals: item.CumUQFMToQFMCW,
            qrf: item.CumUQFMToQFMTargetCW,
            qrfDiff: item.CumUQFMToQFMCWVsQrfDiff,
            vsQrf: item.CumUQFMToQFMCWVsQrf,
            ww: item.CumUQFMToQFMWW,
        }

        newState[SUMMARY_KPIS.TRY_NEW_QFM].details.signUpCat.qtd.push(newQFM);
        newState[SUMMARY_KPIS.TRY_NEW_QFM].details.signUpCat.week.push(newQFMWeek);

        newState[SUMMARY_KPIS.TRY_CUMU_QFM].details.signUpCat.qtd.push(cumuQFM);
        newState[SUMMARY_KPIS.TRY_CUMU_QFM].details.signUpCat.week.push(cumuQFMWeek);
        newState[SUMMARY_KPIS.TRY_DAY_28].details.signUpCat.qtd.push(day28);
        newState[SUMMARY_KPIS.TRY_DAY_28].details.signUpCat.week.push(day28Week);
        newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.signUpCat.qtd.push(cumuUTQ);
        newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.signUpCat.week.push(cumuUTQWeek);

    }
}

export function processTryDownloadQTDData(data, newState){
       //Clear old Values
       newState[SUMMARY_KPIS.TRY_NEW_QFM].details = { ...newState[SUMMARY_KPIS.TRY_NEW_QFM].details, qfm: { qtd: [], week: [] } };

       newState[SUMMARY_KPIS.TRY_CUMU_QFM].details = { ...newState[SUMMARY_KPIS.TRY_CUMU_QFM].details, qfm: { qtd: [], week: [] } };
       
   
       //New QFM
       for (let i = 0; i < data.length; i++) {
           let item = data[i];
           //New QFM
           let newQFM = {
               index: i,
               actuals: item.NewQFMsActuals,
               marketArea: item.download_type,
               type: item.qfm_type,
               qq: item.NewQFMsQQTY,
               qrf: item.NewQFMsTarget,
               qrfDiff: item.NewQFMsVsQrfDiff,
               vsQrf: item.NewQFMsVsQrf,
               yy: item.NewQFMsYY
           }
           let newQFMWeek =
           {
               index: i,
               type: item.qfm_type,
               marketArea: item.download_type,
               actuals: item.NewQFMsCW,
               qrf: item.NewQFMsTargetCW,
               qrfDiff: item.NewQFMsCWVsQrfDiff,
               vsQrf: item.NewQFMsCWVsQrf,
               ww: item.NewQFMsWW,
           }
   
           //Cumu QFM
           let cumuQFM = {
               index: i,
               actuals: item.CumQFMsActuals,
               type: item.qfm_type,
               marketArea: item.download_type,
               qq: item.CumQFMsQQTY,
               qrf: item.CumQFMsTarget,
               qrfDiff: item.CumQFMsVsQrfDiff,
               vsQrf: item.CumQFMsVsQrf,
               yy: item.CumQFMsYY
           }
           let cumuQFMWeek =
           {
               index: i,
               type: item.qfm_type,
               marketArea: item.download_type,
               actuals: item.CumQFMsCW,
               qrf: item.CumQFMsTargetCW,
               qrfDiff: item.CumQFMsCWVsQrfDiff,
               vsQrf: item.CumQFMsCWVsQrf,
               ww: item.CumQFMsWW,
           }
           
           
   
           newState[SUMMARY_KPIS.TRY_NEW_QFM].details.qfm.qtd.push(newQFM);
           newState[SUMMARY_KPIS.TRY_NEW_QFM].details.qfm.week.push(newQFMWeek);
   
           newState[SUMMARY_KPIS.TRY_CUMU_QFM].details.qfm.qtd.push(cumuQFM);
           newState[SUMMARY_KPIS.TRY_CUMU_QFM].details.qfm.week.push(cumuQFMWeek);
           
   
       }

}
export function processTryQFMQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.TRY_NEW_UQFM].details = { ...newState[SUMMARY_KPIS.TRY_NEW_UQFM].details, qfm: { qtd: [], week: [] } };
    // newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details = { ...newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details, qfm: { qtd: [], week: [] } };
   
    // newState[SUMMARY_KPIS.TRY_DAY_28].details = { ...newState[SUMMARY_KPIS.TRY_DAY_28].details, qfm: { qtd: [], week: [] } };
    // newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details = { ...newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details, qfm: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
      
        
        //New UQFM
        let newUQFM = {
            index: i,
            actuals: item.NewUQFMsActuals,
            type: item.qfm_type,
            qq: item.NewUQFMsQQTY,
            qrf: item.NewUQFMsTarget,
            qrfDiff: item.NewUQFMsVsQrfDiff,
            vsQrf: item.NewUQFMsVsQrf,
            yy: item.NewUQFMsYY
        }
        let newUQFMWeek =
        {
            index: i,
            type: item.qfm_type,
            actuals: item.NewUQFMsCW,
            qrf: item.NewUQFMsTargetCW,
            qrfDiff: item.NewUQFMsCWVsQrfDiff,
            vsQrf: item.NewUQFMsCWVsQrf,
            ww: item.NewUQFMsWW,
        }
        //Cumu UQFM
        // let cumuUQFM = {
        //     index: i,
        //     actuals: item.CumUQFMsActuals,
        //     type: item.qfm_type,
        //     qq: item.CumUQFMsQQTY,
        //     qrf: item.CumUQFMsTarget,
        //     qrfDiff: item.CumUQFMsVsQrfDiff,
        //     vsQrf: item.CumUQFMsVsQrf,
        //     yy: item.CumUQFMsYY
        // }
        // let cumuUQFMWeek =
        // {
        //     index: i,
        //     type: item.qfm_type,
        //     actuals: item.CumUQFMsCW,
        //     qrf: item.CumUQFMsTargetCW,
        //     qrfDiff: item.CumUQFMsCWVsQrfDiff,
        //     vsQrf: item.CumUQFMsCWVsQrf,
        //     ww: item.CumUQFMsWW,
        // }
        
        // //Day 28
        // let day28 = {
        //     index: i,
        //     actuals: item.Day28NewUQFMActuals,
        //     type: item.qfm_type,
        //     qq: item.Day28NewUQFMQQTY,
        //     qrf: item.Day28NewUQFMTarget,
        //     qrfDiff: item.Day28NewUQFMVsQrfDiff,
        //     vsQrf: item.Day28NewUQFMVsQrf,
        //     yy: item.Day28NewUQFMYY
        // }
        // let day28Week =
        // {
        //     index: i,
        //     type: item.qfm_type,
        //     actuals: item.Day28NewUQFMCW,
        //     qrf: item.Day28NewUQFMTargetCW,
        //     qrfDiff: item.Day28NewUQFMCWVsQrfDiff,
        //     vsQrf: item.Day28NewUQFMCWVsQrf,
        //     ww: item.Day28NewUQFMWW,
        // }
        // //Cumu UQFM to QFM
        // let cumuUTQ = {
        //     index: i,
        //     actuals: item.CumUQFMToQFMActuals,
        //     type: item.qfm_type,
        //     qq: item.CumUQFMToQFMQQTY,
        //     qrf: item.CumUQFMToQFMTarget,
        //     qrfDiff: item.CumUQFMToQFMVsQrfDiff,
        //     vsQrf: item.CumUQFMToQFMVsQrf,
        //     yy: item.CumUQFMToQFMYY
        // }
        // let cumuUTQWeek =
        // {
        //     index: i,
        //     type: item.qfm_type,
        //     actuals: item.CumUQFMToQFMCW,
        //     qrf: item.CumUQFMToQFMTargetCW,
        //     qrfDiff: item.CumUQFMToQFMCWVsQrfDiff,
        //     vsQrf: item.CumUQFMToQFMCWVsQrf,
        //     ww: item.CumUQFMToQFMWW,
        // }

     
        newState[SUMMARY_KPIS.TRY_NEW_UQFM].details.qfm.qtd.push(newUQFM);
        newState[SUMMARY_KPIS.TRY_NEW_UQFM].details.qfm.week.push(newUQFMWeek);
        // newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details.qfm.qtd.push(cumuUQFM);
        // newState[SUMMARY_KPIS.TRY_CUMU_UQFM].details.qfm.week.push(cumuUQFMWeek);
        
        // newState[SUMMARY_KPIS.TRY_DAY_28].details.qfm.qtd.push(day28);
        // newState[SUMMARY_KPIS.TRY_DAY_28].details.qfm.week.push(day28Week);
        // newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.qfm.qtd.push(cumuUTQ);
        // newState[SUMMARY_KPIS.TRY_CUMU_UQFM_QFM].details.qfm.week.push(cumuUTQWeek);

    }
}
/**End Try */

/**Buy */
export function processBuyConversionQFMData(data, newState) {
    //Clear old Values
    
    newState[SUMMARY_KPIS.BUY_CONVERSION].details = { ...newState[SUMMARY_KPIS.BUY_CONVERSION].details, qfm: { qtd: [], week: [] } };
        

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
      
        
        //conversion QFM
        let convQFM = {
            index: i,
            actuals: item.ConversionActuals,
            type: item.qfm_type,
            qq: item.ConversionQQTY,
            qrf: item.ConversionTarget,
            qrfDiff: item.ConversionVsQrfDiff,
            vsQrf: item.ConversionVsQrf,
            yy: item.ConversionYY
        }
        let convQFMWeek =
        {
            index: i,
            type: item.qfm_type,
            actuals: item.ConversionCW,
            qrf: item.ConversionTargetCW,
            qrfDiff: item.ConversionCWVsQrfDiff,
            vsQrf: item.ConversionCWVsQrf,
            ww: item.ConversionWW,
        }
       
        newState[SUMMARY_KPIS.BUY_CONVERSION].details.qfm.qtd.push(convQFM);
        newState[SUMMARY_KPIS.BUY_CONVERSION].details.qfm.week.push(convQFMWeek);
        

    }
}
//Conversion
export function processBuyConversionSecondaryData(data, newState) {
    newState[SUMMARY_KPIS.BUY_CONVERSION].value = data.ConversionActual;
    newState[SUMMARY_KPIS.BUY_CONVERSION].target = data.ConversionTarget;
    newState[SUMMARY_KPIS.BUY_CONVERSION].targetFQ = data.ConversionTargetFQ;
    newState[SUMMARY_KPIS.BUY_CONVERSION].vsQrf = data.ConversionVsQrf;
}
export function processBuyConversionMultichartData(data, newState) {


    let weekFlag = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])


    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);

    let uqfm = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }

    //Get Discover uqfm Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        //uqfm
        uqfm.actual.push(item.ConversionActual);
        uqfm.target.push(item.ConversionTarget);
        uqfm.ly.push(item.ConversionLY);
        uqfm.lq.push(item.ConversionLQ);
    };
    currentMulti = [uqfm.actual, uqfm.target, uqfm.ly, uqfm.lq];
    newState[SUMMARY_KPIS.BUY_CONVERSION]['details'].multichart = currentMulti;


}
export function processBuyConversionQTDData(data, newState) {


    newState[SUMMARY_KPIS.BUY_CONVERSION].details.qtdw.qtd[0].value = data.ConversionActuals;
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.qtdw.qtd[1].value = data.ConversionTarget;
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.qtdw.qtd[2].value = data.ConversionVsQrfDiff
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.qtdw.qtd[3].value = data.ConversionVsQrf;
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.qtdw.qtd[4].value = data.ConversionQQTY;
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.qtdw.qtd[5].value = data.ConversionYY;

    newState[SUMMARY_KPIS.BUY_CONVERSION].details.qtdw.week[0].value = data.ConversionCW;
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.qtdw.week[1].value = data.ConversionTargetCW;
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.qtdw.week[2].value = data.ConversionCWVsQrfDiff;
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.qtdw.week[3].value = data.ConversionCWVsQrf;
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.qtdw.week[4].value = data.ConversionWW;

    newState[SUMMARY_KPIS.BUY_CONVERSION].details.stats[0].value = data.ConversionVsQrf;
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.stats[1].value = data.ConversionQQTY;
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.stats[2].value = data.ConversionQQLY;
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.stats[3].value = data.ConversionYY;

}
export function processBuyConversionGeoQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.geo.qtd = [];
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.geo.week = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let uqfm = {
            index: i,
            actuals: item.ConversionActuals,
            marketArea: item.market_area_group,
            qq: item.ConversionQQTY,
            qrf: item.ConversionTarget,
            qrfDiff: item.ConversionVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.ConversionVsQrf,
            yy: item.ConversionYY
        }
        let uqfmWeek =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.ConversionCW,
            qrf: item.ConversionTargetCW,
            qrfDiff: item.ConversionCWVsQrfDiff,
            vsQrf: item.ConversionCWVsQrf,
            ww: item.ConversionWW,
            type: item.geo_code,
        }

        newState[SUMMARY_KPIS.BUY_CONVERSION].details.geo.qtd.push(uqfm);
        newState[SUMMARY_KPIS.BUY_CONVERSION].details.geo.week.push(uqfmWeek);
    }

    newState[SUMMARY_KPIS.BUY_CONVERSION].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.BUY_CONVERSION].details.geo.qtd);
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.BUY_CONVERSION].details.geo.week);
}
export function processBuyConversionMarketQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.market.qtd = [];
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.market.week = [];


    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let uqfm = {
            index: i,
            actuals: item.ConversionActuals,
            qq: item.ConversionQQTY,
            qrf: item.ConversionTarget,
            qrfDiff: item.ConversionVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.ConversionVsQrf,
            yy: item.ConversionYY
        }
        let uqfmWeek =
        {
            index: i,
            actuals: item.ConversionCW,
            qrf: item.ConversionTargetCW,
            qrfDiff: item.ConversionCWVsQrfDiff,
            vsQrf: item.ConversionCWVsQrf,
            ww: item.ConversionWW,
            type: item.market_area_code,
        }
        newState[SUMMARY_KPIS.BUY_CONVERSION].details.market.qtd.push(uqfm);
        newState[SUMMARY_KPIS.BUY_CONVERSION].details.market.week.push(uqfmWeek);
    }
}
export function processBuyConversionWebSegmentQTDData(g5, newState) {
    //Clear old Values

    newState[SUMMARY_KPIS.BUY_CONVERSION].details.segment.qtd = [];
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.segment.week = [];
    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let uqfm = {
            index: i,
            actuals: item.ConversionActuals,
            qq: item.ConversionQQTY,
            qrf: item.ConversionTarget,
            qrfDiff: item.ConversionVsQrfDiff,
            type: item.web_segment,
            vsQrf: item.ConversionVsQrf,
            yy: item.ConversionYY
        }
        let uqfmWeek =
        {
            index: i,
            actuals: item.ConversionCW,
            qrf: item.ConversionTargetCW,
            qrfDiff: item.ConversionCWVsQrfDiff,
            vsQrf: item.ConversionCWVsQrf,
            ww: item.ConversionWW,
            type: item.web_segment,
        }
        newState[SUMMARY_KPIS.BUY_CONVERSION].details.segment.qtd.push(uqfm);
        newState[SUMMARY_KPIS.BUY_CONVERSION].details.segment.week.push(uqfmWeek);
    }
}
export function processBuyConversionLTCQTDData(g5, newState) {

    //Clear old Values
    newState[SUMMARY_KPIS.BUY_CONVERSION].details = { ...newState[SUMMARY_KPIS.BUY_CONVERSION].details, ltc: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.BUY_CONVERSION].details = { ...newState[SUMMARY_KPIS.BUY_CONVERSION].details, ltc: { qtd: [], week: [] } };

    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let uqfm = {
            index: i,
            actuals: item.ConversionActuals,
            marketArea: item.last_touch_channel,
            qq: item.ConversionQQTY,
            qrf: item.ConversionTarget,
            qrfDiff: item.ConversionVsQrfDiff,
            type: item.visit_type,
            vsQrf: item.ConversionVsQrf,
            yy: item.ConversionYY
        }
        let uqfmWeek =
        {
            index: i,
            actuals: item.ConversionCW,
            qrf: item.ConversionTargetCW,
            marketArea: item.last_touch_channel,
            qrfDiff: item.ConversionCWVsQrfDiff,
            vsQrf: item.ConversionCWVsQrf,
            ww: item.ConversionWW,
            type: item.visit_type,
        }
        newState[SUMMARY_KPIS.BUY_CONVERSION].details.ltc.qtd.push(uqfm);
        newState[SUMMARY_KPIS.BUY_CONVERSION].details.ltc.week.push(uqfmWeek);
    }
}
export function processBuyConversionConvQTDData(g5, newState) {
    // console.log(g5);
    // console.log(newState);
    //Clear old Values
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.conversion.qtd = [];
    newState[SUMMARY_KPIS.BUY_CONVERSION].details.conversion.week = [];

    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let uqfm = {
            index: i,
            actuals: item.ConversionActuals,
            qq: item.ConversionQQTY,
            qrf: item.ConversionTarget,
            qrfDiff: item.ConversionVsQrfDiff,
            type: item.conversion_type,
            vsQrf: item.ConversionVsQrf,
            yy: item.ConversionYY
        }
        let uqfmWeek =
        {
            index: i,
            actuals: item.ConversionCW,
            qrf: item.ConversionTargetCW,
            qrfDiff: item.ConversionCWVsQrfDiff,
            vsQrf: item.ConversionCWVsQrf,
            ww: item.ConversionWW,
            type: item.conversion_type,
        }
        newState[SUMMARY_KPIS.BUY_CONVERSION].details.conversion.qtd.push(uqfm);
        newState[SUMMARY_KPIS.BUY_CONVERSION].details.conversion.week.push(uqfmWeek);
    }
}
export function processBuyConversionMobDeskQTDData(g5, newState) {

    //Clear old Values

    newState[SUMMARY_KPIS.BUY_CONVERSION].details = { ...newState[SUMMARY_KPIS.BUY_CONVERSION].details, mvd: { qtd: [], week: [] } };

    newState[SUMMARY_KPIS.BUY_CONVERSION].details = { ...newState[SUMMARY_KPIS.BUY_CONVERSION].details, mvd: { qtd: [], week: [] } };



    for (let i = 0; i < g5.length; i++) {

        let item = g5[i];

        let uqfm = {
            index: i,
            actuals: item.ConversionActuals,
            qq: item.ConversionQQTY,
            qrf: item.ConversionTarget,
            qrfDiff: item.ConversionVsQrfDiff,
            type: item.mobile_or_desktop,
            vsQrf: item.ConversionVsQrf,
            yy: item.ConversionYY
        }
        let uqfmWeek =
        {
            index: i,
            actuals: item.ConversionCW,
            qrf: item.ConversionTargetCW,
            qrfDiff: item.ConversionCWVsQrfDiff,
            vsQrf: item.ConversionCWVsQrf,
            ww: item.ConversionWW,
            type: item.mobile_or_desktop,
        }


        newState[SUMMARY_KPIS.BUY_CONVERSION].details.mvd.qtd.push(uqfm);

        newState[SUMMARY_KPIS.BUY_CONVERSION].details.mvd.week.push(uqfmWeek);


    }

}
export function processBuyConversionNewRepQTDData(g5, newState) {

    //Clear old Values

    newState[SUMMARY_KPIS.BUY_CONVERSION].details = { ...newState[SUMMARY_KPIS.BUY_CONVERSION].details, nvr: { qtd: [], week: [] } };

    newState[SUMMARY_KPIS.BUY_CONVERSION].details = { ...newState[SUMMARY_KPIS.BUY_CONVERSION].details, nvr: { qtd: [], week: [] } };



    for (let i = 0; i < g5.length; i++) {

        let item = g5[i];

        let uqfm = {
            index: i,
            actuals: item.ConversionActuals,
            qq: item.ConversionQQTY,
            qrf: item.ConversionTarget,
            qrfDiff: item.ConversionVsQrfDiff,
            type: item.new_or_repeat,
            vsQrf: item.ConversionVsQrf,
            yy: item.ConversionYY
        }
        let uqfmWeek =
        {
            index: i,
            actuals: item.ConversionCW,
            qrf: item.ConversionTargetCW,
            qrfDiff: item.ConversionCWVsQrfDiff,
            vsQrf: item.ConversionCWVsQrf,
            ww: item.ConversionWW,
            type: item.new_or_repeat,
        }


        newState[SUMMARY_KPIS.BUY_CONVERSION].details.nvr.qtd.push(uqfm);

        newState[SUMMARY_KPIS.BUY_CONVERSION].details.nvr.week.push(uqfmWeek);
    }

}
//MKTG Srouced
export function processBuyMKTSourcedSecondary(data, newState) {
    
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].value = data.MktgSourcedARRActual;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].target = data.MktgSourcedARRTarget;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].targetFQ = data.MktgSourcedARRTargetFQ;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].vsQrf = data.MktgSourcedARRVsQrf;
}
export function processBuyMKTSourcedMultichart(data, newState) {

    let weekFlag = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])


    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);

    let mktg = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }

    //Get Discover uqfm Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        //uqfm
        mktg.actual.push(item.MktgSourcedARRActual);
        mktg.target.push(item.MktgSourcedARRTarget);
        mktg.ly.push(item.MktgSourcedARRLY);
        mktg.lq.push(item.MktgSourcedARRLQ);
    };
    currentMulti = [mktg.actual, mktg.target, mktg.ly, mktg.lq];
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED]['details'].multichart = currentMulti;

}
export function processBuyMKTSourcedQTD(data, newState) {
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.qtdw.qtd[0].value = data.MktgSourcedARRActuals;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.qtdw.qtd[1].value = data.MktgSourcedARRTarget;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.qtdw.qtd[2].value = data.MktgSourcedARRVsQrfDiff
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.qtdw.qtd[3].value = data.MktgSourcedARRVsQrf;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.qtdw.qtd[4].value = data.MktgSourcedARRQQTY;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.qtdw.qtd[5].value = data.MktgSourcedARRYY;

    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.qtdw.week[0].value = data.MktgSourcedARRCW;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.qtdw.week[1].value = data.MktgSourcedARRTargetCW;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.qtdw.week[2].value = data.MktgSourcedARRCWVsQrfDiff;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.qtdw.week[3].value = data.MktgSourcedARRCWVsQrf;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.qtdw.week[4].value = data.MktgSourcedARRWW;

    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.stats[0].value = data.MktgSourcedARRVsQrf;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.stats[1].value = data.MktgSourcedARRQQTY;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.stats[2].value = data.MktgSourcedARRQQLY;
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.stats[3].value = data.MktgSourcedARRYY;
}
export function processBuyMKTSourcedGeoQTD(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.geo.qtd = [];
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.geo.week = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let mktg = {
            index: i,
            actuals: item.MktgSourcedARRActuals,
            marketArea: item.market_area_group,
            qq: item.MktgSourcedARRQQTY,
            qrf: item.MktgSourcedARRTarget,
            qrfDiff: item.MktgSourcedARRVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.MktgSourcedARRVsQrf,
            yy: item.MktgSourcedARRYY
        }
        let mktgWeek =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.MktgSourcedARRCW,
            qrf: item.MktgSourcedARRTargetCW,
            qrfDiff: item.MktgSourcedARRCWVsQrfDiff,
            vsQrf: item.MktgSourcedARRCWVsQrf,
            ww: item.MktgSourcedARRWW,
            type: item.geo_code,
        }

        newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.geo.qtd.push(mktg);
        newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.geo.week.push(mktgWeek);
    }
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.geo.qtd);
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.geo.week);
}
export function processBuyMKTSourcedMAQTD(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.market.qtd = [];
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.market.week = [];


    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let mktg = {
            index: i,
            actuals: item.MktgSourcedARRActuals,
            qq: item.MktgSourcedARRQQTY,
            qrf: item.MktgSourcedARRTarget,
            qrfDiff: item.MktgSourcedARRVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.MktgSourcedARRVsQrf,
            yy: item.MktgSourcedARRYY
        }
        let mktgWeek =
        {
            index: i,
            actuals: item.MktgSourcedARRCW,
            qrf: item.MktgSourcedARRTargetCW,
            qrfDiff: item.MktgSourcedARRCWVsQrfDiff,
            vsQrf: item.MktgSourcedARRCWVsQrf,
            ww: item.MktgSourcedARRWW,
            type: item.market_area_code,
        }
        newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.market.qtd.push(mktg);
        newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.market.week.push(mktgWeek);
    }
}



export function processBuyMKTSourcedChannelQTD(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details = { ...newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details, channel: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let mktg = {
            index: i,
            actuals: item.MktgSourcedARRActuals,
            qq: item.MktgSourcedARRQQTY,
            qrf: item.MktgSourcedARRTarget,
            qrfDiff: item.MktgSourcedARRVsQrfDiff,
            type: item.PM_channel,
            vsQrf: item.MktgSourcedARRVsQrf,
            yy: item.MktgSourcedARRYY
        }
        let mktgWeek =
        {
            index: i,
            actuals: item.MktgSourcedARRCW,
            qrf: item.MktgSourcedARRTargetCW,
            qrfDiff: item.MktgSourcedARRCWVsQrfDiff,
            vsQrf: item.MktgSourcedARRCWVsQrf,
            ww: item.MktgSourcedARRWW,
            type: item.PM_channel,
        }


        newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.channel.qtd.push(mktg);
        newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.channel.week.push(mktgWeek);
    }
}
export function processBuyMKTSourcedSegmentQTD(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.segment.qtd = [];
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.segment.week = [];


    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let mktg = {
            index: i,
            actuals: item.MktgSourcedARRActuals,
            qq: item.MktgSourcedARRQQTY,
            qrf: item.MktgSourcedARRTarget,
            qrfDiff: item.MktgSourcedARRVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.MktgSourcedARRVsQrf,
            yy: item.MktgSourcedARRYY
        }
        let mktgWeek =
        {
            index: i,
            actuals: item.MktgSourcedARRCW,
            qrf: item.MktgSourcedARRTargetCW,
            qrfDiff: item.MktgSourcedARRCWVsQrfDiff,
            vsQrf: item.MktgSourcedARRCWVsQrf,
            ww: item.MktgSourcedARRWW,
            type: item.segment_pivot,
        }
        newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.segment.qtd.push(mktg);
        newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.segment.week.push(mktgWeek);
    }
}
export function processBuyMKTSourcedProductQTD(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.product.qtd = [];
    newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.product.week = [];


    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let mktg = {
            index: i,
            actuals: item.MktgSourcedARRActuals,
            qq: item.MktgSourcedARRQQTY,
            qrf: item.MktgSourcedARRTarget,
            qrfDiff: item.MktgSourcedARRVsQrfDiff,
            type: item.product_category,
            vsQrf: item.MktgSourcedARRVsQrf,
            yy: item.MktgSourcedARRYY
        }
        let mktgWeek =
        {
            index: i,
            actuals: item.MktgSourcedARRCW,
            qrf: item.MktgSourcedARRTargetCW,
            qrfDiff: item.MktgSourcedARRCWVsQrfDiff,
            vsQrf: item.MktgSourcedARRCWVsQrf,
            ww: item.MktgSourcedARRWW,
            type: item.product_category,
        }
        newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.product.qtd.push(mktg);
        newState[SUMMARY_KPIS.BUY_MARKETING_SOURCED].details.product.week.push(mktgWeek);
    }
}
//END MKTg
// Paid Media Spend Sourced
export function processBuyPMSSSecondaryData(data, newState) {

    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].value = data.PMSpendBuyActual;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].target = data.PMSpendBuyTarget;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].targetFQ = data.PMSpendBuyTargetFQ;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].vsQrf = data.PMSpendBuyVsQrf;

}
export function processBuyPMSSMultichartData(data, newState) {

    let weekData = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])


    let newData = _.orderBy(weekData, ['weekNo'], ['asc']);

    let pm = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }


    //Get Discover G5 Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        //traffic
        pm.actual.push(item.PMSpendBuyActual);
        pm.target.push(item.PMSpendBuyTarget);
        pm.ly.push(item.PMSpendBuyLY);
        pm.lq.push(item.PMSpendBuyLQ);
    };

    currentMulti = [pm.actual, pm.target, pm.ly, pm.lq];

    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND]['details'].multichart = currentMulti;
}
export function processBuyPMSSQTDData(data, newState) {


    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.qtdw.qtd[0].value = data.PMSpendBuyActuals;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.qtdw.qtd[1].value = data.PMSpendBuyTarget;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.qtdw.qtd[2].value = data.PMSpendBuyVsQrfDiff
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.qtdw.qtd[3].value = data.PMSpendBuyVsQrf;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.qtdw.qtd[4].value = data.PMSpendBuyQQTY;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.qtdw.qtd[5].value = data.PMSpendBuyYY;

    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.qtdw.week[0].value = data.PMSpendBuyCW;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.qtdw.week[1].value = data.PMSpendBuyTargetCW;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.qtdw.week[2].value = data.PMSpendBuyCWVsQrfDiff;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.qtdw.week[3].value = data.PMSpendBuyCWVsQrf;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.qtdw.week[4].value = data.PMSpendBuyWW;

    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.stats[0].value = data.PMSpendBuyVsQrf;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.stats[1].value = data.PMSpendBuyQQTY;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.stats[2].value = data.PMSpendBuyQQLY;
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.stats[3].value = data.PMSpendBuyYY;

}
export function processBuyPMSSGeoQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details = { ...newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details, geo: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let pm = {
            index: i,
            actuals: item.PMSpendBuyActuals,
            marketArea: item.market_area_group,
            qq: item.PMSpendBuyQQTY,
            qrf: item.PMSpendBuyTarget,
            qrfDiff: item.PMSpendBuyVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.PMSpendBuyVsQrf,
            yy: item.PMSpendBuyYY
        }
        let pmWeek =
        {
            index: i,
            marketArea: item.market_area_group,
            actuals: item.PMSpendBuyCW,
            qrf: item.PMSpendBuyTargetCW,
            qrfDiff: item.PMSpendBuyCWVsQrfDiff,
            vsQrf: item.PMSpendBuyCWVsQrf,
            ww: item.PMSpendBuyWW,
            type: item.geo_code,
        }

        newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.geo.qtd.push(pm);
        newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.geo.week.push(pmWeek);
    }

    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.geo.qtd);
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.geo.week);
}
export function processBuyPMSSMarketQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details = { ...newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details, market: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let pm = {
            index: i,
            actuals: item.PMSpendBuyActuals,
            qq: item.PMSpendBuyQQTY,
            qrf: item.PMSpendBuyTarget,
            qrfDiff: item.PMSpendBuyVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.PMSpendBuyVsQrf,
            yy: item.PMSpendBuyYY
        }
        let pmWeek =
        {
            index: i,
            type: item.market_area_code,
            marketArea: item.market_area_code,
            actuals: item.PMSpendBuyCW,
            qrf: item.PMSpendBuyTargetCW,
            qrfDiff: item.PMSpendBuyCWVsQrfDiff,
            vsQrf: item.PMSpendBuyCWVsQrf,
            ww: item.PMSpendBuyWW,
        }


        newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.market.qtd.push(pm);
        newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.market.week.push(pmWeek);
    }
}

export function processBuyPMSSChannelQTDData(data, newState) {
    //Clear old Values
    newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details = { ...newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details, channel: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let pm = {
            index: i,
            actuals: item.PMSpendBuyActuals,
            qq: item.PMSpendBuyQQTY,
            qrf: item.PMSpendBuyTarget,
            qrfDiff: item.PMSpendBuyVsQrfDiff,
            type: item.PM_channel,
            vsQrf: item.PMSpendBuyVsQrf,
            yy: item.PMSpendBuyYY
        }
        let pmWeek =
        {
            index: i,
            type: item.PM_channel,
            actuals: item.PMSpendBuyCW,
            qrf: item.PMSpendBuyTargetCW,
            qrfDiff: item.PMSpendBuyCWVsQrfDiff,
            vsQrf: item.PMSpendBuyCWVsQrf,
            ww: item.PMSpendBuyWW,
        }


        newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.channel.qtd.push(pm);
        newState[SUMMARY_KPIS.BUY_PAID_MEDIASPEND].details.channel.week.push(pmWeek);
    }
}

export function processBuyLTVSourcedSecondary(data,newState) {
    console.log('Updating Redux Store LTV Secondary')
    newState[SUMMARY_KPIS.BUY_LTV_ROI].value = data.LTVROIActual;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].target = data.LTVROITarget;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].targetFQ = data.LTVROITargetFQ;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].vsQrf = data.LTVROIVsQrf;

}
export function processBuyLTVSourcedMultichart(data,newState) {
    let weekData = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])


    let newData = _.orderBy(weekData, ['weekNo'], ['asc']);

    let ltv = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }


    //Get Discover G5 Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        //traffic
        ltv.actual.push(item.LTVROIActual);
        ltv.target.push(item.LTVROITarget);
        ltv.ly.push(item.LTVROILY);
        ltv.lq.push(item.LTVROILQ);
    };

    currentMulti = [ltv.actual, ltv.target, ltv.ly, ltv.lq];

    newState[SUMMARY_KPIS.BUY_LTV_ROI]['details'].multichart = currentMulti;
}
export function processBuyLTVSourcedQTD(data,newState) {

    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.qtdw.qtd[0].value = data.LTVROIActual;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.qtdw.qtd[1].value = data.LTVROITarget;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.qtdw.qtd[2].value = data.LTVROIVsQrfDiff
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.qtdw.qtd[3].value = data.LTVROIVsQrf;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.qtdw.qtd[4].value = data.LTVROIQQTY;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.qtdw.qtd[5].value = data.LTVROIYY;

    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.qtdw.week[0].value = data.LTVROIActualCW;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.qtdw.week[1].value = data.LTVROITargetCW;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.qtdw.week[2].value = data.LTVROICWVsQrfDiff;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.qtdw.week[3].value = data.LTVROICWVsQrf;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.qtdw.week[4].value = data.LTVROIWW;

    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.stats[0].value = data.LTVROIVsQrf;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.stats[1].value = data.LTVROIQQTY;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.stats[2].value = data.LTVROIQQLY;
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.stats[3].value = data.LTVROIYY;
}
export function processBuyLTVSourcedGeoQTD(data,newState) {
//Clear old Values
newState[SUMMARY_KPIS.BUY_LTV_ROI].details = { ...newState[SUMMARY_KPIS.BUY_LTV_ROI].details, geo: { qtd: [], week: [] } };

for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let ltv = {
        index: i,
        actuals: item.LTVROIActuals,
        marketArea: item.market_area_group,
        qq: item.LTVROIQQTY,
        qrf: item.LTVROITarget,
        qrfDiff: item.LTVROIVsQrfDiff,
        type: item.geo_code,
        vsQrf: item.LTVROIVsQrf,
        yy: item.LTVROIYY
    }
    let ltvWeek =
    {
        index: i,
        marketArea: item.market_area_group,
        actuals: item.LTVROICW,
        qrf: item.LTVROITargetCW,
        qrfDiff: item.LTVROICWVsQrfDiff,
        vsQrf: item.LTVROICWVsQrf,
        ww: item.LTVROIWW,
        type: item.geo_code,
    }

    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.geo.qtd.push(ltv);
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.geo.week.push(ltvWeek);
}

newState[SUMMARY_KPIS.BUY_LTV_ROI].details.geo.qtd = processQTDOrder(newState[SUMMARY_KPIS.BUY_LTV_ROI].details.geo.qtd);
newState[SUMMARY_KPIS.BUY_LTV_ROI].details.geo.week = processQTDOrder(newState[SUMMARY_KPIS.BUY_LTV_ROI].details.geo.week);

}
export function processBuyLTVSourcedMAQTD(data,newState) {
//Clear old Values
newState[SUMMARY_KPIS.BUY_LTV_ROI].details = { ...newState[SUMMARY_KPIS.BUY_LTV_ROI].details, market: { qtd: [], week: [] } };

for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let ltv = {
        index: i,
        actuals: item.LTVROIActuals,
        qq: item.LTVROIQQTY,
        qrf: item.LTVROITarget,
        qrfDiff: item.LTVROIVsQrfDiff,
        type: item.market_area_code,
        vsQrf: item.LTVROIVsQrf,
        yy: item.LTVROIYY
    }
    let ltvWeek =
    {
        index: i,
        type: item.market_area_code,
        marketArea: item.market_area_code,
        actuals: item.LTVROICW,
        qrf: item.LTVROITargetCW,
        qrfDiff: item.LTVROICWVsQrfDiff,
        vsQrf: item.LTVROICWVsQrf,
        ww: item.LTVROIWW,
    }


    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.market.qtd.push(ltv);
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.market.week.push(ltvWeek);
}
}
export function processBuyLTVSourcedProductQTD(data,newState) {
//Clear old Values
newState[SUMMARY_KPIS.BUY_LTV_ROI].details = { ...newState[SUMMARY_KPIS.BUY_LTV_ROI].details, product: { qtd: [], week: [] } };

for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let ltv = {
        index: i,
        actuals: item.LTVROIActuals,
        qq: item.LTVROIQQTY,
        qrf: item.LTVROITarget,
        qrfDiff: item.LTVROIVsQrfDiff,
        type: item.product_category,
        vsQrf: item.LTVROIVsQrf,
        yy: item.LTVROIYY
    }
    let ltvWeek =
    {
        index: i,
        type: item.product_category,
        marketArea: item.market_area_code,
        actuals: item.LTVROICW,
        qrf: item.LTVROITargetCW,
        qrfDiff: item.LTVROICWVsQrfDiff,
        vsQrf: item.LTVROICWVsQrf,
        ww: item.LTVROIWW,
    }


    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.product.qtd.push(ltv);
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.product.week.push(ltvWeek);
}
}
export function processBuyLTVSourcedSegmentQTD(data,newState) {
//Clear old Values
newState[SUMMARY_KPIS.BUY_LTV_ROI].details = { ...newState[SUMMARY_KPIS.BUY_LTV_ROI].details, segment: { qtd: [], week: [] } };

for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let ltv = {
        index: i,
        actuals: item.LTVROIActuals,
        qq: item.LTVROIQQTY,
        qrf: item.LTVROITarget,
        qrfDiff: item.LTVROIVsQrfDiff,
        type: item.segment_pivot,
        vsQrf: item.LTVROIVsQrf,
        yy: item.LTVROIYY
    }
    let ltvWeek =
    {
        index: i,
        type: item.segment_pivot,
        marketArea: item.market_area_code,
        actuals: item.LTVROICW,
        qrf: item.LTVROITargetCW,
        qrfDiff: item.LTVROICWVsQrfDiff,
        vsQrf: item.LTVROICWVsQrf,
        ww: item.LTVROIWW,
    }


    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.segment.qtd.push(ltv);
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.segment.week.push(ltvWeek);
}
}
export function processBuyLTVSourcedSubscriptionQTD(data,newState) {
//Clear old Values
newState[SUMMARY_KPIS.BUY_LTV_ROI].details = { ...newState[SUMMARY_KPIS.BUY_LTV_ROI].details, subscription: { qtd: [], week: [] } };

for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let ltv = {
        index: i,
        actuals: item.LTVROIActuals,
        qq: item.LTVROIQQTY,
        qrf: item.LTVROITarget,
        qrfDiff: item.LTVROIVsQrfDiff,
        type: item.subscription_offering,
        vsQrf: item.LTVROIVsQrf,
        yy: item.LTVROIYY
    }
    let ltvWeek =
    {
        index: i,
        type: item.subscription_offering,
        marketArea: item.market_area_code,
        actuals: item.LTVROICW,
        qrf: item.LTVROITargetCW,
        qrfDiff: item.LTVROICWVsQrfDiff,
        vsQrf: item.LTVROICWVsQrf,
        ww: item.LTVROIWW,
    }


    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.subscription.qtd.push(ltv);
    newState[SUMMARY_KPIS.BUY_LTV_ROI].details.subscription.week.push(ltvWeek);
}
}
//Gross
export function processBuyGrossSecondaryData(g1, newState) {

    // //Gross New Arr
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].value = g1.GrossARRActual;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].targetFQ = g1.GrossARRTargetFQ;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].target = g1.GrossARRTarget;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].vsQrf = g1.GrossVsQrf;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].value = g1.GrossUnitsActual;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].targetFQ = g1.GrossUnitsTargetFQ;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].target = g1.GrossUnitsTarget;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].vsQrf = g1.GrossUnitsVsQrf;

}
export function processBuyGrossMultichart(newState, data) {

    let weekFlag = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])

    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);

    let grossArr = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }

    let grossUnitsArr = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }
    //Get Financial Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        grossArr.actual.push(item.GrossARRActual);
        grossArr.target.push(item.GrossARRTargetFQ);
        grossArr.ly.push(item.GrossARRLY);
        grossArr.lq.push(item.GrossARRLQ);

        grossUnitsArr.actual.push(item.GrossUnitsActual);
        grossUnitsArr.target.push(item.GrossUnitsTargetFQ);
        grossUnitsArr.ly.push(item.GrossUnitsLY);
        grossUnitsArr.lq.push(item.GrossUnitsLQ);

    };




    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR]['details'].multichart = [grossArr.actual, grossArr.target, grossArr.ly, grossArr.lq];
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS]['details'].multichart = [grossUnitsArr.actual, grossUnitsArr.target, grossUnitsArr.ly, grossUnitsArr.lq];

}

export function processBuyGrossQTD(newState, data) {
    newState = Object.assign([], newState);
    console.log(data)
    // State Order: Actual, Units, QRF, QRFDiff, VSQrf, QQ, YY
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qtdw.qtd[0].value = data[0].GrossActuals;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qtdw.qtd[1].value = data[0].GrossTarget;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qtdw.qtd[2].value = data[0].GrossVsQrfDiff;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qtdw.qtd[3].value = data[0].GrossARRVsQrf;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qtdw.qtd[4].value = data[0].GrossARRQQTY;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qtdw.qtd[5].value = data[0].GrossARRYY;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qtdw.week[0].value = data[0].GrossARRCW
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qtdw.week[1].value = data[0].GrossARRTargetCW
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qtdw.week[2].value = data[0].GrossCWVsQrfDiff;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qtdw.week[3].value = data[0].GrossCWVsQrf;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qtdw.week[4].value = data[0].GrossWW;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.stats[0].value = data[0].GrossARRVsQrf;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.stats[1].value = data[0].GrossARRQQTY;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.stats[2].value = data[0].GrossARRQQLY;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.stats[3].value = data[0].GrossARRYY;


    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qtdw.qtd[0].value = data[0].GrossUnitsActuals;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qtdw.qtd[1].value = data[0].GrossUnitsTarget;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qtdw.qtd[2].value = data[0].GrossUnitsVsQrfDiff;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qtdw.qtd[3].value = data[0].GrossUnitsVsQrf;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qtdw.qtd[4].value = data[0].GrossUnitsQQTY;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qtdw.qtd[5].value = data[0].GrossUnitsYY;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qtdw.week[0].value = data[0].GrossUnitsCW
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qtdw.week[1].value = data[0].GrossUnitsTargetCW;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qtdw.week[2].value = data[0].GrossUnitsCWVsQrfDiff;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qtdw.week[3].value = data[0].GrossUnitsCWVsQrf;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qtdw.week[4].value = data[0].GrossUnitsWW;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.stats[0].value = data[0].GrossUnitsVsQrf;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.stats[1].value = data[0].GrossUnitsQQTY;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.stats[2].value = data[0].GrossUnitsQQLY;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.stats[3].value = data[0].GrossUnitsYY;

}
export function processBuyGrossGeoQTD(newState, data) {
    // console.log('YO', data);
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_group,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.geo_code,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let grossUnits = {
            index: i,
            actuals: item.GrossUnitsActuals,
            marketArea: item.market_area_group,
            qq: item.GrossUnitsQQTY,
            qrf: item.GrossUnitsTarget,
            qrfDiff: item.GrossUnitsVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.GrossUnitsVsQrf,
            yy: item.GrossUnitsYY
        }


        item1.push(grossUnits);
        item2.push(gross);

    }

    // console.log('YO', item1);
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.geo.qtd = processQTDOrder(item2);
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.geo.qtd = processQTDOrder(item1);

}
export function processBuyGrossQFMTypeQTD(newState, data) {
    //Clear old Values
    
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details = { ...newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details, qfm: { qtd: [], week: [] } };
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details = { ...newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details, qfm: { qtd: [], week: [] } };   

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
      
        
        
        let newARRQFM = {
            index: i,
            actuals: item.GrossActuals,
            type: item.qfm_type,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let newARRQFMWeek =
        {
            index: i,
            type: item.qfm_type,
            actuals: item.GrossARRCW,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW,
        }
        let newSubQFM = {
            index: i,
            actuals: item.GrossUnitsActuals,
            type: item.qfm_type,
            qq: item.GrossUnitsQQTY,
            qrf: item.GrossUnitsTarget,
            qrfDiff: item.GrossUnitsVsQrfDiff,
            vsQrf: item.GrossUnitsVsQrf,
            yy: item.GrossUnitsYY
        }
        let newSubQFMWeek =
        {
            index: i,
            type: item.qfm_type,
            actuals: item.GrossUnitsCW,
            qrf: item.GrossUnitsTargetCW,
            qrfDiff: item.GrossUnitsCWVsQrfDiff,
            vsQrf: item.GrossUnitsCWVsQrf,
            ww: item.GrossUnitsWW,
        }
       
        newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qfm.qtd.push(newARRQFM);
        newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.qfm.week.push(newARRQFMWeek);

        newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qfm.qtd.push(newSubQFM);
        newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.qfm.week.push(newSubQFMWeek);
        

    }
}

/** Custom function to Reorder QTD Details with row always last */
function processQTDOrder(data) {
    console.log('Processing QTD Order: ', data);
    if (data.length !== 0) {
        // check if theres ROW records
        let groupByMarketArea = _.groupBy(data, function (item) { return item.marketArea });
        let arr = Object.entries(groupByMarketArea);
        let rowsArr = groupByMarketArea.ROW;
        let compiledArray = [];
        let NewArr = [];
        let removedRows = _.filter(arr, function (o) {
            return o[0] !== 'ROW';
        });

        //  console.log('YO', removedRows);
        for (let i = 0; i < removedRows.length; i++) {
            let items = removedRows[i][1];
            for (let j = 0; j < items.length; j++) {
                NewArr.push(items[j]);
            }
        }

        for (let k = 0; k < NewArr.length; k++) {
            compiledArray.push(NewArr[k]);
            let toFind = NewArr[k];
            for (let a = 0; a < NewArr.length; a++) {
                if (NewArr[a].type === toFind.type && NewArr[a] !== toFind) {
                    compiledArray.push(NewArr[a]);
                    NewArr.splice(a, 1);
                }
            }
            for (let n = 0; n < rowsArr.length; n++) {
                if (toFind.type === rowsArr[n].type) {
                    compiledArray.push(rowsArr[n]);
                    rowsArr.splice(n, 1);
                }
            }
        }
        // console.log(compiledArray.concat(rowsArr));
        return compiledArray.concat(rowsArr);
    } else {
        return [];
    }


}

export function processBuyGrossGeoWeek(newState, data) {
    // console.log(data);
    //Clear old Values

    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }

        let grossUnits = {
            index: i,
            actuals: item.GrossUnitsCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.GrossUnitsTargetCW,
            qrfDiff: item.GrossUnitsCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.GrossUnitsCWVsQrf,
            ww: item.GrossUnitsWW
        }

        item2.push(gross);
        item3.push(grossUnits);
    }
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.geo.week = processQTDOrder(item2);
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.geo.week = processQTDOrder(item3);

}
export function processBuyGrossMarketQTD(newState, data) {

    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let gross = {
            index: i,
            actuals: item.GrossActuals,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.market_area_code,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let grossUnits = {
            index: i,
            actuals: item.GrossUnitsActuals,
            qq: item.GrossUnitsQQTY,
            qrf: item.GrossUnitsTarget,
            qrfDiff: item.GrossUnitsVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.GrossUnitsVsQrf,
            yy: item.GrossUnitsYY
        }


        item1.push(grossUnits);
        item2.push(gross);

    }

    // console.log('YO', item1);
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.market.qtd = item2;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.market.qtd = item1;

}
export function processBuyGrossMarketWeek(newState, data) {
    //Clear old Values
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }

        let grossUnits = {
            index: i,
            actuals: item.GrossUnitsCW,
            units: item.GrossUnitsCW,
            qrf: item.GrossUnitsTargetCW,
            qrfDiff: item.GrossUnitsCWVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.GrossUnitsCWVsQrf,
            ww: item.GrossUnitsWW
        }

        item2.push(gross);
        item3.push(grossUnits);
    }
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.market.week = item2;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.market.week = item3;
}
export function processBuyGrossrouteQTD(newState, data) {

    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_group,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.route_to_market,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let grossUnits = {
            index: i,
            actuals: item.GrossUnitsActuals,
            marketArea: item.market_area_group,
            qq: item.GrossUnitsQQTY,
            qrf: item.GrossUnitsTarget,
            qrfDiff: item.GrossUnitsVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.GrossUnitsVsQrf,
            yy: item.GrossUnitsYY
        }


        item1.push(grossUnits);
        item2.push(gross);

    }

    // console.log('YO', item1);
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.route.qtd = item2;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.route.qtd = item1;

}
export function processBuyGrossrouteWeek(newState, data) {
    //Clear old Values
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }

        let grossUnits = {
            index: i,
            actuals: item.GrossUnitsCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.GrossUnitsTargetCW,
            qrfDiff: item.GrossUnitsCWVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.GrossUnitsCWVsQrf,
            ww: item.GrossUnitsWW
        }

        item2.push(gross);
        item3.push(grossUnits);
    }
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.route.week = item2;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.route.week = item3;
}
export function processBuyGrossSegmentQTD(newState, data) {

    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_group,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.segment_pivot,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let grossUnits = {
            index: i,
            actuals: item.GrossUnitsActuals,
            marketArea: item.market_area_group,
            qq: item.GrossUnitsQQTY,
            qrf: item.GrossUnitsTarget,
            qrfDiff: item.GrossUnitsVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.GrossUnitsVsQrf,
            yy: item.GrossUnitsYY
        }


        item1.push(grossUnits);
        item2.push(gross);

    }

    // console.log('YO', item1);
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.segment.qtd = item2;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.segment.qtd = item1;

}
export function processBuyGrossSegmentWeek(newState, data) {
    //Clear old Values
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }

        let grossUnits = {
            index: i,
            actuals: item.GrossUnitsCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.GrossUnitsTargetCW,
            qrfDiff: item.GrossUnitsCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.GrossUnitsCWVsQrf,
            ww: item.GrossUnitsWW
        }

        item2.push(gross);
        item3.push(grossUnits);
    }
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.segment.week = item2;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.segment.week = item3;

}
export function processBuyGrossproductQTD(newState, data) {

    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let gross = {
            index: i,
            actuals: item.GrossActuals,
            marketArea: item.market_area_group,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.product_category,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }
        let grossUnits = {
            index: i,
            actuals: item.GrossUnitsActuals,
            marketArea: item.market_area_group,
            qq: item.GrossUnitsQQTY,
            qrf: item.GrossUnitsTarget,
            qrfDiff: item.GrossUnitsVsQrfDiff,
            type: item.product_category,
            vsQrf: item.GrossUnitsVsQrf,
            yy: item.GrossUnitsYY
        }


        item1.push(grossUnits);
        item2.push(gross);

    }

    // console.log('YO', item1);
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.product.qtd = item2;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.product.qtd = item1;

}
export function processBuyGrossProductWeek(newState, data) {
    //Clear old Values
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let gross = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.product_category,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }

        let grossUnits = {
            index: i,
            actuals: item.GrossUnitsCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.GrossUnitsTargetCW,
            qrfDiff: item.GrossUnitsCWVsQrfDiff,
            type: item.product_category,
            vsQrf: item.GrossUnitsCWVsQrf,
            ww: item.GrossUnitsWW
        }

        item2.push(gross);
        item3.push(grossUnits);
    }
    newState[SUMMARY_KPIS.BUY_GROSS_NEWARR].details.product.week = item2;
    newState[SUMMARY_KPIS.BUY_GROSS_NEWUNITS].details.product.week = item3;

}

export function processUseSecondaryData(data, newState, cumuData) {
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].value = data.ActivatedActual;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].targetFQ = data.ActivatedTargetFQ;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].target = data.ActivatedTarget;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].vsQrf = data.ActivatedVsQRF;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].cumuMembers = cumuData.CumuPaidMembersActual;

    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].value = data.Week04WAUActual;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].targetFQ = data.Week04WAUTargetFQ;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].target = data.Week04WAUTarget;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].vsQrf = data.Week04WAUVsQRF;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].cumuMembers = cumuData.CumuPaidMembersActual;

    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].value = data.PaidMAUActual;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].targetFQ = data.PaidMAUTargetFQ;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].target = data.PaidMAUTarget;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].vsQrf = data.PaidMAUVsQrf;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].cumuMembers = cumuData.CumuPaidMembersActual;

    newState[SUMMARY_KPIS.USE_LOW_CEI].value = data.LowCEIActual;
    newState[SUMMARY_KPIS.USE_LOW_CEI].targetFQ = data.LowCEITargetFQ;
    newState[SUMMARY_KPIS.USE_LOW_CEI].target = data.LowCEITarget;
    newState[SUMMARY_KPIS.USE_LOW_CEI].vsQrf = data.LowCEIVsQRF;
    newState[SUMMARY_KPIS.USE_LOW_CEI].cumuMembers = cumuData.CumuPaidMembersActual;

    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].value = data.MediumCEIActual;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].targetFQ = data.MediumCEITargetFQ;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].target = data.MediumCEITarget;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].vsQrf = data.MediumCEIVsQRF;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].cumuMembers = cumuData.CumuPaidMembersActual;


    newState[SUMMARY_KPIS.USE_HIGH_CEI].value = data.HighCEIActual;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].targetFQ = data.HighCEITargetFQ;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].target = data.HighCEITarget;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].vsQrf = data.HighCEIVsQRF;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].cumuMembers = cumuData.CumuPaidMembersActual;

    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].value = data.ZeroCEIActual;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].targetFQ = data.ZeroCEITargetFQ;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].target = data.ZeroCEITarget;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].vsQrf = data.ZeroCEIVsQRF;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].cumuMembers = cumuData.CumuPaidMembersActual;

    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].value = data.RepeatMAUActual;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].targetFQ = data.RepeatMAUTargetFQ;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].target = data.RepeatMAUTarget;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].vsQrf = data.RepeatMAUVsQRF;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].cumuMembers = cumuData.CumuPaidMembersActual;
    

}
export function processUseMultichartData(data, newState) {

    let weekFlag = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])

    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);

    let activated = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }
    let wk4 = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }

    let monthreturn  = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }
    let lowcei = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }

    let highcei = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }

    let mediumcei = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }

    let rum = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }
    let zerocei = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }

   

    //Get Financial Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        activated.actual.push(item.ActivatedActual);
        activated.target.push(item.ActivatedTarget);
        activated.ly.push(item.ActivatedLY);
        activated.lq.push(item.ActivatedLQ);

        wk4.actual.push(item.Week04WAUActual);
        wk4.target.push(item.Week04WAUTarget);
        wk4.ly.push(item.Week04WAULY);
        wk4.lq.push(item.Week04WAULQ);

        monthreturn.actual.push(item.PaidMAUActual);
        monthreturn.target.push(item.PaidMAUTarget);
        monthreturn.ly.push(item.PaidMAULY);
        monthreturn.lq.push(item.PaidMAULQ);

        lowcei.actual.push(item.LowCEIActual);
        lowcei.target.push(item.LowCEITarget);
        lowcei.ly.push(item.LowCEILY);
        lowcei.lq.push(item.LowCIELQ);

        highcei.actual.push(item.HighCEIActual);
        highcei.target.push(item.HighCEITarget);
        highcei.ly.push(item.HighCEILY);
        highcei.lq.push(item.HighCEILQ);

        mediumcei.actual.push(item.MediumCEIActual);
        mediumcei.target.push(item.MediumCEITarget);
        mediumcei.ly.push(item.MediumCEILY);
        mediumcei.lq.push(item.MediumCEILQ);

        rum.actual.push(item.RepeatMAUActual);
        rum.target.push(item.RepeatMAUTarget);
        rum.ly.push(item.RepeatMAULY);
        rum.lq.push(item.RepeatMAULQ);

        zerocei.actual.push(item.ZeroCEIActual);
        zerocei.target.push(item.ZeroCEITarget);
        zerocei.ly.push(item.ZeroCEILY);
        zerocei.lq.push(item.ZeroCEILQ);
        
 
        
    };



    console.log('Multichart', activated, zerocei, rum, monthreturn, lowcei, highcei, mediumcei, wk4)

    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED]['details'].multichart = [activated.actual, activated.target, activated.ly, activated.lq];
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI]['details'].multichart = [zerocei.actual, zerocei.target, zerocei.ly, zerocei.lq];
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU]['details'].multichart = [rum.actual, rum.target, rum.ly, rum.lq];
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE]['details'].multichart = [monthreturn.actual, monthreturn.target, monthreturn.ly, monthreturn.lq];
    newState[SUMMARY_KPIS.USE_LOW_CEI]['details'].multichart = [lowcei.actual, lowcei.target, lowcei.ly, lowcei.lq];
    newState[SUMMARY_KPIS.USE_HIGH_CEI]['details'].multichart = [highcei.actual, highcei.target, highcei.ly, highcei.lq];
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI]['details'].multichart = [mediumcei.actual, mediumcei.target, mediumcei.ly, mediumcei.lq];
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE]['details'].multichart = [wk4.actual, wk4.target, wk4.ly, wk4.lq];

}
export function processUseQTDData(data, newState) {

    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.qtdw.qtd[0].value = data[0].ActivatedActual;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.qtdw.qtd[1].value = data[0].ActivatedTarget;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.qtdw.qtd[2].value = data[0].ActivatedVsQRFDiff;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.qtdw.qtd[3].value = data[0].ActivatedVsQrf;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.qtdw.qtd[4].value = data[0].ActivatedQQTY;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.qtdw.qtd[5].value = data[0].ActivatedYY;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.qtdw.week[0].value = data[0].ActivatedActual;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.qtdw.week[1].value = data[0].ActivatedTarget;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.qtdw.week[2].value = data[0].ActivatedVsQRFDiff;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.qtdw.week[3].value = data[0].ActivatedVsQrf;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.qtdw.week[4].value = data[0].ActivatedWW;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.stats[0].value = data[0].ActivatedVsQrf;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.stats[1].value = data[0].ActivatedQQTY;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.stats[2].value = data[0].ActivatedQQLY;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.stats[3].value = data[0].ActivatedYY;

    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.qtdw.qtd[0].value = data[0].PaidMAUActual;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.qtdw.qtd[1].value = data[0].PaidMAUTarget;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.qtdw.qtd[2].value = data[0].PaidMAUVsQRFDiff;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.qtdw.qtd[3].value = data[0].PaidMAUVsQrf;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.qtdw.qtd[4].value = data[0].PaidMAUQQTY;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.qtdw.qtd[5].value = data[0].PaidMAUYY;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.qtdw.week[0].value = data[0].PaidMAUActual;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.qtdw.week[1].value = data[0].PaidMAUTarget;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.qtdw.week[2].value = data[0].PaidMAUVsQRFDiff;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.qtdw.week[3].value = data[0].PaidMAUVsQrf;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.qtdw.week[4].value = data[0].PaidMAUWW;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.stats[0].value = data[0].PaidMAUVsQrf;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.stats[1].value = data[0].PaidMAUQQTY;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.stats[2].value = data[0].PaidMAUQQLY;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.stats[3].value = data[0].PaidMAUYY;

    newState[SUMMARY_KPIS.USE_LOW_CEI].details.qtdw.qtd[0].value = data[0].LowCEIActual;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.qtdw.qtd[1].value = data[0].LowCEITarget;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.qtdw.qtd[2].value = data[0].LowCEIVsQRFDiff;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.qtdw.qtd[3].value = data[0].LowCEIVsQrf;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.qtdw.qtd[4].value = data[0].LowCEIQQTY;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.qtdw.qtd[5].value = data[0].LowCEIYY;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.qtdw.week[0].value = data[0].LowCEIActual;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.qtdw.week[1].value = data[0].LowCEITarget;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.qtdw.week[2].value = data[0].LowCEIVsQRFDiff;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.qtdw.week[3].value = data[0].LowCEIVsQrf;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.qtdw.week[4].value = data[0].LowCEIWW;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.stats[0].value = data[0].LowCEIVsQrf;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.stats[1].value = data[0].LowCEIQQTY;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.stats[2].value = data[0].LowCEIQQLY;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.stats[3].value = data[0].LowCEIYY;

    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.qtdw.qtd[0].value = data[0].MediumCEIActual;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.qtdw.qtd[1].value = data[0].MediumCEITarget;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.qtdw.qtd[2].value = data[0].MediumCEIVsQRFDiff;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.qtdw.qtd[3].value = data[0].MediumCEIVsQrf;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.qtdw.qtd[4].value = data[0].MediumCEIQQTY;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.qtdw.qtd[5].value = data[0].MediumCEIYY;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.qtdw.week[0].value = data[0].MediumCEIActual;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.qtdw.week[1].value = data[0].MediumCEITarget;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.qtdw.week[2].value = data[0].MediumCEIVsQRFDiff;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.qtdw.week[3].value = data[0].MediumCEIVsQrf;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.qtdw.week[4].value = data[0].MediumCEIWW;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.stats[0].value = data[0].MediumCEIVsQrf;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.stats[1].value = data[0].MediumCEIQQTY;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.stats[2].value = data[0].MediumCEIQQLY;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.stats[3].value = data[0].MediumCEIYY;

    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.qtdw.qtd[0].value = data[0].RepeatMAUActual;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.qtdw.qtd[1].value = data[0].RepeatMAUTarget;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.qtdw.qtd[2].value = data[0].RepeatMAUVsQRFDiff;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.qtdw.qtd[3].value = data[0].RepeatMAUVsQrf;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.qtdw.qtd[4].value = data[0].RepeatMAUQQTY;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.qtdw.qtd[5].value = data[0].RepeatMAUYY;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.qtdw.week[0].value = data[0].RepeatMAUActual;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.qtdw.week[1].value = data[0].RepeatMAUTarget;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.qtdw.week[2].value = data[0].RepeatMAUVsQRFDiff;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.qtdw.week[3].value = data[0].RepeatMAUQQTY;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.qtdw.week[4].value = data[0].RepeatMAUWW;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.stats[0].value = data[0].RepeatMAUVsQrf;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.stats[1].value = data[0].RepeatMAUQQTY;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.stats[2].value = data[0].RepeatMAUQQLY;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.stats[3].value = data[0].RepeatMAUYY;

    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.qtdw.qtd[0].value = data[0].HighCEIActual;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.qtdw.qtd[1].value = data[0].HighCEITarget;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.qtdw.qtd[2].value = data[0].HighCEIVsQRFDiff;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.qtdw.qtd[3].value = data[0].HighCEIVsQrf;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.qtdw.qtd[4].value = data[0].HighCEIQQTY;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.qtdw.qtd[5].value = data[0].HighCEIYY;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.qtdw.week[0].value = data[0].HighCEITarget;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.qtdw.week[1].value = data[0].HighCEIVsQRFDiff;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.qtdw.week[2].value = data[0].HighCEIVsQRFDiff;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.qtdw.week[3].value = data[0].HighCEIVsQrf;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.qtdw.week[4].value = data[0].HighCEIWW;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.stats[0].value = data[0].HighCEIVsQrf;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.stats[1].value = data[0].HighCEIQQTY;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.stats[2].value = data[0].HighCEIQQLY;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.stats[3].value = data[0].HighCEIYY;

    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.qtdw.qtd[0].value = data[0].Week04WAUActual;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.qtdw.qtd[1].value = data[0].Week04WAUTarget;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.qtdw.qtd[2].value = data[0].Week04WAUVsQRFDiff;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.qtdw.qtd[3].value = data[0].Week04WAUVsQrf;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.qtdw.qtd[4].value = data[0].Week04WAUQQTY;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.qtdw.qtd[5].value = data[0].Week04WAUYY;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.qtdw.week[0].value = data[0].Week04WAUActual;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.qtdw.week[1].value = data[0].Week04WAUTarget;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.qtdw.week[2].value = data[0].Week04WAUVsQRFDiff;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.qtdw.week[3].value = data[0].Week04WAUVsQrf;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.qtdw.week[4].value = data[0].Week04WAUWW;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.stats[0].value = data[0].Week04WAUVsQrf;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.stats[1].value = data[0].Week04WAUQQTY;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.stats[2].value = data[0].Week04WAUQQLY;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.stats[3].value = data[0].Week04WAUYY;

    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.qtdw.qtd[0].value = data[0].ZeroCEIActual;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.qtdw.qtd[1].value = data[0].ZeroCEITarget;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.qtdw.qtd[2].value = data[0].ZeroCEIVsQRFDiff;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.qtdw.qtd[3].value = data[0].ZeroCEIVsQrf;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.qtdw.qtd[4].value = data[0].ZeroCEIQQTY;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.qtdw.qtd[5].value = data[0].ZeroCEIYY;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.qtdw.week[0].value = data[0].ZeroCEIActual;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.qtdw.week[1].value = data[0].ZeroCEITarget;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.qtdw.week[2].value = data[0].ZeroCEIVsQRFDiff;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.qtdw.week[3].value = data[0].ZeroCEIVsQrf;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.qtdw.week[4].value = data[0].ZeroCEIWW;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.stats[0].value = data[0].ZeroCEIVsQrf;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.stats[1].value = data[0].ZeroCEIQQTY;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.stats[2].value = data[0].ZeroCEIQQLY;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.stats[3].value = data[0].ZeroCEIYY;
}
export function processUseGeoQTDData(data, newState) {

    let item1 = [], item1Week = [],
        item2 = [], item2Week = [],
        item3 = [], item3Week = [],
        item4 = [], item4Week = [],
        item5 = [], item5Week = [],
        item6 = [], item6Week = [],
        item7 = [], item7Week = [],
        item8 = [], item8Week = []

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let activated = {
            index: i,
            actuals: item.ActivatedActual,
            marketArea: item.market_area_group,
            qq: item.ActivatedQQTY,
            qrf: item.ActivatedTarget,
            qrfDiff: item.ActivatedVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.ActivatedVsQRF,
            yy: item.ActivatedYY
        }
        let activatedWeek = {
            index: i,
            actuals: item.ActivatedActual,
            marketArea: item.market_area_group,
            qq: item.ActivatedQQTY,
            qrf: item.ActivatedTarget,
            qrfDiff: item.ActivatedVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.ActivatedVsQRF,
            ww: item.ActivatedWW
        }

        let monthreturn = {
            index: i,
            actuals: item.PaidMAUActual,
            marketArea: item.market_area_group,
            qq: item.PaidMAUQQTY,
            qrf: item.PaidMAUTarget,
            qrfDiff: item.PaidMAUVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.PaidMAUVsQrf,
            yy: item.PaidMAUYY
        }
        let monthreturnWeek = {
            index: i,
            actuals: item.PaidMAUActual,
            marketArea: item.market_area_group,
            qq: item.PaidMAUQQTY,
            qrf: item.PaidMAUTarget,
            qrfDiff: item.PaidMAUVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.PaidMAUVsQrf,
            ww: item.PaidMAUWW
        }

        let rum = {
            index: i,
            actuals: item.RepeatMAUActual,
            marketArea: item.market_area_group,
            qq: item.RepeatMAUQQTY,
            qrf: item.RepeatMAUTarget,
            qrfDiff: item.RepeatMAUVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.RepeatMAUVsQrf,
            yy: item.RepeatMAUYY
        }
        let rumWeek = {
            index: i,
            actuals: item.RepeatMAUActual,
            marketArea: item.market_area_group,
            qq: item.RepeatMAUQQTY,
            qrf: item.RepeatMAUTarget,
            qrfDiff: item.RepeatMAUVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.RepeatMAUVsQrf,
            ww: item.RepeatMAUWW
        }

        let lowcei = {
            index: i,
            actuals: item.LowCEIActual,
            marketArea: item.market_area_group,
            qq: item.LowCEIQQTY,
            qrf: item.LowCEITarget,
            qrfDiff: item.LowCEIVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.LowCEIVsQRF,
            yy: item.LowCEIYY
        }
        let lowceiWeek = {
            index: i,
            actuals: item.LowCEIActual,
            marketArea: item.market_area_group,
            qq: item.LowCEIQQTY,
            qrf: item.LowCEITarget,
            qrfDiff: item.LowCEIVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.LowCEIVsQRF,
            ww: item.LowCEIWW
        }
        let mediumcei = {
            index: i,
            actuals: item.MediumCEIActual,
            marketArea: item.market_area_group,
            qq: item.MediumCEIQQTY,
            qrf: item.MediumCEITarget,
            qrfDiff: item.MediumCEIVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.MediumCEIVsQrf,
            yy: item.MediumCEIYY
        }

        let mediumceiWeek = {
            index: i,
            actuals: item.MediumCEIActual,
            marketArea: item.market_area_group,
            qq: item.MediumCEIQQTY,
            qrf: item.MediumCEITarget,
            qrfDiff: item.MediumCEIVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.MediumCEIVsQrf,
            ww: item.MediumCEIWW
        }
        let highcei = {
            index: i,
            actuals: item.HighCEIActual,
            marketArea: item.market_area_group,
            qq: item.HighCEIQQTY,
            qrf: item.HighCEITarget,
            qrfDiff: item.HighCEIVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.HighCEIVsQrf,
            yy: item.HighCEIYY
        }
        let highceiWeek = {
            index: i,
            actuals: item.HighCEIActual,
            marketArea: item.market_area_group,
            qq: item.HighCEIQQTY,
            qrf: item.HighCEITarget,
            qrfDiff: item.HighCEIVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.HighCEIVsQrf,
            ww: item.HighCEIWW
        }
        let wk4 = {
            index: i,
            actuals: item.Week04WAUActual,
            marketArea: item.market_area_group,
            qq: item.Week04WAUQQTY,
            qrf: item.Week04WAUTarget,
            qrfDiff: item.Week04WAUVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.Week04WAUVsQrf,
            yy: item.Week04WAUYY
        }
        let wk4Week = {
            index: i,
            actuals: item.Week04WAUActual,
            marketArea: item.market_area_group,
            qq: item.Week04WAUQQTY,
            qrf: item.Week04WAUTarget,
            qrfDiff: item.Week04WAUVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.Week04WAUVsQrf,
            ww: item.Week04WAUWW
        }
        let zerocei = {
            index: i,
            actuals: item.ZeroCEIActual,
            marketArea: item.market_area_group,
            qq: item.ZeroCEIQQTY,
            qrf: item.ZeroCEITarget,
            qrfDiff: item.ZeroCEIVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.ZeroCEIVsQrf,
            yy: item.ZeroCEIYY
        }
        let zeroceiWeek = {
            index: i,
            actuals: item.ZeroCEIActual,
            marketArea: item.market_area_group,
            qq: item.ZeroCEIQQTY,
            qrf: item.ZeroCEITarget,
            qrfDiff: item.ZeroCEIVsQRFDiff,
            type: item.geo_code,
            vsQrf: item.ZeroCEIVsQrf,
            ww: item.ZeroCEIWW
        }

        item1.push(activated);
        item1Week.push(activatedWeek);

        item2.push(monthreturn);
        item2Week.push(monthreturnWeek);

        item3.push(rum);
        item3Week.push(rumWeek);

        item4.push(lowcei);
        item4Week.push(lowceiWeek);

        item5.push(highcei);
        item5Week.push(highceiWeek);

        item6.push(wk4);
        item6Week.push(wk4Week);

        item7.push(mediumcei);
        item7Week.push(mediumceiWeek);

        item8.push(zerocei);
        item8Week.push(zeroceiWeek);

    }

    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.geo.qtd = processQTDOrder(item1);
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.geo.week = processQTDOrder(item1Week);

    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.geo.qtd = processQTDOrder(item2);
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.geo.week = processQTDOrder(item2Week);

    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.geo.qtd = processQTDOrder(item3);
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.geo.week = processQTDOrder(item3Week);

    newState[SUMMARY_KPIS.USE_LOW_CEI].details.geo.qtd = processQTDOrder(item4);
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.geo.week = processQTDOrder(item4Week);


    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.geo.qtd = processQTDOrder(item7);
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.geo.week = processQTDOrder(item7Week);

    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.geo.qtd = processQTDOrder(item5);
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.geo.week = processQTDOrder(item5Week);

    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.geo.qtd = processQTDOrder(item6);
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.geo.week = processQTDOrder(item6Week);

    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.geo.qtd = processQTDOrder(item8);
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.geo.week = processQTDOrder(item8Week);

}
export function processUseMarketQTDData(data, newState) {
    
    let item1 = [], item1Week = [],
        item2 = [], item2Week = [],
        item3 = [], item3Week = [],
        item4 = [], item4Week = [],
        item5 = [], item5Week = [],
        item6 = [], item6Week = [],
        item7 = [], item7Week = [],
        item8 = [], item8Week = []

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let activated = {
            index: i,
            actuals: item.ActivatedActual,
            marketArea: item.market_area_group,
            qq: item.ActivatedQQTY,
            qrf: item.ActivatedTarget,
            qrfDiff: item.ActivatedVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.ActivatedVsQRF,
            yy: item.ActivatedYY
        }
        let activatedWeek = {
            index: i,
            actuals: item.ActivatedActual,
            marketArea: item.market_area_group,
            qq: item.ActivatedQQTY,
            qrf: item.ActivatedTarget,
            qrfDiff: item.ActivatedVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.ActivatedVsQRF,
            ww: item.ActivatedWW
        }

        let monthreturn = {
            index: i,
            actuals: item.PaidMAUActual,
            marketArea: item.market_area_group,
            qq: item.PaidMAUQQTY,
            qrf: item.PaidMAUTarget,
            qrfDiff: item.PaidMAUVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.PaidMAUVsQrf,
            yy: item.PaidMAUYY
        }
        let monthreturnWeek = {
            index: i,
            actuals: item.PaidMAUActual,
            marketArea: item.market_area_group,
            qq: item.PaidMAUQQTY,
            qrf: item.PaidMAUTarget,
            qrfDiff: item.PaidMAUVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.PaidMAUVsQrf,
            ww: item.PaidMAUWW
        }

        let rum = {
            index: i,
            actuals: item.RepeatMAUActual,
            marketArea: item.market_area_group,
            qq: item.RepeatMAUQQTY,
            qrf: item.RepeatMAUTarget,
            qrfDiff: item.RepeatMAUVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.RepeatMAUVsQrf,
            yy: item.RepeatMAUYY
        }
        let rumWeek = {
            index: i,
            actuals: item.RepeatMAUActual,
            marketArea: item.market_area_group,
            qq: item.RepeatMAUQQTY,
            qrf: item.RepeatMAUTarget,
            qrfDiff: item.RepeatMAUVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.RepeatMAUVsQrf,
            ww: item.RepeatMAUWW
        }

        let lowcei = {
            index: i,
            actuals: item.LowCEIActual,
            marketArea: item.market_area_group,
            qq: item.LowCEIQQTY,
            qrf: item.LowCEITarget,
            qrfDiff: item.LowCEIVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.LowCEIVsQRF,
            yy: item.LowCEIYY
        }
        let lowceiWeek = {
            index: i,
            actuals: item.LowCEIActual,
            marketArea: item.market_area_group,
            qq: item.LowCEIQQTY,
            qrf: item.LowCEITarget,
            qrfDiff: item.LowCEIVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.LowCEIVsQRF,
            ww: item.LowCEIWW
        }
        let mediumcei = {
            index: i,
            actuals: item.MediumCEIActual,
            marketArea: item.market_area_group,
            qq: item.MediumCEIQQTY,
            qrf: item.MediumCEITarget,
            qrfDiff: item.MediumCEIVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.MediumCEIVsQrf,
            yy: item.MediumCEIYY
        }

        let mediumceiWeek = {
            index: i,
            actuals: item.MediumCEIActual,
            marketArea: item.market_area_group,
            qq: item.MediumCEIQQTY,
            qrf: item.MediumCEITarget,
            qrfDiff: item.MediumCEIVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.MediumCEIVsQrf,
            ww: item.MediumCEIWW
        }
        let highcei = {
            index: i,
            actuals: item.HighCEIActual,
            marketArea: item.market_area_group,
            qq: item.HighCEIQQTY,
            qrf: item.HighCEITarget,
            qrfDiff: item.HighCEIVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.HighCEIVsQrf,
            yy: item.HighCEIYY
        }
        let highceiWeek = {
            index: i,
            actuals: item.HighCEIActual,
            marketArea: item.market_area_group,
            qq: item.HighCEIQQTY,
            qrf: item.HighCEITarget,
            qrfDiff: item.HighCEIVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.HighCEIVsQrf,
            ww: item.HighCEIWW
        }
        let wk4 = {
            index: i,
            actuals: item.Week04WAUActual,
            marketArea: item.market_area_group,
            qq: item.Week04WAUQQTY,
            qrf: item.Week04WAUTarget,
            qrfDiff: item.Week04WAUVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.Week04WAUVsQrf,
            yy: item.Week04WAUYY
        }
        let wk4Week = {
            index: i,
            actuals: item.Week04WAUActual,
            marketArea: item.market_area_group,
            qq: item.Week04WAUQQTY,
            qrf: item.Week04WAUTarget,
            qrfDiff: item.Week04WAUVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.Week04WAUVsQrf,
            ww: item.Week04WAUWW
        }
        let zerocei = {
            index: i,
            actuals: item.ZeroCEIActual,
            marketArea: item.market_area_group,
            qq: item.ZeroCEIQQTY,
            qrf: item.ZeroCEITarget,
            qrfDiff: item.ZeroCEIVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.ZeroCEIVsQrf,
            yy: item.ZeroCEIYY
        }
        let zeroceiWeek = {
            index: i,
            actuals: item.ZeroCEIActual,
            marketArea: item.market_area_group,
            qq: item.ZeroCEIQQTY,
            qrf: item.ZeroCEITarget,
            qrfDiff: item.ZeroCEIVsQRFDiff,
            type: item.market_area_code,
            vsQrf: item.ZeroCEIVsQrf,
            ww: item.ZeroCEIWW
        }

        item1.push(activated);
        item1Week.push(activatedWeek);

        item2.push(monthreturn);
        item2Week.push(monthreturnWeek);

        item3.push(rum);
        item3Week.push(rumWeek);

        item4.push(lowcei);
        item4Week.push(lowceiWeek);

        item5.push(highcei);
        item5Week.push(highceiWeek);

        item6.push(wk4);
        item6Week.push(wk4Week);

        item7.push(mediumcei);
        item7Week.push(mediumceiWeek);

        item8.push(zerocei);
        item8Week.push(zeroceiWeek);

    }


    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.market.qtd = item1;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.market.week = item1Week;

    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.market.qtd = item2;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.market.week = item2Week;

    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.market.qtd = item3;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.market.week = item3Week;

    newState[SUMMARY_KPIS.USE_LOW_CEI].details.market.qtd = item4;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.market.week = item4Week;


    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.market.qtd = item7;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.market.week = item7Week;

    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.market.qtd = item5;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.market.week = item5Week;

    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.market.qtd = item6;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.market.week = item6Week;

    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.market.qtd = item8;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.market.week = item8Week;
}
export function processUseSubscriptionQTDData(data, newState) {
      
    let item1 = [], item1Week = [],
        item2 = [], item2Week = [],
        item3 = [], item3Week = [],
        item4 = [], item4Week = [],
        item5 = [], item5Week = [],
        item6 = [], item6Week = [],
        item7 = [], item7Week = [],
        item8 = [], item8Week = []

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let activated = {
            index: i,
            actuals: item.ActivatedActual,
            marketArea: item.market_area_group,
            qq: item.ActivatedQQTY,
            qrf: item.ActivatedTarget,
            qrfDiff: item.ActivatedVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.ActivatedVsQRF,
            yy: item.ActivatedYY
        }
        let activatedWeek = {
            index: i,
            actuals: item.ActivatedActual,
            marketArea: item.market_area_group,
            qq: item.ActivatedQQTY,
            qrf: item.ActivatedTarget,
            qrfDiff: item.ActivatedVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.ActivatedVsQRF,
            ww: item.ActivatedWW
        }

        let monthreturn = {
            index: i,
            actuals: item.PaidMAUActual,
            marketArea: item.market_area_group,
            qq: item.PaidMAUQQTY,
            qrf: item.PaidMAUTarget,
            qrfDiff: item.PaidMAUVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.PaidMAUVsQrf,
            yy: item.PaidMAUYY
        }
        let monthreturnWeek = {
            index: i,
            actuals: item.PaidMAUActual,
            marketArea: item.market_area_group,
            qq: item.PaidMAUQQTY,
            qrf: item.PaidMAUTarget,
            qrfDiff: item.PaidMAUVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.PaidMAUVsQrf,
            ww: item.PaidMAUWW
        }

        let rum = {
            index: i,
            actuals: item.RepeatMAUActual,
            marketArea: item.market_area_group,
            qq: item.RepeatMAUQQTY,
            qrf: item.RepeatMAUTarget,
            qrfDiff: item.RepeatMAUVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.RepeatMAUVsQrf,
            yy: item.RepeatMAUYY
        }
        let rumWeek = {
            index: i,
            actuals: item.RepeatMAUActual,
            marketArea: item.market_area_group,
            qq: item.RepeatMAUQQTY,
            qrf: item.RepeatMAUTarget,
            qrfDiff: item.RepeatMAUVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.RepeatMAUVsQrf,
            ww: item.RepeatMAUWW
        }

        let lowcei = {
            index: i,
            actuals: item.LowCEIActual,
            marketArea: item.market_area_group,
            qq: item.LowCEIQQTY,
            qrf: item.LowCEITarget,
            qrfDiff: item.LowCEIVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.LowCEIVsQRF,
            yy: item.LowCEIYY
        }
        let lowceiWeek = {
            index: i,
            actuals: item.LowCEIActual,
            marketArea: item.market_area_group,
            qq: item.LowCEIQQTY,
            qrf: item.LowCEITarget,
            qrfDiff: item.LowCEIVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.LowCEIVsQRF,
            ww: item.LowCEIWW
        }
        let mediumcei = {
            index: i,
            actuals: item.MediumCEIActual,
            marketArea: item.market_area_group,
            qq: item.MediumCEIQQTY,
            qrf: item.MediumCEITarget,
            qrfDiff: item.MediumCEIVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.MediumCEIVsQrf,
            yy: item.MediumCEIYY
        }

        let mediumceiWeek = {
            index: i,
            actuals: item.MediumCEIActual,
            marketArea: item.market_area_group,
            qq: item.MediumCEIQQTY,
            qrf: item.MediumCEITarget,
            qrfDiff: item.MediumCEIVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.MediumCEIVsQrf,
            ww: item.MediumCEIWW
        }
        let highcei = {
            index: i,
            actuals: item.HighCEIActual,
            marketArea: item.market_area_group,
            qq: item.HighCEIQQTY,
            qrf: item.HighCEITarget,
            qrfDiff: item.HighCEIVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.HighCEIVsQrf,
            yy: item.HighCEIYY
        }
        let highceiWeek = {
            index: i,
            actuals: item.HighCEIActual,
            marketArea: item.market_area_group,
            qq: item.HighCEIQQTY,
            qrf: item.HighCEITarget,
            qrfDiff: item.HighCEIVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.HighCEIVsQrf,
            ww: item.HighCEIWW
        }
        let wk4 = {
            index: i,
            actuals: item.Week04WAUActual,
            marketArea: item.market_area_group,
            qq: item.Week04WAUQQTY,
            qrf: item.Week04WAUTarget,
            qrfDiff: item.Week04WAUVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.Week04WAUVsQrf,
            yy: item.Week04WAUYY
        }
        let wk4Week = {
            index: i,
            actuals: item.Week04WAUActual,
            marketArea: item.market_area_group,
            qq: item.Week04WAUQQTY,
            qrf: item.Week04WAUTarget,
            qrfDiff: item.Week04WAUVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.Week04WAUVsQrf,
            ww: item.Week04WAUWW
        }
        let zerocei = {
            index: i,
            actuals: item.ZeroCEIActual,
            marketArea: item.market_area_group,
            qq: item.ZeroCEIQQTY,
            qrf: item.ZeroCEITarget,
            qrfDiff: item.ZeroCEIVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.ZeroCEIVsQrf,
            yy: item.ZeroCEIYY
        }
        let zeroceiWeek = {
            index: i,
            actuals: item.ZeroCEIActual,
            marketArea: item.market_area_group,
            qq: item.ZeroCEIQQTY,
            qrf: item.ZeroCEITarget,
            qrfDiff: item.ZeroCEIVsQRFDiff,
            type: item.subscription_offering,
            vsQrf: item.ZeroCEIVsQrf,
            ww: item.ZeroCEIWW
        }

        item1.push(activated);
        item1Week.push(activatedWeek);

        item2.push(monthreturn);
        item2Week.push(monthreturnWeek);

        item3.push(rum);
        item3Week.push(rumWeek);

        item4.push(lowcei);
        item4Week.push(lowceiWeek);

        item5.push(highcei);
        item5Week.push(highceiWeek);

        item6.push(wk4);
        item6Week.push(wk4Week);

        item7.push(mediumcei);
        item7Week.push(mediumceiWeek);

        item8.push(zerocei);
        item8Week.push(zeroceiWeek);

    }


    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.subscription.qtd = item1;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.subscription.week = item1Week;

    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.subscription.qtd = item2;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.subscription.week = item2Week;

    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.subscription.qtd = item3;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.subscription.week = item3Week;

    newState[SUMMARY_KPIS.USE_LOW_CEI].details.subscription.qtd = item4;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.subscription.week = item4Week;


    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.subscription.qtd = item7;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.subscription.week = item7Week;

    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.subscription.qtd = item5;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.subscription.week = item5Week;

    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.subscription.qtd = item6;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.subscription.week = item6Week;

    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.subscription.qtd = item8;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.subscription.week = item8Week;
}
export function processUseSegmentQTDData(data, newState) {
      
    let item1 = [], item1Week = [],
        item2 = [], item2Week = [],
        item3 = [], item3Week = [],
        item4 = [], item4Week = [],
        item5 = [], item5Week = [],
        item6 = [], item6Week = [],
        item7 = [], item7Week = [],
        item8 = [], item8Week = []

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let activated = {
            index: i,
            actuals: item.ActivatedActual,
            marketArea: item.market_area_group,
            qq: item.ActivatedQQTY,
            qrf: item.ActivatedTarget,
            qrfDiff: item.ActivatedVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.ActivatedVsQRF,
            yy: item.ActivatedYY
        }
        let activatedWeek = {
            index: i,
            actuals: item.ActivatedActual,
            marketArea: item.market_area_group,
            qq: item.ActivatedQQTY,
            qrf: item.ActivatedTarget,
            qrfDiff: item.ActivatedVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.ActivatedVsQRF,
            ww: item.ActivatedWW
        }

        let monthreturn = {
            index: i,
            actuals: item.PaidMAUActual,
            marketArea: item.market_area_group,
            qq: item.PaidMAUQQTY,
            qrf: item.PaidMAUTarget,
            qrfDiff: item.PaidMAUVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.PaidMAUVsQrf,
            yy: item.PaidMAUYY
        }
        let monthreturnWeek = {
            index: i,
            actuals: item.PaidMAUActual,
            marketArea: item.market_area_group,
            qq: item.PaidMAUQQTY,
            qrf: item.PaidMAUTarget,
            qrfDiff: item.PaidMAUVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.PaidMAUVsQrf,
            ww: item.PaidMAUWW
        }

        let rum = {
            index: i,
            actuals: item.RepeatMAUActual,
            marketArea: item.market_area_group,
            qq: item.RepeatMAUQQTY,
            qrf: item.RepeatMAUTarget,
            qrfDiff: item.RepeatMAUVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.RepeatMAUVsQrf,
            yy: item.RepeatMAUYY
        }
        let rumWeek = {
            index: i,
            actuals: item.RepeatMAUActual,
            marketArea: item.market_area_group,
            qq: item.RepeatMAUQQTY,
            qrf: item.RepeatMAUTarget,
            qrfDiff: item.RepeatMAUVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.RepeatMAUVsQrf,
            ww: item.RepeatMAUWW
        }

        let lowcei = {
            index: i,
            actuals: item.LowCEIActual,
            marketArea: item.market_area_group,
            qq: item.LowCEIQQTY,
            qrf: item.LowCEITarget,
            qrfDiff: item.LowCEIVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.LowCEIVsQRF,
            yy: item.LowCEIYY
        }
        let lowceiWeek = {
            index: i,
            actuals: item.LowCEIActual,
            marketArea: item.market_area_group,
            qq: item.LowCEIQQTY,
            qrf: item.LowCEITarget,
            qrfDiff: item.LowCEIVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.LowCEIVsQRF,
            ww: item.LowCEIWW
        }
        let mediumcei = {
            index: i,
            actuals: item.MediumCEIActual,
            marketArea: item.market_area_group,
            qq: item.MediumCEIQQTY,
            qrf: item.MediumCEITarget,
            qrfDiff: item.MediumCEIVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.MediumCEIVsQrf,
            yy: item.MediumCEIYY
        }

        let mediumceiWeek = {
            index: i,
            actuals: item.MediumCEIActual,
            marketArea: item.market_area_group,
            qq: item.MediumCEIQQTY,
            qrf: item.MediumCEITarget,
            qrfDiff: item.MediumCEIVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.MediumCEIVsQrf,
            ww: item.MediumCEIWW
        }
        let highcei = {
            index: i,
            actuals: item.HighCEIActual,
            marketArea: item.market_area_group,
            qq: item.HighCEIQQTY,
            qrf: item.HighCEITarget,
            qrfDiff: item.HighCEIVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.HighCEIVsQrf,
            yy: item.HighCEIYY
        }
        let highceiWeek = {
            index: i,
            actuals: item.HighCEIActual,
            marketArea: item.market_area_group,
            qq: item.HighCEIQQTY,
            qrf: item.HighCEITarget,
            qrfDiff: item.HighCEIVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.HighCEIVsQrf,
            ww: item.HighCEIWW
        }
        let wk4 = {
            index: i,
            actuals: item.Week04WAUActual,
            marketArea: item.market_area_group,
            qq: item.Week04WAUQQTY,
            qrf: item.Week04WAUTarget,
            qrfDiff: item.Week04WAUVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.Week04WAUVsQrf,
            yy: item.Week04WAUYY
        }
        let wk4Week = {
            index: i,
            actuals: item.Week04WAUActual,
            marketArea: item.market_area_group,
            qq: item.Week04WAUQQTY,
            qrf: item.Week04WAUTarget,
            qrfDiff: item.Week04WAUVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.Week04WAUVsQrf,
            ww: item.Week04WAUWW
        }
        let zerocei = {
            index: i,
            actuals: item.ZeroCEIActual,
            marketArea: item.market_area_group,
            qq: item.ZeroCEIQQTY,
            qrf: item.ZeroCEITarget,
            qrfDiff: item.ZeroCEIVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.ZeroCEIVsQrf,
            yy: item.ZeroCEIYY
        }
        let zeroceiWeek = {
            index: i,
            actuals: item.ZeroCEIActual,
            marketArea: item.market_area_group,
            qq: item.ZeroCEIQQTY,
            qrf: item.ZeroCEITarget,
            qrfDiff: item.ZeroCEIVsQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.ZeroCEIVsQrf,
            ww: item.ZeroCEIWW
        }

        item1.push(activated);
        item1Week.push(activatedWeek);

        item2.push(monthreturn);
        item2Week.push(monthreturnWeek);

        item3.push(rum);
        item3Week.push(rumWeek);

        item4.push(lowcei);
        item4Week.push(lowceiWeek);

        item5.push(highcei);
        item5Week.push(highceiWeek);

        item6.push(wk4);
        item6Week.push(wk4Week);

        item7.push(mediumcei);
        item7Week.push(mediumceiWeek);

        item8.push(zerocei);
        item8Week.push(zeroceiWeek);

    }


    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.segment.qtd = item1;
    newState[SUMMARY_KPIS.USE_PERCENT_ACTIVATED].details.segment.week = item1Week;

    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.segment.qtd = item2;
    newState[SUMMARY_KPIS.USE_MONTH_RETURN_RATE].details.segment.week = item2Week;

    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.segment.qtd = item3;
    newState[SUMMARY_KPIS.USE_REPEAT_USER_MAU].details.segment.week = item3Week;

    newState[SUMMARY_KPIS.USE_LOW_CEI].details.segment.qtd = item4;
    newState[SUMMARY_KPIS.USE_LOW_CEI].details.segment.week = item4Week;


    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.segment.qtd = item7;
    newState[SUMMARY_KPIS.USE_MEDIUM_CEI].details.segment.week = item7Week;

    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.segment.qtd = item5;
    newState[SUMMARY_KPIS.USE_HIGH_CEI].details.segment.week = item5Week;

    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.segment.qtd = item6;
    newState[SUMMARY_KPIS.USE_WK4_WAU_RATE].details.segment.week = item6Week;

    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.segment.qtd = item8;
    newState[SUMMARY_KPIS.USE_0_INACTIVE_CEI].details.segment.week = item8Week;
}

export function processRenewCancelSecondaryData(g1, newState, AdobeData, EtailData) {

    //  //Cacncellations
    newState[SUMMARY_KPIS.RENEW_CANCEL].value = g1.data[0].CancelARRActual;
    newState[SUMMARY_KPIS.RENEW_CANCEL].targetFQ = g1.data[0].CancelARRTargetFQ;
    newState[SUMMARY_KPIS.RENEW_CANCEL].target = g1.data[0].CancelARRTarget;
    newState[SUMMARY_KPIS.RENEW_CANCEL].vsQrf = g1.data[0].CancelVsQrf;

    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].value = AdobeData.data[0].CancelARRActual;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].targetFQ = AdobeData.data[0].CancelARRTargetFQ;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].target = AdobeData.data[0].CancelARRTarget;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].vsQrf = AdobeData.data[0].CancelVsQrf;

    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].value = EtailData.data[0].CancelARRActual;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].targetFQ = EtailData.data[0].CancelARRTargetFQ;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].target = EtailData.data[0].CancelARRTarget;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].vsQrf = EtailData.data[0].CancelVsQrf;
    // console.log('New State AT the end of secondary',newState);
}
export function processRenewCancelMultichart(newState, data, AdobeData, EtailData) {

    let weekFlag = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    let weekAdobeFlag = AdobeData.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    let weekEtailFlag = EtailData.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])

    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);
    let newDataAdobe = _.orderBy(weekAdobeFlag, ['weekNo'], ['asc']);
    let newDataEtail = _.orderBy(weekEtailFlag, ['weekNo'], ['asc']);

    let netCancellations = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    },
        netCancellationsAdobe = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        netCancellationsEatil = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        };

    //Get Financial Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        let itemAdobe = newDataAdobe[i];
        let itemEtail = newDataEtail[i];


        netCancellations.actual.push(item.CancelARRActual);
        netCancellations.target.push(item.CancelARRTargetFQ);
        netCancellations.ly.push(item.CancelARRLY);
        netCancellations.lq.push(item.CancelARRLQ);

        netCancellationsAdobe.actual.push(itemAdobe.CancelARRActual);
        netCancellationsAdobe.target.push(itemAdobe.CancelARRTargetFQ);
        netCancellationsAdobe.ly.push(itemAdobe.CancelARRLY);
        netCancellationsAdobe.lq.push(itemAdobe.CancelARRLQ);

        netCancellationsEatil.actual.push(itemEtail.CancelARRActual);
        netCancellationsEatil.target.push(itemEtail.CancelARRTargetFQ);
        netCancellationsEatil.ly.push(itemEtail.CancelARRLY);
        netCancellationsEatil.lq.push(itemEtail.CancelARRLQ);
    };

    let canc = [netCancellations.actual, netCancellations.target, netCancellations.ly, netCancellations.lq];
    let cancA = [netCancellationsAdobe.actual, netCancellationsAdobe.target, netCancellationsAdobe.ly, netCancellationsAdobe.lq];
    let cancE = [netCancellationsEatil.actual, netCancellationsEatil.target, netCancellationsEatil.ly, netCancellationsEatil.lq];

    newState[SUMMARY_KPIS.RENEW_CANCEL]['details'].multichart = canc;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM]['details'].multichart = cancA;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E]['details'].multichart = cancE;

}
export function processRenewCancelQTD(newState, findata, AdobeData, EtailData) {
    newState = Object.assign([], newState);
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.qtd[0].value = findata.CancelActuals;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.qtd[1].value = findata.CancelUnitsActual;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.qtd[2].value = findata.CancelTarget;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.qtd[3].value = findata.CancelVsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.qtd[4].value = findata.CancelARRVsQrf;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.qtd[5].value = findata.CancelARRQQTY;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.qtd[6].value = findata.CancelARRYY;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.week[0].value = findata.CancelARRCW;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.week[1].value = findata.CancelUnitsCW;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.week[2].value = findata.CancelARRTargetCW
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.week[3].value = findata.CancelCWVsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.week[4].value = findata.CancelCWVsQrf;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.qtdw.week[5].value = findata.CancelWW;

    newState[SUMMARY_KPIS.RENEW_CANCEL].details.stats[0].value = findata.CancelARRVsQrf;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.stats[1].value = findata.CancelARRQQTY;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.stats[2].value = findata.CancelARRQQLY;
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.stats[3].value = findata.CancelARRYY;

    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.qtd[0].value = AdobeData.CancelActuals;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.qtd[1].value = AdobeData.CancelUnitsActual;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.qtd[2].value = AdobeData.CancelTarget;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.qtd[3].value = AdobeData.CancelVsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.qtd[4].value = AdobeData.CancelARRVsQrf;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.qtd[5].value = AdobeData.CancelARRQQTY;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.qtd[6].value = AdobeData.CancelARRYY;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.week[0].value = AdobeData.CancelARRCW;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.week[1].value = AdobeData.CancelUnitsCW;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.week[2].value = AdobeData.CancelARRTargetCW
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.week[3].value = AdobeData.CancelCWVsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.week[4].value = AdobeData.CancelCWVsQrf;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.qtdw.week[5].value = AdobeData.CancelWW;

    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.stats[0].value = AdobeData.CancelARRVsQrf;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.stats[1].value = AdobeData.CancelARRQQTY;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.stats[2].value = AdobeData.CancelARRQQLY;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.stats[3].value = AdobeData.CancelARRYY;

    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.qtd[0].value = EtailData.CancelActuals;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.qtd[1].value = EtailData.CancelUnitsActual;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.qtd[2].value = EtailData.CancelTarget;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.qtd[3].value = EtailData.CancelVsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.qtd[4].value = EtailData.CancelARRVsQrf;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.qtd[5].value = EtailData.CancelARRQQTY;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.qtd[6].value = EtailData.CancelARRYY;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.week[0].value = EtailData.CancelARRCW;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.week[1].value = EtailData.CancelUnitsCW;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.week[2].value = EtailData.CancelARRTargetCW
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.week[3].value = EtailData.CancelCWVsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.week[4].value = EtailData.CancelCWVsQrf;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.qtdw.week[5].value = EtailData.CancelWW;

    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.stats[0].value = EtailData.CancelARRVsQrf;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.stats[1].value = EtailData.CancelARRQQTY;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.stats[2].value = EtailData.CancelARRQQLY;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.stats[3].value = EtailData.CancelARRYY;
}
export function processRenewCancelGeoQTD(newState, data, AdobeData, EtailData) {
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        // console.log(net);
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_group,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.geo_code,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }


        item1.push(canc);

    }
    for (let i = 0; i < AdobeData.length; i++) {
        let itemAdobe = AdobeData[i];
        // console.log(net);

        let cancAdobe = {
            index: i,
            actuals: itemAdobe.CancelActuals,
            marketArea: itemAdobe.market_area_group,
            qq: itemAdobe.CancelARRQQTY,
            qrf: itemAdobe.CancelTarget,
            qrfDiff: itemAdobe.CancelVsQrfDiff,
            type: itemAdobe.geo_code,
            units: itemAdobe.CancelUnitsActual,
            vsQrf: itemAdobe.CancelARRVsQrf,
            yy: itemAdobe.CancelARRYY
        }


        item2.push(cancAdobe);
    }

    for (let i = 0; i < EtailData.length; i++) {

        let itemEtail = EtailData[i];
        let cancEtail = {
            index: i,
            actuals: itemEtail.CancelActuals,
            marketArea: itemEtail.market_area_group,
            qq: itemEtail.CancelARRQQTY,
            qrf: itemEtail.CancelTarget,
            qrfDiff: itemEtail.CancelVsQrfDiff,
            type: itemEtail.geo_code,
            units: itemEtail.CancelUnitsActual,
            vsQrf: itemEtail.CancelARRVsQrf,
            yy: itemEtail.CancelARRYY
        }

        item3.push(cancEtail);
    }

    newState[SUMMARY_KPIS.RENEW_CANCEL].details.geo.qtd = processQTDOrder(item1);
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.geo.qtd = processQTDOrder(item2);
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.geo.qtd = processQTDOrder(item3);

}
export function processRenewCancelGeoWeek(newState, data, AdobeData, EtailData) {
    // console.log(data);
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }

        item1.push(canc);

    }

    for (let i = 0; i < AdobeData.length; i++) {
        let itemAdobe = AdobeData[i];

        let cancAdobe = {
            index: i,
            actuals: itemAdobe.CancelARRCW,
            units: itemAdobe.CancelUnitsCW,
            marketArea: itemAdobe.market_area_group,
            qrf: itemAdobe.CancelARRTargetCW,
            qrfDiff: itemAdobe.CancelCWVsQrfDiff,
            type: itemAdobe.geo_code,
            vsQrf: itemAdobe.CancelCWVsQrf,
            ww: itemAdobe.CancelWW
        }


        item2.push(cancAdobe);
    }

    for (let i = 0; i < EtailData.length; i++) {

        let itemEtail = EtailData[i];


        let cancEtail = {
            index: i,
            actuals: itemEtail.CancelARRCW,
            units: itemEtail.CancelUnitsCW,
            marketArea: itemEtail.market_area_group,
            qrf: itemEtail.CancelARRTargetCW,
            qrfDiff: itemEtail.CancelCWVsQrfDiff,
            type: itemEtail.geo_code,
            vsQrf: itemEtail.CancelCWVsQrf,
            ww: itemEtail.CancelWW
        }
        item3.push(cancEtail);
    }
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.geo.week = processQTDOrder(item1);
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.geo.week = processQTDOrder(item2);
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.geo.week = processQTDOrder(item3);
}
export function processRenewCancelMarketQTD(newState, data, AdobeData, EtailData) {
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_group,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.market_area_code,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }



        item1.push(canc);
    }

    for (let i = 0; i < AdobeData.length; i++) {
        let itemAdobe = AdobeData[i];

        let cancAdobe = {
            index: i,
            actuals: itemAdobe.CancelActuals,
            marketArea: itemAdobe.market_area_group,
            qq: itemAdobe.CancelARRQQTY,
            qrf: itemAdobe.CancelTarget,
            qrfDiff: itemAdobe.CancelVsQrfDiff,
            type: itemAdobe.market_area_code,
            units: itemAdobe.CancelUnitsActual,
            vsQrf: itemAdobe.CancelARRVsQrf,
            yy: itemAdobe.CancelARRYY
        }
        item2.push(cancAdobe);

    }
    for (let i = 0; i < EtailData.length; i++) {
        let itemEtail = EtailData[i];

        let cancEtail = {
            index: i,
            actuals: itemEtail.CancelActuals,
            marketArea: itemEtail.market_area_group,
            qq: itemEtail.CancelARRQQTY,
            qrf: itemEtail.CancelTarget,
            qrfDiff: itemEtail.CancelVsQrfDiff,
            type: itemEtail.market_area_code,
            units: itemEtail.CancelUnitsActual,
            vsQrf: itemEtail.CancelARRVsQrf,
            yy: itemEtail.CancelARRYY
        }
        item3.push(cancEtail);

    }
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.market.qtd = item1;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.market.qtd = item2;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.market.qtd = item3;

}
export function processRenewCancelMarketWeek(newState, data, AdobeData, EtailData) {
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }

        item1.push(canc);
    }
    for (let i = 0; i < AdobeData.length; i++) {
        let itemAdobe = AdobeData[i];

        let cancAdobe = {
            index: i,
            actuals: itemAdobe.CancelARRCW,
            units: itemAdobe.CancelUnitsCW,
            marketArea: itemAdobe.market_area_group,
            qrf: itemAdobe.CancelARRTargetCW,
            qrfDiff: itemAdobe.CancelCWVsQrfDiff,
            type: itemAdobe.market_area_code,
            vsQrf: itemAdobe.CancelCWVsQrf,
            ww: itemAdobe.CancelWW
        }
        item2.push(cancAdobe);
    }

    for (let i = 0; i < EtailData.length; i++) {
        let itemEtail = EtailData[i];

        let cancEtail = {
            index: i,
            actuals: itemEtail.CancelARRCW,
            units: itemEtail.CancelUnitsCW,
            marketArea: itemEtail.market_area_group,
            qrf: itemEtail.CancelARRTargetCW,
            qrfDiff: itemEtail.CancelCWVsQrfDiff,
            type: itemEtail.market_area_code,
            vsQrf: itemEtail.CancelCWVsQrf,
            ww: itemEtail.CancelWW
        }
        item3.push(cancEtail);

    }
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.market.week = item1;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.market.week = item2;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.market.week = item3;
}
export function processRenewCancelSegmentQTD(newState, data, AdobeData, EtailData) {
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_group,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.segment_pivot,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }



        item1.push(canc);
    }

    for (let i = 0; i < AdobeData.length; i++) {
        let itemAdobe = AdobeData[i];

        let cancAdobe = {
            index: i,
            actuals: itemAdobe.CancelActuals,
            marketArea: itemAdobe.market_area_group,
            qq: itemAdobe.CancelARRQQTY,
            qrf: itemAdobe.CancelTarget,
            qrfDiff: itemAdobe.CancelVsQrfDiff,
            type: itemAdobe.segment_pivot,
            units: itemAdobe.CancelUnitsActual,
            vsQrf: itemAdobe.CancelARRVsQrf,
            yy: itemAdobe.CancelARRYY
        }
        item2.push(cancAdobe);

    }
    for (let i = 0; i < EtailData.length; i++) {
        let itemEtail = EtailData[i];

        let cancEtail = {
            index: i,
            actuals: itemEtail.CancelActuals,
            marketArea: itemEtail.market_area_group,
            qq: itemEtail.CancelARRQQTY,
            qrf: itemEtail.CancelTarget,
            qrfDiff: itemEtail.CancelVsQrfDiff,
            type: itemEtail.segment_pivot,
            units: itemEtail.CancelUnitsActual,
            vsQrf: itemEtail.CancelARRVsQrf,
            yy: itemEtail.CancelARRYY
        }
        item3.push(cancEtail);

    }
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.segment.qtd = item1;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.segment.qtd = item2;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.segment.qtd = item3;
}
export function processRenewCancelSegmentWeek(newState, data, AdobeData, EtailData) {
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }

        item1.push(canc);
    }
    for (let i = 0; i < AdobeData.length; i++) {
        let itemAdobe = AdobeData[i];

        let cancAdobe = {
            index: i,
            actuals: itemAdobe.CancelARRCW,
            units: itemAdobe.CancelUnitsCW,
            marketArea: itemAdobe.market_area_group,
            qrf: itemAdobe.CancelARRTargetCW,
            qrfDiff: itemAdobe.CancelCWVsQrfDiff,
            type: itemAdobe.segment_pivot,
            vsQrf: itemAdobe.CancelCWVsQrf,
            ww: itemAdobe.CancelWW
        }
        item2.push(cancAdobe);
    }

    for (let i = 0; i < EtailData.length; i++) {
        let itemEtail = EtailData[i];

        let cancEtail = {
            index: i,
            actuals: itemEtail.CancelARRCW,
            units: itemEtail.CancelUnitsCW,
            marketArea: itemEtail.market_area_group,
            qrf: itemEtail.CancelARRTargetCW,
            qrfDiff: itemEtail.CancelCWVsQrfDiff,
            type: itemEtail.segment_pivot,
            vsQrf: itemEtail.CancelCWVsQrf,
            ww: itemEtail.CancelWW
        }
        item3.push(cancEtail);

    }
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.segment.week = item1;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.segment.week = item2;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.segment.week = item3;
}
export function processRenewCancelproductQTD(newState, data, AdobeData, EtailData) {
    //Clear old Values
    let item1 = [];
    let item2 = [];
    let item3 = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let canc = {
            index: i,
            actuals: item.CancelActuals,
            marketArea: item.market_area_group,
            qq: item.CancelARRQQTY,
            qrf: item.CancelTarget,
            qrfDiff: item.CancelVsQrfDiff,
            type: item.product_category,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelARRVsQrf,
            yy: item.CancelARRYY
        }



        item1.push(canc);
    }

    for (let i = 0; i < AdobeData.length; i++) {
        let itemAdobe = AdobeData[i];

        let cancAdobe = {
            index: i,
            actuals: itemAdobe.CancelActuals,
            marketArea: itemAdobe.market_area_group,
            qq: itemAdobe.CancelARRQQTY,
            qrf: itemAdobe.CancelTarget,
            qrfDiff: itemAdobe.CancelVsQrfDiff,
            type: itemAdobe.product_category,
            units: itemAdobe.CancelUnitsActual,
            vsQrf: itemAdobe.CancelARRVsQrf,
            yy: itemAdobe.CancelARRYY
        }
        item2.push(cancAdobe);

    }
    for (let i = 0; i < EtailData.length; i++) {
        let itemEtail = EtailData[i];

        let cancEtail = {
            index: i,
            actuals: itemEtail.CancelActuals,
            marketArea: itemEtail.market_area_group,
            qq: itemEtail.CancelARRQQTY,
            qrf: itemEtail.CancelTarget,
            qrfDiff: itemEtail.CancelVsQrfDiff,
            type: itemEtail.product_category,
            units: itemEtail.CancelUnitsActual,
            vsQrf: itemEtail.CancelARRVsQrf,
            yy: itemEtail.CancelARRYY
        }
        item3.push(cancEtail);

    }
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.product.qtd = item1;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.product.qtd = item2;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.product.qtd = item3;

}
export function processRenewCancelProductWeek(newState, data, AdobeData, EtailData) {
    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let canc = {
            index: i,
            actuals: item.CancelARRCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.product_category,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }

        item1.push(canc);
    }
    for (let i = 0; i < AdobeData.length; i++) {
        let itemAdobe = AdobeData[i];

        let cancAdobe = {
            index: i,
            actuals: itemAdobe.CancelARRCW,
            units: itemAdobe.CancelUnitsCW,
            marketArea: itemAdobe.market_area_group,
            qrf: itemAdobe.CancelARRTargetCW,
            qrfDiff: itemAdobe.CancelCWVsQrfDiff,
            type: itemAdobe.product_category,
            vsQrf: itemAdobe.CancelCWVsQrf,
            ww: itemAdobe.CancelWW
        }
        item2.push(cancAdobe);
    }

    for (let i = 0; i < EtailData.length; i++) {
        let itemEtail = EtailData[i];

        let cancEtail = {
            index: i,
            actuals: itemEtail.CancelARRCW,
            units: itemEtail.CancelUnitsCW,
            marketArea: itemEtail.market_area_group,
            qrf: itemEtail.CancelARRTargetCW,
            qrfDiff: itemEtail.CancelCWVsQrfDiff,
            type: itemEtail.product_category,
            vsQrf: itemEtail.CancelCWVsQrf,
            ww: itemEtail.CancelWW
        }
        item3.push(cancEtail);

    }
    newState[SUMMARY_KPIS.RENEW_CANCEL].details.product.week = item1;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].details.product.week = item2;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].details.product.week = item3;
}
export function processRenewDetailSecondaryData(data, newState, Reseller, Etail) {


    newState[SUMMARY_KPIS.RENEW_QTR_FIN].value = data.data[0].QFRRActual;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].targetFQ = data.data[0].QFRRTargetFQ;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].target = data.data[0].QFRRTarget;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].vsQrf = data.data[0].QFRRVsQrf;

    newState[SUMMARY_KPIS.RENEW_QTR_UI].value = data.data[0].UIRateActual;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].targetFQ = data.data[0].UIRateTargetFQ;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].target = data.data[0].UIRateTarget;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].vsQrf = data.data[0].UIRateVsQrf;

    newState[SUMMARY_KPIS.RENEW_QTR_PF].value = data.data[0].PFRateActual;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].targetFQ = data.data[0].PFRateTargetFQ;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].target = data.data[0].PFRateTarget;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].vsQrf = data.data[0].PFRateVsQrf;


    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].value = Reseller.data[0].EOTRateActual;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].targetFQ = Reseller.data[0].EOTRateTargetFQ;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].target = Reseller.data[0].EOTRateTarget;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].vsQrf = Reseller.data[0].EOTRateVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].value = Etail.data[0].QFRRActual;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].targetFQ = Etail.data[0].QFRRTargetFQ;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].target = Etail.data[0].QFRRTarget;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].vsQrf = Etail.data[0].QFRRVsQrf;
}
export function processRenewMultichartData(data, newState, Reseller, Etail) {
    let weekFlag = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    let weekResellerFlag = Reseller.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    let weekEtailFlag = Etail.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])

    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);
    let newResellerwData = _.orderBy(weekResellerFlag, ['weekNo'], ['asc']);
    let newEtailData = _.orderBy(weekEtailFlag, ['weekNo'], ['asc']);



    let qtrFin = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }

    let qtrUI = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }

    let qtrPF = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }


    let eot = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }
    let qtrFinRetail = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }
    //Get Financial Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        let itemReseller = newResellerwData[i];
        let itemEtail = newEtailData[i];


        qtrFin.actual.push(item.WFRRActual);
        qtrFin.target.push(item.WFRRTarget);
        qtrFin.ly.push(item.WFRRLY);
        qtrFin.lq.push(item.WFRRLQ);
        qtrUI.actual.push(item.UIRateActual);
        qtrUI.target.push(item.UIRateTarget);
        qtrUI.ly.push(item.UIRateLY);
        qtrUI.lq.push(item.UIRateLQ);

        qtrPF.actual.push(item.PFRateActual);
        qtrPF.target.push(item.PFRateTarget);
        qtrPF.ly.push(item.PFRateLY);
        qtrPF.lq.push(item.PFRateLQ);

        eot.actual.push(itemReseller.EOTRateActual);
        eot.target.push(itemReseller.EOTRateTargetFQ);
        eot.ly.push(itemReseller.EOTRateLY);
        eot.lq.push(itemReseller.EOTRateLQ);

        qtrFinRetail.actual.push(itemEtail.WFRRActual);
        qtrFinRetail.target.push(itemEtail.WFRRTarget);
        qtrFinRetail.ly.push(itemEtail.WFRRLY);
        qtrFinRetail.lq.push(itemEtail.WFRRLQ);
    };




    newState[SUMMARY_KPIS.RENEW_QTR_FIN]['details'].multichart = [qtrFin.actual, qtrFin.target, qtrFin.ly, qtrFin.lq];
    newState[SUMMARY_KPIS.RENEW_QTR_UI]['details'].multichart = [qtrUI.actual, qtrUI.target, qtrUI.ly, qtrUI.lq];
    newState[SUMMARY_KPIS.RENEW_QTR_PF]['details'].multichart = [qtrPF.actual, qtrPF.target, qtrPF.ly, qtrPF.lq];
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER]['details'].multichart = [eot.actual, eot.target, eot.ly, eot.lq];
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL]['details'].multichart = [qtrFinRetail.actual, qtrFinRetail.target, qtrFinRetail.ly, qtrFinRetail.lq];

}
export function processRenewQTDData(data, newState, Reseller, Etail) {

    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.qtdw.qtd[0].value = data.RetRateActual;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.qtdw.qtd[1].value = data.RetRateTarget;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.qtdw.qtd[2].value = data.RetRatevsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.qtdw.qtd[3].value = data.RetRateVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.qtdw.qtd[4].value = data.RetRateQQTY;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.qtdw.qtd[5].value = data.RetRateYY;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.qtdw.week[0].value = data.RetRateCW;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.qtdw.week[1].value = data.RetRateTargetCW;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.qtdw.week[2].value = data.RetRateCWVsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.qtdw.week[3].value = data.RetRateCWVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.qtdw.week[4].value = data.RetRateWW;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.stats[0].value = data.RetRateVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.stats[1].value = data.RetRateQQTY;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.stats[2].value = data.RetRateQQLY;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.stats[3].value = data.RetRateYY;

    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.qtdw.qtd[0].value = data.UIRateActual;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.qtdw.qtd[1].value = data.UIRateTarget;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.qtdw.qtd[2].value = data.UIRatevsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.qtdw.qtd[3].value = data.UIRateVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.qtdw.qtd[4].value = data.UIRateQQTY;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.qtdw.qtd[5].value = data.UIRateYY;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.qtdw.week[0].value = data.UIRateCW;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.qtdw.week[1].value = data.UIRateTargetCW;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.qtdw.week[2].value = data.UIRateCWVsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.qtdw.week[3].value = data.UIRateCWVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.qtdw.week[4].value = data.UIRateWW;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.stats[0].value = data.UIRateVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.stats[1].value = data.UIRateQQTY;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.stats[2].value = data.UIRateQQLY;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.stats[3].value = data.UIRateYY;


    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.qtdw.qtd[0].value = data.PFRateActual;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.qtdw.qtd[1].value = data.PFRateTarget;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.qtdw.qtd[2].value = data.PFRatevsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.qtdw.qtd[3].value = data.PFRateVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.qtdw.qtd[4].value = data.PFRateQQTY;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.qtdw.qtd[5].value = data.PFRateYY;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.qtdw.week[0].value = data.PFRateCW;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.qtdw.week[1].value = data.PFRateTargetCW;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.qtdw.week[2].value = data.PFRateCWVsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.qtdw.week[3].value = data.PFRateCWVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.qtdw.week[4].value = data.PFRateWW;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.stats[0].value = data.PFRateVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.stats[1].value = data.PFRateQQTY;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.stats[2].value = data.PFRateQQLY;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.stats[3].value = data.PFRateYY;




    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.qtdw.qtd[0].value = Reseller.EOTRateActuals;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.qtdw.qtd[1].value = Reseller.EOTRateTarget;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.qtdw.qtd[2].value = Reseller.EOTRateVsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.qtdw.qtd[3].value = Reseller.EOTRatevsQrf;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.qtdw.qtd[4].value = Reseller.EOTRateQQTY;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.qtdw.qtd[5].value = Reseller.EOTRateYY;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.qtdw.week[0].value = Reseller.EOTRateCW;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.qtdw.week[1].value = Reseller.EOTRateTargetCW;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.qtdw.week[2].value = Reseller.EOTRateCWVsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.qtdw.week[3].value = Reseller.EOTRateCWVsQrf;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.qtdw.week[4].value = Reseller.EOTRateWW;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.stats[0].value = Reseller.EOTRatevsQrf;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.stats[1].value = Reseller.EOTRateQQTY;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.stats[2].value = Reseller.EOTRateQQLY;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.stats[3].value = Reseller.EOTRateYY;

    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.qtdw.qtd[0].value = Etail.RetRateActual;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.qtdw.qtd[1].value = Etail.RetRateTarget;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.qtdw.qtd[2].value = Etail.RetRatevsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.qtdw.qtd[3].value = Etail.RetRateVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.qtdw.qtd[4].value = Etail.RetRateQQTY;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.qtdw.qtd[5].value = Etail.RetRateYY;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.qtdw.week[0].value = Etail.RetRateCW;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.qtdw.week[1].value = Etail.RetRateTargetCW;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.qtdw.week[2].value = Etail.RetRateCWVsQrfDiff;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.qtdw.week[3].value = Etail.RetRateCWVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.qtdw.week[4].value = Etail.RetRateWW;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.stats[0].value = Etail.RetRateVsQrf;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.stats[1].value = Etail.RetRateQQTY;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.stats[2].value = Etail.RetRateQQLY;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.stats[3].value = Etail.RetRateYY;
}
export function processRenewGeoQTDData(data, newState, Reseller, Etail) {


    let qtrFin = [], qtrFinWeek = [],
        qtrUi = [], qtrUiWeek = [],
        qtrPf = [], qtrPfWeek = [],
        eot = [], eotWeek = [],
        qtrFinEtail = [], qtrFinEtailWeek = []


    for (let i = 0; i < data.length; i++) {
        let adobeData = data[i];


        let finAdobe = {
            index: i,
            actuals: adobeData.RetRateActual,
            marketArea: adobeData.market_area_group,
            qq: adobeData.RetRateQQTY,
            qrf: adobeData.RetRateTarget,
            qrfDiff: adobeData.RetRatevsQrfDiff,
            type: adobeData.geo_code,
            units: adobeData.CancelUnitsActual,
            vsQrf: adobeData.RetRateVsQrf,
            yy: adobeData.RetRateYY
        }
        qtrFin.push(finAdobe);

        let finAdobeWeek = {
            index: i,
            actuals: adobeData.RetRateCW,
            marketArea: adobeData.market_area_group,
            qrf: adobeData.RetRateTargetCW,
            qrfDiff: adobeData.RetRateCWVsQrfDiff,
            type: adobeData.geo_code,
            vsQrf: adobeData.RetRateCWVsQrf,
            ww: adobeData.RetRateWW
        }
        qtrFinWeek.push(finAdobeWeek);

        let ui = {
            index: i,
            actuals: adobeData.UIRateActual,
            marketArea: adobeData.market_area_group,
            qq: adobeData.UIRateQQTY,
            qrf: adobeData.UIRateTarget,
            qrfDiff: adobeData.UIRatevsQrfDiff,
            type: adobeData.geo_code,
            units: adobeData.CancelUnitsActual,
            vsQrf: adobeData.UIRateVsQrf,
            yy: adobeData.UIRateYY
        }
        qtrUi.push(ui);

        let uiWeek = {
            index: i,
            actuals: adobeData.UIRateCW,
            marketArea: adobeData.market_area_group,
            qrf: adobeData.UIRateTargetCW,
            qrfDiff: adobeData.UIRateCWVsQrfDiff,
            type: adobeData.geo_code,
            vsQrf: adobeData.UIRateCWVsQrf,
            ww: adobeData.UIRateWW
        }
        qtrUiWeek.push(uiWeek);
        let pfAdobe = {
            index: i,
            actuals: adobeData.PFRateActual,
            marketArea: adobeData.market_area_group,
            qq: adobeData.PFRateQQTY,
            qrf: adobeData.PFRateTarget,
            qrfDiff: adobeData.PFRatevsQrfDiff,
            type: adobeData.geo_code,
            units: adobeData.CancelUnitsActual,
            vsQrf: adobeData.PFRateVsQrf,
            yy: adobeData.PFRateYY
        }
        qtrPf.push(pfAdobe);

        let pfWeek = {
            index: i,
            actuals: adobeData.PFRateCW,
            marketArea: adobeData.market_area_group,
            qrf: adobeData.PFRateTargetCW,
            qrfDiff: adobeData.PFRateCWVsQrfDiff,
            type: adobeData.geo_code,
            vsQrf: adobeData.PFRateCWVsQrf,
            ww: adobeData.PFRateWW
        }
        qtrPfWeek.push(pfWeek);


    }
    for (let i = 0; i < Reseller.length; i++) {
        let reseller = Reseller[i];




        let eotItem = {
            index: i,
            actuals: reseller.EOTRateActuals,
            marketArea: reseller.market_area_group,
            qq: reseller.EOTRateQQTY,
            qrf: reseller.EOTRateTarget,
            qrfDiff: reseller.EOTRateVsQrfDiff,
            type: reseller.geo_code,
            units: reseller.CancelUnitsActual,
            vsQrf: reseller.EOTRatevsQrf,
            yy: reseller.EOTRateYY
        }
        eot.push(eotItem);

        let eotWeekItem = {
            index: i,
            actuals: reseller.EOTRateCW,
            marketArea: reseller.market_area_group,
            qrf: reseller.EOTRateTargetCW,
            qrfDiff: reseller.EOTRateCWVsQrfDiff,
            type: reseller.geo_code,
            vsQrf: reseller.EOTRateCWVsQrf,
            ww: reseller.EOTRateWW
        }
        eotWeek.push(eotWeekItem);


    }
    for (let i = 0; i < Etail.length; i++) {
        let etail = Etail[i];



        let finEtail = {
            index: i,
            actuals: etail.RetRateActual,
            marketArea: etail.market_area_group,
            qq: etail.RetRateQQTY,
            qrf: etail.RetRateTarget,
            qrfDiff: etail.RetRatevsQrfDiff,
            type: etail.geo_code,
            units: etail.CancelUnitsActual,
            vsQrf: etail.RetRateVsQrf,
            yy: etail.RetRateYY
        }
        qtrFinEtail.push(finEtail);

        let finEtailWeek = {
            index: i,
            actuals: etail.RetRateCW,
            marketArea: etail.market_area_group,
            qrf: etail.RetRateTargetCW,
            qrfDiff: etail.RetRateCWVsQrfDiff,
            type: etail.geo_code,
            vsQrf: etail.RetRateCWVsQrf,
            ww: etail.RetRateWW
        }
        qtrFinEtailWeek.push(finEtailWeek);
    }
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.geo.qtd = processQTDOrder(qtrFin);
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.geo.week = processQTDOrder(qtrFinWeek);
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.geo.qtd = processQTDOrder(qtrUi);
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.geo.week = processQTDOrder(qtrUiWeek);
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.geo.qtd = processQTDOrder(qtrPf);
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.geo.week = processQTDOrder(qtrPfWeek);
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.geo.qtd = processQTDOrder(eot);
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.geo.week = processQTDOrder(eotWeek);
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.geo.qtd = processQTDOrder(qtrFinEtail);
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.geo.week = processQTDOrder(qtrFinEtailWeek);


}
export function processRenewMarketQTDData(data, newState, Reseller, Etail) {
    let qtrFin = [], qtrFinWeek = [],
        qtrUi = [], qtrUiWeek = [],
        qtrPf = [], qtrPfWeek = [],
        eot = [], eotWeek = [],
        qtrFinEtail = [], qtrFinEtailWeek = []

    for (let i = 0; i < data.length; i++) {
        let adobeData = data[i],
            reseller = Reseller[i],
            etail = Etail[i];

        let finAdobe = {
            index: i,
            actuals: adobeData.RetRateActual,
            qq: adobeData.RetRateQQTY,
            qrf: adobeData.RetRateTarget,
            qrfDiff: adobeData.RetRatevsQrfDiff,
            type: adobeData.market_area_code,
            units: adobeData.CancelUnitsActual,
            vsQrf: adobeData.RetRateVsQrf,
            yy: adobeData.RetRateYY
        }
        qtrFin.push(finAdobe);

        let finAdobeWeek = {
            index: i,
            actuals: adobeData.RetRateCW,
            qrf: adobeData.RetRateTargetCW,
            qrfDiff: adobeData.RetRateCWVsQrfDiff,
            type: adobeData.market_area_code,
            vsQrf: adobeData.RetRateCWVsQrf,
            ww: adobeData.RetRateWW
        }
        qtrFinWeek.push(finAdobeWeek);

        //TODO: MAp to correct fields for QTR UI Rate
        let ui = {
            index: i,
            actuals: adobeData.UIRateActual,
            qq: adobeData.UIRateQQTY,
            qrf: adobeData.UIRateTarget,
            qrfDiff: adobeData.UIRatevsQrfDiff,
            type: adobeData.market_area_code,
            units: adobeData.CancelUnitsActual,
            vsQrf: adobeData.UIRateVsQrf,
            yy: adobeData.UIRateYY
        }
        qtrUi.push(ui);

        let uiWeek = {
            index: i,
            actuals: adobeData.UIRateCW,
            qrf: adobeData.UIRateTargetCW,
            qrfDiff: adobeData.UIRateCWVsQrfDiff,
            type: adobeData.market_area_code,
            vsQrf: adobeData.UIRateCWVsQrf,
            ww: adobeData.UIRateWW
        }
        qtrUiWeek.push(uiWeek);
        // TODO: Use correct fields for PF Rate 
        let pfAdobe = {
            index: i,
            actuals: adobeData.PFRateActual,
            qq: adobeData.PFRateQQTY,
            qrf: adobeData.PFRateTarget,
            qrfDiff: adobeData.PFRatevsQrfDiff,
            type: adobeData.market_area_code,
            units: adobeData.CancelUnitsActual,
            vsQrf: adobeData.PFRateVsQrf,
            yy: adobeData.PFRateYY
        }
        qtrPf.push(pfAdobe);

        let pfWeek = {
            index: i,
            actuals: adobeData.PFRateCW,
            qrf: adobeData.PFRateTargetCW,
            qrfDiff: adobeData.PFRateCWVsQrfDiff,
            type: adobeData.market_area_code,
            vsQrf: adobeData.PFRateCWVsQrf,
            ww: adobeData.PFRateWW
        }
        qtrPfWeek.push(pfWeek);







    }

    for (let i = 0; i < Reseller.length; i++) {
        let reseller = Reseller[i];




        let eotItem = {
            index: i,
            actuals: reseller.EOTRateActuals,
            marketArea: reseller.market_area_group,
            qq: reseller.EOTRateQQTY,
            qrf: reseller.EOTRateTarget,
            qrfDiff: reseller.EOTRateVsQrfDiff,
            type: reseller.market_area_code,
            units: reseller.CancelUnitsActual,
            vsQrf: reseller.EOTRatevsQrf,
            yy: reseller.EOTRateYY
        }
        eot.push(eotItem);

        let eotWeekItem = {
            index: i,
            actuals: reseller.EOTRateCW,
            marketArea: reseller.market_area_group,
            qrf: reseller.EOTRateTargetCW,
            qrfDiff: reseller.EOTRateCWVsQrfDiff,
            type: reseller.market_area_code,
            vsQrf: reseller.EOTRateCWVsQrf,
            ww: reseller.EOTRateWW
        }
        eotWeek.push(eotWeekItem);





    }

    for (let i = 0; i < Etail.length; i++) {
        let etail = Etail[i];



        let finEtail = {
            index: i,
            actuals: etail.RetRateActual,
            qq: etail.RetRateQQTY,
            qrf: etail.RetRateTarget,
            qrfDiff: etail.RetRatevsQrfDiff,
            type: etail.market_area_code,
            units: etail.CancelUnitsActual,
            vsQrf: etail.RetRateVsQrf,
            yy: etail.RetRateYY
        }
        qtrFinEtail.push(finEtail);

        let finEtailWeek = {
            index: i,
            actuals: etail.RetRateCW,
            qrf: etail.RetRateTargetCW,
            qrfDiff: etail.RetRateCWVsQrfDiff,
            type: etail.market_area_code,
            vsQrf: etail.RetRateCWVsQrf,
            ww: etail.RetRateWW
        }
        qtrFinEtailWeek.push(finEtailWeek);



    }

    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.market.qtd = qtrFin;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.market.week = qtrFinWeek;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.market.qtd = qtrUi;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.market.week = qtrUiWeek;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.market.qtd = qtrPf;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.market.week = qtrPfWeek;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.market.qtd = eot;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.market.week = eotWeek;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.market.qtd = qtrFinEtail;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.market.week = qtrFinEtailWeek;
}
export function processRenewProductQTDData(data, newState, Etail) {
    console.log('Processing Product Renew QTD: ', data, Etail)
    let qtrFin = [], qtrFinWeek = [],
        qtrUi = [], qtrUiWeek = [],
        qtrPf = [], qtrPfWeek = [],
        eot = [], eotWeek = [],
        qtrFinEtail = [], qtrFinEtailWeek = []


    for (let i = 0; i < data.length; i++) {
        let adobeData = data[i];

        let finAdobe = {
            index: i,
            actuals: adobeData.RetRateActual,
            qq: adobeData.RetRateQQTY,
            qrf: adobeData.RetRateTarget,
            qrfDiff: adobeData.RetRatevsQrfDiff,
            type: adobeData.product_category,
            units: adobeData.CancelUnitsActual,
            vsQrf: adobeData.RetRateVsQrf,
            yy: adobeData.RetRateYY
        }
        qtrFin.push(finAdobe);

        let finAdobeWeek = {
            index: i,
            actuals: adobeData.RetRateCW,
            qrf: adobeData.RetRateTargetCW,
            qrfDiff: adobeData.RetRateCWVsQrfDiff,
            type: adobeData.product_category,
            vsQrf: adobeData.RetRateCWVsQrf,
            ww: adobeData.RetRateWW
        }
        qtrFinWeek.push(finAdobeWeek);

        //TODO: MAp to correct fields for QTR UI Rate
        let ui = {
            index: i,
            actuals: adobeData.UIRateActual,
            qq: adobeData.UIRateQQTY,
            qrf: adobeData.UIRateTarget,
            qrfDiff: adobeData.UIRatevsQrfDiff,
            type: adobeData.product_category,
            units: adobeData.CancelUnitsActual,
            vsQrf: adobeData.UIRateVsQrf,
            yy: adobeData.UIRateYY
        }
        qtrUi.push(ui);

        let uiWeek = {
            index: i,
            actuals: adobeData.UIRateCW,
            qrf: adobeData.UIRateTargetCW,
            qrfDiff: adobeData.UIRateCWVsQrfDiff,
            type: adobeData.product_category,
            vsQrf: adobeData.UIRateCWVsQrf,
            ww: adobeData.UIRateWW
        }
        qtrUiWeek.push(uiWeek);
        // TODO: Use correct fields for PF Rate 
        let pfAdobe = {
            index: i,
            actuals: adobeData.PFRateActual,
            qq: adobeData.PFRateQQTY,
            qrf: adobeData.PFRateTarget,
            qrfDiff: adobeData.PFRatevsQrfDiff,
            type: adobeData.product_category,
            units: adobeData.CancelUnitsActual,
            vsQrf: adobeData.PFRateVsQrf,
            yy: adobeData.PFRateYY
        }
        qtrPf.push(pfAdobe);

        let pfWeek = {
            index: i,
            actuals: adobeData.PFRateCW,
            qrf: adobeData.PFRateTargetCW,
            qrfDiff: adobeData.PFRateCWVsQrfDiff,
            type: adobeData.product_category,
            vsQrf: adobeData.PFRateCWVsQrf,
            ww: adobeData.PFRateWW
        }
        qtrPfWeek.push(pfWeek);
    }
    for (let i = 0; i < Etail.length; i++) {
        let
            etail = Etail[i];
        let finEtail = {
            index: i,
            actuals: etail.RetRateActual,
            qq: etail.RetRateQQTY,
            qrf: etail.RetRateTarget,
            qrfDiff: etail.RetRatevsQrfDiff,
            type: etail.product_category,
            units: etail.CancelUnitsActual,
            vsQrf: etail.RetRateVsQrf,
            yy: etail.RetRateYY
        }
        qtrFinEtail.push(finEtail);

        let finEtailWeek = {
            index: i,
            actuals: etail.RetRateCW,
            qrf: etail.RetRateTargetCW,
            qrfDiff: etail.RetRateCWVsQrfDiff,
            type: etail.product_category,
            vsQrf: etail.RetRateCWVsQrf,
            ww: etail.RetRateWW
        }
        qtrFinEtailWeek.push(finEtailWeek);
    }
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.product.qtd = qtrFin;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.product.week = qtrFinWeek;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.product.qtd = qtrUi;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.product.week = qtrUiWeek;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.product.qtd = qtrPf;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.product.week = qtrPfWeek;
    // newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.product.qtd = eot;
    // newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.product.week = eotWeek;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.product.qtd = qtrFinEtail;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.product.week = qtrFinEtailWeek;
}
export function processRenewSegmentQTDData(data, newState, Reseller, Etail) {
    let qtrFin = [], qtrFinWeek = [],
        qtrUi = [], qtrUiWeek = [],
        qtrPf = [], qtrPfWeek = [],
        eot = [], eotWeek = [],
        qtrFinEtail = [], qtrFinEtailWeek = []


    for (let i = 0; i < data.length; i++) {
        let adobeData = data[i],
            reseller = Reseller[i],
            etail = Etail[i];

        let finAdobe = {
            index: i,
            actuals: adobeData.RetRateActual,
            qq: adobeData.RetRateQQTY,
            qrf: adobeData.RetRateTarget,
            qrfDiff: adobeData.RetRatevsQrfDiff,
            type: adobeData.segment_pivot,
            units: adobeData.CancelUnitsActual,
            vsQrf: adobeData.RetRateVsQrf,
            yy: adobeData.RetRateYY
        }
        qtrFin.push(finAdobe);

        let finAdobeWeek = {
            index: i,
            actuals: adobeData.RetRateCW,
            qrf: adobeData.RetRateTargetCW,
            qrfDiff: adobeData.RetRateCWVsQrfDiff,
            type: adobeData.segment_pivot,
            vsQrf: adobeData.RetRateCWVsQrf,
            ww: adobeData.RetRateWW
        }
        qtrFinWeek.push(finAdobeWeek);

        //TODO: MAp to correct fields for QTR UI Rate
        let ui = {
            index: i,
            actuals: adobeData.UIRateActual,
            qq: adobeData.UIRateQQTY,
            qrf: adobeData.UIRateTarget,
            qrfDiff: adobeData.UIRatevsQrfDiff,
            type: adobeData.segment_pivot,
            units: adobeData.CancelUnitsActual,
            vsQrf: adobeData.UIRateVsQrf,
            yy: adobeData.UIRateYY
        }
        qtrUi.push(ui);

        let uiWeek = {
            index: i,
            actuals: adobeData.UIRateCW,
            qrf: adobeData.UIRateTargetCW,
            qrfDiff: adobeData.UIRateCWVsQrfDiff,
            type: adobeData.segment_pivot,
            vsQrf: adobeData.UIRateCWVsQrf,
            ww: adobeData.UIRateWW
        }
        qtrUiWeek.push(uiWeek);
        // TODO: Use correct fields for PF Rate 
        let pfAdobe = {
            index: i,
            actuals: adobeData.PFRateActual,
            qq: adobeData.PFRateQQTY,
            qrf: adobeData.PFRateTarget,
            qrfDiff: adobeData.PFRatevsQrfDiff,
            type: adobeData.segment_pivot,
            units: adobeData.CancelUnitsActual,
            vsQrf: adobeData.PFRateVsQrf,
            yy: adobeData.PFRateYY
        }
        qtrPf.push(pfAdobe);

        let pfWeek = {
            index: i,
            actuals: adobeData.PFRateCW,
            qrf: adobeData.PFRateTargetCW,
            qrfDiff: adobeData.PFRateCWVsQrfDiff,
            type: adobeData.segment_pivot,
            vsQrf: adobeData.PFRateCWVsQrf,
            ww: adobeData.PFRateWW
        }
        qtrPfWeek.push(pfWeek);

    }

    for (let i = 0; i < Reseller.length; i++) {
        let reseller = Reseller[i];

        // TODO: Use correct fields for EOT

        let eotItem = {
            index: i,
            actuals: reseller.EOTRateActuals,
            marketArea: reseller.market_area_group,
            qq: reseller.EOTRateQQTY,
            qrf: reseller.EOTRateTarget,
            qrfDiff: reseller.EOTRateVsQrfDiff,
            type: reseller.segment_pivot,
            units: reseller.CancelUnitsActual,
            vsQrf: reseller.EOTRatevsQrf,
            yy: reseller.EOTRateYY
        }
        eot.push(eotItem);

        let eotWeekItem = {
            index: i,
            actuals: reseller.EOTRateCW,
            marketArea: reseller.market_area_group,
            qrf: reseller.EOTRateTargetCW,
            qrfDiff: reseller.EOTRateCWVsQrfDiff,
            type: reseller.segment_pivot,
            vsQrf: reseller.EOTRateCWVsQrf,
            ww: reseller.EOTRateWW
        }
        eotWeek.push(eotWeekItem);


    }

    for (let i = 0; i < Etail.length; i++) {
        let etail = Etail[i];






        let finEtail = {
            index: i,
            actuals: etail.RetRateActual,
            qq: etail.RetRateQQTY,
            qrf: etail.RetRateTarget,
            qrfDiff: etail.RetRatevsQrfDiff,
            type: etail.segment_pivot,
            units: etail.CancelUnitsActual,
            vsQrf: etail.RetRateVsQrf,
            yy: etail.RetRateYY
        }
        qtrFinEtail.push(finEtail);

        let finEtailWeek = {
            index: i,
            actuals: etail.RetRateCW,
            qrf: etail.RetRateTargetCW,
            qrfDiff: etail.RetRateCWVsQrfDiff,
            type: etail.segment_pivot,
            vsQrf: etail.RetRateCWVsQrf,
            ww: etail.RetRateWW
        }
        qtrFinEtailWeek.push(finEtailWeek);
    }
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.segment.qtd = qtrFin;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].details.segment.week = qtrFinWeek;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.segment.qtd = qtrUi;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].details.segment.week = qtrUiWeek;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.segment.qtd = qtrPf;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].details.segment.week = qtrPfWeek;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.segment.qtd = eot;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].details.segment.week = eotWeek;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.segment.qtd = qtrFinEtail;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].details.segment.week = qtrFinEtailWeek;
}
export function processRenewSecondaryData(data, newState) {
    newState[SUMMARY_KPIS.RENEW_CANCEL].value = data[0].data[0].CancelARRActual;
    newState[SUMMARY_KPIS.RENEW_CANCEL].targetFQ = data[0].data[0].CancelARRTargetFQ;
    newState[SUMMARY_KPIS.RENEW_CANCEL].target = data[0].data[0].CancelARRTarget;
    newState[SUMMARY_KPIS.RENEW_CANCEL].vsQrf = data[0].data[0].CancelVsQrf;

    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].value = data[1].data[0].CancelARRActual;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].targetFQ = data[1].data[0].CancelARRTargetFQ;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].target = data[1].data[0].CancelARRTarget;
    newState[SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM].vsQrf = data[1].data[0].CancelVsQrf;

    newState[SUMMARY_KPIS.RENEW_QTR_FIN].value = data[2].data[0].QFRRActual;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].targetFQ = data[2].data[0].QFRRTargetFQ;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].target = data[2].data[0].QFRRTarget;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN].vsQrf = data[2].data[0].QFRRVsQrf;

    newState[SUMMARY_KPIS.RENEW_QTR_UI].value = data[2].data[0].UIRateActual;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].targetFQ = data[2].data[0].UIRateTargetFQ;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].target = data[2].data[0].UIRateTarget;
    newState[SUMMARY_KPIS.RENEW_QTR_UI].vsQrf = data[2].data[0].UIRateVsQrf;

    newState[SUMMARY_KPIS.RENEW_QTR_PF].value = data[2].data[0].PFRateActual;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].targetFQ = data[2].data[0].PFRateTargetFQ;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].target = data[2].data[0].PFRateTarget;
    newState[SUMMARY_KPIS.RENEW_QTR_PF].vsQrf = data[2].data[0].PFRateVsQrf;

    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].value = data[3].data[0].CancelARRActual;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].targetFQ = data[3].data[0].CancelARRTargetFQ;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].target = data[3].data[0].CancelARRTarget;
    newState[SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E].vsQrf = data[3].data[0].CancelVsQrf;


    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].value = data[4].data[0].EOTRateActual;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].targetFQ = data[4].data[0].EOTRateTargetFQ;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].target = data[4].data[0].EOTRateTarget;
    newState[SUMMARY_KPIS.RENEW_EOT_RESELLER].vsQrf = data[4].data[0].EOTRateVsQrf;

    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].value = data[5].data[0].QFRRActual;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].targetFQ = data[5].data[0].QFRRTargetFQ;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].target = data[5].data[0].QFRRTarget;
    newState[SUMMARY_KPIS.RENEW_QTR_FIN_RETAIL].vsQrf = data[5].data[0].QFRRVsQrf;
}
