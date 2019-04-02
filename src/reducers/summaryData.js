import {
    ADD_NEW_PRIMARY_COMMENT,
    ADD_NEW_PRIMARY_REPLY,
    ADD_NEW_SECONDARY_COMMENT,
    ADD_NEW_SECONDARY_REPLY,
    GET_SUMMARY_DATA,
    FETCH_COMMENTS_COUNT,
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
    GET_RENEW_SECONDARY_DATA,
    DELETE_COMMENT,
    RESET_DATA,
    UPDATE_PRIMARY_IS_LOADING,
    UPDATE_DISCOVER_SECONDARY_IS_LOADING,
    UPDATE_FINANCE_SECONDARY_IS_LOADING,
    UPDATE_TRY_IS_LOADING,
    UPDATE_TRAFFIC_IS_LOADING,
    UPDATE_MU_IS_LOADING,
    UPDATE_FINANCE_XDC_1_IS_LOADING ,
UPDATE_FINANCE_XDC_2_IS_LOADING ,
    // FETCH_COMMENTS
} from 'actions/types';
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
    secondary: SecondaryData
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
                    tryIsLoaded: false
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
            // financeSecondary, financeMultichart, financeUnitsMultichart,
            // financeQTDTotals, financeGeoQTD, financeMarketQTD,
            // financeSegmentQTD, financeRouteQTD, financeProductQTD

            processXDC1FinanceSecondaryData(action.payload[0], newState.secondary);
            processXDC2FinanceSecondaryData(action.payload[1], newState.secondary);
            // processFinancialMultichart(newState.secondary, action.payload[1].data);
            // processFinancialUnitsMultichart(newState.secondary, action.payload[2].data);
            // processFinancialQTD(newState.secondary, action.payload[3].data);

            // processFinancialGeoQTD(newState.secondary, action.payload[4].data);
            // processFinancialGeoWeek(newState.secondary, action.payload[4].data)

            // processFinancialMarketQTD(newState.secondary, action.payload[5].data);
            // processFinancialMarketWeek(newState.secondary, action.payload[5].data);
            // processFinancialrouteQTD(newState.secondary, action.payload[7].data);
            // processFinancialrouteWeek(newState.secondary, action.payload[7].data)

            // processFinancialSegmentQTD(newState.secondary, action.payload[6].data);
            // processFinancialSegmentWeek(newState.secondary, action.payload[6].data);

            // processFinancialproductQTD(newState.secondary, action.payload[8].data);
            // processFinancialProductWeek(newState.secondary, action.payload[8].data);
            return { ...newState, financeSecondaryIsLoaded: true };
        case GET_FINANCE_XDC1_SECONDARY_DATA:
        console.log("Request for XDC 1 Finance: ",action.payload);
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
        return {...newState, financeXDC1IsLoaded: true};
        case GET_FINANCE_XDC2_SECONDARY_DATA:
        console.log("Request for XDC 2 Finance: ",action.payload);
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
            console.log('New State for XDC2',newState);
        return {...newState, financeXDC2IsLoaded: true};
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
            processTrafficConvQTDData(action.payload[7].data, newState.secondary);
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
            return { ...newState, tryIsLoaded: true };
        case GET_BUY_TRAFFIC_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('bUY Traffic Data ', action.payload);
            processBuyUQFMSecondaryData(action.payload[0].data[0], newState.secondary);
            processBuyUQFMMultichartData(action.payload[1].data, newState.secondary);
            processBuyUQFMQTDData(action.payload[2].data[0], newState.secondary);
            processBuyUQFMGeoQTDData(action.payload[3].data, newState.secondary);
            processBuyUQFMMarketQTDData(action.payload[4].data, newState.secondary);

            return { ...newState, dataIsReset: false };
        case GET_BUY_MKTG_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('Request For Mktg Sourced + PM Sourced & Spend Secondary Details Data: ', action.payload);

            processBuyMKTSourcedSecondary(action.payload[1].data[0], newState.secondary);
            processBuyMKTSourcedMultichart(action.payload[2].data, newState.secondary);
            processBuyMKTSourcedQTD(action.payload[3].data[0], newState.secondary);
            processBuyMKTSourcedGeoQTD(action.payload[4].data, newState.secondary);
            processBuyMKTSourcedMAQTD(action.payload[5].data, newState.secondary);
            processBuyMKTSourcedGeoQTD(action.payload[6].data, newState.secondary);
            processBuyMKTSourcedSegmentQTD(action.payload[7].data, newState.secondary);
            processBuyMKTSourcedChannelQTD(action.payload[8].data, newState.secondary);

            // processBuyPMSSSecondaryData(action.payload[0].data[0], newState.secondary);
            processBuyPMSSMultichartData(action.payload[7].data, newState.secondary);
            processBuyPMSSQTDData(action.payload[8].data[0], newState.secondary);
            processBuyPMSSGeoQTDData(action.payload[9].data, newState.secondary);
            processBuyPMSSMarketQTDData(action.payload[10].data, newState.secondary);
            processBuyPMSSChannelQTDData(action.payload[11].data, newState.secondary);

            return { ...newState, dataIsReset: false };
        case GET_BUY_FINANCE_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('Request For Buy Gross ARR Secondary Details Data: ', action.payload);
            processBuyGrossSecondaryData(action.payload[0], newState.secondary);
            processBuyGrossMultichart(newState.secondary, action.payload[1].data);
            processBuyGrossUnitsMultichart(newState.secondary, action.payload[2].data);
            processBuyGrossQTD(newState.secondary, action.payload[3].data);
            processBuyGrossGeoQTD(newState.secondary, action.payload[4].data);
            processBuyGrossGeoWeek(newState.secondary, action.payload[4].data)
            processBuyGrossMarketQTD(newState.secondary, action.payload[5].data);
            processBuyGrossMarketWeek(newState.secondary, action.payload[5].data);
            processBuyGrossrouteQTD(newState.secondary, action.payload[7].data);
            processBuyGrossrouteWeek(newState.secondary, action.payload[7].data)
            processBuyGrossSegmentQTD(newState.secondary, action.payload[6].data);
            processBuyGrossSegmentWeek(newState.secondary, action.payload[6].data);
            processBuyGrossproductQTD(newState.secondary, action.payload[8].data);
            processBuyGrossProductWeek(newState.secondary, action.payload[8].data);

            return { ...newState , dataIsReset: false};
        case ADD_NEW_PRIMARY_COMMENT:
            index = action.payload.square;
            copyOfState = JSON.parse(JSON.stringify(state));
            let newComments = copyOfState.primary[index].comments.map(item => {
                return item
            })
            newComments.push(action.payload.comment);
            return { ...copyOfState, comments: newComments };
        // CAse for adding a reply to a previous comment
        case ADD_NEW_PRIMARY_REPLY:
            index = action.payload.square;
            copyOfState = JSON.parse(JSON.stringify(state));
            commentIndex = Number(action.payload.comment)
            copyOfState.primary[index].comments[commentIndex].replies.push(action.payload.reply);
            return { ...copyOfState };
        case ADD_NEW_SECONDARY_COMMENT:
            index = action.payload.square;
            copyOfState =JSON.parse(JSON.stringify(state));
            copyOfState.secondary[index].comments.push(action.payload.comment);
            return { ...copyOfState };
        // CAse for adding a reply to a previous comment
        case ADD_NEW_SECONDARY_REPLY:
            index = action.payload.square;
            copyOfState = JSON.parse(JSON.stringify(state));
            commentIndex = Number(action.payload.comment)
            copyOfState.secondary[index].comments[commentIndex].replies.push(action.payload.reply);
            return { ...copyOfState };
        case FETCH_COMMENTS_COUNT:
            copyOfState = JSON.parse(JSON.stringify(state));
            const commentsCount = action.payload;
            // console.log(commentsCount);
            for (let i = 0; i < commentsCount.length; i++) {
                copyOfState.secondary[commentsCount[i].metricId].comments.push(commentsCount[i].commentCount);
            }

            return { ...copyOfState };
        case DELETE_COMMENT:
            copyOfState = JSON.parse(JSON.stringify(state));
            let { commentId, activeSquareID } = action.payload;
            // console.log(copyOfState.secondary[activeSquareID]);
            copyOfState.secondary[activeSquareID] = {
                ...copyOfState.secondary[activeSquareID],
                comments: copyOfState.secondary[activeSquareID].comments.filter(comment => {
                    comment.id !== commentId
                })
            }
            // console.log(copyOfState.secondary[activeSquareID].comments);

            return {...copyOfState};
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
// TODO: Move to Services
export function processFinanceSecondaryData(g1, newState) {
    //Finance
    newState[0].value = g1.data[0].NewARRActual;
    newState[0].target = g1.data[0].NewARRTarget;
    newState[0].targetFQ = g1.data[0].NewARRTargetFQ;
    newState[0].vsQrf = g1.data[0].NewVsQrf;
    // //Gross New Arr
    newState[1].value = g1.data[0].GrossARRActual;
    newState[1].targetFQ = g1.data[0].GrossARRTargetFQ;
    newState[1].target = g1.data[0].GrossARRTarget;
    newState[1].vsQrf = g1.data[0].GrossVsQrf;
    //  //Cacncellations
    newState[2].value = g1.data[0].CancelARRActual;
    newState[2].targetFQ = g1.data[0].CancelARRTargetFQ;
    newState[2].target = g1.data[0].CancelARRTarget;
    newState[2].vsQrf = g1.data[0].CancelVsQrf;
    //   //Renewal
    newState[3].value = g1.data[0].RenewActuals;
    newState[3].targetFQ = g1.data[0].RenewARRTargetFQ;
    newState[3].target = g1.data[0].RenewARRTarget;
    newState[3].vsQrf = g1.data[0].RenewVSQRF;
}
export function processFinancialMultichart(newState, data) {

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
    //Set Multichart Values
    for (let i = 0; i < newState.length; i++) {
        switch (i) {
            case 0:
                currentMulti = [netArr.actual, netArr.target, netArr.ly, netArr.lq];
                break;
            case 1:
                currentMulti = [grossArr.actual, grossArr.target, grossArr.ly, grossArr.lq];
                break;
            case 2:
                currentMulti = [netCancellations.actual, netCancellations.target, netCancellations.ly, netCancellations.lq];
                break;
            case 3:
                currentMulti = [termRenewal.actual, termRenewal.target, termRenewal.ly, termRenewal.lq];
                break;
            default:
                break;
        }
        newState[i]['details'].multichart = currentMulti;
    }
}
export function processFinancialUnitsMultichart(newState, data) {
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
    for (let i = 0; i < newState.length; i++) {
        newMulti = []
        switch (i) {
            case 0:
                newMulti = [netUnits.actual, netUnits.target, netUnits.ly, netUnits.lq];
                break;
            case 1:
                newMulti = [grossUnits.actual, grossUnits.target, grossUnits.ly, grossUnits.lq];
                break;
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
        // newState[i]['valueType'] = 'currency';
    }
}
export function processFinancialQTD(newState, data) {
    newState = Object.assign([], newState);
    // console.log(data)
    // State Order: Actual, Units, QRF, QRFDiff, VSQrf, QQ, YY
    for (let i = 0; i < newState.length; i++) {
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
                newState[i].details.stats[1].value = findata.NewARRQQLY;
                newState[i].details.stats[2].value = findata.NewARRQQTY;
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
export function processFinancialGeoQTD(newState, data) {
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
    newState[0].details.geo.qtd = processQTDOrder(item1);
    newState[1].details.geo.qtd = processQTDOrder(item2);
    newState[2].details.geo.qtd = processQTDOrder(item3);
    newState[3].details.geo.qtd = processQTDOrder(item4);
}



export function processFinancialGeoWeek(newState, data) {
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
    newState[0].details.geo.week = processQTDOrder(item1);
    newState[1].details.geo.week = processQTDOrder(item2);
    newState[2].details.geo.week = processQTDOrder(item3);
    newState[3].details.geo.week = processQTDOrder(item4);
}
export function processFinancialMarketQTD(newState, data) {

    //Clear old Values
    newState[0].details.market.qtd = [];
    newState[1].details.market.qtd = [];
    newState[2].details.market.qtd = [];
    newState[3].details.market.qtd = [];
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

        newState[0].details.market.qtd.push(net);
        newState[1].details.market.qtd.push(gross);
        newState[2].details.market.qtd.push(canc);
        newState[3].details.market.qtd.push(ren);

    }

}
export function processFinancialMarketWeek(newState, data) {
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
    newState[0].details.market.week = item1;
    newState[1].details.market.week = item2;
    newState[2].details.market.week = item3;
    newState[3].details.market.week = item4;
}
export function processFinancialrouteQTD(newState, data) {

    //Clear old Values
    newState[0].details.route.qtd = [];
    newState[1].details.route.qtd = [];
    newState[2].details.route.qtd = [];
    newState[3].details.route.qtd = [];
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

        newState[0].details.route.qtd.push(net);
        newState[1].details.route.qtd.push(gross);
        newState[2].details.route.qtd.push(canc);
        newState[3].details.route.qtd.push(ren);

    }

}
export function processFinancialrouteWeek(newState, data) {
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
    newState[0].details.route.week = item1;
    newState[1].details.route.week = item2;
    newState[2].details.route.week = item3;
    newState[3].details.route.week = item4;
}
export function processFinancialSegmentQTD(newState, data) {

    //Clear old Values
    newState[0].details.segment.qtd = [];
    newState[1].details.segment.qtd = [];
    newState[2].details.segment.qtd = [];
    newState[3].details.segment.qtd = [];
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

        newState[0].details.segment.qtd.push(net);
        newState[1].details.segment.qtd.push(gross);
        newState[2].details.segment.qtd.push(canc);
        newState[3].details.segment.qtd.push(ren);

    }

}
export function processFinancialSegmentWeek(newState, data) {
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
    newState[0].details.segment.week = item1;
    newState[1].details.segment.week = item2;
    newState[2].details.segment.week = item3;
    newState[3].details.segment.week = item4;
}
export function processFinancialproductQTD(newState, data) {

    //Clear old Values
    newState[0].details.product.qtd = [];
    newState[1].details.product.qtd = [];
    newState[2].details.product.qtd = [];
    newState[3].details.product.qtd = [];
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

        newState[0].details.product.qtd.push(net);
        newState[1].details.product.qtd.push(gross);
        newState[2].details.product.qtd.push(canc);
        newState[3].details.product.qtd.push(ren);

    }

}
export function processFinancialProductWeek(newState, data) {
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
    newState[0].details.product.week = item1;
    newState[1].details.product.week = item2;
    newState[2].details.product.week = item3;
    newState[3].details.product.week = item4;
}
//XDC1
export function processXDC1FinanceSecondaryData(g1, newState) {
    //Finance
    newState[0].value = g1.data[0].NewARRActual;
    newState[0].target = g1.data[0].NewARRTarget;
    newState[0].targetFQ = g1.data[0].NewARRTargetFQ;
    newState[0].vsQrf = g1.data[0].NewVsQrf;
    // //Gross New Arr
    newState[1].value = g1.data[0].GrossARRActual;
    newState[1].targetFQ = g1.data[0].GrossARRTargetFQ;
    newState[1].target = g1.data[0].GrossARRTarget;
    newState[1].vsQrf = g1.data[0].GrossVsQrf;
    // //  //Cacncellations
    // newState[2].value = g1.data[0].CancelARRActual;
    // newState[2].targetFQ = g1.data[0].CancelARRTargetFQ;
    // newState[2].target = g1.data[0].CancelARRTarget;
    // newState[2].vsQrf = g1.data[0].CancelVsQrf;
    // //   //Renewal
    // newState[3].value = g1.data[0].RenewActuals;
    // newState[3].targetFQ = g1.data[0].RenewARRTargetFQ;
    // newState[3].target = g1.data[0].RenewARRTarget;
    // newState[3].vsQrf = g1.data[0].RenewVSQRF;
}
export function processXDC1FinancialMultichart(newState, data) {

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
    //Set Multichart Values
    for (let i = 0; i <=2; i++) {
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
        // newState[i]['valueType'] = 'currency';
    }
}
export function processXDC1FinancialQTD(newState, data) {
    newState = Object.assign([], newState);
    // console.log(data)
    // State Order: Actual, Units, QRF, QRFDiff, VSQrf, QQ, YY
    for (let i = 0; i <=2; i++) {
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
                newState[i].details.stats[1].value = findata.NewARRQQLY;
                newState[i].details.stats[2].value = findata.NewARRQQTY;
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
    newState[0].details.geo.qtd = processQTDOrder(item1);
    newState[1].details.geo.qtd = processQTDOrder(item2);
    // newState[2].details.geo.qtd = processQTDOrder(item3);
    // newState[3].details.geo.qtd = processQTDOrder(item4);
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
    newState[0].details.geo.week = processQTDOrder(item1);
    newState[1].details.geo.week = processQTDOrder(item2);
    // newState[2].details.geo.week = processQTDOrder(item3);
    // newState[3].details.geo.week = processQTDOrder(item4);
}
export function processXDC1FinancialMarketQTD(newState, data) {

    //Clear old Values
    newState[0].details.market.qtd = [];
    newState[1].details.market.qtd = [];
   
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

        newState[0].details.market.qtd.push(net);
        newState[1].details.market.qtd.push(gross);
        // newState[2].details.market.qtd.push(canc);
        // newState[3].details.market.qtd.push(ren);

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
    newState[0].details.market.week = item1;
    newState[1].details.market.week = item2;
    // newState[2].details.market.week = item3;
    // newState[3].details.market.week = item4;
}
export function processXDC1FinancialrouteQTD(newState, data) {

    //Clear old Values
    newState[0].details.route.qtd = [];
    newState[1].details.route.qtd = [];
   
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

        newState[0].details.route.qtd.push(net);
        newState[1].details.route.qtd.push(gross);
        // newState[2].details.route.qtd.push(canc);
        // newState[3].details.route.qtd.push(ren);

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
    newState[0].details.route.week = item1;
    newState[1].details.route.week = item2;
    // newState[2].details.route.week = item3;
    // newState[3].details.route.week = item4;
}
export function processXDC1FinancialSegmentQTD(newState, data) {

    //Clear old Values
    newState[0].details.segment.qtd = [];
    newState[1].details.segment.qtd = [];
    newState[2].details.segment.qtd = [];
    newState[3].details.segment.qtd = [];
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

        newState[0].details.segment.qtd.push(net);
        newState[1].details.segment.qtd.push(gross);
        // newState[2].details.segment.qtd.push(canc);
        // newState[3].details.segment.qtd.push(ren);

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
    newState[0].details.segment.week = item1;
    newState[1].details.segment.week = item2;
    
}
export function processXDC1FinancialproductQTD(newState, data) {

    //Clear old Values
    newState[0].details.product.qtd = [];
    newState[1].details.product.qtd = [];

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

        newState[0].details.product.qtd.push(net);
        newState[1].details.product.qtd.push(gross);
      

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
    newState[0].details.product.week = item1;
    newState[1].details.product.week = item2;
  
}
//XDC2
export function processXDC2FinanceSecondaryData(g1, newState) {
    //Finance
    // newState[0].value = g1.data[0].NewARRActual;
    // newState[0].target = g1.data[0].NewARRTarget;
    // newState[0].targetFQ = g1.data[0].NewARRTargetFQ;
    // newState[0].vsQrf = g1.data[0].NewVsQrf;
    // // //Gross New Arr
    // newState[1].value = g1.data[0].GrossARRActual;
    // newState[1].targetFQ = g1.data[0].GrossARRTargetFQ;
    // newState[1].target = g1.data[0].GrossARRTarget;
    // newState[1].vsQrf = g1.data[0].GrossVsQrf;
    //  //Cacncellations
    newState[2].value = g1.data[0].CancelARRActual;
    newState[2].targetFQ = g1.data[0].CancelARRTargetFQ;
    newState[2].target = g1.data[0].CancelARRTarget;
    newState[2].vsQrf = g1.data[0].CancelVsQrf;
    //   //Renewal
    newState[3].value = g1.data[0].RenewActuals;
    newState[3].targetFQ = g1.data[0].RenewARRTargetFQ;
    newState[3].target = g1.data[0].RenewARRTarget;
    newState[3].vsQrf = g1.data[0].RenewVSQRF;
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
        newState[2]['details'].multichart = canc;
        newState[3]['details'].multichart = ren;

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
    for (let i = 2; i <=3; i++) {
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
    // newState[0].details.geo.qtd = processQTDOrder(item1);
    // newState[1].details.geo.qtd = processQTDOrder(item2);
    newState[2].details.geo.qtd = processQTDOrder(item3);
    newState[3].details.geo.qtd = processQTDOrder(item4);
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
    // newState[0].details.geo.week = processQTDOrder(item1);
    // newState[1].details.geo.week = processQTDOrder(item2);
    newState[2].details.geo.week = processQTDOrder(item3);
    newState[3].details.geo.week = processQTDOrder(item4);
}
export function processXDC2FinancialMarketQTD(newState, data) {

    //Clear old Values
  
    newState[2].details.market.qtd = [];
    newState[3].details.market.qtd = [];
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

        // newState[0].details.market.qtd.push(net);
        // newState[1].details.market.qtd.push(gross);
        newState[2].details.market.qtd.push(canc);
        newState[3].details.market.qtd.push(ren);

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
    // newState[0].details.market.week = item1;
    // newState[1].details.market.week = item2;
    newState[2].details.market.week = item3;
    newState[3].details.market.week = item4;
}
export function processXDC2FinancialrouteQTD(newState, data) {

    //Clear old Values
   
    newState[2].details.route.qtd = [];
    newState[3].details.route.qtd = [];
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

        // newState[0].details.route.qtd.push(net);
        // newState[1].details.route.qtd.push(gross);
        newState[2].details.route.qtd.push(canc);
        newState[3].details.route.qtd.push(ren);

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
    // newState[0].details.route.week = item1;
    // newState[1].details.route.week = item2;
    newState[2].details.route.week = item3;
    newState[3].details.route.week = item4;
}
export function processXDC2FinancialSegmentQTD(newState, data) {

    //Clear old Values
    
    newState[2].details.segment.qtd = [];
    newState[3].details.segment.qtd = [];
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

        // newState[0].details.segment.qtd.push(net);
        // newState[1].details.segment.qtd.push(gross);
        newState[2].details.segment.qtd.push(canc);
        newState[3].details.segment.qtd.push(ren);

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
    // newState[0].details.segment.week = item1;
    // newState[1].details.segment.week = item2;
    newState[2].details.segment.week = item3;
    newState[3].details.segment.week = item4;
}
export function processXDC2FinancialproductQTD(newState, data) {

    //Clear old Values
    
    newState[2].details.product.qtd = [];
    newState[3].details.product.qtd = [];
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

        // newState[0].details.product.qtd.push(net);
        // newState[1].details.product.qtd.push(gross);
        newState[2].details.product.qtd.push(canc);
        newState[3].details.product.qtd.push(ren);

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
    // newState[0].details.product.week = item1;
    // newState[1].details.product.week = item2;
    newState[2].details.product.week = item3;
    newState[3].details.product.week = item4;
}
/**Discover**/
//Traffic
export function processTrafficSecondaryData(g5, newState) {
    // console.log(g5, newState);

    newState[5].value = g5.TrafficActual;
    newState[5].target = g5.TrafficTarget;
    newState[5].targetFQ = g5.TrafficTargetFQ;
    newState[5].vsQrf = g5.TrafficVsQrf;
    //Bounce Rate
    newState[9].value = g5.BounceRateActual;
    newState[9].target = g5.BounceRateTarget;
    newState[9].targetFQ = g5.BounceRateTargetFQ;
    newState[9].vsQrf = g5.BounceRateVsQrf;

    newState[9].target = 0;

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
    newState[5]['details'].multichart = trafMulti;
    newState[9]['details'].multichart = bounceMulti;
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
                newState[i].details.qtdw.qtd[4].value = g5.BounceRateQQLY;
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
    newState[5].details.geo.qtd = [];
    newState[9].details.geo.qtd = [];
    newState[5].details.geo.week = [];
    newState[9].details.geo.week = [];

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
        newState[5].details.geo.qtd.push(traffic);
        newState[9].details.geo.qtd.push(bounce);
        newState[5].details.geo.week.push(trafficPM);
        newState[9].details.geo.week.push(bouncePM);
    }
}
export function processTrafficMarketQTDData(g5, newState) {
    //Clear old Values
    newState[5].details.market.qtd = [];
    newState[9].details.market.qtd = [];
    newState[5].details.market.week = [];
    newState[9].details.market.week = [];


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
        newState[5].details.market.qtd.push(traffic);
        newState[9].details.market.qtd.push(bounce);
        newState[5].details.market.week.push(trafficPM);
        newState[9].details.market.week.push(bouncePM);
    }

}
export function processTrafficWebSegmentQTDData(g5, newState) {
    //Clear old Values
    newState[5].details.segment.qtd = [];

    newState[9].details.segment.qtd = [];
    newState[5].details.segment.week = [];

    newState[9].details.segment.week = [];

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
        newState[5].details.segment.qtd.push(traffic);
        newState[9].details.segment.qtd.push(bounce);
        newState[5].details.segment.week.push(trafficPM);
        newState[9].details.segment.week.push(bouncePM);
    }
}
export function processTrafficLTCQTDData(g5, newState) {

    //Clear old Values
    newState[5].details = { ...newState[5].details, ltc: { qtd: [], week: [] } };
    newState[9].details = { ...newState[9].details, ltc: { qtd: [], week: [] } };

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
        newState[5].details.ltc.qtd.push(traffic);
        newState[9].details.ltc.qtd.push(bounce);
        newState[5].details.ltc.week.push(trafficPM);
        newState[9].details.ltc.week.push(bouncePM);
    }
}
export function processTrafficConvQTDData(g5, newState) {
    // console.log(g5);
    // console.log(newState);
    //Clear old Values
    newState[5].details.conversion.qtd = [];
    newState[9].details.conversion.qtd = [];
    newState[5].details.conversion.week = [];
    newState[9].details.conversion.week = [];

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
        newState[5].details.conversion.qtd.push(traffic);
        newState[9].details.conversion.qtd.push(bounce);
        newState[5].details.conversion.week.push(trafficPM);
        newState[9].details.conversion.week.push(bouncePM);
    }
}
export function processTrafficMobDeskQTDData(g5, newState) {

    //Clear old Values

    newState[5].details = { ...newState[5].details, mvd: { qtd: [], week: [] } };

    newState[9].details = { ...newState[9].details, mvd: { qtd: [], week: [] } };



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

        newState[5].details.mvd.qtd.push(traffic);

        newState[9].details.mvd.qtd.push(bounce);

        newState[5].details.mvd.week.push(trafficPM);

        newState[9].details.mvd.week.push(bouncePM);

    }

}
export function processTrafficNewRepQTDData(g5, newState) {

    //Clear old Values

    newState[5].details = { ...newState[5].details, nvr: { qtd: [], week: [] } };

    newState[9].details = { ...newState[9].details, nvr: { qtd: [], week: [] } };



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

        newState[5].details.nvr.qtd.push(traffic);

        newState[9].details.nvr.qtd.push(bounce);

        newState[5].details.nvr.week.push(trafficPM);

        newState[9].details.nvr.week.push(bouncePM);

    }

}
//End Traffic

