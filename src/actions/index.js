

import {
    CHANGE_AUTH,
    UPDATE_OKTA_USER,
    GET_USER_SETTINGS,
    UPDATE_USER_SETTINGS,
    SET_APP_SETTINGS,
    SET_VIEW_APP_SETTINGS,
    GET_PRIMARY_DATA,
    GET_SECONDARY_DATA,
    GET_SECONDARY_DETAIL_DATA,
    UPDATE_DIALOG_VISIBILITY ,
    GENERATE_FILTER_DATA,
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER,
    SHOW_SUMMARY_VIEW_DETAILS,
    HIDE_SUMMARY_VIEW_DETAILS,
    UPDATE_ACTIVE_PRIMARY_CARD,
    UPDATE_ACTIVE_SECONDARY_CARD,
    GET_EXCEL_MULTICHART,
    UPDATE_COMMENT_BOX_VISIBILITY,
    TOGGLE_COMMENT_CARD_VISIBILITY,
    ADD_NEW_PRIMARY_COMMENT,
    ADD_NEW_PRIMARY_REPLY  ,
    ADD_NEW_SECONDARY_COMMENT,
    ADD_NEW_SECONDARY_REPLY,
    MULTICHART_IS_ARR,
    GET_IBHEARTBEAT,
    UPDATE_FILTER_VISIBILITITY  ,
    UPDATE_COMMENT_VISIBILITITY ,
    UPDATE_PRIMARY_VISIBILITITY ,
    UPDATE_SECONDARY_VISIBILITITY  ,


} from 'actions/types';
import * as utils from '../utilities';

// HTTP Variables

let promiseArr =[];

