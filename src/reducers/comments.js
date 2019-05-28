import { FETCH_COMMENTS, FETCHING_COMMENTS, FETCH_COMMENTS_COUNT } from 'actions/types';
import * as utils from '../utilities';

export default function (state = { data: [], comments: [[], [], [], []], isLoading: true }, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            let copyOfState = JSON.parse(JSON.stringify(state));

            const replies = action.payload[0].replies;
            const comments = action.payload[0].comment.map(ele => {
                return {
                    comment: ele.comment,
                    id: ele.id,
                    replies: replies.map(element => {
                        if (ele.id === element.commentId) {
                            return {
                                comment: element.reply,
                                id: element.id,
                                time: utils.getDateFormat(element.postTimeStamp),
                                userName: element.firstName + ' ' + element.lastName
                            }
                        }
                    }).filter(notUndefined => notUndefined),
                    time: utils.getDateFormat(ele.postTimeStamp),
                    userName: ele.firstName + ' ' + ele.lastName
                }
            });
            let commentsCount = action.payload[0].allComments;
            copyOfState.comments = [];
            let found = false;
            for (let i = 0; i <= 35; i++) {
                for (let j = 0; j < commentsCount.length; j++) {
                    if (i === commentsCount[j].metricId) {
                        found = true;
                        copyOfState.comments.push([commentsCount[j].commentCount]);
                    }

                }
                if (!found) {
                    copyOfState.comments = [...copyOfState.comments, []]
                } else {
                    found = false;

                }

            }

            return { comments: copyOfState.comments, data: comments, isLoading: false };
        case FETCHING_COMMENTS:
            return { ...state, data: [], isLoading: action.payload }
        // case FETCH_COMMENTS_COUNT:
        //     copyOfState = JSON.parse(JSON.stringify(state));
        //     commentsCount = action.payload[0];
        //     found = false;
        //     for (let i = 0; i <= 34; i++) {
        //         for (let j = 0; j < commentsCount.length; j++) {
        //             if (i === commentsCount[j].metricId) {
        //                 found = true;
        //                 copyOfState.comments.push([commentsCount[j].commentCount]);
        //             }

        //         }
        //         if (!found) {
        //             copyOfState.comments = [...copyOfState.comments, []]
        //         } else {
        //             found = false;

        //         }

        //     }

        //     return { ...copyOfState, isLoading: false };
        default:
            return state;
    }
}