

import {
    CHANGE_AUTH,
    UPDATE_OKTA_USER,
    GET_USER_SETTINGS,
    UPDATE_USER_SETTINGS,
    SET_APP_SETTINGS,
    SET_VIEW_APP_SETTINGS,
    GET_SUMMARY_DATA,
    GET_PRIMARY_DATA,
    GET_FINANCE_SECONDARY_DATA,
    GET_DISCOVER_SECONDARY_DATA,
    GET_TRY_SECONDARY_DATA,
    GET_BUY_SECONDARY_DATA,
    GET_USE_SECONDARY_DATA,
    GET_RENEW_SECONDARY_DATA,
    UPDATE_DIALOG_VISIBILITY,
    GENERATE_FILTER_DATA,
    ADD_PREFERENCES_TO_ACTIVE_FILTERS,
    ADD_MULTI_FILTER,
    RESET_FILTERS,
    SUBMIT_FILTERS,
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
    FETCH_COMMENTS_COUNT



} from 'actions/types';
import * as utils from '../utilities';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
export function updateUserSettings(activeFilters, user, availableFilters, settingId) {

    let stringGeo = activeFilters.geos;
    let stringProducts = activeFilters.products
    let stringRoutes = activeFilters.routes;
    let stringMarkets = activeFilters.markets;
    let stringSubscription = activeFilters.subscriptions;
    let params = {
        quarter: activeFilters.quarters[0].value,
        segment: activeFilters.segments[0].value,
        user: user.sub,
        geos: JSON.stringify(stringGeo),
        products: JSON.stringify(stringProducts),
        subscriptions: JSON.stringify(stringSubscription),
        routes: JSON.stringify(stringRoutes),
        markets: JSON.stringify(stringMarkets)
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

export function getPrimaryData(filters) {
    let allFilters = {
        quarters: Object.keys(filters.quarters.availableFilters).map(e => filters.quarters.availableFilters[e]),
        geos: Object.keys(filters.geos.availableFilters).map(e => filters.geos.availableFilters[e]),
        marketAreas: Object.keys(filters.markets.availableFilters).map(e => filters.markets.availableFilters[e]),
        products: Object.keys(filters.products.availableFilters).map(e => filters.products.availableFilters[e]),
        segments: Object.keys(filters.segments.availableFilters).map(e => filters.segments.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscriptions.availableFilters).map(e => filters.subscriptions.availableFilters[e]),
        routeToMarkets: Object.keys(filters.routes.availableFilters).map(e => filters.routes.availableFilters[e])
    }
    let _parameters = {
        geos: Object.keys(filters.geos.valueFilters).map(e => filters.geos.valueFilters[e]),
        quarters: Object.keys(filters.quarters.valueFilters).map(e => filters.quarters.valueFilters[e]),
        segments: Object.keys(filters.segments.valueFilters).map(e => filters.segments.valueFilters[e]),
        subscriptions: Object.keys(filters.subscriptions.valueFilters).map(e => filters.subscriptions.valueFilters[e]),
        markets: Object.keys(filters.markets.valueFilters).map(e => filters.markets.valueFilters[e]),
        routes: Object.keys(filters.routes.valueFilters).map(e => filters.routes.valueFilters[e]),
        products: Object.keys(filters.products.valueFilters).map(e => filters.products.valueFilters[e])
    };

    promiseArr = utils.requestPrimaryData(allFilters, _parameters);
    return {
        type: GET_PRIMARY_DATA,
        payload: promiseArr
    }
}

export function getFinanceSecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarters: Object.keys(filters.quarters.availableFilters).map(e => filters.quarters.availableFilters[e]),
        geos: Object.keys(filters.geos.availableFilters).map(e => filters.geos.availableFilters[e]),
        marketAreas: Object.keys(filters.markets.availableFilters).map(e => filters.markets.availableFilters[e]),
        products: Object.keys(filters.products.availableFilters).map(e => filters.products.availableFilters[e]),
        segments: Object.keys(filters.segments.availableFilters).map(e => filters.segments.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscriptions.availableFilters).map(e => filters.subscriptions.availableFilters[e]),
        routeToMarkets: Object.keys(filters.routes.availableFilters).map(e => filters.routes.availableFilters[e])
    }
    let _parameters = {
        geos: Object.keys(filters.geos.valueFilters).map(e => filters.geos.valueFilters[e]),
        quarters: Object.keys(filters.quarters.valueFilters).map(e => filters.quarters.valueFilters[e]),
        segments: Object.keys(filters.segments.valueFilters).map(e => filters.segments.valueFilters[e]),
        subscriptions: Object.keys(filters.subscriptions.valueFilters).map(e => filters.subscriptions.valueFilters[e]),
        markets: Object.keys(filters.markets.valueFilters).map(e => filters.markets.valueFilters[e]),
        routes: Object.keys(filters.routes.valueFilters).map(e => filters.routes.valueFilters[e]),
        products: Object.keys(filters.products.valueFilters).map(e => filters.products.valueFilters[e])
    };

    // console.log(filters);
    promiseArr = utils.requestFinanceSecondaryData(allFilters, _parameters);
    return {
        type: GET_FINANCE_SECONDARY_DATA,
        payload: promiseArr
    }
}

