/**
 * @summary Two Types of Utility functions. One makes calls to InfoBurst. The others are strictly utility functions. 
 */
import _ from 'lodash';
import {
    Infoburst
} from './environmentParams';
import axios from 'axios';
import * as actions from 'actions';
import { dispatch } from 'rxjs/internal/observable/range';
import { DIMENSIONS, SUMMARY_KPIS } from './Constants/consts';



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
    // {
    //     prompt: 'ConvTypeFilters',
    //     value: ''
    // },
    {
        prompt: 'CustomerTypeFilters',
        value: ''
    },
];

let buyConversionParams = [
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
    },
    {
        prompt: 'QFMTypeFilters',
        value: ''
    },
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
        prompt: 'channelMUFilters',
        value: ''
    }
];
let buyMktgParams = [
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
        prompt: 'segmentFilters',
        value: ''
    },
    {
        prompt: 'channelPMFilters',
        value: ''
    },
    {
        prompt: 'productFilters',
        value: ''
    }
];
let buyLTVParams = [
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
    }
];
let uqfmParams = [
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
    }
];
let pmssParams = [
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
        prompt: 'channelPMFilters',
        value: ''
    }
]


let tryParams = [
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
        prompt: 'SignupCatFilters',
        value: ''
    },
    {
        prompt: 'QFMTypeFilters',
        value: ''
    },

];

let financeParams = [
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
    }
];
let buyGrossParams = [
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
        prompt: 'PVWFilters',
        value: ''
    },
    {
        prompt: 'QFMTypeFilters',
        value: ''
    }
];

let cancelAdobeParams = [
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
    }
];
let cancelRetailParams = [
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
    }
];
let renewParamsAdobeCom = [
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
        prompt: 'segment_NonDMFilters',
        value: ''
    },
    {
        prompt: 'subscriptionFilters',
        value: ''
    }

];
let renewParamsERetail = [
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
        prompt: 'segment_NonDMFilters',
        value: ''
    },
    {
        prompt: 'subscriptionFilters',
        value: ''
    }

];
let renewParamsReseller = [
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
        prompt: 'segment_NonDMFilters',
        value: ''
    },
    {
        prompt: 'subscriptionFilters',
        value: ''
    }

];
let renewParams = [
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
        prompt: 'segment_NonDMFilters',
        value: ''
    },
    {
        prompt: 'subscriptionFilters',
        value: ''
    }

];
let useParams = [
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
        prompt: 'segment_NonDMFilters',
        value: ''
    },
    {
        prompt: 'subscriptionFilters',
        value: ''
    }
]

/** Utility function that makes a call to Infoburst to determine if InfoBurst is accepting requests */
/**
 * @name getHeartbeat
 * @description Utility function that makes a call to Infoburst to determine if InfoBurst is accepting requests
 * @param none
 * @returns Promise
 */
export function getHeartbeat() {
    return axios.get(Infoburst.sysInfo, {
        headers: headers,
        responseType: 'text'
    });
}
/**
 * @name addUserToDB
 * @description Utility function that makes a post request to Infoburst GTMPOC Database Connection.
 * Calls query 'NewUser' which is a procedure that adds an OKTA User with the settings default state for quarter, segment, and non dm segment filters to the User and Settings Tables.
* @param {User} user 
 * @param {Object} quarter 
 * @param {Object} segment 
 * @param {Array} nondm 
 * @returns Promise Array containing the OKTA information for this user.
 */
export async function addUserToDB(user, quarter, segment, nondm) {
    responseArray = [];
    promiseArr = [];
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'NewUser',
        "columnNames": 'true',
        "params": {
            "userId": user.sub,
            "fname": `${user.given_name}`,
            "lname": `${user.family_name}`,
            "email": `'${user.email}'`,
            "quarter": `${quarter}`,
            "segment": `${segment}`,
            "nonDmSegments": `${nondm}`

        }
    }
    responseArray = axios.post(Infoburst.dbQuery, body, {
        headers: headers,
        responseType: 'text'
    })
        .then((res) => {
            // console.log("Posted User to DB", res);
            return res;
        })
        .catch((err) => {
            // console.log('posting user error: ', err);

        })
    let responseARr = Promise.all([responseArray]);
    return responseARr;
}
/**
 * @name initiateFilterDataRequests
 * @description Utility function that makes a call request to Infoburst FILTERS XDC In Memory Cache for all possible filter values.
 * @returns Promise Array containing all the filter values.
 */
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
    const NonDMSegment = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.SegmentNonDMFilters, {
        headers: headers,
        responseType: 'text'
    });
    const PVW = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.PVWFilters, {
        headers: headers,
        responseType: 'text'
    });
    const QFMType = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.QFMTypeFilters, {
        headers: headers,
        responseType: 'text'
    });
    const CustomerType = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.filtersXDCID + Infoburst.filterQueryNames.CustomerTypeFilters, {
        headers: headers,
        responseType: 'text'
    });
    responseArray.push(quarterResponse, maResponse, productResponse, segementsResponse,
        subscriptionResponse, routeResponse, geoResponse, channelResponse, visitResponse,
        CloudTypeFilters, ConvTypeFilters, DiscoverVsBuyFilters, LastTouchChannelFilters,
        MobileVsDesktopFilters, NewVsRepeatFilters, ProdNameFilters, SignupAppFilters, SignupCatFilters,
        WebSegFilters, ChannelMUFilters, ChannelPMFilters, NonDMSegment, PVW, QFMType, CustomerType);
    let promiseArr1 = Promise.all(responseArray);
    return promiseArr1;
}
/**
 * @name requestPrimaryData
 * @description Utility function that makes a call request to  Infoburst FinanceTune1, Traffic, Use, Buy  Try, And Renew XDC's In Memory Cache for all Primary KPI values of actuals, targets (QRF), vsQrf, and FQTarget.
 * @param  {Array} allFilters
 * @param {Array} _parameters
 * @returns Promise Array containing all 6 objects. Each containing values for the Primary KPI.
 */
