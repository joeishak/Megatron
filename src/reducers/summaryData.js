import {
    ADD_NEW_PRIMARY_COMMENT,
    ADD_NEW_PRIMARY_REPLY,
    GET_SECONDARY_DETAIL_DATA,
    ADD_NEW_SECONDARY_COMMENT,
    ADD_NEW_SECONDARY_REPLY,
    GET_SUMMARY_DATA,
    FETCH_COMMENTS
} from 'actions/types';
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

        case FETCH_COMMENTS:
        newState = Object.assign({}, state);
        const replies = action.payload.response.replies;
        const comments = action.payload.response.comment.map(ele => {
            return {
                comment: ele.comment,
                id: ele.id,
                replies: replies.map(element => {
                    if (ele.id === element.commentId) {
                        return {
                            comment: element.reply,
                            id: element.id,
                            time: element.postTimeStamp,
                            userName: element.firstName + ' ' + element.lastName
                        }
                    }
                }).filter(notUndefined => notUndefined),
                time: ele.postTimeStamp,
                userName: ele.firstName + ' ' + ele.lastName
            }
        });

        
        console.log(comments);    

        newState[action.payload.metricId].details.comments = comments;
        console.log('Fetched Comments in Summary:',newState[0])
        return newState;
        case GET_SUMMARY_DATA: 
        // primaryFinancial, primaryG2Journey, primaryG3Journey, secondaryFinancial, secondaryG2Journey, secondaryG3Journey, 
        // finMulti, finUnitsMulti, finGeo, finQTD, journG2Mutli, journG3Mutli, journG2QTD, journG3QTD, journG2Geo, journG3Geo,
        // finMarkets, journG2Market, journG3Market,finRoutes,finSegments,finProducts,journG2Routes,journG2Segments,
        // journG2Products,journG3Routes,journG3Segments,journG3Products);

        
        newState = Object.assign({}, state);
            
        //Actual, Targets, Vs QRf
            // //Finance
            newState.primary[0].value = action.payload[0].data[0].NewARRActual;
            newState.primary[0].target = action.payload[0].data[0].NewARRTarget;
            newState.primary[0].vsqrf = action.payload[0].data[0].NewVsQrf;

            // //Discov
            newState.primary[1].value = action.payload[1].data[0].TrafficActual;
            newState.primary[1].target = action.payload[1].data[0].TrafficTarget;
            newState.primary[1].vsqrf = action.payload[1].data[0].TrafficVSQrf;
            //   //Try
            newState.primary[2].value = action.payload[1].data[0].ConversionActual;
            newState.primary[2].target = action.payload[1].data[0].ConversionTarget;
            newState.primary[2].vsqrf = action.payload[1].data[0].ConvcersionVsQrf;
            //  //Buy
            newState.primary[3].value = action.payload[2].data[0].NewQfmActual;
            newState.primary[3].target = action.payload[2].data[0].NewQfmTarget;
            newState.primary[3].vsqrf = action.payload[2].data[0].NewQfmVsQrf;

     

            //  //Use
            newState.primary[4].value = action.payload[2].data[0].RepeatUserMauActual;
            newState.primary[4].target = action.payload[2].data[0].RepeatUserMauTarget;
            newState.primary[4].vsqrf = action.payload[2].data[0].RepeatUserMauVsQrf;

            //   //Rene
            newState.primary[5].value = action.payload[1].data[0].UiCancelRateActual;
            newState.primary[5].target = action.payload[1].data[0].UiCancelRateTarget;
            newState.primary[5].vsqrf = action.payload[1].data[0].UiCancelRateVsQrf;

            processSecondaryData(action.payload[3], action.payload[4], action.payload[5], newState.secondary)

            // 0 -primaryFinancial, primaryG2Journey, primaryG3Journey, secondaryFinancial, secondaryG2Journey, secondaryG3Journey, 
            // finMulti, finUnitsMulti, finGeo, finQTD, journG2Mutli, journG3Mutli, journG2QTD, journG3QTD, journG2Geo, journG3Geo,
            // finMarkets, journG2Market, journG3Market,finRoutes,finSegments,finProducts,journG2Routes,journG2Segments,
            // journG2Products,journG3Routes,journG3Segments,27 - journG3Products);

            processFinancialMultichart(newState.secondary, action.payload[6].data);
            processFinancialUnitsMultichart(newState.secondary, action.payload[7].data);
            processFinancialQTD(newState.secondary, action.payload[9].data);
            processFinancialGeoQTD(newState.secondary, action.payload[8].data);
            processFinancialMarketQTD(newState.secondary, action.payload[16].data);
            processJourneyMultichart(action.payload[10].data, action.payload[11].data, newState.secondary);
            processJourneyQTD(action.payload[12].data[0], action.payload[13].data[0], newState.secondary);
            processJourneyGeoQTD(action.payload[14].data, action.payload[15].data, newState.secondary);
            processJourneyMarketAreaQTD(action.payload[17].data, action.payload[18].data, newState.secondary)
            processFinancialRoutesQTD(newState.secondary,action.payload[19].data  );
            processFinancialSegmentQTD(newState.secondary,action.payload[20].data);
            processFinancialProductsQTD(newState.secondary, action.payload[21].data);
            processJourneyRoutesQTD(action.payload[22].data, action.payload[25].data, newState.secondary);
            processJourneySegmentQTD(action.payload[23].data, action.payload[26].data, newState.secondary);
            processJourneyProductQTD(action.payload[24].data, action.payload[27].data, newState.secondary);




            console.log(newState);
            return newState;
        case ADD_NEW_PRIMARY_COMMENT:
            index = action.payload.square;
            copyOfState = Object.assign({}, state);
            let newComments = copyOfState.primary[index].comments.map(item=>{
            return item})
            newComments.push(action.payload.comment);
            return {...copyOfState, comments: newComments};
        // CAse for adding a reply to a previous comment
        case ADD_NEW_PRIMARY_REPLY:
            index = action.payload.square;
            copyOfState = Object.assign({}, state);
            commentIndex = Number(action.payload.comment)
            copyOfState.primary[index].comments[commentIndex].replies.push(action.payload.reply);
            return {...copyOfState};
   
        case ADD_NEW_SECONDARY_COMMENT:
            index = action.payload.square;
            copyOfState = Object.assign({}, state);
            copyOfState.secondary[index].comments.push(action.payload.comment);
            return {...copyOfState};
        // CAse for adding a reply to a previous comment
        case ADD_NEW_SECONDARY_REPLY:
            index = action.payload.square;
            copyOfState = Object.assign({}, state);
             commentIndex = Number(action.payload.comment)
             copyOfState.secondary[index].comments[commentIndex].replies.push(action.payload.reply);
            return {...copyOfState};
        default:
            return state;
    }
}