// UQFM
export function processUQFMSecondaryData(data, newState) {
    newState[6].value = data.UQFMConvActual;
    newState[6].target = data.UQFMConvTarget;
    newState[6].targetFQ = data.UQFMConvTargetFQ;
    newState[6].vsQrf = data.UQFMConvVsQrf;
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
    newState[6]['details'].multichart = currentMulti;


}
export function processUQFMQTDData(data, newState) {


    newState[6].details.qtdw.qtd[0].value = data.UQFMConvActuals;
    newState[6].details.qtdw.qtd[1].value = data.UQFMConvTarget;
    newState[6].details.qtdw.qtd[2].value = data.UQFMConvVsQrfDiff
    newState[6].details.qtdw.qtd[3].value = data.UQFMConvvsQrf;
    newState[6].details.qtdw.qtd[4].value = data.UQFMConvQQTY;
    newState[6].details.qtdw.qtd[5].value = data.UQFMConvYY;

    newState[6].details.qtdw.week[0].value = data.UQFMConvCW;
    newState[6].details.qtdw.week[1].value = data.UQFMConvTargetCW;
    newState[6].details.qtdw.week[2].value = data.UQFMConvCWVsQrfDiff;
    newState[6].details.qtdw.week[3].value = data.UQFMConvCWVsQrf;
    newState[6].details.qtdw.week[4].value = data.UQFMConvWW;

    newState[6].details.stats[0].value = data.UQFMConvvsQrf;
    newState[6].details.stats[1].value = data.UQFMConvQQTY;
    newState[6].details.stats[2].value = data.UQFMConvQQLY;
    newState[6].details.stats[3].value = data.UQFMConvYY;

}
export function processUQFMGeoQTDData(data, newState) {
    //Clear old Values
    newState[6].details.geo.qtd = [];
    newState[6].details.geo.week = [];

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

        newState[6].details.geo.qtd.push(uqfm);
        newState[6].details.geo.week.push(uqfmWeek);
    }
}
export function processUQFMMarketQTDData(data, newState) {
    //Clear old Values
    newState[6].details.market.qtd = [];
    newState[6].details.market.week = [];


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
        newState[6].details.market.qtd.push(uqfm);
        newState[6].details.market.week.push(uqfmWeek);
    }
}
//End UQFM

