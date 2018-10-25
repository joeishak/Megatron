import {UPDATE_OKTA_USER,GET_DB_USER} from 'actions/types'
export default   function(state = {},action) {
    switch(action.type) {
        case UPDATE_OKTA_USER:

            return action.payload;
        case GET_DB_USER:
        console.log(action.payload);
        if(state !== action.payload.data[0]){
            return {...action.payload.data[0], name: action.payload.data[0].fName + ' ' + action.payload.data[0].lName};
        } 

        return state;
        default: 
            return state;
    }
}
