import {
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER,
    UPDATE_MULTI_FILTER_VALUES
} from 'actions/types';
import _ from 'lodash';
export default function(state = {
    // geos:[{index: 205, category: "geos", value: "All Data"}],
    // quarters:[{index: 211, category: "quarters", value: "All Data"}],
    // segments:[{index: 209, category: "segments", value: "All Data"}],
    // subscriptions:[{index: 210, category: "subscriptionOfferings", value: "All Data"}],
    // markets: [{index: 206, category: "marketAreas", value: "All Data"}],
    // routes:[{index: 208, category: "routeToMarkets", value: "All Data"}],
    // products:[{index: 207, category: "productNames", value: "All Data"}]
}, action) {
    let copyOfState;
    let cat;
    switch(action.type) {

        case  ADD_MULTI_FILTER:
            copyOfState = JSON.parse(JSON.stringify(state))  

               
                cat = action.payload.category;
                if(action.payload.value==='All Data'){
                    // console.log('copy of state',copyOfState);
                    switch(cat){
                        case 'geos':
                        copyOfState.geos =[action.payload];
                        break;
                        case 'quarters':
                        copyOfState.quarters =[action.payload];

                        break;
                        case 'subscriptionOfferings':
                        copyOfState.subscriptions =[action.payload];
                        break;
                        case 'segments':
                        copyOfState.segments =[action.payload];
                        break;
                        case 'marketAreas':
                        copyOfState.markets =[action.payload];
                        break;
                        case 'productNames':
                        copyOfState.products =[action.payload];
                        break;
                        case 'routeToMarkets':
                        copyOfState.routes =[action.payload];
                        break;
                        default: 
                        break;

                    }
                } else {
                    switch(cat){
                        case 'geos':
                        _.remove(copyOfState.geos, item => {return item.value==='All Data'});

                        copyOfState.geos.push(action.payload);
                        break;
                        case 'quarters':
                        _.remove(copyOfState.quarters, item => {return item.value==='All Data'});

                        copyOfState.quarters = [action.payload];

                        break;
                        case 'subscriptionOfferings':
                        _.remove(copyOfState.subscriptions, item => {return item.value==='All Data'});

                        copyOfState.subscriptions.push(action.payload);
                        break;
                        case 'segments':
                        _.remove(copyOfState.segments, item => {return item.value==='All Data'});

                        copyOfState.segments=[action.payload];
                        break;
                        case 'marketAreas':
                        _.remove(copyOfState.markets, item => {return item.value==='All Data'});

                        copyOfState.markets.push(action.payload);
                        break;
                        case 'productNames':
                        _.remove(copyOfState.products, item => {return item.value==='All Data'});

                        copyOfState.products.push(action.payload);
                        break;
                        case 'routeToMarkets':
                        _.remove(copyOfState.routes, item => {return item.value==='All Data'});

                        copyOfState.routes.push(action.payload);
                        break;
                        default: 
                        break;

                    }
                }
               
           
            
            // console.log({...copyOfState})
            return copyOfState;
        case UPDATE_MULTI_FILTER_VALUES:
            return state;
        case REMOVE_MULTI_FILTER:
             copyOfState = JSON.parse(JSON.stringify(state))  
            // console.log('The filter you want to remove', filterToBeRemoved);
            // console.log('The new copy of state',newFilters); 
             cat= action.payload.category;
            // console.log('copy of state',copyOfState);
            // console.log(copyOfState === state);
          
            switch(cat){
                case 'geos':
                _.remove(copyOfState.geos, item => {return item.index===action.payload.index});

                if(copyOfState.geos.length=== 0){
                    copyOfState.geos =[{index: 205, category: "geos", value: "All Data"}];

                }
                break;
                case 'quarters':
                _.remove(copyOfState.quarters, item => {return item.index===action.payload.index});
                if(copyOfState.quarters.length=== 0){

                copyOfState.quarters =[{index: 211, category: "quarters", value: "2017-Q1"}];
                }
                break;
                case 'subscriptionOfferings':
                _.remove(copyOfState.subscriptions, item => {return item.index===action.payload.index});
                if(copyOfState.subscriptions.length=== 0){

                copyOfState.subscriptions =[{index: 210, category: "subscriptionOfferings", value: "All Data"}];
                }
                break;
                case 'segments':
                _.remove(copyOfState.segments, item => {return item.index===action.payload.index});
                if(copyOfState.segments.length=== 0){

                copyOfState.segments =[{index: 209, category: "segments", value: "Digital Media"}];
                }
                break;
                case 'marketAreas':
                _.remove(copyOfState.markets, item => {return item.index===action.payload.index});
                if(copyOfState.markets.length=== 0){

                copyOfState.markets =[{index: 206, category: "marketAreas", value: "All Data"}];
                }
                break;
                case 'productNames':
                _.remove(copyOfState.products, item => {return item.index===action.payload.index});
                if(copyOfState.products.length=== 0){

                copyOfState.products =[{index: 207, category: "productNames", value: "All Data"}];
                }
                break;
                case 'routeToMarkets':
                _.remove(copyOfState.routes, item => {return item.index===action.payload.index});
                if(copyOfState.routes.length=== 0){

                copyOfState.routes =[{index: 208, category: "routeToMarkets", value: "All Data"}];
                }
                break;
                default: 
                return state;
            }
            return copyOfState;
        default: 
            return state;
    }}