import {
  
} from 'actions/types';
import _ from 'lodash';

let count = 0;
let defaultState = [];

export default function(state = defaultState, action) {
    switch(action.type) {
        
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
                value: item['geo_code']
            }
        });
        return newArr;
        case 'quarters':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item['quarter']
            }
        });
        
        return newArr;
        case 'marketAreas':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item['market_area_code']
            }
        });
        return newArr;
        case 'segments':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item['segment_pivot']
            }
        });
        return newArr;
        case 'subscriptionOfferings':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item['subscription_offering']
            }
        });
        return newArr;
        case 'productNames':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item['product_name']
            }
        });
        return newArr;
        case 'routeToMarkets':
        newArr = newArr.map(item =>{
            return {
                index: count++,
                category: type,
                value: item['route_to_market']
            }
        });
        return newArr;
        default: 
        return null;
    }
    

    
}
