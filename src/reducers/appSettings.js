import {
    SET_APP_SETTINGS,
    SET_VIEW_APP_SETTINGS
} from 'actions/types';

const firstState = {

        window: {
          height: null,
          width: null
        },
        deviceType:null,
        views: {
            mobileViewIsprimary: true, 
            mobileViewIsSecondary: false,
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
        console.log(action.payload);
            let newState = Object.assign({},state);
            
            newState.views = action.payload

            return newState ;
        default: 
            return state;
    }
}