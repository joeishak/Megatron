import {
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER,
    GENERATE_FILTER_DATA,
    ADD_PREFERENCES_TO_ACTIVE_FILTERS,
    RESET_FILTERS,
    SUBMIT_FILTERS
} from 'actions/types';
import { DIMENSIONS } from '../Constants/consts';
import _ from 'lodash';

let count = 0;
let defaultState = [];
let copyOfState;
let cat;
const { GEO,
    MARKET,
    PRODUCT,
    SEGMENT,
    SUBSCRIPTION,
    QUARTER,
    ROUTE,
    VISITSTATUS,
    SIGNSOURCE,
    SIGNAPP,
    SIGNCAT,
    PRODUCTCAT,
    WEBSEGMENT,
    PVW,
    CATEGORY,
    LTC,
    NEWVSREPEAT,
    MOBILEVSDESKTOP,
    CONVERSION,
    VISITS,
    CHANNELMU,
    CHANNELPM,
    NONDMSEGMENT
} = DIMENSIONS;
export default function (state = {

    market: {
        availableFilters: [],
        valueFilters: []
    },
    quarter: {
        availableFilters: [],
        valueFilters: []
    },
    geo: {
        availableFilters: [],
        valueFilters: []
    },
    product: {
        availableFilters: [],
        valueFilters: []
    },
    segment: {
        availableFilters: [],
        valueFilters: []
    },
    subscription: {
        availableFilters: [],
        valueFilters: []
    },
    route: {
        availableFilters: [],
        valueFilters: []
    },
    websegment: {
        availableFilters: [],
        valueFilters: []
    },
    lastTouchChannel: {
        availableFilters: [],
        valueFilters: []
    },
    visits: {
        availableFilters: [],
        valueFilters: []
    },
    nonDMSegment: {
        availableFilters: [],
        valueFilters: []
    }
}, action) {
    switch (action.type) {
        case SUBMIT_FILTERS:
            copyOfState = JSON.parse(JSON.stringify(state));
            console.log('FILTERS', action.payload);
            copyOfState.combined.valueFilters = [];
            // For each key in action . payload
            // goes,market,product,quarter,route,segment,subscription
            Object.keys(action.payload).forEach(item => {
                copyOfState[item].valueFilters = action.payload[item];
                // console.log(copyOfState[item], action.payload[item]);
                copyOfState.combined.valueFilters = [...copyOfState.combined.valueFilters, ...action.payload[item]];
            });
            //If the length of the arrays vary, the user submitted a new filter
            if (copyOfState.combined.valueFilters.length !== state.combined.valueFilters.length) {
                //then return the newest state
                console.log('New Filter Submitted');
                return { ...copyOfState };
            } else { //The length of the arrays are the same
                let lengthChecker = [];
                //For each value in the new array, check to see if it exists in the old array
                lengthChecker = copyOfState.combined.valueFilters.map(item => {
                    return _.find(state.combined.valueFilters, (filter => {
                        return filter.index === item.index}))
                })

                console.log(lengthChecker);
                let foundNewFilters = _.findIndex(lengthChecker, (item => {
                    return item === undefined;
                }))

                console.log(foundNewFilters);
                if (foundNewFilters !== -1) {
                    return { ...copyOfState }
                }
                return state;
            }
        // return state;
        case ADD_PREFERENCES_TO_ACTIVE_FILTERS:
            let copyOfState1 = JSON.parse(JSON.stringify(state))
            copyOfState = JSON.parse(JSON.stringify(state))
            copyOfState.quarter.valueFilters.push({ index: 211, category: QUARTER, value: '2019-Q2' });
            copyOfState.segment.valueFilters.push({ index: 209, category: SEGMENT, value: 'Digital Media' });
            copyOfState.websegment.valueFilters.push({ index: 187, category: WEBSEGMENT, value: 'DIGITAL MEDIA' });
            copyOfState.lastTouchChannel.valueFilters.push({ index: 134, category: LTC, value: 'ALL' });
            copyOfState.visits.valueFilters.push({ index: 114, category: VISITS, value: 'All Visits' });
            copyOfState.channelMU.valueFilters.push({ index: 213, category: CHANNELMU, value: 'ALL' });


            copyOfState.route.valueFilters = action.payload.routeFilters;
            copyOfState.market.valueFilters = action.payload.marketFilters;
            copyOfState.product.valueFilters = action.payload.productFilters;
            copyOfState.subscription.valueFilters = action.payload.subscriptionFilters;
            copyOfState.geo.valueFilters = action.payload.geoFilters;
            copyOfState.combined.valueFilters = [...copyOfState.quarter.valueFilters, ...copyOfState.segment.valueFilters, ...copyOfState.route.valueFilters || {},
            ...copyOfState.market.valueFilters || {}, ...copyOfState.product.valueFilters || {}, ...copyOfState.subscription.valueFilters || {}, ...copyOfState.geo.valueFilters || {}]
            return copyOfState;
        case GENERATE_FILTER_DATA:
            let quarterFilter = action.payload[0].data;
            let marketFilter = action.payload[1].data;
            let productFilter = action.payload[2].data;
            let segmentFilter = action.payload[3].data;
            let subscriptionFilter = action.payload[4].data;
            let routeFilter = action.payload[5].data;
            let geoFilter = action.payload[6].data;
            // let channelFilters = action.payload[7].data;
            let visitFilters = action.payload[8].data;
            let CloudTypeFilters = action.payload[9].data
            let ConvTypeFilters = action.payload[10].data
            let DiscoverVsBuyFilters = action.payload[11].data
            let LastTouchChannelFilters = action.payload[12].data
            let MobileVsDesktopFilters = action.payload[13].data
            let NewVsRepeatFilters = action.payload[14].data
            let ProdNameFilters = action.payload[15].data
            let SignupAppFilters = action.payload[16].data
            let SignupCatFilters = action.payload[17].data
            let WebSegFilters = action.payload[18].data
            let chanMuFilters = action.payload[19].data
            let chanPmFilters = action.payload[20].data
            let nonDMFilters = action.payload[21].data
            console.log(action.payload);


            let newgeotate = processDropDownListFilterValue(GEO, geoFilter);
            let newMAState = processDropDownListFilterValue(MARKET, marketFilter);
            let newproducttate = processDropDownListFilterValue(PRODUCT, productFilter);
            let newroutetate = processDropDownListFilterValue(ROUTE, routeFilter);
            let newsegmentState = processDropDownListFilterValue(SEGMENT, segmentFilter);
            let newsubscriptiontate = processDropDownListFilterValue(SUBSCRIPTION, subscriptionFilter);
            let newquarterState = processDropDownListFilterValue(QUARTER, quarterFilter);
            let newVisitState = processDropDownListFilterValue(VISITS, visitFilters);

            let newCloud = processDropDownListFilterValue('cloud', CloudTypeFilters);
            let newConv = processDropDownListFilterValue(CONVERSION, ConvTypeFilters);
            let newDiscBuy = processDropDownListFilterValue('discoverbuy', DiscoverVsBuyFilters);
            let newChannelState = processDropDownListFilterValue(LTC, LastTouchChannelFilters);
            let newMobileDesk = processDropDownListFilterValue(MOBILEVSDESKTOP, MobileVsDesktopFilters);
            let newVsRepeat = processDropDownListFilterValue(NEWVSREPEAT, NewVsRepeatFilters);
            let newProdName = processDropDownListFilterValue('prodName', ProdNameFilters);
            let newSignApp = processDropDownListFilterValue('signUpApp', SignupAppFilters);
            let newSignCat = processDropDownListFilterValue(SIGNCAT, SignupCatFilters);
            let newWeb = processDropDownListFilterValue(WEBSEGMENT, WebSegFilters);
            let chanMU = processDropDownListFilterValue(CHANNELMU, chanMuFilters);
            let chanPM = processDropDownListFilterValue(CHANNELPM, chanPmFilters);
            let segNonDM = processDropDownListFilterValue(NONDMSEGMENT, nonDMFilters);







            let arr = [...newquarterState, ...newgeotate, ...newMAState, ...newproducttate, ...newroutetate, ...newsegmentState, ...newsubscriptiontate,
            ...newChannelState, ...newVisitState, ...newCloud, ...newConv, ...newDiscBuy, ...newMobileDesk, ...newVsRepeat, ...newProdName, ...newSignApp,
            ...newSignCat, ...newWeb, ...chanMU, ...chanPM, segNonDM];
            let obj =
            {
                combined: {
                    availableFilters: arr,
                    valueFilters: []
                },
                market: {
                    availableFilters: newMAState,
                    valueFilters: []
                },
                quarter: {
                    availableFilters: newquarterState,
                    valueFilters: []
                },
                geo: {
                    availableFilters: newgeotate,
                    valueFilters: []
                },
                product: {
                    availableFilters: newproducttate,
                    valueFilters: []
                },
                segment: {
                    availableFilters: newsegmentState,
                    valueFilters: []
                },
                subscription: {
                    availableFilters: newsubscriptiontate,
                    valueFilters: []
                },
                route: {
                    availableFilters: newroutetate,
                    valueFilters: []
                },
                lastTouchChannel: {
                    availableFilters: newChannelState,
                    valueFilters: []
                },
                visits: {
                    availableFilters: newVisitState,
                    valueFilters: []
                },
                signupCategory: {
                    availableFilters: newSignCat,
                    valueFilters: []
                },

                signupApp: {
                    availableFilters: newSignApp,
                    valueFilters: []
                },
                productName: {
                    availableFilters: newProdName,
                    valueFilters: []
                },
                websegment: {
                    availableFilters: newWeb,
                    valueFilters: []
                },
                cloudType: {
                    availableFilters: newCloud,
                    valueFilters: []
                },
                convType: {
                    availableFilters: newConv,
                    valueFilters: []
                },
                mobileDesktop: {
                    availableFilters: newMobileDesk,
                    valueFilters: []
                },
                discoverBuy: {
                    availableFilters: newDiscBuy,
                    valueFilters: []
                },
                newVsRepeat: {
                    availableFilters: newVsRepeat,
                    valueFilters: []
                },
                channelMU: {
                    availableFilters: chanMU,
                    valueFilters: []
                },
                channelPM: {
                    availableFilters: chanPM,
                    valueFilters: []
                },
                nonDMSegment: {
                    availableFilters: segNonDM,
                    valueFilters: []
                }
            }
            // console.log(obj);
            return obj;

        case ADD_MULTI_FILTER:
            copyOfState = JSON.parse(JSON.stringify(state))
            cat = action.payload.category;
            copyOfState.combined.valueFilters.push(action.payload);

            // console.log(copyOfState);
            switch (cat) {
                case GEO:
                    copyOfState.geo.valueFilters = action.payload.quarter;
                    break;
                case QUARTER:
                    _.remove(copyOfState.quarter.valueFilters = action.payload.quarter);


                    copyOfState.quarter.valueFilters = [action.payload];
                    if (copyOfState.combined.valueFilters.length > 0) {
                        copyOfState.combined.valueFilters.splice(0, 0, action.payload);

                    } else {
                        copyOfState.combined.valueFilters.push(action.payload);

                    }

                    break;
                case SUBSCRIPTION:
                    _.remove(copyOfState.subscription.valueFilters, item => { return item.value === action.payload.value });

                    copyOfState.subscription.valueFilters.push(action.payload);
                    break;
                case SEGMENT:
                    _.remove(copyOfState.segment.valueFilters, item => { return item.value === action.payload.value });
                    _.remove(copyOfState.combined.valueFilters, item => { return item.category === SEGMENT });
                    copyOfState.segment.valueFilters = [action.payload];
                    if (copyOfState.combined.valueFilters.length > 0) {
                        copyOfState.combined.valueFilters.splice(1, 0, action.payload);
                    } else {
                        copyOfState.combined.valueFilters.push(action.payload);
                    }
                    break;
                case MARKET:
                    _.remove(copyOfState.market.valueFilters, item => { return item.value === action.payload.value });

                    copyOfState.market.valueFilters.push(action.payload);
                    break;
                case PRODUCT:
                    _.remove(copyOfState.product.valueFilters, item => { return item.value === action.payload.value });

                    copyOfState.product.valueFilters.push(action.payload);
                    break;
                case ROUTE:
                    _.remove(copyOfState.route.valueFilters, item => { return item.value === action.payload.value });

                    copyOfState.route.valueFilters.push(action.payload);
                    break;
                default:
                    break;
            }

            return copyOfState;
        case RESET_FILTERS:
            let { defaultQuarter, defaultSegment, subscriptionFilters, geoFilters, marketFilters, productFilters, routeFilters } = action.payload;
            copyOfState = JSON.parse(JSON.stringify(state))
            copyOfState.geo.valueFilters = geoFilters
            copyOfState.quarter.valueFilters = [{ index: 211, category: "quarter", value: defaultQuarter }];
            copyOfState.subscription.valueFilters = subscriptionFilters;
            copyOfState.segment.valueFilters = [{ index: 209, category: "segment", value: defaultSegment }];
            copyOfState.market.valueFilters = marketFilters
            copyOfState.product.valueFilters = productFilters
            copyOfState.route.valueFilters = routeFilters
            copyOfState.channelPM.valueFilters = [];
            copyOfState.channelMU.valueFilters = [];
            copyOfState.signupCategory.valueFilters = [];
            copyOfState.nonDMSegment.valueFilters = [];
            copyOfState.convType.valueFilters = [];
            copyOfState.visits.valueFilters = [];
            copyOfState.lastTouchChannel.valueFilters = [];
            copyOfState.websegment.valueFilters = [];

            
            copyOfState.websegment.valueFilters.push({ index: 187, category: WEBSEGMENT, value: 'DIGITAL MEDIA' });
            copyOfState.lastTouchChannel.valueFilters.push({ index: 129, category: LTC, value: 'ALL' });
            copyOfState.visits.valueFilters.push({ index: 111, category: VISITS, value: 'All Visits' });
            copyOfState.channelMU.valueFilters.push({ index: 112, category: CHANNELMU, value: 'ALL' });

            copyOfState.combined.valueFilters = [{ index: 211, category: "quarter", value: defaultQuarter }, { index: 209, category: "segment", value: defaultSegment }];
            Object.keys(copyOfState).forEach(item => {
                if (item !== 'combined') {
                    // console.log(copyOfState[item])
                    if (copyOfState[item].valueFilters.length !== 0) {
                        copyOfState.combined.valueFilters = [...copyOfState.combined.valueFilters, ...copyOfState[item].valueFilters]
                    }
                }
            })
            return {...copyOfState};
        case REMOVE_MULTI_FILTER:
            copyOfState = JSON.parse(JSON.stringify(state))
            cat = action.payload.category;
            _.remove(copyOfState.combined.valueFilters, item => { return item.index === action.payload.index });

            switch (cat) {
                case GEO:
                    _.remove(copyOfState.geo.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case QUARTER:
                    _.remove(copyOfState.quarter.valueFilters, item => { return item.index === action.payload.index });
                    copyOfState.quarter.valueFilters = [action.payload]
                    break;
                case SUBSCRIPTION:
                    _.remove(copyOfState.subscription.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case SEGMENT:
                    _.remove(copyOfState.segment.valueFilters, item => { return item.index === action.payload.index });
                    copyOfState.segment.valueFilters = [action.payload]

                    break;
                case MARKET:
                    _.remove(copyOfState.market.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case PRODUCT:
                    _.remove(copyOfState.product.valueFilters, item => { return item.index === action.payload.index });

                    break;
                case ROUTE:
                    _.remove(copyOfState.route.valueFilters, item => { return item.index === action.payload.index });
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
        case GEO:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['geo_code']
                }
            });
            return newArr;
        case QUARTER:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['quarter']
                }
            });

            return newArr;
        case MARKET:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['market_area_code']
                }
            });
            return newArr;
        case SEGMENT:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['segment_pivot']
                }
            });
            return newArr;
        case SUBSCRIPTION:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['subscription_offering']
                }
            });
            return newArr;
        case PRODUCT:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['product_category']
                }
            });
            return newArr;
        case ROUTE:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['route_to_market']
                }
            });
            return newArr;
        case LTC:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['last_touch_channel']
                }
            });
            return newArr;
        case VISITS:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['visit_type']
                }
            });
            return newArr;
        case SIGNCAT:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['signup_category']
                }
            });
            return newArr;

        case 'signUpApp':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['signup_app']
                }
            });
            return newArr;
        case 'prodName':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['product_name']
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
        case WEBSEGMENT:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['web_segment']
                }
            });
            return newArr;
        case 'cloud':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['cloud_type']
                }
            });
            return newArr;
        case CONVERSION:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['conversion_type']
                }
            });
            return newArr;
        case 'discoverbuy':
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['discover_vs_buy']
                }
            });
            return newArr;
        case MOBILEVSDESKTOP:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['mobile_or_desktop']
                }
            });
            return newArr;
        case NEWVSREPEAT:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['new_or_repeat']
                }
            });
            return newArr;
        case CHANNELMU: newArr = newArr.map(item => {
            return {
                index: count++,
                category: type,
                value: item['channel']
            }
        });
            return newArr;
        case CHANNELPM:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['channel']
                }
            });
            return newArr;
        case NONDMSEGMENT:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['segment_pivot']
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
// let newWebsegmentState = processDropDownListFilterValue('websegment', websegment);