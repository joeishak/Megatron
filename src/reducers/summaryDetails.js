import {
    SHOW_SUMMARY_VIEW_DETAILS,
    HIDE_SUMMARY_VIEW_DETAILS,

} from 'actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case  SHOW_SUMMARY_VIEW_DETAILS:
            return action.payload;
        case  HIDE_SUMMARY_VIEW_DETAILS:
            return action.payload;
          default: 
            return state;
    }
}