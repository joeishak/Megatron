import {
   MULTICHART_IS_ARR
} from 'actions/types';
import _ from 'lodash';
export default function(state = true, action) {

    switch(action.type) {

        case  MULTICHART_IS_ARR:
        console.log(action.payload);
        if(action.payload !== undefined){
            return action.payload;
        }
            return !state
        default: 
            return state;
    }}