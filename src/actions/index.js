

import {
    CHANGE_AUTH,
    UPDATE_OKTA_USER,
    GET_USER_SETTINGS,
    UPDATE_USER_SETTINGS,
    SET_APP_SETTINGS,
    SET_VIEW_APP_SETTINGS,
    GET_SUMMARY_DATA,
    RESET_DATA,
    GET_PRIMARY_DATA,
    GET_FINANCE_SECONDARY_DATA,
    GET_FINANCE_XDC1_SECONDARY_DATA,
    GET_FINANCE_XDC2_SECONDARY_DATA,
    GET_DISCOVER_SECONDARY_DATA,
    GET_TRAFFIC_SECONDARY_DATA,
    GET_MKTG_SECONDARY_DATA,
    GET_TRY_SECONDARY_DATA,
    GET_BUY_SECONDARY_DATA,
    GET_BUY_MKTG_SECONDARY_DATA,
    GET_BUY_FINANCE_SECONDARY_DATA,
    UPDATE_USE_IS_LOADING,
    GET_BUY_TRAFFIC_SECONDARY_DATA,
    GET_USE_SECONDARY_DATA,
    UPDATE_RENEW_CANCEL_IS_LOADING,
    UPDATE_RENEW_IS_LOADING,
    UPDATE_RENEW_DETAILS_IS_LOADING,
    GET_RENEW_SECONDARY_DATA,
    GET_RENEW_DETAILS_DATA,
    GET_RENEW_CANCEL_DATA,
    UPDATE_PRIMARY_IS_LOADING,
    UPDATE_DISCOVER_SECONDARY_IS_LOADING,
    UPDATE_FINANCE_SECONDARY_IS_LOADING,
    UPDATE_TRY_IS_LOADING,
    UPDATE_TRAFFIC_IS_LOADING,
    UPDATE_MU_IS_LOADING,
    UPDATE_FINANCE_XDC_1_IS_LOADING,
    UPDATE_FINANCE_XDC_2_IS_LOADING,
    UPDATE_BUY_CONVERSION_IS_LOADING,
    UPDATE_BUY_MARKET_IS_LOADING,
    UPDATE_BUY_GROSS_IS_LOADING,
    UPDATE_DIALOG_VISIBILITY,
    UPDATE_FEEDBACKFORM_DIALOG_VISIBILITY,
    GENERATE_FILTER_DATA,
    ADD_PREFERENCES_TO_ACTIVE_FILTERS,
    ADD_MULTI_FILTER,
    RESET_FILTERS,
    SUBMIT_FILTERS,
    SUBMIT_SUB_FILTERS,
    REMOVE_MULTI_FILTER,
    SHOW_SUMMARY_VIEW_DETAILS,
    HIDE_SUMMARY_VIEW_DETAILS,
    UPDATE_ACTIVE_PRIMARY_CARD,
    UPDATE_ACTIVE_SECONDARY_CARD,
    GET_EXCEL_MULTICHART,
    UPDATE_COMMENT_BOX_VISIBILITY,
    TOGGLE_COMMENT_CARD_VISIBILITY,
    ADD_NEW_PRIMARY_COMMENT,
    ADD_NEW_PRIMARY_REPLY,
    ADD_NEW_SECONDARY_COMMENT,
    ADD_NEW_SECONDARY_REPLY,
    MULTICHART_IS_ARR,
    GET_IBHEARTBEAT,
    UPDATE_FILTER_VISIBILITITY,
    UPDATE_COMMENT_VISIBILITITY,
    UPDATE_PRIMARY_VISIBILITITY,
    UPDATE_SECONDARY_VISIBILITITY,
    UPDATE_MOBILE_FILTER_PAGE_VISIBILITY,
    FETCH_COMMENTS,
    FETCH_COMMENTS_COUNT,
    DELETE_COMMENT,
    ADD_FEEDBACK,
    GET_UPDATED_AS_OF_DATE_AND_QUARTER,

} from 'actions/types';
import * as utils from '../utilities';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { dispatch } from 'rxjs/internal/observable/pairs';

// HTTP Variables

let promiseArr = [];

let filterParams = [
    { prompt: 'quarterFilters', value: '' },
    { prompt: 'productFilters', value: '' },
    { prompt: 'geoFilters', value: '' },
    { prompt: 'subscriptionFilters', value: '' },
    { prompt: 'maFilters', value: '' },
    { prompt: 'routeFilters', value: '' },
    { prompt: 'segmentFilters', value: '' }
];
/**
 * Change the state of Authentication for the user.
 *
 * @param {boolean} isLoggedIn
 */
export function changeAuth(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}
export function resetData() {
    return {
        type: RESET_DATA,
        payload: null
    }
}
export function getUserSettings(sub) {
    let res = utils.requestUserSettings(sub);
    return {
        type: GET_USER_SETTINGS,
        payload: res
    }
}
/***
 * Update User In Database From Okta
 */
export function updateOKTAUser(user) {
    utils.addUserToDB(user);
    return {
        type: UPDATE_OKTA_USER,
        payload: user
    }
}

