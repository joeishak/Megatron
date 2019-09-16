// Import Types
import {SET_BANNER_MESSAGE} from 'actions/types'

// Instantiate and ExportReducer Function with default state
export default function(state = "",action) {
    switch(action.type) {
        // Change authentication to true or false
        case SET_BANNER_MESSAGE:
            console.log('Banner Message ',action.payload, action.payload[0].data[0].isEnabled===true, action.payload[0].data[0].message)

            if (action.payload[0].data[0].isEnabled){
                return action.payload[0].data[0].message
            }
            return "";
        default: 
            return state;
    }
}