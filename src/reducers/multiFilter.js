import {
    GENERATE_FILTER_DATA
} from 'actions/types';
import _ from 'lodash';
import data from '../data.json';
export default function(state = [], action) {
    switch(action.type) {
        case  GENERATE_FILTER_DATA:

            // Get all property values
            let quarters = _.map(data,function(row) { return row.quarter});
            let geos = _.map(data,function(row) { return row.geo_code});
            let products= _.map(data,function(row) { return row.product_name});
            let subscriptionOfferings= _.map(data,function(row) { return row.subscription_offering});
            let marketAreas= _.map(data,function(row) { return row.market_area});
            let routeToMarkets= _.map(data,function(row) { return row.route_to_market});
            let segments= _.map(data,function(row) { return row.web_segment});

            //Get unique property values
            quarters = _.uniq(quarters);
            geos     = _.uniq(geos);
            products = _.uniq(products);
            subscriptionOfferings = _.uniq(subscriptionOfferings);
            marketAreas = _.uniq(marketAreas);
            routeToMarkets = _.uniq(routeToMarkets);
            segments = _.uniq(segments);

            let newState = {
                quarters,
                geos,
                products,
                subscriptionOfferings,
                marketAreas,
                routeToMarkets,
                segments
            }

            return newState;
        default: 
            return state;
    }
}