export function requestPrimaryData(allFilters, _parameters) {
    responseArray = [];
    resetRenewParams();

    //Generate the filter list 
    generateFilterParams(2, tryParams, allFilters, _parameters);
    generateFilterParams(5, trafficParams, allFilters, _parameters);
    generateFilterParams(9, financeParams, allFilters, _parameters);
    generateFilterParams(8, uqfmParams, allFilters, _parameters);
    generateFilterParams(1, useParams, allFilters, _parameters);
    generateFilterParams(4, renewParamsAdobeCom, allFilters, _parameters);
    generateFilterParams(15, buyConversionParams, allFilters, _parameters);
    //turn each list into a string
    renewParamsAdobeCom.push({
        prompt: 'routeFilters',
        value: `'ADOBE.COM/CC.COM'`
    });
    let params2 = tryParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');
    let params5 = trafficParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');
    let params8 = financeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');
    let params6 = uqfmParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params10 = useParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params11 = renewParamsAdobeCom.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    let params15 = buyConversionParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    const primaryFinancial = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetPrimary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const primaryDiscover = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficPrimary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const primaryTry = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryActualTargetPrimary + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Secondary
    const primaryBuy = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionSecondaryPrimary + params15 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const primaryUse = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseRepeatMAUPrimary + params10 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const primaryRenew = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFPrimary + params11 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(primaryFinancial, primaryDiscover, primaryTry, primaryBuy, primaryUse, primaryRenew);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name requestDiscoverSecondary
 * @description Utility function that makes a call request to  Infoburst  Traffic,UQFM, & Market XDC's In Memory Cache for all Secondary KPI values of actuals, targets (QRF), vsQrf, and FQTarget.
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Discover Secondary KPIs.
 */
export function requestDiscoverSecondary(allFilters, _parameters) {
    responseArray = [];


    //Generate the filter list 
    // console.log('Utils 556: ', allFilters, _parameters)
    generateFilterParams(5, trafficParams, allFilters, _parameters);
    generateFilterParams(8, uqfmParams, allFilters, _parameters);
    generateFilterParams(6, mktgParams, allFilters, _parameters);
    generateFilterParams(7, pmssParams, allFilters, _parameters);

    //turn each list into a string

    // console.log('MKTG Params before reduce', mktgParams);
    // console.log('PMSS Params before reduce', pmssParams);
    let params7 = mktgParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params8 = pmssParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');


    let params5 = trafficParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');

    let params6 = uqfmParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');


    // console.log(params1,params2,params3);
    //Primary 
    const mu = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUSecondary + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const traffic = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const uqfm = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Secondary
    const pmss = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    responseArray.push(mu, traffic, uqfm, pmss);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name requestFinanceSecondaryData
 * @description Utility function that makes a call request to  Infoburst  FinanceTune1 and FinanceTune2 XDC's In Memory Cache for all Secondary KPI values of actuals, targets (QRF), vsQrf, and FQTarget.
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Finance Secondary KPIs.
 */
export function requestFinanceSecondaryData(allFilters, _parameters) {
    responseArray = [];


    generateFilterParams(9, financeParams, allFilters, _parameters);

    let params8 = financeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    const financeSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const finance2Secondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    responseArray.push(financeSecondary, finance2Secondary);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name requestFinanceXdc1SecondaryData
 * @description Utility function that makes a call request to  Infoburst  FinanceTune1   XDC's In Memory Cache for all Net New and Gross New ARR Details  values .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Finance Net New and Gross New ARR Details.
 */
export function requestFinanceXdc1SecondaryData(allFilters, _parameters) {
    responseArray = [];


    generateFilterParams(9, financeParams, allFilters, _parameters);

    let params8 = financeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    const financeSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8Multichart + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeUnitsMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8Units + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeQTDTotals = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8QTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8GeoQtd + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8GeoQtdTotal + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMarketQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8MarketQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeSegmentQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8SegmentQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeRouteQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8RouteQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeProductQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8ProductQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(financeSecondary, financeMultichart, financeUnitsMultichart, financeQTDTotals, financeGeoQTD, financeMarketQTD, financeSegmentQTD, financeRouteQTD, financeProductQTD,financeGeoQTDTotal);
    let promiseArr = Promise.all(responseArray);
    return promiseArr;
}
/**
 * @name requestFinanceXdc2SecondaryData
 * @description Utility function that makes a call request to  Infoburst  FinanceTune2   XDC's In Memory Cache for all Cancellations and Renewal@ FP ARR Details  values .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Finance Cancellations and Renewal@ FP ARR Details.
 */
export function requestFinanceXdc2SecondaryData(allFilters, _parameters) {
    responseArray = [];


    generateFilterParams(9, financeParams, allFilters, _parameters);

    let params8 = financeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    const financeSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8Multichart + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeUnitsMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8Units + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeQTDTotals = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8QTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtd + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtdTotal + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMarketQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8MarketQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeSegmentQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8SegmentQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeRouteQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8RouteQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeProductQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ProductQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(financeSecondary, financeMultichart, financeUnitsMultichart, financeQTDTotals, financeGeoQTD, financeMarketQTD, financeSegmentQTD, financeRouteQTD, financeProductQTD,financeGeoQTDTotal);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name requestTrafficSecondaryData
 * @description Utility function that makes a call request to  Infoburst  Traffic and UQFM   XDC's In Memory Cache for all Traffic, Bounce Rate and UQFM Details  values .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Discover Traffic, Bounce Rate and UQFM Details.
 */
export function requestTrafficSecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(5, trafficParams, allFilters, _parameters);
    generateFilterParams(8, uqfmParams, allFilters, _parameters);
    let params5 = trafficParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params6 = uqfmParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    // console.log("Traffic Network Request: ", Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficSecondary + params5 + '&json=1');
    // Traffic  & Bounce
    const DiscoverG5Secondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const DiscoverG5Multichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficMutlichart + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const DiscoverG5QTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const DiscoverG5GeoQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficGeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5GeoQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficGeoQTDTotal + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const DiscoverG5MarketQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficMAQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Web Segment QTD
    const DiscoverG5SegmentQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficWebSegQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Last touch channelQTD 
    const DiscoverGLTCQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficLTCQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverGLTCQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficLTCQTDTotal + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Conversion Type QTD
    const DiscoverG5ConvQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficConvTypeQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Mobile Vs Desktop QTD
    const DiscoverMobDesk = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficMobDeskQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //NEw Vs Repeat QTD
    const DiscoverNewRep = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficNewRepQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    // console.log("UQFM Network Request: ", Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvSecondary + params6 + '&json=1');

    // UQFM
    const uqfmSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const uqfmMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvMutlichart + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const uqfmQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const uqfmGeoQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvGeoQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const uqfmGeoQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvGeoQTDTotal + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const uqfmMarketQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvMAQTD + params6 + '&json=1', {
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
        DiscoverNewRep,
        uqfmSecondary, uqfmMultichart, uqfmQTD, uqfmGeoQTD, uqfmMarketQTD,
        DiscoverG5GeoQTDTotal,
        uqfmGeoQTDTotal,
        DiscoverGLTCQTDTotal

    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name requestMKTGSecondaryData
 * @description Utility function that makes a call request to  Infoburst  Market   XDC's In Memory Cache for all Marketable U, Paid Media (s) Details  values .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Discover MU, Paid Media Spend and Sourced Details.
 */
export function requestMKTGSecondaryData(allFilters, _parameters) {
    // console.log('requesting marketing data');
    responseArray = [];
    generateFilterParams(6, mktgParams, allFilters, _parameters);
    generateFilterParams(7, pmssParams, allFilters, _parameters);

    // console.log('MKTG Params before reduce', mktgParams);
    // console.log('PMSS Params before reduce', pmssParams);
    let params5 = mktgParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params6 = pmssParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
 
    // console.log("MU NEtwork request:", Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUSecondary + params5 + '&json=1');
    //Marketing
    const mktgSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const mktgMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUMutlichart + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const mktgQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const mktgGeo = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUGeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const mktgGeoTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUGeoQTDTotal + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const mktgMarket = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUMAQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Channel QTD
    const mktgChannelMu = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUChannelQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Paid Media Sourced and Spend
    const pmssSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const pmssMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMMutlichart + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const pmssQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const pmssGeo = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMGeoQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const pmssGeoTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMGeoQTDTotal + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const pmssMarket = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMMAQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Channel QTD
    const pmssChannelMu = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMChannelQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    
    responseArray.push(
        mktgSecondary, mktgMultichart, mktgQTD, mktgGeo, mktgMarket, mktgChannelMu
        , pmssSecondary, pmssMultichart, pmssQTD, pmssGeo, pmssMarket, pmssChannelMu,
        mktgGeoTotal, pmssGeoTotal
    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name requestTrySecondaryData
 * @description Utility function that makes a call request to  Infoburst  Try   XDC's In Memory Cache for all Try KPI  Details  values .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Try KPI Details.
 */
export function requestTrySecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(2, tryParams, allFilters, _parameters);


    let params2 = tryParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');


    // Secondary

    const TrySecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TrySecondary + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryMutlichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryMultiChartQuery + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryGeoQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryGeoQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryGeoQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryGeoQTDTotal + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryMarketQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryMAQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryProdQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TRYProdNameQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TrySignAppQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TRYSignupAppQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TrySignAppQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TRYSignupAppQTDTotal + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TrySignCatQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TRYSignupCatQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryDownloadTypeQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryDownloadTypeQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryDownloadTypeQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryDownloadTypeQTDTotal + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryQFMTypeQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryQFMTypeQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });



    responseArray.push(
        TrySecondary, TryMutlichart, TryQTD, TryGeoQTD, TryMarketQTD,
        TryProdQTD, TrySignAppQTD, TrySignCatQTD, TryDownloadTypeQTD, TryQFMTypeQTD, TryGeoQTDTotal,TrySignAppQTDTotal,TryDownloadTypeQTDTotal
    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;

}
/**
 * @name requestBuySecondaryData
 * @description Utility function that makes a call request to  Infoburst  Traffic, Market and Finance   XDC's In Memory Cache for all Buy Secondary KPI  values .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Buy Secondary KPI value.
 */
export function requestBuySecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(10, buyMktgParams, allFilters, _parameters);
    generateFilterParams(12, buyGrossParams, allFilters, _parameters);
    generateFilterParams(15, buyConversionParams, allFilters, _parameters);
    generateFilterParams(7, pmssParams, allFilters, _parameters);
    generateFilterParams(16, buyLTVParams, allFilters, _parameters);
    // generateFilterParams(5, trafficParams, allFilters, _parameters)



    let params5 = buyConversionParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params6 = buyMktgParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params7 = buyGrossParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params8 = pmssParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params9 = buyLTVParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    


    // Traffic  & Bounce
    const DiscoverG5Secondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionSecondaryPrimary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Marketing
    const ltvSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROISecondary + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const mktgSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMarketSourceARRSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const pmssSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const financeSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossActualTargetSecondary + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    responseArray.push(DiscoverG5Secondary, mktgSecondary, pmssSecondary,
        financeSecondary, ltvSecondary
    );
    
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name requestBuyTrafficSecondaryData
 * @description Utility function that makes a call request to  Infoburst  Traffic  XDC's In Memory Cache for Gross Conversion KPI details .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Buy Conversion KPI Details
 */
export function requestBuyTrafficSecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(15, buyConversionParams, allFilters, _parameters);


    let params5 = buyConversionParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    // console.log("Traffic Network Request: ", Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficSecondary + params5 + '&json=1');
    // Traffic  & Bounce
    const DiscoverG5Secondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionSecondaryPrimary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const DiscoverG5Multichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionMultiChart + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const DiscoverG5QTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionQTDQuery + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const DiscoverG5GeoQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionGeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5GeoQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionGeoQTDTotal + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const DiscoverG5MarketQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionMAQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Web Segment QTD
    const DiscoverG5SegmentQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionWebSegQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Last touch channelQTD 
    const DiscoverGLTCQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionLTCQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverGLTCQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionLTCQTDTotal + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Conversion Type QTD
    const DiscoverG5ConvQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionConvTypeQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Mobile Vs Desktop QTD
    const DiscoverMobDesk = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionMobVsDesQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //NEw Vs Repeat QTD
    const DiscoverNewRep = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionNewVsRepQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverQFM = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionQFMQTD + params5 + '&json=1', {
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
        DiscoverNewRep,
        DiscoverQFM,
        DiscoverG5GeoQTDTotal,
        DiscoverGLTCQTDTotal
    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name requestBuyMarketSecondaryData
 * @description Utility function that makes a call request to  Infoburst  Market  XDC's In Memory Cache for Mktg Sourced and PAid Media Spend KPI details .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Buy Mktg Sourced and PAid Media Spend KPI Details
 */
export function requestBuyMarketSecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(10, buyMktgParams, allFilters, _parameters);
    generateFilterParams(7, pmssParams, allFilters, _parameters);
    generateFilterParams(16, buyLTVParams, allFilters, _parameters);


    let params5 = buyMktgParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params6 = pmssParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    let params7 = buyLTVParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    //Marketing
    const mktgSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMarketSourceARRSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const mktgMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMktgSourceARRMutlichart + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const mktgQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMKTGSourcedARRQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const mktgGeo = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMKTGSourcedARRGeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const mktgGeoTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMKTGSourcedARRGeoQTDTotal + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const mktgMarket = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMKTGSourcedARRMAQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Channel QTD
    const mktgChannelMu = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMKTGSourcedARRChannelQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Channel QTD
    const mktgSegment = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMKTGSourcedARRSegmentQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Channel QTD
    const mktgProd = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMarektingSourceARRProdQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // console.log("Paid Media Spend and Source NEtwork request:", Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMSecondary + params6 + '&json=1');
    //Paid Media Sourced and Spend
    const pmssSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const pmssMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendMultiChart + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const pmssQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const pmssGeo = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendGeoQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const pmssGeoTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendGeoQTDTotal + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const pmssMarket = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendMAQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Channel QTD
    const pmssChannelMu = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendChannelQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

// LTV ROI
console.log('Running LTV Secondary')
const ltvSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROISecondary + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});

const ltvMulti = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROIMultiChart + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROIQTD + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvGeo = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROIGeoQTD + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvGeoTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROIGeoQTDTotal + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvMarket = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROIMAQTD + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvProduct = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROIProdQTD + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvSegment = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROISegmentQTD + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvSubs = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROISubsOfferQTD + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});

    responseArray.push(
        mktgSecondary, mktgMultichart, mktgQTD, mktgGeo, mktgMarket, mktgChannelMu
        , pmssSecondary, pmssMultichart, pmssQTD, pmssGeo, pmssMarket, pmssChannelMu, mktgProd,
        mktgSegment,
        ltvSecondary,ltvMulti,ltvQTD,ltvGeo,ltvMarket,ltvProduct,ltvSegment,ltvSubs,
        mktgGeoTotal, pmssGeoTotal, ltvGeoTotal

    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name requestBuyFinanceSecondaryData
 * @description Utility function that makes a call request to  Infoburst  FinanceTune1  XDC's In Memory Cache for Gross New ARR And Subs KPI details .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Buy Gross New ARR And Subs KPI Details
 */
export function requestBuyFinanceSecondaryData(allFilters, _parameters) {
    responseArray = [];


    generateFilterParams(12, buyGrossParams, allFilters, _parameters);

    let params8 = buyGrossParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    const financeSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossActualTargetSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossMultichart + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // const financeUnitsMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossUnits + params8 + '&json=1', {
    //     headers: headers,
    //     responseType: 'text'
    // });
    const financeQTDTotals = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossGeoQtd + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossGeoQtdTotal + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMarketQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossMarketQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeSegmentQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossSegmentQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeRouteQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossRouteQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeProductQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossProductQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeQFMQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossNewQFMTypeQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    

    responseArray.push(financeSecondary, financeMultichart, financeQTDTotals, financeGeoQTD, financeMarketQTD, financeSegmentQTD, financeRouteQTD, financeProductQTD,financeQFMQTD,financeGeoQTDTotal);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name requestUseSecondaryData
 * @description Utility function that makes a call request to  Infoburst  Use  XDC's In Memory Cache for all Use KPIs details .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Use KPIs Details
 */
export function requestUseSecondaryData(allFilters, _parameters) {
    responseArray = [];

    generateFilterParams(1, useParams, allFilters, _parameters);

    let params8 = useParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    const useSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const useMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseMultichart + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const useQTDTotals = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const useGeoQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseGeoQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const useGeoQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseGeoQTDTotal + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const useMarketQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseMAQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const useSegmentQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseSegQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const useSubsQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseSubsOfferQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const UseCumuMembers = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseCumuMembersActual + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(useSecondary, useMultichart, useQTDTotals, useGeoQTD, useMarketQTD, useSegmentQTD, useSubsQTD, UseCumuMembers, useGeoQTDTotal);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name requestRenewCancelSecondaryData
 * @description Utility function that makes a call request to  Infoburst  FinanceTune2  XDC's In Memory Cache for all Cancellation KPIs details .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the FinanceTune2  Cancellations KPIs Details
 */
export function requestRenewCancelSecondaryData(allFilters, _parameters) {
    responseArray = [];
    resetRenewParams();
    generateFilterParams(9, financeParams, allFilters, _parameters);
    generateFilterParams(14, cancelAdobeParams, allFilters, _parameters);
    generateFilterParams(14, cancelRetailParams, allFilters, _parameters);


    cancelRetailParams.push({
        prompt: 'routeFilters',
        value: `'E-TAIL/RETAIL','RESELLER'`
    })
    cancelAdobeParams.push({
        prompt: 'routeFilters',
        value: `'ADOBE.COM/CC.COM'`
    });

    let params9 = financeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    let params7 = cancelAdobeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params6 = cancelRetailParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    // Blank Renew Calls for Cancellations
    const financeSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8Multichart + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const financeQTDTotals = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8QTD + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtd + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtdTotal + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMarketQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8MarketQTD + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeSegmentQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8SegmentQTD + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const financeProductQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ProductQTD + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    responseArray.push(financeSecondary, financeMultichart, financeQTDTotals, financeGeoQTD, financeMarketQTD, financeSegmentQTD, financeProductQTD)

    // AdobeCom Cancellations

    const cancelAdobeSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelAdobeMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8Multichart + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const cancelAdobeQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8QTD + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelAdobeGeo = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtd + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelAdobeGeoTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtdTotal + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelAdobeMarket = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8MarketQTD + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelAdobeSegment = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8SegmentQTD + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelAdobeProduct = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ProductQTD + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    responseArray.push(cancelAdobeSecondary, cancelAdobeMultichart, cancelAdobeQTD, cancelAdobeGeo, cancelAdobeMarket, cancelAdobeSegment, cancelAdobeProduct);

    //Etail Retail Cancellations
    const cancelEtailSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelEtailMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8Multichart + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const cancelEtailQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8QTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelEtailGeo = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtd + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelEtailGeoTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtdTotal + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelEtailMarket = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8MarketQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelEtailSegment = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8SegmentQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelEtailProduct = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ProductQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(cancelEtailSecondary, cancelEtailMultichart, cancelEtailQTD, cancelEtailGeo, cancelEtailMarket, cancelEtailSegment, cancelEtailProduct,financeGeoQTDTotal,cancelAdobeGeoTotal,cancelEtailGeoTotal);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name requestRenewDetailsSecondaryData
 * @description Utility function that makes a call request to  Infoburst  Renew  XDC's In Memory Cache for all QTR and EOT  KPIs details .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Renew  QTR and EOT KPIs Details
 */
export function requestRenewDetailsSecondaryData(allFilters, _parameters) {

    responseArray = [];
    resetRenewParams();

    generateFilterParams(13, renewParamsERetail, allFilters, _parameters);
    generateFilterParams(4, renewParamsAdobeCom, allFilters, _parameters);
    generateFilterParams(13, renewParamsReseller, allFilters, _parameters);

    renewParamsERetail.push({
        prompt: 'routeFilters',
        value: `'E-TAIL/RETAIL'`
    })

    renewParamsAdobeCom.push({
        prompt: 'routeFilters',
        value: `'ADOBE.COM/CC.COM'`
    });
    renewParamsReseller.push({
        prompt: 'routeFilters',
        value: `'RESELLER'`
    });
    let params8 = renewParamsERetail.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    let params6 = renewParamsReseller.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    let params5 = renewParamsAdobeCom.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    //Adobe.com
    const renewEtailSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewEtailMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFMultiChartQuery + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const renewEtailQTDTotals = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewEtailGeoQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFGeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewEtailGeoQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFGeoQTDTotal + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewEtailMarketQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFMAQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewEtailSegmentQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFSegmentsQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewEtailSubsQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFProdQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    responseArray.push(renewEtailSecondary, renewEtailMultichart, renewEtailQTDTotals, renewEtailGeoQTD, renewEtailMarketQTD, renewEtailSegmentQTD);

    //Renew  RESELLER

    const renewSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewMultiChartQuery + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const renewQTDTotals = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewGeoQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewGeoQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewGeoQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewGeoQTDTotal + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewMarketQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewMAQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewSegmentQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewSegmentsQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(renewSecondary, renewMultichart, renewQTDTotals, renewGeoQTD, renewMarketQTD, renewSegmentQTD);
    const renewResellerSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerMultichart = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFMultiChartQuery + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerQTDTotals = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerGeoQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFGeoQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerGeoQTDTotal = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFGeoQTDTotal + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerMarketQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFMAQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerSegmentQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFSegmentsQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerProductQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFProdQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    responseArray.push(renewResellerSecondary, renewResellerMultichart, renewResellerQTDTotals, renewResellerGeoQTD, renewResellerMarketQTD, 
         renewResellerSegmentQTD, renewEtailSubsQTD, renewResellerProductQTD, renewGeoQTDTotal,renewEtailGeoQTDTotal,renewResellerGeoQTDTotal);

    let promiseArr = Promise.all(responseArray);
    return promiseArr;
}
/**
 * @name requestRenewSecondaryData
 * @description Utility function that makes a call request to  Infoburst  FinanceTune2 and Renew  XDC's In Memory Cache for all Renew Secondary Card Values.
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Renew  Seccondary Card Values
 */
export function requestRenewSecondaryData(allFilters, _parameters) {
    responseArray = [];
    resetRenewParams();

    generateFilterParams(9, financeParams, allFilters, _parameters);
    generateFilterParams(14, cancelAdobeParams, allFilters, _parameters);
    generateFilterParams(14, cancelRetailParams, allFilters, _parameters);
    generateFilterParams(13, renewParamsERetail, allFilters, _parameters);
    generateFilterParams(13, renewParamsReseller, allFilters, _parameters);
    generateFilterParams(4, renewParamsAdobeCom, allFilters, _parameters);

    renewParamsERetail.push({
        prompt: 'routeFilters',
        value: `'E-TAIL/RETAIL'`
    })

    renewParamsAdobeCom.push({
        prompt: 'routeFilters',
        value: `'ADOBE.COM/CC.COM'`
    });
    renewParamsReseller.push({
        prompt: 'routeFilters',
        value: `'RESELLER'`
    });

    cancelRetailParams.push({
        prompt: 'routeFilters',
        value: `'E-TAIL/RETAIL','RESELLER'`
    })
    cancelAdobeParams.push({
        prompt: 'routeFilters',
        value: `'ADOBE.COM/CC.COM'`
    });



    let params9 = financeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params7 = cancelAdobeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params5 = renewParamsAdobeCom.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params6 = cancelRetailParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params8 = renewParamsERetail.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    let params10 = renewParamsReseller.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    //All Routes
    const cancelSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Adobe . Com

    const cancelAdobeSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewUIPFSecondaryAdobe = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Resller Etail And Retail
    const cancelEtailResellerSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewSecondaryResller = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewSecondary + params10 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewUIPFSecondaryEtail = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });





    responseArray.push(cancelSecondary, cancelAdobeSecondary, renewUIPFSecondaryAdobe, cancelEtailResellerSecondary, renewSecondaryResller, renewUIPFSecondaryEtail);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterPrimaryData
 * @description Utility function that makes a call request to  Infoburst FinanceTune1, Traffic, Use, Buy  Try, And Renew XDC's Asynchronous mode for all Primary KPI values of actuals, targets (QRF), vsQrf, and FQTarget.
 * @param  {Array} allFilters
 * @param {Array} _parameters
 * @returns Promise Array containing all 6 objects. Each containing values for the Primary KPI.
 */
export function filterPrimaryData(allFilters, _parameters) {
    responseArray = [];
    //Generate the filter list 
    generateFilterParams(2, tryParams, allFilters, _parameters);
    generateFilterParams(5, trafficParams, allFilters, _parameters);
    generateFilterParams(9, financeParams, allFilters, _parameters);
    generateFilterParams(8, uqfmParams, allFilters, _parameters);
    generateFilterParams(1, useParams, allFilters, _parameters);
    generateFilterParams(4, renewParamsAdobeCom, allFilters, _parameters);
    generateFilterParams(15, buyConversionParams, allFilters, _parameters);

    //turn each list into a string
    let params2 = tryParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');

    let params5 = trafficParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');

    let params8 = financeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');
    let params6 = uqfmParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params10 = useParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params11 = renewParamsAdobeCom.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    let params15 = buyConversionParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');


    const primaryFinancial = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetPrimary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const primaryDiscover = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficPrimary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const primaryTry = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryActualTargetPrimary + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Secondary
    const primaryBuy = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionSecondaryPrimary + params15 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const primaryUse = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseRepeatMAUPrimary + params10 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const primaryRenew = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFPrimary + params11 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(primaryFinancial, primaryDiscover, primaryTry, primaryBuy, primaryUse, primaryRenew);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterDiscoverSecondary
 * @description Utility function that makes a call request to  Infoburst  FinanceTune1 and FinanceTune2 XDC's Asynchronous mode for all Secondary KPI values of actuals, targets (QRF), vsQrf, and FQTarget.
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Finance Secondary KPIs.
 */
export function filterDiscoverSecondary(allFilters, _parameters) {
    responseArray = [];


    //Generate the filter list 
    // console.log('Utils 556: ', allFilters, _parameters)
    generateFilterParams(5, trafficParams, allFilters, _parameters);
    generateFilterParams(8, uqfmParams, allFilters, _parameters);
    generateFilterParams(6, mktgParams, allFilters, _parameters);
    generateFilterParams(7, pmssParams, allFilters, _parameters);

    //turn each list into a string

    // console.log('MKTG Params before reduce', mktgParams);
    // console.log('PMSS Params before reduce', pmssParams);
    let params7 = mktgParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params8 = pmssParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');


    let params5 = trafficParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;

    }, '');

    let params6 = uqfmParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');


    // console.log(params1,params2,params3);
    //Primary 
    const mu = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUSecondary + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const traffic = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const uqfm = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Secondary
    const pmss = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    responseArray.push(mu, traffic, uqfm, pmss);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterFinanceSecondaryData
 * @description Utility function that makes a call request to  Infoburst  FinanceTune1 and FinanceTune2 XDC's Asynchronous mode for all Secondary KPI values of actuals, targets (QRF), vsQrf, and FQTarget.
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Finance Secondary KPIs.
 */
export function filterFinanceSecondaryData(allFilters, _parameters) {
    responseArray = [];


    generateFilterParams(9, financeParams, allFilters, _parameters);

    let params8 = financeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    const financeSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const finance2Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(financeSecondary, finance2Secondary);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterFinanceXdc1SecondaryData
 * @description Utility function that makes a call request to  Infoburst  FinanceTune1   XDC's Asynchronous mode for all Net New and Gross New ARR Details  values .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Finance Net New and Gross New ARR Details.
 */
export function filterFinanceXdc1SecondaryData(allFilters, _parameters) {
    responseArray = [];


    generateFilterParams(9, financeParams, allFilters, _parameters);

    let params8 = financeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');


    const financeSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8Multichart + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeUnitsMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8Units + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeQTDTotals = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8QTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8GeoQtd + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8GeoQtdTotal + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8MarketQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeSegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8SegmentQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeRouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8RouteQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.FinancialG8ProductQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(financeSecondary, financeMultichart, financeUnitsMultichart, financeQTDTotals, financeGeoQTD, financeMarketQTD, financeSegmentQTD, financeRouteQTD, financeProductQTD,financeGeoQTDTotal);
    let promiseArr = Promise.all(responseArray);
    return promiseArr;
}
/**
 * @name filterFinanceXdc2SecondaryData
 * @description Utility function that makes a call request to  Infoburst  Traffic and UQFM   XDC's Asynchronous mode for all Traffic, Bounce Rate and UQFM Details  values .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Discover Traffic, Bounce Rate and UQFM Details.
 */
export function filterFinanceXdc2SecondaryData(allFilters, _parameters) {
    responseArray = [];


    generateFilterParams(9, financeParams, allFilters, _parameters);

    let params8 = financeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    const financeSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8Multichart + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeUnitsMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8Units + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeQTDTotals = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8QTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtd + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtdTotal + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8MarketQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeSegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8SegmentQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeRouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8RouteQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ProductQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(financeSecondary, financeMultichart, financeUnitsMultichart, financeQTDTotals, financeGeoQTD, financeMarketQTD, financeSegmentQTD, financeRouteQTD, financeProductQTD,financeGeoQTDTotal);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterTrafficSecondaryData
 * @description Utility function that makes a call request to  Infoburst  Traffic and UQFM   XDC's Asynchronous mode for all Traffic, Bounce Rate and UQFM Details  values .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Discover Traffic, Bounce Rate and UQFM Details.
 */
export function filterTrafficSecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(5, trafficParams, allFilters, _parameters);
    generateFilterParams(8, uqfmParams, allFilters, _parameters);

    let params5 = trafficParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params6 = uqfmParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    // console.log("Traffic Network filter: ", Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficSecondary + params5 + '&json=1');
    // Traffic  & Bounce
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
    const DiscoverG5GeoQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficGeoQTDTotal + params5 + '&json=1', {
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
    const DiscoverGLTCQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficLTCQTD + params5 + '&json=1', {
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

    // console.log("UQFM Network Request: ", Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvSecondary + params6 + '&json=1');

    // UQFM
    const uqfmSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const uqfmMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvMutlichart + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const uqfmQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const uqfmGeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvGeoQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const uqfmGeoQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvGeoQTDTotal + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const uqfmMarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.uqfmXDCID + Infoburst.summaryQueryNames.DiscoverUQFMConvMAQTD + params6 + '&json=1', {
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
        DiscoverNewRep,
        uqfmSecondary, uqfmMultichart, uqfmQTD, uqfmGeoQTD, uqfmMarketQTD,
        DiscoverG5GeoQTDTotal,
        uqfmGeoQTDTotal,
        DiscoverGLTCQTDTotal
    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterMKTGSecondaryData
 * @description Utility function that makes a call request to  Infoburst  Market   XDC's Asynchronous mode for all Marketable U, Paid Media (s) Details  values .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Discover MU, Paid Media Spend and Sourced Details.
 */
export function filterMKTGSecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(6, mktgParams, allFilters, _parameters);
    generateFilterParams(7, pmssParams, allFilters, _parameters);
    let params5 = mktgParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params6 = pmssParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');


    //Marketing
    const mktgSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const mktgMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUMutlichart + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const mktgQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const mktgGeo = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUGeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const mktgGeoTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUGeoQTDTotal + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const mktgMarket = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUMAQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Channel QTD
    const mktgChannelMu = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverMUChannelQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Paid Media Sourced and Spend
    const pmssSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const pmssMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMMutlichart + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const pmssQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const pmssGeo = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMGeoQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const pmssGeoTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMGeoQTDTotal + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const pmssMarket = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMMAQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Channel QTD
    const pmssChannelMu = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMChannelQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });



    responseArray.push(
        mktgSecondary, mktgMultichart, mktgQTD, mktgGeo, mktgMarket, mktgChannelMu
        , pmssSecondary, pmssMultichart, pmssQTD, pmssGeo, pmssMarket, pmssChannelMu,
        mktgGeoTotal,pmssGeoTotal
    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterTrySecondaryData
 * @description Utility function that makes a call request to  Infoburst  Try   XDC's Asynchronous mode for all Try KPI  Details  values .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Try KPI Details.
 */
export function filterTrySecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(2, tryParams, allFilters, _parameters);


    let params2 = tryParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');


    // Secondary

    const TrySecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TrySecondary + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryMutlichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryMultiChartQuery + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryGeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryGeoQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryGeoQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryGeoQTDTotal + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryMarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryMAQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryProdQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TRYProdNameQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TrySignAppQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TRYSignupAppQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TrySignAppQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TRYSignupAppQTDTotal + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TrySignCatQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TRYSignupCatQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryDownloadQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryDownloadTypeQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryDownloadQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryDownloadTypeQTDTotal + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const TryQFMQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.tryXDCID + Infoburst.summaryQueryNames.TryQFMTypeQTD + params2 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });


    responseArray.push(
        TrySecondary, TryMutlichart, TryQTD, TryGeoQTD, TryMarketQTD,
        TryProdQTD, TrySignAppQTD, TrySignCatQTD, TryDownloadQTD, TryQFMQTD, TryGeoQTDTotal,TrySignAppQTDTotal,TryDownloadQTDTotal
    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;

}
/**
 * @name filterBuySecondaryData
 * @description Utility function that makes a call request to  Infoburst  Traffic, Market and Finance   XDC's Asynchronous mode for all Buy Secondary KPI  values .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Buy Secondary KPI value.
 */
export function filterBuySecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(10, buyMktgParams, allFilters, _parameters);
    generateFilterParams(12, buyGrossParams, allFilters, _parameters);
    generateFilterParams(15, buyConversionParams, allFilters, _parameters);
    generateFilterParams(7, pmssParams, allFilters, _parameters);
    generateFilterParams(16, buyLTVParams, allFilters, _parameters);



    let params5 = buyConversionParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params6 = buyMktgParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params7 = buyGrossParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params8 = pmssParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params9 = buyLTVParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    // Traffic  & Bounce
    const DiscoverG5Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionSecondaryPrimary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    //Marketing
    const ltvSecondary = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROISecondary + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const mktgSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMarketSourceARRSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const pmssSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const financeSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossActualTargetSecondary + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    responseArray.push(DiscoverG5Secondary, mktgSecondary, pmssSecondary,
        financeSecondary, ltvSecondary
    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterBuyTrafficSecondaryData
 * @description Utility function that makes a call request to  Infoburst  Traffic  XDC's Asynchronous mode for Gross Conversion KPI details .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Buy Conversion KPI Details
 */
export function filterBuyTrafficSecondaryData(allFilters, _parameters) {
    responseArray = [];
    generateFilterParams(15, buyConversionParams, allFilters, _parameters);
    let params5 = buyConversionParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');


    // console.log("Traffic Network filter: ", Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.TrafficSecondary + params5 + '&json=1');
    // Traffic  & Bounce
    const DiscoverG5Secondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionSecondaryPrimary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const DiscoverG5Multichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionMultiChart + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const DiscoverG5QTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionQTDQuery + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const DiscoverG5GeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionGeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverG5GeoQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionGeoQTDTotal + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const DiscoverG5MarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionMAQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Web Segment QTD
    const DiscoverG5SegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionWebSegQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Last touch channelQTD 
    const DiscoverGLTCQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionLTCQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverGLTCQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionLTCQTDTotal + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Conversion Type QTD
    const DiscoverG5ConvQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionConvTypeQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Mobile Vs Desktop QTD
    const DiscoverMobDesk = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionMobVsDesQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //NEw Vs Repeat QTD
    const DiscoverNewRep = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionNewVsRepQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const DiscoverQFM = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.trafficXDCID + Infoburst.summaryQueryNames.BuyConversionQFMQTD + params5 + '&json=1', {
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
        DiscoverNewRep,
        DiscoverQFM,
        DiscoverG5GeoQTDTotal,
        DiscoverGLTCQTDTotal

    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterBuyMarketSecondaryData
 * @description Utility function that makes a call request to  Infoburst  Market  XDC's Asynchronous mode for Mktg Sourced and PAid Media Spend KPI details .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Buy Mktg Sourced and PAid Media Spend KPI Details
 */
export function filterBuyMarketSecondaryData(allFilters, _parameters) {
    // console.log('requesting marketing data');
    responseArray = [];
    generateFilterParams(10, buyMktgParams, allFilters, _parameters);
    generateFilterParams(7, pmssParams, allFilters, _parameters);
    generateFilterParams(16,buyLTVParams, allFilters, _parameters);


    let params5 = buyMktgParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params6 = pmssParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params7 = buyLTVParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    //Marketing
    const mktgSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMarketSourceARRSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const mktgMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMktgSourceARRMutlichart + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const mktgQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMKTGSourcedARRQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const mktgGeo = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMKTGSourcedARRGeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const mktgGeoTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMKTGSourcedARRGeoQTDTotal + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const mktgMarket = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMKTGSourcedARRMAQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Channel QTD
    const mktgChannelMu = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMKTGSourcedARRChannelQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    // Channel QTD
    const mktgSegment = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMKTGSourcedARRSegmentQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Channel QTD
    const mktgProd = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyMarektingSourceARRProdQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // console.log("Paid Media Spend and Source NEtwork request:", Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.DiscoverPMSUQFMSecondary + params6 + '&json=1');
    //Paid Media Sourced and Spend
    const pmssSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Multichart
    const pmssMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendMultiChart + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //QTD
    const pmssQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Geo QTD
    const pmssGeo = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendGeoQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const pmssGeoTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendGeoQTDTotal + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Market QTD
    const pmssMarket = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendMAQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // Channel QTD
    const pmssChannelMu = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyPMSpendChannelQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

  // LTV ROI
  const ltvSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROISecondary + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});

const ltvMulti = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROIMultiChart + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROIQTD + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvGeo = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROIGeoQTD + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvGeoTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROIGeoQTDTotal + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvMarket = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROIMAQTD + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvProduct = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROIProdQTD + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvSegment = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROISegmentQTD + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});
const ltvSubs = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.marketXDCID + Infoburst.summaryQueryNames.BuyLTVROISubsOfferQTD + params7 + '&json=1', {
    headers: headers,
    responseType: 'text'
});

console.log('ltv subs',ltvSubs);
    responseArray.push(
        mktgSecondary, mktgMultichart, mktgQTD, mktgGeo, mktgMarket, mktgChannelMu
        , pmssSecondary, pmssMultichart, pmssQTD, pmssGeo, pmssMarket, pmssChannelMu,
        mktgProd, mktgSegment,        ltvSecondary,ltvMulti,ltvQTD,ltvGeo,ltvMarket,ltvProduct,ltvSegment,ltvSubs,
        mktgGeoTotal, pmssGeoTotal, ltvGeoTotal

    );
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterBuyFinanceSecondaryData
 * @description Utility function that makes a call request to  Infoburst  FinanceTune1  XDC's Asynchronous mode for Gross New ARR And Subs KPI details .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Buy Gross New ARR And Subs KPI Details
 */
export function filterBuyFinanceSecondaryData(allFilters, _parameters) {
    responseArray = [];


    generateFilterParams(12, buyGrossParams, allFilters, _parameters);

    let params8 = buyGrossParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    const financeSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossActualTargetSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossMultichart + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // const financeUnitsMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossUnits + params8 + '&json=1', {
    //     headers: headers,
    //     responseType: 'text'
    // });
    const financeQTDTotals = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossGeoQtd + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossGeoQtdTotal + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossMarketQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeSegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossSegmentQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeRouteQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossRouteQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossProductQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeQFMQTD = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.BuyGrossNewQFMTypeQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(financeSecondary, financeMultichart, financeQTDTotals, 
         financeGeoQTD, financeMarketQTD, financeSegmentQTD, financeRouteQTD, financeProductQTD,financeQFMQTD,financeGeoQTDTotal);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterUseSecondaryData
 * @description Utility function that makes a call request to  Infoburst  Use  XDC's Asynchronous mode for all Use KPIs details .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Use KPIs Details
 */
export function filterUseSecondaryData(allFilters, _parameters) {
    responseArray = [];


    generateFilterParams(1, useParams, allFilters, _parameters);

    let params8 = useParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    const useSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const useMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseMultichart + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const useQTDTotals = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const useGeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseGeoQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const useGeoQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseGeoQTDTotal + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const useMarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseMAQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const useSegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseSegQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const useSubsQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseSubsOfferQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const UseCumuMembers = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.useXDCID + Infoburst.summaryQueryNames.UseCumuMembersActual + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(useSecondary, useMultichart, useQTDTotals, useGeoQTD, useMarketQTD, useSegmentQTD, useSubsQTD, UseCumuMembers, useGeoQTDTotal);

    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterRenewCancelSecondaryData
 * @description Utility function that makes a call request to  Infoburst  FinanceTune2  XDC's Asynchronous mode for all Cancellation KPIs details .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the FinanceTune2  Cancellations KPIs Details
 */
export function filterRenewCancelSecondaryData(allFilters, _parameters) {
    responseArray = [];
    resetRenewParams();
    generateFilterParams(9, financeParams, allFilters, _parameters);
    generateFilterParams(14, cancelAdobeParams, allFilters, _parameters);
    generateFilterParams(14, cancelRetailParams, allFilters, _parameters);

    cancelRetailParams.push({
        prompt: 'routeFilters',
        value: `'E-TAIL/RETAIL','RESELLER'`
    })
    cancelAdobeParams.push({
        prompt: 'routeFilters',
        value: `'ADOBE.COM/CC.COM'`
    });

    let params9 = financeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    let params7 = cancelAdobeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params6 = cancelRetailParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    // Blank Renew Calls for Cancellations

    const financeSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8Multichart + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const financeQTDTotals = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8QTD + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtd + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeGeoQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtdTotal + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeMarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8MarketQTD + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const financeSegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8SegmentQTD + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const financeProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ProductQTD + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    responseArray.push(financeSecondary, financeMultichart, financeQTDTotals, financeGeoQTD, financeMarketQTD, financeSegmentQTD, financeProductQTD)

    // AdobeCom Cancellations

    const cancelAdobeSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelAdobeMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8Multichart + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const cancelAdobeQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8QTD + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelAdobeGeo = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtd + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelAdobeGeoTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtdTotal + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelAdobeMarket = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8MarketQTD + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelAdobeSegment = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8SegmentQTD + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelAdobeProduct = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ProductQTD + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    responseArray.push(cancelAdobeSecondary, cancelAdobeMultichart, cancelAdobeQTD, cancelAdobeGeo, cancelAdobeMarket, cancelAdobeSegment, cancelAdobeProduct);

    //Etail Retail Cancellations
    const cancelEtailSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelEtailMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8Multichart + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const cancelEtailQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8QTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelEtailGeo = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtd + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelEtailGeoTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8GeoQtdTotal + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelEtailMarket = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8MarketQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelEtailSegment = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8SegmentQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const cancelEtailProduct = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ProductQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(cancelEtailSecondary, cancelEtailMultichart, cancelEtailQTD, cancelEtailGeo, cancelEtailMarket, cancelEtailSegment, 
         cancelEtailProduct,financeGeoQTDTotal,cancelAdobeGeoTotal,cancelEtailGeoTotal);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name filterRenewDetailsSecondaryData
 * @description Utility function that makes a call request to  Infoburst  Renew  XDC's Asynchronous mode for all QTR and EOT  KPIs details .
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Renew  QTR and EOT KPIs Details
 */
export function filterRenewDetailsSecondaryData(allFilters, _parameters) {
    responseArray = [];
    resetRenewParams();

    generateFilterParams(13, renewParamsERetail, allFilters, _parameters);

    generateFilterParams(4, renewParamsAdobeCom, allFilters, _parameters);
    generateFilterParams(13, renewParamsReseller, allFilters, _parameters);

    renewParamsERetail.push({
        prompt: 'routeFilters',
        value: `'E-TAIL/RETAIL'`
    });

    renewParamsAdobeCom.push({
        prompt: 'routeFilters',
        value: `'ADOBE.COM/CC.COM'`
    });
    renewParamsReseller.push({
        prompt: 'routeFilters',
        value: `'RESELLER'`
    });
    let params8 = renewParamsERetail.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    let params6 = renewParamsReseller.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    let params5 = renewParamsAdobeCom.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    //Etail Renew
    const renewEtailSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewEtailMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFMultiChartQuery + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const renewEtailQTDTotals = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewEtailGeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFGeoQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewEtailGeoQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFGeoQTDTotal + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewEtailMarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFMAQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewEtailSegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFSegmentsQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewEtailSubsQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFProdQTD + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    responseArray.push(renewEtailSecondary, renewEtailMultichart, renewEtailQTDTotals, renewEtailGeoQTD, renewEtailMarketQTD, renewEtailSegmentQTD);

    //Renew  RESELLER
    const renewSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewMultiChartQuery + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    const renewQTDTotals = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewGeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewGeoQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewGeoQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewGeoQTDTotal + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewMarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewMAQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewSegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewSegmentsQTD + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    // const renewProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewProductCategoryQTD + params8 + '&json=1', {
    //     headers: headers,
    //     responseType: 'text'
    // });
    responseArray.push(renewSecondary, renewMultichart, renewQTDTotals, renewGeoQTD, renewMarketQTD, renewSegmentQTD);
    const renewResellerSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerMultichart = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFMultiChartQuery + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerQTDTotals = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerGeoQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFGeoQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerGeoQTDTotal = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFGeoQTDTotal + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerMarketQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFMAQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerSegmentQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFSegmentsQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewResellerProductQTD = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFProdQTD + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    responseArray.push(renewResellerSecondary, renewResellerMultichart, renewResellerQTDTotals, renewResellerGeoQTD, 
        renewResellerMarketQTD, renewResellerSegmentQTD, renewEtailSubsQTD, renewResellerProductQTD, renewGeoQTDTotal,renewEtailGeoQTDTotal, renewResellerGeoQTDTotal );






    let promiseArr = Promise.all(responseArray);
    return promiseArr;
}
/**
 * @name filterRenewSecondaryData
 * @description Utility function that makes a call request to  Infoburst  FinanceTune2 and Renew  XDC's Asynchronous mode for all Renew Secondary Card Values
 * @param  {Array} allFilters An array of each necessary filter dimension with all its possible values
 * @param {Array} _parameters An array of each necessary filter dimension with the users chosen values
 * @returns Promise Array containing values for the Renew  Seccondary Card Values
 */
export function filterRenewSecondaryData(allFilters, _parameters) {
    responseArray = [];
    resetRenewParams();

    generateFilterParams(9, financeParams, allFilters, _parameters);
    generateFilterParams(14, cancelAdobeParams, allFilters, _parameters);
    generateFilterParams(14, cancelRetailParams, allFilters, _parameters);
    generateFilterParams(13, renewParamsERetail, allFilters, _parameters);
    generateFilterParams(13, renewParamsReseller, allFilters, _parameters);
    generateFilterParams(4, renewParamsAdobeCom, allFilters, _parameters);

    renewParamsERetail.push({
        prompt: 'routeFilters',
        value: `'E-TAIL/RETAIL'`
    })

    renewParamsAdobeCom.push({
        prompt: 'routeFilters',
        value: `'ADOBE.COM/CC.COM'`
    });
    renewParamsReseller.push({
        prompt: 'routeFilters',
        value: `'RESELLER'`
    });

    cancelRetailParams.push({
        prompt: 'routeFilters',
        value: `'E-TAIL/RETAIL','RESELLER'`
    })
    cancelAdobeParams.push({
        prompt: 'routeFilters',
        value: `'ADOBE.COM/CC.COM'`
    });


    let params9 = financeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params7 = cancelAdobeParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params5 = renewParamsAdobeCom.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params6 = cancelRetailParams.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');
    let params8 = renewParamsERetail.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    let params10 = renewParamsReseller.reduce((prev, param) => {
        let p = '';
        p = prev + '&' + param.prompt + '=' + param.value;
        return p;
    }, '');

    //All Routes
    const cancelSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params9 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Adobe . Com

    const cancelAdobeSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params7 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewUIPFSecondaryAdobe = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFSecondary + params5 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    //Resller Etail And Retail
    const cancelEtailResellerSecondary = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.newFinanceXDC2ID + Infoburst.summaryQueryNames.FinancialG8ActualTargetSecondary + params6 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewSecondaryResller = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewSecondary + params10 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });
    const renewUIPFSecondaryEtail = axios.get(Infoburst.xdcCacheQueryURL + Infoburst.renewXDCID + Infoburst.summaryQueryNames.RenewUIPFSecondary + params8 + '&json=1', {
        headers: headers,
        responseType: 'text'
    });





    responseArray.push(cancelSecondary, cancelAdobeSecondary, renewUIPFSecondaryAdobe, cancelEtailResellerSecondary, renewSecondaryResller, renewUIPFSecondaryEtail);
    let promiseArr = Promise.all(responseArray);

    return promiseArr;
}
/**
 * @name retrieveUpdatedAndQuarter
 * @description Utility function that makes a call request to  Infoburst  FinanceTune1  XDC's In Memory Cache for the Updated As Of Date and Current Quarter Week
 * @returns Promise Array containing values for the Updated as of Date and Current Quarter/Week
 */
export function retrieveUpdatedAndQuarter() {
    responseArray = [];



    let updatedData = axios.get(Infoburst.xdcMemCacheQueryURL + Infoburst.newFinanceXDC1ID + Infoburst.summaryQueryNames.UpdatedDate + '&json=1', {
        headers: headers,
        responseType: 'text'
    });

    responseArray.push(updatedData);
    promiseArr = Promise.all(responseArray);
    return promiseArr;

}

/**
 * @name fetchComments
 * @description Utility function that makes a call request to  Infoburst  GTMPOC Database Query to fetch comments
 * @param {Integer} metricId
 * @returns Returns an Promise Array  with comments for this metric
 */
export function fetchComments(metricId) {
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'fetchComments',
        "columnNames": 'true',
        "params": {
            "metric": metricId
        }
    };
    // console.log(Infoburst.dbQuery, body, { headers: headers, responseType: 'text' })

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
                let body1 = {
                    "conn": `${Infoburst.appXDCID}`,
                    "qry": 'fetchCommentsCount',
                    "columnNames": 'true',
                    "params": {}
                };

                let post = axios.post(Infoburst.dbQuery, body1, { headers: headers, responseType: 'text' }).then((res1) => {
                    const commentsComplete = { comment: response.data, replies: res.data, allComments: res1.data };

                    return commentsComplete;
                });
                return post;
            });

            return replies;
        } else {
            return [];
        }

    });

    let responseARr = Promise.all([res1]);

    return responseARr;
}
/**
 * @name fetchCommentsCount
 * @description Utility function that makes a call request to  Infoburst  GTMPOC Database Query to fetch comments
 * @param {Integer} metricId
 * @returns Returns an Promise Array with the total comments for this metric
 */
export function fetchCommentsCount() {
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'fetchCommentsCount',
        "columnNames": 'true',
        "params": {}
    };

    let post = axios.post(Infoburst.dbQuery, body, { headers: headers, responseType: 'text' }).then((res) => {
        // console.log(res.data);
        return res.data;
    });

    return Promise.all([post]);
}
/**
 * @name postComment
 * @description Utility function that makes a call request to  Infoburst  GTMPOC Database Query to post a comment
 * @param {Integer} metricId
 * @param {Object} params - 
 * @returns Returns an Promise Array with the new comments for this metric
 */
