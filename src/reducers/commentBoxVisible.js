import {UPDATE_COMMENT_BOX_VISIBILITY} from 'actions/types'
export default function(state = false,action) {
    switch(action.type) {
        case UPDATE_COMMENT_BOX_VISIBILITY:
            return action.payload;
        default: 
            return state;
    }
}