// TODO: Move to Services
export function processFinancialMultichart(newState, data) {
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
        let item = data[i];
        netArr.actual.push(item.NewARRActual);
        netArr.target.push(item.NewARRTarget);
        netArr.ly.push(item.NewARRLY);
        netArr.lq.push(item.NewARRLQ);
        netCancellations.actual.push(item.CancelARRActual);
        netCancellations.target.push(item.CancelARRTarget);
        netCancellations.ly.push(item.CancelARRLY);
        netCancellations.lq.push(item.CancelARRLQ);
        grossArr.actual.push(item.GrossARRActual);
        grossArr.target.push(item.GrossARRTarget);
        grossArr.ly.push(item.GrossARRLY);
        grossArr.lq.push(item.GrossARRLQ);
        termRenewal.actual.push(item.RenewARRActual);
        termRenewal.target.push(item.RenewARRTarget);
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
        let item = data[i];
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
            newState[i].details.qtdw.qtd[0] = {
                index: 1,
                header: 'Actuals',
                value: findata.NewActuals
            }
            newState[i].details.qtdw.qtd[1].value = findata.NewUnitsActual;
            newState[i].details.qtdw.qtd[2].value = findata.NewTarget;
            newState[i].details.qtdw.qtd[3].value = findata.NewVsQrfDiff;
            newState[i].details.qtdw.qtd[4].value = findata.NewVSQRF;
            newState[i].details.qtdw.qtd[5].value = findata.NewARRQQTY;
            newState[i].details.qtdw.qtd[6].value = findata.NewYY;
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
            break;
            // Renewals Arr
        case 3:
            newState[i].details.qtdw.qtd[0].value = findata.RenewalActuals;
            newState[i].details.qtdw.qtd[1].value = findata.RenewUnitsActual;
            newState[i].details.qtdw.qtd[2].value = findata.RenewARRTarget;
            newState[i].details.qtdw.qtd[3].value = findata.RenewVsQrfDiff;
            newState[i].details.qtdw.qtd[4].value = findata.RenewVSQRF;
            newState[i].details.qtdw.qtd[5].value = findata.RenewARRQQTY;
            newState[i].details.qtdw.qtd[6].value = findata.RenewARRYY;
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
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewARRQQTY,
            qrf: item.RenewARRTarget,
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
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewARRQQTY,
            qrf: item.RenewARRTarget,
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
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewARRQQTY,
            qrf: item.RenewARRTarget,
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
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewARRQQTY,
            qrf: item.RenewARRTarget,
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
            actuals: item.RenewalActuals,
            marketArea: item.market_area_code,
            qq: item.RenewARRQQTY,
            qrf: item.RenewARRTarget,
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
export function processSecondaryData(g1, g2, g3, newState) {
    //Finance
    newState[0].value = g1.data[0].NewARRActual;
    newState[0].target = g1.data[0].NewARRTarget;
    // //Gross New Arr
    newState[1].value = g1.data[0].GrossARRActual;
    newState[1].target = g1.data[0].GrossARRTarget;
    //  //Cacncellations
    newState[2].value = g1.data[0].CancelARRActual;
    newState[2].target = g1.data[0].CancelARRTarget;
    //   //Renewal
    newState[3].value = g1.data[0].RenewARRActual;
    newState[3].target = g1.data[0].RenewARRTarget;
    //  //Target
    newState[4].value = g2.data[0].TrafficActual;
    newState[4].target = g2.data[0].TrafficTarget;
    //  //Marketable universe
    newState[5].value = g3.data[0].MarketableActual;
    newState[5].target = g3.data[0].MarketableTarget;
    //   //UQFM Conversions
    newState[6].value = g3.data[0].UQFMActual;
    newState[6].target = g3.data[0].UQFMTarget;
    // Paid Media Spend
    newState[7].value = g3.data[0].PaidMediaSpendActual;
    newState[7].target = g3.data[0].PaidMediaSpendTarget;
}
export function processJourneyMultichart(g2, g3, newState) {
    let traffic = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        conv = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        qtrrate = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        qtrpayment = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        newqfm = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        repeatuser = {
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
        paidspend = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        paidsource = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        },
        newuqfm = {
            actual: [],
            target: [],
            lq: [],
            ly: []
        };

    //Get Journeys G2 Multichart values
    for (let i = 0; i < g2.length; i++) {
        let item = g2[i];
        traffic.actual.push(item.TrafficActual);
        traffic.target.push(item.TrafficTarget);
        traffic.ly.push(item.TrafficLy);
        traffic.lq.push(item.TrafficLq);
        conv.actual.push(item.ConversionActual);
        conv.target.push(item.ConversionTarget);
        conv.ly.push(item.ConversionLy);
        conv.lq.push(item.ConversionLq);
        qtrrate.actual.push(item.UiCancelRateActual);
        qtrrate.target.push(item.UiCancelRateTarget);
        qtrrate.ly.push(item.UiCancelRateLy);
        qtrrate.lq.push(item.UiCancelRateLQ);
        qtrpayment.actual.push(item.PaymentFailureRateActual);
        qtrpayment.target.push(item.PaymentFailureRateTarget);
        qtrpayment.ly.push(item.PaymentFailureRateLy);
        qtrpayment.lq.push(item.PaymentFailureRateLq);

    };
    //Get Journeys G2 Multichart values
    for (let i = 0; i < g3.length; i++) {
        let item = g3[i];
        newqfm.actual.push(item.NewQfmActual);
        newqfm.target.push(item.NewQfmTarget);
        newqfm.ly.push(item.NewQfmLy);
        newqfm.lq.push(item.NewQfmLq);
        repeatuser.actual.push(item.RepeatUserMauActual);
        repeatuser.target.push(item.RepeatUserMauTarget);
        repeatuser.ly.push(item.RepeatUserMauLy);
        repeatuser.lq.push(item.RepeatUserMauLq);
        marketable.actual.push(item.MarketableActual);
        marketable.target.push(item.MarketableTarget);
        marketable.ly.push(item.MarketableLY);
        marketable.lq.push(item.MarketableLQ);
        uqfm.actual.push(item.UQFMActual);
        uqfm.target.push(item.UQFMTarget);
        uqfm.ly.push(item.UQFMLY);
        uqfm.lq.push(item.UQFMLQ);
        paidspend.actual.push(item.PaidMediaSpendActual);
        paidspend.target.push(item.PaidMediaSpendTarget);
        paidspend.ly.push(item.PaidMediaSpendLY);
        paidspend.lq.push(item.PaidMediaSpendLq);
        paidsource.actual.push(item.PaidMediaSourcedActual);
        paidsource.target.push(item.PaidMediaSourcedTarget);
        paidsource.ly.push(item.PaidMediaSourcedLY);
        paidsource.lq.push(item.PaidMediaSourcedLQ);
        newuqfm.actual.push(item.NewUQFMActual);
        newuqfm.target.push(item.NewUQFMTarget);
        newuqfm.ly.push(item.NewUQFMLY);
        newuqfm.lq.push(item.NewUQFMLQ);

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
            currentMulti = [uqfm.actual, uqfm.target, uqfm.ly, uqfm.lq];
            break;
        case 7:
            currentMulti = [paidspend.actual, paidspend.target, paidspend.ly, paidspend.lq];
            break;

            break;
        default:
            break;
        }
        newState[i]['details'].multichart = currentMulti;
    }
}
export function processJourneyQTD(g2, g3, newState) {
    // State Order: Actual, Units, QRF, QRFDiff, VSQrf, QQ, YY
    for (let i = 4; i < newState.length; i++) {
        let group2 = g2;
        let group3 = g3;

        switch (i) {
            // Traffic
        case 4:
            newState[i].details.qtdw.qtd[0].value = group2.TrafficActual;
            newState[i].details.qtdw.qtd[1].value = group2.TrafficTarget;
            newState[i].details.qtdw.qtd[2].value = group2.TrafficTarget;
            newState[i].details.qtdw.qtd[3].value = group2.TrafficVsQrf;
            newState[i].details.qtdw.qtd[4].value = group2.TrafficQQTY;
            newState[i].details.qtdw.qtd[5].value = group2.TrafficYY;
            break;
            // Marketable Universe
        case 5:
            newState[i].details.qtdw.qtd[0].value = group3.MarketableActual;
            newState[i].details.qtdw.qtd[1].value = group3.MarketableTarget;
            newState[i].details.qtdw.qtd[2].value = group3.MarketableVsQrf;
            newState[i].details.qtdw.qtd[3].value = group3.MarketableVsQrf;
            newState[i].details.qtdw.qtd[4].value = group3.MarketableQQTY;
            newState[i].details.qtdw.qtd[5].value = group3.MarketableYY;
            break;
            // Uqgm Conversion
        case 6:
            newState[i].details.qtdw.qtd[0].value = group3.UQFMActual;
            newState[i].details.qtdw.qtd[1].value = group3.UQFMTarget;
            newState[i].details.qtdw.qtd[2].value = group3.UQFMActual;
            newState[i].details.qtdw.qtd[3].value = group3.UQFMVsQrf;
            newState[i].details.qtdw.qtd[4].value = group3.UQFMQQTY;
            newState[i].details.qtdw.qtd[5].value = group3.UQFMYY;
            break;
            // Paid Media Spend
        case 7:
            newState[i].details.qtdw.qtd[0].value = group3.PaidMediaSpendActual;
            newState[i].details.qtdw.qtd[1].value = group3.PaidMediaSpendTarget;
            newState[i].details.qtdw.qtd[2].value = group3.PaidMediaSpendActual;
            newState[i].details.qtdw.qtd[3].value = group3.PaidMediaSpendVsQrf;
            newState[i].details.qtdw.qtd[4].value = group3.PaidMediaSpendQQTY;
            newState[i].details.qtdw.qtd[5].value = group3.PaidMediaSpendYY;
            break;
        }
    }
}
export function processJourneyGeoQTD(g2, g3, newState) {

    //Clear old Values
    newState[4].details.geo.qtd = [];
    newState[5].details.geo.qtd = [];
    newState[6].details.geo.qtd = [];
    newState[7].details.geo.qtd = [];
    for (let i = 0; i < g2.length; i++) {
        let item = g2[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActual,
            marketArea: item.market_area_code,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficVsQrf,
            type: item.geo_code,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        newState[4].details.geo.qtd.push(traffic);
    }

    for (let i = 0; i < g3.length; i++) {
        let item = g3[i];

        let marketable = {
            index: i,
            actuals: item.MarketableActual,
            marketArea: item.market_area_code,
            qq: item.MarketableQQTY,
            qrf: item.MarketableTarget,
            qrfDiff: item.MarketableVsQrf,
            type: item.geo_code,
            vsQrf: item.MarketableVsQrf,
            yy: item.MarketableYY
        }
        let uqfm = {
            index: i,
            actuals: item.UQFMActual,
            marketArea: item.market_area_code,
            qq: item.UQFMQQTY,
            qrf: item.UQFMTarget,
            qrfDiff: item.UQFMVsQrf,
            type: item.geo_code,
            vsQrf: item.UQFMVsQrf,
            yy: item.UQFMYY
        }
        let paid = {
            index: i,
            actuals: item.PaidMediaSpendActual,
            marketArea: item.market_area_code,
            qq: item.PaidMediaSpendVsQrf,
            qrf: item.PaidMediaSpendTarget,
            qrfDiff: item.PaidMediaSpendVsQrf,
            type: item.geo_code,
            vsQrf: item.PaidMediaSpendVsQrf,
            yy: item.PaidMediaSpendYY
        }

        newState[5].details.geo.qtd.push(marketable);
        newState[6].details.geo.qtd.push(uqfm);
        newState[7].details.geo.qtd.push(paid);



    }
}
export function processJourneyMarketAreaQTD(g2, g3, newState) {

    //Clear old Values
    newState[4].details.market.qtd = [];
    newState[5].details.market.qtd = [];
    newState[6].details.market.qtd = [];
    newState[7].details.market.qtd = [];
    for (let i = 0; i < g2.length; i++) {
        let item = g2[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActual,
            marketArea: item.market_area_code,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficVsQrf,
            type: item.market_area_code,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        newState[4].details.market.qtd.push(traffic);
    }

    for (let i = 0; i < g3.length; i++) {
        let item = g3[i];

        let marketable = {
            index: i,
            actuals: item.MarketableActual,
            marketArea: item.market_area_code,
            qq: item.MarketableQQTY,
            qrf: item.MarketableTarget,
            qrfDiff: item.MarketableVsQrf,
            type: item.market_area_code,
            vsQrf: item.MarketableVsQrf,
            yy: item.MarketableYY
        }
        let uqfm = {
            index: i,
            actuals: item.UQFMActual,
            marketArea: item.market_area_code,
            qq: item.UQFMQQTY,
            qrf: item.UQFMTarget,
            qrfDiff: item.UQFMVsQrf,
            type: item.market_area_code,
            vsQrf: item.UQFMVsQrf,
            yy: item.UQFMYY
        }
        let paid = {
            index: i,
            actuals: item.PaidMediaSpendActual,
            marketArea: item.market_area_code,
            qq: item.PaidMediaSpendVsQrf,
            qrf: item.PaidMediaSpendTarget,
            qrfDiff: item.PaidMediaSpendVsQrf,
            type: item.market_area_code,
            vsQrf: item.PaidMediaSpendVsQrf,
            yy: item.PaidMediaSpendYY
        }

        newState[5].details.market.qtd.push(marketable);
        newState[6].details.market.qtd.push(uqfm);
        newState[7].details.market.qtd.push(paid);



    }
}
export function processJourneyRoutesQTD(g2, g3, newState) {

    //Clear old Values
    newState[4].details.routes.qtd = [];
    newState[5].details.routes.qtd = [];
    newState[6].details.routes.qtd = [];
    newState[7].details.routes.qtd = [];
    for (let i = 0; i < g2.length; i++) {
        let item = g2[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActual,
            marketArea: item.market_area_code,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficVsQrf,
            type: item.route_to_market,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        newState[4].details.routes.qtd.push(traffic);
    }

    for (let i = 0; i < g3.length; i++) {
        let item = g3[i];

        let marketable = {
            index: i,
            actuals: item.MarketableActual,
            marketArea: item.market_area_code,
            qq: item.MarketableQQTY,
            qrf: item.MarketableTarget,
            qrfDiff: item.MarketableVsQrf,
            type: item.route_to_market,
            vsQrf: item.MarketableVsQrf,
            yy: item.MarketableYY
        }
        let uqfm = {
            index: i,
            actuals: item.UQFMActual,
            marketArea: item.market_area_code,
            qq: item.UQFMQQTY,
            qrf: item.UQFMTarget,
            qrfDiff: item.UQFMVsQrf,
            type: item.geo_code,
            vsQrf: item.UQFMVsQrf,
            yy: item.UQFMYY
        }
        let paid = {
            index: i,
            actuals: item.PaidMediaSpendActual,
            marketArea: item.market_area_code,
            qq: item.PaidMediaSpendVsQrf,
            qrf: item.PaidMediaSpendTarget,
            qrfDiff: item.PaidMediaSpendVsQrf,
            type: item.route_to_market,
            vsQrf: item.PaidMediaSpendVsQrf,
            yy: item.PaidMediaSpendYY
        }

        newState[5].details.routes.qtd.push(marketable);
        newState[6].details.routes.qtd.push(uqfm);
        newState[7].details.routes.qtd.push(paid);



    }
}
export function processJourneySegmentQTD(g2, g3, newState) {

    //Clear old Values
    newState[4].details.segment.qtd = [];
    newState[5].details.segment.qtd = [];
    newState[6].details.segment.qtd = [];
    newState[7].details.segment.qtd = [];
    for (let i = 0; i < g2.length; i++) {
        let item = g2[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActual,
            marketArea: item.market_area_code,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficVsQrf,
            type: item.segment_pivot,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        newState[4].details.segment.qtd.push(traffic);
    }

    for (let i = 0; i < g3.length; i++) {
        let item = g3[i];

        let marketable = {
            index: i,
            actuals: item.MarketableActual,
            marketArea: item.market_area_code,
            qq: item.MarketableQQTY,
            qrf: item.MarketableTarget,
            qrfDiff: item.MarketableVsQrf,
            type: item.segment_pivot,
            vsQrf: item.MarketableVsQrf,
            yy: item.MarketableYY
        }
        let uqfm = {
            index: i,
            actuals: item.UQFMActual,
            marketArea: item.market_area_code,
            qq: item.UQFMQQTY,
            qrf: item.UQFMTarget,
            qrfDiff: item.UQFMVsQrf,
            type: item.segment_pivot,
            vsQrf: item.UQFMVsQrf,
            yy: item.UQFMYY
        }
        let paid = {
            index: i,
            actuals: item.PaidMediaSpendActual,
            marketArea: item.market_area_code,
            qq: item.PaidMediaSpendVsQrf,
            qrf: item.PaidMediaSpendTarget,
            qrfDiff: item.PaidMediaSpendVsQrf,
            type: item.segment_pivot,
            vsQrf: item.PaidMediaSpendVsQrf,
            yy: item.PaidMediaSpendYY
        }

        newState[5].details.segment.qtd.push(marketable);
        newState[6].details.segment.qtd.push(uqfm);
        newState[7].details.segment.qtd.push(paid);



    }
}
export function processJourneyProductQTD(g2, g3, newState) {

    //Clear old Values
    newState[4].details.product.qtd = [];
    newState[5].details.product.qtd = [];
    newState[6].details.product.qtd = [];
    newState[7].details.product.qtd = [];
    for (let i = 0; i < g2.length; i++) {
        let item = g2[i];
        let traffic = {
            index: i,
            actuals: item.TrafficActual,
            marketArea: item.market_area_code,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficVsQrf,
            type: item.product_name,
            vsQrf: item.TrafficVsQrf,
            yy: item.TrafficYY
        }
        newState[4].details.product.qtd.push(traffic);
    }

    for (let i = 0; i < g3.length; i++) {
        let item = g3[i];

        let marketable = {
            index: i,
            actuals: item.MarketableActual,
            marketArea: item.market_area_code,
            qq: item.MarketableQQTY,
            qrf: item.MarketableTarget,
            qrfDiff: item.MarketableVsQrf,
            type: item.product_name,
            vsQrf: item.MarketableVsQrf,
            yy: item.MarketableYY
        }
        let uqfm = {
            index: i,
            actuals: item.UQFMActual,
            marketArea: item.market_area_code,
            qq: item.UQFMQQTY,
            qrf: item.UQFMTarget,
            qrfDiff: item.UQFMVsQrf,
            type: item.product_name,
            vsQrf: item.UQFMVsQrf,
            yy: item.UQFMYY
        }
        let paid = {
            index: i,
            actuals: item.PaidMediaSpendActual,
            marketArea: item.market_area_code,
            qq: item.PaidMediaSpendVsQrf,
            qrf: item.PaidMediaSpendTarget,
            qrfDiff: item.PaidMediaSpendVsQrf,
            type: item.product_name,
            vsQrf: item.PaidMediaSpendVsQrf,
            yy: item.PaidMediaSpendYY
        }

        newState[5].details.product.qtd.push(marketable);
        newState[6].details.product.qtd.push(uqfm);
        newState[7].details.product.qtd.push(paid);



    }
}