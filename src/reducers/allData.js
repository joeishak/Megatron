import {GET_ALL_DATA} from 'actions/types'
import data from '../data.json';

export default function(state = [],action) {
    switch(action.type) {
        case GET_ALL_DATA:
            return data;
        default: 
            return state;
    }
}