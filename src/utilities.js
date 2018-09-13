import _ from 'lodash';

export function convertFilterList(arrayList) {
  return "'" + arrayList.join("\', \'") + "' ";
}

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
export function generateFilterParams(filterParams, allFilters, _activeParams){
  let paramValue;

    //Quarters
    paramValue = [];

    // // If its all data
    // if(isAllData(_activeParams.quarters[0].value)){
    //   //Add all the values from allFilters to param value
    //   addAllValues(allFilters.quarters,paramValue);
    // } else {
    //   addValue(_activeParams.quarters[0].value, paramValue);
    // }
    // paramValue = convertFilterList(paramValue);
    // filterParams[0].value = paramValue;

    //Products
    // If its all data
    if(isAllData(_activeParams.products[0].value)){
      // console.log('Value is All Data, Getting All Filters',allFilters.products);
      //Add all the values from allFilters to param value
      addAllValues(allFilters.products,paramValue);
    } else {
      // console.log('Value is Not All Data, Getting specific Filter',_activeParams.products[0].value);
      addValue(_activeParams.products[0].value, paramValue);
    }
    paramValue = convertFilterList(paramValue);
    filterParams[1].value = paramValue;

    paramValue = [];
    //Geos
    // If its all data
    if(isAllData(_activeParams.geos[0].value)){
      console.log('Value is All Data, Getting All Filters',allFilters.geos);
      //Add all the values from allFilters to param value
      addAllValues(allFilters.geos,paramValue);
    } else {
      console.log('Value is Not All Data, Getting specific Filter',_activeParams.geos[0].value);
      addValue(_activeParams.geos[0].value, paramValue);
    }
    paramValue = convertFilterList(paramValue);
    filterParams[2].value = paramValue;


    paramValue = [];

    //Subscriptions
    // If its all data
    if(isAllData(_activeParams.subscriptions[0].value)){
      console.log('Value is All Data, Getting All Filters',allFilters.subscriptionOfferings);
      //Add all the values from allFilters to param value
      addAllValues(allFilters.subscriptionOfferings,paramValue);
    } else {
      console.log('Value is Not All Data, Getting specific Filter',_activeParams.subscriptions[0].value);
      addValue(_activeParams.subscriptions[0].value, paramValue);
    }
    paramValue = convertFilterList(paramValue);
    filterParams[3].value = paramValue;

    paramValue = [];

   //Market Areas
    // If its all data
    if(isAllData(_activeParams.markets[0].value)){
      // console.log('Value is All Data, Getting All Filters',allFilters.marketAreas);
      //Add all the values from allFilters to param value
      addAllValues(allFilters.marketAreas,paramValue);
    } else {
      // console.log('Value is Not All Data, Getting specific Filter',_activeParams.markets[0].value);
      addValue(_activeParams.markets[0].value, paramValue);
    }
  paramValue = convertFilterList(paramValue);
  filterParams[4].value = paramValue;


  paramValue = [];

  // Route To Markets
    // If its all data
    if(isAllData(_activeParams.routes[0].value)){
      // console.log('Value is All Data, Getting All Filters',allFilters.routeToMarkets);
      //Add all the values from allFilters to param value
      addAllValues(allFilters.routeToMarkets,paramValue);
    } else {
      // console.log('Value is Not All Data, Getting specific Filter',_activeParams[index].value);
      addValue(_activeParams.routes[0].value, paramValue);
    }
  paramValue = convertFilterList(paramValue);
  filterParams[5].value = paramValue;


  paramValue = [];  
  // Sgements
    // If its all data
      if(isAllData(_activeParams.segments[0].value)){
        // console.log('Value is All Data, Getting All Filters',allFilters.segments);
        //Add all the values from allFilters to param value
        addAllValues(allFilters.segments,paramValue);
      } else {
        // console.log('Value is Not All Data, Getting specific Filter',_activeParams[index].value);
        addValue(_activeParams.segments[0].value, paramValue);
      }
  paramValue = convertFilterList(paramValue);
  filterParams[6].value = paramValue;

}
export function isAllData(val){
  return val === 'All Data'
}
export function addAllValues(arr,paramValue){
  for(let j=0;j<arr.length;j++){
    let item = arr[j];
        paramValue.push( item.value)
  } 
}

export function addValue(value, paramValue){
  paramValue.push(value);
}