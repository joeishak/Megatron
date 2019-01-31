import {
    GET_EXCEL_MULTICHART
} from 'actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case  GET_EXCEL_MULTICHART:
        
            return [];
        default: 
            return state;
    }
}