/**
 * Update the User Settings in the database.
 * @param {*} activeFilters
 * @param {*} user
 * @param {*} defaultSummary
 * @param {*} defaultFinKpi
 * @param {*} defaultJournKpi
 * @param {*} availableFilters
 * @param {*} settingId
 */
export function updateUserSettings(activeFilters, user) {
    console.log(activeFilters);
    let stringGeo = activeFilters.geo;
    let stringproduct = activeFilters.product
    let stringroute = activeFilters.route;
    let stringmarket = activeFilters.market;
    let stringSubscription = activeFilters.subscription;
    let params = {
        quarter: activeFilters.quarter[0].value,
        segment: activeFilters.segment[0].value,
        user: user.sub,
        geo: JSON.stringify(stringGeo),
        product: JSON.stringify(stringproduct),
        subscription: JSON.stringify(stringSubscription),
        route: JSON.stringify(stringroute),
        market: JSON.stringify(stringmarket)
    }
    let res = utils.postUserSettings(params);
    return {
        type: UPDATE_USER_SETTINGS,
        payload: res
    }
}

/**
 * Set the app settings  for window and device type
 * @param {object} settings
 *
 */
export function setAppSettings(settings) {
    let deviceType = utils.getDeviceType({ width: settings.window.width, height: settings.window.height });

    return {
        type: SET_APP_SETTINGS,
        payload: { settings, deviceType }
    }
}


export function setViewAppSettings({ component, isShowing }) {


    return {
        type: SET_VIEW_APP_SETTINGS,
        payload: { component, isShowing }
    }
}
export function getFilteredPrimaryData(filters) {
    console.log('Filters:', filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e]),
        //Traffic
        websegment: Object.keys(filters.websegment.availableFilters).map(e => filters.websegment.availableFilters[e]),
        visits: Object.keys(filters.visits.availableFilters).map(e => filters.visits.availableFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.availableFilters).map(e => filters.lastTouchChannel.availableFilters[e]),
        convType: Object.keys(filters.convType.availableFilters).map(e => filters.convType.availableFilters[e]),
        //Try
        signupcat: Object.keys(filters.signupCategory.availableFilters).map(e => filters.signupCategory.availableFilters[e]),
        //Buy
        channelMU: Object.keys(filters.channelMU.availableFilters).map(e => filters.channelMU.availableFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),
        // userenew
        nonDMSegment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),

    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        //Traffic
        websegment: Object.keys(filters.websegment.valueFilters).map(e => filters.websegment.valueFilters[e]),
        visits: Object.keys(filters.visits.valueFilters).map(e => filters.visits.valueFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.valueFilters).map(e => filters.lastTouchChannel.valueFilters[e]),
        convType: Object.keys(filters.convType.valueFilters).map(e => filters.convType.valueFilters[e]),
        //Try
        signupcat: Object.keys(filters.signupCategory.valueFilters).map(e => filters.signupCategory.valueFilters[e]),
        channelMU: Object.keys(filters.channelMU.valueFilters).map(e => filters.channelMU.valueFilters[e]),
        channelPM: Object.keys(filters.channelPM.valueFilters).map(e => filters.channelPM.valueFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),

    };

    promiseArr = utils.filterPrimaryData(allFilters, _parameters);
    return {
        type: GET_PRIMARY_DATA,
        payload: promiseArr
    }
}

