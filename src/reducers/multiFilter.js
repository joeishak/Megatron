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
import data from '../data.json';
<<<<<<< HEAD
=======
export default function(state = [], action) {
    switch(action.type) {
        case  GENERATE_FILTER_DATA:

        
        console.log(action.payload);
    
            let count = 0;
            // Get all property values
            let quarters = _.map(data,function(row) { return row.quarter});
            let geos = _.map(data,function(row) { return row.geo_code});
            let products= _.map(data,function(row) { return row.product_name});
            let subscriptionOfferings= _.map(data,function(row) { return row.subscription_offering});
            let marketAreas= _.map(data,function(row) { return row.market_area_code});
            let routeToMarkets= _.map(data,function(row) { return row.route_to_market});
            let segments= _.map(data,function(row) { return row.web_segment});
>>>>>>> 768c4c37bd29100e9b70069f881f669b01273858

let newState;
let count = 0;

export default function(state = [], action) {
    switch(action.type) {
        case GENERATE_GEO_FILTERS:
        
            let newGeoState = processDropDownListFilterValue('geos',action.payload.data);
            newGeoState.unshift({
                index: count++,
                category: 'geos',
                value: 'All Data'
            });
            return {...state,geos: newGeoState};

        case GENERATE_MARKET_AREA_FILTERS:
            
            let newMAState = processDropDownListFilterValue('marketAreas',action.payload.data);
            newMAState.unshift({
                index: count++,
                category: 'marketAreas',
                value: 'All Data'
            });
            return {...state,marketAreas: newMAState};
        case GENERATE_PRODUCT_NAME_FILTERS:
            
            let newProductState = processDropDownListFilterValue('productNames',action.payload.data);
            newProductState.unshift({
                index: count++,
                category: 'products',
                value: 'All Data'
            });
            console.log(newProductState);
            return {...state,products: newProductState};

        case GENERATE_ROUTE_TO_MARKET_FILTERS:
            
            let newRouteState = processDropDownListFilterValue('routeToMarkets',action.payload.data);
            newRouteState.unshift({
                index: count++,
                category: 'routeToMarkets',
                value: 'All Data'
            });
            return {...state,routeToMarkets: newRouteState};    
        case GENERATE_SEGMENTS_FILTERS:
            let newSegmentsState = processDropDownListFilterValue('segments',action.payload.data);
            newSegmentsState.unshift({
                index: count++,
                category: 'segments',
                value: 'All Data'
            });
            return {...state,segments: newSegmentsState};  
        case GENERATE_SUBSCRIPTION_OFFERINGS_FILTERS:
            
            let newSubscriptionState = processDropDownListFilterValue('subscriptionOfferings',action.payload.data);
            newSubscriptionState.unshift({
                index: count++,
                category: 'subscriptionOfferings',
                value: 'All Data'
            });
            return {...state,subscriptionOfferings: newSubscriptionState};  
        case GENERATE_QUARTERS_FILTERS:
            
         console.log('Getting Quarters');
            let newQuartersState = processDropDownListFilterValue('quarters',action.payload.data);
            newQuartersState.unshift({
                index: count++,
                category: 'quarters',
                value: 'All Data'
            });
            
            return {...state,quarters: newQuartersState};  
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

// case  GENERATE_FILTER_DATA:
    
//             // Get all property values
//             let quarters = _.map(data,function(row) { return row.quarter});
//             // let geos = _.map(data,function(row) { return row.geo_code});
//             let products= _.map(data,function(row) { return row.product_name});
//             let subscriptionOfferings= _.map(data,function(row) { return row.subscription_offering});
//             let marketAreas= _.map(data,function(row) { return row.market_area_code});
//             let routeToMarkets= _.map(data,function(row) { return row.route_to_market});
//             let segments= _.map(data,function(row) { return row.web_segment});

//             //Get unique property values
//             quarters = _.uniq(quarters);
//             // geos     = _.uniq(geos);
//             products = _.uniq(products);
//             subscriptionOfferings = _.uniq(subscriptionOfferings);
//             marketAreas = _.uniq(marketAreas);
//             routeToMarkets = _.uniq(routeToMarkets);
//             segments = _.uniq(segments);
            
      
//             // index the filter data
//             quarters = quarters.map(quarter =>{
//                 return {
//                     index: count++,
//                     category: 'quarters',
//                     value: quarter
//                 }
//             });
//             //  geos = geos.map(geo =>{
//             //     return {
//             //         index: count++,
//             //         category: 'geos',
//             //         value: geo
//             //     }
//             // })
//              products = products.map(product =>{
//                 return {
//                     index: count++,
//                     category: 'products',
//                     value: product
//                 }
//             });
//              subscriptionOfferings = subscriptionOfferings.map(sub =>{
//                 return {
//                     index: count++,
//                     category: 'subscriptionOfferings',
//                     value: sub
//                 }
//             });
//              marketAreas = marketAreas.map(ma =>{
//                 return {
//                     index: count++,
//                     category: 'marketAreas',
//                     value: ma
//                 }
//             });
//              routeToMarkets = routeToMarkets.map(route =>{
//                 return {
//                     index: count++,
//                     category: 'routeToMarkets',
//                     value: route
//                 }
//             });
//              segments = segments.map(segment =>{
//                 return {
//                     index: count++,
//                     category: 'segments',
//                     value: segment
//                 }
//             });

//             // Add All data to beginning of each
//             quarters.unshift({
//                 index: count++,
//                 category: 'quarters',
//                 value: 'All Data'
//             });
//             // geos.unshift({
//             //     index: count++,
//             //     category: 'geos',
//             //     value: 'All Data'
//             // });
//             products.unshift({
//                 index: count++,
//                 category: 'products',
//                 value: 'All Data'
//             });
//             subscriptionOfferings.unshift({
//                 index: count++,
//                 category: 'subscriptionOfferings',
//                 value: 'All Data'
//             });
//             marketAreas.unshift({
//                 index: count++,
//                 category: 'marketAreas',
//                 value: 'All Data'
//             });
//             routeToMarkets.unshift({
//                 index: count++,
//                 category: 'routeToMarkets',
//                 value: 'All Data'
//             });
//             segments.unshift({
//                 index: count++,
//                 category: 'segments',
//                 value: 'All Data'
//             });
           
            
//              newState = {
//                 quarters: quarters,
//                 geos: geos,
//                 products: products,
//                 subscriptionOfferings:subscriptionOfferings,
//                 marketAreas:marketAreas,
//                 routeToMarkets:routeToMarkets,
//                 segments:segments
//             }

//             return newState;