export function postComment(params, metric) {
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

    let fetchBody = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'fetchComments',
        "columnNames": 'true',
        "params": {
            "metric": metric
        }
    };
    let post = axios.post(Infoburst.dbQuery, body, {
        headers: headers,
        responseType: 'text'
    }).then((res) => {
        const res1 = axios.post(Infoburst.dbQuery, fetchBody, { headers: headers, responseType: 'text' }).then((response) => {

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
                    let body1 = {
                        "conn": `${Infoburst.appXDCID}`,
                        "qry": 'fetchCommentsCount',
                        "columnNames": 'true',
                        "params": {}
                    };

                    let post = axios.post(Infoburst.dbQuery, body1, { headers: headers, responseType: 'text' }).then((res1) => {
                        const commentsComplete = { comment: response.data, replies: res.data, allComments: res1.data };

                        return commentsComplete;
                    });
                    return post;
                });

                return replies;
            } else {
                return [];
            }

        });

        return res1;
    });

    return Promise.all([post]);

}

export function postReply(params, metric) {
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
    let fetchBody = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'fetchComments',
        "columnNames": 'true',
        "params": {
            "metric": metric
        }
    };
    let post = axios.post(Infoburst.dbQuery, body, {
        headers: headers,
        responseType: 'text'
    }).then((res) => {
        const res1 = axios.post(Infoburst.dbQuery, fetchBody, { headers: headers, responseType: 'text' }).then((response) => {

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

        return res1;
    });
    return Promise.all([post]);

}
/**
 * @name removeComment
 * @description Utility function that makes a call request to  Infoburst  GTMPOC Database Query to remove a comment
 * @param {Integer} metricId
 * @param {Object} params 
 * @returns Returns an Promise Array with the new comments for this metric
 */
export function removeComment(params, metric) {
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'deleteComment',
        "columnNames": 'true',
        "params": {
            "id": parseInt(params.id),
            "metric": metric
        }
    }
    let fetchBody = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'fetchComments',
        "columnNames": 'true',
        "params": {
            "metric": metric
        }
    };
    let post = axios.post(Infoburst.dbQuery, body, {
        headers: headers
    }).then((res) => {
        const res1 = axios.post(Infoburst.dbQuery, fetchBody, { headers: headers, responseType: 'text' }).then((response) => {

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
                    let body1 = {
                        "conn": `${Infoburst.appXDCID}`,
                        "qry": 'fetchCommentsCount',
                        "columnNames": 'true',
                        "params": {}
                    };

                    let post = axios.post(Infoburst.dbQuery, body1, { headers: headers, responseType: 'text' }).then((res1) => {
                        const commentsComplete = { comment: response.data, replies: res.data, allComments: res1.data };

                        return commentsComplete;
                    });
                    return post;
                });

                return replies;
            } else {
                return [];
            }

        });

        return res1;



    }).catch(error => {

    });


    return Promise.all([post]);

}

