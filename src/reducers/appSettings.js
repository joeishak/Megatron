import {
    SET_APP_SETTINGS,
    SET_VIEW_APP_SETTINGS
} from 'actions/types';

import {
    PRIMARY, SECONDARY 
} from '../Constants/consts';
const firstState = {

        window: {
          height: null,
          width: null
        },
        deviceType:null,
        views: {
            primaryIsVisible: true, 
            secondaryIsVisible: true,
            navigationIsVisible: false,
            filterBoxIsVisible: false, 
            commentBoxIsVisible: false,
        }
}

export default function(state = firstState,action) {
    switch(action.type) {
        case SET_APP_SETTINGS:
            let newState1 = Object.assign({},state);
            return {...newState1,deviceType: action.payload.deviceType, window: action.payload.settings.window};
        case SET_VIEW_APP_SETTINGS:
            let newState = Object.assign({},state);
        switch(action.payload.component){
            case PRIMARY:
            newState.views.primaryIsVisible = action.payload.isShowing;
            break;
            case  SECONDARY:
            newState.views.secondaryIsVisible = action.payload.isShowing
            break;
            case  'navigation':
            break;
            case  'filter':
            break;
            default:
            break;
        
        }
        
            
            
            // newState.views = action.payload

            return newState ;
        default: 
            return state;
    }
}