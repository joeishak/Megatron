import _ from 'lodash';
import {
    Infoburst
} from './environmentParams';
import axios from 'axios';
import * as actions from 'actions';
import { dispatch } from 'rxjs/internal/observable/range';
import { DIMENSIONS } from './Constants/consts';



const token = 'Basic ' + btoa(Infoburst.user + ':' + Infoburst.pass);
const headers = {
    'Authorization': token,
    'Accept': '*/*'
};
let responseArray = [];
let promiseArr = [];
let filterParams = [
    {
        prompt: 'quarterFilters',
        value: ''
    },
    {
        prompt: 'productFilters',
        value: ''
    },
    {
        prompt: 'geoFilters',
        value: ''
    },
    {
        prompt: 'subscriptionFilters',
        value: ''
    },
    {
        prompt: 'maFilters',
        value: ''
    },
    {
        prompt: 'routeFilters',
        value: ''
    },
    {
        prompt: 'segmentFilters',
        value: ''
    }
];
let trafficParams = [
    {
        prompt: 'geoFilters',
        value: ''
    },
    {
        prompt: 'quarterFilters',
        value: ''
    },
    {
        prompt: 'maFilters',
        value: ''
    },
    {
        prompt: 'WebSegFilters',
        value: ''
    },
    {
        prompt: 'VisitTypeFilters',
        value: ''
    },
    {
        prompt: 'LastTouchChannelFilters',
        value: ''
    },
    {
        prompt: 'ConvTypeFilters',
        value: ''
    }
];
let mktgParams = [
    {
        prompt: 'geoFilters',
        value: ''
    },
    {
        prompt: 'quarterFilters',
        value: ''
    },
    {
        prompt: 'maFilters',
        value: ''
    },
    {
        prompt: 'segment',
        value: ''
    },
    {
        prompt: 'channelPM',
        value: ''
    }
]

let group1Params = [
    {
        prompt: 'quarterFilters',
        value: ''
    },
    {
        prompt: 'geoFilters',
        value: ''
    }];
let group2Params = [
    {
        prompt: 'quarterFilters',
        value: ''
    },
    {
        prompt: 'geoFilters',
        value: ''
    },
    {
        prompt: 'maFilters',
        value: ''
    }];
let group3Params = [
    {
        prompt: 'quarterFilters',
        value: ''
    },
    {
        prompt: 'geoFilters',
        value: ''
    },
    {
        prompt: 'maFilters',
        value: ''
    },
    {
        prompt: 'subscriptionFilters',
        value: ''
    }];
let group4Params = [
    {
        prompt: 'quarterFilters',
        value: ''
    },
    {
        prompt: 'geoFilters',
        value: ''
    },
    {
        prompt: 'maFilters',
        value: ''
    },
    {
        prompt: 'subscriptionFilters',
        value: ''
    },
    {
        prompt: 'productFilters',
        value: ''
    }];
let group5Params = [
    {
        prompt: 'quarterFilters',
        value: ''
    },
    {
        prompt: 'geoFilters',
        value: ''
    },
    {
        prompt: 'maFilters',
        value: ''
    },
    {
        prompt: 'segmentFilters',
        value: ''
    }];
let group6Params = [
    {
        prompt: 'quarterFilters',
        value: ''
    },
    {
        prompt: 'geoFilters',
        value: ''
    },
    {
        prompt: 'maFilters',
        value: ''
    },
    {
        prompt: 'segmentFilters',
        value: ''
    },
    {
        prompt: 'subscriptionFilters',
        value: ''
    }];;
let group7Params = [
    {
        prompt: 'quarterFilters',
        value: ''
    },
    {
        prompt: 'geoFilters',
        value: ''
    },
    {
        prompt: 'maFilters',
        value: ''
    },
    {
        prompt: 'segmentFilters',
        value: ''
    },
    {
        prompt: 'subscriptionFilters',
        value: ''
    },
    {
        prompt: 'productFilters',
        value: ''
    },];;
