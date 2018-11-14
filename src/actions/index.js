

import {  
    CHANGE_AUTH, 
    UPDATE_OKTA_USER,
    UPDATE_USER_SETTINGS,           
    SET_APP_SETTINGS,
    SET_VIEW_APP_SETTINGS,
    UPDATE_DIALOG_VISIBILITY , 
    GET_PRIMARY_DATA,
    GET_SECONDARY_DATA,
    GENERATE_FILTER_DATA,
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER,
    SHOW_SUMMARY_VIEW_DETAILS,    
    HIDE_SUMMARY_VIEW_DETAILS,    
    UPDATE_ACTIVE_PRIMARY_CARD,
    UPDATE_ACTIVE_SECONDARY_CARD,
    GET_EXCEL_MULTICHART,
    UPDATE_COMMENT_BOX_VISIBILITY,
    ADD_NEW_COMMENT,
    ADD_NEW_REPLY  ,
    TOGGLE_COMMENT_CARD_VISIBILITY,
    ADD_NEW_JOURNEY_COMMENT,
    ADD_NEW_JOURNEY_REPLY,
    MULTICHART_IS_ARR,
    GET_IBHEARTBEAT,

    UPDATE_FILTER_VISIBILITITY  ,
    UPDATE_COMMENT_VISIBILITITY ,
    UPDATE_PRIMARY_VISIBILITITY ,
    UPDATE_SECONDARY_VISIBILITITY  

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

/***
 * Update User In Database From Okta
 */
export  function updateOKTAUser(user){
    utils.addUserToDB(user);
    // let userdb = utils.getUser(user);
    return {
        type: UPDATE_OKTA_USER,
        payload: user
    }
}


export function updateUserSettings(activeFilters, user, defaultSummary, defaultFinKpi, defaultJournKpi,availableFilters,settingId){

    let stringGeo = activeFilters.geos;
    let stringProducts = activeFilters.products
    let stringRoutes = activeFilters.routes;
    let stringMarkets = activeFilters.markets;
    let stringSubscription = activeFilters.subscriptions;
    let params = {
        quarter: activeFilters.quarters[0].value,
        segment: activeFilters.segments[0].value,
        user: user.sub,
        view: defaultSummary,
        fin: defaultFinKpi,
        journ: defaultJournKpi,
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

    console.log('I made to index.js get primary data');
    let allFilters = {
        quarters: Object.values(availableFilters.quarters),
        geos: Object.values(availableFilters.geos),
        marketAreas: Object.values(availableFilters.marketAreas),
        products: Object.values(availableFilters.products),
        segments: Object.values(availableFilters.segments),
        subscriptionOfferings: Object.values(availableFilters.subscriptionOfferings),
        routeToMarkets: Object.values(availableFilters.routeToMarkets)
    }
    promiseArr = utils.requestPrimaryData(allFilters,_parameters);
  
    return{
        type: GET_PRIMARY_DATA,
        payload: promiseArr
    }
}

export function getSecondaryData(){
    return{
        type: GET_SECONDARY_DATA,
        payload: null
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



export function updateActivePrimaryCard(index){
    console.log(index);
    return {
        type: UPDATE_ACTIVE_PRIMARY_CARD,
        payload: index
    }
}

export function updateActiveSecondaryCard(index){
    console.log(index);
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


export function getExcelMultichartData(_parameters,availableFilters){
    return {
        type: GET_EXCEL_MULTICHART,
        payload: {}
    }
}

export function showCommentBox(){
    return {
        type: UPDATE_COMMENT_BOX_VISIBILITY,
        payload: true
    }
}

export function hideCommentBox(){
    return{
        type: UPDATE_COMMENT_BOX_VISIBILITY,
        payload: false
    }
}

export function toggleCommentBox(_toggleStatus) {
    return {
        type: TOGGLE_COMMENT_CARD_VISIBILITY,
        payload: _toggleStatus
    }
}

export function addNewCommentToMetric(activeSquareID, comment ){
    return {
        type: ADD_NEW_COMMENT,
        payload: {
            square: activeSquareID,
            comment: comment
        }
    }
}

export function addNewReplyToMetricComment(activeSquareID, commentId,reply ){
    return {
        type: ADD_NEW_REPLY,
        payload: {
            square: activeSquareID,
            comment: commentId,
            reply: reply
        }
    }
}

export function addNewJourneyComment(activeSquareID, comment){
    return {
        type: ADD_NEW_JOURNEY_COMMENT,
        payload: {
            square: activeSquareID,
            comment: comment
        }
    }
}

export function addNewJourneyReply(activeSquareID,commentId,reply){
    return {
        type: ADD_NEW_JOURNEY_REPLY,
        payload: {
            square: activeSquareID,
            comment: commentId,
            reply: reply
        }
    }

}

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

export function updateViewSetting(component, isShowing){
switch(component){
    case 'primary':
    
    break;
    case  'secondary':
    break;
    case  'navigation':
    break;
    case  'filter':
    break;
    default:
    break;

}
}