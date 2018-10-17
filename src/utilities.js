import _ from 'lodash';
import { InfoburstAzure} from './variables';
import axios from 'axios';


const token = 'Basic ' + btoa(InfoburstAzure.user + ':' + InfoburstAzure.pass);
const headers = {'Authorization': token , 'Accept': '*/*'};
let responseArray = [];
let promiseArr =[];
let quarterQuery;
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
 * 
 * @param {*} arrayList 
 */
export function convertFilterList(arrayList) {
  return "'" + arrayList.join("', '") + "' ";
}
/**
 * 
 * @param {*} obj 
 */
export function removeAllDataValueFromFilterArray(obj){
  _.remove(obj.quarters,(item)=>{ return item.value === "All Data"})
  _.remove(obj.products,(item)=>{ return item.value === "All Data"})
  _.remove(obj.segements,(item)=>{ return item.value === "All Data"})
  _.remove(obj.subscriptionOfferings,(item)=>{ return item.value === "All Data"})
  _.remove(obj.marketAreas,(item)=>{ return item.value === "All Data"})
  _.remove(obj.geos,(item)=>{ return item.value === "All Data"})
  _.remove(obj.routeToMarkets,(item)=>{ return item.value === "All Data"})

  return obj;
}
/**
 * 
 * @param {*} arr 
 */
export function findIfFilterIsApplied(arr){
  let filtersApplied = {
    quarters: false,
    geos: false,
    products: false,
    routes: false,
    segments: false,
    subscriptions: false,
    markets: false
  };
  for(let i = 0; i < arr.length; i++){
    let item = arr[i]
      switch(item.category){
        case 'quarters':
            filtersApplied.quarters = true;
            break;
        case 'productNames':
            filtersApplied.products = true;
            break;
        case 'geos':
            filtersApplied.geos = true;
            break;
        case 'subscriptionOfferings':
            filtersApplied.subscriptions = true;
            break;
        case 'marketAreas':
            filtersApplied.markets = true;
            break;
        case 'routeToMarkets':
            filtersApplied.routes = true;
            break;
        case 'segments':
            filtersApplied.segments = true;
            break;
        default: 
        break;
      }
    }
  return filtersApplied;
}
/**
 * 
 * @param {Array} filterParams 
 * @param {Object} filtersApplied 
 * @param {Object} allFilters 
 * @param {Array} _activeParams 
 */
export function generateFilterParams(type,filterParams, allFilters, _activeParams){

    switch(type){
      case 'fin':
      filterParams[0].value = getParamValues(_activeParams.quarters,allFilters.quarters);
      filterParams[1].value = getParamValues(_activeParams.products,allFilters.products);
      filterParams[2].value = getParamValues(_activeParams.geos,allFilters.geos);
      filterParams[3].value = getParamValues(_activeParams.subscriptions,allFilters.subscriptionOfferings);
      filterParams[4].value = getParamValues(_activeParams.markets,allFilters.marketAreas);
      filterParams[5].value = getParamValues(_activeParams.routes,allFilters.routeToMarkets);
      filterParams[6].value = getParamValues(_activeParams.segments,allFilters.segments);
      break;
      case 'journ':
      filterParams[0].value = getParamValues(_activeParams.quarters,allFilters.quarters);
      filterParams[1].value = getParamValues(_activeParams.products,allFilters.products);
      filterParams[2].value = getParamValues(_activeParams.geos,allFilters.geos);
      filterParams[3].value = getParamValues(_activeParams.markets,allFilters.marketAreas);
      filterParams[4].value = getParamValues(_activeParams.routes,allFilters.routeToMarkets);
      filterParams[5].value = getParamValues(_activeParams.segments,allFilters.segments);
      break;
    }
   

    
}
/**
 * 
 * @param {*} allFilters 
 * @param {*} availableFilters 
 */
export function getAllFilters(allFilters, availableFilters){
  allFilters = {
      quarters: Object.values(availableFilters.quarters),
      geos: Object.values(availableFilters.geos),
      marketAreas: Object.values(availableFilters.marketAreas),
      products: Object.values(availableFilters.products),
      segments: Object.values(availableFilters.segments),
      subscriptionOfferings: Object.values(availableFilters.subscriptionOfferings),
      routeToMarkets: Object.values(availableFilters.routeToMarkets)
  }
}

