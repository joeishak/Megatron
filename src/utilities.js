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
export function generateFilterParams(filterParams, filtersApplied, allFilters, _activeParams){
  let paramValue;

  //Quarters
    if(filtersApplied.quarters){
      paramValue = []
      // Find Index of Object
      let index = _.findIndex(_activeParams, {category:'quarters'});
      // If its all data
        if(isAllData(_activeParams[index].value)){
          console.log('Value is All Data, Getting All Filters',allFilters.quarters);
          //Add all the values from allFilters to param value
          addAllValues(allFilters.quarters,paramValue);
        } else {
          console.log('Value is Not All Data, Getting specific Filter',_activeParams[index].value);
          addValue(_activeParams[index].value, paramValue);
        }
    } else {
        paramValue = []
        addAllValues(allFilters.quarters,paramValue);
    }
    paramValue = convertFilterList(paramValue);
    filterParams[0].value = paramValue;


  //Products
  if(filtersApplied.products){
    paramValue = []
    // Find Index of Object
    let index = _.findIndex(_activeParams, {category:'productNames'});
    // If its all data
      if(isAllData(_activeParams[index].value)){
        console.log('Value is All Data, Getting All Filters',allFilters.products);
        //Add all the values from allFilters to param value
        addAllValues(allFilters.products,paramValue);
      } else {
        console.log('Value is Not All Data, Getting specific Filter',_activeParams[index].value);
        addValue(_activeParams[index].value, paramValue);
      }
  } else {
      paramValue = []
      addAllValues(allFilters.products,paramValue);
  }
  paramValue = convertFilterList(paramValue);
  filterParams[1].value = paramValue;


  //Geos
  if(filtersApplied.geos){
    paramValue = []
    // Find Index of Object
    let index = _.findIndex(_activeParams, {category:'geos'});
    // If its all data
      if(isAllData(_activeParams[index].value)){
        console.log('Value is All Data, Getting All Filters',allFilters.geos);
        //Add all the values from allFilters to param value
        addAllValues(allFilters.geos,paramValue);
      } else {
        console.log('Value is Not All Data, Getting specific Filter',_activeParams[index].value);
        addValue(_activeParams[index].value, paramValue);
      }
  } else {
      paramValue = []
      addAllValues(allFilters.geos,paramValue);
  }
  paramValue = convertFilterList(paramValue);
  filterParams[2].value = paramValue;


  //Subscriptions
  if(filtersApplied.subscriptions){
    paramValue = []
    // Find Index of Object
    let index = _.findIndex(_activeParams, {category:'subscriptionOfferings'});
    // If its all data
      if(isAllData(_activeParams[index].value)){
        console.log('Value is All Data, Getting All Filters',allFilters.subscriptionOfferings);
        //Add all the values from allFilters to param value
        addAllValues(allFilters.subscriptionOfferings,paramValue);
      } else {
        console.log('Value is Not All Data, Getting specific Filter',_activeParams[index].value);
        addValue(_activeParams[index].value, paramValue);
      }
  } else {
      paramValue = []
      addAllValues(allFilters.subscriptionOfferings,paramValue);
  }
  paramValue = convertFilterList(paramValue);
  filterParams[3].value = paramValue;

   //Market Areas
   if(filtersApplied.markets){
    paramValue = []
    // Find Index of Object
    let index = _.findIndex(_activeParams, {category:'marketAreas'});
    // If its all data
      if(isAllData(_activeParams[index].value)){
        console.log('Value is All Data, Getting All Filters',allFilters.marketAreas);
        //Add all the values from allFilters to param value
        addAllValues(allFilters.marketAreas,paramValue);
      } else {
        console.log('Value is Not All Data, Getting specific Filter',_activeParams[index].value);
        addValue(_activeParams[index].value, paramValue);
      }
  } else {
      paramValue = []
      addAllValues(allFilters.marketAreas,paramValue);
  }
  paramValue = convertFilterList(paramValue);
  filterParams[4].value = paramValue;

  // Route To Markets
  if(filtersApplied.routes){
    paramValue = []
    // Find Index of Object
    let index = _.findIndex(_activeParams, {category:'routeToMarkets'});
    // If its all data
      if(isAllData(_activeParams[index].value)){
        console.log('Value is All Data, Getting All Filters',allFilters.routeToMarkets);
        //Add all the values from allFilters to param value
        addAllValues(allFilters.routeToMarkets,paramValue);
      } else {
        console.log('Value is Not All Data, Getting specific Filter',_activeParams[index].value);
        addValue(_activeParams[index].value, paramValue);
      }
  } else {
      paramValue = []
      addAllValues(allFilters.routeToMarkets,paramValue);
  }
  paramValue = convertFilterList(paramValue);
  filterParams[5].value = paramValue;

  // Sgements
  if(filtersApplied.segments){
    paramValue = []
    // Find Index of Object
    let index = _.findIndex(_activeParams, {category:'segments'});
    // If its all data
      if(isAllData(_activeParams[index].value)){
        console.log('Value is All Data, Getting All Filters',allFilters.segments);
        //Add all the values from allFilters to param value
        addAllValues(allFilters.segments,paramValue);
      } else {
        console.log('Value is Not All Data, Getting specific Filter',_activeParams[index].value);
        addValue(_activeParams[index].value, paramValue);
      }
  } else {
      paramValue = []
      addAllValues(allFilters.segments,paramValue);
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