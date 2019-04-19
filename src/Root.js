import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import stateValidator from 'middlewares/stateValidator'
import async from 'middlewares/async';

export default ({ children, initialState = {
    isDialogOpen: false,
    detailsIsOpen: false,
} }) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(stateValidator, async)));
    return (
        <Provider store={store}>
            {children}
        </ Provider>
    )
}
