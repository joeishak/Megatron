// Import Types
import {
    ADD_MULTI_FILTER,
    GENERATE_FILTER_DATA,
    ADD_PREFERENCES_TO_ACTIVE_FILTERS,
    RESET_FILTERS,
    SUBMIT_FILTERS,
    SUBMIT_SUB_FILTERS
} from 'actions/types';
// Import Dimensions
import { DIMENSIONS } from '../Constants/consts';
// Import Lodash
import _ from 'lodash';
// Import Utilities
import * as utils from '../utilities.js';


// Reducer Variables
let count = 0;
let defaultState = [];
let copyOfState;
let cat;
// Extract Variables from Dimensions
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

// Reducer Function with a default state set for filters
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
    },
    signupCategory: {
        availableFilters: [],
        valueFilters: []
    },
    filtersAreLoaded: false,
    preferencesAreAdded: false,
    isDefaultFilters: true,
    globalFiltersSubmitted: false, 
    subFiltersSubmitted: false,
    resetFilters: false,
    filtersAreDefault: false
}, action) {
    switch (action.type) {
        // Submit sub and global filters to 
        case SUBMIT_FILTERS:
            // Make a copy of state
            copyOfState = JSON.parse(JSON.stringify(state));
            // Reset the combined value filters
            copyOfState.combined.valueFilters = [];
            // For each key in action . payload
            // goes,market,product,quarter,route,segment,subscription
            Object.keys(action.payload).forEach(item => {
                // Set the value filter for the item which matches this key
                copyOfState[item].valueFilters = action.payload[item];
                // Set the value filter for the combined filters
                copyOfState.combined.valueFilters = [...copyOfState.combined.valueFilters, ...action.payload[item]];
            });
            //If the length of the arrays vary, the user submitted a new filter
            if (copyOfState.combined.valueFilters.length !== state.combined.valueFilters.length) {
                //then return the newest state
                return { ...copyOfState, isDefaultFilters: false, globalFiltersSubmitted: true };
            } else { //The length of the arrays are the same
                let lengthChecker = [];
                //For each value in the new array, check to see if it exists in the old array
                lengthChecker = copyOfState.combined.valueFilters.map(item => {
                    return _.find(state.combined.valueFilters, (filter => {
                        return filter.index === item.index}))
                })

                // Find any new values
                let foundNewFilters = _.findIndex(lengthChecker, (item => {
                    return item === undefined;
                }))

                // If there are new values
                if (foundNewFilters !== -1) {
                    // Return state with isDefaultFilters set to false
                    return { ...copyOfState,isDefaultFilters: false, }
                } else
                // Return state
                return state;
            }

        case ADD_PREFERENCES_TO_ACTIVE_FILTERS:
            // Get the current quarter from Utilities Function
            let quarter = utils.getCurrentQuarter();
            console.log('Current Quarter ', action.payload);
            // Make a copy of state
            let copyOfState1 = JSON.parse(JSON.stringify(state))
            let nonDmSegs = action.payload.nondmsegments;
            // Set state value filters to preferences
            copyOfState = JSON.parse(JSON.stringify(state))
            copyOfState.quarter.valueFilters=[{ index: 211, category: QUARTER, value: action.payload.defaultQuarter }];
            copyOfState.segment.valueFilters.push({ index: 209, category: SEGMENT, value: action.payload.defaultQuarter });
            copyOfState.market.valueFilters = action.payload.marketFilters;
            copyOfState.geo.valueFilters = action.payload.geoFilters;
            copyOfState.route.valueFilters = action.payload.routeFilters;
            copyOfState.subscription.valueFilters = action.payload.subscriptionFilters;
            copyOfState.signupCategory.valueFilters = action.payload.signupsource;
            // Set other filters to default state
            copyOfState.websegment.valueFilters.push({ index: 187, category: WEBSEGMENT, value: 'DIGITAL MEDIA'});
            copyOfState.lastTouchChannel.valueFilters.push({ index: 134, category: LTC, value: 'ALL' });
            copyOfState.visits.valueFilters.push({ index: 114, category: VISITS, value: 'All Visits' });
            copyOfState.channelMU.valueFilters.push({ index: 213, category: CHANNELMU, value: 'ALL' });
            copyOfState.nonDMSegment.valueFilters= nonDmSegs;
            // Create the combined values filters
            copyOfState.combined.valueFilters = [...copyOfState.quarter.valueFilters, ...copyOfState.segment.valueFilters, ...copyOfState.route.valueFilters || {},
            ...copyOfState.market.valueFilters || {}, ...copyOfState.product.valueFilters || {}, ...copyOfState.subscription.valueFilters || {}, ...copyOfState.geo.valueFilters || {},
            ...copyOfState.nonDMSegment.valueFilters || {}]
            // Perform a check on all filter dimensions to determine if filters are in a default State
          let isDefault = copyOfState.quarter.valueFilters[0].value===state.quarter.valueFilters[0].value
            && copyOfState.segment.valueFilters[0].valueFilters===state.segment.valueFilters[0].valueFilters &&
            copyOfState.geo.valueFilters.length  === 0 && copyOfState.market.valueFilters.length === 0 && copyOfState.subscription.valueFilters.length === 0 
            && copyOfState.route.valueFilters.length ===0 && copyOfState.signupCategory.valueFilters.length === 0 && copyOfState.nonDMSegment.valueFilters.length === 12;
            console.log('Filters ARe Default',isDefault,nonDmSegs );
            return {...copyOfState, preferencesAreAdded: true, filtersAreDefault: isDefault};
        case GENERATE_FILTER_DATA:
            // Make a copy of state
         let newState = JSON.parse(JSON.stringify(state))

            // Map InfoBurst Promise with all filters to variables
            let quarterFilter = action.payload[0].data;
            let marketFilter = action.payload[1].data;
            let productFilter = action.payload[2].data;
            let segmentFilter = action.payload[3].data;
            let subscriptionFilter = action.payload[4].data;
            let routeFilter = action.payload[5].data;
            let geoFilter = action.payload[6].data;
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
            let pvw = action.payload[22].data

            // Call processDropDownList on all filters
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
            let pvwFilters = processDropDownListFilterValue('pvw', pvw);





            // Create the combined value filters
            let arr = [...newquarterState, ...newgeotate, ...newMAState, ...newproducttate, ...newroutetate, ...newsegmentState, ...newsubscriptiontate,
            ...newChannelState, ...newVisitState, ...newCloud, ...newConv, ...newDiscBuy, ...newMobileDesk, ...newVsRepeat, ...newProdName, ...newSignApp,
            ...newSignCat, ...newWeb, ...chanMU, ...chanPM, segNonDM, ...pvwFilters];
            // Create the filters state object
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
                    valueFilters: [{ index: 211, category: QUARTER, value: newquarterState[0].value }]
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
                    valueFilters: [{ index: 209, category: SEGMENT, value: 'DIGITAL MEDIA' }]
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
                    valueFilters: [{ index: 229, category: NONDMSEGMENT, value: 'ACROBAT CC' },
                    { index: 230, category: NONDMSEGMENT, value: 'ACROBAT DC' },
                    { index: 231, category: NONDMSEGMENT, value: 'CSMB ETLA' },
                    { index: 233, category: NONDMSEGMENT, value: 'HED' },
                    { index: 232, category: NONDMSEGMENT, value: 'K12+EEA' },
                    { index: 234, category: NONDMSEGMENT, value: 'INDIVIDUAL' },
                    { index: 236, category: NONDMSEGMENT, value: 'OTHER' },
                    { index: 237, category: NONDMSEGMENT, value: 'PHOTOGRAPHY' },
                    { index: 239, category: NONDMSEGMENT, value: 'STOCK' },
                    { index: 240, category: NONDMSEGMENT, value: 'STUDENT' },
                    { index: 241, category: NONDMSEGMENT, value: 'TEAM' },
                    { index: 243, category: NONDMSEGMENT, value: 'UNKNOWN' },]
                },
                pvw: {
                    availableFilters: pvwFilters,
                    valueFilters: []
                }
            }

            // Return Filters State
            return {...newState,...obj, defaultState: obj, isDefaultFilters: true, filtersAreLoaded: true};

        case RESET_FILTERS:
            // Extract Preferences from Payload
            let { defaultQuarter, defaultSegment, subscriptionFilters, geoFilters, marketFilters, productFilters, routeFilters,signupsource,nondmsegments } = action.payload;
            // Make a copy of State
            copyOfState = JSON.parse(JSON.stringify(state))
            // Set filter group value filters to corresponding preference/ default state
            copyOfState.geo.valueFilters = geoFilters;
            copyOfState.quarter.valueFilters = [{ index: 211, category: "quarter", value: defaultQuarter }];
            copyOfState.subscription.valueFilters = subscriptionFilters;
            copyOfState.segment.valueFilters = [{ index: 209, category: "segment", value: defaultSegment }];
            copyOfState.market.valueFilters = marketFilters;
            copyOfState.product.valueFilters = productFilters;
            copyOfState.route.valueFilters = routeFilters;
            copyOfState.channelPM.valueFilters = [];
            copyOfState.channelMU.valueFilters = [];
            copyOfState.signupCategory.valueFilters = signupsource;
            copyOfState.nonDMSegment.valueFilters  =nondmsegments;
            copyOfState.convType.valueFilters = [];
            copyOfState.visits.valueFilters = [];
            copyOfState.lastTouchChannel.valueFilters = [];
            copyOfState.websegment.valueFilters = [];
            copyOfState.websegment.valueFilters.push({ index: 187, category: WEBSEGMENT, value: 'DIGITAL MEDIA' });
            copyOfState.lastTouchChannel.valueFilters.push({ index: 129, category: LTC, value: 'ALL' });
            copyOfState.visits.valueFilters.push({ index: 111, category: VISITS, value: 'All Visits' });
            copyOfState.channelMU.valueFilters.push({ index: 112, category: CHANNELMU, value: 'ALL' });
            copyOfState.combined.valueFilters = [/* { index: 211, category: "quarter", value: defaultQuarter }, { index: 209, category: "segment", value: defaultSegment } */];
            // For Each key in filters
            Object.keys(copyOfState).forEach(item => {
                // if the item is not combined
                if (item !== 'combined') {
                    // if the item has a valueFilters child
                    if(copyOfState[item].valueFilters){
                        // If the valueFilters child is an array
                        if(Array.isArray(copyOfState[item].valueFilters)){
                            // If the array has elements and is not empty
                            if (copyOfState[item].valueFilters.length !== 0) {
                                // Add each of those elements to the combined filter values
                                copyOfState.combined.valueFilters = [...copyOfState.combined.valueFilters, ...copyOfState[item].valueFilters]
                            }
                        }
                    }
                }
            })
            // Return State
            return {...copyOfState, isDefaultFilters: false, filtersAreDefault: false};
        
        default:
            return state;
    }
}

/**
 * Function that creates the filter value object
 * A filter value object has 3 children: value, index, and category
 * The function accepts the type === category and the data === value
 * @param {*} type 
 * @param {*} data 
 */
function processDropDownListFilterValue(type, data) {

    let newArr = _.uniq(data);

    switch (type) {
        case GEO:
            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['geo_code'],
                    label: item['geo_code']
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
            case PVW:

            newArr = newArr.map(item => {
                return {
                    index: count++,
                    category: type,
                    value: item['pwv']
                }
            });
            return newArr;
        default:
            return null;
    }



}
