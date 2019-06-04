// Import Types
import {
    UPDATE_DIALOG_VISIBILITY
} from 'actions/types';

// Reducer Function with a default state as an array
export default function(state = [], action) {
    switch(action.type) {
        // Case to update whether the Preferenes Dialog is showing
        case  UPDATE_DIALOG_VISIBILITY:
            return action.payload;
        default: 
            return state;
    }
}