let group8Params = [
    {
        prompt: 'quarterFilters',
        value: ''
    },
    {
        prompt: 'geoFilters',
        value: ''
    },
    {
        prompt: 'maFilters',
        value: ''
    },
    {
        prompt: 'routeFilters',
        value: ''
    },
    {
        prompt: 'segmentFilters',
        value: ''
    },
    {
        prompt: 'subscriptionFilters',
        value: ''
    },
    {
        prompt: 'productFilters',
        value: ''
    },];

/**
 * 
 * @param {*} arrayList 
 */
export function convertFilterList(arrayList) {
    return "'" + arrayList.join("', '") + "' ";
}
/**
 * 
 */
export function removeAllDataValueFromFilterArray(obj) {
    _.remove(obj.quarter, (item) => {
        return item.value === "All Data"
    })
    _.remove(obj.product, (item) => {
        return item.value === "All Data"
    })
    _.remove(obj.segements, (item) => {
        return item.value === "All Data"
    })
    _.remove(obj.subscriptionOfferings, (item) => {
        return item.value === "All Data"
    })
    _.remove(obj.marketAreas, (item) => {
        return item.value === "All Data"
    })
    _.remove(obj.geo, (item) => {
        return item.value === "All Data"
    })
    _.remove(obj.routeTomarket, (item) => {
        return item.value === "All Data"
    })

    return obj;
}
/**
 *
 * @param {*} arr
 */
export function findIfFilterIsApplied(arr) {
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
        PRODUCTCAT,
        WEBSEGMENT,
        PVW,
        CATEGORY,
        LTC,
        NEWVSREPEAT,
        MOBILEVSDESKTOP,
        CONVERSION,
        VISITS
    } = DIMENSIONS;
    let filtersApplied = {
        quarter: false,
        geo: false,
        product: false,
        route: false,
        segment: false,
        subscription: false,
        market: false
    };
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        switch (item.category) {
            case QUARTER:
                filtersApplied.quarter = true;
                break;
            case 'productNames':
                filtersApplied.product = true;
                break;
            case 'geo':
                filtersApplied.geo = true;
                break;
            case 'subscriptionOfferings':
                filtersApplied.subscription = true;
                break;
            case 'marketAreas':
                filtersApplied.market = true;
                break;
            case 'routeTomarket':
                filtersApplied.route = true;
                break;
            case SEGMENT:
                filtersApplied.segment = true;
                break;
            default:
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
export function generateFilterParams(type, filterParams, allFilters, _activeParams) {

    /***
     * Group 1: Paid Media Spend
     *        -- Quarter, Geo
     * Group 2: InProduct NPS, New Qfms, 28Day New UQFM to QFM%, Cumulative UQFM to QFM Conversion, 
     *          Cumulative QFMS, Cumulative UQFMS, Marketable Universe, New UQFMS, Paid Media Sourced UQFMS,
     *          UQFM Conversion
     *        -- Quarter, Geo, Market
     * Group 3: %Learn Discovery, % PAid User Success, Engagement Index, Paid User MAU, WK 0  WAU Rate, WK4 WAU Rate
     *        -- Quarter, Geo, Market, Subscription
     * Group 4: F2P Conversion
     *        -- Quarter, Geo, Market, Subscription, Product
     * Group 5: QTR UI Rate, QTF Payment Failure Rate, Conversion , Repeat Use MAu, Traffic, Bounce Rate
     *        -- Quarter, Geo, Market, Segment, 
     * Group 6: EOT Retention Rate, QTF Fin Retention Rate
     *        -- Quaret, Geo, Market Area, Segment, Subscription
     * Group 7: D2P Conversion, Marketing Sourced ARR, 
     *        -- Quarter, Geo, Market,Segment, Subscription,Product
     * Group 8: Net New Arr, Gross New Arr, Cancellations, Renewal
     *        -- All Filters
     
     */
    switch (type) {
        case 1:
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);

            break;
        case 2:
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.marketAreas);

            break;
        case 3:
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.subscription, allFilters.subscriptionOfferings);
            break;
        case 4:
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.subscription, allFilters.subscriptionOfferings);
            filterParams[4].value = getParamValues(_activeParams.product, allFilters.product);

            break;
        //Traffic
        case 5:
            filterParams[0].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[1].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.websegment, allFilters.websegment);
            filterParams[4].value = getParamValues(_activeParams.visits, allFilters.visits);
            filterParams[5].value = getParamValues(_activeParams.lastTouchChannel, allFilters.lastTouchChannel);
            filterParams[6].value = getParamValues(_activeParams.convType, allFilters.convType);
            break;
            //MKTG - Discover
        case 6:
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.segment, allFilters.segment);
            filterParams[4].value = getParamValues(_activeParams.channelPM, allFilters.channelPM);
            break;
        case 7:
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.segment, allFilters.segment);
            filterParams[4].value = getParamValues(_activeParams.subscription, allFilters.subscriptionOfferings);
            filterParams[5].value = getParamValues(_activeParams.product, allFilters.product);

            break;
        default:
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.route, allFilters.routeTomarket);
            filterParams[4].value = getParamValues(_activeParams.segment, allFilters.segment);
            filterParams[5].value = getParamValues(_activeParams.subscription, allFilters.subscriptionOfferings);
            filterParams[6].value = getParamValues(_activeParams.product, allFilters.product);

            break;
    }
}

