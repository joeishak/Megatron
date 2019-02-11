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
    GET_BUY_SECONDARY_DATA,
    GET_USE_SECONDARY_DATA,
    GET_RENEW_SECONDARY_DATA,
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
    newMulti;
export default function (state = {
    primary: PrimaryData,
    secondary: SecondaryData
}, action) {
    switch (action.type) {
        case GET_PRIMARY_DATA:
            console.log(action.payload);
            newState = Object.assign({}, state);
            newState.primary[0].value = action.payload[0].data[0].NetNewARRActual;
            newState.primary[0].target = action.payload[0].data[0].NetNewARRTarget;
            newState.primary[0].vsqrf = action.payload[0].data[0].NewVsQrf;
            newState.primary[1].value = action.payload[1].data[0].TrafficActual;
            newState.primary[1].target = action.payload[1].data[0].TrafficTarget;
            newState.primary[1].vsqrf = action.payload[1].data[0].TrafficVsQrf;
            newState.secondary[4].value = action.payload[1].data[0].TrafficActual;
            newState.secondary[4].target = action.payload[1].data[0].TrafficTarget;
            newState.secondary[4].vsqrf = action.payload[1].data[0].TrafficVsQrf;
            return newState;

        case GET_FINANCE_SECONDARY_DATA:
            console.log(action.payload);
            newState = Object.assign({}, state);
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
            processFinancialRoutesQTD(newState.secondary, action.payload[7].data);
            processFinancialRoutesWeek(newState.secondary, action.payload[7].data)

            processFinancialSegmentQTD(newState.secondary, action.payload[6].data);
            processFinancialSegmentWeek(newState.secondary, action.payload[6].data);

            processFinancialProductsQTD(newState.secondary, action.payload[8].data);
            processFinancialProductWeek(newState.secondary, action.payload[8].data);
            return newState;
        case GET_DISCOVER_SECONDARY_DATA:/** Variables index 4-10 */
            console.log(action.payload);
            newState = Object.assign({}, state);
            let { secondary } = newState;
            // DiscoverG1Secondary, DiscoverG2Secondary, DiscoverG5Secondary,
            processDiscoverSecondaryData(action.payload[0].data[0], action.payload[1].data[0], action.payload[2].data[0], secondary);
            // DiscoverG1Multichart, DiscoverG2Multichart, DiscoverG5Multichart,
            processDiscoverMultichartData(action.payload[3].data, action.payload[4].data, action.payload[5].data, secondary);

            // DiscoverG1QTD, DiscoverG2QTD, DiscoverG5QTD,
            processDiscoverQTDData(action.payload[6].data[0], action.payload[7].data[0], action.payload[8].data[0], secondary);

            // DiscoverG1GeoQTD, DiscoverG2GeoQTD, DiscoverG5GeoQTD,
            processDiscoverGeoQTDData(action.payload[9].data, action.payload[10].data, action.payload[11].data, secondary);

            // DiscoverG1MarketQTD, DiscoverG2MarketQTD, DiscoverG5MarketQTD,
            processDiscoverMarketQTDData(action.payload[12].data, action.payload[13].data, action.payload[14].data, secondary);

            // DiscoverG1SegmentQTD, DiscoverG2SegmentQTD, DiscoverG5SegmentQTD,
            processDiscoverSegmentQTDData(action.payload[15].data, action.payload[16].data, action.payload[17].data, secondary);

            // DiscoverG1RouteQTD, DiscoverG5RouteQTD, DiscoverG2RouteQTD,
            processDiscoverRouteQTDData(action.payload[18].data, action.payload[19].data, action.payload[20].data, secondary);

            // DiscoverG1ProductQTD, DiscoverG2ProductQTD, DiscoverG5ProductQTD
            processDiscoverProductQTDData(action.payload[21].data, action.payload[22].data, action.payload[23].data, secondary);


            return newState;
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

            for (let i = 0; i < commentsCount.length; i++) {
                copyOfState.secondary[commentsCount[i].metricId].comments.push(commentsCount[i].commentCount);
            }

            return { ...copyOfState };

        default:
            return state;
    }
}


