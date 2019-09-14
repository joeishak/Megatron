import {
    GET_CORRELATION_DATA,
    UPDATE_CORRELATION_DATA_IS_LOADING,
    SHOW_CORRELATION_PANEL
} from 'actions/types'

import { SUMMARY_KPIS } from '../Constants/consts';
import * as _ from 'lodash'
import {
    correlationData
} from '../variables.js';
import { PrimaryData } from '../variables.js';

export default function(
    state = {
        ...correlationData
    }, action
){
    let newState = JSON.parse(JSON.stringify(state));
    // console.log('Correlation Data Reducer ' + state.secondary[18].details)
    // console.log(newState)
    switch(action.type){
        case GET_CORRELATION_DATA:
            // console.log('Correlation Data')
            // console.log(action.payload[0])
            
            let dataTillLastFriday = _.filter(action.payload[0].data.data, item =>{
                let currentDate = new Date()
                let lastFriday = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()-currentDate.getDay()-2)
                
                return ((new Date(item.time_interval))<=lastFriday)
              })

            // newState.chart=[...action.payload[0].data.data]
            newState.chart = [...dataTillLastFriday]
             
            newState.analysis=[...action.payload[1].data.data]
            if (action.payload.length >2){
            newState.prediction= action.payload[2].data.percentage_change_in_dependent
            // let grossNewArrLastWeek = _.sumBy(dataTillLastFriday.slice(-7), day=>{ return day.gross_new_arr})/1000000
            // let predictedGrossNewArr = parseFloat(newState.prediction*.01*grossNewArrLastWeek + grossNewArrLastWeek).toFixed(2)
            // console.log('In Reducer ',grossNewArrLastWeek, predictedGrossNewArr, newState.prediction)

            // newState.predictionAbsolute= predictedGrossNewArr
            }
            return { ...newState, correlationDataIsLoaded: true }

        case UPDATE_CORRELATION_DATA_IS_LOADING:
            return {...newState, correlationDataIsLoaded: action.payload}
        case SHOW_CORRELATION_PANEL:
            return { ...newState, showCorrelationPanel: action.payload}
        default:
            return state

    }

}