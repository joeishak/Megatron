//Environment Params


// OKTA Settings for Web/ Desktop  ~IIS
const WEB_CONFIG = {
    clientId: '0oagvd9ybz29J3tDM0h7',
    issuer: 'https://dev-575609.oktapreview.com/oauth2/default',
    redirectUri: 'http://localhost:4200/implicit/callback',
    scope: ['openid', 'profile', 'email'],
},//OKTA Settings for Mobile/Tablet ~IBAPPS
    MOBILE_CONFIG = {
        clientId: '0oagvd9ybz29J3tDM0h7',
        issuer: 'https://dev-575609.oktapreview.com/oauth2/default',
        redirectUri: 'http://localhost:8551/apps/rtbcallback/',
        scope: 'openid profile email',
    };
//The config being used for the current build
export const config = {
    oidc: WEB_CONFIG
};


const PORT = ':8551/'
const INFOBURST = 'infoburst/'
const REST = 'rest/'
const sysInfo = 'sysInfo/'
const domains = {
    local: 'http://localhost',
    azureIP: 'http://10.30.0.5',
    adobe: 'http://rtb.corp.adobe.com',
    vm1: 'http://vm1.infosol.com',
}

const prodDomain = domains.local;
export const Infoburst = {
    user: 'admin',
    pass: 'admin',
    dbQuery: prodDomain + PORT + INFOBURST + REST + 'db/query',
    xdcCacheURL: prodDomain + PORT + INFOBURST + REST + 'get/xdc/',
    xdcCacheQueryURL: prodDomain + PORT + INFOBURST + REST + 'exec/xdcqry/',
    sysInfo: prodDomain + PORT + sysInfo,
    jsonFormat: '&json=1',
    filterQueryNames: {
        MarketFilters: '?q=MarketFilters&json=1',
        SegmentFilters: '?q=SegmentFilters&json=1',
        SubscriptionFilters: '?q=SubscriptionFilters&json=1',
        RouteFilters: '?q=RouteFilters&json=1',
        QuarterFilters: '?q=QuarterFilters&json=1',
        ProductFilters: '?q=ProductFilters&json=1',
        GeoFilters: '?q=GeoFilters&json=1'
    },
    summaryQueryNames: {
        FinancialActualTargetPrimary: '?q=FinancialActualTargetPrimary',
        FinancialActualTargetSecondary: '?q=FinancialActualTargetSecondary',
        FinancialMultichart: '?q=FinancialMultichartQuery',
        FinancialUnits: '?q=FinancialUnitsMultichart',
        FinancialQTD: '?q=FinancialQTD',
        FinancialGeoQtd: '?q=FinancialGeoQTD',
        FinancialMarketQTD: '?q=FinancialMarketAreaQTD',
        FinancialSegmentQTD: '?q=FinancialSegmentsQTD',
        FinancialRouteQTD: '?q=FinancialRoutesQTD',
        FinancialProductQTD: '?q=FinancialProductQTD',
        JourneysG2PrimaryActualTarget: '?q=G2PrimaryActualTarget',
        JourneysG3PrimaryActualTarget: '?q=G3PrimaryActualTarget',
        JourneysG2SecondaryActualTarget: '?q=G2SecondaryActualTarget',
        JourneysG3SecondaryActualTarget: '?q=G3SecondaryActualTarget',
        JourneysG2MultiChart: '?q=JourneyG2MultichartQuery',
        JourneysG3MultiChart: '?q=JourneyG3MultichartQuery',
        JourneysG2QTD: '?q=JourneyG2QTD',
        JourneysG3QTD: '?q=JourneyG3QTD',
        JourneysG2GeoQTD: '?q=JourneyG2GeoQTD',
        JourneysG3GeoQTD: '?q=JourneyG3GeoQTD',
        JourneysG2MarketQTD: '?q=JourneyG2MarketAreaQTD',
        JourneysG3MarketQTD: '?q=JourneyG3MarketAreaQTD',
        JourneysG2RoutesQTD: '?q=JourneyG2RoutesQTD',
        JourneysG3RouteQTD: '?q=JourneyG3RouteQTD',
        JourneysG2SegmentsQTD: '?q=JourneyG2SegmentsQTD',
        JourneysG3SegmentQTD: '?q=JourneyG3SegmentQTD',
        JourneysG2ProductsQTD: '?q=JourneyG2ProductsQTD',
        JourneysG3ProductQTD: '?q=JourneyG3ProductQTD'
    },
    dataXdcID: '\\21',
    journeyXdcID: '\\22',
    filtersXdcID: '\\20'

}

//New Change