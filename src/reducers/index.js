import { combineReducers } from 'redux';
// import authReducer from 'reducers/auth'
import filterReducer from 'reducers/filters';
import switchReducer from 'reducers/switchFilter';
import dialogReducer from 'reducers/dialog';
import allDataReducer from 'reducers/allData';
export default combineReducers({
    // auth: authReducer,
    filters: filterReducer,
    switchFilter: switchReducer,
    isDialogOpen: dialogReducer,
    adobeData: allDataReducer
});