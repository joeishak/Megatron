import {
    GET_SECONDARY_DATA,
    GET_SECONDARY_DETAIL_DATA,
    ADD_NEW_SECONDARY_COMMENT,
    ADD_NEW_SECONDARY_REPLY

} from 'actions/types';
import {
    SecondaryData
} from '../variables.js';
let copyOfSquare,
    newState,
    index = 0,
    currentMulti,
    newMulti;
export default function (state = SecondaryData, action) {
    switch (action.type) {
    case GET_SECONDARY_DATA:
        //Make a copy of state
        newState = Object.assign([], state);
        processSecondaryData(action.payload[0], action.payload[1], action.payload[2], newState)
        return newState;
    case GET_SECONDARY_DETAIL_DATA:
        // Indexes for Action  Payload containing promises from Infoburst
        // Financial Multichart - 0
        // Financial Units - 1
        // Financial Geo QTD - 2
        // Financial QTD Total - 3,
        // Journey G2 Multichart - 4
        // Journey G3 Multichart - 5
        // Journey G2 QTD  - 6
        // Journey G3 QTD - 7
        // Journey G2 Geo QTD - 8
        // Journey G3 Geo QTD - 9
        // Financial Market QTD - 10
        // Journey G2 Market QTD  - 11
        // Journey G3 Market Qtd - 12

        newState = Object.assign([], state);
        processFinancialMultichart(newState, action.payload[0].data);
        processFinancialUnitsMultichart(newState, action.payload[1].data);
        processFinancialQTD(newState, action.payload[3].data);
        processFinancialGeoQTD(newState, action.payload[2].data);
        processFinancialMarketQTD(newState, action.payload[10].data);
        processJourneyMultichart(action.payload[4].data, action.payload[5].data, newState);
        processJourneyQTD(action.payload[6].data[0], action.payload[7].data[0], newState);
        processJourneyGeoQTD(action.payload[8].data, action.payload[9].data, newState);
        processJourneyMarketAreaQTD(action.payload[11].data, action.payload[12].data,newState)
        return newState;
    case ADD_NEW_SECONDARY_COMMENT:
        index = action.payload.square;
        copyOfSquare = Object.assign({}, state[index]);
        copyOfSquare.comments.push(action.payload.comment);
        state[index] = copyOfSquare;
        return [...state];
        // CAse for adding a reply to a previous comment
    case ADD_NEW_SECONDARY_REPLY:
        index = action.payload.square;

        copyOfSquare = Object.assign({}, state[index]);
        let commentIndex = Number(action.payload.comment)
        copyOfSquare.comments[commentIndex].replies.push(action.payload.reply);
        state[index] = copyOfSquare;
        return [...state]
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
            newState[i].details.qtdw.qtd[0].value = findata.NewActuals;
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
    console.log(data);
    //Clear old Values
    newState[0].details.geo.qtd = [];
    newState[1].details.geo.qtd = [];
    newState[2].details.geo.qtd = [];
    newState[3].details.geo.qtd = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let net = {
            index: i,
            actuals: item.NewActuals,
            units: item.NewUnitsActual,
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
            units: item.GrossUnitsActual,
            qq: item.GrossARRQQTY,
            qrf: item.GrossARRTarget,
            qrfDiff: item.GrossVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.GrossVsQrf,
            yy: item.GrossYY
        }
        let canc = {
            index: i,
            actuals: item.CancelARRActual,
            units: item.CancelUnitsActual,
            qq: item.CancelARRQQTY,
            qrf: item.CancelARRTarget,
            qrfDiff: item.CancelArrVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.CancelVsQrf,
            yy: item.CancelARRYY
        }
        let ren = {
            index: i,
            actuals: item.RenewalActuals,
            units: item.RenewUnitsActual,
            qq: item.RenewARRQQTY,
            qrf: item.RenewARRTarget,
            qrfDiff: item.RenewVsQrfDiff,
            type: item.geo_code,
            vsQrf: item.RenewVSQRF,
            yy: item.RenewARRYY
        }

        newState[0].details.geo.qtd.push(net);
        newState[1].details.geo.qtd.push(gross);
        newState[2].details.geo.qtd.push(canc);
        newState[3].details.geo.qtd.push(ren);



    }


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

        newState[0].details.market.qtd.push(net);
        newState[1].details.market.qtd.push(gross);
        newState[2].details.market.qtd.push(canc);
        newState[3].details.market.qtd.push(ren);

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
            newState[i].details.qtdw.qtd[1].value = group2.TrafficActual;
            newState[i].details.qtdw.qtd[2].value = group2.TrafficTarget;
            newState[i].details.qtdw.qtd[3].value = group2.TrafficTarget;
            newState[i].details.qtdw.qtd[4].value = group2.TrafficVsQrf;
            newState[i].details.qtdw.qtd[5].value = group2.TrafficQQTY;
            newState[i].details.qtdw.qtd[6].value = group2.TrafficYY;
            break;
            // Marketable Universe
        case 5:
            newState[i].details.qtdw.qtd[0].value = group3.MarketableActual;
            newState[i].details.qtdw.qtd[1].value = group3.MarketableActual;
            newState[i].details.qtdw.qtd[2].value = group3.MarketableTarget;
            newState[i].details.qtdw.qtd[3].value = group3.MarketableVsQrf;
            newState[i].details.qtdw.qtd[4].value = group3.MarketableVsQrf;
            newState[i].details.qtdw.qtd[5].value = group3.MarketableQQTY;
            newState[i].details.qtdw.qtd[6].value = group3.MarketableYY;
            break;
            // Uqgm Conversion
        case 6:
            newState[i].details.qtdw.qtd[0].value = group3.UQFMActual;
            newState[i].details.qtdw.qtd[1].value = group3.UQFMActual;
            newState[i].details.qtdw.qtd[2].value = group3.UQFMTarget;
            newState[i].details.qtdw.qtd[3].value = group3.UQFMActual;
            newState[i].details.qtdw.qtd[4].value = group3.UQFMVsQrf;
            newState[i].details.qtdw.qtd[5].value = group3.UQFMQQTY;
            newState[i].details.qtdw.qtd[6].value = group3.UQFMYY;
            break;
            // Paid Media Spend
        case 7:
            newState[i].details.qtdw.qtd[0].value = group3.PaidMediaSpendActual;
            newState[i].details.qtdw.qtd[1].value = group3.PaidMediaSpendActual;
            newState[i].details.qtdw.qtd[2].value = group3.PaidMediaSpendTarget;
            newState[i].details.qtdw.qtd[3].value = group3.PaidMediaSpendActual;
            newState[i].details.qtdw.qtd[4].value = group3.PaidMediaSpendVsQrf;
            newState[i].details.qtdw.qtd[5].value = group3.PaidMediaSpendQQTY;
            newState[i].details.qtdw.qtd[6].value = group3.PaidMediaSpendYY;
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
            units: 0.0,
            marketArea: item.market_area_code,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficVsQrf,
            type: item.geo_code,
            units: 0.0,
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
            units: 0.0,
            marketArea: item.market_area_code,
            qq: item.MarketableQQTY,
            qrf: item.MarketableTarget,
            qrfDiff: item.MarketableVsQrf,
            type: item.geo_code,
            units: 0.0,
            vsQrf: item.MarketableVsQrf,
            yy: item.MarketableYY
        }
        let uqfm = {
            index: i,
            actuals: item.UQFMActual,
            units: 0.0,
            marketArea: item.market_area_code,
            qq: item.UQFMQQTY,
            qrf: item.UQFMTarget,
            qrfDiff: item.UQFMVsQrf,
            type: item.geo_code,
            units: 0.0,
            vsQrf: item.UQFMVsQrf,
            yy: item.UQFMYY
        }
        let paid = {
            index: i,
            actuals: item.PaidMediaSpendActual,
            units: 0.0,
            marketArea: item.market_area_code,
            qq: item.PaidMediaSpendVsQrf,
            qrf: item.PaidMediaSpendTarget,
            qrfDiff: item.PaidMediaSpendVsQrf,
            type: item.geo_code,
            units: 0.0,
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
            units: 0.0,
            marketArea: item.market_area_code,
            qq: item.TrafficQQTY,
            qrf: item.TrafficTarget,
            qrfDiff: item.TrafficVsQrf,
            type: item.geo_code,
            units: 0.0,
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
            units: 0.0,
            marketArea: item.market_area_code,
            qq: item.MarketableQQTY,
            qrf: item.MarketableTarget,
            qrfDiff: item.MarketableVsQrf,
            type: item.geo_code,
            units: 0.0,
            vsQrf: item.MarketableVsQrf,
            yy: item.MarketableYY
        }
        let uqfm = {
            index: i,
            actuals: item.UQFMActual,
            units: 0.0,
            marketArea: item.market_area_code,
            qq: item.UQFMQQTY,
            qrf: item.UQFMTarget,
            qrfDiff: item.UQFMVsQrf,
            type: item.geo_code,
            units: 0.0,
            vsQrf: item.UQFMVsQrf,
            yy: item.UQFMYY
        }
        let paid = {
            index: i,
            actuals: item.PaidMediaSpendActual,
            units: 0.0,
            marketArea: item.market_area_code,
            qq: item.PaidMediaSpendVsQrf,
            qrf: item.PaidMediaSpendTarget,
            qrfDiff: item.PaidMediaSpendVsQrf,
            type: item.geo_code,
            units: 0.0,
            vsQrf: item.PaidMediaSpendVsQrf,
            yy: item.PaidMediaSpendYY
        }

        newState[5].details.market.qtd.push(marketable);
        newState[6].details.market.qtd.push(uqfm);
        newState[7].details.market.qtd.push(paid);



    }
}