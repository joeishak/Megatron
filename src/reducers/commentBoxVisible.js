// Import Types
import {UPDATE_COMMENT_BOX_VISIBILITY} from 'actions/types'
// Instantiate Reducer Function with a default state of False
export default function(state = false,action) {
    switch(action.type) {
        // Update Comment Box Visibility to True or False
        case UPDATE_COMMENT_BOX_VISIBILITY:
            return action.payload;
        default: 
            return state;
    }
}
