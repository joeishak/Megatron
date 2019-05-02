
import {
    UPDATE_USER_SETTINGS,
    UPDATE_DEFAULT_SUMMARY_PREFERENCE,
    GET_USER_SETTINGS
    // UPDATE_DEFAULT_JOURN_KPI_PREFERENCE,
    // UPDATE_DEFAULT_FIN_KPI_PREFERENCE
} from 'actions/types'

let newState = undefined;

export default   function(state = {},action) {
    switch(action.type) {
        case GET_USER_SETTINGS:
                newState  = action.payload.data[0];

                if(newState.geoFilters !== ""){
                    newState.geoFilters = JSON.parse(newState.geoFilters)
                }
                if(newState.productFilters !== ""){
                    newState.productFilters = JSON.parse(newState.productFilters)
                }
                if(newState.routeFilters!== ""){
                    newState.routeFilters = JSON.parse(newState.routeFilters)

                }
                if (newState.routeFilters !== ""){

                }
                if(newState.subscriptionFilters!== ""){
                    newState.subscriptionFilters = JSON.parse(newState.subscriptionFilters)

                }
                if(newState.marketFilters !== ""){
                    newState.marketFilters = JSON.parse(newState.marketFilters)

                }
                    return {...newState, preferencesAreLoaded: true};
        case UPDATE_USER_SETTINGS:
        newState  = action.payload.data[0];
        newState.geoFilters = JSON.parse(newState.geoFilters)
        newState.productFilters = JSON.parse(newState.productFilters)
        newState.routeFilters = JSON.parse(newState.routeFilters)
        newState.subscriptionFilters = JSON.parse(newState.subscriptionFilters)
        newState.marketFilters = JSON.parse(newState.marketFilters)

            return newState;

        default:
            return state;
    }
}
