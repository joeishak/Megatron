import {

    ADD_NEW_JOURNEY_COMMENT,
    ADD_NEW_JOURNEY_REPLY,
    GET_FILTERED_JOURNEY_IBE_DATA
    
} from 'actions/types';
import { JourneyData } from '../variables.js';

export default function(state = JourneyData.squares, action) {
 
    let squares = JourneyData.squares;
    let copyOfSquare;
    let index = 0;
    let totalConversionActual    = 0;
    let totalConversionTarget     = 0;
    let totalNewQfmActual           = 0;
    let totalNewQfmTarget           = 0;
    let totalPaymentFailureActual         = 0;
    let totalPaymentFailureTarget         = 0;
    let totalTrafficActual          = 0;
    let totalTrafficTarget          = 0;
    let totalUiCancelActual       = 0;
    let totalUiCancelTarget       = 0;
    let totalRepeatUserActual       = 0;
    let totalRepeatUserTarget       = 0;
    let currentActual;
    let currentTarget;
    let currentMulti;
    switch(action.type) {
        case GET_FILTERED_JOURNEY_IBE_DATA:
        //Journey Actual Targets / Multichart

        let journeyActualTarget = action.payload[0].data[0];
        let journeyMultichart = action.payload[1].data;
        let journeyQtdTotal = action.payload[2].data[0];
        let journeyGeoQtd = action.payload[3].data;
        let journeyBuyUseActual = action.payload[5].data[0];
        let journeyBuyUseGeoQtd = action.payload[6].data[0];
        let journeyBuyUseMultichart = action.payload[7].data[0];
        let journeyBuyUseQtdTotal = action.payload[8].data[0];
        let item = action.payload[0].data[0];

        console.log(action.payload,{
            "journeyActualTarget":journeyActualTarget,
            "journeyMultichart": journeyMultichart,
            "journeyQTDTotal": journeyQtdTotal,
            "journeyGeoQtd": journeyGeoQtd,
            "journeyBuyUseActual": journeyBuyUseActual,
            "journeyBuyUseGeo": journeyBuyUseGeoQtd,
            "journeyBuyUseMultichart": journeyBuyUseMultichart,
            "journeyBuyUseQtdTotal": journeyBuyUseQtdTotal
        });
        totalConversionActual    += item.ConversionActual;
        totalConversionTarget    += item.ConversionTarget;
        totalNewQfmActual        += journeyBuyUseActual.NewQfmActual;
        totalNewQfmTarget        += journeyBuyUseActual.NewQfmTarget;
        totalPaymentFailureActual += item.PaymentFailureRateActual;
        totalPaymentFailureTarget += item.PaymentFailureRateTarget;
        totalTrafficActual       += item.TrafficActual;
        totalTrafficTarget       += item.TrafficTarget;
        totalUiCancelActual      += item.UiCancelRateActual;
        totalUiCancelTarget      += item.UiCancelRateTarget;
        totalRepeatUserActual    += journeyBuyUseActual.RepeatUserMauActual;
        totalRepeatUserTarget    += journeyBuyUseActual.RepeatUserMauTarget;

        let conversion = {
          actual: [],
          target: [],
          ly: []
        }
        let newQfm = {
            actual: [],
            target: [],
            ly: []
        };
        let paymentFailures = {
            actual: [],
            target: [],
            ly: []
        };
        let repeatUserMau = {
            actual: [],
            target: [],
            ly: []
        };
        let uiCancel = {
            actual: [],
            target: [],
            ly: []
            };
            let traffic = {
                actual: [],
                target: [],
                ly: []
            };
      
       for(let i = 0; i< action.payload[1].data.length; i++) {
           let item = action.payload[1].data[i];

           conversion.actual.push(item.ConversionActual);
           conversion.target.push(item.ConversionTarget);
           conversion.ly.push(item.ConversionLy);
           
         

           paymentFailures.actual.push(item.PaymentFailureRateActual);
           paymentFailures.target.push(item.PaymentFailureRateTarget);
           paymentFailures.ly.push(item.PaymentFailureRateLy);
           
     

           uiCancel.actual.push(item.UiCancelRateActual);
           uiCancel.target.push(item.UiCancelRateTarget);
           uiCancel.ly.push(item.UiCancelRateLy);

           traffic.actual.push(item.TrafficActual);
           traffic.target.push(item.TrafficTarget);
           traffic.ly.push(item.TrafficLy);
       
        };

        for (let i = 0; i< action.payload[7].data.length; i++){
            let buyUseItem = action.payload[7].data[i]
            newQfm.actual.push(buyUseItem.NewQfmActual);
            newQfm.target.push(buyUseItem.NewQfmTarget);
            newQfm.ly.push(buyUseItem.NewQfmLy);
            repeatUserMau.actual.push(buyUseItem.RepeatUserMauActual);
            repeatUserMau.target.push(buyUseItem.RepeatUserMauTarget);
            repeatUserMau.ly.push(buyUseItem.RepeatUserMauLy);
        }
 
         for (let i = 0; i < squares.length; i++) {
             switch(i){
                 case 0:
                 currentActual = totalTrafficActual;
                 currentTarget = totalTrafficTarget;
                 currentMulti  = [traffic.actual,traffic.target,traffic.ly];
                 break;
                 case 1:
                 currentActual = totalNewQfmActual;
                 currentTarget = totalNewQfmTarget;
                 currentMulti  = [newQfm.actual,newQfm.target,newQfm.ly];
                 break;
                 case 2: 
                 currentActual = totalConversionActual;
                 currentTarget = totalConversionTarget;
                 currentMulti  =  [conversion.actual,conversion.target,conversion.ly];

                 break;
                 case 3: 
                 currentActual = totalRepeatUserActual;
                 currentTarget =  totalRepeatUserTarget;
                 currentMulti  = [repeatUserMau.actual,repeatUserMau.target,repeatUserMau.ly];
                 break;
                 case 4:
                 currentActual = totalUiCancelActual;
                 currentTarget =  totalUiCancelTarget;
                 currentMulti  = [uiCancel.actual,uiCancel.target,uiCancel.ly];
                 break;
                 case 5:
                 currentActual = totalPaymentFailureActual;
                 currentTarget =  totalPaymentFailureTarget;
                 currentMulti  = [paymentFailures.actual,paymentFailures.target,paymentFailures.ly];
                 break;
                 break;
                 default:
                 break;
             }
             squares[i]['value'] = currentActual;
             squares[i]['target'] = currentTarget ;  
             squares[i]['details'].multichart = currentMulti;
         }
         //Journeys QTD Total
            let data = action.payload[2].data[0];
            let buyUseQtd = journeyBuyUseQtdTotal;
            let trafficSquare       = JSON.parse(JSON.stringify(squares[0].details.qtdw.qtd));
            let newQfmSquare        = JSON.parse(JSON.stringify(squares[1].details.qtdw.qtd));
            let conversionSquare    = JSON.parse(JSON.stringify(squares[2].details.qtdw.qtd));
            let repeatSquare        = JSON.parse(JSON.stringify(squares[3].details.qtdw.qtd));
            let qtrUiSquare         = JSON.parse(JSON.stringify(squares[4].details.qtdw.qtd));
            let qtrFailureSquare    = JSON.parse(JSON.stringify(squares[5].details.qtdw.qtd));
        
        trafficSquare[0].value = data.TrafficActual;
        trafficSquare[5].value = data.TrafficQQ;
        trafficSquare[2].value = data.TrafficTarget;
        trafficSquare[6].value = data.TraficYY;
        trafficSquare[4].value = data.TrafficVSQrf;

        newQfmSquare[0].value = buyUseQtd.NewQfmActual;
        newQfmSquare[5].value = buyUseQtd.NewQfmQQ;
        newQfmSquare[2].value = buyUseQtd.NewQfmTarget;
        newQfmSquare[6].value = buyUseQtd.NewQfmYY;
        newQfmSquare[4].value = buyUseQtd.NewQfmVSQrf;


        conversionSquare[0].value = data.ConversionActual
        conversionSquare[5].value = data.ConversionQQ
        conversionSquare[2].value = data.ConversionTarget
        conversionSquare[6].value = data.ConversionYY
        conversionSquare[4].value = data.ConversionQfmVSQrf


        repeatSquare[0].value = buyUseQtd.RepeatUserMauActual
        repeatSquare[5].value = buyUseQtd.RepeatUserMauQfmQQ
        repeatSquare[2].value = buyUseQtd.RepeatUserMauTarget
        repeatSquare[6].value = buyUseQtd.RepeatUserMauQfmYY
        repeatSquare[4].value = buyUseQtd.RepeatUserMautQfmVSQrf

        qtrUiSquare[0].value = data.UiCancelRateActual
        qtrUiSquare[5].value = data.UiCancelRateQQ
        qtrUiSquare[2].value = data.UiCancelRateTarget
        qtrUiSquare[6].value = data.UiCancelRateYY
        qtrUiSquare[4].value = data.UiCancelRateVSQrf

        qtrFailureSquare[0].value = data.PaymentFailureRateActual
        qtrFailureSquare[5].value = data.PaymentFailureRateQQ
        qtrFailureSquare[2].value = data.PaymentFailureRateTarget
        qtrFailureSquare[6].value = data.PaymentFailureRateYY
        qtrFailureSquare[4].value = data.PaymentFailureRateVSQrf

        
         data = action.payload[3].data;
         let buyUseGeo = action.payload[6].data;

         let trafficSquareGeo       =  JSON.parse(JSON.stringify(squares[0].details.geo.qtd));
         let newQfmSquareGeo        =  JSON.parse(JSON.stringify(squares[1].details.geo.qtd));
         let conversionSquareGeo    =  JSON.parse(JSON.stringify(squares[2].details.geo.qtd));
         let repeatSquareGeo        =  JSON.parse(JSON.stringify(squares[3].details.geo.qtd));
         let qtrUiSquareGeo         =  JSON.parse(JSON.stringify(squares[4].details.geo.qtd));
         let qtrFailureSquareGeo    =  JSON.parse(JSON.stringify(squares[5].details.geo.qtd));

         let traffArr=[];
         let qfmArr = [];
         let convArr = [];
         let repArr=[];
         let qtrUiArr=[];
         let qtrFailArr=[];
         for(let i = 0; i <data.length; i ++){
             let item = data[i];
             let item2= buyUseGeo[i];
             let traffic = {
                 index: i,
                 actuals: item.TrafficActual,
                 units: 0.0,
                 marketArea: item.market_area_code, 
                 qq: item.TrafficQQ,
                 qrf: item.TrafficTarget,
                 qrfDiff: 0.0,
                 type: item.geo_code,
                 units: 0.0,
                 vsQrf:item.TrafficVSQrf,
                 yy: item.TraficYY
             }
             let qfm = {
                index: i,
                actuals: item2.NewQfmActual,
                units: 0.0,
                marketArea: item2.market_area_code, 
                qq: item2.NewQfmQQ,
                qrf: item2.NewQfmTarget,
                qrfDiff: 0.0,
                type: item2.geo_code,
                units: 0.0,
                vsQrf:item2.NewQfmVSQrf,
                yy: item2.NewQfmYY
            }
            let conv = {
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
            let rep = {
                index: i,
                actuals: item2.RepeatUserMauActual,
                units: 0.0,
                marketArea: item2.market_area_code, 
                qq: item2.RepeatUserMauQfmQQ,
                qrf: item2.RepeatUserMauTarget,
                qrfDiff: 0.0,
                type: item.geo_code,
                units: 0.0,
                vsQrf:item2.RepeatUserMautQfmVSQrf,
                yy: item2.RepeatUserMauQfmYY
            }
            let qtru = {
                index: i,
                actuals: item.UiCancelRateActual,
                units: 0.0,
                marketArea: item.market_area_code, 
                qq: item.UiCancelRateQQ,
                qrf: item.UiCancelRateTarget,
                qrfDiff: 0.0,
                type: item.geo_code,
                units: 0.0,
                vsQrf:item.UiCancelRateVSQrf,
                yy: item.UiCancelRateYY
            }
            let qtrf = {
                index: i,
                actuals: item.PaymentFailureRateActual,
                units: 0.0,
                marketArea: item.market_area_code, 
                qq: item.PaymentFailureRateQQ,
                qrf: item.PaymentFailureRateTarget,
                qrfDiff: 0.0,
                type: item.geo_code,
                units: 0.0,
                vsQrf:item.PaymentFailureRateVSQrf,
                yy: item.PaymentFailureRateYY
            }
             traffArr.push(traffic);
             qfmArr.push(qfm);
             convArr.push(conv);
             repArr.push(rep);
             qtrUiArr.push(qtru);
             qtrFailArr.push(qtrf);
            
         }
            squares[0]['details'].qtdw.qtd = trafficSquare;
            squares[1]['details'].qtdw.qtd = newQfmSquare;
            squares[2]['details'].qtdw.qtd = conversionSquare;
            squares[3]['details'].qtdw.qtd = repeatSquare;
            squares[4]['details'].qtdw.qtd = qtrUiSquare;
            squares[5]['details'].qtdw.qtd = qtrFailureSquare;


            squares[0]['details'].geo.qtd = traffArr;
            squares[1]['details'].geo.qtd = qfmArr;
            squares[2]['details'].geo.qtd = convArr;
            squares[3]['details'].geo.qtd = repArr;
            squares[4]['details'].geo.qtd = qtrUiArr;
            squares[5]['details'].geo.qtd = qtrFailArr;
            
            squares[0]['valueType'] = 'units';
            squares[1]['valueType'] = 'units';
            squares[2]['valueType'] = 'percent';
            squares[3]['valueType'] = 'percent';
            squares[4]['valueType'] = 'percent';
            squares[5]['valueType'] = 'percent';
            return [...squares];
        //Case for adding a new comment
        case ADD_NEW_JOURNEY_COMMENT: 
            index = action.payload.square-1;
            copyOfSquare = Object.assign({},state[index]);
            copyOfSquare.comments.push(action.payload.comment);
            state[index] = copyOfSquare;
        return [...state];
        // CAse for adding a reply to a previous comment
        case ADD_NEW_JOURNEY_REPLY:
            index = action.payload.square-1;
            copyOfSquare = Object.assign({},state[index]);
            let commentIndex = Number(action.payload.comment);
            copyOfSquare.comments[commentIndex].replies.push(action.payload.reply);
            state[index] = copyOfSquare;
        return [...state]
        default: 
            return state;
    }
}