/**
 * @name requestUserSettings
 * @description Utility function that makes a call request to  Infoburst  GTMPOC Database Query to get user preferences
 * @param {String} sub - Users unique OKTA ID
 * @returns Returns an Promise Array with the preferences for this user
 */
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
/**
 * @name postUserSettings
 * @description Utility function that makes a call request to  Infoburst  GTMPOC Database Query to update a preference setting
 * @param {String} sub - Users unique OKTA ID
 * @returns Returns an Promise Array with the preferences for this user
 */
export function postUserSettings(params) {
    let body = {
        "conn": `${Infoburst.appXDCID}`,
        "qry": 'UpdateSettings',
        "columnNames": 'true',
        "params": {
            "quarter": params.quarter,
            "segment": params.segment,
            "user": params.user,
            "products": params.product,
            "geos": params.geo,
            "subscriptions": params.subscription,
            "routes": params.route,
            "markets": params.market,
            "nonDmSegment": params.nonDMSegment,
            "signupsource": params.signupCategory

        }
    }

    return axios.post(Infoburst.dbQuery, body, {
        headers: headers,
        responseType: 'text'
    });
}

/** Utility Functions */

/**
 * @name convertFilterList
 * @description Utility function that converts the filters list into a string parameter for URL
 * @param {*} arrayList 
 * @returns String List of Values seperated by commas
 */
