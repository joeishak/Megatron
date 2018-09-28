import {GET_ALL_DATA} from 'actions/types'
import * as localdata from '../variables';

export default function(state = [],action) {
    switch(action.type) {
        case GET_ALL_DATA:
            let appData = {
                financial: localdata.FinancialData,
                journey: localdata.JourneyData
                // allData: data
            };
            return appData;
        default: 
            return state;
    }
}