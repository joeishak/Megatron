import {
    GET_IBE_DATA,
    GET_FILTERED_IBE_DATA,
    GET_QUERY_FILTERED_IBE_DATA,
    GET_QUERY_FILTERED_IBE_MULTICHART_DATA
    
} from 'actions/types';
import { from } from 'rxjs';
import { FinancialData } from '../variables.js';
import _ from 'lodash';
// import { GET_QUERY_FILTERED_IBE_MULTICHART_DATA } from '../actions/types.js';

export default function(state = [], action) {
    let actuals;
    let targets;
    let squares = FinancialData.squares;
    let totalNetNewARRActual     = 0;
    let totalNetNewARRTarget     = 0;
    let totalCancellationsActual = 0;
    let totalCancellationsTarget = 0;
    let totalGrossActual         = 0;
    let totalGrossTarget         = 0;
    let totalRenewalActual       = 0;
    let totalRenewalTarget       = 0;
    
    let currentActual;
    let currentTarget;
    let filteredData;
    switch(action.type) {
        
        case GET_QUERY_FILTERED_IBE_DATA:

            // console.log('GET QUERY IBE DATA',action.payload);

            for(let i = 0; i< action.payload.length; i++) {
                let item = action.payload[i].data[0];

              totalNetNewARRActual +=  item.NetNewARRActual;
              totalNetNewARRTarget += item.NetNewARRTarget
              totalCancellationsActual +=  item.NetCancellationARRActual;
              totalCancellationsTarget +=  item.NetCancellationARRTarget;
              totalGrossActual +=          item.GrossNewARRActual;
              totalGrossTarget +=          item.GrossNewARRTarget;
              totalRenewalActual +=        item.RenewalAtFPActual;
              totalRenewalTarget+=        item.RenewalAtFPTarget;
            }

           // if (actuals[0] !== undefined && targets[0] !== undefined) {
               for (let i = 0; i < squares.length; i++) {
                   switch(i){
                       case 0:
                       currentActual = totalNetNewARRActual;
                       currentTarget = totalNetNewARRTarget;
                       break;
                       case 1:
                       currentActual = totalGrossActual;
                       currentTarget = totalGrossTarget;
                       break;
                       case 2: 
                       currentActual = totalCancellationsActual;
                       currentTarget = totalCancellationsTarget;
                       break;
                       case 3: 
                       currentActual = totalRenewalActual;
                       currentTarget =  totalRenewalTarget;
                       break;
                   }
                   squares[i]['value'] = currentActual;
                   squares[i]['target'] = currentTarget ;  
                
               }
            //    console.log([...squares])
        return [...squares];
      
            case GET_QUERY_FILTERED_IBE_MULTICHART_DATA:

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


            let grouped = _.groupBy(action.payload[0].data,(item)=>{ return item.quarter});
           
            // console.log('Grouped: ', grouped);
            
            // console.log('Fetched MultiChart DAta: ',action.payload);
            for(let i = 0; i< action.payload[0].data.length; i++) {
                let item = action.payload[0].data[i];
                

                netArr.actual.push(item.NetNewARRActual);
                netArr.target.push(item.NetNewARRTarget);
                netArr.ly.push(item.NetNewARRLY);
                
                netCancellations.actual.push(item.NetCancellationARRActual);
                netCancellations.target.push(item.NetCancellationARRTarget);
                netCancellations.ly.push(item.NetCancellationARRLY);

                grossArr.actual.push(item.GrossNewARRActual);
                grossArr.target.push(item.GrossNewARRTarget);
                grossArr.ly.push(item.GrossNewARRLY);
                
                termRenewal.actual.push(item.RenewalAtFPActual);
                termRenewal.target.push(item.RenewalAtFPTarget);
                termRenewal.ly.push(item.RenewalAtFPLY);
            
            }


            for (let i = 0; i < squares.length; i++) {
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
                }
               
             
            }
            // console.log(netArr,netCancellations,grossArr,termRenewal);

            
            return [...state]
        default: 
            return state;
    }
}

