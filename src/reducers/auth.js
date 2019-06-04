// Import Types
import {CHANGE_AUTH} from 'actions/types'

// Instantiate and ExportReducer Function with default state
export default function(state = false,action) {
    switch(action.type) {
        // Change authentication to true or false
        case CHANGE_AUTH:
            return action.payload;
        default: 
            return state;
    }
}