import { combineReducers } from 'redux';
import authReducer from 'reducers/auth';
import userReducer from 'reducers/user';
import dialogReducer from 'reducers/dialog';
import multiFilterReducer from 'reducers/multiFilter';
import activeFiltersReducer from 'reducers/activeFilters';
import detailsReducer from 'reducers/summaryDetails';
import excelDataReducer from 'reducers/excelData.js';
import commentBoxVisibilityReducer from 'reducers/commentBoxVisible.js';
import toggleCommentaryReducer from 'reducers/toggleCommentary.js';
import multiChartMetricReducer from 'reducers/multichartIsArr.js';
import userSettingsReducer from 'reducers/userSettings.js';
import healthAndHeartbeatReducer from 'reducers/healthAndHeartbeat.js';
import primaryDataReducer from 'reducers/primaryData.js';
import activeCardReducer from 'reducers/activeCards.js';
import secondaryDataReducer from 'reducers/secondaryData.js';
import appSettingsReducer from 'reducers/appSettings.js';
export default combineReducers({
    auth: authReducer,
    user: userReducer,
    isDialogOpen: dialogReducer,
    availableFilters: multiFilterReducer,
    activeFilters: activeFiltersReducer,
    detailsIsOpen: detailsReducer,
    excelData: excelDataReducer,
    commentBoxIsOpen: commentBoxVisibilityReducer,
    toggleCommentaryBox: toggleCommentaryReducer,
    multichartIsArr: multiChartMetricReducer,
    preferences: userSettingsReducer,
    sysInfo: healthAndHeartbeatReducer,
    primaryData: primaryDataReducer,
    activeCards: activeCardReducer,
    secondaryData: secondaryDataReducer,
    appSettings: appSettingsReducer
});