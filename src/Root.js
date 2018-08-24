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
    activeFilters:[],
    switchFilter: false
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