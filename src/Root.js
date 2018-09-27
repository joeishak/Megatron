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
    activeFilters:{
        geos:[{index: 205, category: "geos", value: "All Data"}],
        quarters:[{index: 211, category: "quarters", value: "2017-Q1"}],
        segments:[{index: 209, category: "segments", value: "Digital Media"}],
        subscriptions:[{index: 210, category: "subscriptionOfferings", value: "All Data"}],
        markets: [{index: 206, category: "marketAreas", value: "All Data"}],
        routes:[{index: 208, category: "routeToMarkets", value: "All Data"}],
        products:[{index: 207, category: "productNames", value: "All Data"}]
    },
    switchFilter: false,
    detailsIsOpen: false,
    activeSummarySquare: {
        index:1,
        header: 'Net New ARR',
        value: 149.9,
        target: 277.9,
        comments: [
            {
                id: 0,
                userName: 'Erin Smith',
                time: '8:34am',
                comment: 'Check out the increased sales in this sector. This will make a huge difference.',
                replies: [
                    {
                        id: 0,
                        userName: 'Bob Smith',
                        time: '9:04am',
                        comment: 'Wow! Great job team!'
                        
                    },
                    {
                        id: 1,
                        userName: 'Samantha Smith',
                        time: '9:34am',
                        comment: 'Was this for last month?'
                        
                    },
                    {
                        id: 2,
                        userName: 'Steve Smith',
                        time: '9:54am',
                        comment: 'Yes.'
                        
                    }
                ]
            },
            {
                id: 1,
                userName: 'Shaun White',
                time: '12:33pm',
                comment: 'What happened in Quarter 3? ',
                replies: [
                    {
                        id: 0,
                        userName: 'Bob Smith',
                        time: '8:34am',
                        comment: 'Our customers in Japan did not take to our marketing strategy. '
                        
                    }
                ]
            }
         ],
        details:{
            multichart:[
                [14338099.6647206, 20277677.033361, 20456263.2785375, 19146688.4116214, 23826727.8548302, 23507552.0014683, 21851845.9274962, 22424624.2873929, 28807542.7188417, 16735568.5838026, 16406956.4978725, 12636437.5001435, 8391691.46697203], 
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
                    value: -2.6,
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
        css: ['card1', 'spinMeFirst', '#FF0000'],
    },
    ibeData: []
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