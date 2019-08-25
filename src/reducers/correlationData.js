import {
    GET_CORRELATION_DATA,
    UPDATE_CORRELATION_DATA_IS_LOADING
} from 'actions/types'

import { SUMMARY_KPIS } from '../Constants/consts';
import {
    correlationData
} from '../variables.js';
import { PrimaryData } from '../variables.js';

export default function(
    state = {
        ...correlationData,
    }, action
){
    let newState = JSON.parse(JSON.stringify(state));
    // console.log('Correlation Data Reducer ' + state.secondary[18].details)
    // console.log(newState)
    switch(action.type){
        case GET_CORRELATION_DATA:
            console.log('Correlation Data')
            console.log(action.payload[0])
            newState.chart=[...action.payload[0].data.data]
            newState.analysis=[...action.payload[1].data.data]
            newState.prediction= [...action.payload[2].data.data]
            return { ...newState }

        case UPDATE_CORRELATION_DATA_IS_LOADING:
            return {...newState}
        default:
            return state

    }

}