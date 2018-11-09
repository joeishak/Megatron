import {SET_APP_SETTINGS, GET_APP_SETTINGS} from 'actions/types';

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
            return action.payload;
        default: 
            return state;
    }
}