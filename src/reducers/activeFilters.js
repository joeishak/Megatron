import {
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER
} from 'actions/types';
import _ from 'lodash';
export default function(state = [], action) {
    switch(action.type) {
        case  ADD_MULTI_FILTER:

        
           return [...state, action.payload];
        case REMOVE_MULTI_FILTER:
            let filters = state.map(filter=>{
                if(filter!==action.payload){
                    return filter;
                }
            })

            return filters;
        default: 
            return state;
    }
}