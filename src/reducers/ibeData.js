import {
    GET_QUERY_FILTERED_IBE_DATA,
    ADD_NEW_COMMENT,
    ADD_NEW_REPLY
    
} from 'actions/types';
import { FinancialData } from '../variables.js';
import * as _ from 'lodash';

export default function(state = FinancialData.squares, action) {
 
    let squares = FinancialData.squares;
    let totalNetNewARRActual     = 0;
    let totalNetNewARRTarget     = 0;
    let totalCancellationsActual = 0;
    let totalCancellationsTarget = 0;
    let totalGrossActual         = 0;
    let totalGrossTarget         = 0;
    let totalRenewalActual       = 0;
    let totalRenewalTarget       = 0;
    let copyOfSquare;
    let index = 0;
    let currentActual;
    let currentTarget;
    let currentMulti;
    switch(action.type) {
        
        case GET_QUERY_FILTERED_IBE_DATA:
            let item = action.payload[0].data[0];
            // console.log(action.payload);
            totalNetNewARRActual +=  item.NetNewARRActual;
            totalNetNewARRTarget += item.NetNewARRTarget
            totalCancellationsActual +=  item.NetCancellationARRActual;
            totalCancellationsTarget +=  item.NetCancellationARRTarget;
            totalGrossActual +=          item.GrossNewARRActual;
            totalGrossTarget +=          item.GrossNewARRTarget;
            totalRenewalActual +=        item.RenewalAtFPActual;
            totalRenewalTarget+=        item.RenewalAtFPTarget;
            let netArr = {
                actual: [],
                target: [],
                ly: [],
                lq: []
            }
            let netCancellations = {
                actual: [],
                target: [],
                ly: [],
                lq: []
            };
            let grossArr = {
                actual: [],
                target: [],
                ly: [],
                lq: []
            };
            let termRenewal = {
                actual: [],
                target: [],
                ly: [],
                lq: []
            };
            
             for(let i = 0; i< action.payload[1].data.length; i++) {
                 let item = action.payload[1].data[i];
 
                 netArr.actual.push(item.NetNewARRActual);
                 netArr.target.push(item.NetNewARRTarget);
                 netArr.ly.push(item.NetNewARRLY);
                 netArr.lq.push(item.NetNewARRLQ);
                 
                 netCancellations.actual.push(item.NetCancellationARRActual);
                 netCancellations.target.push(item.NetCancellationARRTarget);
                 netCancellations.ly.push(item.NetCancellationsARRLY);
                 netCancellations.lq.push(item.NetCancellationsARRLQ);
 
                 grossArr.actual.push(item.GrossNewARRActual);
                 grossArr.target.push(item.GrossNewARRTarget);
                 grossArr.ly.push(item.GrossNewARRLY);
                 grossArr.lq.push(item.GrossNewARRLQ);
                 
                 termRenewal.actual.push(item.RenewalAtFPActual);
                 termRenewal.target.push(item.RenewalAtFPTarget);
                 termRenewal.ly.push(item.TermEndRenewalLY);
                 termRenewal.lq.push(item.TermEndRenewalLQ);
             
             };
       
               for (let i = 0; i < squares.length; i++) {
                   switch(i){
                       case 0:
                       currentActual = totalNetNewARRActual;
                       currentTarget = totalNetNewARRTarget;
                       currentMulti  = [netArr.actual,netArr.target,netArr.ly,netArr.lq];
                       break;
                       case 1:
                       currentActual = totalGrossActual;
                       currentTarget = totalGrossTarget;
                       currentMulti  = [grossArr.actual,grossArr.target,grossArr.ly,grossArr.lq];
                       break;
                       case 2: 
                       currentActual = totalCancellationsActual;
                       currentTarget = totalCancellationsTarget;
                       currentMulti  =  [netCancellations.actual,netCancellations.target,netCancellations.ly,netCancellations.lq];
                       break;
                       case 3: 
                       currentActual = totalRenewalActual;
                       currentTarget =  totalRenewalTarget;
                       currentMulti  = [termRenewal.actual,termRenewal.target,termRenewal.ly,termRenewal.lq];
                       break;
                       default:
                       break;
                   }
                   squares[i]['value'] = currentActual;
                   squares[i]['target'] = currentTarget ;  
                   squares[i]['details'].multichart = currentMulti;
                
               }

               ///Units Multichart

            let netUnits = {
                actual: [],
                target: [],
                ly: [],
                lq:[]
            }
            let netCancUnits = {
                actual: [],
                target: [],
                ly: [],
                lq:[]
            };
            let grossUnits = {
                actual: [],
                target: [],
                ly: [],
                lq:[]
            };
            let termUnits = {
                actual: [],
                target: [],
                ly: [],
                lq:[]
            };
            
            for(let i = 0; i< action.payload[2].data.length; i++) {
                let item = action.payload[2].data[i];
                netUnits.actual.push(item.NetNewUnitsActual);
                netUnits.target.push(item.NetNewUnitsTarget);
                netUnits.ly.push(item.NetNewUnitsLY);
                netUnits.lq.push(item.NetNewUnitsLQ);

                
                netCancUnits.actual.push(item.CancellationUnitsActual);
                netCancUnits.target.push(item.CancellationUnitsTarget);
                netCancUnits.ly.push(item.CancellationsUnitsLY);
                netCancUnits.lq.push(item.CancellationsUnitsLQ);

                grossUnits.actual.push(item.GrossNewUnitsActual);
                grossUnits.target.push(item.GrossNewUnitsTarget);
                grossUnits.ly.push(item.GrossNewUnitsLY);
                grossUnits.lq.push(item.GrossNewUnitsLQ);

                
                termUnits.actual.push(item.TermEndUnitsActual);
                termUnits.target.push(item.TermEndUnitsTarget);
                termUnits.ly.push(item.TermEndRenewalUnitsLY);
                termUnits.lq.push(item.TermEndRenewalUnitsLQ);

            };
      
            let newMulti;
          // if (actuals[0] !== undefined && targets[0] !== undefined) {
              for (let i = 0; i < squares.length; i++) {
                  switch(i){
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
                  squares[i]['details'].unitMultichart = newMulti;
                  squares[i]['valueType'] = 'currency';
              }
               
            return [...squares];
        //Case for adding a new comment
        case ADD_NEW_COMMENT: 
                index = action.payload.square-1;
                copyOfSquare = Object.assign({},state[index]);
                copyOfSquare.comments.push(action.payload.comment);
                state[index] = copyOfSquare;
            return [...state];
        // CAse for adding a reply to a previous comment
        case ADD_NEW_REPLY:
            index = action.payload.square-1;
            copyOfSquare = Object.assign({},state[index]);
            let commentIndex = Number(action.payload.comment)
            copyOfSquare.comments[commentIndex].replies.push(action.payload.reply);
            state[index] = copyOfSquare;
        return [...state]
        default: 
            return state;
    }
}

function processMultiChartData(action,state){
    let netArr = {
        actual: [],
        target: [],
        ly: []
     }
     let netCancellations = {
         actual: [],
         target: [],
         ly: []
     };
     let grossArr = {
         actual: [],
         target: [],
         ly: []
     };
     let termRenewal = {
         actual: [],
         target: [],
         ly: []
     };
    
     for(let i = 0; i< action.payload[0].data.length; i++) {
         let item = action.payload[0].data[i];
         

         netArr.actual.push(item.NetNewARRActual);
         netArr.target.push(item.NetNewARRTarget);
         netArr.ly.push(item.NetNewARRLY);
         
         netCancellations.actual.push(item.NetCancellationARRActual);
         netCancellations.target.push(item.NetCancellationARRTarget);
         netCancellations.ly.push(item.NetCancellationsARRLY);

         grossArr.actual.push(item.GrossNewARRActual);
         grossArr.target.push(item.GrossNewARRTarget);
         grossArr.ly.push(item.GrossNewARRLY);
         
         termRenewal.actual.push(item.RenewalAtFPActual);
         termRenewal.target.push(item.RenewalAtFPTarget);
         termRenewal.ly.push(item.TermEndRenewalLY);
     
     };

     for (let i = 0; i < 4; i++) {
         switch(i){
             case 0:
             state[i].details.multichart = [netArr.actual,netArr.target,netArr.ly]
             break;
             case 1:
             state[i].details.multichart = [grossArr.actual,grossArr.target,grossArr.ly]
             break;
             case 2: 
             state[i].details.multichart = [netCancellations.actual,netCancellations.target,netCancellations.ly]
             break;
             case 3: 
             state[i].details.multichart = [termRenewal.actual,termRenewal.target,termRenewal.ly]
             break;
             default:
                break;
         }
        
      
     };
     return [...state];
}