// TODO: Move to Services
export function processFinanceSecondaryData(g1, newState) {
    //Finance
    newState[0].value = g1.data[0].NewARRActual;
    newState[0].target = g1.data[0].NewARRTargetFQ;
    newState[0].vsQrf = g1.data[0].NewVsQrf;
    // //Gross New Arr
    newState[1].value = g1.data[0].GrossARRActual;
    newState[1].target = g1.data[0].GrossARRTargetFQ;
    newState[1].vsQrf = g1.data[0].GrossVsQrf;
    //  //Cacncellations
    newState[2].value = g1.data[0].CancelARRActual;
    newState[2].target = g1.data[0].CancelARRTargetFQ;
    newState[2].vsQrf = g1.data[0].CancelVsQrf;
    //   //Renewal
    newState[3].value = g1.data[0].RenewARRActual;
    newState[3].target = g1.data[0].RenewARRTargetFQ;
    newState[3].vsQrf = g1.data[0].RenewVsQrf;
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
    // State Order: Actual, Units, QRF, QRFDiff, VSQrf, QQ, YY
    for (let i = 0; i < newState.length; i++) {
        let findata = data[0];
        switch (i) {
            // New New Arr
            case 0:
                newState[i].details.qtdw.qtd[0].value = findata.NewActuals;
                newState[i].details.qtdw.qtd[1].value = findata.NewUnitsActual;
                newState[i].details.qtdw.qtd[2].value = findata.NewTarget;
                newState[i].details.qtdw.qtd[3].value = findata.NewVsQrfDiff;
                newState[i].details.qtdw.qtd[4].value = findata.NewVSQRF;
                newState[i].details.qtdw.qtd[5].value = findata.NewARRQQTY;
                newState[i].details.qtdw.qtd[6].value = findata.NewYY;
                newState[i].details.qtdw.week[0].value = findata.NewARRCW
                newState[i].details.qtdw.week[1].value = findata.NewUnitsCW;
                newState[i].details.qtdw.week[2].value = findata.NewARRTargetCW
                newState[i].details.qtdw.week[3].value = findata.NewCWVsQrfDiff;
                newState[i].details.qtdw.week[4].value = findata.NewCWVsQrf;
                newState[i].details.qtdw.week[5].value = findata.NewWW;



                newState[i].details.stats[0].value = findata.NewVsQRF;
                newState[i].details.stats[1].value = findata.NewARRQQTY;
                newState[i].details.stats[2].value = findata.NewARRQQLY;
                newState[i].details.stats[3].value = findata.NewYY;
                break;
            // Gross New Arr
            case 1:
                newState[i].details.qtdw.qtd[0].value = findata.GrossARRActual;
                newState[i].details.qtdw.qtd[1].value = findata.GrossUnitsActual;
                newState[i].details.qtdw.qtd[2].value = findata.GrossARRTarget;
                newState[i].details.qtdw.qtd[3].value = findata.GrossVsQrfDiff;
                newState[i].details.qtdw.qtd[4].value = findata.GrossVsQrf;
                newState[i].details.qtdw.qtd[5].value = findata.GrossARRQQTY;
                newState[i].details.qtdw.qtd[6].value = findata.GrossARRYY;
                newState[i].details.qtdw.week[0].value = findata.GrossCW
                newState[i].details.qtdw.week[1].value = findata.GrossUnitsCW;
                newState[i].details.qtdw.week[2].value = findata.GrossARRTargetCW
                newState[i].details.qtdw.week[3].value = findata.GrossCWVsQrfDiff;
                newState[i].details.qtdw.week[4].value = findata.GrossCWVsQrf;
                newState[i].details.qtdw.week[5].value = findata.GrossWW;

                newState[i].details.stats[0].value = findata.GrossVsQRF;
                newState[i].details.stats[1].value = findata.GrossARRQQTY;
                newState[i].details.stats[2].value = findata.GrossARRQQLY;
                newState[i].details.stats[3].value = findata.GrossYY;
                break;
            // Cancellations Arr
            case 2:
                newState[i].details.qtdw.qtd[0].value = findata.CancelARRActual;
                newState[i].details.qtdw.qtd[1].value = findata.CancelUnitsActual;
                newState[i].details.qtdw.qtd[2].value = findata.CancelARRTarget;
                newState[i].details.qtdw.qtd[3].value = findata.CancelArrVsQrfDiff;
                newState[i].details.qtdw.qtd[4].value = findata.CancelVsQrf;
                newState[i].details.qtdw.qtd[5].value = findata.CancelARRQQTY;
                newState[i].details.qtdw.qtd[6].value = findata.CancelARRYY;
                newState[i].details.qtdw.week[0].value = findata.CancelCW
                newState[i].details.qtdw.week[1].value = findata.CancelUnitsCW;
                newState[i].details.qtdw.week[2].value = findata.CancelARRTargetCW
                newState[i].details.qtdw.week[3].value = findata.CancelCWVsQrfDiff;
                newState[i].details.qtdw.week[4].value = findata.CancelCWVsQrf;
                newState[i].details.qtdw.week[5].value = findata.CancelWW;

                newState[i].details.stats[0].value = findata.CancelVsQrf;
                newState[i].details.stats[1].value = findata.CancelARRQQTY;
                newState[i].details.stats[2].value = findata.CancelARRQQLY;
                newState[i].details.stats[3].value = findata.CancelYY;


                break;
            // Renewals Arr
            case 3:
                newState[i].details.qtdw.qtd[0].value = findata.RenewActuals;
                newState[i].details.qtdw.qtd[1].value = findata.RenewUnitsActual;
                newState[i].details.qtdw.qtd[2].value = findata.RenewTarget;
                newState[i].details.qtdw.qtd[3].value = findata.RenewVsQrfDiff;
                newState[i].details.qtdw.qtd[4].value = findata.RenewVSQRF;
                newState[i].details.qtdw.qtd[5].value = findata.RenewARRQQTY;
                newState[i].details.qtdw.qtd[6].value = findata.RenewYY;
                newState[i].details.qtdw.week[0].value = findata.RenewARRCW
                newState[i].details.qtdw.week[1].value = findata.RenewsUnitsCW;
                newState[i].details.qtdw.week[2].value = findata.RenewARRTargetCW
                newState[i].details.qtdw.week[3].value = findata.RenewCWVsQrfDiff;
                newState[i].details.qtdw.week[4].value = findata.RenewCWVsQrf;
                newState[i].details.qtdw.week[5].value = findata.RenewWW;

                newState[i].details.stats[0].value = findata.RenewVsQRF;
                newState[i].details.stats[1].value = findata.RenewARRQQTY;
                newState[i].details.stats[2].value = findata.RenewARRQQLY;
                newState[i].details.stats[3].value = findata.RenewYY;
                break;
        }
    }
}
export function processFinancialGeoQTD(newState, data) {
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
            marketArea: item.market_area_code,
            qq: item.NewARRQQTY,
            qrf: item.NewTarget,
            qrfDiff: item.NewVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.NewVSQRF,
            yy: item.NewYY
        }
        let gross = {
            index: i,
            actuals: item.GrossARRActual,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossARRTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.geo_code,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossVsQrf,
            yy: item.GrossYY
        }
        let canc = {
            index: i,
            actuals: item.CancelARRActual,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelARRTarget,
            qrfDiff: item.CancelArrVsQrfDiff,
            type: item.geo_code,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewActuals,
            marketArea: item.market_area_code,
            qq: item.RenewARRQQTY,
            qrf: item.RenewTarget,
            qrfDiff: item.RenewVsQrfDiff,
            type: item.geo_code,
            units: item.RenewUnitsActual,
            vsQrf: item.RenewVSQRF,
            yy: item.RenewARRYY
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    newState[0].details.geo.qtd = item1;
    newState[1].details.geo.qtd = item2;
    newState[2].details.geo.qtd = item3;
    newState[3].details.geo.qtd = item4;
}
export function processFinancialGeoWeek(newState, data) {
    console.log(data);
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
            type: item.geo_code,
            vsQrf: item.NewCWVsQrf,
            ww: item.NewWW

        }
        let gross = {
            index: i,
            actuals: item.GrossCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let canc = {
            index: i,
            actuals: item.CancelCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }
        let ren = {
            index: i,
            actuals: item.RenewARRCW,
            units: item.RenewsUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewARRTargetCW,
            qrfDiff: item.RenewCWVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.RenewCWVsQrf,
            ww: item.RenewWW
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    newState[0].details.geo.week = item1;
    newState[1].details.geo.week = item2;
    newState[2].details.geo.week = item3;
    newState[3].details.geo.week = item4;
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
            vsQrf: item.NewVSQRF,
            yy: item.NewYY
        }
        let gross = {
            index: i,
            actuals: item.GrossARRActual,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossARRTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.market_area_code,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossVsQrf,
            yy: item.GrossYY
        }
        let canc = {
            index: i,
            actuals: item.CancelARRActual,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelARRTarget,
            qrfDiff: item.CancelArrVsQrfDiff,
            type: item.market_area_code,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewActuals,
            marketArea: item.market_area_code,
            qq: item.RenewARRQQTY,
            qrf: item.RenewTarget,
            qrfDiff: item.RenewVsQrfDiff,
            type: item.market_area_code,
            units: item.RenewUnitsActual,
            vsQrf: item.RenewVSQRF,
            yy: item.RenewARRYY
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
            actuals: item.GrossCW,
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
            actuals: item.CancelCW,
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
            actuals: item.RenewARRCW,
            units: item.RenewsUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewARRTargetCW,
            qrfDiff: item.RenewCWVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.RenewCWVsQrf,
            ww: item.RenewWW
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
export function processFinancialRoutesQTD(newState, data) {

    //Clear old Values
    newState[0].details.routes.qtd = [];
    newState[1].details.routes.qtd = [];
    newState[2].details.routes.qtd = [];
    newState[3].details.routes.qtd = [];
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
            vsQrf: item.NewVSQRF,
            yy: item.NewYY
        }
        let gross = {
            index: i,
            actuals: item.GrossARRActual,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossARRTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.route_to_market,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossVsQrf,
            yy: item.GrossYY
        }
        let canc = {
            index: i,
            actuals: item.CancelARRActual,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelARRTarget,
            qrfDiff: item.CancelArrVsQrfDiff,
            type: item.route_to_market,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewActuals,
            marketArea: item.market_area_code,
            qq: item.RenewARRQQTY,
            qrf: item.RenewTarget,
            qrfDiff: item.RenewVsQrfDiff,
            type: item.route_to_market,
            units: item.RenewUnitsActual,
            vsQrf: item.RenewVSQRF,
            yy: item.RenewARRYY
        }

        newState[0].details.routes.qtd.push(net);
        newState[1].details.routes.qtd.push(gross);
        newState[2].details.routes.qtd.push(canc);
        newState[3].details.routes.qtd.push(ren);

    }

}
export function processFinancialRoutesWeek(newState, data) {
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
            actuals: item.GrossCW,
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
            actuals: item.CancelCW,
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
            actuals: item.RenewARRCW,
            units: item.RenewsUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewARRTargetCW,
            qrfDiff: item.RenewCWVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.RenewCWVsQrf,
            ww: item.RenewWW
        }

        item1.push(net);
        item2.push(gross);
        item3.push(canc);
        item4.push(ren);
    }
    newState[0].details.routes.week = item1;
    newState[1].details.routes.week = item2;
    newState[2].details.routes.week = item3;
    newState[3].details.routes.week = item4;
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
            vsQrf: item.NewVSQRF,
            yy: item.NewYY
        }
        let gross = {
            index: i,
            actuals: item.GrossARRActual,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossARRTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.segment_pivot,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossVsQrf,
            yy: item.GrossYY
        }
        let canc = {
            index: i,
            actuals: item.CancelARRActual,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelARRTarget,
            qrfDiff: item.CancelArrVsQrfDiff,
            type: item.segment_pivot,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewActuals,
            marketArea: item.market_area_code,
            qq: item.RenewARRQQTY,
            qrf: item.RenewTarget,
            qrfDiff: item.RenewVsQrfDiff,
            type: item.segment_pivot,
            units: item.RenewUnitsActual,
            vsQrf: item.RenewVSQRF,
            yy: item.RenewARRYY
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
            actuals: item.GrossCW,
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
            actuals: item.CancelCW,
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
            actuals: item.RenewARRCW,
            units: item.RenewsUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewARRTargetCW,
            qrfDiff: item.RenewCWVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.RenewCWVsQrf,
            ww: item.RenewWW
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
export function processFinancialProductsQTD(newState, data) {

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
            type: item.product_name,
            vsQrf: item.NewVSQRF,
            yy: item.NewYY
        }
        let gross = {
            index: i,
            actuals: item.GrossARRActual,
            marketArea: item.market_area_code,
            qq: item.GrossARRQQTY,
            qrf: item.GrossARRTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.product_name,
            units: item.GrossUnitsActual,
            vsQrf: item.GrossVsQrf,
            yy: item.GrossYY
        }
        let canc = {
            index: i,
            actuals: item.CancelARRActual,
            marketArea: item.market_area_code,
            qq: item.CancelARRQQTY,
            qrf: item.CancelARRTarget,
            qrfDiff: item.CancelArrVsQrfDiff,
            type: item.product_name,
            units: item.CancelUnitsActual,
            vsQrf: item.CancelVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewActuals,
            marketArea: item.market_area_code,
            qq: item.RenewARRQQTY,
            qrf: item.RenewTarget,
            qrfDiff: item.RenewVsQrfDiff,
            type: item.product_name,
            units: item.RenewUnitsActual,
            vsQrf: item.RenewVSQRF,
            yy: item.RenewARRYY
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
            type: item.product_name,
            vsQrf: item.NewCWVsQrf,
            ww: item.NewWW

        }
        let gross = {
            index: i,
            actuals: item.GrossCW,
            units: item.GrossUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.GrossARRTargetCW,
            qrfDiff: item.GrossCWVsQrfDiff,
            type: item.product_name,
            vsQrf: item.GrossCWVsQrf,
            ww: item.GrossWW
        }
        let canc = {
            index: i,
            actuals: item.CancelCW,
            units: item.CancelUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.CancelARRTargetCW,
            qrfDiff: item.CancelCWVsQrfDiff,
            type: item.product_name,
            vsQrf: item.CancelCWVsQrf,
            ww: item.CancelWW
        }
        let ren = {
            index: i,
            actuals: item.RenewARRCW,
            units: item.RenewsUnitsCW,
            marketArea: item.market_area_code,
            qrf: item.RenewARRTargetCW,
            qrfDiff: item.RenewCWVsQrfDiff,
            type: item.product_name,
            vsQrf: item.RenewCWVsQrf,
            ww: item.RenewWW
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
export function processDiscoverSecondaryData(g1, g2, g5, newState) {

    //  //Marketable universe
    newState[5].value = g2.MarketableUniverseActual;
    newState[5].target = g2.MarketableUniverseTargetFQ;
    newState[5].vsqrf = g2.MarketableUniverseVsQrf;

    //   //UQFM Conversions
    newState[6].value = g2.UQFMConversionActual;
    newState[6].target = g2.UQFMConversionTargetFQ;
    newState[6].vsqrf = g2.MarketableUniverseVsQrf;

    // Paid Media Spend
    newState[7].value = g1.PaidMediaSpendActual;
    newState[7].target = g1.PaidMediaSpendTarget;
    // newState[5].vsqrf = g1.MarketableUniverseVsQrf;

    //Paid Media Sourced UQFMS
    newState[8].value = g2.PaidMediaSourcedUQFMSActual;
    newState[8].target = g2.PaidMediaSourcedUQFMSTargetFQ;
    newState[8].vsqrf = g2.PaidMediaSourcedUQFMSVsQRF;

    //New UQFMS
    newState[9].value = g2.NewUQFMSActual;
    newState[9].target = g2.NewUQFMSTargetFQ;
    newState[9].vsqrf = g2.NewUQFMSVsQRF;

    //Bounce Rate
    newState[10].value = g5.BounceRateActual;
    newState[10].target = g5.BounceRateActual;
    // newState[10].vsqrf = g5.BounceRateActual;

}
export function processDiscoverMultichartData(g1, g2, g5, newState) {

    let weekG1Flag = g1.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    let weekG2Flag = g2.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    let weekG5Flag = g5.map(item => {
        return { ...item, weekNo: parseInt(item.week) ? parseInt(item.week) : 1 }
    })
    // _.orderBy(weekFlag, weekNo, ['asc'])

    let newG1 = _.orderBy(weekG1Flag, ['weekNo'], ['asc']);
    let newG2 = _.orderBy(weekG2Flag, ['weekNo'], ['asc']);
    let newG5 = _.orderBy(weekG5Flag, ['weekNo'], ['asc']);

    let traffic = {
        actual: [],
        target: [],
        lq: [],
        ly: []
    },
        marketable = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        uqfm = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        paidMediaSpend = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        paidMediaSource = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        newUQFM = {
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


    //Get Discover G1 Multichart values
    for (let i = 0; i < g1.length; i++) {
        let item = newG1[i];
        paidMediaSpend.actual.push(item.PaidMediaSpendActual);
        paidMediaSpend.target.push(item.PaidMediaSpendTargetFQ);
        paidMediaSpend.ly.push(item.PaidMediaSpendLY);
        paidMediaSpend.lq.push(item.PaidMediaSpendLQ);

    };
    //Get Discover G2 Multichart values
    for (let i = 0; i < g2.length; i++) {
        let item = newG2[i];
        //Market
        marketable.actual.push(item.MarketableUniverseActual);
        marketable.target.push(item.MarketableUniverseTargetFQ);
        marketable.ly.push(item.MarketableUniverseLY);
        marketable.lq.push(item.MarketableUniverseLQ);
        //UQFM
        uqfm.actual.push(item.UQFMConversionActual);
        uqfm.target.push(item.UQFMConversionTargetFQ);
        uqfm.ly.push(item.UQFMConversionLY);
        uqfm.lq.push(item.UQFMConversionLQ);

        //Paid Sourced
        paidMediaSource.actual.push(item.PaidMediaSourcedUQFMSActual);
        paidMediaSource.target.push(item.PaidMediaSourcedUQFMSTargetFQ);
        paidMediaSource.ly.push(item.PaidMediaSourcedUQFMSLY);
        paidMediaSource.lq.push(item.PaidMediaSourcedUQFMSLQ);
        //New UQFM
        newUQFM.actual.push(item.NewUQFMSActual);
        newUQFM.target.push(item.NewUQFMSTargetFQ);
        newUQFM.ly.push(item.NewUQFMSLY);
        newUQFM.lq.push(item.NewUQFMSLQ);


    };
    //Get Discover G5 Multichart values
    for (let i = 0; i < g5.length; i++) {
        let item = newG5[i];
        //traffic
        traffic.actual.push(item.TrafficActual);
        traffic.target.push(item.TrafficTargetFQ);
        traffic.ly.push(item.TrafficLY);
        traffic.lq.push(item.TrafficLQ);
        // Bounce
        bounceRate.actual.push(item.BounceRateActual);
        bounceRate.target.push(item.BounceRateTargetFQ);
        bounceRate.ly.push(item.BounceRateLY);
        bounceRate.lq.push(item.BounceRateLQ);

    };
    //Set Multichart Values
    for (let i = 4; i < newState.length; i++) {
        switch (i) {
            case 4:
                currentMulti = [traffic.actual, traffic.target, traffic.ly, traffic.lq];
                break;
            case 5:
                currentMulti = [marketable.actual, marketable.target, marketable.ly, marketable.lq];
                break;
            case 6:
                // currentMulti = [uqfm.actual, uqfm.target, uqfm.ly, uqfm.lq];
                break;
            case 7:
                currentMulti = [paidMediaSpend.actual, paidMediaSpend.target, paidMediaSpend.ly, paidMediaSpend.lq];
                break;
            case 8:
                currentMulti = [paidMediaSource.actual, paidMediaSource.target, paidMediaSource.ly, paidMediaSource.lq];
                break;
            case 9:
                currentMulti = [newUQFM.actual, newUQFM.target, newUQFM.ly, newUQFM.lq];
                break;
            case 10:
                // currentMulti = [bounceRate.actual, bounceRate.target, bounceRate.ly, bounceRate.lq];
                break;
            default:
                break;
        }
        newState[i]['details'].multichart = currentMulti;
    }
}
export function processDiscoverQTDData(g1, g2, g5, newState) {
    for (let i = 4; i < newState.length; i++) {


        switch (i) {
            // Traffic
            case 4:
                newState[i].details.qtdw.qtd[0].value = g5.TrafficActual;
                newState[i].details.qtdw.qtd[1].value = g5.TrafficTargetFQ;
                newState[i].details.qtdw.qtd[2].value = g5.TrafficVsQrfDiff;
                newState[i].details.qtdw.qtd[3].value = g5.TrafficVsQrf;
                newState[i].details.qtdw.qtd[4].value = g5.TrafficQQTY;
                newState[i].details.qtdw.qtd[5].value = g5.TrafficYY;

                newState[i].details.qtdw.week[0].value = g5.TrafficCW;
                newState[i].details.qtdw.week[1].value = g5.TrafficTargetCW;
                newState[i].details.qtdw.week[2].value = g5.TrafficVsQrfDiffCW;
                newState[i].details.qtdw.week[3].value = g5.TrafficVsQrfCW;
                newState[i].details.qtdw.week[4].value = g5.TrafficWW;
                break;
            // Marketable Universe
            case 5:
                newState[i].details.qtdw.qtd[0].value = g2.MarketableUniverseActual;
                newState[i].details.qtdw.qtd[1].value = g2.MarketableUniverseTargetFQ;
                newState[i].details.qtdw.qtd[2].value = g2.MarketableUniverseVsQrfDiff;
                newState[i].details.qtdw.qtd[3].value = g2.MarketableUniverseVsQrf;
                newState[i].details.qtdw.qtd[4].value = g2.MarketableUniverseQQTY;
                newState[i].details.qtdw.qtd[5].value = g2.MarketableUniverseYY;

                newState[i].details.qtdw.week[0].value = g2.MarketableUniverseCW;
                newState[i].details.qtdw.week[1].value = g2.MarketableUniverseTargetCW;
                newState[i].details.qtdw.week[2].value = g2.MarketableUniverseVsQrfDiffCW;
                newState[i].details.qtdw.week[3].value = g2.MarketableUniverseVsQrfCW;
                newState[i].details.qtdw.week[4].value = g2.MarketableUniverseWW;
                break;
            // Uqgm Conversion
            case 6:
                newState[i].details.qtdw.qtd[0].value = g2.UQFMConversionActual;
                newState[i].details.qtdw.qtd[1].value = g2.UQFMConversionActual;
                newState[i].details.qtdw.qtd[2].value = g2.UQFMConversionActual;
                newState[i].details.qtdw.qtd[3].value = g2.UQFMConversionActual;
                newState[i].details.qtdw.qtd[4].value = g2.UQFMConversionQQTY;
                newState[i].details.qtdw.qtd[5].value = g2.UQFMConversionYY;

                newState[i].details.qtdw.week[0].value = g2.UQFMConversionCw;
                newState[i].details.qtdw.week[1].value = g2.UQFMConversionCw;
                newState[i].details.qtdw.week[2].value = g2.UQFMConversionCw;
                newState[i].details.qtdw.week[3].value = g2.UQFMConversionWW;
                newState[i].details.qtdw.week[4].value = g2.UQFMConversionWW;
                break;
            // Paid Media Spend
            case 7:
                newState[i].details.qtdw.qtd[0].value = g1.PaidMediaSpendActual;
                newState[i].details.qtdw.qtd[1].value = g1.PaidMediaSpendTarget;
                newState[i].details.qtdw.qtd[2].value = g1.PaidMediaSpendActual;
                newState[i].details.qtdw.qtd[3].value = g1.PaidMediaSpendVsQrf;
                newState[i].details.qtdw.qtd[4].value = g1.PaidMediaSpendQQTY;
                newState[i].details.qtdw.qtd[5].value = g1.PaidMediaSpendYY;

                newState[i].details.qtdw.week[0].value = g1.PaidMediaSpendCW;
                newState[i].details.qtdw.week[1].value = g1.PaidMediaSpendTargetCW;
                newState[i].details.qtdw.week[2].value = g1.PaidMediaSpendCWVsQrfDiff;
                newState[i].details.qtdw.week[3].value = g1.PaidMediaSpendCWVsQrf;
                newState[i].details.qtdw.week[4].value = g1.PaidMediaSpendWW;
                break;
            // Paid Media Sourced
            case 8:
                newState[i].details.qtdw.qtd[0].value = g2.PaidMediaSourcedUQFMSActual;
                newState[i].details.qtdw.qtd[1].value = g2.PaidMediaSourcedUQFMSTargetFQ;
                newState[i].details.qtdw.qtd[2].value = g2.PaidMediaSourcedUQFMSQRFDiff;
                newState[i].details.qtdw.qtd[3].value = g2.PaidMediaSourcedUQFMSVsQRF;
                newState[i].details.qtdw.qtd[4].value = g2.PaidMediaSourcedUQFMSQQTY;
                newState[i].details.qtdw.qtd[5].value = g2.PaidMediaSourcedUQFMSYY;

                newState[i].details.qtdw.week[0].value = g2.PaidMediaSourcedUQFMSCW;
                newState[i].details.qtdw.week[1].value = g2.PaidMediaSourcedUQFMSTargetCW;
                newState[i].details.qtdw.week[2].value = g2.PaidMediaSourcedUQFMSQRFDiffCW;
                newState[i].details.qtdw.week[3].value = g2.PaidMediaSourcedUQFMSVsQRFCW;
                newState[i].details.qtdw.week[4].value = g2.PaidMediaSourcedUQFMSWW;
                break;
            // New UQFM
            case 9:
                newState[i].details.qtdw.qtd[0].value = g2.NewUQFMSActual;
                newState[i].details.qtdw.qtd[1].value = g2.NewUQFMSTargetFQ;
                newState[i].details.qtdw.qtd[2].value = g2.NewUQFMSQRFDiff;
                newState[i].details.qtdw.qtd[3].value = g2.NewUQFMSVsQRF;
                newState[i].details.qtdw.qtd[4].value = g2.NewUQFMSQQTY;
                newState[i].details.qtdw.qtd[5].value = g2.NewUQFMSYY;

                newState[i].details.qtdw.week[0].value = g2.NewUQFMSCW;
                newState[i].details.qtdw.week[1].value = g2.NewUQFMSTargetCW;
                newState[i].details.qtdw.week[2].value = g2.NewUQFMSQRFDiffCW;
                newState[i].details.qtdw.week[3].value = g2.NewUQFMSVsQRFCW;
                newState[i].details.qtdw.week[4].value = g2.NewUQFMSWW;
                break;
            // Bounce Rate
            case 10:
                newState[i].details.qtdw.qtd[0].value = g5.BounceRateActual;
                newState[i].details.qtdw.qtd[1].value = g5.BounceRateActual;
                newState[i].details.qtdw.qtd[2].value = g5.BounceRateActual;
                newState[i].details.qtdw.qtd[3].value = g5.BounceRateActual;
                newState[i].details.qtdw.qtd[4].value = g5.BounceRateQQLY1;
                newState[i].details.qtdw.qtd[5].value = g5.BounceRateYY;

                newState[i].details.qtdw.week[0].value = g5.BounceRateCW;
                newState[i].details.qtdw.week[1].value = g5.BounceRateCW;
                newState[i].details.qtdw.week[2].value = g5.BounceRateCW;
                newState[i].details.qtdw.week[3].value = g5.BounceRateCW;
                newState[i].details.qtdw.week[4].value = g5.BounceRateWW;
                break;
        }
    }
}
export function processDiscoverGeoQTDData(g1, g2, g5, newState) {
    //Clear old Values
    newState[4].details.geo.qtd = [];
    newState[5].details.geo.qtd = [];
    newState[6].details.geo.qtd = [];
    newState[7].details.geo.qtd = [];
    newState[8].details.geo.qtd = [];
    newState[9].details.geo.qtd = [];
    newState[10].details.geo.qtd = [];
    newState[4].details.geo.week = [];
    newState[5].details.geo.week = [];
    newState[6].details.geo.week = [];
    newState[7].details.geo.week = [];
    newState[8].details.geo.week = [];
    newState[9].details.geo.week = [];
    newState[10].details.geo.week = [];

    for (let i = 0; i < g1.length; i++) {
        let item = g1[i];
        let paidmedia = {
            index: i,
            actuals: item.PaidMediaSpendActual,
            marketArea: item.market_area_code,
            qq: item.PaidMediaSpendQQTY,
            qrf: item.PaidMediaSpendTarget,
            qrfDiff: item.PaidMediaSpendVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.PaidMediaSpendVsQrf,
            yy: item.PaidMediaSpendYY
        }
        let weekPM =
        {
            index: i,
            marketArea: item.market_area_code,
            actuals: item.PaidMediaSpendCW,
            qrf: item.PaidMediaSpendTargetCW,
            qrfDiff: item.PaidMediaSpendVsQrfDiff,
            vsQrf: item.PaidMediaSpendVsQrf,
            ww: item.PaidMediaSpendWW,
            type: item.geo_code,
        }
        newState[7].details.geo.qtd.push(paidmedia);
        newState[7].details.geo.week.push(weekPM);

    }

    for (let i = 0; i < g2.length; i++) {
        let item = g2[i];
        //Market
        let marketable = {
            index: i,
            actuals: item.MarketableUniverseActual,
            marketArea: item.market_area_code,
            qq: item.MarketableUniverseQQTY,
            qrf: item.MarketableUniverseTargetFQ,
            qrfDiff: item.MarketableUniverseVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.MarketableUniverseVsQrf,
            yy: item.MarketableUniverseYY
        }
        let marketPM =
        {
            index: i,
            marketArea: item.market_area_code,
            actuals: item.MarketableUniverseCW,
            qrf: item.MarketableUniverseTargetCW,
            qrfDiff: item.MarketableUniverseVsQrfDiffCW,
            vsQrf: item.MarketableUniverseVsQrfCW,
            ww: item.MarketableUniverseWW,
            type: item.geo_code,
        }
        // New UQFM
        let newUqfm = {
            index: i,
            actuals: item.NewUQFMSActual,
            marketArea: item.market_area_code,
            qq: item.NewUQFMSQQTY,
            qrf: item.NewUQFMSTargetFQ,
            qrfDiff: item.NewUQFMSQRFDiff,
            type: item.geo_code,
            vsQrf: item.NewUQFMSVsQRF,
            yy: item.NewUQFMSYY
        }
        let newPM =
        {
            index: i,
            marketArea: item.market_area_code,
            actuals: item.NewUQFMSCW,
            qrf: item.NewUQFMSTargetCW,
            qrfDiff: item.NewUQFMSQRFDiffCW,
            vsQrf: item.NewUQFMSVsQRFCW,
            ww: item.NewUQFMSWW,
            type: item.geo_code,
        }
        //Paid Media Sourced
        let paid = {
            index: i,
            actuals: item.PaidMediaSourcedUQFMSActual,
            marketArea: item.market_area_code,
            qq: item.PaidMediaSourcedUQFMSQQTY,
            qrf: item.PaidMediaSourcedUQFMSTargetFQ,
            qrfDiff: item.PaidMediaSourcedUQFMSQRFDiff,
            type: item.geo_code,
            vsQrf: item.PaidMediaSourcedUQFMSVsQRF,
            yy: item.PaidMediaSourcedUQFMSYY
        }
        let paidPM =
        {
            index: i,
            marketArea: item.market_area_code,
            actuals: item.PaidMediaSourcedUQFMSCW,
            qrf: item.PaidMediaSourcedUQFMSTargetCW,
            qrfDiff: item.PaidMediaSourcedUQFMSQRFDiffCW,
            vsQrf: item.PaidMediaSourcedUQFMSVsQRFCW,
            ww: item.PaidMediaSourcedUQFMSWW,
            type: item.geo_code,
        }
        //UQFM
        let uqfm = {
            index: i,
            actuals: item.UQFMConversionActual,
            marketArea: item.market_area_code,
            qq: item.UQFMConversionQQTY,
            qrf: item.UQFMActual,
            qrfDiff: item.UQFMConversionActual,
            type: item.geo_code,
            vsQrf: item.UQFMConversionActual,
            yy: item.UQFMConversionYY
        }
        let uqfmPM =
        {
            index: i,
            marketArea: item.market_area_code,
            actuals: item.UQFMConversionCW,
            qrf: item.UQFMConversionCW,
            qrfDiff: item.UQFMConversionWW,
            vsQrf: item.UQFMConversionWW,
            ww: item.UQFMConversionWW,
            type: item.geo_code,
        }

        newState[5].details.geo.qtd.push(marketable);
        newState[6].details.geo.qtd.push(uqfm);
        newState[8].details.geo.qtd.push(paid);
        newState[9].details.geo.qtd.push(newUqfm);

        newState[5].details.geo.week.push(marketPM);
        newState[6].details.geo.week.push(newPM);
        newState[8].details.geo.week.push(paidPM);
        newState[9].details.geo.week.push(uqfmPM);



    }


    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActual,
            marketArea: item.market_area_code,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTargetFQ,
            qrfDiff: item.TrafficVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        let trafficPM =
        {
            index: i,
            marketArea: item.market_area_code,
            actuals: item.TrafficCW,
            qrf: item.TrafficTargetCW,
            qrfDiff: item.TrafficVsQrfDiffCW,
            vsQrf: item.TrafficVsQrfCW,
            ww: item.TrafficWW,
            type: item.geo_code,
        }
        let bounce = {
            index: i,
            actuals: item.BounceRateActual,
            marketArea: item.market_area_code,
            qq: item.BounceRateActual,
            qrf: item.BounceRateActual,
            qrfDiff: item.BounceRateActual,
            type: item.geo_code,
            vsQrf: item.BounceRateYY,
            yy: item.BounceRateYY
        }
        let bouncePM =
        {
            index: i,
            marketArea: item.market_area_code,
            actuals: item.BounceRateCW,
            qrf: item.BounceRateCW,
            qrfDiff: item.BounceRateWW,
            vsQrf: item.BounceRateWW,
            ww: item.BounceRateWW,
            type: item.geo_code,
        }
        newState[4].details.geo.qtd.push(traffic);
        newState[10].details.geo.qtd.push(bounce);
        newState[4].details.geo.week.push(trafficPM);
        newState[10].details.geo.week.push(bouncePM);
    }
}
export function processDiscoverMarketQTDData(g1, g2, g5, newState) {
    //Clear old Values
    newState[4].details.market.qtd = [];
    newState[5].details.market.qtd = [];
    newState[6].details.market.qtd = [];
    newState[7].details.market.qtd = [];
    newState[8].details.market.qtd = [];
    newState[9].details.market.qtd = [];
    newState[10].details.market.qtd = [];
    newState[4].details.market.week = [];
    newState[5].details.market.week = [];
    newState[6].details.market.week = [];
    newState[7].details.market.week = [];
    newState[8].details.market.week = [];
    newState[9].details.market.week = [];
    newState[10].details.market.week = [];

    for (let i = 0; i < g1.length; i++) {
        let item = g1[i];
        let paidmedia = {
            index: i,
            actuals: item.PaidMediaSpendActual,
            qq: item.PaidMediaSpendQQTY,
            qrf: item.PaidMediaSpendTarget,
            qrfDiff: item.PaidMediaSpendVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.PaidMediaSpendVsQrf,
            yy: item.PaidMediaSpendYY
        }
        let weekPM =
        {
            index: i,
            actuals: item.PaidMediaSpendCW,
            qrf: item.PaidMediaSpendTargetCW,
            qrfDiff: item.PaidMediaSpendVsQrfDiff,
            vsQrf: item.PaidMediaSpendVsQrf,
            ww: item.PaidMediaSpendWW,
            type: item.market_area_code,
        }
        newState[7].details.market.qtd.push(paidmedia);
        newState[7].details.market.week.push(weekPM);

    }
    for (let i = 0; i < g2.length; i++) {
        let item = g2[i];
        //Market
        let marketable = {
            index: i,
            actuals: item.MarketableUniverseActual,
            qq: item.MarketableUniverseQQTY,
            qrf: item.MarketableUniverseTargetFQ,
            qrfDiff: item.MarketableUniverseVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.MarketableUniverseVsQrf,
            yy: item.MarketableUniverseYY
        }
        let marketPM =
        {
            index: i,
            actuals: item.MarketableUniverseCW,
            qrf: item.MarketableUniverseTargetCW,
            qrfDiff: item.MarketableUniverseVsQrfDiffCW,
            vsQrf: item.MarketableUniverseVsQrfCW,
            ww: item.MarketableUniverseWW,
            type: item.market_area_code,
        }
        // New UQFM
        let newUqfm = {
            index: i,
            actuals: item.NewUQFMSActual,
            qq: item.NewUQFMSQQTY,
            qrf: item.NewUQFMSTargetFQ,
            qrfDiff: item.NewUQFMSQRFDiff,
            type: item.market_area_code,
            vsQrf: item.NewUQFMSVsQRF,
            yy: item.NewUQFMSYY
        }
        let newPM =
        {
            index: i,
            actuals: item.NewUQFMSCW,
            qrf: item.NewUQFMSTargetCW,
            qrfDiff: item.NewUQFMSQRFDiffCW,
            vsQrf: item.NewUQFMSVsQRFCW,
            ww: item.NewUQFMSWW,
            type: item.market_area_code,
        }
        //Paid Media Sourced
        let paid = {
            index: i,
            actuals: item.PaidMediaSourcedUQFMSActual,
            qq: item.PaidMediaSourcedUQFMSQQTY,
            qrf: item.PaidMediaSourcedUQFMSTargetFQ,
            qrfDiff: item.PaidMediaSourcedUQFMSQRFDiff,
            type: item.market_area_code,
            vsQrf: item.PaidMediaSourcedUQFMSVsQRF,
            yy: item.PaidMediaSourcedUQFMSYY
        }
        let paidPM =
        {
            index: i,
            actuals: item.PaidMediaSourcedUQFMSCW,
            qrf: item.PaidMediaSourcedUQFMSTargetCW,
            qrfDiff: item.PaidMediaSourcedUQFMSQRFDiffCW,
            vsQrf: item.PaidMediaSourcedUQFMSVsQRFCW,
            ww: item.PaidMediaSourcedUQFMSWW,
            type: item.market_area_code,
        }
        //UQFM
        let uqfm = {
            index: i,
            actuals: item.UQFMConversionActual,
            qq: item.UQFMConversionQQTY,
            qrf: item.UQFMActual,
            qrfDiff: item.UQFMConversionActual,
            type: item.market_area_code,
            vsQrf: item.UQFMConversionActual,
            yy: item.UQFMConversionYY
        }
        let uqfmPM =
        {
            index: i,
            actuals: item.UQFMConversionCW,
            qrf: item.UQFMConversionCW,
            qrfDiff: item.UQFMConversionWW,
            vsQrf: item.UQFMConversionWW,
            ww: item.UQFMConversionWW,
            type: item.market_area_code,
        }

        newState[5].details.market.qtd.push(marketable);
        newState[6].details.market.qtd.push(uqfm);
        newState[8].details.market.qtd.push(paid);
        newState[9].details.market.qtd.push(newUqfm);

        newState[5].details.market.week.push(marketPM);
        newState[6].details.market.week.push(newPM);
        newState[8].details.market.week.push(paidPM);
        newState[9].details.market.week.push(uqfmPM);



    }
    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActual,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTargetFQ,
            qrfDiff: item.TrafficVsQrfDiff,
            type: item.market_area_code,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        let trafficPM =
        {
            index: i,
            actuals: item.TrafficCW,
            qrf: item.TrafficTargetCW,
            qrfDiff: item.TrafficVsQrfDiffCW,
            vsQrf: item.TrafficVsQrfCW,
            ww: item.TrafficWW,
            type: item.market_area_code,
        }
        let bounce = {
            index: i,
            actuals: item.BounceRateActual,
            qq: item.BounceRateActual,
            qrf: item.BounceRateActual,
            qrfDiff: item.BounceRateActual,
            type: item.market_area_code,
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
            type: item.market_area_code,
        }
        newState[4].details.market.qtd.push(traffic);
        newState[10].details.market.qtd.push(bounce);
        newState[4].details.market.week.push(trafficPM);
        newState[10].details.market.week.push(bouncePM);
    }
}
export function processDiscoverSegmentQTDData(g1, g2, g5, newState) {
    //Clear old Values
    newState[4].details.segment.qtd = [];
    newState[5].details.segment.qtd = [];
    newState[6].details.segment.qtd = [];
    newState[7].details.segment.qtd = [];
    newState[8].details.segment.qtd = [];
    newState[9].details.segment.qtd = [];
    newState[10].details.segment.qtd = [];
    newState[4].details.segment.week = [];
    newState[5].details.segment.week = [];
    newState[6].details.segment.week = [];
    newState[7].details.segment.week = [];
    newState[8].details.segment.week = [];
    newState[9].details.segment.week = [];
    newState[10].details.segment.week = [];

    for (let i = 0; i < g1.length; i++) {
        let item = g1[i];
        let paidmedia = {
            index: i,
            actuals: item.PaidMediaSpendActual,
            qq: item.PaidMediaSpendQQTY,
            qrf: item.PaidMediaSpendTarget,
            qrfDiff: item.PaidMediaSpendVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.PaidMediaSpendVsQrf,
            yy: item.PaidMediaSpendYY
        }
        let weekPM =
        {
            index: i,
            actuals: item.PaidMediaSpendCW,
            qrf: item.PaidMediaSpendTargetCW,
            qrfDiff: item.PaidMediaSpendVsQrfDiff,
            vsQrf: item.PaidMediaSpendVsQrf,
            ww: item.PaidMediaSpendWW,
            type: item.segment_pivot
        }
        newState[7].details.segment.qtd.push(paidmedia);
        newState[7].details.segment.week.push(weekPM);

    }
    for (let i = 0; i < g2.length; i++) {
        let item = g2[i];
        //Market
        let marketable = {
            index: i,
            actuals: item.MarketableUniverseActual,
            qq: item.MarketableUniverseQQTY,
            qrf: item.MarketableUniverseTargetFQ,
            qrfDiff: item.MarketableUniverseVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.MarketableUniverseVsQrf,
            yy: item.MarketableUniverseYY
        }
        let marketPM =
        {
            index: i,
            actuals: item.MarketableUniverseCW,
            qrf: item.MarketableUniverseTargetCW,
            qrfDiff: item.MarketableUniverseVsQrfDiffCW,
            vsQrf: item.MarketableUniverseVsQrfCW,
            ww: item.MarketableUniverseWW,
            type: item.segment_pivot,
        }
        // New UQFM
        let newUqfm = {
            index: i,
            actuals: item.NewUQFMSActual,
            qq: item.NewUQFMSQQTY,
            qrf: item.NewUQFMSTargetFQ,
            qrfDiff: item.NewUQFMSQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.NewUQFMSVsQRF,
            yy: item.NewUQFMSYY
        }
        let newPM =
        {
            index: i,
            actuals: item.NewUQFMSCW,
            qrf: item.NewUQFMSTargetCW,
            qrfDiff: item.NewUQFMSQRFDiffCW,
            vsQrf: item.NewUQFMSVsQRFCW,
            ww: item.NewUQFMSWW,
            type: item.segment_pivot,
        }
        //Paid Media Sourced
        let paid = {
            index: i,
            actuals: item.PaidMediaSourcedUQFMSActual,
            qq: item.PaidMediaSourcedUQFMSQQTY,
            qrf: item.PaidMediaSourcedUQFMSTargetFQ,
            qrfDiff: item.PaidMediaSourcedUQFMSQRFDiff,
            type: item.segment_pivot,
            vsQrf: item.PaidMediaSourcedUQFMSVsQRF,
            yy: item.PaidMediaSourcedUQFMSYY
        }
        let paidPM =
        {
            index: i,
            actuals: item.PaidMediaSourcedUQFMSCW,
            qrf: item.PaidMediaSourcedUQFMSTargetCW,
            qrfDiff: item.PaidMediaSourcedUQFMSQRFDiffCW,
            vsQrf: item.PaidMediaSourcedUQFMSVsQRFCW,
            ww: item.PaidMediaSourcedUQFMSWW,
            type: item.segment_pivot,
        }
        //UQFM
        let uqfm = {
            index: i,
            actuals: item.UQFMConversionActual,
            qq: item.UQFMConversionQQTY,
            qrf: item.UQFMActual,
            qrfDiff: item.UQFMConversionActual,
            type: item.segment_pivot,
            vsQrf: item.UQFMConversionActual,
            yy: item.UQFMConversionYY
        }
        let uqfmPM =
        {
            index: i,
            actuals: item.UQFMConversionCW,
            qrf: item.UQFMConversionCW,
            qrfDiff: item.UQFMConversionWW,
            vsQrf: item.UQFMConversionWW,
            ww: item.UQFMConversionWW,
            type: item.segment_pivot,
        }

        newState[5].details.segment.qtd.push(marketable);
        newState[6].details.segment.qtd.push(uqfm);
        newState[8].details.segment.qtd.push(paid);
        newState[9].details.segment.qtd.push(newUqfm);

        newState[5].details.segment.week.push(marketPM);
        newState[6].details.segment.week.push(newPM);
        newState[8].details.segment.week.push(paidPM);
        newState[9].details.segment.week.push(uqfmPM);



    }
    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActual,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTargetFQ,
            qrfDiff: item.TrafficVsQrfDiff,
            type: item.segment_pivot,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        let trafficPM =
        {
            index: i,
            actuals: item.TrafficCW,
            qrf: item.TrafficTargetCW,
            qrfDiff: item.TrafficVsQrfDiffCW,
            vsQrf: item.TrafficVsQrfCW,
            ww: item.TrafficWW,
            type: item.segment_pivot,
        }
        let bounce = {
            index: i,
            actuals: item.BounceRateActual,
            qq: item.BounceRateActual,
            qrf: item.BounceRateActual,
            qrfDiff: item.BounceRateActual,
            type: item.segment_pivot,
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
            type: item.segment_pivot,
        }
        newState[4].details.segment.qtd.push(traffic);
        newState[10].details.segment.qtd.push(bounce);
        newState[4].details.segment.week.push(trafficPM);
        newState[10].details.segment.week.push(bouncePM);
    }
}
export function processDiscoverRouteQTDData(g1, g2, g5, newState) {

    //Clear old Values
    newState[4].details.routes.qtd = [];
    newState[5].details.routes.qtd = [];
    newState[6].details.routes.qtd = [];
    newState[7].details.routes.qtd = [];
    newState[8].details.routes.qtd = [];
    newState[9].details.routes.qtd = [];
    newState[10].details.routes.qtd = [];
    newState[4].details.routes.week = [];
    newState[5].details.routes.week = [];
    newState[6].details.routes.week = [];
    newState[7].details.routes.week = [];
    newState[8].details.routes.week = [];
    newState[9].details.routes.week = [];
    newState[10].details.routes.week = [];

    for (let i = 0; i < g1.length; i++) {
        let item = g1[i];
        let paidmedia = {
            index: i,
            actuals: item.PaidMediaSpendActual,
            qq: item.PaidMediaSpendQQTY,
            qrf: item.PaidMediaSpendTarget,
            qrfDiff: item.PaidMediaSpendVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.PaidMediaSpendVsQrf,
            yy: item.PaidMediaSpendYY
        }
        let weekPM =
        {
            index: i,
            actuals: item.PaidMediaSpendCW,
            qrf: item.PaidMediaSpendTargetCW,
            qrfDiff: item.PaidMediaSpendVsQrfDiff,
            vsQrf: item.PaidMediaSpendVsQrf,
            ww: item.PaidMediaSpendWW,
            type: item.route_to_market,
        }
        newState[7].details.routes.qtd.push(paidmedia);
        newState[7].details.routes.week.push(weekPM);

    }
    for (let i = 0; i < g2.length; i++) {
        let item = g2[i];
        //Market
        let marketable = {
            index: i,
            actuals: item.MarketableUniverseActual,
            qq: item.MarketableUniverseQQTY,
            qrf: item.MarketableUniverseTargetFQ,
            qrfDiff: item.MarketableUniverseVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.MarketableUniverseVsQrf,
            yy: item.MarketableUniverseYY
        }
        let marketPM =
        {
            index: i,
            actuals: item.MarketableUniverseCW,
            qrf: item.MarketableUniverseTargetCW,
            qrfDiff: item.MarketableUniverseVsQrfDiffCW,
            vsQrf: item.MarketableUniverseVsQrfCW,
            ww: item.MarketableUniverseWW,
            type: item.route_to_market,
        }
        // New UQFM
        let newUqfm = {
            index: i,
            actuals: item.NewUQFMSActual,
            qq: item.NewUQFMSQQTY,
            qrf: item.NewUQFMSTargetFQ,
            qrfDiff: item.NewUQFMSQRFDiff,
            type: item.route_to_market,
            vsQrf: item.NewUQFMSVsQRF,
            yy: item.NewUQFMSYY
        }
        let newPM =
        {
            index: i,
            actuals: item.NewUQFMSCW,
            qrf: item.NewUQFMSTargetCW,
            qrfDiff: item.NewUQFMSQRFDiffCW,
            vsQrf: item.NewUQFMSVsQRFCW,
            ww: item.NewUQFMSWW,
            type: item.route_to_market,
        }
        //Paid Media Sourced
        let paid = {
            index: i,
            actuals: item.PaidMediaSourcedUQFMSActual,
            qq: item.PaidMediaSourcedUQFMSQQTY,
            qrf: item.PaidMediaSourcedUQFMSTargetFQ,
            qrfDiff: item.PaidMediaSourcedUQFMSQRFDiff,
            type: item.route_to_market,
            vsQrf: item.PaidMediaSourcedUQFMSVsQRF,
            yy: item.PaidMediaSourcedUQFMSYY
        }
        let paidPM =
        {
            index: i,
            actuals: item.PaidMediaSourcedUQFMSCW,
            qrf: item.PaidMediaSourcedUQFMSTargetCW,
            qrfDiff: item.PaidMediaSourcedUQFMSQRFDiffCW,
            vsQrf: item.PaidMediaSourcedUQFMSVsQRFCW,
            ww: item.PaidMediaSourcedUQFMSWW,
            type: item.route_to_market,
        }
        //UQFM
        let uqfm = {
            index: i,
            actuals: item.UQFMConversionActual,
            qq: item.UQFMConversionQQTY,
            qrf: item.UQFMActual,
            qrfDiff: item.UQFMConversionActual,
            type: item.route_to_market,
            vsQrf: item.UQFMConversionActual,
            yy: item.UQFMConversionYY
        }
        let uqfmPM =
        {
            index: i,
            actuals: item.UQFMConversionCW,
            qrf: item.UQFMConversionCW,
            qrfDiff: item.UQFMConversionWW,
            vsQrf: item.UQFMConversionWW,
            ww: item.UQFMConversionWW,
            type: item.route_to_market,
        }

        newState[5].details.routes.qtd.push(marketable);
        newState[6].details.routes.qtd.push(uqfm);
        newState[8].details.routes.qtd.push(paid);
        newState[9].details.routes.qtd.push(newUqfm);

        newState[5].details.routes.week.push(marketPM);
        newState[6].details.routes.week.push(newPM);
        newState[8].details.routes.week.push(paidPM);
        newState[9].details.routes.week.push(uqfmPM);



    }
    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActual,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTargetFQ,
            qrfDiff: item.TrafficVsQrfDiff,
            type: item.route_to_market,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        let trafficPM =
        {
            index: i,
            actuals: item.TrafficCW,
            qrf: item.TrafficTargetCW,
            qrfDiff: item.TrafficVsQrfDiffCW,
            vsQrf: item.TrafficVsQrfCW,
            ww: item.TrafficWW,
            type: item.route_to_market,

        }
        let bounce = {
            index: i,
            actuals: item.BounceRateActual,
            qq: item.BounceRateActual,
            qrf: item.BounceRateActual,
            qrfDiff: item.BounceRateActual,
            type: item.route_to_market,
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
            type: item.route_to_market,
        }
        newState[4].details.routes.qtd.push(traffic);
        newState[10].details.routes.qtd.push(bounce);
        newState[4].details.routes.week.push(trafficPM);
        newState[10].details.routes.week.push(bouncePM);
    }
}
export function processDiscoverProductQTDData(g1, g2, g5, newState) {
    //Clear old Values
    newState[4].details.product.qtd = [];
    newState[5].details.product.qtd = [];
    newState[6].details.product.qtd = [];
    newState[7].details.product.qtd = [];
    newState[8].details.product.qtd = [];
    newState[9].details.product.qtd = [];
    newState[10].details.product.qtd = [];
    newState[4].details.product.week = [];
    newState[5].details.product.week = [];
    newState[6].details.product.week = [];
    newState[7].details.product.week = [];
    newState[8].details.product.week = [];
    newState[9].details.product.week = [];
    newState[10].details.product.week = [];

    for (let i = 0; i < g1.length; i++) {
        let item = g1[i];
        let paidmedia = {
            index: i,
            actuals: item.PaidMediaSpendActual,
            qq: item.PaidMediaSpendQQTY,
            qrf: item.PaidMediaSpendTarget,
            qrfDiff: item.PaidMediaSpendVsQrfDiff,
            type: item.product_name,
            vsQrf: item.PaidMediaSpendVsQrf,
            yy: item.PaidMediaSpendYY
        }
        let weekPM =
        {
            index: i,
            actuals: item.PaidMediaSpendCW,
            qrf: item.PaidMediaSpendTargetCW,
            qrfDiff: item.PaidMediaSpendVsQrfDiff,
            vsQrf: item.PaidMediaSpendVsQrf,
            ww: item.PaidMediaSpendWW,
            type: item.product_name,
        }
        newState[7].details.product.qtd.push(paidmedia);
        newState[7].details.product.week.push(weekPM);

    }
    for (let i = 0; i < g2.length; i++) {
        let item = g2[i];
        //Market
        let marketable = {
            index: i,
            actuals: item.MarketableUniverseActual,
            qq: item.MarketableUniverseQQTY,
            qrf: item.MarketableUniverseTargetFQ,
            qrfDiff: item.MarketableUniverseVsQrfDiff,
            type: item.product_name,
            vsQrf: item.MarketableUniverseVsQrf,
            yy: item.MarketableUniverseYY
        }
        let marketPM =
        {
            index: i,
            actuals: item.MarketableUniverseCW,
            qrf: item.MarketableUniverseTargetCW,
            qrfDiff: item.MarketableUniverseVsQrfDiffCW,
            vsQrf: item.MarketableUniverseVsQrfCW,
            ww: item.MarketableUniverseWW,
            type: item.product_name,
        }
        // New UQFM
        let newUqfm = {
            index: i,
            actuals: item.NewUQFMSActual,
            qq: item.NewUQFMSQQTY,
            qrf: item.NewUQFMSTargetFQ,
            qrfDiff: item.NewUQFMSQRFDiff,
            type: item.product_name,
            vsQrf: item.NewUQFMSVsQRF,
            yy: item.NewUQFMSYY
        }
        let newPM =
        {
            index: i,
            actuals: item.NewUQFMSCW,
            qrf: item.NewUQFMSTargetCW,
            qrfDiff: item.NewUQFMSQRFDiffCW,
            vsQrf: item.NewUQFMSVsQRFCW,
            ww: item.NewUQFMSWW,
            type: item.product_name,
        }
        //Paid Media Sourced
        let paid = {
            index: i,
            actuals: item.PaidMediaSourcedUQFMSActual,
            qq: item.PaidMediaSourcedUQFMSQQTY,
            qrf: item.PaidMediaSourcedUQFMSTargetFQ,
            qrfDiff: item.PaidMediaSourcedUQFMSQRFDiff,
            type: item.product_name,
            vsQrf: item.PaidMediaSourcedUQFMSVsQRF,
            yy: item.PaidMediaSourcedUQFMSYY
        }
        let paidPM =
        {
            index: i,
            actuals: item.PaidMediaSourcedUQFMSCW,
            qrf: item.PaidMediaSourcedUQFMSTargetCW,
            qrfDiff: item.PaidMediaSourcedUQFMSQRFDiffCW,
            vsQrf: item.PaidMediaSourcedUQFMSVsQRFCW,
            ww: item.PaidMediaSourcedUQFMSWW,
            type: item.product_name,
        }
        //UQFM
        let uqfm = {
            index: i,
            actuals: item.UQFMConversionActual,
            qq: item.UQFMConversionQQTY,
            qrf: item.UQFMActual,
            qrfDiff: item.UQFMConversionActual,
            type: item.product_name,
            vsQrf: item.UQFMConversionActual,
            yy: item.UQFMConversionYY
        }
        let uqfmPM =
        {
            index: i,
            actuals: item.UQFMConversionCW,
            qrf: item.UQFMConversionCW,
            qrfDiff: item.UQFMConversionWW,
            vsQrf: item.UQFMConversionWW,
            ww: item.UQFMConversionWW,
            type: item.product_name,
        }

        newState[5].details.product.qtd.push(marketable);
        newState[6].details.product.qtd.push(uqfm);
        newState[8].details.product.qtd.push(paid);
        newState[9].details.product.qtd.push(newUqfm);

        newState[5].details.product.week.push(marketPM);
        newState[6].details.product.week.push(newPM);
        newState[8].details.product.week.push(paidPM);
        newState[9].details.product.week.push(uqfmPM);



    }
    for (let i = 0; i < g5.length; i++) {
        let item = g5[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActual,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTargetFQ,
            qrfDiff: item.TrafficVsQrfDiff,
            type: item.product_name,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        let trafficPM =
        {
            index: i,
            actuals: item.TrafficCW,
            qrf: item.TrafficTargetCW,
            qrfDiff: item.TrafficVsQrfDiffCW,
            vsQrf: item.TrafficVsQrfCW,
            ww: item.TrafficWW,
            type: item.product_name,

        }
        let bounce = {
            index: i,
            actuals: item.BounceRateActual,
            qq: item.BounceRateActual,
            qrf: item.BounceRateActual,
            qrfDiff: item.BounceRateActual,
            type: item.product_name,
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
            type: item.product_name,
        }
        newState[4].details.product.qtd.push(traffic);
        newState[10].details.product.qtd.push(bounce);
        newState[4].details.product.week.push(trafficPM);
        newState[10].details.product.week.push(bouncePM);
    }
}
