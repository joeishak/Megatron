

import {  
    CHANGE_AUTH, 
    UPDATE_SWITCH_FILTER_VALUE,
    UPDATE_DIALOG_VISIBILITY , 
    UPDATE_MULTI_FILTER_VALUES,
    GET_ALL_DATA,
    GENERATE_FILTER_DATA,
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER,
    SHOW_SUMMARY_VIEW_DETAILS,    
    HIDE_SUMMARY_VIEW_DETAILS,    
    SHOW_DATA_PREFERENCES,
    HIDE_DATA_PREFERENCES,
    UPDATE_FINANCIAL_SUMMARY_ACTIVE_CARD,
    UPDATE_JOURNEY_SUMMARY_ACTIVE_CARD,
    GET_IBE_DATA,
    GET_FILTERED_IBE_DATA

} from 'actions/types';
import axios from 'axios';
import * as utils from '../utilities';
import _ from 'lodash';
// general use

const prod_connection = { 'user': 'JR', 'pass': 'ft3t7pgz' };
const environment = { infosolApi: 'http://vm1.infosol.com:8551' };

// Multifilter use
const token = 'Basic ' + btoa('JR' + ':' + 'ft3t7pgz');
let headers = {'Authorization': token , 'Accept': '*/*'};
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

/**
 * Update the value of the Switch Filter 
 * 
 * @param {boolean} switchFilterValue 
 */