// Marketable  Universe
export function processMUSecondaryData(data, newState) {

    newState[4].value = data.NetChangeMUActual;
    newState[4].target = data.NetChangeMUTarget;
    newState[4].targetFQ = data.NetChangeMUTargetFQ;
    newState[4].vsQrf = data.NetChangeMUVsQrf;
    newState[4].cumulative.value = data.CumuMUActual;
    newState[4].cumulative.target = data.CumuMUTarget;
    newState[4].cumulative.targetFQ = data.CumuMUTargetFQ;
    newState[4].cumulative.vsQrf = data.CumuMUVsQrf;
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
    newState[4]['details'].multichart = currentMuMulti;
    newState[4].cumulative.details.multichart = currentCumuMulti;

}
export function processMUQTDData(data, newState) {
    newState[4].details.qtdw.qtd[0].value = data.NetChangeMUActuals;
    newState[4].details.qtdw.qtd[1].value = data.NetChangeMUTarget;
    newState[4].details.qtdw.qtd[2].value = data.NetChangeMUVsQrfDiff
    newState[4].details.qtdw.qtd[3].value = data.NetChangeMUVsQrf;
    newState[4].details.qtdw.qtd[4].value = data.NetChangeMUQQTY;
    newState[4].details.qtdw.qtd[5].value = data.NetChangeMUYY;

    newState[4].details.qtdw.week[0].value = data.NetChangeMUCW;
    newState[4].details.qtdw.week[1].value = data.NetChangeMUTargetCW;
    newState[4].details.qtdw.week[2].value = data.NetChangeMUCWVsQrfDiff;
    newState[4].details.qtdw.week[3].value = data.NetChangeMUCWVsQrf;
    newState[4].details.qtdw.week[4].value = data.NetChangeMUWW;

    newState[4].details.stats[0].value = data.NetChangeMUVsQrf;
    newState[4].details.stats[1].value = data.NetChangeMUQQTY;
    newState[4].details.stats[2].value = data.NetChangeMUQQLY;
    newState[4].details.stats[3].value = data.NetChangeMUYY;

    newState[4].cumulative.details.qtdw.qtd[0].value = data.CumuMUActuals;
    newState[4].cumulative.details.qtdw.qtd[1].value = data.CumuMUTarget;
    newState[4].cumulative.details.qtdw.qtd[2].value = data.CumuMUVsQrfDiff;
    newState[4].cumulative.details.qtdw.qtd[3].value = data.CumuMUVsQrf;
    newState[4].cumulative.details.qtdw.qtd[4].value = data.CumuMUQQTY;
    newState[4].cumulative.details.qtdw.qtd[5].value = data.CumuMUYY;

    newState[4].cumulative.details.qtdw.week[0].value = data.CumuMUCW;
    newState[4].cumulative.details.qtdw.week[1].value = data.CumuMUTargetCW;
    newState[4].cumulative.details.qtdw.week[2].value = data.CumuMUCWVsQrfDiff;
    newState[4].cumulative.details.qtdw.week[3].value = data.CumuMUCWVsQrf;
    newState[4].cumulative.details.qtdw.week[4].value = data.CumuMUWW;

    newState[4].cumulative.details.stats[0].value = data.CumuMUVsQrf;
    newState[4].cumulative.details.stats[1].value = data.CumuMUQQTY;
    newState[4].cumulative.details.stats[2].value = data.CumuMUQQLY;
    newState[4].cumulative.details.stats[3].value = data.CumuMUYY;

}
export function processMUGeoQTDData(data, newState) {
    //Clear old Values
    newState[4].details = { ...newState[4].details, geo: { qtd: [], week: [] } };
    newState[4].cumulative.details = { ...newState[4].cumulative.details, geo: { qtd: [], week: [] } };

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
        newState[4].details.geo.qtd.push(netMu);
        newState[4].cumulative.details.geo.qtd.push(cumuMu);
        newState[4].cumulative.details.geo.week.push(cumuWeek);
        newState[4].details.geo.week.push(netWeek);
    }
}
export function processMUMarketQTDData(data, newState) {
    //Clear old Values
    newState[4].details = { ...newState[4].details, market: { qtd: [], week: [] } };
    newState[4].cumulative.details = { ...newState[4].cumulative.details, market: { qtd: [], week: [] } };

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
        newState[4].details.market.qtd.push(netMu);
        newState[4].cumulative.details.market.qtd.push(cumuMu);
        newState[4].cumulative.details.market.week.push(cumuWeek);
        newState[4].details.market.week.push(netWeek);
    }
}
export function processMUChannelQTDData(data, newState) {
    //Clear old Values
    newState[4].details = { ...newState[4].details, channel: { qtd: [], week: [] } };
    newState[4].cumulative.details = { ...newState[4].cumulative.details, channel: { qtd: [], week: [] } };

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
        newState[4].details.channel.qtd.push(netMu);
        newState[4].cumulative.details.channel.qtd.push(cumuMu);
        newState[4].cumulative.details.channel.week.push(cumuWeek);
        newState[4].details.channel.week.push(netWeek);
    }
}
//End Marketable Universe 

