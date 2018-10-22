import {GET_ALL_DATA} from 'actions/types'
import * as localdata from '../variables';

export default function(state = {
    financial: localdata.FinancialData,
    journey: localdata.JourneyData
},action) {
    switch(action.type) {
        case GET_ALL_DATA:
            let appData = {
                financial: localdata.FinancialData,
                journey: localdata.JourneyData
            };
            return appData;
        default: 
            return state;
    }
}