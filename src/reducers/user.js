import {UPDATE_OKTA_USER} from 'actions/types'
export default   function(state = {},action) {
    switch(action.type) {
        case UPDATE_OKTA_USER:
            return action.payload;
        default: 
            return state;
    }
}