//  Paid Media spend and sourced
export function processPMSSSecondaryData(data, newState) {

    newState[7].value = data.PMSpendDiscoverActual;
    newState[7].target = data.PMSpendDiscoverTarget;
    newState[7].targetFQ = data.PMSpendDiscoverTargetFQ;
    newState[7].vsQrf = data.PMSpendDiscoverVsQrf;
    //Bounce Rate
    newState[8].value = data.PMUQFMActual;
    newState[8].target = data.PMUQFMTarget;
    newState[8].targetFQ = data.PMUQFMTargetFQ;
    newState[8].vsQrf = data.PMUQFMVsQrf;
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
    newState[7].details = { ...newState[7].details, geo: { qtd: [], week: [] } };
    newState[8].details = { ...newState[8].details, geo: { qtd: [], week: [] } };

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
        newState[7].details.geo.qtd.push(pm);
        newState[8].details.geo.qtd.push(pmuqfm);
        newState[7].details.geo.week.push(pmWeek);
        newState[8].details.geo.week.push(pmuqfmWeek);
    }
}
export function processPMSSMarketQTDData(data, newState) {
    //Clear old Values
    newState[7].details = { ...newState[7].details, market: { qtd: [], week: [] } };
    newState[8].details = { ...newState[8].details, market: { qtd: [], week: [] } };

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
        newState[7].details.market.qtd.push(pm);
        newState[8].details.market.qtd.push(pmuqfm);
        newState[7].details.market.week.push(pmWeek);
        newState[8].details.market.week.push(pmuqfmWeek);
    }
}