//DISOCVER SECONDARY
export function getFilteredDiscoverSecondary(filters) {
    console.log('Filters:', filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e]),
        //Traffic
        websegment: Object.keys(filters.websegment.availableFilters).map(e => filters.websegment.availableFilters[e]),
        visits: Object.keys(filters.visits.availableFilters).map(e => filters.visits.availableFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.availableFilters).map(e => filters.lastTouchChannel.availableFilters[e]),
        convType: Object.keys(filters.convType.availableFilters).map(e => filters.convType.availableFilters[e]),
        //Try
        signupcat: Object.keys(filters.signupCategory.availableFilters).map(e => filters.signupCategory.availableFilters[e]),
        //Buy
        channelMU: Object.keys(filters.channelMU.availableFilters).map(e => filters.channelMU.availableFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),

    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        //Traffic
        websegment: Object.keys(filters.websegment.valueFilters).map(e => filters.websegment.valueFilters[e]),
        visits: Object.keys(filters.visits.valueFilters).map(e => filters.visits.valueFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.valueFilters).map(e => filters.lastTouchChannel.valueFilters[e]),
        convType: Object.keys(filters.convType.valueFilters).map(e => filters.convType.valueFilters[e]),
        //Try
        signupcat: Object.keys(filters.signupCategory.valueFilters).map(e => filters.signupCategory.valueFilters[e]),
        channelMU: Object.keys(filters.channelMU.valueFilters).map(e => filters.channelMU.valueFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),
    };

    promiseArr = utils.filterDiscoverSecondary(allFilters, _parameters);
    return {
        type: GET_DISCOVER_SECONDARY_DATA,
        payload: promiseArr
    }
}
/** Finance **/
export function getFilteredFinanceSecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e])
    };

    // console.log(filters);
    promiseArr = utils.filterFinanceSecondaryData(allFilters, _parameters);
    return {
        type: GET_FINANCE_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getFilteredFinanceXDC1SecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e])
    };

    // console.log(filters);
    promiseArr = utils.filterFinanceXdc1SecondaryData(allFilters, _parameters);
    return {
        type: GET_FINANCE_XDC1_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getFilteredFinanceXDC2SecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e])
    };

    // console.log(filters);
    promiseArr = utils.filterFinanceXdc2SecondaryData(allFilters, _parameters);
    return {
        type: GET_FINANCE_XDC2_SECONDARY_DATA,
        payload: promiseArr
    }
}
/** Traffic **/
export function getFilteredTrafficSecondaryData(filters) {
    console.log('Filters:', filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e]),
        //MArketing
        websegment: Object.keys(filters.websegment.availableFilters).map(e => filters.websegment.availableFilters[e]),
        visits: Object.keys(filters.visits.availableFilters).map(e => filters.visits.availableFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.availableFilters).map(e => filters.lastTouchChannel.availableFilters[e]),
        convType: Object.keys(filters.convType.availableFilters).map(e => filters.convType.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        //Traffic
        websegment: Object.keys(filters.websegment.valueFilters).map(e => filters.websegment.valueFilters[e]),
        visits: Object.keys(filters.visits.valueFilters).map(e => filters.visits.valueFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.valueFilters).map(e => filters.lastTouchChannel.valueFilters[e]),
        convType: Object.keys(filters.convType.valueFilters).map(e => filters.convType.valueFilters[e])
    };
    // console.log(filters);
    promiseArr = utils.filterTrafficSecondaryData(allFilters, _parameters);

    return {
        type: GET_TRAFFIC_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getFilteredMarketingSecondaryData(filters) {
    console.log('Filters:', filters);

    let allFilters = {
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        //Traffic
        channelMU: Object.keys(filters.channelMU.availableFilters).map(e => filters.channelMU.availableFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),

    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        //Traffic
        channelMU: Object.keys(filters.channelMU.valueFilters).map(e => filters.channelMU.valueFilters[e]),
        channelPM: Object.keys(filters.channelPM.valueFilters).map(e => filters.channelPM.valueFilters[e]),
    };



    // console.log(filters);
    promiseArr = utils.filterMKTGSecondaryData(allFilters, _parameters);

    return {
        type: GET_MKTG_SECONDARY_DATA,
        payload: promiseArr
    }
}
/** Try **/
export function getFilteredTrySecondaryData(filters) {
    console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        signupcat: Object.keys(filters.signupCategory.availableFilters).map(e => filters.signupCategory.availableFilters[e]),

    }
    let _parameters = {
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        signupcat: Object.keys(filters.signupCategory.valueFilters).map(e => filters.signupCategory.valueFilters[e]),
    };

    console.log(allFilters);
    console.log(_parameters);
    promiseArr = utils.filterTrySecondaryData(allFilters, _parameters);

    return {
        type: GET_TRY_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getFilteredBuySecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e]),
        channelMU: Object.keys(filters.channelMU.availableFilters).map(e => filters.channelMU.availableFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),
        websegment: Object.keys(filters.websegment.availableFilters).map(e => filters.websegment.availableFilters[e]),
        visits: Object.keys(filters.visits.availableFilters).map(e => filters.visits.availableFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.availableFilters).map(e => filters.lastTouchChannel.availableFilters[e]),
        convType: Object.keys(filters.convType.availableFilters).map(e => filters.convType.availableFilters[e]),
        pvw: Object.keys(filters.pvw.availableFilters).map(e => filters.pvw.availableFilters[e])


    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        channelMU: Object.keys(filters.channelMU.valueFilters).map(e => filters.channelMU.valueFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),
        websegment: Object.keys(filters.websegment.valueFilters).map(e => filters.websegment.valueFilters[e]),
        visits: Object.keys(filters.visits.valueFilters).map(e => filters.visits.valueFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.valueFilters).map(e => filters.lastTouchChannel.valueFilters[e]),
        convType: Object.keys(filters.convType.valueFilters).map(e => filters.convType.valueFilters[e]),
        pvw: Object.keys(filters.pvw.valueFilters).map(e => filters.pvw.valueFilters[e])

    };

    // console.log(filters);
    promiseArr = utils.filterBuySecondaryData(allFilters, _parameters);

    return {
        type: GET_BUY_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getFilteredBuyFinanceSecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        websegment: Object.keys(filters.websegment.availableFilters).map(e => filters.websegment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e]),
        pvw: Object.keys(filters.pvw.availableFilters).map(e => filters.pvw.availableFilters[e])

    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        websegment: Object.keys(filters.websegment.valueFilters).map(e => filters.websegment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        pvw: Object.keys(filters.pvw.valueFilters).map(e => filters.pvw.valueFilters[e])

    };
    // console.log(filters);
    promiseArr = utils.filterBuyFinanceSecondaryData(allFilters, _parameters);

    return {
        type: GET_BUY_FINANCE_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getFilteredBuyMarketSecondaryData(filters) {
    let allFilters = {
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        //Traffic
        channelMU: Object.keys(filters.channelMU.availableFilters).map(e => filters.channelMU.availableFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),

    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        //Traffic
        channelMU: Object.keys(filters.channelMU.valueFilters).map(e => filters.channelMU.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        channelPM: Object.keys(filters.channelPM.valueFilters).map(e => filters.channelPM.valueFilters[e]),
    };

    // console.log(filters);

    promiseArr = utils.filterBuyMarketSecondaryData(allFilters, _parameters);

    return {
        type: GET_BUY_MKTG_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getFilteredBuyTrafficSecondaryData(filters) {
    console.log('Filters:', filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e]),
        //MArketing
        websegment: Object.keys(filters.websegment.availableFilters).map(e => filters.websegment.availableFilters[e]),
        visits: Object.keys(filters.visits.availableFilters).map(e => filters.visits.availableFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.availableFilters).map(e => filters.lastTouchChannel.availableFilters[e]),
        convType: Object.keys(filters.convType.availableFilters).map(e => filters.convType.availableFilters[e])


    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        //Traffic
        websegment: Object.keys(filters.websegment.valueFilters).map(e => filters.websegment.valueFilters[e]),
        visits: Object.keys(filters.visits.valueFilters).map(e => filters.visits.valueFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.valueFilters).map(e => filters.lastTouchChannel.valueFilters[e]),
        convType: Object.keys(filters.convType.valueFilters).map(e => filters.convType.valueFilters[e])

    };
    // console.log(filters);
    promiseArr = utils.filterBuyTrafficSecondaryData(allFilters, _parameters);

    return {
        type: GET_BUY_TRAFFIC_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getFilteredUseSecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
    };

    // console.log(filters);
    promiseArr = utils.filterUseSecondaryData(allFilters, _parameters);

    return {
        type: GET_USE_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getFilteredRenewSecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        segment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
    };

    // console.log(filters);
    promiseArr = utils.filterRenewSecondaryData(allFilters, _parameters);

    return {
        type: GET_RENEW_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getFilteredRenewDetailsSecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),
        // segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        // segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
    };

    // console.log(filters);
    promiseArr = utils.filterRenewDetailsSecondaryData(allFilters, _parameters);

    return {
        type: GET_RENEW_DETAILS_DATA,
        payload: promiseArr
    }
}
export function getFilteredRenewCancelSecondaryData(filters) {

    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),
        segment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        segment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
    };

    // console.log(filters);
    promiseArr = utils.filterRenewCancelSecondaryData(allFilters, _parameters);

    return {
        type: GET_RENEW_CANCEL_DATA,
        payload: promiseArr
    }
}

