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
        newState  = action.payload.data[0];
        newState.geoFilters = JSON.parse(newState.geoFilters)
        newState.productFilters = JSON.parse(newState.productFilters)
        newState.routeFilters = JSON.parse(newState.routeFilters)
        newState.subscriptionFilters = JSON.parse(newState.subscriptionFilters)
        newState.marketFilters = JSON.parse(newState.marketFilters)
            return newState;
        case UPDATE_USER_SETTINGS:

        newState  = action.payload.data[0];
        newState.geoFilters = JSON.parse(newState.geoFilters)
        newState.productFilters = JSON.parse(newState.productFilters)
        newState.routeFilters = JSON.parse(newState.routeFilters)
        newState.subscriptionFilters = JSON.parse(newState.subscriptionFilters)
        newState.marketFilters = JSON.parse(newState.marketFilters)

            return newState;
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
