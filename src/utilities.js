import _ from 'lodash';

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