export function convertFilterList(arrayList) {
    return "'" + arrayList.join("', '") + "' ";
}
/**
 * @name getParamValues
 * @description Utility function that converts the filters list into a string parameter for URL
 * @param {*} activeParams Active filters chosen for this dimensions
 * @param {*} allFilters All Available filters for this dimension
 */
export function getParamValues(activeParams, allFilters) {
    let paramValue;
    if (activeParams.length === 0) {
        // Add all the values from allFilters to the Param Value
        paramValue = [];
        allFilters.forEach(item => {
            if (item.value !== '#N/A' && item.value !== 'K12+EEA') {
                paramValue.push(item.value);
            } else if (item.value === '#N/A') {
                paramValue.push('%23N%2FA');
            } else if (item.value === 'K12+EEA') {
                paramValue.push('K12%2BEEA')
            }
        })
        paramValue = convertFilterList(paramValue);
        return paramValue;
    } else {
        paramValue = [];
        activeParams.forEach(item => {
            if (item.value !== '#N/A' && item.value !== 'K12+EEA') {
                paramValue.push(item.value);
            } else if (item.value === '#N/A') {
                paramValue.push('%23N%2FA');
            } else if (item.value === 'K12+EEA') {
                paramValue.push('K12%2BEEA')
            }
        })
        paramValue = convertFilterList(paramValue);
        return paramValue;
    }
}
/**
 * @name generateFilterParams
 * @description Utility function that creates the array of values to be converted in a list format for Infoburst Call
 * @param {*} type - Type Descriptor that lets app know what KPI to generate the filter params for
 * @param {*} filterParams  - The Array to hold the values for each filter dimension that the user has chosen
 * @param {*} allFilters  - The necessary filter dimensions with all available filters
 * @param {*} _activeParams  - The necessary filter dimensions with all chosen filters
 */