export function getPrimaryData(filters) {
    console.log('Filters:', filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e]),
        //Traffic
        websegment: Object.keys(filters.websegment.availableFilters).map(e => filters.websegment.availableFilters[e]),
        visits: Object.keys(filters.visits.availableFilters).map(e => filters.visits.availableFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.availableFilters).map(e => filters.lastTouchChannel.availableFilters[e]),
        convType: Object.keys(filters.convType.availableFilters).map(e => filters.convType.availableFilters[e]),
        //Try
        signupcat: Object.keys(filters.signupCategory.availableFilters).map(e => filters.signupCategory.availableFilters[e]),
        //Buy
        channelMU: Object.keys(filters.channelMU.availableFilters).map(e => filters.channelMU.availableFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),
        // userenew
        nonDMSegment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),

    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        //Traffic
        websegment: Object.keys(filters.websegment.valueFilters).map(e => filters.websegment.valueFilters[e]),
        visits: Object.keys(filters.visits.valueFilters).map(e => filters.visits.valueFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.valueFilters).map(e => filters.lastTouchChannel.valueFilters[e]),
        convType: Object.keys(filters.convType.valueFilters).map(e => filters.convType.valueFilters[e]),
        //Try
        signupcat: Object.keys(filters.signupCategory.valueFilters).map(e => filters.signupCategory.valueFilters[e]),
        channelMU: Object.keys(filters.channelMU.valueFilters).map(e => filters.channelMU.valueFilters[e]),
        channelPM: Object.keys(filters.channelPM.valueFilters).map(e => filters.channelPM.valueFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),

    };

    promiseArr = utils.requestPrimaryData(allFilters, _parameters);
    return {
        type: GET_PRIMARY_DATA,
        payload: promiseArr
    }
}

