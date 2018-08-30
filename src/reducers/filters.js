import {
    UPDATE_MULTI_FILTER_VALUES
} from 'actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case  UPDATE_MULTI_FILTER_VALUES:
            return {
                updated: true,
                values: action.payload
            };
        default: 
            return state;
    }
}