export function generateFilterParams(type, filterParams, allFilters, _activeParams) {
    switch (type) {
        case 1:
            //Use
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.nonDMSegment, allFilters.nonDMSegment);
            filterParams[4].value = getParamValues(_activeParams.subscription, allFilters.subscriptionOfferings);
            break;
        //Try
        case 2:
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.signupcat, allFilters.signupcat);
            filterParams[4].value = getParamValues(_activeParams.qfmType, allFilters.qfmType)

            break;
        case 3:
            //Renew
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.route, allFilters.routeTomarket);
            filterParams[4].value = getParamValues(_activeParams.segment, allFilters.segment);
            filterParams[5].value = getParamValues(_activeParams.subscription, allFilters.subscriptionOfferings);
            break;
        case 4:
            //  Renew AdobeCom
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.nonDMSegment, allFilters.nonDMSegment);
            filterParams[4].value = getParamValues(_activeParams.subscription, allFilters.subscriptionOfferings);
            break;
        //Traffic
        case 5:
            filterParams[0].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[1].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.websegment, allFilters.websegment);
            filterParams[4].value = getParamValues(_activeParams.visits, allFilters.visits);
            filterParams[5].value = getParamValues(_activeParams.lastTouchChannel, allFilters.lastTouchChannel);
            // filterParams[6].value = getParamValues(_activeParams.convType, allFilters.convType);
            filterParams[6].value = getParamValues(_activeParams.customerType, allFilters.customerType);
            break;
        //Marketable Universe - Discover
        case 6:
            // console.log('Gen PArams ', _activeParams, allFilters);
            filterParams[0].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[1].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.channelMU, allFilters.channelMU);
            break;
        //PMSS - Discover
        case 7:
            filterParams[0].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[1].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.channelPM, allFilters.channelPM);
            break;
        //UQFM - Discover
        case 8:
            filterParams[0].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[1].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            break;
        // case 9 = Finance = Default
        case 10: /* Buy Market */
            filterParams[0].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[1].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            // filterParams[3].value = getParamValues(_activeParams.segment, allFilters.segment);
            filterParams[3].value = getParamValues(_activeParams.ltvSegment, allFilters.ltvSegment);
            filterParams[4].value = getParamValues(_activeParams.channelPM, allFilters.channelPM);
            filterParams[5].value = getParamValues(_activeParams.product, allFilters.product);

            break;
        case 11: //Repeat User Mau
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.segment, allFilters.segment);
            filterParams[4].value = getParamValues(_activeParams.subscription, allFilters.subscriptionOfferings);
            break;
        case 12:  // Buy Gross 
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.route, allFilters.routeTomarket);
            filterParams[4].value = getParamValues(_activeParams.segment, allFilters.segment);
            filterParams[5].value = getParamValues(_activeParams.pvw, allFilters.pvw);
            filterParams[6].value = getParamValues(_activeParams.qfmType, allFilters.qfmType);

            break;
        case 13:
            //  Renew ERetail
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.nonDMSegment, allFilters.nonDMSegment);
            filterParams[4].value = getParamValues(_activeParams.subscription, allFilters.subscriptionOfferings);
            break;
        // cancel Adobe / Etail 
        case 14:
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.nonDMSegment, allFilters.nonDMSegment);
            filterParams[4].value = getParamValues(_activeParams.subscription, allFilters.subscriptionOfferings);
            filterParams[5].value = getParamValues(_activeParams.product, allFilters.product);
            break;
        case 15:

            filterParams[0].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[1].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.websegment, allFilters.websegment);
            filterParams[4].value = getParamValues(_activeParams.visits, allFilters.visits);
            filterParams[5].value = getParamValues(_activeParams.lastTouchChannel, allFilters.lastTouchChannel);
            filterParams[6].value = getParamValues(_activeParams.convType, allFilters.convType);
            filterParams[7].value = getParamValues(_activeParams.qfmType, allFilters.qfmType)
            break;
        case 16:
            filterParams[0].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[1].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            // filterParams[3].value = getParamValues(_activeParams.segment, allFilters.segment);
            filterParams[3].value = getParamValues(_activeParams.ltvSegment, allFilters.ltvSegment);
            filterParams[4].value = getParamValues(_activeParams.subscription, allFilters.subscriptionOfferings);
            filterParams[5].value = getParamValues(_activeParams.product, allFilters.product);
            break;
        default:
            filterParams[0].value = getParamValues(_activeParams.quarter, allFilters.quarter);
            filterParams[1].value = getParamValues(_activeParams.geo, allFilters.geo);
            filterParams[2].value = getParamValues(_activeParams.market, allFilters.market);
            filterParams[3].value = getParamValues(_activeParams.route, allFilters.routeTomarket);
            filterParams[4].value = getParamValues(_activeParams.segment, allFilters.segment);
            filterParams[5].value = getParamValues(_activeParams.subscription, allFilters.subscriptionOfferings);
            filterParams[6].value = getParamValues(_activeParams.product, allFilters.product);

            break;
    }
}
/**
 * @name resetRenewParams
 * @description Utility function that resets the Renews Filter Parameter Arrays back to empty
 */