//DISOCVER SECONDARY
export function getDiscoverSecondary(filters) {
    console.log('Filters:', filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e]),
        //Traffic
        websegment: Object.keys(filters.websegment.availableFilters).map(e => filters.websegment.availableFilters[e]),
        visits: Object.keys(filters.visits.availableFilters).map(e => filters.visits.availableFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.availableFilters).map(e => filters.lastTouchChannel.availableFilters[e]),
        convType: Object.keys(filters.convType.availableFilters).map(e => filters.convType.availableFilters[e]),
        //Try
        signupcat: Object.keys(filters.signupCategory.availableFilters).map(e => filters.signupCategory.availableFilters[e]),
        //Buy
        channelMU: Object.keys(filters.channelMU.availableFilters).map(e => filters.channelMU.availableFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),

    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        //Traffic
        websegment: Object.keys(filters.websegment.valueFilters).map(e => filters.websegment.valueFilters[e]),
        visits: Object.keys(filters.visits.valueFilters).map(e => filters.visits.valueFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.valueFilters).map(e => filters.lastTouchChannel.valueFilters[e]),
        convType: Object.keys(filters.convType.valueFilters).map(e => filters.convType.valueFilters[e]),
        //Try
        signupcat: Object.keys(filters.signupCategory.valueFilters).map(e => filters.signupCategory.valueFilters[e]),
        channelMU: Object.keys(filters.channelMU.valueFilters).map(e => filters.channelMU.valueFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),
    };

    promiseArr = utils.requestDiscoverSecondary(allFilters, _parameters);
    return {
        type: GET_DISCOVER_SECONDARY_DATA,
        payload: promiseArr
    }
}
/** Finance **/
export function getFinanceSecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e])
    };

    // console.log(filters);
    promiseArr = utils.requestFinanceSecondaryData(allFilters, _parameters);
    return {
        type: GET_FINANCE_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getFinanceXDC1SecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e])
    };

    // console.log(filters);
    promiseArr = utils.requestFinanceXdc1SecondaryData(allFilters, _parameters);
    return {
        type: GET_FINANCE_XDC1_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getFinanceXDC2SecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e])
    };

    // console.log(filters);
    promiseArr = utils.requestFinanceXdc2SecondaryData(allFilters, _parameters);
    return {
        type: GET_FINANCE_XDC2_SECONDARY_DATA,
        payload: promiseArr
    }
}
/** Traffic **/
export function getTrafficSecondaryData(filters) {
    console.log('Filters:', filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e]),
        //MArketing
        websegment: Object.keys(filters.websegment.availableFilters).map(e => filters.websegment.availableFilters[e]),
        visits: Object.keys(filters.visits.availableFilters).map(e => filters.visits.availableFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.availableFilters).map(e => filters.lastTouchChannel.availableFilters[e]),
        convType: Object.keys(filters.convType.availableFilters).map(e => filters.convType.availableFilters[e])


    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        //Traffic
        websegment: Object.keys(filters.websegment.valueFilters).map(e => filters.websegment.valueFilters[e]),
        visits: Object.keys(filters.visits.valueFilters).map(e => filters.visits.valueFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.valueFilters).map(e => filters.lastTouchChannel.valueFilters[e]),
        convType: Object.keys(filters.convType.valueFilters).map(e => filters.convType.valueFilters[e])

    };
    // console.log(filters);
    promiseArr = utils.requestTrafficSecondaryData(allFilters, _parameters);

    return {
        type: GET_TRAFFIC_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getMarketingSecondaryData(filters) {
    console.log('Filters:', filters);

    let allFilters = {
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        //Traffic
        channelMU: Object.keys(filters.channelMU.availableFilters).map(e => filters.channelMU.availableFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),

    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        //Traffic
        channelMU: Object.keys(filters.channelMU.valueFilters).map(e => filters.channelMU.valueFilters[e]),
        channelPM: Object.keys(filters.channelPM.valueFilters).map(e => filters.channelPM.valueFilters[e]),
    };



    // console.log(filters);
    promiseArr = utils.requestMKTGSecondaryData(allFilters, _parameters);

    return {
        type: GET_MKTG_SECONDARY_DATA,
        payload: promiseArr
    }
}
/** Try **/
export function getTrySecondaryData(filters) {
    console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        signupcat: Object.keys(filters.signupCategory.availableFilters).map(e => filters.signupCategory.availableFilters[e]),

    }
    let _parameters = {
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        signupcat: Object.keys(filters.signupCategory.valueFilters).map(e => filters.signupCategory.valueFilters[e]),
    };

    console.log(allFilters);
    console.log(_parameters);
    promiseArr = utils.requestTrySecondaryData(allFilters, _parameters);

    return {
        type: GET_TRY_SECONDARY_DATA,
        payload: promiseArr
    }
}
/**Buy */
export function getBuySecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e]),
        websegment: Object.keys(filters.websegment.availableFilters).map(e => filters.websegment.availableFilters[e]),
        visits: Object.keys(filters.visits.availableFilters).map(e => filters.visits.availableFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.availableFilters).map(e => filters.lastTouchChannel.availableFilters[e]),
        convType: Object.keys(filters.convType.availableFilters).map(e => filters.convType.availableFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),
        pvw: Object.keys(filters.pvw.availableFilters).map(e => filters.pvw.availableFilters[e])

    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        websegment: Object.keys(filters.websegment.valueFilters).map(e => filters.websegment.valueFilters[e]),
        visits: Object.keys(filters.visits.valueFilters).map(e => filters.visits.valueFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.valueFilters).map(e => filters.lastTouchChannel.valueFilters[e]),
        convType: Object.keys(filters.convType.valueFilters).map(e => filters.convType.valueFilters[e]),
        channelPM: Object.keys(filters.channelPM.valueFilters).map(e => filters.channelPM.valueFilters[e]),
        pvw: Object.keys(filters.pvw.valueFilters).map(e => filters.pvw.valueFilters[e])

    };

    // console.log(filters);
    promiseArr = utils.requestBuySecondaryData(allFilters, _parameters);

    return {
        type: GET_BUY_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getBuyFinanceSecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e]),
        pvw: Object.keys(filters.pvw.availableFilters).map(e => filters.pvw.availableFilters[e])

    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        pvw: Object.keys(filters.pvw.valueFilters).map(e => filters.pvw.valueFilters[e])

    };

    // console.log(filters);
    promiseArr = utils.requestBuyFinanceSecondaryData(allFilters, _parameters);

    return {
        type: GET_BUY_FINANCE_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getBuyMarketSecondaryData(filters) {
    let allFilters = {
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        //Traffic
        channelMU: Object.keys(filters.channelMU.availableFilters).map(e => filters.channelMU.availableFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),

    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        //Traffic
        channelMU: Object.keys(filters.channelMU.valueFilters).map(e => filters.channelMU.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        channelPM: Object.keys(filters.channelPM.availableFilters).map(e => filters.channelPM.availableFilters[e]),
    };

    // console.log(filters);
    promiseArr = utils.requestBuyMarketSecondaryData(allFilters, _parameters);

    return {
        type: GET_BUY_MKTG_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getBuyTrafficSecondaryData(filters) {
    console.log('Filters:', filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e]),
        //MArketing
        websegment: Object.keys(filters.websegment.availableFilters).map(e => filters.websegment.availableFilters[e]),
        visits: Object.keys(filters.visits.availableFilters).map(e => filters.visits.availableFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.availableFilters).map(e => filters.lastTouchChannel.availableFilters[e]),
        convType: Object.keys(filters.convType.availableFilters).map(e => filters.convType.availableFilters[e])


    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        //Traffic
        websegment: Object.keys(filters.websegment.valueFilters).map(e => filters.websegment.valueFilters[e]),
        visits: Object.keys(filters.visits.valueFilters).map(e => filters.visits.valueFilters[e]),
        lastTouchChannel: Object.keys(filters.lastTouchChannel.valueFilters).map(e => filters.lastTouchChannel.valueFilters[e]),
        convType: Object.keys(filters.convType.valueFilters).map(e => filters.convType.valueFilters[e])

    };
    // console.log(filters);
    promiseArr = utils.requestBuyTrafficSecondaryData(allFilters, _parameters);

    return {
        type: GET_BUY_TRAFFIC_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getUseSecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
    };

    // console.log(filters);
    promiseArr = utils.requestUseSecondaryData(allFilters, _parameters);

    return {
        type: GET_USE_SECONDARY_DATA,
        payload: promiseArr
    }
}
export function getRenewDetailsSecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),
        // segment: Object.keys(filters.segment.availableFilters).map(e => filters.segment.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        // segment: Object.keys(filters.segment.valueFilters).map(e => filters.segment.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
    };

    // console.log(filters);
    promiseArr = utils.requestRenewDetailsSecondaryData(allFilters, _parameters);

    return {
        type: GET_RENEW_DETAILS_DATA,
        payload: promiseArr
    }
}
export function getRenewCancelSecondaryData(filters) {

    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),
        segment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        segment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
    };

    // console.log(filters);
    promiseArr = utils.requestRenewCancelSecondaryData(allFilters, _parameters);

    return {
        type: GET_RENEW_CANCEL_DATA,
        payload: promiseArr
    }
}

