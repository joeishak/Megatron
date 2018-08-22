import { combineReducers } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
// import authReducer from 'reducers/auth'
import filterReducer from 'reducers/filters';
import switchReducer from 'reducers/switchFilter';
import dialogReducer from 'reducers/dialog';
import allDataReducer from 'reducers/allData';
import multiFilterReducer from 'reducers/multiFilter';
export default combineReducers({
    // auth: authReducer,
    filters: filterReducer,
    switchFilter: switchReducer,
    isDialogOpen: dialogReducer,
    adobeData: allDataReducer,
    availableFilters: multiFilterReducer
});