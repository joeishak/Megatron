/** TODO: REMOVE EXCEL DATA Reducer, we are no longer using this because the data is already in Summary Data Reducer */
// Import Types
import {
    GET_EXCEL_MULTICHART
} from 'actions/types';

// Reducer Function with a default state of empty array
export default function(state = [], action) {
    switch(action.type) {
        case  GET_EXCEL_MULTICHART:
        
            return [];
        default: 
            return state;
    }
}