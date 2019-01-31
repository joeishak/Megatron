import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import stateValidator from 'middlewares/stateValidator'
import async from 'middlewares/async';

export default ({ children, initialState = {
    isDialogOpen: false,
    availableFilters: {
    },
    activeFilters: {
        geos: [],
        quarters: [{ index: 211, category: "quarters", value: "2019-Q1" }],
        segments: [{ index: 209, category: "segments", value: "Digital Media" }],
        subscriptions: [],
        markets: [],
        routes: [],
        products: []
    },
    detailsIsOpen: false,
} }) => {
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