/**
 *
 * @param {*} allFilters
 * @param {*} availableFilters
 */

//  Object.keys(obj).map(e => obj[e])
export function getAllFilters(allFilters, availableFilters) {
    allFilters = {
        quarter: Object.keys(availableFilters.quarter).map(e => availableFilters.quarter[e]),
        geo: Object.keys(availableFilters.geo).map(e => availableFilters.geo[e]),
        marketAreas: Object.keys(availableFilters.marketAreas).map(e => availableFilters.marketAreas[e]),
        product: Object.keys(availableFilters.product).map(e => availableFilters.product[e]),
        segment: Object.keys(availableFilters.segment).map(e => availableFilters.segment[e]),
        subscriptionOfferings: Object.keys(availableFilters.subscriptionOfferings).map(e => availableFilters.subscriptionOfferings[e]),
        routeTomarket: Object.keys(availableFilters.routeTomarket).map(e => availableFilters.routeTomarket[e]),
    }
}

/**
 *
 * @param {*} activeParams
 * @param {*} allFilters
 */
export function getParamValues(activeParams, allFilters) {
    let paramValue;

    if (activeParams.length === 0) {
        // Add all the values from allFilters except for All Data to the Param Value
        paramValue = [];
        allFilters.forEach(item => {
            paramValue.push(item.value);
        })
        paramValue = convertFilterList(paramValue);
        return paramValue;
    } else {
        paramValue = [];
        activeParams.forEach(item => {
            paramValue.push(item.value);
        })
        paramValue = convertFilterList(paramValue);
        return paramValue;
    }
}

