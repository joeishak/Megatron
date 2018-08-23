import {
    GENERATE_FILTER_DATA
} from 'actions/types';
import _ from 'lodash';
import data from '../data.json';
export default function(state = [], action) {
    switch(action.type) {
        case  GENERATE_FILTER_DATA:
    
            let count = 0;
            // Get all property values
            let quarters = _.map(data,function(row) { return row.quarter});
            let geos = _.map(data,function(row) { return row.geo_code});
            let products= _.map(data,function(row) { return row.product_name});
            let subscriptionOfferings= _.map(data,function(row) { return row.subscription_offering});
            let marketAreas= _.map(data,function(row) { return row.market_area_code});
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
            
      
            // index the filter data
            quarters = quarters.map(quarter =>{
                return {
                    index: count++,
                    category: 'quarters',
                    value: quarter
                }
            });
             geos = geos.map(geo =>{
                return {
                    index: count++,
                    category: 'geos',
                    value: geo
                }
            })
             products = products.map(product =>{
                return {
                    index: count++,
                    category: 'products',
                    value: product
                }
            });
             subscriptionOfferings = subscriptionOfferings.map(sub =>{
                return {
                    index: count++,
                    category: 'subscriptionOfferings',
                    value: sub
                }
            });
             marketAreas = marketAreas.map(ma =>{
                return {
                    index: count++,
                    category: 'marketAreas',
                    value: ma
                }
            });
             routeToMarkets = routeToMarkets.map(route =>{
                return {
                    index: count++,
                    category: 'routeToMarkets',
                    value: route
                }
            });
             segments = segments.map(segment =>{
                return {
                    index: count++,
                    category: 'segments',
                    value: segment
                }
            });

            // Add All data to beginning of each
            quarters.unshift({
                index: count++,
                category: 'quarters',
                value: 'All Data'
            });
            geos.unshift({
                index: count++,
                category: 'geos',
                value: 'All Data'
            });
            products.unshift({
                index: count++,
                category: 'products',
                value: 'All Data'
            });
            subscriptionOfferings.unshift({
                index: count++,
                category: 'subscriptionOfferings',
                value: 'All Data'
            });
            marketAreas.unshift({
                index: count++,
                category: 'marketAreas',
                value: 'All Data'
            });
            routeToMarkets.unshift({
                index: count++,
                category: 'routeToMarkets',
                value: 'All Data'
            });
            segments.unshift({
                index: count++,
                category: 'segments',
                value: 'All Data'
            });
           
            
            let newState = {
                quarters: quarters,
                geos: geos,
                products: products,
                subscriptionOfferings:subscriptionOfferings,
                marketAreas:marketAreas,
                routeToMarkets:routeToMarkets,
                segments:segments
            }

            return newState;

        default: 
            return state;
    }
}