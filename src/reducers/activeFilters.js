import {
    ADD_MULTI_FILTER
} from 'actions/types';
import _ from 'lodash';
export default function(state = {}, action) {
    switch(action.type) {
        case  ADD_MULTI_FILTER:

        
           return [...state, action.payload]
        default: 
            return state;
    }
}