export function initiateFilterDataRequests() {

    responseArray = [];
    promiseArr = [];
    const maResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.MarketFilters, {
        headers: headers,
        responseType: 'text'
    })
    const segementsResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.SegmentFilters, {
        headers: headers,
        responseType: 'text'
    });
    const subscriptionResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.SubscriptionFilters, {
        headers: headers,
        responseType: 'text'
    });
    const routeResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.RouteFilters, {
        headers: headers,
        responseType: 'text'
    });
    const quarterResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.QuarterFilters, {
        headers: headers,
        responseType: 'text'
    });
    const productResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.ProductFilters, {
        headers: headers,
        responseType: 'text'
    });
    const geoResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.GeoFilters, {
        headers: headers,
        responseType: 'text'
    });
    const channelResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.ChannelFilters, {
        headers: headers,
        responseType: 'text'
    });
    const visitResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.VisitFilters, {
        headers: headers,
        responseType: 'text'
    });

    const CloudTypeFilters = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.CloudTypeFilters, {
        headers: headers,
        responseType: 'text'
    });

    const ConvTypeFilters = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.ConvTypeFilters, {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverVsBuyFilters = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.DiscoverVsBuyFilters, {
        headers: headers,
        responseType: 'text'
    });

    const LastTouchChannelFilters = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.LastTouchChannelFilters, {
        headers: headers,
        responseType: 'text'
    });

    const MobileVsDesktopFilters = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.MobileVsDesktopFilters, {
        headers: headers,
        responseType: 'text'
    });
    const NewVsRepeatFilters = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.NewVsRepeatFilters, {
        headers: headers,
        responseType: 'text'
    });
    const ProdNameFilters = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.ProdNameFilters, {
        headers: headers,
        responseType: 'text'
    });

    const SignupAppFilters = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.SignupAppFilters, {
        headers: headers,
        responseType: 'text'
    });

    const SignupCatFilters = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.SignupCatFilters, {
        headers: headers,
        responseType: 'text'
    });

    const WebSegFilters = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.WebSegFilters, {
        headers: headers,
        responseType: 'text'
    });

    const ChannelMUFilters = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.ChannelMUFilters, {
        headers: headers,
        responseType: 'text'
    });

    const ChannelPMFilters = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.ChannelPMFilters, {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(quarterResponse, maResponse, productResponse, segementsResponse,
        subscriptionResponse, routeResponse, geoResponse, channelResponse, visitResponse,
        CloudTypeFilters, ConvTypeFilters, DiscoverVsBuyFilters, LastTouchChannelFilters,
        MobileVsDesktopFilters, NewVsRepeatFilters, ProdNameFilters, SignupAppFilters, SignupCatFilters, WebSegFilters,ChannelMUFilters,ChannelPMFilters);
    let promiseArr1 = Promise.all(responseArray);
    return promiseArr1;
}
export function requestPrimaryData(allFilters, _parameters) {
    responseArray = [];

    filterParams[1].value = _parameters.product.length > 0 ? _parameters.product[0].value : allFilters.product;
    filterParams[2].value = _parameters.geo.length > 0 ? _parameters.geo[0].value : allFilters.geo;
    filterParams[3].value = _parameters.subscription.length > 0 ? _parameters.subscription[0].value : allFilters.subscriptios;
    filterParams[4].value = _parameters.market.length > 0 ? _parameters.market[0].value : allFilters.market;
    filterParams[5].value = _parameters.route.length > 0 ? _parameters.route[0].value : allFilters.route;

    //Generate the filter list 
    console.log('Utils 556: ', allFilters, _parameters)
    generateFilterParams(2, group2Params, allFilters, _parameters);
    generateFilterParams(5, trafficParams, allFilters, _parameters);
    generateFilterParams(8, group8Params, allFilters, _parameters);


    //turn each list into a string

    let params2 = group2Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');

    let params5 = trafficParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');

    let params8 = group8Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');


    // console.log(params1,params2,params3);
    //Primary 
    const primaryFinancial = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.financeXDCID + Infoburst.summaryQueryNames.FinancialG8ActualTargetPrimary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    console.log("FEtching Dsicover: ", Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficPrimary + params5 + '&json=1')
    const primaryDiscover = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficPrimary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const primaryTry = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryActualTargetPrimary + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // //Secondary
    // const primaryBuy = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.buyXDCID + Infoburst.summaryQueryNames.FinancialActualTargetSecondary + params5 + '&json=1', {
    //     headers: headers,
    //     responseType: 'text'
    // });
    // const primaryUse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.JourneysG2SecondaryActualTarget + params5 + '&json=1', {
    //     headers: headers,
    //     responseType: 'text'
    // });
    // const primaryRenew = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.JourneysG2SecondaryActualTarget + params5 + '&json=1', {
    //     headers: headers,
    //     responseType: 'text'
    // });

    responseArray.push(primaryFinancial, primaryDiscover, primaryTry);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}

