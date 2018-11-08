import {
GET_PRIMARY_DATA

} from 'actions/types';
import { PrimaryData } from '../variables.js';

export default function(state = PrimaryData, action) {
    switch(action.type) {
        case  GET_PRIMARY_DATA:
            return state;
          default: 
            return state;
    }
}