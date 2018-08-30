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
    switchFilter: false,
    detailsIsOpen: false,
    activeSummarySquare:{
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