export function requestFinanceSecondaryData(allFilters, _parameters) {
    responseArray = [];



    // filterParams[1].value = _parameters.product.length > 0 ? _parameters.product[0].value : allFilters.product;
    // filterParams[2].value = _parameters.geo.length > 0 ? _parameters.geo[0].value : allFilters.geo;
    // filterParams[3].value = _parameters.subscription.length > 0 ? _parameters.subscription[0].value : allFilters.subscriptios;
    // filterParams[4].value = _parameters.market.length > 0 ? _parameters.market[0].value : allFilters.market;
    // filterParams[5].value = _parameters.route.length > 0 ? _parameters.route[0].value : allFilters.route;

    generateFilterParams(8, group8Params, allFilters, _parameters);

    let params8 = group8Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    const financeSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.financeXDCID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.financeXDCID + Infoburst.summaryQueryNames.FinancialG8Multichart + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeUnitsMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.financeXDCID + Infoburst.summaryQueryNames.FinancialG8Units + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeQTDTotals = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.financeXDCID + Infoburst.summaryQueryNames.FinancialG8QTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.financeXDCID + Infoburst.summaryQueryNames.FinancialG8GeoQtd + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.financeXDCID + Infoburst.summaryQueryNames.FinancialG8MarketQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeSegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.financeXDCID + Infoburst.summaryQueryNames.FinancialG8SegmentQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeRouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.financeXDCID + Infoburst.summaryQueryNames.FinancialG8RouteQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.financeXDCID + Infoburst.summaryQueryNames.FinancialG8ProductQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(financeSecondary, financeMultichart, financeUnitsMultichart, financeQTDTotals, financeGeoQTD, financeMarketQTD, financeSegmentQTD, financeRouteQTD, financeProductQTD);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}


export function requestTrafficSecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(5, trafficParams, allFilters, _parameters);
    let params5 = trafficParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');


    const DiscoverG5Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const DiscoverG5Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficMutlichart + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD

    const DiscoverG5QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Geo QTD

    const DiscoverG5GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficGeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Market QTD

    const DiscoverG5MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficMAQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    // Web Segment QTD

    const DiscoverG5SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficWebSegQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });



    //Last touch channelQTD 

    const DiscoverGLTCQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficLTCQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    //Conversion Type QTD

    const DiscoverG5ConvQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficConvTypeQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Mobile Vs Desktop QTD
    const DiscoverMobDesk = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficMobDeskQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    //NEw Vs Repeat QTD
    const DiscoverNewRep = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficNewRepQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(
        DiscoverG5Secondary,
        DiscoverG5Multichart,
        DiscoverG5QTD,
        DiscoverG5GeoQTD,
        DiscoverG5MarketQTD,
        DiscoverG5SegmentQTD,
        DiscoverGLTCQTD,
        DiscoverG5ConvQTD,
        DiscoverMobDesk,
        DiscoverNewRep
    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}

export function requestMKTGSecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(6, mktgParams, allFilters, _parameters);
    let params5 = trafficParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');


    const DiscoverG5Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const DiscoverG5Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficMutlichart + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD

    const DiscoverG5QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Geo QTD

    const DiscoverG5GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficGeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Market QTD

    const DiscoverG5MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficMAQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    // Web Segment QTD

    const DiscoverG5SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficWebSegQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });



   

    responseArray.push(
        DiscoverG5Secondary,
        DiscoverG5Multichart,
        DiscoverG5QTD,
        DiscoverG5GeoQTD,
        DiscoverG5MarketQTD,
        DiscoverG5SegmentQTD,
      
    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}



export function requestTrySecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(2, group2Params, allFilters, _parameters);


    let params2 = group2Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    console.log('params2', params2)


    // Secondary

    const TrySecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryG2ActualTargetSecondary + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryMutlichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryG2MultiChartQuery + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryG2QTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryGeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryG2GeoQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryMarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryG2MarketAreaQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });



    responseArray.push(
        TrySecondary, TryMutlichart, TryQTD, TryGeoQTD, TryMarketQTD
    );
    console.log(responseArray);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;

}

export function requestBuySecondaryData(allFilters, _parameters) {
 
}


