import {GET_USER_SETTINGS,UPDATE_USER_SETTINGS} from 'actions/types'


export default   function(state = {},action) {
    switch(action.type) {
        case GET_USER_SETTINGS:
            console.log(action.payload);
            return action.payload.data[0];
        case UPDATE_USER_SETTINGS:

            return action.payload.data[0];
        default: 
            return state;
    }
}
