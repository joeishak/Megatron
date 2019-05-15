import { GET_UPDATED_AS_OF_DATE_AND_QUARTER } from 'actions/types'
export default function (state = {
    updatedAsOf: '',
    currentQuarterWeek: ''
}, action) {
    switch (action.type) {
        case GET_UPDATED_AS_OF_DATE_AND_QUARTER:
            let { wkname, as_of_date } = action.payload[0].data[0];
            return { updatedAsOf: as_of_date, currentQuarterWeek: wkname };
        default:
            return state;
    }
}
