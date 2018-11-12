import {
    SET_APP_SETTINGS,
    GET_APP_SETTINGS,
    UPDATE_DEVICE_TYPE
} from 'actions/types';

const firstState = {

        window: {
          height: null,
          width: null
        }
      
}

export default function(state = firstState,action) {
    switch(action.type) {
        case SET_APP_SETTINGS:
            console.log('testing', action.payload);
            return action.payload;
        case GET_APP_SETTINGS:
            console.log('testing', action.payload);
            return state;
        case UPDATE_DEVICE_TYPE:
            return {...state, deviceType: action.payload}
        default: 
            return state;
    }
}