let filterParams = [
    {prompt: 'quarterFilters', value: ''},
    {prompt: 'productFilters', value: ''},
    {prompt: 'geoFilters', value: ''},
    {prompt: 'subscriptionFilters', value: ''},
    {prompt: 'maFilters', value: ''},
    {prompt: 'routeFilters', value: ''},
    {prompt: 'segmentFilters', value: ''}
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

export function getUserSettings(sub){
    let res = utils.requestUserSettings(sub);
    return {
        type: GET_USER_SETTINGS,
        payload: res
    }
}
/***
 * Update User In Database From Okta
 */
export  function updateOKTAUser(user){
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
export function updateUserSettings(activeFilters, user,availableFilters,settingId){

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
    let deviceType = utils.getDeviceType({width: settings.window.width, height: settings.window.height});

    return {
        type: SET_APP_SETTINGS,
        payload: {settings,deviceType}
    }
}


export function setViewAppSettings() {


    return {
        type: SET_VIEW_APP_SETTINGS,
        payload: null
    }
}



export function getPrimaryData(_parameters,availableFilters){

    let allFilters = {
        quarters: Object.keys(availableFilters.quarters).map(e => availableFilters.quarters[e]),
        geos:  Object.keys(availableFilters.geos).map(e => availableFilters.geos[e]),
        marketAreas: Object.keys(availableFilters.marketAreas).map(e => availableFilters.marketAreas[e]),
        products:  Object.keys(availableFilters.products).map(e => availableFilters.products[e]),
        segments: Object.keys(availableFilters.segments).map(e => availableFilters.segments[e]),
        subscriptionOfferings: Object.keys(availableFilters.subscriptionOfferings).map(e => availableFilters.subscriptionOfferings[e]),
        routeToMarkets:  Object.keys(availableFilters.routeToMarkets).map(e => availableFilters.routeToMarkets[e])
    }
    promiseArr = utils.requestPrimaryData(allFilters,_parameters);

    return{
        type: GET_PRIMARY_DATA,
        payload: promiseArr
    }
}

export function getSecondaryData(_parameters,availableFilters){
    let allFilters = {
        quarters: Object.keys(availableFilters.quarters).map(e => availableFilters.quarters[e]),
        geos:  Object.keys(availableFilters.geos).map(e => availableFilters.geos[e]),
        marketAreas: Object.keys(availableFilters.marketAreas).map(e => availableFilters.marketAreas[e]),
        products:  Object.keys(availableFilters.products).map(e => availableFilters.products[e]),
        segments: Object.keys(availableFilters.segments).map(e => availableFilters.segments[e]),
        subscriptionOfferings: Object.keys(availableFilters.subscriptionOfferings).map(e => availableFilters.subscriptionOfferings[e]),
        routeToMarkets:  Object.keys(availableFilters.routeToMarkets).map(e => availableFilters.routeToMarkets[e])
    }
    promiseArr = utils.requestSecondaryData(allFilters,_parameters);
    // console.log(promiseArr);
    return{
        type: GET_SECONDARY_DATA,
        payload: promiseArr
    }


}

export function getDetailsData(_parameters,availableFilters){
//   console.log('I made it');
    let allFilters = {
        quarters: Object.keys(availableFilters.quarters).map(e => availableFilters.quarters[e]),
        geos:  Object.keys(availableFilters.geos).map(e => availableFilters.geos[e]),
        marketAreas: Object.keys(availableFilters.marketAreas).map(e => availableFilters.marketAreas[e]),
        products:  Object.keys(availableFilters.products).map(e => availableFilters.products[e]),
        segments: Object.keys(availableFilters.segments).map(e => availableFilters.segments[e]),
        subscriptionOfferings: Object.keys(availableFilters.subscriptionOfferings).map(e => availableFilters.subscriptionOfferings[e]),
        routeToMarkets:  Object.keys(availableFilters.routeToMarkets).map(e => availableFilters.routeToMarkets[e])
    }
    promiseArr = utils.requestDetailsData(allFilters,_parameters);
    // console.log(promiseArr);
    return{
        type: GET_SECONDARY_DETAIL_DATA,
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
    promiseArr1 =  utils.initiateFilterDataRequests();
    return{
        type: GENERATE_FILTER_DATA,
        payload: promiseArr1
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

 /**
 * Remove a value to the active filters for the multi filter
 *
 * @param {object} filter
 */
 export function removeMultiFilter(filter){
     return {
         type: REMOVE_MULTI_FILTER,
         payload: filter
     }
 }

/**
 * Set the visibility of the Summary View Details to True
 */
export function showSummaryDetails(filter){
    return {
        type: SHOW_SUMMARY_VIEW_DETAILS,
        payload: true
    }
}

/**
 * Set the visibility of the Summary View Details to False
 */
export function hideSummaryDetails(filter){
    return {
        type: HIDE_SUMMARY_VIEW_DETAILS,
        payload: false
    }
}


/**
 * Update the active primary card
 * @param {} index
 */
export function updateActivePrimaryCard(index){
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
export function updateActiveSecondaryCard(index){
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
export function getExcelMultichartData(_parameters,availableFilters){
    return {
        type: GET_EXCEL_MULTICHART,
        payload: {}
    }
}

/**
 * Show the comment box
 */
export function showCommentBox(){
    return {
        type: UPDATE_COMMENT_BOX_VISIBILITY,
        payload: true
    }
}

/**
 * Hide the Comment Box
 */
export function hideCommentBox(){
    return{
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
export function addNewCommentToPrimaryMetric(activeSquareID, comment ){
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
export function addNewReplyToPrimaryMetricComment(activeSquareID, commentId,reply ){
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
export function addNewCommentToSecondaryMetric(activeSquareID, comment){
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
export function addNewReplyToSecondaryMetric(activeSquareID,commentId,reply){
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
export function updateMultichartMetric(value){
    return {
        type: MULTICHART_IS_ARR,
        payload:value
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
export function updateViewSetting(component, isShowing){


return {
    type: SET_VIEW_APP_SETTINGS,
    payload: {
        component, isShowing
    }
}
}
