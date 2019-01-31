import {
    SET_APP_SETTINGS,
    SET_VIEW_APP_SETTINGS
} from 'actions/types';

import {
    PRIMARY,
    SECONDARY,
    MOBILE_FILTER_PAGE
} from '../Constants/consts';
import * as utils from '../utilities';

const firstState = {

    window: {
        height: null,
        width: null
    },
    deviceType: null,
    views: {
        primaryIsVisible: true,
        secondaryIsVisible: false,
        navigationIsVisible: false,
        filterBoxIsVisible: false,
        commentBoxIsVisible: false,
    }
}

export default function (state = firstState, action) {
    switch (action.type) {
        case SET_APP_SETTINGS:
            let newState1 = Object.assign({}, state);
            console.log({
                deviceType: action.payload.deviceType,
                window: action.payload.settings.window,
                views: {
                    primaryIsVisible: true,
                    secondaryIsVisible: false,
                    navigationIsVisible: false,
                    filterBoxIsVisible: false,
                    commentBoxIsVisible: false,
                }
            });
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
        case SET_VIEW_APP_SETTINGS:
            let newState = Object.assign({}, state);
            switch (action.payload.component) {
                case PRIMARY:
                    newState.views.primaryIsVisible = action.payload.isShowing;
                    break;
                case SECONDARY:
                    newState.views.secondaryIsVisible = action.payload.isShowing
                    break;
                case 'navigation':
                    break;
                case 'filter':
                    break;
                case MOBILE_FILTER_PAGE:
                    newState.views.mobileFilterPageIsVisible = action.payload.isShowing;
                default:
                    break;

            }



            // newState.views = action.payload

            return newState;
        default:
            return state;
    }
}