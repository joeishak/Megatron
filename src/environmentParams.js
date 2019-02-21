import { MOBILE } from "./Constants/consts";

const PORT = ':8551/'
const INFOBURST = 'infoburst/'
const REST = 'rest/'
const sysInfo = 'sysInfo/'
const domains = {
    local: 'http://localhost',
    azureIP: 'http://10.30.0.5',
    adobe: 'https://rtb.corp.adobe.com',
    vm1: 'http://vm1.infosol.com'
}

export const prodDomain = domains.local;
//Environment Params

// OKTA Settings for Web/ Desktop  ~IIS
const WEB_CONFIG = {
    clientId: '0oagwkc5qdpHzkGnK0h7',
    issuer: 'https://dev-575609.oktapreview.com/oauth2/default',
    redirectUri: 'http://localhost:4300/implicit/callback/',
    scope: ['openid', 'profile', 'email'],
},//OKTA Settings for Mobile/Tablet ~IBAPPS
    MOBILE_CONFIG = {
        clientId: '0oagvd9ybz29J3tDM0h7',
        issuer: 'https://dev-575609.oktapreview.com/oauth2/default',
        redirectUri: 'http://localhost:8551/apps/rtbcallback/',
        scope: ['openid', 'profile', 'email'],
    };
//The config being used for the current build
export const config = {
    oidc: WEB_CONFIG
};



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
        GeoFilters: '?q=GeoFilters&json=1',
        ChannelFilters: '?q=ChannelFilters&json=1',
        VisitFilters: '?q=VisitFilters&json=1',
        SignUpFilters: '?q=SignUpFilters&json=1'

    },
    summaryQueryNames: {

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
        JourneysG3ProductQTD: '?q=JourneyG3ProductQTD',
        /**Financials */
        FinancialG8ActualTargetPrimary: '?q=FinancialG8ActualTargetPrimary',
        FinancialG8ActualTargetSecondary: '?q=FinancialG8ActualTargetSecondary',
        FinancialG8Multichart: '?q=FinancialG8MultiChartQuery',
        FinancialG8Units: '?q=FinancialG8UnitsMultichart',
        FinancialG8QTD: '?q=FinancialG8QTD',
        FinancialG8GeoQtd: '?q=FinancialG8GeoQTD',
        FinancialG8MarketQTD: '?q=FinancialG8MarketAreaQTD',
        FinancialG8SegmentQTD: '?q=FinancialG8SegmentsQTD',
        FinancialG8RouteQTD: '?q=FinancialG8RoutesQTD',
        FinancialG8ProductQTD: '?q=FinancialG8ProductQTD',
        /**Discover */
        DiscoverActualTargetPrimary: '?q=DiscoverActualTargetPrimary',
        DiscoverG1ActualTargetSecondary: '?q=DiscoverG1ActualTargetSecondary',
        DiscoverG1GeoQTD: '?q=DiscoverG1GeoQTD',
        DiscoverG1MarketAreaQTD: '?q=DiscoverG1MarketAreaQTD',
        DiscoverG1ProductQTD: '?q=DiscoverG1ProductQTD',
        DiscoverG1QTD: '?q=DiscoverG1QTD',
        DiscoverG1RouteQTD: '?q=DiscoverG1RouteQTD',
        DiscoverG1SegmentQTD: '?q=DiscoverG1SegmentQTD',
        DiscoverG1MultiChartQuery: '?q=DiscoverG1MultiChartQuery',
        DiscoverG2ActualTargetSecondary: '?q=DiscoverG2ActualTargetSecondary',
        DiscoverG2GeoQTD: '?q=DiscoverG2GeoQTD',
        DiscoverG2MarketAreaQTD: '?q=DiscoverG2MarketAreaQTD',
        DiscoverG2ProductQTD: '?q=DiscoverG2ProductQTD',
        DiscoverG2QTD: '?q=DiscoverG2QTD',
        DiscoverG2RouteQTD: '?q=DiscoverG2RouteQTD',
        DiscoverG2SegmentQTD: '?q=DiscoverG2SegmentQTD',
        DiscoverG2MultiChartQuery: '?q=DiscoverG2MultiChartQuery',
        DiscoverG5ActualTargetSecondary: '?q=DiscoverG5ActualTargetSecondary',
        DiscoverG5GeoQTD: '?q=DiscoverG5GeoQTD',
        DiscoverG5MarketAreaQTD: '?q=DiscoverG5MarketAreaQTD',
        DiscoverG5ProductQTD: '?q=DiscoverG5ProductQTD',
        DiscoverG5QTD: '?q=DiscoverG5QTD',
        DiscoverG5RouteQTD: '?q=DiscoverG5RouteQTD',
        DiscoverG5SegmentQTD: '?q=DiscoverG5SegmentQTD',
        DiscoverG5MultiChartQuery: '?q=DiscoverG5MultiChartQuery',
        /**Try */
        TryActualTargetPrimary: '?q=TryActualTargetPrimary',
        TryG2ActualTargetSecondary: '?q=TryG2ActualTargetSecondary',
        TryG2GeoQTD: '?q=TryG2GeoQTD',
        TryG2MarketAreaQTD: '?q=TryG2MarketAreaQTD',
        TryG2QTD: '?q=TryG2QTD',
        TryG2MultiChartQuery: '?q=TryG2MultiChartQuery',

    },
    dataXdcID: '\\21',
    journeyXdcID: '\\22',
    filtersXdcID: '\\20',
    appXDCID: 16,
    financeXDCID: '\\42',
    discoverXDCID: '\\48',
    buyXDCID: '\\',
    tryXDCID: '\\60',
    useXDCID: '\\',
    renewXDCID: '\\',


}

//New Change