export function getDiscoverSecondaryData(filters) {
    // console.log(filters);
    let allFilters = {
        quarters: Object.keys(filters.quarters.availableFilters).map(e => filters.quarters.availableFilters[e]),
        geos: Object.keys(filters.geos.availableFilters).map(e => filters.geos.availableFilters[e]),
        marketAreas: Object.keys(filters.markets.availableFilters).map(e => filters.markets.availableFilters[e]),
        products: Object.keys(filters.products.availableFilters).map(e => filters.products.availableFilters[e]),
        segments: Object.keys(filters.segments.availableFilters).map(e => filters.segments.availableFilters[e]),
        subscriptionOfferings: Object.keys(filters.subscriptions.availableFilters).map(e => filters.subscriptions.availableFilters[e]),
        routeToMarkets: Object.keys(filters.routes.availableFilters).map(e => filters.routes.availableFilters[e])
    }
    let _parameters = {
        geos: Object.keys(filters.geos.valueFilters).map(e => filters.geos.valueFilters[e]),
        quarters: Object.keys(filters.quarters.valueFilters).map(e => filters.quarters.valueFilters[e]),
        segments: Object.keys(filters.segments.valueFilters).map(e => filters.segments.valueFilters[e]),
        subscriptions: Object.keys(filters.subscriptions.valueFilters).map(e => filters.subscriptions.valueFilters[e]),
        markets: Object.keys(filters.markets.valueFilters).map(e => filters.markets.valueFilters[e]),
        routes: Object.keys(filters.routes.valueFilters).map(e => filters.routes.valueFilters[e]),
        products: Object.keys(filters.products.valueFilters).map(e => filters.products.valueFilters[e])
    };

    // console.log(filters);
    promiseArr = utils.requestDiscoverSecondaryData(allFilters, _parameters);

    return {
        type: GET_DISCOVER_SECONDARY_DATA,
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
export function addNewCommentToSecondaryMetric(activeSquareID, comment) {
    return {
        type: ADD_NEW_SECONDARY_COMMENT,
        payload: {
            square: activeSquareID,
            comment: comment
        }
    }
}

/**
 * Add a reply to a commen tin this metric
 * @param {} activeSquareID
 * @param {*} commentId
 * @param {*} reply
 */
export function addNewReplyToSecondaryMetric(activeSquareID, commentId, reply) {
    return {
        type: ADD_NEW_SECONDARY_REPLY,
        payload: {
            square: activeSquareID,
            comment: commentId,
            reply: reply
        }
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

export function fetchComments(metricId) {
    // console.log(metricId);
    const response = utils.fetchComments(metricId);;
    return {
        type: FETCH_COMMENTS,
        payload:
            response

    }
}

export function fetchCommentsCount() {
    const res = utils.fetchCommentsCount();
    return {
        type: FETCH_COMMENTS_COUNT,
        payload: res
    }
}
