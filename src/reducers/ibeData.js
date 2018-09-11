import {
    GET_IBE_DATA,
    GET_FILTERED_IBE_DATA
} from 'actions/types';
import { from } from 'rxjs';
import { FinancialData } from '../variables.js';
import _ from 'lodash';

export default function(state = [], action) {
    let actuals;
    let targets;
    let squares;
    switch(action.type) {
        case  GET_IBE_DATA:

            actuals = action.payload[0].data;
            targets = action.payload[1].data;
            squares = FinancialData.squares;
            
        
            for (let i = 0; i < squares.length; i++) {
                squares[i]['value'] = Object.values(actuals[0])[i];
                squares[i]['target'] = Object.values(targets[0])[i] ;  
            }

            return [...squares];
        case GET_FILTERED_IBE_DATA:
            //  actuals = action.payload[0].data;
            //  targets = action.payload[1].data;
             squares = FinancialData.squares;
            //  console.log(action.payload);
            
             let filteredData = action.payload[0].data[0];

             let arrData = [];
             let sums  = {

             };

             for(let i =  0 ; i<action.payload.length;i++){
                 let currentQuarter = action.payload[i].data[0];
                //  console.log(currentQuarter);
                arrData.push(currentQuarter);

                }   

            let Values = [
                'NetNewARRActual', 'NetNewARRTarget', 'NetCancellationARRActual', 'NetCancellationARRTarget', 'GrossNewARRActual', 'GrossNewARRTarget',
                'RenewalAtFPActual',
                'RenewalAtFPTarget'
            ]
             var totalNetNewARRActual = _.sumBy(arrData,(item)=>{ return item.NetNewARRTarget});
             var totalNetNewARRTarget= _.sumBy(arrData,(item)=>{ return item.NetNewARRTarget});
             var totalCancellationsActual= _.sumBy(arrData,(item)=>{ return item.NetCancellationARRActual});
             var totalCancellationsTarget= _.sumBy(arrData,(item)=>{ return item.NetCancellationARRTarget});
             var totalGrossActual= _.sumBy(arrData,(item)=>{ return item.GrossNewARRActual});
             var totalGrossTarget= _.sumBy(arrData,(item)=>{ return item.GrossNewARRTarget});
             var totalRenewalActual= _.sumBy(arrData,(item)=>{ return item.RenewalAtFPActual});
             var totalRenewalTarget=_.sumBy(arrData,(item)=>{ return item.RenewalAtFPTarget});



            // console.log('Total Net New Arr:',totalNetNewARRActual,'\nTotal Net NEW Arr Target: ',totalNetNewARRTarget);
            // console.log('Total Gross New Arr:',totalRenewalActual,'\nTotal Gross new Arr Target: ',totalRenewalTarget);
            // console.log('Total Net New Arr:',totalGrossActual,'\nTotal Net NEW Arr Target: ',totalGrossTarget);
            // console.log('Total Net New Arr:',totalCancellationsTarget,'\nTotal Net NEW Arr Target: ',totalCancellationsTarget);

           

                    // sums.netNewArrActual= sums.netNewArrActual + parseFloat(currentQuarter.NetNewARRActual);
                    // sums.netNewArrTarget= sums.netNewArrTarget + currentQuarter.NetNewARRTarget;
                    // sums.netCancellationActual+=parseFloat(currentQuarter.NetCancellationARRActual);
                    // sums.netCancellationTarget+=parseFloat(currentQuarter.NetCancellationARRTarget);
                    // sums.grossNewArrActual+=parseFloat(currentQuarter.GrossNewARRActual);
                    // sums.grossNewArrTarget+=parseFloat(currentQuarter.GrossNewARRTarget);
                    // sums.renewalAtFPActual+=parseFloat(currentQuarter.RenewalAtFPActual);
                    // sums.renewalAtFPTarget+=parseFloat(currentQuarter.RenewalAtFPTarget);
   
            //  console.log('Sums: ',sums);
             let currentActual;
             let currentTarget;
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
                // console.log(squares);
            // }
            // console.log('Squares form IBE: ', squares);
            return [...squares];
        default: 
            return state;
    }
}

