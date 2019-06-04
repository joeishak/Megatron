//Import Types
import {
    SHOW_SUMMARY_VIEW_DETAILS,
    HIDE_SUMMARY_VIEW_DETAILS,

} from 'actions/types';

// Reducer with default state of empty array
export default function(state = [], action) {
    switch(action.type) {
        // Show the Summary View Details in Mobile
        case  SHOW_SUMMARY_VIEW_DETAILS:
            return action.payload;
        // Hide the summary view details in mobile
        case  HIDE_SUMMARY_VIEW_DETAILS:
            return action.payload;
          default: 
            return state;
    }
}