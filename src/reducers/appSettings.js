// Import Types
import {
    SET_APP_SETTINGS,
    SET_VIEW_APP_SETTINGS
} from 'actions/types';
// Import Constants to use
import {
    PRIMARY,
    SECONDARY,
    MOBILE_FILTER_PAGE
} from '../Constants/consts';


// Default State
const firstState = {

    window: {
        height: null,
        width: null
    },
    deviceType: null,
    views: {
        // First screen to show in Mobile is Primary
        primaryIsVisible: true,
        secondaryIsVisible: false,
        navigationIsVisible: false,
        filterBoxIsVisible: false,
        commentBoxIsVisible: false,
    }
}
// Instantiate Reducer Function with default state
export default function (state = firstState, action) {
    switch (action.type) {
        // Sets the window and device type being used to view the dashboard
        case SET_APP_SETTINGS:
            // Make a complete copy of state
            let newState1 = Object.assign({}, state);
            return {
                deviceType: action.payload.deviceType,
                window: action.payload.settings.window,
                views: {
                    primaryIsVisible: true,
                    secondaryIsVisible: false,
                    navigationIsVisible: false,
                    filterBoxIsVisible: false,
                    commentBoxIsVisible: false,
                }
            };
        // Sets which components are to be shown/hidden in mobile views
        case SET_VIEW_APP_SETTINGS:
            let newState = Object.assign({}, state);
            switch (action.payload.component) {
                case PRIMARY:
                    newState.views.primaryIsVisible = action.payload.isShowing;
                    break;
                case SECONDARY:
                    newState.views.secondaryIsVisible = action.payload.isShowing
                    break;
                case MOBILE_FILTER_PAGE:
                    newState.views.mobileFilterPageIsVisible = action.payload.isShowing;
                default:
                    break;

            }
            return newState;
        default:
            return state;
    }
}