/**
 * 
 * @param {*} activeParams 
 * @param {*} allFilters 
 */
export function getParamValues(activeParams,allFilters){
  // debugger;
  let paramValue;
  
  if(activeParams[0].value ==='All Data'){
    // Add all the values from allFilters except for All Data to the Param Value
    _.remove(allFilters,item=>{
      return  item.value ==='All Data';
  
    })
    paramValue =[];
   
    allFilters.forEach(item=>{
      paramValue.push(item.value);
    })
    // addValue(allFilters,paramValue);

     paramValue = convertFilterList(paramValue);
      return paramValue;
  } else {
    paramValue =[];
    activeParams.forEach(item=>{
      paramValue.push(item.value);
    })
    // addAllValues(activeParams.quarters,paramValue);
     paramValue = convertFilterList(paramValue);
    return paramValue;
  }
}


export function initiateFilterDataRequests(){
 
  responseArray= [];
  promiseArr = [];
  const maResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.filtersXdcID+ InfoburstAzure.filterQueryNames.MarketFilters, {headers: headers, responseType: 'text'})
  const segementsResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.filtersXdcID+ InfoburstAzure.filterQueryNames.SegmentFilters, {headers: headers, responseType: 'text'});
  const subscriptionResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.filtersXdcID+ InfoburstAzure.filterQueryNames.SubscriptionFilters, {headers: headers, responseType: 'text'});
  const routesResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.filtersXdcID+ InfoburstAzure.filterQueryNames.RouteFilters, {headers: headers, responseType: 'text'});
  const quartersResponse = axios.get(InfoburstAzure.xdcCacheQueryURL +  InfoburstAzure.filtersXdcID+ InfoburstAzure.filterQueryNames.QuarterFilters, {headers: headers, responseType: 'text'});
  const productResponse = axios.get(InfoburstAzure.xdcCacheQueryURL +  InfoburstAzure.filtersXdcID+ InfoburstAzure.filterQueryNames.ProductFilters, {headers: headers, responseType: 'text'});
  const geoResponse = axios.get(InfoburstAzure.xdcCacheQueryURL +  InfoburstAzure.filtersXdcID+ InfoburstAzure.filterQueryNames.GeoFilters, {headers: headers, responseType: 'text'});
  
  responseArray.push(quartersResponse,maResponse,productResponse,segementsResponse,subscriptionResponse,routesResponse,geoResponse);
  let promiseArr1 = Promise.all(responseArray);
  return promiseArr1;
}

export function getFinancialSummaryData(allFilters, _parameters){
  responseArray = [];
  promiseArr = [];

 // filterParams[0].value = _parameters.quarters[0].value;
 filterParams[1].value = _parameters.products[0].value;
 filterParams[2].value = _parameters.geos[0].value;
 filterParams[3].value = _parameters.subscriptions[0].value;
 filterParams[4].value = _parameters.markets[0].value;
 filterParams[5].value = _parameters.routes[0].value;
 filterParams[6].value = _parameters.segments[0].value;

 // console.log('Filter Params: ', filterParams);
 quarterQuery = Object.assign({},_parameters.quarters[0]);

 // Remove First Row from all the filters 
 // Contains All Data Filters
 // allFilters = utils.removeAllDataValueFromFilterArray(allFilters);
 generateFilterParams('fin',filterParams,allFilters,_parameters);
 let params1 = filterParams.reduce((prev, param) => {
         let p = '';
         p = prev + '&' + param.prompt + '=' + param.value;
         return p;
     
   }, '');

   const response = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.dataXdcID + InfoburstAzure.summaryQueryNames.FinancialActualTarget  + params1 + '&json=1', 
   {headers: headers, responseType: 'text'});

   const multiChartResponse =  axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.dataXdcID + InfoburstAzure.summaryQueryNames.FinancialMultiChart  + params1 + '&json=1', 
   {headers: headers, responseType: 'text'});

   const unitsResponse = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.FinancialUnitsMultichart  + params1 + '&json=1', 
   {headers: headers, responseType: 'text'});
   responseArray.push(response,multiChartResponse, unitsResponse);
   let promiseArr = Promise.all(responseArray);

   return promiseArr;
}

