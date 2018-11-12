import {
    SET_APP_SETTINGS,
    GET_APP_SETTINGS
} from 'actions/types';

const firstState = {

        window: {
          height: null,
          width: null
        },
        deviceType:null
}

export default function(state = firstState,action) {
    switch(action.type) {
        case SET_APP_SETTINGS:
            let newState1 = Object.assign({},state);
            return {...newState1,deviceType: action.payload.deviceType, window: action.payload.settings.window};
        case GET_APP_SETTINGS:
            return state;
       
        default: 
            return state;
    }
}