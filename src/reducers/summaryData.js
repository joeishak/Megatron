import {
    ADD_NEW_PRIMARY_COMMENT,
    ADD_NEW_PRIMARY_REPLY,
    ADD_NEW_SECONDARY_COMMENT,
    ADD_NEW_SECONDARY_REPLY,
    GET_SUMMARY_DATA,
    FETCH_COMMENTS_COUNT,
    GET_PRIMARY_DATA,
    GET_FINANCE_SECONDARY_DATA,
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
        case GET_PRIMARY_DATA:
            console.log(action.payload);
            //Make a Stringify copy of state
            newState = JSON.parse(JSON.stringify(state));
            //Assign action  payload data to new state primary
            newState.primary[0].value = action.payload[0].data[0].noRowsArrActual;
            newState.primary[0].targetFQ = action.payload[0].data[0].noRowsArrTargetFQ;
            newState.primary[0].target = action.payload[0].data[0].noRowsArrTarget;
            newState.primary[0].vsqrf = action.payload[0].data[0].NewVsQrf;
            newState.primary[1].value = action.payload[1].data[0].TrafficActual;
            newState.primary[1].target = action.payload[1].data[0].TrafficTarget;
            newState.primary[1].targetFQ = action.payload[1].data[0].TrafficTargetFQ;
            newState.primary[1].vsqrf = action.payload[1].data[0].TrafficVsQrf;
            newState.primary[2].value = action.payload[2].data[0].NewQFMSActual;
            newState.primary[2].target = action.payload[2].data[0].NewQFMsTarget;
            newState.primary[2].vsqrf = action.payload[2].data[0].NewQFMSVsQrf;
            newState.primary[2].targetFQ = action.payload[2].data[0].NewQFMSTargetFQ;

            //Return a copy of newstate
            return { ...newState };

        case GET_FINANCE_SECONDARY_DATA:
            console.log(action.payload);
            newState = JSON.parse(JSON.stringify(state));
            // financeSecondary, financeMultichart, financeUnitsMultichart,
            // financeQTDTotals, financeGeoQTD, financeMarketQTD,
            // financeSegmentQTD, financeRouteQTD, financeProductQTD

            processFinanceSecondaryData(action.payload[0], newState.secondary);
            processFinancialMultichart(newState.secondary, action.payload[1].data);
            processFinancialUnitsMultichart(newState.secondary, action.payload[2].data);
            processFinancialQTD(newState.secondary, action.payload[3].data);

            processFinancialGeoQTD(newState.secondary, action.payload[4].data);
            processFinancialGeoWeek(newState.secondary, action.payload[4].data)

            processFinancialMarketQTD(newState.secondary, action.payload[5].data);
            processFinancialMarketWeek(newState.secondary, action.payload[5].data);
            processFinancialrouteQTD(newState.secondary, action.payload[7].data);
            processFinancialrouteWeek(newState.secondary, action.payload[7].data)

            processFinancialSegmentQTD(newState.secondary, action.payload[6].data);
            processFinancialSegmentWeek(newState.secondary, action.payload[6].data);

            processFinancialproductQTD(newState.secondary, action.payload[8].data);
            processFinancialProductWeek(newState.secondary, action.payload[8].data);
            return { ...newState };
        case GET_TRAFFIC_SECONDARY_DATA:
            console.log('Received Traffic DAta: ', action.payload);
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
            return { ...newState };
        case GET_MKTG_SECONDARY_DATA:
            console.log('Recieved MKTG DAta: ', action.payload);
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

            return { ...newState };
        case GET_TRY_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('Traffic Data ', action.payload);

            processTrySecondaryData(action.payload[0].data[0], newState.secondary);
            processTryMultichartData(action.payload[1].data, newState.secondary);
            processTryQTDData(action.payload[2].data[0], newState.secondary);
            processTryGeoQTDData(action.payload[3].data, newState.secondary);
            processTryMarketQTDData(action.payload[4].data, newState.secondary);
            processTryProductQTDData(action.payload[5].data, newState.secondary);
            processTrySignUpAppQTDData(action.payload[6].data, newState.secondary);
            processTrySignUpCatQTDData(action.payload[7].data, newState.secondary);
            return { ...newState };
        case GET_BUY_TRAFFIC_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('bUY Traffic Data ', action.payload);


            return { ...newState };
        case GET_BUY_MKTG_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('bUY MARKET Data ', action.payload);


            return { ...newState };
        case GET_BUY_FINANCE_SECONDARY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            console.log('bUY FINANCE Data ', action.payload);


            return { ...newState };
        case ADD_NEW_PRIMARY_COMMENT:
            index = action.payload.square;
            copyOfState = Object.assign({}, state);
            let newComments = copyOfState.primary[index].comments.map(item => {
                return item
            })
            newComments.push(action.payload.comment);
            return { ...copyOfState, comments: newComments };
        // CAse for adding a reply to a previous comment
        case ADD_NEW_PRIMARY_REPLY:
            index = action.payload.square;
            copyOfState = Object.assign({}, state);
            commentIndex = Number(action.payload.comment)
            copyOfState.primary[index].comments[commentIndex].replies.push(action.payload.reply);
            return { ...copyOfState };
        case ADD_NEW_SECONDARY_COMMENT:
            index = action.payload.square;
            copyOfState = Object.assign({}, state);
            copyOfState.secondary[index].comments.push(action.payload.comment);
            return { ...copyOfState };
        // CAse for adding a reply to a previous comment
        case ADD_NEW_SECONDARY_REPLY:
            index = action.payload.square;
            copyOfState = Object.assign({}, state);
            commentIndex = Number(action.payload.comment)
            copyOfState.secondary[index].comments[commentIndex].replies.push(action.payload.reply);
            return { ...copyOfState };
        case FETCH_COMMENTS_COUNT:
            copyOfState = Object.assign({}, state);
            const commentsCount = action.payload;
            console.log(commentsCount);
            for (let i = 0; i < commentsCount.length; i++) {
                copyOfState.secondary[commentsCount[i].metricId].comments.push(commentsCount[i].commentCount);
            }

            return { ...copyOfState };
        case DELETE_COMMENT:
            copyOfState = Object.assign([], state);
            let { commentId, activeSquareID } = action.payload;
            console.log(copyOfState.secondary[activeSquareID]);
            copyOfState.secondary[activeSquareID] = {
                ...copyOfState.secondary[activeSquareID],
                comments: copyOfState.secondary[activeSquareID].comments.filter(comment => {
                    comment.id !== commentId
                })
            }
            console.log(copyOfState.secondary[activeSquareID].comments);

            return copyOfState;
        default:
            return state;
    }
}
// TODO: Move to Services
export function processFinanceSecondaryData(g1, newState) {
    //Finance
    newState[0].value = g1.data[0].noRowsArrActual;
    newState[0].target = g1.data[0].noRowsArrTarget;
    newState[0].targetFQ = g1.data[0].noRowsArrTargetFQ;
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
    newState[3].targetFQ = g1.data[0].RenoRowsArrTargetFQ;
    newState[3].target = g1.data[0].RenoRowsArrTarget;
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
        netArr.actual.push(item.noRowsArrActual);
        netArr.target.push(item.noRowsArrTargetFQ);
        netArr.ly.push(item.noRowsArrLY);
        netArr.lq.push(item.noRowsArrLQ);
        netCancellations.actual.push(item.CancelARRActual);
        netCancellations.target.push(item.CancelARRTargetFQ);
        netCancellations.ly.push(item.CancelARRLY);
        netCancellations.lq.push(item.CancelARRLQ);
        grossArr.actual.push(item.GrossARRActual);
        grossArr.target.push(item.GrossARRTargetFQ);
        grossArr.ly.push(item.GrossARRLY);
        grossArr.lq.push(item.GrossARRLQ);
        termRenewal.actual.push(item.RenoRowsArrActual);
        termRenewal.target.push(item.RenoRowsArrTargetFQ);
        termRenewal.ly.push(item.RenoRowsArrLY);
        termRenewal.lq.push(item.RenoRowsArrLQ);

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
    console.log(data)
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
                            value: findata.noRowsArrVsQrf
                        },
                        {
                            index: 6,
                            header: 'Q/Q',
                            value: findata.noRowsArrQQTY
                        },
                        {
                            index: 7,
                            header: 'Y/Y',
                            value: findata.noRowsArrYY
                        }
                    ]

                newState[i].details.qtdw.week[0].value = findata.noRowsArrCW
                newState[i].details.qtdw.week[1].value = findata.NewUnitsCW;
                newState[i].details.qtdw.week[2].value = findata.noRowsArrTargetCW
                newState[i].details.qtdw.week[3].value = findata.NewCWVsQrfDiff;
                newState[i].details.qtdw.week[4].value = findata.NewCWVsQrf;
                newState[i].details.qtdw.week[5].value = findata.NewWW;
                newState[i].details.stats[0].value = findata.noRowsArrVsQrf;
                newState[i].details.stats[1].value = findata.noRowsArrQQTY;
                newState[i].details.stats[2].value = findata.noRowsArrQQLY;
                newState[i].details.stats[3].value = findata.noRowsArrYY;
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
            qq: item.noRowsArrQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.noRowsArrVsQrf,
            yy: item.noRowsArrYY
        }
        console.log(net);
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
    newState[0].details.geo.qtd =  processQTDOrder(item1);
    newState[1].details.geo.qtd =  processQTDOrder(item2);
    newState[2].details.geo.qtd =  processQTDOrder(item3);
    newState[3].details.geo.qtd =  processQTDOrder(item4);
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
            let groupByMarketArea = _.groupBy(data, function(item) { return item.marketArea});
            let arr = Object.entries(groupByMarketArea);
            let rowsArr = groupByMarketArea.ROW;
            let compiledArray = [];
            let noRowsArr = [];
            let removedRows = _.filter(arr , function(o) { 
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
            actuals: item.noRowsArrCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_group,
            qrf: item.noRowsArrTargetCW,
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
            qq: item.noRowsArrQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.noRowsArrVsQrf,
            yy: item.NewYY
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
            actuals: item.noRowsArrCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.noRowsArrTargetCW,
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
            qq: item.noRowsArrQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.noRowsArrVsQrf,
            yy: item.NewYY
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
            actuals: item.noRowsArrCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.noRowsArrTargetCW,
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
            qq: item.noRowsArrQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.noRowsArrVsQrf,
            yy: item.NewYY
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
            actuals: item.noRowsArrCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.noRowsArrTargetCW,
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
            qq: item.noRowsArrQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.product_category,
            vsQrf: item.noRowsArrVsQrf,
            yy: item.NewYY
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
            actuals: item.noRowsArrCW,
            units: item.NewUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.noRowsArrTargetCW,
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
/**Discover**/
//Traffic
export function processTrafficSecondaryData(g5, newState) {
    console.log(g5);

    newState[5].value = g5.TrafficActual;
    newState[5].target = g5.TrafficTarget;
    newState[5].targetFQ = g5.TrafficTargetFQ;
    newState[5].vsQrf = g5.TrafficVsQrf;
    //Bounce Rate
    newState[5].value = g5.BounceRateActual;
    newState[5].target = 0;

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
    for (let i = 5; i < newState.length; i++) {
        switch (i) {
            case 5:
                currentMulti = [traffic.actual, traffic.target, traffic.ly, traffic.lq];
                break;
            case 9:
                currentMulti = [bounceRate.actual, bounceRate.target, bounceRate.ly, bounceRate.lq];
                break;
            default:
                break;
        }
        newState[i]['details'].multichart = currentMulti;
    }
}
export function processTrafficQTDData(g5, newState) {
    console.log(g5);

    for (let i = 5; i < newState.length; i++) {

        switch (i) {
            // Traffic
            case 4:
                newState[i].details.qtdw.qtd[0].value = g5.TrafficActuals;
                newState[i].details.qtdw.qtd[1].value = g5.TarfficTarget;
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
                newState[i].details.qtdw.qtd[0].value = g5.BounceRateActual;
                newState[i].details.qtdw.qtd[1].value = g5.BounceRateActual;
                newState[i].details.qtdw.qtd[2].value = g5.BounceRateActual;
                newState[i].details.qtdw.qtd[3].value = g5.BounceRateActual;
                newState[i].details.qtdw.qtd[4].value = g5.BounceRateQQLY;
                newState[i].details.qtdw.qtd[5].value = g5.BounceRateYY;

                newState[i].details.qtdw.week[0].value = g5.BounceRateCW;
                newState[i].details.qtdw.week[1].value = g5.BounceRateCW;
                newState[i].details.qtdw.week[2].value = g5.BounceRateCW;
                newState[i].details.qtdw.week[3].value = g5.BounceRateCW;
                newState[i].details.qtdw.week[4].value = g5.BounceRateWW;

                newState[i].details.stats[0].value = g5.BounceRateYY;
                newState[i].details.stats[1].value = g5.BounceRateQQLY;
                newState[i].details.stats[2].value = g5.BounceRateQQLY;
                newState[i].details.stats[3].value = g5.BounceRateYY;
                break;
        }
    }
}
export function processTrafficGeoQTDData(g5, newState) {
    console.log(g5)
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
            qrf: item.TarfficTarget,
            qrfDiff: item.TrafficActuals - item.TarfficTarget,
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
            qrfDiff: item.BounceRateActual,
            type: item.geo_code,
            vsQrf: item.BounceRateVsQrfDiff,
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
            qrf: item.TarfficTarget,
            qrfDiff: item.TrafficActuals - item.TarfficTarget,
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
            qrfDiff: item.BounceRateActual,
            type: item.market_area_code,
            vsQrf: item.BounceRateVsQrfDiff,
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
            qrf: item.TarfficTarget,
            qrfDiff: item.TrafficActuals - item.TarfficTarget,
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
            qrfDiff: item.BounceRateActual,
            type: item.web_segment,
            vsQrf: item.BounceRateVsQrfDiff,
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
            type: item.visit_type,
            marketArea: item.last_touch_channel,
            actuals: item.TrafficActuals,
            qq: item.TrafficQQTY,
            qrf: item.TarfficTarget,
            qrfDiff: item.TrafficActuals - item.TarfficTarget,
            type: item.last_touch_channel,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        let trafficPM =
        {
            index: i,
            type: item.visit_type,
            marketArea: item.last_touch_channel,
            actuals: item.TrafficCW,
            qrf: item.TrafficTargetCW,
            qrfDiff: item.TrafficCWVsQrfDiff,
            vsQrf: item.TrafficCWVsQrf,
            ww: item.TrafficWW,
            type: item.last_touch_channel,
        }
        let bounce = {
            index: i,
            marketArea: item.last_touch_channel,
            type: item.visit_type,
            actuals: item.BounceRateActuals,
            qq: item.BounceRateQQTY,
            qrf: item.BounceRateTarget,
            qrfDiff: item.BounceRateActual,
            type: item.last_touch_channel,
            vsQrf: item.BounceRateVsQrfDiff,
            yy: item.BounceRateYY
        }
        let bouncePM =
        {
            index: i,
            marketArea: item.last_touch_channel,
            type: item.visit_type,
            actuals: item.BounceRateCW,
            qrf: item.BounceRateTargetCW,
            qrfDiff: item.BounceRateCWVsQrfDiff,
            vsQrf: item.BounceRateCWVsQrf,
            ww: item.BounceRateWW,
            type: item.last_touch_channel,
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
            qrf: item.TarfficTarget,
            qrfDiff: item.TrafficActuals - item.TarfficTarget,
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
            qrfDiff: item.BounceRateActual,
            type: item.conversion_type,
            vsQrf: item.BounceRateVsQrfDiff,
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

            qrf: item.TarfficTarget,

            qrfDiff: item.TrafficActuals - item.TarfficTarget,

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

            actuals: item.BounceRateActual,

            qq: item.BounceRateActual,

            qrf: item.BounceRateActual,

            qrfDiff: item.BounceRateActual,

            type: item.mobile_or_desktop,

            vsQrf: item.BounceRateYY,

            yy: item.BounceRateYY

        }

        let bouncePM =
        {

            index: i,

            actuals: item.BounceRateCW,

            qrf: item.BounceRateCW,

            qrfDiff: item.BounceRateWW,

            vsQrf: item.BounceRateWW,

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

            qrf: item.TarfficTarget,

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

            qrfDiff: item.BounceRateActual,

            type: item.new_or_repeat,

            vsQrf: item.BounceRateVsQrfDiff,

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

    //  New QFMS
    newState[10].value = data.NewQFMSActual;
    newState[10].targetFQ = data.NewQFMSTargetFQ;
    newState[10].target = data.NewQFMsTarget;
    newState[10].vsQrf = data.NewQFMsVsQrf;
    //   New UQFMS
    newState[11].value = data.NewUQFMSActual;
    newState[11].targetFQ = data.NewUQFMSTargetFQ;
    newState[11].target = data.NewUQFMsTarget;
    newState[11].vsQrf = data.NewUQFMsVsQrf;
    // Cumulative UQFMS
    newState[12].value = data.CumUQFMsActual;
    newState[12].targetFQ = data.CumUQFMsTargetFQ;
    newState[12].target = data.CumUQFMsTarget;
    newState[12].vsQrf = data.CumUQFMsVsQrf;
    //Cumulative QFMs
    newState[13].value = data.CumQFMsActual;
    newState[13].targetFQ = data.CumQFMsTargetFQ;
    newState[13].target = data.CumQFMsTarget;
    newState[13].vsQrf = data.CumQFMsVsQrf;
    //28 Day New UQFM to QFM
    newState[14].value = data.Day28NewUQFMActual;
    newState[14].target = data.Day28NewUQFMTargetFQ;
    newState[14].vsQrf = data.Day28NewUQFMVsQrf;
    newState[14].target = data.Day28NewUQFMTarget;
    //Cum. UQFM to QFM
    newState[15].value = data.CumUQFMToQFMActual;
    newState[15].target = data.CumUQFMToQFMTargetFQ;
    newState[15].vsqrf = data.CumUQFMToQFMVsQrf;
    newState[15].target = data.CumUQFMToQFMTarget;

}
export function processTryMultichartData(g2, newState) {


    let weekG2Flag = g2.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })

    // _.orderBy(weekFlag, weekNo, ['asc'])

    let newG2 = _.orderBy(weekG2Flag, ['weekNo'], ['asc']);

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
        cumuUQT.target.push(item.CumulativeUqfmsTargetFQ);
        cumuUQT.ly.push(item.CumUQFMToQFMLY);
        cumuUQT.lq.push(item.CumUQFMToQFMLQ);


    };

    //Set Multichart Values
    for (let i = 10; i < newState.length; i++) {
        switch (i) {
            case 10:
                currentMulti = [newQfm.actual, newQfm.target, newQfm.ly, newQfm.lq];
                break;
            case 11:
                currentMulti = [newUqfm.actual, newUqfm.target, newUqfm.ly, newUqfm.lq];
                break;
            case 12:
                currentMulti = [cumuUQfm.actual, cumuUQfm.target, cumuUQfm.ly, cumuUQfm.lq];
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
    }
}
export function processTryQTDData(data, newState) {
    for (let i = 10; i < newState.length; i++) {
        switch (i) {
            case 10:
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
            case 11:
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
            case 12:
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
                newState[i].details.qtdw.qtd[0].value = data.CumUQFMToQFMActual;
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
            actuals: item.CumUQFMToQFMActual,
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

        newState[10].details.geo.qtd.push(newQFM);
        newState[10].details.geo.week.push(newQFMWeek);
        newState[11].details.geo.qtd.push(newUQFM);
        newState[11].details.geo.week.push(newUQFMWeek);
        newState[12].details.geo.qtd.push(cumuUQFM);
        newState[12].details.geo.week.push(cumuUQFMWeek);
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
            actuals: item.CumUQFMToQFMActual,
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

        newState[10].details.market.qtd.push(newQFM);
        newState[10].details.market.week.push(newQFMWeek);
        newState[11].details.market.qtd.push(newUQFM);
        newState[11].details.market.week.push(newUQFMWeek);
        newState[12].details.market.qtd.push(cumuUQFM);
        newState[12].details.market.week.push(cumuUQFMWeek);
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
            actuals: item.CumUQFMToQFMActual,
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