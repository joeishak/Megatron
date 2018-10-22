import {
    UPDATE_FINANCIAL_SUMMARY_ACTIVE_CARD,
    UPDATE_JOURNEY_SUMMARY_ACTIVE_CARD
} from 'actions/types'
export default function(state = [],action) {
    switch(action.type) {
        case UPDATE_FINANCIAL_SUMMARY_ACTIVE_CARD:
            return action.payload;
        case UPDATE_JOURNEY_SUMMARY_ACTIVE_CARD:
            return action.payload;
        default: 
            return state;
    }
}