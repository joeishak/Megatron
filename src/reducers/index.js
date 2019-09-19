import { combineReducers } from 'redux';
import authReducer from 'reducers/auth';
import userReducer from 'reducers/user';
import dialogReducer from 'reducers/dialog';

import detailsReducer from 'reducers/summaryDetails';
import excelDataReducer from 'reducers/excelData.js';
import commentBoxVisibilityReducer from 'reducers/commentBoxVisible.js';
import toggleCommentaryReducer from 'reducers/toggleCommentary.js';
import multiChartMetricReducer from 'reducers/multichartIsArr.js';
import userSettingsReducer from 'reducers/userSettings.js';
import healthAndHeartbeatReducer from 'reducers/healthAndHeartbeat.js';
import activeCardReducer from 'reducers/activeCards.js';
import appSettingsReducer from 'reducers/appSettings.js';
import summaryDataReducer from 'reducers/summaryData.js';
import commentsReducer from 'reducers/comments.js';
import filtersReducer from 'reducers/filters.js';
import feedbackDialogReducer from 'reducers/feedback.js';
import currentRefreshDateReducer from 'reducers/currentRefreshDates.js';
import correlationDataReducer from 'reducers/correlationData.js';
import bannerMessageReducer from 'reducers/bannerMessage'

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    isDialogOpen: dialogReducer,
    detailsIsOpen: detailsReducer,
    excelData: excelDataReducer,
    commentBoxIsOpen: commentBoxVisibilityReducer,
    toggleCommentaryBox: toggleCommentaryReducer,
    multichartIsArr: multiChartMetricReducer,
    preferences: userSettingsReducer,
    sysInfo: healthAndHeartbeatReducer,
    activeCards: activeCardReducer,
    appSettings: appSettingsReducer,
    summaryData: summaryDataReducer,
    filters: filtersReducer,
    commentsPackage: commentsReducer,
    isFeedBackDialogOpen: feedbackDialogReducer,
    currentRefreshDates: currentRefreshDateReducer,
    correlationData: correlationDataReducer,
    bannerMessage: bannerMessageReducer,
});