export async function addUserToDB(user) {
    responseArray = [];
    promiseArr = [];
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'NewUser',
        "columnNames": 'true',
        "params": {
            "sub": user.sub,
            "fName": user.given_name,
            "lName": user.family_name,
            "email": user.email
        }
    }
    axios.post(Infoburst.dbQuery, body, {
        headers: headers,
        responseType: 'text'
    })
        .then((res) => {
            console.log('posting user: ', res);
        })
        .catch((err) => {
            console.log('posting user error: ', err);

        })
}

export function includes(container, value) {
    // console.log(container, value);
    let returnValue = false;
    if (container !== null && container !== undefined && value !== null && value !== undefined) {
        let n = container.indexOf(value);
        if (n >= 0) {
            returnValue = true;
        }
    }
    return returnValue;
}

// Heartbeat
export function getHeartbeat() {
    return axios.get(Infoburst.sysInfo, {
        headers: headers,
        responseType: 'text'
    });
}

export function convertFilterListForDBQuery(arrayList) {
    return arrayList.join(", ");
}

// Fetch Comments
export function fetchComments(metricId) {
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'fetchComments',
        "columnNames": 'true',
        "params": {
            "metric": metricId
        }
    };
    console.log(Infoburst.dbQuery, body, { headers: headers, responseType: 'text' })

    const res1 = axios.post(Infoburst.dbQuery, body, { headers: headers, responseType: 'text' }).then((response) => {

        if (response !== []) {

            const commentIdsArray = response.data.map(ele => { return ele.id; });
            const params = convertFilterListForDBQuery(commentIdsArray);
            let responseBody = {
                "conn": `${Infoburst.appXDCID}`,
                "qry": 'fetchReplies',
                "columnNames": 'true',
                "params": {
                    "params": params
                }
            };
            const replies = axios.post(Infoburst.dbQuery, responseBody, { headers: headers, responseType: 'text' }).then((res) => {
                const commentsComplete = { comment: response.data, replies: res.data };
                return commentsComplete;
            });

            return replies;
        } else {
            return [];
        }

    });
    // console.log(res1);
    return res1;
}

export function fetchCommentsCount() {
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'fetchCommentsCount',
        "columnNames": 'true',
        "params": {}
    };

    return axios.post(Infoburst.dbQuery, body, { headers: headers, responseType: 'text' }).then((res) => {
        // console.log(res.data);
        return res.data;
    });
}

export function postComment(params) {
    // INSERT INTO Comments values('@userId', @metricId, CONVERT(datetime,'@postDateTime'), '@comment');
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'postComments',
        "columnNames": 'true',
        "params": {
            "userId": params.userId,
            "metricId": params.metricId,
            "postDateTime": params.postDateTime,
            "comment": params.comment
        }
    }

    return axios.post(Infoburst.dbQuery, body, {
        headers: headers,
        responseType: 'text'
    }).then((res) => {
        console.log(res);
        return res;
    });
}


export function postReply(params) {
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'postReply',
        "columnNames": 'true',
        "params": {
            "userId": params.userId,
            "commentId": params.commentId,
            "postDateTime": params.postDateTime,
            "comment": params.comment
        }
    }

    return axios.post(Infoburst.dbQuery, body, {
        headers: headers,
        responseType: 'text'
    }).then((res) => {
        return res;
    });
}


export function removeComment(params) {
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'deleteComment',
        "columnNames": 'true',
        "params": {
            "id": parseInt(params.id)
        }
    }

    console.log(body);
    return axios.post(Infoburst.dbQuery, body, {
        headers: headers
    }).then((res) => {
        console.log(res);

        return res;
    });
}

export function requestUserSettings(sub) {
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'GetUserSettings',
        "columnNames": 'true',
        "params": {
            "sub": sub
        }
    }

    return axios.post(Infoburst.dbQuery, body, {
        headers: headers,
        responseType: 'text'
    })
}

