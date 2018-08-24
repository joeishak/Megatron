import { combineReducers } from 'redux';
// import authReducer from 'reducers/auth'
import filterReducer from 'reducers/filters';
import switchReducer from 'reducers/switchFilter'; 
import dialogReducer from 'reducers/dialog';
import allDataReducer from 'reducers/allData';
import multiFilterReducer from 'reducers/multiFilter';
import activeFiltersReducer from 'reducers/activeFilters';
import switchFilterReducer from 'reducers/switchFilter';
export default combineReducers({
    // auth: authReducer,
    filters: filterReducer,
    switchFilter: switchReducer,
    isDialogOpen: dialogReducer,
    adobeData: allDataReducer,
    availableFilters: multiFilterReducer,
    activeFilters: activeFiltersReducer,
    switchFilter: switchFilterReducer
});