import { combineReducers } from 'redux';
import authReducer from 'reducers/auth';
import userReducer from 'reducers/user';
import filterReducer from 'reducers/filters';
import switchReducer from 'reducers/switchFilter'; 
import dialogReducer from 'reducers/dialog';
import allDataReducer from 'reducers/allData';
import multiFilterReducer from 'reducers/multiFilter';
import activeFiltersReducer from 'reducers/activeFilters';
import detailsReducer from 'reducers/summaryDetails';
import activeSummaryReducer from 'reducers/activeSummary.js';
import ibeDataReducer from 'reducers/ibeData.js';
import excelDataReducer from 'reducers/excelData.js';
import commentBoxVisibilityReducer from 'reducers/commentBoxVisible.js';
import toggleCommentaryReducer from 'reducers/toggleCommentary.js';
import journeyReducer from 'reducers/journeyIbe.js';
import multiChartMetricReducer from 'reducers/multichartIsArr.js';
import userSettingsReducer from 'reducers/userSettings.js';
import healthAndHeartbeatReducer from 'reducers/healthAndHeartbeat.js';
import primaryDataReducer from 'reducers/primaryData.js';
import activeCardReducer from 'reducers/activeCards.js';
export default combineReducers({
    auth: authReducer,
    user: userReducer,
    filters: filterReducer,
    switchFilter: switchReducer,
    isDialogOpen: dialogReducer,
    adobeData: allDataReducer,
    availableFilters: multiFilterReducer,
    activeFilters: activeFiltersReducer,
    detailsIsOpen: detailsReducer,
    activeSummarySquare: activeSummaryReducer,
    ibeData: ibeDataReducer,
    excelData: excelDataReducer,
    commentBoxIsOpen: commentBoxVisibilityReducer,
    toggleCommentaryBox: toggleCommentaryReducer,
    journeyData: journeyReducer,
    multichartIsArr: multiChartMetricReducer,
    preferences: userSettingsReducer,
    sysInfo: healthAndHeartbeatReducer,
    primaryData: primaryDataReducer,
    activeCards: activeCardReducer


});