import {
    UPDATE_DIALOG_VISIBILITY
} from 'actions/types';
export default function(state = [], action) {
    switch(action.type) {
        case  UPDATE_DIALOG_VISIBILITY:
            return action.payload;
        default: 
            return state;
    }
}