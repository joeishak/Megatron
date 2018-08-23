import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import stateValidator from 'middlewares/stateValidator'
import async from 'middlewares/async';
export default ({children, initialState ={
    filters: {
        updated: false,
        values: []
    },
    isDialogOpen: false,
    adobeData: [],
    availableFilters: {    },
    activeFilters:[
        // {index: 52, category: 'geos', value: "All Data"},
        // {index: 55, category: 'marketAreas', value: "All Data"},
        // {index: 53, category: 'products', value: "All Data"},
        // {index: 51, category: 'quarters', value: "All Data"},
        // {index: 56, category: 'routeToMarkets', value: "All Data"},
        // {index: 57, category: 'segments', value: "All Data"},
        // {index: 54, category: 'subscriptionOfferings', value: "All Data"}


    ]
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