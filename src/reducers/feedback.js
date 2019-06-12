/** TODO: Remove feedback Reducer, this is being handled in the Summary.js now */
import {
    UPDATE_FEEDBACKFORM_DIALOG_VISIBILITY
} from 'actions/types';
export default function(state = false, action) {
    switch(action.type) {
        case  UPDATE_FEEDBACKFORM_DIALOG_VISIBILITY:
            return action.payload;
        default: 
            return state;
    }
}