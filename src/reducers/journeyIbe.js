import {

    ADD_NEW_JOURNEY_COMMENT,
    ADD_NEW_JOURNEY_REPLY,
    GET_FILTERED_JOURNEY_IBE_DATA,
    GET_FILTERED_JOURNEY_QTD_DATA
    
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
        console.log('GET QUERY IBE DATA',action.payload);
        let item = action.payload[0].data[0];

        // totalNetNewARRActual +=  item.NetNewARRActual;
        // totalNetNewARRTarget += item.NetNewARRTarget
        // totalCancellationsActual +=  item.NetCancellationARRActual;
        // totalCancellationsTarget +=  item.NetCancellationARRTarget;
        // totalGrossActual +=          item.GrossNewARRActual;
        // totalGrossTarget +=          item.GrossNewARRTarget;
        // totalRenewalActual +=        item.RenewalAtFPActual;
        // totalRenewalTarget+=        item.RenewalAtFPTarget;
        totalConversionActual    += item.ConversionActual;
        totalConversionTarget    += item.ConversionTarget;
        totalNewQfmActual        += item.NewQfmActual;
        totalNewQfmTarget        += item.NewQfmTarget;
        totalPaymentFailureActual += item.PaymentFailureRateActual;
        totalPaymentFailureTarget += item.PaymentFailureRateTarget;
        totalTrafficActual       += item.TrafficActual;
        totalTrafficTarget       += item.TrafficTarget;
        totalUiCancelActual      += item.UiCancelRateActual;
        totalUiCancelTarget      += item.UiCancelRateTarget;
        totalRepeatUserActual    += item.RepeatUserMauActual;
        totalRepeatUserTarget    += item.RepeatUserMauTarget;

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

           // console.log(item.NetNewARRActual);
           conversion.actual.push(item.ConversionActual);
           conversion.target.push(item.ConversionTarget);
           conversion.ly.push(item.ConversionLy);
           
           newQfm.actual.push(item.NewQfmActual);
           newQfm.target.push(item.NewQfmTarget);
           newQfm.ly.push(item.NewQfmLy);

           paymentFailures.actual.push(item.PaymentFailureRateActual);
           paymentFailures.target.push(item.PaymentFailureRateTarget);
           paymentFailures.ly.push(item.PaymentFailureRateLy);
           
           repeatUserMau.actual.push(item.RepeatUserMauActual);
           repeatUserMau.target.push(item.RepeatUserMauTarget);
           repeatUserMau.ly.push(item.RepeatUserMauLy);

           uiCancel.actual.push(item.UiCancelRateActual);
           uiCancel.target.push(item.UiCancelRateTarget);
           uiCancel.ly.push(item.UiCancelRateLy);

           traffic.actual.push(item.TrafficActual);
           traffic.target.push(item.TrafficTarget);
           traffic.ly.push(item.TrafficLy);
       
       };
 
     // if (actuals[0] !== undefined && targets[0] !== undefined) {
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
         
         console.log([...squares])
        return [...squares];
        case GET_FILTERED_JOURNEY_QTD_DATA:

        //Get QTD QTD Data
         let data = action.payload[0].data[0];
         console.log(data);

        let trafficSquare = state[0].details.qtdw.qtd;
        let newQfmSquare = state[1].details.qtdw.qtd;
        let conversionSquare = state[2].details.qtdw.qtd;
        let repeatSquare = state[3].details.qtdw.qtd;
        let qtrUiSquare = state[4].details.qtdw.qtd;
        let qtrFailureSquare = state[5].details.qtdw.qtd;
        
       trafficSquare[0].value = data.TrafficActual;
       trafficSquare[5].value = data.TrafficQQ;
       trafficSquare[2].value = data.TrafficTarget;
       trafficSquare[6].value = data.TraficYY;
       trafficSquare[4].value = data.TrafficVSQrf;

       newQfmSquare[0].value = data.NewQfmActual;
       newQfmSquare[5].value = data.NewQfmQQ;
       newQfmSquare[2].value = data.NewQfmTarget;
       newQfmSquare[6].value = data.NewQfmYY;
       newQfmSquare[4].value = data.NewQfmVSQrf;


       conversionSquare[0].value = data.ConversionActual
       conversionSquare[5].value = data.ConversionQQ
       conversionSquare[2].value = data.ConversionTarget
       conversionSquare[6].value = data.ConversionYY
       conversionSquare[4].value = data.ConversionVSQrf


       repeatSquare[0].value = data.RepeatUserMauActual
       repeatSquare[5].value = data.RepeatUserMauQfmQQ
       repeatSquare[2].value = data.RepeatUserMauTarget
       repeatSquare[6].value = data.RepeatUserMauQfmYY
       repeatSquare[4].value = data.RepeatUserMautQfmVSQrf

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

         console.log(state);
        



        return state;
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