export function postUserSettings(params) {
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'UpdateSettings',
        "columnNames": 'true',
        "params": {
            "quarter": params.quarter,
            "segment": params.segment,
            "user": params.user,
            "product": params.product,
            "geo": params.geo,
            "subscription": params.subscription,
            "route": params.route,
            "market": params.market
        }
    }

    return axios.post(Infoburst.dbQuery, body, {
        headers: headers,
        responseType: 'text'
    });
}
export function postMultiValueSettings(activeFilters, setting, availableFilters) {
    let body = {
        "conn": '18',
        "qry": 'NewMultivalueSetting',
        params: {
            "setting": '',
            "filter": '',
            "type": ''
        }

    }
    if (activeFilters.geo[0].value === 'All Data') {
        availableFilters.geo.map(item => {
            body.params = {
                "setting": setting,
                "filter": item.value,
                "type": 'geo'
            }
            return axios.post(Infoburst.dbQuery, body, {
                headers: headers,
                responseType: 'text'
            })
        })
    } else {
        activeFilters.geo.map(item => {
            body.params = {
                "setting": setting,
                "filter": item.value,
                "type": 'geo'
            }
            return axios.post(Infoburst.dbQuery, body, {
                headers: headers,
                responseType: 'text'
            })
        })
    }


    return axios.post(Infoburst.dbQuery, body, {
        headers: headers,
        responseType: 'text'
    })
}

export function renderUnits(value) {

    let returnValue = '';
    let abs;
    let suffix = '';
    let isNegative = false;
    if (value === 0) {
        return 0;
    }

    if (value < 0) {
        isNegative = true;
        abs = Math.abs(value)
    } else {
        abs = value
    };

    abs = parseInt(abs)

    if (abs > 1000 && abs <= 999999) {
        abs = (abs / 1000)
            .toFixed(1);
        suffix = 'K';
        returnValue = abs;
    } else if (abs > 1000000 && abs <= 999999999) {
        abs = (abs / 1000000)
            .toFixed(1);
        suffix = 'M';
        returnValue = abs;
        // returnValue = (value.toString() === '0.0') ? (value.toString() + 'K' : value.toString() + 'M'
    } else if (abs > 1000000000 && abs <= 999999999999) {
        abs = (abs / 1000000000)
            .toFixed(1);
        suffix = 'B';
        returnValue = abs;
    } else if (abs > 1000000000000 && abs <= 999999999999999) {
        abs = (abs / 1000000000000)
            .toFixed(1);
        suffix = 'T';
        returnValue = abs;
        // 16
    } else if (abs > 1000000000000000 && abs <= 999999999999999999) {
        abs = (abs / 1000000000000000)
            .toFixed(1);
        suffix = 'Q';
        returnValue = abs
    } else {
        returnValue = abs;
    }

    if (isNegative) {
        return (-1 * returnValue)
            .toString() + suffix;
    } else {
        return returnValue.toString() + suffix;
    }
}
export function renderDollarValue(value) {
    let returnValue = '';
    let abs;
    let prefix = '$';
    let suffix = '';
    let isNegative = false;
    if (value === 0) {
        return 0;
    }
    if (value < 0) {
        isNegative = true;
        abs = Math.abs(value)
    } else {
        abs = value
    };

    abs = parseInt(abs);

    if (abs > 1000 && abs <= 999999) {
        abs = (abs / 1000)
            .toFixed(1);
        suffix = 'K';
        returnValue = abs;
    } else if (abs > 1000000 && abs <= 999999999) {
        abs = (abs / 1000000)
            .toFixed(1);
        suffix = 'M';
        returnValue = abs;
        // returnValue = (value.toString() === '0.0') ? (value.toString() + 'K' : value.toString() + 'M'
        // 10
    } else if (abs > 1000000000 && abs <= 999999999999) {
        abs = (abs / 1000000000)
            .toFixed(1);
        suffix = 'B';
        returnValue = abs;
        // 13
    } else if (abs > 1000000000000 && abs <= 999999999999999) {
        abs = (abs / 1000000000000)
            .toFixed(1);
        suffix = 'T';
        returnValue = abs;
        // 16
    } else if (abs > 1000000000000000 && abs <= 999999999999999999) {
        abs = (abs / 1000000000000000)
            .toFixed(1);
        suffix = 'Q';
        returnValue = abs
    } else {
        returnValue = abs;
    }

    if (isNegative) {
        return '- ' + prefix + returnValue.toString() + suffix;
    } else {
        return prefix + returnValue.toString() + suffix;
    }
}
export function formatPercentage(value) {
    let isNegative = (value < 0) ? true : false;
    let percentage = value;
    let absVal = Math.abs(percentage);
    // Greater than or less than 100 
    // set value to 100
    if (absVal >= 100) {
        if (isNegative) {
            percentage = -100;
        } else {
            percentage = 100;
        }
    } else {

        // if (value === 0 || value === undefined) {
        //     return '0.00%';
        // }

        // percentage = value.toFixed(2);

        if (parseFloat(value)) {
            percentage = value;
        } else {
            percentage = 0;
        }
    }

    return (percentage * 100).toFixed(2) + '%';
}

