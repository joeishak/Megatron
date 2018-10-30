import {
    GET_USER_SETTINGS,
    UPDATE_USER_SETTINGS,
    UPDATE_DEFAULT_SUMMARY_PREFERENCE,
    UPDATE_DEFAULT_JOURN_KPI_PREFERENCE,
    UPDATE_DEFAULT_FIN_KPI_PREFERENCE
} from 'actions/types'

let newState = undefined;

export default   function(state = {},action) {
    switch(action.type) {
        case GET_USER_SETTINGS:
            return action.payload.data[0];
        case UPDATE_USER_SETTINGS:

            return action.payload.data[0];
        case UPDATE_DEFAULT_SUMMARY_PREFERENCE:

         newState = Object.assign({}, state);
        newState.defaultSummaryView = action.payload;
        return newState;

        case UPDATE_DEFAULT_FIN_KPI_PREFERENCE:
         newState = Object.assign({}, state);
         console.log(action.payload);
        newState.defaultFinKpi = action.payload;
        return newState;
        case UPDATE_DEFAULT_JOURN_KPI_PREFERENCE:
        console.log(action.payload);
         newState = Object.assign({}, state);
        newState.defaultJournKpi = action.payload;
        return newState;
        default: 
            return state;
    }
}