export function processPMSSChannelQTDData(data, newState) {
    //Clear old Values
    newState[7].details = { ...newState[7].details, channel: { qtd: [], week: [] } };
    newState[8].details = { ...newState[8].details, channel: { qtd: [], week: [] } };

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
        newState[7].details.channel.qtd.push(pm);
        newState[8].details.channel.qtd.push(pmuqfm);
        newState[7].details.channel.week.push(pmWeek);
        newState[8].details.channel.week.push(pmuqfmWeek);
    }
}
//End  Paid Media spend and sourced

/**Try**/
export function processTrySecondaryData(data, newState) {


    //   New UQFMS
    newState[10].value = data.NewUQFMSActual;
    newState[10].targetFQ = data.NewUQFMSTargetFQ;
    newState[10].target = data.NewUQFMsTarget;
    newState[10].vsQrf = data.NewUQFMsVsQrf;
    // Cumulative UQFMS
    newState[11].value = data.CumUQFMsActual;
    newState[11].targetFQ = data.CumUQFMsTargetFQ;
    newState[11].target = data.CumUQFMsTarget;
    newState[11].vsQrf = data.CumUQFMsVsQrf;
    //  New QFMS
    newState[12].value = data.NewQFMSActual;
    newState[12].targetFQ = data.NewQFMSTargetFQ;
    newState[12].target = data.NewQFMsTarget;
    newState[12].vsQrf = data.NewQFMsVsQrf;
    //Cumulative QFMs
    newState[13].value = data.CumQFMsActual;
    newState[13].targetFQ = data.CumQFMsTargetFQ;
    newState[13].target = data.CumQFMsTarget;
    newState[13].vsQrf = data.CumQFMsVsQrf;
    //28 Day New UQFM to QFM
    newState[14].value = data.Day28NewUQFMActual;
    newState[14].targetFQ = data.Day28NewUQFMTargetFQ;
    newState[14].vsQrf = data.Day28NewUQFMVsQrf;
    newState[14].target = data.Day28NewUQFMTarget;
    //Cum. UQFM to QFM
    newState[15].value = data.CumUQFMToQFMActual;
    newState[15].targetFQ = data.CumUQFMToQFMTargetFQ;
    newState[15].vsQrf = data.CumUQFMToQFMVsQrf;
    newState[15].target = data.CumUQFMToQFMTarget;

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
    console.log(newState[15].details.multichart);
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
                newState[i].details.qtdw.qtd[0].value = data.Day28NewUQFMActual;
                newState[i].details.qtdw.qtd[1].value = data.Day28NewUQFMTarget;
                newState[i].details.qtdw.qtd[2].value = data.Day28NewUQFMVsQrfDiff;
                newState[i].details.qtdw.qtd[3].value = data.Day28NewUQFMQQTY;
                newState[i].details.qtdw.qtd[4].value = data.Day28NewUQFMVsQrf;
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
                newState[i].details.qtdw.qtd[3].value = data.CumUQFMToQFMQQTY;
                newState[i].details.qtdw.qtd[4].value = data.CumUQFMToQFMVsQrf;
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
    newState[10].details = { ...newState[10].details, geo: { qtd: [], week: [] } };
    newState[11].details = { ...newState[11].details, geo: { qtd: [], week: [] } };
    newState[12].details = { ...newState[12].details, geo: { qtd: [], week: [] } };
    newState[13].details = { ...newState[13].details, geo: { qtd: [], week: [] } };
    newState[14].details = { ...newState[14].details, geo: { qtd: [], week: [] } };
    newState[15].details = { ...newState[15].details, geo: { qtd: [], week: [] } };

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
            actuals: item.Day28NewUQFMActual,
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

        newState[12].details.geo.qtd.push(newQFM);
        newState[12].details.geo.week.push(newQFMWeek);
        newState[10].details.geo.qtd.push(newUQFM);
        newState[10].details.geo.week.push(newUQFMWeek);
        newState[11].details.geo.qtd.push(cumuUQFM);
        newState[11].details.geo.week.push(cumuUQFMWeek);
        newState[13].details.geo.qtd.push(cumuQFM);
        newState[13].details.geo.week.push(cumuQFMWeek);
        newState[14].details.geo.qtd.push(day28);
        newState[14].details.geo.week.push(day28Week);
        newState[15].details.geo.qtd.push(cumuUTQ);
        newState[15].details.geo.week.push(cumuUTQWeek);
    }
}
export function processTryMarketQTDData(data, newState) {
    //Clear old Values
    newState[10].details = { ...newState[10].details, market: { qtd: [], week: [] } };
    newState[11].details = { ...newState[11].details, market: { qtd: [], week: [] } };
    newState[12].details = { ...newState[12].details, market: { qtd: [], week: [] } };
    newState[13].details = { ...newState[13].details, market: { qtd: [], week: [] } };
    newState[14].details = { ...newState[14].details, market: { qtd: [], week: [] } };
    newState[15].details = { ...newState[15].details, market: { qtd: [], week: [] } };

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
            actuals: item.Day28NewUQFMActual,
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

        newState[12].details.market.qtd.push(newQFM);
        newState[12].details.market.week.push(newQFMWeek);
        newState[10].details.market.qtd.push(newUQFM);
        newState[10].details.market.week.push(newUQFMWeek);
        newState[11].details.market.qtd.push(cumuUQFM);
        newState[11].details.market.week.push(cumuUQFMWeek);
        newState[13].details.market.qtd.push(cumuQFM);
        newState[13].details.market.week.push(cumuQFMWeek);
        newState[14].details.market.qtd.push(day28);
        newState[14].details.market.week.push(day28Week);
        newState[15].details.market.qtd.push(cumuUTQ);
        newState[15].details.market.week.push(cumuUTQWeek);

    }
}
export function processTryProductQTDData(data, newState) {
    //Clear old Values
    newState[12].details = { ...newState[12].details, product: { qtd: [], week: [] } };



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


        newState[12].details.product.qtd.push(newQFM);
        newState[12].details.product.week.push(newQFMWeek);


    }
}
export function processTrySignUpAppQTDData(data, newState) {
    //Clear old Values
    newState[10].details = { ...newState[10].details, signUpApp: { qtd: [], week: [] } };
    newState[11].details = { ...newState[11].details, signUpApp: { qtd: [], week: [] } };


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

        newState[10].details.signUpApp.qtd.push(newUQFM);
        newState[10].details.signUpApp.week.push(newUQFMWeek);
        newState[11].details.signUpApp.qtd.push(cumuUQFM);
        newState[11].details.signUpApp.week.push(cumuUQFMWeek);

    }
}
export function processTrySignUpCatQTDData(data, newState) {
    //Clear old Values
    newState[12].details = { ...newState[12].details, signUpCat: { qtd: [], week: [] } };

    newState[13].details = { ...newState[13].details, signUpCat: { qtd: [], week: [] } };
    newState[14].details = { ...newState[14].details, signUpCat: { qtd: [], week: [] } };
    newState[15].details = { ...newState[15].details, signUpCat: { qtd: [], week: [] } };


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
            actuals: item.Day28NewUQFMActual,
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

        newState[12].details.signUpCat.qtd.push(newQFM);
        newState[12].details.signUpCat.week.push(newQFMWeek);

        newState[13].details.signUpCat.qtd.push(cumuQFM);
        newState[13].details.signUpCat.week.push(cumuQFMWeek);
        newState[14].details.signUpCat.qtd.push(day28);
        newState[14].details.signUpCat.week.push(day28Week);
        newState[15].details.signUpCat.qtd.push(cumuUTQ);
        newState[15].details.signUpCat.week.push(cumuUTQWeek);

    }
}
/**End Try */

