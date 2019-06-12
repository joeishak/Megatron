// Import Types
import {
    FETCH_COMMENTS,
    FETCHING_COMMENTS,
    FETCH_COMMENTS_COUNT
} from 'actions/types';
import * as utils from '../utilities';


// Instantiate Reducer function to default state
// data = [] no comments when dash loads
// comments = [[],[],[],[]] 4 arrays for where the Finance Comments Will goo, 
// isLoading  = true until first comments are fetched
export default function (state = { data: [], comments: [[], [], [], []], isLoading: true }, action) {
    switch (action.type) {
        // Maps comments to comments array
        case FETCH_COMMENTS:
            // Create a copy of state
            let copyOfState = JSON.parse(JSON.stringify(state));
           
            const replies = action.payload[0].replies;
            // Map Comments to Redux State
            const comments = action.payload[0].comment.map(ele => {
                return {
                    // Comment Message
                    comment: ele.comment,
                    // Comment ID
                    id: ele.id,
                    // Map Any Replies
                    replies: replies.map(element => {
                        // Map only the replies that have an id matching this comment
                        if (ele.id === element.commentId) {
                            return {
                                // Reply message
                                comment: element.reply,
                                // Reply Id
                                id: element.id,
                                // Reply Time
                                time: utils.getDateFormat(element.postTimeStamp),
                                // User who replied
                                userName: element.firstName + ' ' + element.lastName
                            }
                        }
                    }).filter(notUndefined => notUndefined),
                    // Comment Time
                    time: utils.getDateFormat(ele.postTimeStamp),
                    // Comment User Name
                    userName: ele.firstName + ' ' + ele.lastName
                }
            });
            // Total Comment count
            let commentsCount = action.payload[0].allComments;
            copyOfState.comments = [];
            let found = false;
            // Start for as many KPIS showing 
            for (let i = 0; i <= 37; i++) {
                // Start For as many comments posted
                for (let j = 0; j < commentsCount.length; j++) {
                    // Start if to determine if the comment belongs to this metric
                    if (i === commentsCount[j].metricId) {
                        // Set found to true
                        found = true;
                        // Add the comment to the state array
                        copyOfState.comments.push([commentsCount[j].commentCount]);
                    }

                }
                // If the metric had no comments
                if (!found) {
                    // Set it back to the current state
                    copyOfState.comments = [...copyOfState.comments, []]
                } else {
                    // Set found back to false
                    found = false;

                }
            }
            return { comments: copyOfState.comments, data: comments, isLoading: false };
        case FETCHING_COMMENTS:
            return { ...state, data: [], isLoading: action.payload }
        default:
            return state;
    }
}