export function resetRenewParams() {
    renewParamsReseller = [
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
            prompt: 'segment_NonDMFilters',
            value: ''
        },
        {
            prompt: 'subscriptionFilters',
            value: ''
        }

    ];
    cancelAdobeParams = [
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
        }
    ];
    cancelRetailParams = [
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
        }
    ];
    renewParamsAdobeCom = [
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
            prompt: 'segment_NonDMFilters',
            value: ''
        },
        {
            prompt: 'subscriptionFilters',
            value: ''
        }

    ];
    renewParamsERetail = [
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
            prompt: 'segment_NonDMFilters',
            value: ''
        },
        {
            prompt: 'subscriptionFilters',
            value: ''
        }

    ];
    renewParams = [
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
            prompt: 'segment_NonDMFilters',
            value: ''
        },
        {
            prompt: 'subscriptionFilters',
            value: ''
        }

    ];
}
/**
 * @name includes
 * @description Utility function that determines if the string container contains the text of value
 * @param {*} container 
 * @param {*} value  
 */
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
/**
 * @name convertFilterListForDBQuery
 * @description Utility function that concats the array into a comma seperated string list
 * @param {*} container 
 * @param {*} value  
 */
export function convertFilterListForDBQuery(arrayList) {
    return arrayList.join(", ");
}
/**
 * @name renderUnits
 * @description Utility function that formats the number into units
 * @param {*} value  
 */
