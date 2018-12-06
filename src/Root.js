import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import stateValidator from 'middlewares/stateValidator'
import async from 'middlewares/async';

export default ({children, initialState ={
    isDialogOpen: false,
    availableFilters: {
        quarters:[{
            index: 0,
            category: 'quarters',
            value: 'All Data'
        }],
        geos:[{
            index: 0,
            category: 'geos',
            value: 'All Data'
        }],
        segments:[{
            index: 0,
            category: 'segments',
            value: 'All Data'
        }],
        subscriptionOfferings:[{
            index: 0,
            category: 'subscriptionOfferings',
            value: 'All Data'
        }],
        marketAreas: [{
            index: 0,
            category: 'marketAreas',
            value: 'All Data'
        }],
        routeToMarkets: [{
            index: 0,
            category: 'routeToMarkets',
            value: 'All Data'
        }],
        products: [{
            index: 0,
            category: 'products',
            value: 'All Data'
        }]
    },
    activeFilters:{
        geos:[{index: 205, category: "geos", value: "All Data"}],
        quarters:[{index: 211, category: "quarters", value: "2018-Q4"}],
        segments:[{index: 209, category: "segments", value: "Digital Media"}],
        subscriptions:[{index: 210, category: "subscriptionOfferings", value: "All Data"}],
        markets: [{index: 206, category: "marketAreas", value: "All Data"}],
        routes:[{index: 208, category: "routeToMarkets", value: "All Data"}],
        products:[{index: 207, category: "productNames", value: "All Data"}]
    },
    detailsIsOpen: false,
}}) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(stateValidator, async)
    );
    return (
        <Provider store={store}>
                {children}
        </ Provider>
    )
}
