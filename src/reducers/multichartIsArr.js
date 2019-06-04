//Import Types
import {
   MULTICHART_IS_ARR
} from 'actions/types';

// Reducer function with default state set to true
// Finance KPIS all have units multichart data
export default function(state = true, action) {
    switch(action.type) {
        // Update the redux store to denote what view the multichart is showing (Anual Rate of Return or Units)
        case  MULTICHART_IS_ARR:
            return action.payload;
        default: 
            return state;
    }}