export function getJourneySummaryData(allFilters,_parameters){
  responseArray = [];
  promiseArr = [];
  let filterParams = [
    {prompt: 'quarterFilters', value: ''},
    {prompt: 'productFilters', value: ''},
    {prompt: 'geoFilters', value: ''},
    {prompt: 'maFilters', value: ''},
    {prompt: 'routeFilters', value: ''},
    {prompt: 'segmentFilters', value: ''}
];
  filterParams[1].value = _parameters.products[0].value;
    filterParams[2].value = _parameters.geos[0].value;
    filterParams[3].value = _parameters.markets[0].value;
    filterParams[4].value = _parameters.routes[0].value;
    filterParams[5].value = _parameters.segments[0].value;


    // console.log('Filter Params: ', filterParams);
    quarterQuery = Object.assign({},_parameters.quarters[0]);

    // Remove First Row from all the filters 
    // Contains All Data Filters
    // allFilters = utils.removeAllDataValueFromFilterArray(allFilters);
    generateFilterParams('journ',filterParams,allFilters,_parameters);
    console.log(filterParams);
    let params1 = filterParams.reduce((prev, param) => {
            let p = '';
            p = prev + '&' + param.prompt + '=' + param.value;
            return p;
        
      }, '');

      const response = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyActualTarget  + params1 + '&json=1', 
      {headers: headers, responseType: 'text'});

      const multiChartResponse =  axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyMultiChart  + params1 + '&json=1', 
      {headers: headers, responseType: 'text'});

      const totalresponse = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyQtd  + params1 + '&json=1', 
      {headers: headers, responseType: 'text'});

      const geoResponse =  axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyGeoQtd  + params1 + '&json=1', 
      {headers: headers, responseType: 'text'});
      console.log(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyGeoQtd  + params1 + '&json=1');
      const maResponse =  axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyMarketAreaQtd  + params1 + '&json=1', 
      {headers: headers, responseType: 'text'});
      responseArray.push(response,multiChartResponse, totalresponse, geoResponse,maResponse);
      promiseArr = Promise.all(responseArray);
  return promiseArr;
}

export function getJourneyQtdData(allFilters,_parameters){

  responseArray = [];
  promiseArr = [];

// console.log(_parameters);
   let filterParams = [
        {prompt: 'quarterFilters', value: ''},
        {prompt: 'productFilters', value: ''},
        {prompt: 'geoFilters', value: ''},
        {prompt: 'maFilters', value: ''},
        {prompt: 'routeFilters', value: ''},
        {prompt: 'segmentFilters', value: ''}
   ];
// filterParams[0].value = _parameters.quarters[0].value;
filterParams[1].value = _parameters.products[0].value;
filterParams[2].value = _parameters.geos[0].value;
filterParams[3].value = _parameters.markets[0].value;
filterParams[4].value = _parameters.routes[0].value;
filterParams[5].value = _parameters.segments[0].value;
// console.log('Filter Params: ', filterParams);
quarterQuery = Object.assign({},_parameters.quarters[0]);

// Remove First Row from all the filters 
// Contains All Data Filters
// allFilters = utils.removeAllDataValueFromFilterArray(allFilters);
generateFilterParams('journ',filterParams,allFilters,_parameters);
let params1 = filterParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    
  }, '');


  const response = axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyQtd  + params1 + '&json=1', 
  {headers: headers, responseType: 'text'});

  const geoResponse =  axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyGeoQtd  + params1 + '&json=1', 
  {headers: headers, responseType: 'text'});
  console.log(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyGeoQtd  + params1 + '&json=1');
  const maResponse =  axios.get(InfoburstAzure.xdcCacheQueryURL + InfoburstAzure.journeyXdcID + InfoburstAzure.summaryQueryNames.JourneyMarketAreaQtd  + params1 + '&json=1', 
  {headers: headers, responseType: 'text'});
  responseArray.push(response,geoResponse,maResponse);
  promiseArr = Promise.all(responseArray);
  return promiseArr;
}