export function formatMetric(item, type) {


    if (type === 'value') {

        switch (item.valueType) {

            case 'units':
                return (renderUnits(item.value) !== NaN) ? renderUnits(item.value) : 0;
            case 'currency':
                return (renderDollarValue(item.value)) ? renderDollarValue(item.value) : 0;
            case 'percent':
                return (formatPercentage(item.value) !== NaN) ? formatPercentage(item.value) : 0;
        }
    } else if (type === 'target') {

        switch (item.valueType) {

            case 'units':

                return (renderUnits(item.value) !== NaN) ? renderUnits(item.value) : 0;

            case 'currency':

                return (renderDollarValue(item.value)) ? renderDollarValue(item.value) : 0;

            case 'percent':

                return (formatPercentage(item.value) !== NaN) ? formatPercentage(item.value) : 0;


        }

    } else if (type === 'qrf') {

        return (formatPercentage(item.value) !== NaN) ? formatPercentage(item.value) : 0;

    }
}

/**
 * Gets the device type depending on the screen size, Mobile
 */
export function getDeviceType(window) {

    let width = window.width;
    let deviceType;

    // Constants to compare to
    const mobile = [
        {
            type: 'mobileS',
            width: 320
        },
        {
            type: 'mobileM',
            width: 375
        },
        {
            type: 'mobileL',
            width: 425
        },
        {
            type: 'tabletP',
            width: 768
        },
        {
            type: 'tablet',
            width: 1024
        },
        {
            type: 'laptopL',
            width: 1440
        },
        {
            type: 'laptop4k',
            width: 2560
        }
    ]


    for (let i = 0; i < mobile.length; i++) {
        if (width <= mobile[i].width) {
            deviceType = mobile[i].type
            break;
        }
    }


    if (deviceType === undefined) {
        deviceType = 'laptopTV'
    }

    return deviceType;

}

export function getDateFormat(_date) {

    let date = new Date(_date);
    let localOffset = date.getTimezoneOffset() * 60000;
    let localTime = date.getTime();
    let newDate = localTime - localOffset;
    let returnTime = new Date(newDate).toLocaleTimeString();

    return new Date(_date).toDateString() + ' at ' + returnTime;
}

export function getLabelColor(value, target, secondaryCardIndex) {
    let retColor = "";

    if (secondaryCardIndex === 2) {
        if (target === 0) {
            retColor = 'neutralBG';
        } else if (value >= target) {
            retColor = 'redBG';
        } else {
            retColor = 'greenBG';
        }
    } else {
        if (target === 0) {
            retColor = 'neutralBG';
        } else if (value >= target) {
            retColor = 'greenBG';
        } else {
            retColor = 'redBG';
        }
    }

    return retColor;
}

export function getLabelColorPrimary(value, target) {
    let retColor = "";
    if (target === 0) {
        retColor = 'selectedCardFontColorNeutral';
    } else if (value >= target) {
        retColor = 'selectedCardFontColorGreen';
    } else {
        retColor = 'selectedCardFontColorRed';
    }
    return retColor;
}