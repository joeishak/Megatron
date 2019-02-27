import _ from 'lodash';
import {
    Infoburst
} from './environmentParams';
import axios from 'axios';
import * as actions from 'actions';
import { dispatch } from 'rxjs/internal/observable/range';



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
    _.remove(obj.quarters, (item) => {
        return item.value === "All Data"
    })
    _.remove(obj.products, (item) => {
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
    _.remove(obj.geos, (item) => {
        return item.value === "All Data"
    })
    _.remove(obj.routeToMarkets, (item) => {
        return item.value === "All Data"
    })

    return obj;
}
/**
 *
 * @param {*} arr
 */
export function findIfFilterIsApplied(arr) {
    let filtersApplied = {
        quarters: false,
        geos: false,
        products: false,
        routes: false,
        segments: false,
        subscriptions: false,
        markets: false
    };
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        switch (item.category) {
            case 'quarters':
                filtersApplied.quarters = true;
                break;
            case 'productNames':
                filtersApplied.products = true;
                break;
            case 'geos':
                filtersApplied.geos = true;
                break;
            case 'subscriptionOfferings':
                filtersApplied.subscriptions = true;
                break;
            case 'marketAreas':
                filtersApplied.markets = true;
                break;
            case 'routeToMarkets':
                filtersApplied.routes = true;
                break;
            case 'segments':
                filtersApplied.segments = true;
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
            filterParams[0].value = getParamValues(_activeParams.quarters, allFilters.quarters);
            filterParams[1].value = getParamValues(_activeParams.geos, allFilters.geos);

            break;
        case 2:
            filterParams[0].value = getParamValues(_activeParams.quarters, allFilters.quarters);
            filterParams[1].value = getParamValues(_activeParams.geos, allFilters.geos);
            filterParams[2].value = getParamValues(_activeParams.markets, allFilters.marketAreas);

            break;
        case 3:
            filterParams[0].value = getParamValues(_activeParams.quarters, allFilters.quarters);
            filterParams[1].value = getParamValues(_activeParams.geos, allFilters.geos);
            filterParams[2].value = getParamValues(_activeParams.markets, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.subscriptions, allFilters.subscriptionOfferings);
            break;
        case 4:
            filterParams[0].value = getParamValues(_activeParams.quarters, allFilters.quarters);
            filterParams[1].value = getParamValues(_activeParams.geos, allFilters.geos);
            filterParams[2].value = getParamValues(_activeParams.markets, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.subscriptions, allFilters.subscriptionOfferings);
            filterParams[4].value = getParamValues(_activeParams.products, allFilters.products);

            break;
        case 5:
            filterParams[0].value = getParamValues(_activeParams.quarters, allFilters.quarters);
            filterParams[1].value = getParamValues(_activeParams.geos, allFilters.geos);
            filterParams[2].value = getParamValues(_activeParams.markets, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.segments, allFilters.segments);
            break;
        case 6:
            filterParams[0].value = getParamValues(_activeParams.quarters, allFilters.quarters);
            filterParams[1].value = getParamValues(_activeParams.geos, allFilters.geos);
            filterParams[2].value = getParamValues(_activeParams.markets, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.segments, allFilters.segments);
            filterParams[4].value = getParamValues(_activeParams.subscriptions, allFilters.subscriptionOfferings);
            break;
        case 7:
            filterParams[0].value = getParamValues(_activeParams.quarters, allFilters.quarters);
            filterParams[1].value = getParamValues(_activeParams.geos, allFilters.geos);
            filterParams[2].value = getParamValues(_activeParams.markets, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.segments, allFilters.segments);
            filterParams[4].value = getParamValues(_activeParams.subscriptions, allFilters.subscriptionOfferings);
            filterParams[5].value = getParamValues(_activeParams.products, allFilters.products);

            break;
        default:
            filterParams[0].value = getParamValues(_activeParams.quarters, allFilters.quarters);
            filterParams[1].value = getParamValues(_activeParams.geos, allFilters.geos);
            filterParams[2].value = getParamValues(_activeParams.markets, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.routes, allFilters.routeToMarkets);
            filterParams[4].value = getParamValues(_activeParams.segments, allFilters.segments);
            filterParams[5].value = getParamValues(_activeParams.subscriptions, allFilters.subscriptionOfferings);
            filterParams[6].value = getParamValues(_activeParams.products, allFilters.products);

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
        quarters: Object.keys(availableFilters.quarters).map(e => availableFilters.quarters[e]),
        geos: Object.keys(availableFilters.geos).map(e => availableFilters.geos[e]),
        marketAreas: Object.keys(availableFilters.marketAreas).map(e => availableFilters.marketAreas[e]),
        products: Object.keys(availableFilters.products).map(e => availableFilters.products[e]),
        segments: Object.keys(availableFilters.segments).map(e => availableFilters.segments[e]),
        subscriptionOfferings: Object.keys(availableFilters.subscriptionOfferings).map(e => availableFilters.subscriptionOfferings[e]),
        routeToMarkets: Object.keys(availableFilters.routeToMarkets).map(e => availableFilters.routeToMarkets[e]),
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
    const maResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXdcID + Infoburst.filterQueryNames.MarketFilters, {
        headers: headers,
        responseType: 'text'
    })
    const segementsResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXdcID + Infoburst.filterQueryNames.SegmentFilters, {
        headers: headers,
        responseType: 'text'
    });
    const subscriptionResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXdcID + Infoburst.filterQueryNames.SubscriptionFilters, {
        headers: headers,
        responseType: 'text'
    });
    const routesResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXdcID + Infoburst.filterQueryNames.RouteFilters, {
        headers: headers,
        responseType: 'text'
    });
    const quartersResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXdcID + Infoburst.filterQueryNames.QuarterFilters, {
        headers: headers,
        responseType: 'text'
    });
    const productResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXdcID + Infoburst.filterQueryNames.ProductFilters, {
        headers: headers,
        responseType: 'text'
    });
    const geoResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXdcID + Infoburst.filterQueryNames.GeoFilters, {
        headers: headers,
        responseType: 'text'
    });
    const channelResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXdcID + Infoburst.filterQueryNames.ChannelFilters, {
        headers: headers,
        responseType: 'text'
    });
    const visitResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXdcID + Infoburst.filterQueryNames.VisitFilters, {
        headers: headers,
        responseType: 'text'
    });
    const signResponse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXdcID + Infoburst.filterQueryNames.SignUpFilters, {
        headers: headers,
        responseType: 'text'
    });
    responseArray.push(quartersResponse, maResponse, productResponse, segementsResponse,
        subscriptionResponse, routesResponse, geoResponse, channelResponse, visitResponse, signResponse);
    let promiseArr1 = Promise.all(responseArray);
    return promiseArr1;
}
export function requestPrimaryData(allFilters, _parameters) {
    responseArray = [];

    filterParams[1].value = _parameters.products.length > 0 ? _parameters.products[0].value : allFilters.products;
    filterParams[2].value = _parameters.geos.length > 0 ? _parameters.geos[0].value : allFilters.geos;
    filterParams[3].value = _parameters.subscriptions.length > 0 ? _parameters.subscriptions[0].value : allFilters.subscriptios;
    filterParams[4].value = _parameters.markets.length > 0 ? _parameters.markets[0].value : allFilters.markets;
    filterParams[5].value = _parameters.routes.length > 0 ? _parameters.routes[0].value : allFilters.routes;

    //Generate the filter list 
    generateFilterParams(2, group2Params, allFilters, _parameters);
    generateFilterParams(5, group5Params, allFilters, _parameters);
    generateFilterParams(8, group8Params, allFilters, _parameters);


    //turn each list into a string

    let params2 = group2Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');

    let params5 = group5Params.reduce((prev, param) => {
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
    const primaryDiscover = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverActualTargetPrimary + params5 + '&json=1', {
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



    // filterParams[1].value = _parameters.products.length > 0 ? _parameters.products[0].value : allFilters.products;
    // filterParams[2].value = _parameters.geos.length > 0 ? _parameters.geos[0].value : allFilters.geos;
    // filterParams[3].value = _parameters.subscriptions.length > 0 ? _parameters.subscriptions[0].value : allFilters.subscriptios;
    // filterParams[4].value = _parameters.markets.length > 0 ? _parameters.markets[0].value : allFilters.markets;
    // filterParams[5].value = _parameters.routes.length > 0 ? _parameters.routes[0].value : allFilters.routes;

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

export function requestDiscoverSecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(1, group1Params, allFilters, _parameters);
    generateFilterParams(2, group2Params, allFilters, _parameters);
    generateFilterParams(5, group5Params, allFilters, _parameters);


    let params1 = group1Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params2 = group2Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params5 = group5Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    // Secondary
    const DiscoverG1Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1ActualTargetSecondary + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2ActualTargetSecondary + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5ActualTargetSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const DiscoverG1Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1MultiChartQuery + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2MultiChartQuery + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5MultiChartQuery + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const DiscoverG1QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1QTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2QTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5QTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Geo QTD
    const DiscoverG1GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1GeoQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2GeoQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5GeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Market QTD
    const DiscoverG1MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1MarketAreaQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2MarketAreaQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5MarketAreaQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    //Segment QTD
    const DiscoverG1SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1SegmentQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2SegmentQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5SegmentQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });



    //Route QTD
    const DiscoverG1RouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1RouteQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5RouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2RouteQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2RouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5RouteQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    //Product QTD
    const DiscoverG1ProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1ProductQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2ProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2ProductQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5ProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5ProductQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    responseArray.push(
        DiscoverG1Secondary, DiscoverG2Secondary, DiscoverG5Secondary,
        DiscoverG1Multichart, DiscoverG2Multichart, DiscoverG5Multichart,
        DiscoverG1QTD, DiscoverG2QTD, DiscoverG5QTD,
        DiscoverG1GeoQTD, DiscoverG2GeoQTD, DiscoverG5GeoQTD,
        DiscoverG1MarketQTD, DiscoverG2MarketQTD, DiscoverG5MarketQTD,
        DiscoverG1SegmentQTD, DiscoverG2SegmentQTD, DiscoverG5SegmentQTD,
        DiscoverG1RouteQTD, DiscoverG5RouteQTD, DiscoverG2RouteQTD,
        DiscoverG1ProductQTD, DiscoverG2ProductQTD, DiscoverG5ProductQTD
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
    responseArray = [];
    generateFilterParams(1, group1Params, allFilters, _parameters);
    generateFilterParams(2, group2Params, allFilters, _parameters);
    generateFilterParams(5, group5Params, allFilters, _parameters);


    let params1 = group1Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params2 = group2Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params5 = group5Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    // Secondary
    const DiscoverG1Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1ActualTargetSecondary + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2ActualTargetSecondary + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5ActualTargetSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const DiscoverG1Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1MultiChartQuery + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2MultiChartQuery + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5MultiChartQuery + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const DiscoverG1QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1QTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2QTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5QTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Geo QTD
    const DiscoverG1GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1GeoQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2GeoQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5GeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Market QTD
    const DiscoverG1MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1MarketAreaQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2MarketAreaQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5MarketAreaQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    //Segment QTD
    const DiscoverG1SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1SegmentQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2SegmentQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5SegmentQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });



    //Route QTD
    const DiscoverG1RouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1RouteQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5RouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2RouteQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2RouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5RouteQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    //Product QTD
    const DiscoverG1ProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1ProductQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2ProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2ProductQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5ProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5ProductQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    responseArray.push(
        DiscoverG1Secondary, DiscoverG2Secondary, DiscoverG5Secondary,
        DiscoverG1Multichart, DiscoverG2Multichart, DiscoverG5Multichart,
        DiscoverG1QTD, DiscoverG2QTD, DiscoverG5QTD,
        DiscoverG1GeoQTD, DiscoverG2GeoQTD, DiscoverG5GeoQTD,
        DiscoverG1MarketQTD, DiscoverG2MarketQTD, DiscoverG5MarketQTD,
        DiscoverG1SegmentQTD, DiscoverG2SegmentQTD, DiscoverG5SegmentQTD,
        DiscoverG1RouteQTD, DiscoverG5RouteQTD, DiscoverG2RouteQTD,
        DiscoverG1ProductQTD, DiscoverG2ProductQTD, DiscoverG5ProductQTD
    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;

}
export function requestUseSecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(1, group1Params, allFilters, _parameters);
    generateFilterParams(2, group2Params, allFilters, _parameters);
    generateFilterParams(5, group5Params, allFilters, _parameters);


    let params1 = group1Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params2 = group2Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params5 = group5Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    // Secondary
    const DiscoverG1Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1ActualTargetSecondary + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2ActualTargetSecondary + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5ActualTargetSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const DiscoverG1Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1MultiChartQuery + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2MultiChartQuery + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5MultiChartQuery + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const DiscoverG1QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1QTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2QTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5QTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Geo QTD
    const DiscoverG1GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1GeoQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2GeoQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5GeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Market QTD
    const DiscoverG1MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1MarketAreaQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2MarketAreaQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5MarketAreaQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    //Segment QTD
    const DiscoverG1SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1SegmentQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2SegmentQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5SegmentQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });



    //Route QTD
    const DiscoverG1RouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1RouteQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5RouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2RouteQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2RouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5RouteQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    //Product QTD
    const DiscoverG1ProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1ProductQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2ProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2ProductQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5ProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5ProductQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    responseArray.push(
        DiscoverG1Secondary, DiscoverG2Secondary, DiscoverG5Secondary,
        DiscoverG1Multichart, DiscoverG2Multichart, DiscoverG5Multichart,
        DiscoverG1QTD, DiscoverG2QTD, DiscoverG5QTD,
        DiscoverG1GeoQTD, DiscoverG2GeoQTD, DiscoverG5GeoQTD,
        DiscoverG1MarketQTD, DiscoverG2MarketQTD, DiscoverG5MarketQTD,
        DiscoverG1SegmentQTD, DiscoverG2SegmentQTD, DiscoverG5SegmentQTD,
        DiscoverG1RouteQTD, DiscoverG5RouteQTD, DiscoverG2RouteQTD,
        DiscoverG1ProductQTD, DiscoverG2ProductQTD, DiscoverG5ProductQTD
    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;

}
export function requestRenewSecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(1, group1Params, allFilters, _parameters);
    generateFilterParams(2, group2Params, allFilters, _parameters);
    generateFilterParams(5, group5Params, allFilters, _parameters);


    let params1 = group1Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params2 = group2Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params5 = group5Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    // Secondary
    const DiscoverG1Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1ActualTargetSecondary + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2ActualTargetSecondary + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5ActualTargetSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const DiscoverG1Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1MultiChartQuery + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2MultiChartQuery + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5MultiChartQuery + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const DiscoverG1QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1QTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2QTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5QTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Geo QTD
    const DiscoverG1GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1GeoQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2GeoQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5GeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Market QTD
    const DiscoverG1MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1MarketAreaQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2MarketAreaQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5MarketAreaQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    //Segment QTD
    const DiscoverG1SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1SegmentQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2SegmentQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5SegmentQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });



    //Route QTD
    const DiscoverG1RouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1RouteQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5RouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2RouteQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2RouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5RouteQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    //Product QTD
    const DiscoverG1ProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG1ProductQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG2ProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG2ProductQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5ProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.discoverXDCID + Infoburst.summaryQueryNames.DiscoverG5ProductQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    responseArray.push(
        DiscoverG1Secondary, DiscoverG2Secondary, DiscoverG5Secondary,
        DiscoverG1Multichart, DiscoverG2Multichart, DiscoverG5Multichart,
        DiscoverG1QTD, DiscoverG2QTD, DiscoverG5QTD,
        DiscoverG1GeoQTD, DiscoverG2GeoQTD, DiscoverG5GeoQTD,
        DiscoverG1MarketQTD, DiscoverG2MarketQTD, DiscoverG5MarketQTD,
        DiscoverG1SegmentQTD, DiscoverG2SegmentQTD, DiscoverG5SegmentQTD,
        DiscoverG1RouteQTD, DiscoverG5RouteQTD, DiscoverG2RouteQTD,
        DiscoverG1ProductQTD, DiscoverG2ProductQTD, DiscoverG5ProductQTD
    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;

}
export function requestDetailsData(allFilters, _parameters) {
    responseArray = [];

    // filterParams[0].value = _parameters.quarters[0].value;
    filterParams[1].value = _parameters.products[0].value;
    filterParams[2].value = _parameters.geos[0].value;
    filterParams[3].value = _parameters.subscriptions[0].value;
    filterParams[4].value = _parameters.markets[0].value;
    filterParams[5].value = _parameters.routes[0].value;
    filterParams[6].value = _parameters.segments[0].value;

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
        },
        {
            prompt: 'segmentFilters',
            value: ''
        }

    ]

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
    ]
    // Remove First Row from all the filters
    // Contains All Data Filters
    // allFilters = utils.removeAllDataValueFromFilterArray(allFilters);
    generateFilterParams(1, filterParams, allFilters, _parameters);
    generateFilterParams(2, group2Params, allFilters, _parameters);
    generateFilterParams(3, group3Params, allFilters, _parameters);




    let params1 = filterParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');
    let params2 = group2Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');
    let params3 = group3Params.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');

    // Financials
    const finMulti = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.dataXdcID + Infoburst.summaryQueryNames.FinancialMultichart + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const finUnitsMulti = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.dataXdcID + Infoburst.summaryQueryNames.FinancialUnits + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const finGeo = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.dataXdcID + Infoburst.summaryQueryNames.FinancialGeoQtd + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const finQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.dataXdcID + Infoburst.summaryQueryNames.FinancialQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const finMarkets = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.dataXdcID + Infoburst.summaryQueryNames.FinancialMarketQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Journeys
    const journG2Mutli = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG2MultiChart + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG3Mutli = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG3MultiChart + params3 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG2QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG2QTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG3QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG3QTD + params3 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG2Geo = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG2GeoQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG3Geo = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG3GeoQTD + params3 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG2Market = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG2MarketQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG3Market = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG3MarketQTD + params3 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });





    responseArray.push(finMulti, finUnitsMulti, finGeo, finQTD, journG2Mutli, journG3Mutli, journG2QTD, journG3QTD, journG2Geo, journG3Geo, finMarkets, journG2Market, journG3Market);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
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
            "products": params.products,
            "geos": params.geos,
            "subscriptions": params.subscriptions,
            "routes": params.routes,
            "markets": params.markets
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
    if (activeFilters.geos[0].value === 'All Data') {
        availableFilters.geos.map(item => {
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