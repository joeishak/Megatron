import {
    GET_IBE_DATA
} from 'actions/types';
import { from } from 'rxjs';
import { FinancialData } from '../variables.js';

export default function(state = [], action) {
    switch(action.type) {
        case  GET_IBE_DATA:

            let actuals = action.payload[0].data;
            let targets = action.payload[1].data;

            let squares = FinancialData.squares;

            for (let i = 0; i < squares.length; i++) {
                squares[i]['value'] = (Object.values(actuals[0])[i] / 1000000).toFixed(1);
                squares[i]['target'] = Object.values(targets[0])[i] ;  
            }
            console.log(squares);

            return squares;
        default: 
            return state;
    }
}

