import { FETCH_COMMENTS } from 'actions/types';

export default function(state = [],action) {
    switch(action.type) {
        case FETCH_COMMENTS:
        console.log(action.payload);
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
                                time: element.postTimeStamp,
                                userName: element.firstName + ' ' + element.lastName
                            }
                        }
                    }).filter(notUndefined => notUndefined),
                    time: ele.postTimeStamp,
                    userName: ele.firstName + ' ' + ele.lastName
                }
            });


            console.log(comments);    


            return comments;
        default: 
            return state;
    }
}