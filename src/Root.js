import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import stateValidator from 'middlewares/stateValidator'
import async from 'middlewares/async';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

export default ({children, initialState ={
    filters: {
        updated: false,
        values: []
    },
    isDialogOpen: false,
    adobeData: [],
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
    switchFilter: false,
    detailsIsOpen: false,
    activeSummarySquare: {
        index:1,
        header: 'Net New ARR',
        value: 149.9,
        target: 277.9,
        details:{
            multichart:[
                [100, 123, 234, 343,222,443,211,123,45,232,124,25,166], 
                [120, 67, 231, 196,173,485,222,192,157,213,199,103,112],
                [45, 124, 189, 143,102,184,293,444,304,203,442,122,100]
            ],
            qtdw:{
                qtd:[
                    {
                        index: 1,
                        header:'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header:'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header:'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header:'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header:'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header:'Q/Q',
                        value: 66.7
                    },
                    {
                        index: 7,
                        header:'Y/Y',
                        value: 66.7
                    }
                ],
                week:[ 
                    {
                        index: 1,
                        header:'Actuals',
                        value: 66.7
                    },
                    {
                        index: 2,
                        header:'Units',
                        value: 66.7
                    },
                    {
                        index: 3,
                        header:'QRF',
                        value: 66.7
                    },
                    {
                        index: 4,
                        header:'QRF Diff',
                        value: 66.7
                    },
                    {
                        index: 5,
                        header:'Vs Qrf',
                        value: 66.7
                    },
                    {
                        index: 6,
                        header:'W/W',
                        value: 66.7
                    }
                ]
            },
            geo:{
                qtd: [
                    {
                        index: 0,
                        marketArea: 'US',
                        actuals:    66.74,
                        units:     751.14,
                        qrf:        70.21,
                        qrfDiff:    -3.48,
                        vsQrf:      -.0495,
                        qq :        -20.00,
                        yy :        -.0733,
                        type: 'AMER'
                    },
                    {
                        index: 1,
                        marketArea: 'ROW',
                        actuals:    66.74,
                        units:     751.14,
                        qrf:        70.21,
                        qrfDiff:    -3.48,
                        vsQrf:      -.0495,
                        qq :        -20.00,
                        yy :        -.0733,
                        type: 'AMER'
                    },
                    {
                        index: 2,
                        marketArea: 'ROW',
                        actuals:    66.74,
                        units:     751.14,
                        qrf:        70.21,
                        qrfDiff:    -3.48,
                        vsQrf:      -.0495,
                        qq :        -20.00,
                        yy :        -.0733,
                        type: 'ASIA'
                    },
                    {
                        index: 3,
                        marketArea: 'ANZ',
                        actuals:    66.74,
                        units:     751.14,
                        qrf:        70.21,
                        qrfDiff:    -3.48,
                        vsQrf:      -.0495,
                        qq :        -20.00,
                        yy :        -.0733,
                        type: 'ASIA'
                    }
                ],
                week:[
                    {
                        index: 0,
                        marketArea: 'US',
                        actuals:    66.74,
                        units:     751.14,
                        qrf:        70.21,
                        qrfDiff:    -3.48,
                        vsQrf:      -.0495,
                        ww :        -20.00,
                        type: 'AMER'
                    },
                    {
                        index: 1,
                        marketArea: 'ROW',
                        actuals:    66.74,
                        units:     751.14,
                        qrf:        70.21,
                        qrfDiff:    -3.48,
                        vsQrf:      -.0495,
                        ww :        -20.00,
                        type: 'AMER'
                    },
                    {
                        index: 2,
                        marketArea: 'ROW',
                        actuals:    66.74,
                        units:     751.14,
                        qrf:        70.21,
                        qrfDiff:    -3.48,
                        vsQrf:      -.0495,
                        ww :        -20.00,
                        type: 'ASIA'
                    },
                    {
                        index: 3,
                        marketArea: 'ANZ',
                        actuals:    66.74,
                        units:     751.14,
                        qrf:        70.21,
                        qrfDiff:    -3.48,
                        vsQrf:      -.0495,
                        ww :        -20.00,
                        type: 'ASIA'
                    }
                ],
                all:[
                    {
                        index: 0,
                        qtd: {
                            marketArea: 'US',
                            actuals:    66.74,
                            units:     751.14,
                            qrf:        70.21,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        week: {
                                marketArea: 'US',
                                actuals:    66.74,
                                units:     751.14,
                                qrf:        70.21,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                ww :        -20.00,
                                type: 'AMER'
                        }
                    },
                    {
                        index: 1,
                        qtd: {
                            marketArea: 'ROW',
                            actuals:    66.74,
                            units:     751.14,
                            qrf:        70.21,
                            qrfDiff:    -3.48,
                            vsQrf:      -.0495,
                            qq :        -20.00,
                            yy :        -.0733,
                            type: 'AMER'
                        },
                        week: {
                                marketArea: 'ROW',
                                actuals:    66.74,
                                units:     751.14,
                                qrf:        70.21,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                ww :        -20.00,
                                type: 'AMER'
                        }
                    },
                    {
                        index: 2,
                        qtd: {
                                marketArea: 'ROW',
                                actuals:    66.74,
                                units:     751.14,
                                qrf:        70.21,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ASIA'
                        },
                        week: {
                                marketArea: 'ROW',
                                actuals:    66.74,
                                units:     751.14,
                                qrf:        70.21,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                ww :        -20.00,
                                type: 'ASIA'
                        }
                    },
                    {
                        index: 3,
                        qtd: {
                                marketArea: 'ANZ',
                                actuals:    66.74,
                                units:     751.14,
                                qrf:        70.21,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                qq :        -20.00,
                                yy :        -.0733,
                                type: 'ASIA'
                        },
                        week: {
                                marketArea: 'ANZ',
                                actuals:    66.74,
                                units:     751.14,
                                qrf:        70.21,
                                qrfDiff:    -3.48,
                                vsQrf:      -.0495,
                                ww :        -20.00,
                                type: 'ASIA'
                        }
                    }

                ]
            },
            stats:[
                {
                    value: -2.8,
                    color: 'red',
                    text: 'vs QRF'
                },
                {
                    value: -20.4,
                    color: 'red',
                    text: 'Q/Q TY'
                },
                {
                    value: -17.0,
                    color: 'red',
                    text: 'Q/Q LY'
                },
                {
                    value: -2.9,
                    color: 'green',
                    text: 'Y/Y'
                }
            ]
        },
        css: ['card1', 'spinMeFirst', '#FF0000']
    }
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