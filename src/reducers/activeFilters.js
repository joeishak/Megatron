import {
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER,
    UPDATE_MULTI_FILTER_VALUES
} from 'actions/types';
import _ from 'lodash';
export default function(state = {
    geos:[{index: 205, category: "geos", value: "All Data"}],
    quarters:[{index: 211, category: "quarters", value: "All Data"}],
    segments:[{index: 209, category: "segments", value: "All Data"}],
    subscriptions:[{index: 210, category: "subscriptionOfferings", value: "All Data"}],
    markets: [{index: 206, category: "marketAreas", value: "All Data"}],
    routes:[{index: 208, category: "routeToMarkets", value: "All Data"}],
    products:[{index: 207, category: "productNames", value: "All Data"}]
}, action) {
    let copyOfState;
    let cat;
    switch(action.type) {

        case  ADD_MULTI_FILTER:
           copyOfState = {...state};
            console.log(action.payload);
            // console.log(action.payload);
             cat = action.payload.category;
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

            }
            
            // console.log({...copyOfState})
            return {...copyOfState};
        case UPDATE_MULTI_FILTER_VALUES:
            return state;
        case REMOVE_MULTI_FILTER:
            let filterToBeRemoved = action.payload;
             copyOfState = {...state};    
            // console.log('The filter you want to remove', filterToBeRemoved);
            // console.log('The new copy of state',newFilters); 
             cat= action.payload.category;
            // console.log('copy of state',copyOfState);
          
            switch(cat){
                case 'geos':
                copyOfState.geos =[{index: 205, category: "geos", value: "All Data"}];
                break;
                case 'quarters':
                copyOfState.quarters =[{index: 211, category: "quarters", value: "All Data"}];
                break;

                case 'subscriptionOfferings':
                copyOfState.subscriptions =[{index: 210, category: "subscriptionOfferings", value: "All Data"}];
                break;

                case 'segmentPivots':
                copyOfState.segments =[{index: 209, category: "segments", value: "All Data"}];
                break;

                case 'marketAreas':
                copyOfState.markets =[{index: 206, category: "marketAreas", value: "All Data"}];
                break;
                
                case 'productNames':
                copyOfState.products =[{index: 207, category: "productNames", value: "All Data"}];
                break;

                case 'routeToMarkets':
                copyOfState.routes =[{index: 208, category: "routeToMarkets", value: "All Data"}];
                break;

            }
            // _.remove(newFilters,(n)=>{
            //     return n.index===filterToBeRemoved;
            // });
            // console.log('New filters after removing the match',copyOfState);
            return {...copyOfState};
        default: 
            return state;
    }
}