export function getRenewSecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarter: Object.keys(filters.quarter.availableFilters).map(e => filters.quarter.availableFilters[e]),
        geo: Object.keys(filters.geo.availableFilters).map(e => filters.geo.availableFilters[e]),
        market: Object.keys(filters.market.availableFilters).map(e => filters.market.availableFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),
        segment: Object.keys(filters.nonDMSegment.availableFilters).map(e => filters.nonDMSegment.availableFilters[e]),
        product: Object.keys(filters.product.availableFilters).map(e => filters.product.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscription.availableFilters).map(e => filters.subscription.availableFilters[e]),
        routeTomarket: Object.keys(filters.route.availableFilters).map(e => filters.route.availableFilters[e])
    }
    let _parameters = {
        geo: Object.keys(filters.geo.valueFilters).map(e => filters.geo.valueFilters[e]),
        quarter: Object.keys(filters.quarter.valueFilters).map(e => filters.quarter.valueFilters[e]),
        nonDMSegment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),
        subscription: Object.keys(filters.subscription.valueFilters).map(e => filters.subscription.valueFilters[e]),
        segment: Object.keys(filters.nonDMSegment.valueFilters).map(e => filters.nonDMSegment.valueFilters[e]),
        market: Object.keys(filters.market.valueFilters).map(e => filters.market.valueFilters[e]),
        product: Object.keys(filters.product.valueFilters).map(e => filters.product.valueFilters[e]),
        route: Object.keys(filters.route.valueFilters).map(e => filters.route.valueFilters[e]),
    };

    // console.log(filters);
    promiseArr = utils.requestRenewSecondaryData(allFilters, _parameters);

    return {
        type: GET_RENEW_SECONDARY_DATA,
        payload: promiseArr
    }
}
/**
 * Update the visibility of the Modal Dialog Box
 *
 * @param {boolean} isDialogVisible
 */
