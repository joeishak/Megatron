// Import Types
import {TOGGLE_COMMENT_CARD_VISIBILITY} from 'actions/types'

// Reducer with default state set to true
export default function(state = true,action) {
    switch(action.type) {
        // Update whether the comment icon on each KPI is showing
        case TOGGLE_COMMENT_CARD_VISIBILITY:
            return action.payload;
        default: 
            return state;
    }
}
