import {
    UPDATE_ACTIVE_PRIMARY_CARD
    
    } from 'actions/types';
    import { PrimaryData } from '../variables.js';
    
    export default function(state = {
        primary:0,
        secondary: 0
    }, action) {
        switch(action.type) {
            case  UPDATE_ACTIVE_PRIMARY_CARD:
                return {primary:action.payload, secondary: state.secondary};
              default: 
                return state;
        }
    }