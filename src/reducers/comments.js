import { FETCH_COMMENTS, FETCHING_COMMENTS } from 'actions/types';
import * as utils from '../utilities';

export default function (state = { data: [], isLoading: true }, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            const replies = action.payload.replies;
            const comments = action.payload.comment.map(ele => {
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

            return { data: comments, isLoading: false };
        case FETCHING_COMMENTS:
            console.log(action.payload);
            return { data: [], isLoading: action.payload }
        default:
            return state;
    }
}