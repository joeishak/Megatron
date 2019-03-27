import {
    UPDATE_FEEDBACKFORM_DIALOG_VISIBILITY
} from 'actions/types';
export default function(state = false, action) {
    switch(action.type) {
        case  UPDATE_FEEDBACKFORM_DIALOG_VISIBILITY:
        // console.log(action.payload);
            return action.payload;
        default: 
            return state;
    }
}