/**Buy */

//Conversion
export function processBuyUQFMSecondaryData(data, newState) {
    newState[18].value = data.UQFMConvActual;
    newState[18].target = data.UQFMConvTarget;
    newState[18].targetFQ = data.UQFMConvTargetFQ;
    newState[18].vsQrf = data.UQFMConvVsQrf;
}
export function processBuyUQFMMultichartData(data, newState) {


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
    newState[18]['details'].multichart = currentMulti;


}
export function processBuyUQFMQTDData(data, newState) {


    newState[18].details.qtdw.qtd[0].value = data.UQFMConvActuals;
    newState[18].details.qtdw.qtd[1].value = data.UQFMConvTarget;
    newState[18].details.qtdw.qtd[2].value = data.UQFMConvVsQrfDiff
    newState[18].details.qtdw.qtd[3].value = data.UQFMConvvsQrf;
    newState[18].details.qtdw.qtd[4].value = data.UQFMConvQQTY;
    newState[18].details.qtdw.qtd[5].value = data.UQFMConvYY;

    newState[18].details.qtdw.week[0].value = data.UQFMConvCW;
    newState[18].details.qtdw.week[1].value = data.UQFMConvTargetCW;
    newState[18].details.qtdw.week[2].value = data.UQFMConvCWVsQrfDiff;
    newState[18].details.qtdw.week[3].value = data.UQFMConvCWVsQrf;
    newState[18].details.qtdw.week[4].value = data.UQFMConvWW;

    newState[18].details.stats[0].value = data.UQFMConvvsQrf;
    newState[18].details.stats[1].value = data.UQFMConvQQTY;
    newState[18].details.stats[2].value = data.UQFMConvQQLY;
    newState[18].details.stats[3].value = data.UQFMConvYY;

}
export function processBuyUQFMGeoQTDData(data, newState) {
    //Clear old Values
    newState[18].details.geo.qtd = [];
    newState[18].details.geo.week = [];

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

        newState[18].details.geo.qtd.push(uqfm);
        newState[18].details.geo.week.push(uqfmWeek);
    }
}
export function processBuyUQFMMarketQTDData(data, newState) {
    //Clear old Values
    newState[18].details.market.qtd = [];
    newState[18].details.market.week = [];


    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let uqfm = {
            index: i,
            type: item.market_area_coode,
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
            type: item.market_area_coode,
            actuals: item.UQFMConvCW,
            qrf: item.UQFMConvTargetCW,
            qrfDiff: item.UQFMConvCWVsQrfDiff,
            vsQrf: item.UQFMConvCWVsQrf,
            ww: item.UQFMConvWW,
        }
        newState[18].details.market.qtd.push(uqfm);
        newState[18].details.market.week.push(uqfmWeek);
    }
}
//MKTG Srouced
export function processBuyMKTSourcedSecondary(data, newState) {
    newState[17].value = data.MktgSourcedARRActual;
    newState[17].target = data.MktgSourcedARRTarget;
    newState[17].targetFQ = data.MktgSourcedARRTargetFQ;
    newState[17].vsQrf = data.MktgSourcedARRVsQrf;
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
    newState[17]['details'].multichart = currentMulti;

}
export function processBuyMKTSourcedQTD(data, newState) {
    newState[17].details.qtdw.qtd[0].value = data.MktgSourcedARRActuals;
    newState[17].details.qtdw.qtd[1].value = data.MktgSourcedARRTarget;
    newState[17].details.qtdw.qtd[2].value = data.MktgSourcedARRVsQrfDiff
    newState[17].details.qtdw.qtd[3].value = data.MktgSourcedARRVsQrf;
    newState[17].details.qtdw.qtd[4].value = data.MktgSourcedARRQQTY;
    newState[17].details.qtdw.qtd[5].value = data.MktgSourcedARRYY;

    newState[17].details.qtdw.week[0].value = data.MktgSourcedARRCW;
    newState[17].details.qtdw.week[1].value = data.MktgSourcedARRTargetCW;
    newState[17].details.qtdw.week[2].value = data.MktgSourcedARRCWVsQrfDiff;
    newState[17].details.qtdw.week[3].value = data.MktgSourcedARRCWVsQrf;
    newState[17].details.qtdw.week[4].value = data.MktgSourcedARRWW;

    newState[17].details.stats[0].value = data.MktgSourcedARRVsQrf;
    newState[17].details.stats[1].value = data.MktgSourcedARRQQTY;
    newState[17].details.stats[2].value = data.MktgSourcedARRQQLY;
    newState[17].details.stats[3].value = data.MktgSourcedARRYY;
}
export function processBuyMKTSourcedGeoQTD(data, newState) {
    //Clear old Values
    newState[17].details.geo.qtd = [];
    newState[17].details.geo.week = [];

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

        newState[17].details.geo.qtd.push(mktg);
        newState[17].details.geo.week.push(mktgWeek);
    }
}
export function processBuyMKTSourcedMAQTD(data, newState) {
    //Clear old Values
    newState[17].details.market.qtd = [];
    newState[17].details.market.week = [];


    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let mktg = {
            index: i,
            actuals: item.MktgSourcedARRActuals,
            qq: item.MktgSourcedARRQQTY,
            qrf: item.MktgSourcedARRTarget,
            qrfDiff: item.MktgSourcedARRVsQrfDiff,
            type: item.market_area_group,
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
            type: item.market_area_group,
        }
        newState[17].details.market.qtd.push(mktg);
        newState[17].details.market.week.push(mktgWeek);
    }
}

