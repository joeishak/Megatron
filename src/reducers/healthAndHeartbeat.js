// Import Types
import { GET_IBHEARTBEAT } from 'actions/types';
// Reducer function with a default empty array state
export default function(state = [],action) {
    switch(action.type) {
        // Retrieves the InfoBurst System Details to confirm IBE is live
        case GET_IBHEARTBEAT:
            return action.payload;
        default: 
            return state;
    }
}