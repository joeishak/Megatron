import _ from 'lodash';
import {
    Infoburst
} from './environmentParams';
import axios from 'axios';
import * as actions from 'actions';



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
     * Group 1: Net New Arr, Gross New Arr, Cancellations, Renewal
     *        -- All Filters
     * Group 2: Traffic, Conversions, Qtr UI Rate, QTR Payment Failure
     *        -- Quarter, Geo, Market, Segment Fitlers
     * Group 3: New Qfm, Repeat Usr Mau, Marketable Universe UQFM, Paid Media Spending, Paid Media Sourced, New UQfM
     *        -- Quarter, Geo, Market
     */
    switch (type) {
        case 1:
            filterParams[0].value = getParamValues(_activeParams.quarters, allFilters.quarters);
            filterParams[1].value = getParamValues(_activeParams.products, allFilters.products);
            filterParams[2].value = getParamValues(_activeParams.geos, allFilters.geos);
            filterParams[3].value = getParamValues(_activeParams.subscriptions, allFilters.subscriptionOfferings);
            filterParams[4].value = getParamValues(_activeParams.markets, allFilters.marketAreas);
            filterParams[5].value = getParamValues(_activeParams.routes, allFilters.routeToMarkets);
            filterParams[6].value = getParamValues(_activeParams.segments, allFilters.segments);
            break;
        case 2:
            filterParams[0].value = getParamValues(_activeParams.quarters, allFilters.quarters);
            filterParams[1].value = getParamValues(_activeParams.geos, allFilters.geos);
            filterParams[2].value = getParamValues(_activeParams.markets, allFilters.marketAreas);
            filterParams[3].value = getParamValues(_activeParams.segments, allFilters.segments);


            break;
        default:
            filterParams[0].value = getParamValues(_activeParams.quarters, allFilters.quarters);
            filterParams[1].value = getParamValues(_activeParams.geos, allFilters.geos);
            filterParams[2].value = getParamValues(_activeParams.markets, allFilters.marketAreas);

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
    // debugger;
    let paramValue;

    if (activeParams.length === 0) {
        // Add all the values from allFilters except for All Data to the Param Value
        // _.remove(allFilters, item => {
        //     return item.value === 'All Data';

        // })
        paramValue = [];

        allFilters.forEach(item => {
            paramValue.push(item.value);
        })
        // addValue(allFilters,paramValue);

        paramValue = convertFilterList(paramValue);
        return paramValue;
    } else {
        paramValue = [];
        activeParams.forEach(item => {
            paramValue.push(item.value);
        })
        // addAllValues(activeParams.quarters,paramValue);
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

    responseArray.push(quartersResponse, maResponse, productResponse, segementsResponse, subscriptionResponse, routesResponse, geoResponse);
    let promiseArr1 = Promise.all(responseArray);
    return promiseArr1;
}

export function requestSummaryData(allFilters, _parameters) {
    // console.log('Request Summary Data in utilities: ', _parameters);
    responseArray = [];

    filterParams[1].value = _parameters.products.length > 0 ? _parameters.products[0].value : allFilters.products;
    filterParams[2].value = _parameters.geos.length > 0 ? _parameters.geos[0].value : allFilters.geos;
    filterParams[3].value = _parameters.subscriptions.length > 0 ? _parameters.subscriptions[0].value : allFilters.subscriptios;
    filterParams[4].value = _parameters.markets.length > 0 ? _parameters.markets[0].value : allFilters.markets;
    filterParams[5].value = _parameters.routes.length > 0 ? _parameters.routes[0].value : allFilters.routes;

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

    // console.log(params1,params2,params3);
    //Primary 
    const primaryFinancial = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.dataXdcID + Infoburst.summaryQueryNames.FinancialActualTargetSecondary + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const primaryG2Journey = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG2PrimaryActualTarget + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const primaryG3Journey = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG3PrimaryActualTarget + params3 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Secondary
    const secondaryFinancial = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.dataXdcID + Infoburst.summaryQueryNames.FinancialActualTargetSecondary + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const secondaryG2Journey = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG2SecondaryActualTarget + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const secondaryG3Journey = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG3SecondaryActualTarget + params3 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Details
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

    //TODO: The rest of the details
    // finRoutes
    // finSegments

    const finRoutes = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.dataXdcID + Infoburst.summaryQueryNames.FinancialRouteQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const finSegments = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.dataXdcID + Infoburst.summaryQueryNames.FinancialSegmentQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const finProducts = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.dataXdcID + Infoburst.summaryQueryNames.FinancialProductQTD + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG2Routes = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG2RoutesQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG2Segments = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG2SegmentsQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG2Products = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG2ProductsQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG3Routes = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG3RouteQTD + params3 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG3Segments = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG3SegmentQTD + params3 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const journG3Products = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG3ProductQTD + params3 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(primaryFinancial, primaryG2Journey, primaryG3Journey, secondaryFinancial, secondaryG2Journey, secondaryG3Journey,
        finMulti, finUnitsMulti, finGeo, finQTD, journG2Mutli, journG3Mutli, journG2QTD, journG3QTD, journG2Geo, journG3Geo,
        finMarkets, journG2Market, journG3Market, finRoutes, finSegments, finProducts, journG2Routes, journG2Segments,
        journG2Products, journG3Routes, journG3Segments, journG3Products);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
export function requestSecondaryData(allFilters, _parameters) {
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

    const secondaryFinancial = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.dataXdcID + Infoburst.summaryQueryNames.FinancialActualTargetSecondary + params1 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const secondaryG2Journey = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG2SecondaryActualTarget + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const secondaryG3Journey = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.journeyXdcID + Infoburst.summaryQueryNames.JourneysG3SecondaryActualTarget + params3 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(secondaryFinancial, secondaryG2Journey, secondaryG3Journey);
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
        "conn": '16',
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
        "conn": '16',
        "qry": 'fetchComments',
        "columnNames": 'true',
        "params": {
            "metric": metricId
        }
    };

    const res1 = axios.post(Infoburst.dbQuery, body, { headers: headers, responseType: 'text' }).then((response) => {
        if (response !== []) {
            console.log(response);
            const commentIdsArray = response.data.map(ele => { return ele.id; });
            const params = convertFilterListForDBQuery(commentIdsArray);
            let responseBody = {
                "conn": '16',
                "qry": 'fetchReplies',
                "columnNames": 'true',
                "params": {
                    "params": params
                }
            };
            const replies = axios.post(Infoburst.dbQuery, responseBody, { headers: headers, responseType: 'text' }).then((res) => {
                const commentsComplete = { comment: response.data, replies: res.data };
                // console.log(commentsComplete);
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
        "conn": '16',
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
        "conn": '16',
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
        "conn": '16',
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
        "conn": '16',
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
        "conn": '16',
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
        return prefix + (-1 * returnValue)
            .toString() + suffix;
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

        if (value === 0 || value === undefined) {
            return '0.00%';
        }

        percentage = (value).toFixed(2);

    }

    return percentage + '%';
}

export function formatMetric(item, type) {
    if (type === 'value') {
        switch (item.valueType) {
            case 'units':
                return renderUnits(item.value);
            case 'currency':
                return renderDollarValue(item.value);
            case 'percent':
                let formattedPercent
                return formatPercentage(item.value);
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
        return (isNaN(formatPercentage(item.value))) ? formatPercentage(item.value) : 0;
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