export function processBuyMKTSourcedSegmentQTD(data, newState) {
    //Clear old Values
    let item1 = [];
    let item1Week = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        let mktgWeek = {
            index: i,
            actuals: item.GrossARRCW,
            units: item.GrossUnitsCW,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let mktg = {
            index: i,
            actuals: item.GrossActuals,
            qq: item.GrossARRQQTY,
            qrf: item.GrossTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.segment_pivot,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossARRVsQrf,
            yy: item.GrossARRYY
        }


        item1.push(mktg);
        item1Week.push(mktgWeek);

    }
    newState[17].details.segment.week = item1Week;
    newState[17].details.segment.qtd = item1;

}
export function processBuyMKTSourcedChannelQTD(data, newState) {
    //Clear old Values
    newState[17].details = { ...newState[17].details, channel: { qtd: [], week: [] } };

    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let mktg = {
            index: i,
            actuals: item.PMSpendDiscoverActuals,
            qq: item.PMSpendDiscoverQQTY,
            qrf: item.PMSpendDiscoverTarget,
            qrfDiff: item.PMSpendDiscoverVsQrfDiff,
            type: item.PM_channel,
            vsQrf: item.PMSpendDiscoverVsQrf,
            yy: item.PMSpendDiscoverYY
        }
        let mktgWeek =
        {
            index: i,
            type: item.PM_channel,
            actuals: item.PMSpendDiscoverCW,
            qrf: item.PMSpendDiscoverTargetCW,
            qrfDiff: item.PMSpendDiscoverCWVsQrfDiff,
            vsQrf: item.PMSpendDiscoverCWVsQrf,
            ww: item.PMSpendDiscoverWW,
        }


        newState[17].details.channel.qtd.push(mktg);
        newState[17].details.channel.week.push(mktgWeek);
    }
}
//END MKTg
// Paid Media Spend Sourced
export function processBuyPMSSSecondaryData(data, newState) {

    newState[16].value = data.PMSpendDiscoverActual;
    newState[16].target = data.PMSpendDiscoverTarget;
    newState[16].targetFQ = data.PMSpendDiscoverTargetFQ;
    newState[16].vsQrf = data.PMSpendDiscoverVsQrf;

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
        pm.actual.push(item.PMSpendDiscoverActual);
        pm.target.push(item.PMSpendDiscoverTarget);
        pm.ly.push(item.PMSpendDiscoverLY);
        pm.lq.push(item.PMSpendDiscoverLQ);
    };

    currentMulti = [pm.actual, pm.target, pm.ly, pm.lq];

    newState[16]['details'].multichart = currentMulti;
}
export function processBuyPMSSQTDData(data, newState) {


    newState[16].details.qtdw.qtd[0].value = data.PMSpendDiscoverActuals;
    newState[16].details.qtdw.qtd[1].value = data.PMSpendDiscoverTarget;
    newState[16].details.qtdw.qtd[2].value = data.PMSpendDiscoverVsQrfDiff
    newState[16].details.qtdw.qtd[3].value = data.PMSpendDiscoverVsQrf;
    newState[16].details.qtdw.qtd[4].value = data.PMSpendDiscoverQQTY;
    newState[16].details.qtdw.qtd[5].value = data.PMSpendDiscoverYY;

    newState[16].details.qtdw.week[0].value = data.PMSpendDiscoverCW;
    newState[16].details.qtdw.week[1].value = data.PMSpendDiscoverTargetCW;
    newState[16].details.qtdw.week[2].value = data.PMSpendDiscoverCWVsQrfDiff;
    newState[16].details.qtdw.week[3].value = data.PMSpendDiscoverCWVsQrf;
    newState[16].details.qtdw.week[4].value = data.PMSpendDiscoverWW;

    newState[16].details.stats[0].value = data.PMSpendDiscoverVsQrf;
    newState[16].details.stats[1].value = data.PMSpendDiscoverQQTY;
    newState[16].details.stats[2].value = data.PMSpendDiscoverQQLY;
    newState[16].details.stats[3].value = data.PMSpendDiscoverYY;

}
export function processBuyPMSSGeoQTDData(data, newState) {
    //Clear old Values
    newState[16].details = { ...newState[16].details, geo: { qtd: [], week: [] } };

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

        newState[16].details.geo.qtd.push(pm);
        newState[16].details.geo.week.push(pmWeek);
    }
}
export function processBuyPMSSMarketQTDData(data, newState) {
    //Clear old Values
    newState[16].details = { ...newState[16].details, market: { qtd: [], week: [] } };

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


        newState[16].details.market.qtd.push(pm);
        newState[16].details.market.week.push(pmWeek);
    }
}

