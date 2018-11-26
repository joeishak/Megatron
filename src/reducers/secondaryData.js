import {
    GET_SECONDARY_DATA,
    GET_SECONDARY_DETAIL_DATA,
    ADD_NEW_SECONDARY_COMMENT,
    ADD_NEW_SECONDARY_REPLY

    } from 'actions/types';
    import { SecondaryData } from '../variables.js';
    let copyOfSquare,
        newState,
        index = 0,
        currentMulti,
        newMulti;
    export default function(state = SecondaryData, action) {
        switch(action.type) {
            case  GET_SECONDARY_DATA:
            //Make a copy of state
            newState = Object.assign([], state);
            // //Finance
            newState[0].value = action.payload[0].data[0].NewARRActual;
            newState[0].target = action.payload[0].data[0].NewARRTarget;
            // //Gross New Arr
            newState[1].value = action.payload[0].data[0].GrossARRActual;
            newState[1].target = action.payload[0].data[0].GrossARRTarget;
            //  //Cacncellations
             newState[2].value = action.payload[0].data[0].CancelARRActual;
             newState[2].target = action.payload[0].data[0].CancelARRTarget;
            //   //Renewal
            newState[3].value = action.payload[0].data[0].RenewARRActual;
            newState[3].target = action.payload[0].data[0].RenewARRTarget;
            //  //Target
             newState[5].value = action.payload[1].data[0].TrafficActual;
             newState[5].target = action.payload[1].data[0].TrafficTarget;
            //  //Marketable universe
             newState[5].value = action.payload[2].data[0].MarketableActual;
             newState[5].target = action.payload[2].data[0].MarketableTarget;
            //   //UQFM Conversions
            newState[6].value = action.payload[2].data[0].UQFMActual;
            newState[6].target = action.payload[2].data[0].UQFMTarget;
            // Paid Media Spend
            newState[7].value = action.payload[2].data[0].PaidMediaSpendActual;
            newState[7].target = action.payload[2].data[0].PaidMediaSpendTarget;
            return newState;
            case GET_SECONDARY_DETAIL_DATA:


            newState = Object.assign([], state);
            console.log('Action Payload for Detail Data',action.payload);

            processFinancialMultichart(newState, action.payload[0].data);
            processFinancialUnitsMultichart(newState  ,action.payload[1].data);
            processFinancialQTD(newState, action.payload[3].data);
            processFinancialGeoQTD(newState, action.payload[2].data);
            return newState;

            case ADD_NEW_SECONDARY_COMMENT:
                index = action.payload.square;
                copyOfSquare = Object.assign({},state[index]);
                copyOfSquare.comments.push(action.payload.comment);
                state[index] = copyOfSquare;
            return [...state];
            // CAse for adding a reply to a previous comment
            case ADD_NEW_SECONDARY_REPLY:
                index = action.payload.square;

                copyOfSquare = Object.assign({},state[index]);
                let commentIndex = Number(action.payload.comment)
                copyOfSquare.comments[commentIndex].replies.push(action.payload.reply);
                state[index] = copyOfSquare;
            return [...state]
              default:
                return state;
        }
    }


export function processFinancialMultichart(newState, data){
  let netArr ={ actual: [], target:[], lq: [], ly: []},
      netCancellations = { actual: [], target:[], lq: [], ly: []},
      grossArr = { actual: [], target:[], lq: [], ly: []},
      termRenewal = { actual: [], target:[], lq: [], ly: []};
  //Get Financial Multichart values
  for(let i = 0; i< data.length; i++) {
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
        switch(i){
            case 0:
            currentMulti  = [netArr.actual,netArr.target,netArr.ly,netArr.lq];
            break;
            case 1:
            currentMulti  = [grossArr.actual,grossArr.target,grossArr.ly,grossArr.lq];
            break;
            case 2:
            currentMulti  =  [netCancellations.actual,netCancellations.target,netCancellations.ly,netCancellations.lq];
            break;
            case 3:
            currentMulti  = [termRenewal.actual,termRenewal.target,termRenewal.ly,termRenewal.lq];
            break;
            default:
            break;
        }
        newState[i]['details'].multichart = currentMulti;
    }
}

export function processFinancialUnitsMultichart(newState,data){
  let netUnits= { actual: [], target:[], lq: [], ly: []},
      netCancUnits={ actual: [], target:[], lq: [], ly: []},
      grossUnits ={ actual: [], target:[], lq: [], ly: []},
      termUnits ={ actual: [], target:[], lq: [], ly: []};


    // Units Multi multiChart
    // Get Units
   for(let i = 0; i< data.length; i++) {
       let item = data[i];
       netUnits.actual.push(item.NewUnitsActual);
       netUnits.target.push(item.NewUnitsTarget);
       netUnits.ly.push(item.NewUnitsLY);
       netUnits.lq.push(item.NewUnitsLQ);
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
         switch(i) {
             case 0:
             newMulti  = [netUnits.actual,netUnits.target,netUnits.ly,netUnits.lq];
             break;
             case 1:
             newMulti  = [grossUnits.actual,grossUnits.target,grossUnits.ly,grossUnits.lq];
             break;
             case 2:
             newMulti  =  [netCancUnits.actual,netCancUnits.target,netCancUnits.ly,netCancUnits.lq];
             break;
             case 3:
             newMulti  = [termUnits.actual,termUnits.target,termUnits.ly,termUnits.lq];
             break;
             default:
             break;
         }
         newState[i]['details'].unitMultichart = newMulti;
         newState[i]['valueType'] = 'currency';
       }
}