export function updateDialogVisibility(isDialogVisible) {
    return {
        type: UPDATE_DIALOG_VISIBILITY,
        payload: isDialogVisible
    }
}

export function updateFeedbackFormVisibility(isFeedbackFormVisible) {
    return {
        type: UPDATE_FEEDBACKFORM_DIALOG_VISIBILITY,
        payload: isFeedbackFormVisible
    }
}
export function updatePrimaryIsLoading(isLoading) {
    return {
        type: UPDATE_PRIMARY_IS_LOADING,
        payload: isLoading,
    }
}


export function updateDiscoverSecondaryIsLoading(isLoading) {
    return {
        type: UPDATE_DISCOVER_SECONDARY_IS_LOADING,
        payload: isLoading,
    }
}
export function updateFinanceSecondaryIsLoading(isLoading) {
    return {
        type: UPDATE_FINANCE_SECONDARY_IS_LOADING,
        payload: isLoading,
    }
}
export function updateTrySecondaryIsLoading(isLoading) {
    return {
        type: UPDATE_TRY_IS_LOADING,
        payload: isLoading,
    }
}
export function updateTrafficSecondaryIsLoading(isLoading) {
    return {
        type: UPDATE_TRAFFIC_IS_LOADING,
        payload: isLoading,
    }
}
export function updateMuSecondaryIsLoading(isLoading) {
    return {
        type: UPDATE_MU_IS_LOADING,
        payload: isLoading,
    }
}
export function updateFinanceXDC1IsLoading(isLoading) {
    return {
        type: UPDATE_FINANCE_XDC_1_IS_LOADING,
        payload: isLoading,
    }
}

export function updateBuyGrossIsLoading(isLoading) {
    return {
        type: UPDATE_BUY_GROSS_IS_LOADING,
        payload: isLoading,
    }
}
export function updateBuyMarketIsLoading(isLoading) {
    return {
        type: UPDATE_BUY_MARKET_IS_LOADING,
        payload: isLoading,
    }
}
export function updateBuyConversionIsLoading(isLoading) {
    return {
        type: UPDATE_BUY_CONVERSION_IS_LOADING,
        payload: isLoading,
    }
}

export function updateUseIsLoading(isLoading) {
    return {
        type: UPDATE_USE_IS_LOADING,
        payload: isLoading,
    }
}
export function updateRenewIsLoading(isLoading) {
    return {
        type: UPDATE_RENEW_IS_LOADING,
        payload: isLoading,
    }
}
export function updateRenewDetailsIsLoading(isLoading) {
    return {
        type: UPDATE_RENEW_DETAILS_IS_LOADING,
        payload: isLoading,
    }
}

export function updateRenewCancelIsLoading(isLoading) {
    return {
        type: UPDATE_RENEW_CANCEL_IS_LOADING,
        payload: isLoading,
    }
}


export function updateFinanceXDC2IsLoading(isLoading) {
    return {
        type: UPDATE_FINANCE_XDC_2_IS_LOADING,
        payload: isLoading,
    }
}


/**
 * Generate the data that goes into the filter box
 *
 */
export function generateFilterData() {
    let promiseArr1;
    promiseArr1 = utils.initiateFilterDataRequests();
    return {
        type: GENERATE_FILTER_DATA,
        payload: promiseArr1
    }
}


export function addPreferencesToActiveFilters(prefs) {
    return {
        type: ADD_PREFERENCES_TO_ACTIVE_FILTERS,
        payload: prefs
    }
}
SUBMIT_SUB_FILTERS
export function submitSubFilters(newFilters) {
    return {
        type: SUBMIT_SUB_FILTERS,
        payload: newFilters
    }
}
export function submitFilters(newFilters) {
    return {
        type: SUBMIT_FILTERS,
        payload: newFilters
    }
}
/**
 * Add a value to the active filters for the multi filter
 *
 * @param {object} filter
 */

export function addValueToActiveMultiFilter(filter) {
    return {
        type: ADD_MULTI_FILTER,
        payload: filter
    }
}

