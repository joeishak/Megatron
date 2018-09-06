import {
    GENERATE_FILTER_DATA,
    GENERATE_GEO_FILTERS,                   
    GENERATE_MARKET_AREA_FILTERS,           
    GENERATE_PRODUCT_NAME_FILTERS,          
    GENERATE_ROUTE_TO_MARKET_FILTERS,       
    GENERATE_SEGMENTS_FILTERS,              
    GENERATE_SUBSCRIPTION_OFFERINGS_FILTERS,
    GENERATE_QUARTERS_FILTERS              
} from 'actions/types';
import _ from 'lodash';
// import data from '../data.json';

let newState;
let count = 0;
let defaultState = [];

export default function(state = defaultState, action) {
    switch(action.type) {
        case GENERATE_FILTER_DATA:

        console.log('generating filter data');
        let quarterFilters = action.payload[0].data;
        let marketsFilters = action.payload[1].data;
        let productsFilters = action.payload[2].data;
        let segmentsFilters = action.payload[3].data;
        let subscriptionsFilters = action.payload[4].data;
        let routesFilters = action.payload[5].data;
        let geosFilters = action.payload[6].data;


        let newGeoState = processDropDownListFilterValue('geos',geosFilters);
        let newMAState = processDropDownListFilterValue('marketAreas',marketsFilters);
        let newProductState = processDropDownListFilterValue('productNames',productsFilters);
        let newRouteState = processDropDownListFilterValue('routeToMarkets',routesFilters);
        let newSegmentsState = processDropDownListFilterValue('segments',segmentsFilters);
        let newSubscriptionState = processDropDownListFilterValue('subscriptionOfferings',subscriptionsFilters);
        let newQuartersState = processDropDownListFilterValue('quarters',quarterFilters);

        
        newGeoState.unshift({
            index: count++,
            category: 'geos',
            value: 'All Data'
        });
        newMAState.unshift({
            index: count++,
            category: 'marketAreas',
            value: 'All Data'
        });
        newProductState.unshift({
            index: count++,
            category: 'productNames',
            value: 'All Data'
        });
        newRouteState.unshift({
            index: count++,
            category: 'routeToMarkets',
            value: 'All Data'
        });
        newSegmentsState.unshift({
            index: count++,
            category: 'segments',
            value: 'All Data'
        });
        newSubscriptionState.unshift({
            index: count++,
            category: 'subscriptionOfferings',
            value: 'All Data'
        });
        newQuartersState.unshift({
            index: count++,
            category: 'quarters',
            value: 'All Data'
        });

        if(defaultState===[]){
            defaultState = {
                geos: newGeoState,
                marketAreas: newMAState,
                products: newProductState,
                routeToMarkets: newRouteState,
                subscriptionOfferings: newSubscriptionState,
                segments: newSegmentsState,
                quarters: newQuartersState
            }
        }
       
        return {
            geos: newGeoState,
            marketAreas: newMAState,
            products: newProductState,
            routeToMarkets: newRouteState,
            subscriptionOfferings: newSubscriptionState,
            segments: newSegmentsState,
            quarters: newQuartersState
        }
        default: 
            return state;
    }
}

function processDropDownListFilterValue(type, data){

    let newArr = _.uniq(data);
   
    switch(type){
        case 'geos':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item.Geo
            }
        });
        return newArr;
        case 'quarters':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item.Quarter
            }
        });
        
        return newArr;
        case 'marketAreas':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item.market_area_code
            }
        });
        return newArr;
        return;
        case 'segments':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item.segment_pivot
            }
        });
        return newArr;
        case 'subscriptionOfferings':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item.Subscription
            }
        });
        return newArr;
        case 'productNames':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item.ProductName
            }
        });
        return newArr;
        case 'routeToMarkets':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item.RouteToMarket
            }
        });
        return newArr;
    }
    

    
    return newArr;
}