export function processFinancialQTD(newState,data){
  // State Order: Actual, Units, QRF, QRFDiff, VSQrf, QQ, YY
  for ( let i = 0; i< newState.length; i++){
    let findata = data[0];

    switch(i){
      // New New Arr
      case 0:
      newState[i].details.qtdw.qtd[0].value = findata.NewActuals;
      newState[i].details.qtdw.qtd[1].value = findata.NewActuals;
      newState[i].details.qtdw.qtd[2].value = findata.NewTarget;
      newState[i].details.qtdw.qtd[3].value = findata.NewVsQrfDiff;
      newState[i].details.qtdw.qtd[4].value = findata.NewVSQRF;
      newState[i].details.qtdw.qtd[5].value = findata.NewARRQQTY;
      newState[i].details.qtdw.qtd[6].value = findata.NewYY;
      break;
      // Gross New Arr
      case 1:
      newState[i].details.qtdw.qtd[0].value = findata.GrossARRActual;
      newState[i].details.qtdw.qtd[1].value = findata.GrossARRActual;
      newState[i].details.qtdw.qtd[2].value = findata.GrossARRTarget;
      newState[i].details.qtdw.qtd[3].value = findata.GrossVsQrfDiff;
      newState[i].details.qtdw.qtd[4].value = findata.GrossVsQrf;
      newState[i].details.qtdw.qtd[5].value = findata.GrossARRQQTY;
      newState[i].details.qtdw.qtd[6].value = findata.GrossARRYY;
      break;
      // Cancellations Arr
      case 2:
      newState[i].details.qtdw.qtd[0].value = findata.CancelARRActual;
      newState[i].details.qtdw.qtd[1].value = findata.CancelARRActual;
      newState[i].details.qtdw.qtd[2].value = findata.CancelARRTarget;
      newState[i].details.qtdw.qtd[3].value = findata.CancelArrVsQrfDiff;
      newState[i].details.qtdw.qtd[4].value = findata.CancelVsQrf;
      newState[i].details.qtdw.qtd[5].value = findata.CancelARRQQTY;
      newState[i].details.qtdw.qtd[6].value = findata.CancelARRYY;
      break;
      // Renewals Arr
      case 3:
      newState[i].details.qtdw.qtd[0].value = findata.RenewActuals;
      newState[i].details.qtdw.qtd[1].value = findata.RenewActuals;
      newState[i].details.qtdw.qtd[2].value = findata.RenewARRTarget;
      newState[i].details.qtdw.qtd[3].value = findata.RenewVsQrfDiff;
      newState[i].details.qtdw.qtd[4].value = findata.RenewVSQRF;
      newState[i].details.qtdw.qtd[5].value = findata.RenewARRQQTY;
      newState[i].details.qtdw.qtd[6].value = findata.RenewARRYY;
      break;
  }
}
}
export function processFinancialGeoQTD(newState,data){

      //Clear old Values
      newState[0].details.geo.qtd = [];
      newState[1].details.geo.qtd = [];
      newState[2].details.geo.qtd = [];
      newState[3].details.geo.qtd = [];
        for(let i = 0; i <data.length; i ++){
            let item = data[i];
            let net = {
                index: i,
                actuals: item.NewActuals,
                units: 0.0,
                marketArea: item.market_area_code,
                qq: item.NewARRQQTY,
                qrf: item.NewTarget,
                qrfDiff: item.NewVsQrfDiff,
                type: item.geo_code,
                units: 0.0,
                vsQrf:item.NewVSQRF,
                yy: item.NewYY
            }
            let gross = {
               index: i,
               actuals: item.GrossARRActual,
               units: 0.0,
               marketArea: item.market_area_code,
               qq: item.GrossARRQQTY,
               qrf: item.GrossTarget,
               qrfDiff: 0.0,
               type: item.geo_code,
               units: 0.0,
               vsQrf:item.NewQfmVSQrf,
               yy: item.NewQfmYY
           }
           let canc = {
               index: i,
               actuals: item.ConversionActual,
               units: 0.0,
               marketArea: item.market_area_code,
               qq: item.ConversionQQ,
               qrf: item.ConversionTarget,
               qrfDiff: 0.0,
               type: item.geo_code,
               units: 0.0,
               vsQrf:item.ConversionQfmVSQrf,
               yy: item.ConversionYY
           }
           let ren = {
               index: i,
               actuals: item.RepeatUserMauActual,
               units: 0.0,
               marketArea: item.market_area_code,
               qq: item.RepeatUserMauQfmQQ,
               qrf: item.RepeatUserMauTarget,
               qrfDiff: 0.0,
               type: item.geo_code,
               units: 0.0,
               vsQrf:item.RepeatUserMautQfmVSQrf,
               yy: item.RepeatUserMauQfmYY
           }

            newState[0].details.geo.qtd.push(net);
            newState[1].details.geo.qtd.push(gross);
            newState[2].details.geo.qtd.push(canc);
            newState[3].details.geo.qtd.push(ren);



        }


}
