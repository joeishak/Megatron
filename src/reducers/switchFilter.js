import {
    UPDATE_SWITCH_FILTER_VALUE
} from 'actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case  UPDATE_SWITCH_FILTER_VALUE:
            return action.payload;
        default: 
            return state;
    }
}