import {TOGGLE_COMMENT_CARD_VISIBILITY} from 'actions/types'
export default function(state = true,action) {
    switch(action.type) {
        case TOGGLE_COMMENT_CARD_VISIBILITY:
            return action.payload;
        default: 
            return state;
    }
}
