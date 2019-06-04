// Import Types
import { GET_UPDATED_AS_OF_DATE_AND_QUARTER } from 'actions/types';

// Instantiate Reducer Function with default state of 
// updatedAsOf  = '',
// currentQuarterWeek = ''
export default function (state = {
    updatedAsOf: '',
    currentQuarterWeek: ''
}, action) {
    switch (action.type) {
        // Set the Update As Of Date and Current Quarter of most recent refresh for data
        case GET_UPDATED_AS_OF_DATE_AND_QUARTER:
            // Extract wkname and as_of_date from InfoBurst Promise
            let { wkname, as_of_date } = action.payload[0].data[0];
            return { updatedAsOf: as_of_date, currentQuarterWeek: wkname };
        default:
            return state;
    }
}
