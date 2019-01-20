import {
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER,
    GENERATE_FILTER_DATA,
    RESET_FILTERS,
    ADD_FILTERS_TO_COMBINED
} from 'actions/types';
import _ from 'lodash';

let count = 0;
let defaultState = [];
let copyOfState;
let cat;
export default function (state = {
    combined: {
        availableFilters: [],
        valueFilters: []
    },
    markets: {
        availableFilters: [],
        valueFilters: []
    },
    quarters: {
        availableFilters: [],
        valueFilters: []
    },
    geos: {
        availableFilters: [],
        valueFilters: []
    },
    products: {
        availableFilters: [],
        valueFilters: []
    },
    segments: {
        availableFilters: [],
        valueFilters: []
    },
    subscriptions: {
        availableFilters: [],
        valueFilters: []
    },
    routes: {
        availableFilters: [],
        valueFilters: []
    }
}, action) {
    switch (action.type) {
        case GENERATE_FILTER_DATA:
            let quarterFilters = action.payload[0].data;
            let marketsFilters = action.payload[1].data;
            let productsFilters = action.payload[2].data;
            let segmentsFilters = action.payload[3].data;
            let subscriptionsFilters = action.payload[4].data;
            let routesFilters = action.payload[5].data;
            let geosFilters = action.payload[6].data;
            let newGeoState = processDropDownListFilterValue('geos', geosFilters);
            let newMAState = processDropDownListFilterValue('marketAreas', marketsFilters);
            let newProductState = processDropDownListFilterValue('productNames', productsFilters);
            let newRouteState = processDropDownListFilterValue('routeToMarkets', routesFilters);
            let newSegmentsState = processDropDownListFilterValue('segments', segmentsFilters);
            let newSubscriptionState = processDropDownListFilterValue('subscriptionOfferings', subscriptionsFilters);
            let newQuartersState = processDropDownListFilterValue('quarters', quarterFilters);


            let arr = [...newQuartersState, ...newGeoState, ...newMAState, ...newProductState, ...newRouteState, ...newSegmentsState, ...newSubscriptionState];
            let obj =
            {
                combined: {
                    availableFilters: arr,
                    valueFilters: [newQuartersState[newQuartersState.length - 1], newSegmentsState[newSegmentsState.length - 1]]
                },
                markets: {
                    availableFilters: newMAState,
                    valueFilters: []
                },
                quarters: {
                    availableFilters: newQuartersState,
                    valueFilters: []
                },
                geos: {
                    availableFilters: newGeoState,
                    valueFilters: []
                },
                products: {
                    availableFilters: newProductState,
                    valueFilters: []
                },
                segments: {
                    availableFilters: newProductState,
                    valueFilters: []
                },
                subscriptions: {
                    availableFilters: newSubscriptionState,
                    valueFilters: []
                },
                routes: {
                    availableFilters: newRouteState,
                    valueFilters: []
                }
            }
            return obj;
        case ADD_FILTERS_TO_COMBINED:
            copyOfState = JSON.parse(JSON.stringify(state))
            console.log('Howdy from Filters.js: ', action.payload);

          let  returnedFilters =   action.payload.map(item=>{
                _.remove(copyOfState.combined.valueFilters,(obj=> {return obj.index === item } ));
                return _.find(copyOfState.combined.availableFilters,(obj=> {return obj.index === item } ));
            });

            copyOfState.combined.valueFilters = [...copyOfState.combined.valueFilters,...returnedFilters]
            console.log(copyOfState);
            return copyOfState ;
        return state;
        case ADD_MULTI_FILTER:
            copyOfState = JSON.parse(JSON.stringify(state))
            cat = action.payload.category;
            copyOfState.combined.valueFilters.push(action.payload);

            _.find(copyOfState.combined.availableFilters, (item => { return item.index === action.payload }))
            console.log(copyOfState);
            switch (cat) {
                case 'geos':
                    _.remove(copyOfState.geos.valueFilters, item => { return item.index === action.payload.index });
                    copyOfState.geos.valueFilters.push(action.payload);
                    break;
                case 'quarters':
                    _.remove(copyOfState.quarters.valueFilters, item => { return item.value === action.payload.value });
                    _.remove(copyOfState.combined.valueFilters, item => { return item.category === 'quarters' });


                    copyOfState.quarters.valueFilters = [action.payload];
                    if (copyOfState.combined.valueFilters.length > 0) {
                        copyOfState.combined.valueFilters.splice(0, 0, action.payload);

                    } else {
                        copyOfState.combined.valueFilters.push(action.payload);

                    }

                    break;
                case 'subscriptionOfferings':
                    _.remove(copyOfState.subscriptions.valueFilters, item => { return item.value === action.payload.value });

                    copyOfState.subscriptions.valueFilters.push(action.payload);
                    break;
                case 'segments':
                    _.remove(copyOfState.segments.valueFilters, item => { return item.value === action.payload.value });
                    _.remove(copyOfState.combined.valueFilters, item => { return item.category === 'segments' });
                    copyOfState.segments.valueFilters = [action.payload];
                    if (copyOfState.combined.valueFilters.length > 0) {
                        copyOfState.combined.valueFilters.splice(1, 0, action.payload);
                    } else {
                        copyOfState.combined.valueFilters.push(action.payload);
                    }
                    break;
                case 'marketAreas':
                    _.remove(copyOfState.markets.valueFilters, item => { return item.value === action.payload.value });

                    copyOfState.markets.valueFilters.push(action.payload);
                    break;
                case 'productNames':
                    _.remove(copyOfState.products.valueFilters, item => { return item.value === action.payload.value });

                    copyOfState.products.valueFilters.push(action.payload);
                    break;
                case 'routeToMarkets':
                    _.remove(copyOfState.routes.valueFilters, item => { return item.value === action.payload.value });

                    copyOfState.routes.valueFilters.push(action.payload);
                    break;
                default:
                    break;
            }

            return copyOfState;
        case RESET_FILTERS:
            let { defaultQuarter, defaultSegment } = action.payload;
            copyOfState = JSON.parse(JSON.stringify(state))
            copyOfState.geos = [];
            copyOfState.quarters = [{ index: 211, category: "quarters", value: defaultQuarter }];
            copyOfState.subscriptions = [];
            copyOfState.segments = [{ index: 209, category: "segments", value: defaultSegment }];
            copyOfState.markets = [];
            copyOfState.products = [];
            copyOfState.routes = [];
            return copyOfState;
        case REMOVE_MULTI_FILTER:
            copyOfState = JSON.parse(JSON.stringify(state))
            cat = action.payload.category;
            _.remove(copyOfState.combined.valueFilters, item => { return item.index === action.payload.index });

            switch (cat) {
                case 'geos':
                    _.remove(copyOfState.geos.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case 'quarters':
                    _.remove(copyOfState.quarters.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case 'subscriptionOfferings':
                    _.remove(copyOfState.subscriptions.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case 'segments':
                    _.remove(copyOfState.segments.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case 'marketAreas':
                    _.remove(copyOfState.markets.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case 'productNames':
                    _.remove(copyOfState.products.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case 'routeToMarkets':
                    _.remove(copyOfState.routes.valueFilters, item => { return item.index === action.payload.index });
                    break;
                default:
                    return state;
            }
            return copyOfState;
        default:
            return state;
    }
}


function processDropDownListFilterValue(type, data) {

    let newArr = _.uniq(data);

    switch (type) {
        case 'geos':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['geo_code']
                }
            });
            return newArr;
        case 'quarters':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['quarter']
                }
            });

            return newArr;
        case 'marketAreas':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['market_area_code']
                }
            });
            return newArr;
        case 'segments':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['segment_pivot']
                }
            });
            return newArr;
        case 'subscriptionOfferings':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['subscription_offering']
                }
            });
            return newArr;
        case 'productNames':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['product_name']
                }
            });
            return newArr;
        case 'routeToMarkets':
            newArr = newArr.map(item => {
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