export function updateSwitchFilterValue(switchFilterValue) {
    return {
        type: UPDATE_SWITCH_FILTER_VALUE,
        payload: switchFilterValue
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
 * Update the values in state from the multi filter values
 * 
 * @param {array} newMultiFilterValue
 */
export function updateMultiFilterValues(newMultiFilterValue) {
    return {
        type: UPDATE_MULTI_FILTER_VALUES,
        payload: newMultiFilterValue
    }
}

/**
 * Update the status of the multi filter updating
 * 
 * @param {boolean} status
 */
export function updateMultiFilterStatus(status) {
    return {
        type: UPDATE_MULTI_FILTER_VALUES,
        payload: status
    }
}

/**
 * Generate the data that goes into the filter box
 * 
 */
export function generateFilterData() {

    let responseArray = [];
    const maResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=marketAreaList&json=1', {headers: headers, responseType: 'text'})
    const segementsResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_Segments&json=1', {headers: headers, responseType: 'text'});
    const subscriptionResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_Subscriptions&json=1', {headers: headers, responseType: 'text'});
    const routesResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_RouteToMarket&json=1', {headers: headers, responseType: 'text'});
    const quartersResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_Quarters&json=1', {headers: headers, responseType: 'text'});
    const productResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_ProductName&json=1', {headers: headers, responseType: 'text'});
    const geoResponse = axios.get('http://vm1.infosol.com:8551/infoburst/rest/exec/xdcqry/447?q=MultiFilter_GeoCode&json=1', {headers: headers, responseType: 'text'});
    

    responseArray.push(quartersResponse,maResponse,productResponse,segementsResponse,subscriptionResponse,routesResponse,geoResponse);
    let promiseArr1 = Promise.all(responseArray);
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
 * Set the visibility of the Data Preferences to True
 */
export function showDataPreferences(filter){
    return {
        type: SHOW_DATA_PREFERENCES,
        payload: true
    }
}

/**
 * Set the visibility of the Data Preferences to False
 */
export function hideDataPreferences(filter){
    return {
        type: HIDE_DATA_PREFERENCES,
        payload: false
    }
}



/***
 * Update the Financial Summary Active Card
 * @param {squareItem}
 */
export function updateFinancialSummaryActiveCard(squareItem){
    return {
        type: UPDATE_FINANCIAL_SUMMARY_ACTIVE_CARD,
        payload: squareItem
    }
}

/***
 * Update the Journey Summary Active Card
 * @param {squareItem}
 */
export function updateJourneySummaryActiveCard(squareItem){
    return {
        type: UPDATE_JOURNEY_SUMMARY_ACTIVE_CARD,
        payload: squareItem
    }
}


/**
 * Get all the data for adobe
 * 
 * @param {boolean} status
 */
export function getAdobeData() {


    return {
        type: GET_ALL_DATA,
        payload: {}
    }
}

export function getFilteredIBEDAta(_parameters,availableFilters){
    console.log('Available Filters:', availableFilters)
    // availableFilters.quarters.splice(0,1);
    // availableFilters.products.splice(0,1);
    // availableFilters.marketAreas.splice(0,1);
    // availableFilters.segments.splice(0,1);
    // availableFilters.subscriptionOfferings.splice(0,1);
    // availableFilters.routeToMarkets.splice(0,1);
    // availableFilters.geos.splice(0,1);
    // Infoburst Variables
    const xdc = '447';
    const responseArr = [];
    const filteredActual = 'FinCards_Actual_Filtered';
    const filteredTarget = 'FinCards_Target_Filtered';
    const token = 'Basic ' + btoa(prod_connection['user'] + ':' + prod_connection['pass']);
    let headers = {'Authorization': token , 'Accept': '*/*'};

    // Action Variables
    let parameters = [];
    let p;
    let filtersApplied = {
        quarters: false,
        geos: false,
        products: false,
        routes: false,
        segments: false,
        subscriptions: false,
        markets: false
    }
   

         p = _parameters.map(item => {
            let param;
            param = { prompt: '', value: ''};

            //  if(item.value !== 'All Data'){
            //     param  = { prompt: '', value: `'${item.value}'`};
            //  }

            switch(item.category){
                case 'quarters':
                    param.prompt = 'quarterFilters';
                    param.value = ''
                    filtersApplied.quarters = true;
                    return param;

                case 'productNames':
                    param.prompt = 'productFilters';
                    filtersApplied.products = true;
                    return param;

                case 'geos':
                    param.prompt = 'geoFilters';
                    filtersApplied.geos = true;
                    return param;

                case 'subscriptionOfferings':
                    param.prompt = 'subscriptionFilters';
                    filtersApplied.subscriptions = true;
                    return param;

                case 'marketAreas':
                    param.prompt = 'maFilters';
                    filtersApplied.markets = true;
                    return param;

                case 'routeToMarkets':
                    param.prompt = 'routeFilters';
                    filtersApplied.routes = true;
                    return param;

                case 'segments':
                    param.prompt = 'segmentFilters';
                    filtersApplied.segments = true;
                    return param;

            }
        });
        
    console.log('Filters formatted for Params: ', p);

    for (let i = 0; i <=6; i++){
        switch(i){
            case 0: //quarters
            if(filtersApplied.quarters===false){
                // console.log('Available Quarters',availableFilters.quarters);/
                let paramValue = []
                for(let j=0;j<availableFilters.quarters.length;j++){
                    let item = availableFilters.quarters[j];
                    if(item.value !== 'All Data'){
                        paramValue.push( item.value)
                    }
                }
              
                // console.log('quarter param value', paramValue);
                paramValue = utils.convertFilterList(paramValue);
                // console.log('quarter param string',paramValue)
                p.push({prompt: 'quarterFilters' , value:paramValue })
                
            } else{
                let paramValue = [];
                let a = _.findIndex(_parameters, function(item) {return item.category ==='quarters'});

                 if(_parameters[a].value === 'All Data') {
                    for(let j=0;j<availableFilters.quarters.length;j++){
                        let item = availableFilters.quarters[j];
                        if(item.value !== 'All Data'){
                            paramValue.push( item.value)
                        }
                    }

                 }
                 else{
                     paramValue.push(_parameters[a].value);
                 }
                 paramValue = utils.convertFilterList(paramValue);

                 p[0].value = paramValue;
                // p.{prompt: 'quarterFilters' , value:paramValue })

            }
            break;
            case 1: // geos
            if(filtersApplied.geos===false){
                let paramValue = []
                for(let j=0;j<availableFilters.geos.length;j++){
                    let item = availableFilters.geos[j];
                    if(item.value !== 'All Data'){
                        paramValue.push( item.value)
                    }
                }
                // console.log('geos param value', paramValue);
                paramValue = utils.convertFilterList(paramValue);
                // console.log('geos param string',paramValue)
                
                p.push({prompt: 'geoFilters' , value: paramValue })
            } else{
                let paramValue = [];
                let a = _.findIndex(_parameters, function(item) {return item.category ==='geos'});

                 if(_parameters[a].value === 'All Data') {
                    for(let j=0;j<availableFilters.geos.length;j++){
                        let item = availableFilters.geos[j];
                        if(item.value !== 'All Data'){
                            paramValue.push( item.value)
                        }
                    }

                 }
                 else{
                     paramValue.push(_parameters[a].value);
                 }
                 paramValue = utils.convertFilterList(paramValue);

                 p[1].value = paramValue;
                // p.{prompt: 'quarterFilters' , value:paramValue })

            }
            
            break;
            case 2: // products
            if(filtersApplied.products===false){
                let paramValue = []
                for(let j=0;j<availableFilters.products.length;j++){
                    let item = availableFilters.products[j];
                    if(item.value !== 'All Data'){
                        paramValue.push( item.value)
                    }
                }
                // console.log('products param value', paramValue);
                paramValue = utils.convertFilterList(paramValue);
                // console.log('products param string',paramValue);
                p.push({prompt: 'productFilters' , value: paramValue })
            } else{
                let paramValue = [];
                let a = _.findIndex(_parameters, function(item) {return item.category ==='productNames'});

                 if(_parameters[a].value === 'All Data') {
                    for(let j=0;j<availableFilters.products.length;j++){
                        let item = availableFilters.products[j];
                        if(item.value !== 'All Data'){
                            paramValue.push( item.value)
                        }
                    }

                 }
                 else{
                     paramValue.push(_parameters[a].value);
                 }
                 paramValue = utils.convertFilterList(paramValue);

                 p[2].value = paramValue;
                // p.{prompt: 'quarterFilters' , value:paramValue })

            }
            break;
            case 3: // subscriptions
            if(filtersApplied.subscriptions===false){
                let paramValue = []
                for(let j=0;j<availableFilters.subscriptionOfferings.length;j++){
                    let item = availableFilters.subscriptionOfferings[j];
                    if(item.value !== 'All Data'){
                        paramValue.push( item.value)
                    }
                }
                // console.log('subscriptions param value', paramValue);
                
                paramValue = utils.convertFilterList(paramValue);
                // console.log('subscriptions param string',paramValue);
                p.push({prompt: 'subscriptionFilters' , value: paramValue })
            }else{
                let paramValue = [];
                let a = _.findIndex(_parameters, function(item) {return item.category ==='subscriptionOfferings'});

                 if(_parameters[a].value === 'All Data') {
                    for(let j=0;j<availableFilters.subscriptionOfferings.length;j++){
                        let item = availableFilters.subscriptionOfferings[j];
                        if(item.value !== 'All Data'){
                            paramValue.push( item.value)
                        }
                    }

                 }
                 else{
                     paramValue.push(_parameters[a].value);
                 }
                 paramValue = utils.convertFilterList(paramValue);

                 p[3].value = paramValue;
                // p.{prompt: 'quarterFilters' , value:paramValue })

            }
            break;
            case 4: // markets
            if(filtersApplied.markets===false){
                let paramValue = []
                for(let j=0;j<availableFilters.marketAreas.length;j++){
                    let item = availableFilters.marketAreas[j];
                    if(item.value !== 'All Data'){
                        paramValue.push( item.value)
                    }
                }
                // console.log('markets param value', paramValue);
                
                paramValue = utils.convertFilterList(paramValue);
                // console.log('markets param string',paramValue);
                p.push({prompt: 'maFilters' , value: paramValue })
            }else{
                let paramValue = [];
                let a = _.findIndex(_parameters, function(item) {return item.category ==='marketAreas'});

                 if(_parameters[a].value === 'All Data') {
                    for(let j=0;j<availableFilters.marketAreas.length;j++){
                        let item = availableFilters.marketAreas[j];
                        if(item.value !== 'All Data'){
                            paramValue.push( item.value)
                        }
                    }

                 }
                 else{
                     paramValue.push(_parameters[a].value);
                 }
                 paramValue = utils.convertFilterList(paramValue);

                 p[4].value = paramValue;
                // p.{prompt: 'quarterFilters' , value:paramValue })

            }
            break;
            case 5: // routes
            if(filtersApplied.routes===false){
                let paramValue = []
                for(let j=0;j<availableFilters.routeToMarkets.length;j++){
                    let item = availableFilters.routeToMarkets[j];
                    if(item.value !== 'All Data'){
                        paramValue.push( item.value)
                    }
                }
                // console.log('routes param value', paramValue);
                
                paramValue = utils.convertFilterList(paramValue);
                // console.log('routes param string',paramValue);
                p.push({prompt: 'routeFilters' , value: paramValue })
            } else{
                let paramValue = [];
                let a = _.findIndex(_parameters, function(item) {return item.category ==='routeToMarkets'});

                 if(_parameters[a].value === 'All Data') {
                    for(let j=0;j<availableFilters.routeToMarkets.length;j++){
                        let item = availableFilters.routeToMarkets[j];
                        if(item.value !== 'All Data'){
                            paramValue.push( item.value)
                        }
                    }

                 }
                 else{
                     paramValue.push(_parameters[a].value);
                 }
                 paramValue = utils.convertFilterList(paramValue);

                 p[5].value = paramValue;
                // p.{prompt: 'quarterFilters' , value:paramValue })

            }
            break;
            case 6: // segments
            if(filtersApplied.segments===false){
                let paramValue = []
                for(let j=0;j<availableFilters.segments.length;j++){
                    let item = availableFilters.segments[j];
                    if(item.value !== 'All Data'){
                        paramValue.push( item.value)
                    }
                }
                // console.log('segments param value', paramValue);
                
                paramValue = utils.convertFilterList(paramValue);
                // console.log('segments param string',paramValue);
                p.push({prompt: 'segmentFilters' , value: paramValue })
            } else{
                let paramValue = [];
                let a = _.findIndex(_parameters, function(item) {return item.category ==='segments'});

                 if(_parameters[a].value === 'All Data') {
                    for(let j=0;j<availableFilters.segments.length;j++){
                        let item = availableFilters.segments[j];
                        if(item.value !== 'All Data'){
                            paramValue.push( item.value)
                        }
                    }

                 }
                 else{
                     paramValue.push(_parameters[a].value);
                 }
                 paramValue = utils.convertFilterList(paramValue);

                 p[6].value = paramValue;
                // p.{prompt: 'quarterFilters' , value:paramValue })

            }
            break;

        }
    }

    console.log('P afeter modifying all dataa filter',p);
    let params1 = p.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
      }, '');
    console.log(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + filteredActual + params1 + '&json=1');
    const response1 = axios.get(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + filteredActual + params1 + '&json=1', 
    {headers: headers, responseType: 'text'});
    console.log(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + filteredActual + params1 + '&json=1');
    const response2 = axios.get(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + filteredTarget + params1 + '&json=1', 
    {headers: headers, responseType: 'text'});

    responseArr.push(response1, response2);
    let promiseArr = Promise.all(responseArr);
    console.log(responseArr);

    return {
        type: GET_FILTERED_IBE_DATA,
        payload: promiseArr
    }
}

export function getIbeData(_parameters) {

    const endpoint = 'FinCards_Actual';
    const endpoint2 = 'FinCards_Target';
 
    
    const xdc = '447';
    let parameters = _parameters;
    const responseArr = [];

    let params = parameters.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
      }, '');

    const token = 'Basic ' + btoa(prod_connection['user'] + ':' + prod_connection['pass']);
    let headers = {'Authorization': token , 'Accept': '*/*'};

    const response = axios.get(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + endpoint + params + '&json=1', 
    {headers: headers, responseType: 'text'});

    const response2 = axios.get(environment.infosolApi + '/infoburst/rest/exec/xdcqry/' + xdc + '?q=' + endpoint2 + params + '&json=1', 
    {headers: headers, responseType: 'text'});

    responseArr.push(response, response2);
    let promiseArr = Promise.all(responseArr);

    return {
        type: GET_IBE_DATA,
        payload: promiseArr
    }
    
}
 