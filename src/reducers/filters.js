import {
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER,
    GENERATE_FILTER_DATA,
    ADD_PREFERENCES_TO_ACTIVE_FILTERS,
    RESET_FILTERS,
    SUBMIT_FILTERS
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
        case SUBMIT_FILTERS:
            copyOfState = JSON.parse(JSON.stringify(state));
            copyOfState.combined.valueFilters = [];
            // For each key in action . payload
            // goes,markets,products,quarters,routes,segments,subscriptions
            Object.keys(action.payload).forEach(item => {
                copyOfState[item].valueFilters = action.payload[item];
                copyOfState.combined.valueFilters = [...copyOfState.combined.valueFilters, ...action.payload[item]];
            });
            return copyOfState;
        case ADD_PREFERENCES_TO_ACTIVE_FILTERS:
            let copyOfState1 = JSON.parse(JSON.stringify(state))
            copyOfState = JSON.parse(JSON.stringify(state))
            copyOfState.quarters.valueFilters.push({ index: 211, category: "quarters", value: '2019-Q1' });
            copyOfState.segments.valueFilters.push({ index: 209, category: "segments", value: 'Digital Media' });
            copyOfState.routes.valueFilters = action.payload.routeFilters;
            copyOfState.markets.valueFilters = action.payload.marketFilters;
            copyOfState.products.valueFilters = action.payload.productFilters;
            copyOfState.subscriptions.valueFilters = action.payload.subscriptionFilters;
            copyOfState.geos.valueFilters = action.payload.geoFilters;
            copyOfState.combined.valueFilters = [...copyOfState.quarters.valueFilters, ...copyOfState.segments.valueFilters, ...copyOfState.routes.valueFilters || {},
            ...copyOfState.markets.valueFilters || {}, ...copyOfState.products.valueFilters || {}, ...copyOfState.subscriptions.valueFilters || {}, ...copyOfState.geos.valueFilters || {}]
            return copyOfState;
        case GENERATE_FILTER_DATA:
            let quarterFilters = action.payload[0].data;
            let marketsFilters = action.payload[1].data;
            let productsFilters = action.payload[2].data;
            let segmentsFilters = action.payload[3].data;
            let subscriptionsFilters = action.payload[4].data;
            let routesFilters = action.payload[5].data;
            let geosFilters = action.payload[6].data;
            let channelFilters = action.payload[7].data;
            let visitFilters = action.payload[8].data;
            let signFilters = action.payload[9].data;
            // let lastTouch = action.payload[10].data;
            // let signUpApp = action.payload[11].data;
            // let productCategory = action.payload[12].data;
            // let pvw = action.payload[13].data;
            // let category = action.payload[14].data;
            // let webSegments = action.payload[15].data;

            let newGeoState = processDropDownListFilterValue('geos', geosFilters);
            let newMAState = processDropDownListFilterValue('markets', marketsFilters);
            let newProductState = processDropDownListFilterValue('products', productsFilters);
            let newRouteState = processDropDownListFilterValue('routes', routesFilters);
            let newSegmentsState = processDropDownListFilterValue('segments', segmentsFilters);
            let newSubscriptionState = processDropDownListFilterValue('subscriptions', subscriptionsFilters);
            let newQuartersState = processDropDownListFilterValue('quarters', quarterFilters);
            let newChannelState = processDropDownListFilterValue('channel', channelFilters);
            let newVisitState = processDropDownListFilterValue('visit', visitFilters);
            let newSignState = processDropDownListFilterValue('sign', signFilters);
            /**
            let newLastTouchState = processDropDownListFilterValue('lastTouch', lastTouch);
            let newSignUpAppState = processDropDownListFilterValue('signUpApp', signUpApp);
            let newProductCategoryState = processDropDownListFilterValue('productCategory', productCategory);
            let newPVWState = processDropDownListFilterValue('pvw', pvw);
            let newCategoryState = processDropDownListFilterValue('category', category);
            let newWebSegmentsState = processDropDownListFilterValue('webSegments', webSegments);

             * 
             */



            let arr = [...newQuartersState, ...newGeoState, ...newMAState, ...newProductState, ...newRouteState, ...newSegmentsState, ...newSubscriptionState,
            ...newChannelState, ...newVisitState, ...newSignState];
            let obj =
            {
                combined: {
                    availableFilters: arr,
                    valueFilters: []
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
                    availableFilters: newSegmentsState,
                    valueFilters: []
                },
                subscriptions: {
                    availableFilters: newSubscriptionState,
                    valueFilters: []
                },
                routes: {
                    availableFilters: newRouteState,
                    valueFilters: []
                },
                channels: {
                    availableFilters: newChannelState,
                    valueFilters: []
                },
                visits: {
                    availableFilters: newVisitState,
                    valueFilters: []
                },
                signupSource: {
                    availableFilters: newSignState,
                    valueFilters: []
                },
                lastTouchChannel: {
                    availableFilters: [],
                    valueFilters: []
                },
                signupApp: {
                    availableFilters: [],
                    valueFilters: []
                },
                productCategory: {
                    availableFilters: [],
                    valueFilters: []
                },
                webSegments: {
                    availableFilters: [],
                    valueFilters: []
                },
                pvw: {
                    availableFilters: [],
                    valueFilters: []
                },
                category: {
                    availableFilters: [],
                    valueFilters: []
                }

            }
            console.log(obj);
            return obj;

        case ADD_MULTI_FILTER:
            copyOfState = JSON.parse(JSON.stringify(state))
            cat = action.payload.category;
            copyOfState.combined.valueFilters.push(action.payload);

            console.log(copyOfState);
            switch (cat) {
                case 'geos':
                    copyOfState.geos.valueFilters = action.payload.quarters;
                    break;
                case 'quarters':
                    _.remove(copyOfState.quarters.valueFilters = action.payload.quarters);


                    copyOfState.quarters.valueFilters = [action.payload];
                    if (copyOfState.combined.valueFilters.length > 0) {
                        copyOfState.combined.valueFilters.splice(0, 0, action.payload);

                    } else {
                        copyOfState.combined.valueFilters.push(action.payload);

                    }

                    break;
                case 'subscriptions':
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
                case 'markets':
                    _.remove(copyOfState.markets.valueFilters, item => { return item.value === action.payload.value });

                    copyOfState.markets.valueFilters.push(action.payload);
                    break;
                case 'products':
                    _.remove(copyOfState.products.valueFilters, item => { return item.value === action.payload.value });

                    copyOfState.products.valueFilters.push(action.payload);
                    break;
                case 'routes':
                    _.remove(copyOfState.routes.valueFilters, item => { return item.value === action.payload.value });

                    copyOfState.routes.valueFilters.push(action.payload);
                    break;
                default:
                    break;
            }

            return copyOfState;
        case RESET_FILTERS:
            let { defaultQuarter, defaultSegment, subscriptionFilters, geoFilters, marketFilters, productFilters, routeFilters } = action.payload;
            copyOfState = JSON.parse(JSON.stringify(state))
            copyOfState.geos.valueFilters = geoFilters
            copyOfState.quarters.valueFilters = [{ index: 211, category: "quarters", value: defaultQuarter }];
            copyOfState.subscriptions.valueFilters = subscriptionFilters;
            copyOfState.segments.valueFilters = [{ index: 209, category: "segments", value: defaultSegment }];
            copyOfState.markets.valueFilters = marketFilters
            copyOfState.products.valueFilters = productFilters
            copyOfState.routes.valueFilters = routeFilters
            copyOfState.combined.valueFilters = [{ index: 211, category: "quarters", value: defaultQuarter }, { index: 209, category: "segments", value: defaultSegment }];
            Object.keys(copyOfState).forEach(item => {
                if (item !== 'combined') {
                    console.log(copyOfState[item])
                    if (copyOfState[item].valueFilters.length !== 0) {
                        copyOfState.combined.valueFilters = [...copyOfState.combined.valueFilters, ...copyOfState[item].valueFilters]
                    }
                }
            })
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
                    copyOfState.quarters.valueFilters = [action.payload]
                    break;
                case 'subscriptions':
                    _.remove(copyOfState.subscriptions.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case 'segments':
                    _.remove(copyOfState.segments.valueFilters, item => { return item.index === action.payload.index });
                    copyOfState.segments.valueFilters = [action.payload]

                    break;
                case 'markets':
                    _.remove(copyOfState.markets.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case 'products':
                    _.remove(copyOfState.products.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case 'routes':
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
        case 'markets':
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
        case 'subscriptions':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['subscription_offering']
                }
            });
            return newArr;
        case 'products':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['product_name']
                }
            });
            return newArr;
        case 'routes':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['route_to_market']
                }
            });
            return newArr;
        case 'channel':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['channel']
                }
            });
            return newArr;
        case 'visit':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['visit_type']
                }
            });
            return newArr;
        case 'sign':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['signup_category']
                }
            });
            return newArr;
        case 'lastTouch':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['last_touch_channel']
                }
            });
            return newArr;
        case 'signUpApp':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['signup_app_category']
                }
            });
            return newArr;
        case 'productCategory':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['product_category']
                }
            });
            return newArr;
        case 'pvw':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['pvw']
                }
            });
            return newArr;
        case 'category':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['category']
                }
            });
            return newArr;
        case 'webSegments':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['web_segments']
                }
            });
            return newArr;
        default:
            return null;
    }



}
// let newLastTouchState = processDropDownListFilterValue('lastTouch', lastTouch);
// let newSignUpAppState = processDropDownListFilterValue('signUpApp', signUpApp);
// let newProductCategoryState = processDropDownListFilterValue('productCategory', productCategory);
// let newPVWState = processDropDownListFilterValue('pvw', pvw);
// let newCategoryState = processDropDownListFilterValue('category', category);
// let newWebSegmentsState = processDropDownListFilterValue('webSegments', webSegments);