export function resetFilters(preferences) {
    console.log(preferences);
    let { defaultQuarter, defaultSegment, geoFilters, marketFilters, subscriptionFilters, productFilters, routeFilters } = preferences;
    return {
        type: RESET_FILTERS,
        payload: { defaultQuarter, defaultSegment, geoFilters, marketFilters, subscriptionFilters, productFilters, routeFilters }
    }
}
/**
* Remove a value to the active filters for the multi filter
*
* @param {object} filter
*/
export function removeMultiFilter(filter) {
    return {
        type: REMOVE_MULTI_FILTER,
        payload: filter
    }
}

/**
 * Set the visibility of the Summary View Details to True
 */
export function showSummaryDetails(filter) {
    return {
        type: SHOW_SUMMARY_VIEW_DETAILS,
        payload: true
    }
}

/**
 * Set the visibility of the Summary View Details to False
 */
export function hideSummaryDetails(filter) {
    return {
        type: HIDE_SUMMARY_VIEW_DETAILS,
        payload: false
    }
}


/**
 * Update the active primary card
 * @param {} index
 */
export function updateActivePrimaryCard(index) {
    // console.log(index);
    return {
        type: UPDATE_ACTIVE_PRIMARY_CARD,
        payload: index
    }
}
/**
 * Update the active Secondary Card
 * @param {*} index
 */
export function updateActiveSecondaryCard(index) {
    return {
        type: UPDATE_ACTIVE_SECONDARY_CARD,
        payload: index
    }
}


/**
 *
 * @param {*} _parameters
 * @param {*} availableFilters
 */

/**
 * Get the data for Excel Multichart
 * @param {} _parameters
 * @param {*} availableFilters
 */
export function getExcelMultichartData(_parameters, availableFilters) {
    return {
        type: GET_EXCEL_MULTICHART,
        payload: {}
    }
}

/**
 * Show the comment box
 */
export function showCommentBox() {
    return {
        type: UPDATE_COMMENT_BOX_VISIBILITY,
        payload: true
    }
}

/**
 * Hide the Comment Box
 */
export function hideCommentBox() {
    return {
        type: UPDATE_COMMENT_BOX_VISIBILITY,
        payload: false
    }
}

/**
 * Hide/Show the comment icon on the metric squares
 * @param {} _toggleStatus
 */
export function toggleCommentBox(_toggleStatus) {
    return {
        type: TOGGLE_COMMENT_CARD_VISIBILITY,
        payload: _toggleStatus
    }
}

/**
 * Add a comment to the active Primarysquare
 * @param {} activeSquareID
 * @param {*} comment
 */
export function addNewCommentToPrimaryMetric(activeSquareID, comment) {
    return {
        type: ADD_NEW_PRIMARY_COMMENT,
        payload: {
            square: activeSquareID,
            comment: comment
        }
    }
}

/**
 * Add a reply to a comment in this metric
 * @param {} activeSquareID
 * @param {*} commentId
 * @param {*} reply
 */
export function addNewReplyToPrimaryMetricComment(activeSquareID, commentId, reply) {
    return {
        type: ADD_NEW_PRIMARY_REPLY,
        payload: {
            square: activeSquareID,
            comment: commentId,
            reply: reply
        }
    }
}
/**
 * Add a comment to the active Secondary Square
 * @param {} activeSquareID
 * @param {*} comment
 */
export function addNewCommentToSecondaryMetric(params, metric) {


    let response = utils.postComment(params, metric);

    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

/**
 * Add a reply to a commen tin this metric
 * @param {} activeSquareID
 * @param {*} commentId
 * @param {*} reply
 */
export function addNewReplyToSecondaryMetric(params, metric) {
    let response = utils.postReply(params, metric);

    return {
        type: FETCH_COMMENTS,
        payload: response
    }

}

export function removeComment(commentId, activeSquareID) {

    let response = utils.removeComment({
        id: commentId
    }, activeSquareID);
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

/**
 * Get data for excel
 * @param {} value
 */
export function updateMultichartMetric(value) {
    return {
        type: MULTICHART_IS_ARR,
        payload: value
    }
}

// Health and Heartbeat
export function getIbHeartbeat() {
    const res = utils.getHeartbeat();
    return {
        type: GET_IBHEARTBEAT,
        payload: res
    }
}
/**
 * Update which view is currently showing/ hiding
 * @param {*} component
 * @param {*} isShowing
 */
export function updateViewSetting(component, isShowing) {
    return {
        type: SET_VIEW_APP_SETTINGS,
        payload: {
            component, isShowing
        }
    }
}

/**
 * Fethch the comments for current active comment box clicked
 * @param {*} metricId
 */

export const fetchComments = (metricId) => {
    const response = utils.fetchComments(metricId);
    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}



export function fetchCommentsCount(metric) {
    const res = utils.fetchCommentsCount();
    return {
        type: FETCH_COMMENTS_COUNT,
        payload: res
    }
}

export function isFetching(state) {
    return {
        type: 'FETCHING_COMMENTS',
        payload: state
    }
}



export function getUpdatedAsOfDateAndQuarter() {

    let response =  utils.retrieveUpdatedAndQuarter()
    return {
        type: GET_UPDATED_AS_OF_DATE_AND_QUARTER,
        payload: response
    }
}
