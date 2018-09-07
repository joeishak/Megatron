import {
    GET_IBE_DATA,
    GET_FILTERED_IBE_DATA
} from 'actions/types';
import { from } from 'rxjs';
import { FinancialData } from '../variables.js';

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
             actuals = action.payload[0].data;
             targets = action.payload[1].data;
             squares = FinancialData.squares;
            
            if (actuals[0] !== undefined && targets[0] !== undefined) {
                for (let i = 0; i < squares.length; i++) {
                    squares[i]['value'] = Object.values(actuals[0])[i];
                    squares[i]['target'] = Object.values(targets[0])[i] ;  
                }
            }
            console.log('Squares form IBE: ', squares);
            return [...squares];
        default: 
            return state;
    }
}