export function renderUnits(value) {

    let returnValue = '';
    let abs;
    let suffix = '';
    let isNegative = false;
    if (value === 0) {
        return '--';
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
/**
 * @name renderDollarValue
 * @description Utility function that formats the number into dollars
 * @param {*} value  
 */
export function renderDollarValue(value) {
    let returnValue = '';
    let abs;
    let prefix = '$';
    let suffix = '';
    let isNegative = false;
    if (value === 0) {
        return '--';
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
/**
 * @name formatPercentage
 * @description Utility function that formats the number into percent
 * @param {*} value  
 */
export function formatPercentage(value) {
    //convert to percentage
    let percentage = (value === undefined) ? 0 : parseFloat(value * 100);
    // console.log('debug', percentage) 

    //Modification by Rakesh Grewal to display percentage values less than 1, commented out
    // if (percentage !== 0 && parseInt(percentage)) {

    if (percentage !== 0 ) {  
        return (percentage).toFixed(2) + '%';
    } else {
        return '--';
    }
}

export function formatIndex(value){
    if (isNaN(value)){
        return '--'
    }else{
        value= parseFloat(value)
        if(value===0){
            return '--'
        }else{
            return value.toFixed(2)
        }
    }
    
}

/**
 * @name formatMetric
 * @description Utility function that determines the type of metric this should be formatted to 
 * @param {*} value  
 * @param {*} type - Can be either value, target, or qrf
 * @returns The formatted metric for this type
 */
export function formatMetric(item, type) {


    if (type === 'value') {

        switch (item.valueType) {

            case 'units':
                return (renderUnits(item.value) !== NaN) ? renderUnits(item.value) : '--';
            case 'currency':
                return (renderDollarValue(item.value)) ? renderDollarValue(item.value) : '--';
            case 'percent':
                return (formatPercentage(item.value) !== NaN) ? formatPercentage(item.value) : '--';
            case 'index':
                return (formatIndex(item.value) !== NaN) ? formatIndex(item.value): '--'
        }
    } else if (type === 'target') {

        switch (item.valueType) {

            case 'units':

                return (renderUnits(item.value) !== NaN) ? renderUnits(item.value) : 0;

            case 'currency':

                return (renderDollarValue(item.value)) ? renderDollarValue(item.value) : 0;

            case 'percent':

                return (formatPercentage(item.value) !== NaN) ? formatPercentage(item.value) : 0;
            
            case 'index':
                return (formatIndex(item.value) !== NaN) ? formatIndex(item.value): '--'

        }

    } else if (type === 'qrf') {

        return (formatPercentage(item.value) !== NaN) ? formatPercentage(item.value) : '--';

    }
}
/**
 * @name getDeviceType
 * @description Utility function that determines the device type base on window size 
 * @param {*} window  
 * @returns The an object with a type and width property
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
            width: 1025
        },
        {
            type: 'laptopL',
            width: 1480
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
/**
 * @name getDateFormat
 * @description Utility function that formats the date for Comment Box
 * @param {*} _date  
 * @returns The formatted date
 */
export function getDateFormat(_date) {

    let date = new Date(_date);
    let localOffset = date.getTimezoneOffset() * 60000;
    let localTime = date.getTime();
    let newDate = localTime - localOffset;
    let returnTime = new Date(newDate).toLocaleTimeString();

    return new Date(_date).toDateString() + ' at ' + returnTime;
}
/**
 * @name getLabelColor
 * @description Utility function that gets the color coding for labels
 * @param {*} value 
 * @param {*} target  
 * @param {*} secondaryCardIndex  
 * @returns The label color class for css
 */
export function getLabelColor(value, target, secondaryCardIndex) {
    let retColor = "";

    if (secondaryCardIndex === SUMMARY_KPIS.FINANCE_CANCEL_ARR || secondaryCardIndex === SUMMARY_KPIS.RENEW_CANCEL ||
        secondaryCardIndex === SUMMARY_KPIS.RENEW_CANCEL_ADOBECOM || secondaryCardIndex === SUMMARY_KPIS.RENEW_QTR_PF ||
        secondaryCardIndex === SUMMARY_KPIS.RENEW_QTR_UI || secondaryCardIndex === SUMMARY_KPIS.RENEW_CANCEL_RESLLER_E) {
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
/**
 * @name getLabelColorPrimary
 * @description Utility function that gets the color coding for primary labels
 * @param {*} value 
 * @param {*} target  
 * @param {*} mobile
 * @param {*} index  
 * @returns The label color class for css
 */
export function getLabelColorPrimary(value, target, mobile, index) {
    let retColor = "";
    if (index !== 5) {
        if (target === 0) {
            if (mobile === true) {
                retColor = 'selectedMobileCardFontColorNeutral';

            } else {
                retColor = 'selectedCardFontColorNeutral';

            }
        } else if (value >= target) {
            retColor = 'selectedCardFontColorGreen';
        } else {
            retColor = 'selectedCardFontColorRed';
        }
    } else {
        if (target === 0) {
            if (mobile === true) {
                retColor = 'selectedMobileCardFontColorNeutral';

            } else {
                retColor = 'selectedCardFontColorNeutral';

            }
        } else if (value <= target) {
            retColor = 'selectedCardFontColorGreen';
        } else {
            retColor = 'selectedCardFontColorRed';
        }
    }

    return retColor;
}

