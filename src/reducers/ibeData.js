import {
    GET_IBE_DATA
} from 'actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case  GET_IBE_DATA:
            return action.payload;
        default: 
            return state;
    }
}