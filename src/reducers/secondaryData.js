import {
    GET_SECONDARY_DATA
    
    } from 'actions/types';
    import { SecondaryData } from '../variables.js';
    
    export default function(state = SecondaryData, action) {
        switch(action.type) {
            case  GET_SECONDARY_DATA:
                return state;
              default: 
                return state;
        }
    }