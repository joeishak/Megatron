import { combineReducers } from 'redux';
// import authReducer from 'reducers/auth'
import filterReducer from 'reducers/filters';
import switchReducer from 'reducers/switchFilter'; 
import dialogReducer from 'reducers/dialog';
import allDataReducer from 'reducers/allData';
import multiFilterReducer from 'reducers/multiFilter';
import activeFiltersReducer from 'reducers/activeFilters';
import switchFilterReducer from 'reducers/switchFilter';
import detailsReducer from 'reducers/summaryDetails';
import activeSummaryReducer from 'reducers/activeSummary.js';
import ibeDataReducer from 'reducers/ibeData.js';
import excelDataReducer from 'reducers/excelData.js';
import commentBoxVisibilityReducer from 'reducers/commentBoxVisible.js';
export default combineReducers({
    // auth: authReducer,
    filters: filterReducer,
    switchFilter: switchReducer,
    isDialogOpen: dialogReducer,
    adobeData: allDataReducer,
    availableFilters: multiFilterReducer,
    activeFilters: activeFiltersReducer,
    switchFilter: switchFilterReducer,
    detailsIsOpen: detailsReducer,
    activeSummarySquare: activeSummaryReducer,
    ibeData: ibeDataReducer,
    excelData: excelDataReducer,
    commentBoxIsOpen: commentBoxVisibilityReducer
});