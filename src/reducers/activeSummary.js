import {
    UPDATE_FINANCIAL_SUMMARY_ACTIVE_CARD,
    UPDATE_JOURNEY_SUMMARY_ACTIVE_CARD
} from 'actions/types'


export default function(state = [],action) {
    switch(action.type) {
        case UPDATE_FINANCIAL_SUMMARY_ACTIVE_CARD:
            let sumObj = {
                type: 'financial',
                index: action.payload
            }
            return sumObj;
        case UPDATE_JOURNEY_SUMMARY_ACTIVE_CARD:
            let jourObj = {
                type: 'journey',
                index: action.payload
            }
            return jourObj;
        default: 
            return state;
    }
}