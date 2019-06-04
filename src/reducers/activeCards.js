// Import Types
import {
    UPDATE_ACTIVE_PRIMARY_CARD,
    UPDATE_ACTIVE_SECONDARY_CARD

} from 'actions/types';

// Instantiate Reducer Function with default state set to 
// 0, 0 
// Primary = 0 = Finance
// Secondary = 0 = Net New ARR
export default function (state = {
    primary: 0,
    secondary: 0
}, action) {
    switch (action.type) {
        // Switching Primary Cards
        case UPDATE_ACTIVE_PRIMARY_CARD:
            return { primary: action.payload, secondary: state.secondary };
        // Switching Secondary Cards
        case UPDATE_ACTIVE_SECONDARY_CARD:
            return { primary: state.primary, secondary: action.payload }
        default:
            return state;
    }
}