export function processBuyPMSSChannelQTDData(data, newState) {
    //Clear old Values
    newState[16].details = { ...newState[16].details, channel: { qtd: [], week: [] } };

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


        newState[16].details.channel.qtd.push(pm);
        newState[16].details.channel.week.push(pmWeek);
    }
}

//Gross
export function processBuyGrossSecondaryData(g1, newState) {

    // //Gross New Arr
    newState[19].value = g1.data[0].GrossARRActual;
    newState[19].targetFQ = g1.data[0].GrossARRTargetFQ;
    newState[19].target = g1.data[0].GrossARRTarget;
    newState[19].vsQrf = g1.data[0].GrossVsQrf;

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
    //Get Financial Multichart values
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];
        grossArr.actual.push(item.GrossARRActual);
        grossArr.target.push(item.GrossARRTargetFQ);
        grossArr.ly.push(item.GrossARRLY);
        grossArr.lq.push(item.GrossARRLQ);


    };

    currentMulti = [grossArr.actual, grossArr.target, grossArr.ly, grossArr.lq];

    newState[19]['details'].multichart = currentMulti;
}
export function processBuyGrossUnitsMultichart(newState, data) {
    let weekFlag = data.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])

    let newData = _.orderBy(weekFlag, ['weekNo'], ['asc']);

    let grossUnits = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    }


    // Units Multi multiChart
    // Get Units
    for (let i = 0; i < data.length; i++) {
        let item = newData[i];

        grossUnits.actual.push(item.GrossUnitsActual);
        grossUnits.target.push(item.GrossUnitsTarget);
        grossUnits.ly.push(item.GrossUnitsLY);
        grossUnits.lq.push(item.GrossUnitsLQ);

    };

    // Set Units

    newMulti = [grossUnits.actual, grossUnits.target, grossUnits.ly, grossUnits.lq];

    newState[19]['details'].unitMultichart = newMulti;
    // newState[i]['valueType'] = 'currency';
}
export function processBuyGrossQTD(newState, data) {
    newState = Object.assign([], newState);
    console.log(data)
    // State Order: Actual, Units, QRF, QRFDiff, VSQrf, QQ, YY
    newState[19].details.qtdw.qtd[0].value = data[0].GrossActuals;
    newState[19].details.qtdw.qtd[1].value = data[0].GrossTarget;
    newState[19].details.qtdw.qtd[2].value = data[0].GrossVsQrfDiff;
    newState[19].details.qtdw.qtd[3].value = data[0].GrossARRVsQrf;
    newState[19].details.qtdw.qtd[4].value = data[0].GrossARRQQTY;
    newState[19].details.qtdw.qtd[5].value = data[0].GrossARRYY;
    newState[19].details.qtdw.week[0].value = data[0].GrossARRCW
    newState[19].details.qtdw.week[1].value = data[0].GrossUnitsCW;
    newState[19].details.qtdw.week[2].value = data[0].GrossARRTargetCW
    newState[19].details.qtdw.week[3].value = data[0].GrossCWVsQrfDiff;
    newState[19].details.qtdw.week[4].value = data[0].GrossCWVsQrf;
    newState[19].details.qtdw.week[5].value = data[0].GrossWW;
    newState[19].details.stats[0].value = data[0].GrossARRVsQrf;
    newState[19].details.stats[1].value = data[0].GrossARRQQTY;
    newState[19].details.stats[2].value = data[0].GrossARRQQLY;
    newState[19].details.stats[3].value = data[0].GrossARRYY;

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



        item2.push(gross);

    }

    // console.log('YO', item1);
    newState[19].details.geo.qtd = processQTDOrder(item2);
}

/** Custom function to Reorder QTD Details with row always last */
function processQTDOrder(data) {
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

        item2.push(gross);
    }
    newState[19].details.geo.week = processQTDOrder(item2);
}
export function processBuyGrossMarketQTD(newState, data) {

    //Clear old Values

    newState[19].details.market.qtd = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];

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


        newState[19].details.market.qtd.push(gross);

    }

}
export function processBuyGrossMarketWeek(newState, data) {
    //Clear old Values
    let item2 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

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


        item2.push(gross);
    }
    newState[19].details.market.week = item2;
}
export function processBuyGrossrouteQTD(newState, data) {

    //Clear old Values
    newState[19].details.route.qtd = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];

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


        newState[19].details.route.qtd.push(gross);

    }

}
export function processBuyGrossrouteWeek(newState, data) {
    //Clear old Values
    let item2 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

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


        item2.push(gross);
    }
    newState[19].details.route.week = item2;
}
export function processBuyGrossSegmentQTD(newState, data) {

    //Clear old Values
    newState[1].details.segment.qtd = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];

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

        newState[19].details.segment.qtd.push(gross);

    }

}
export function processBuyGrossSegmentWeek(newState, data) {
    //Clear old Values
    let item2 = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

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


        item2.push(gross);

    }
    newState[19].details.segment.week = item2;

}
export function processBuyGrossproductQTD(newState, data) {

    //Clear old Values
    newState[1].details.product.qtd = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];

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


        newState[1].details.product.qtd.push(gross);


    }

}
export function processBuyGrossProductWeek(newState, data) {
    //Clear old Values
    let item2 = [];


    for (let i = 0; i < data.length; i++) {
        let item = data[i];

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

        item2.push(gross);

    }
    newState[1].details.product.week = item2;

}