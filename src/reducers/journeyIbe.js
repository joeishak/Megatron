import {

    ADD_NEW_JOURNEY_COMMENT,
    ADD_NEW_JOURNEY_REPLY
    
} from 'actions/types';
import { JourneyData } from '../variables.js';

export default function(state = JourneyData.squares, action) {
 
    let squares = JourneyData.squares;
    let copyOfSquare;
    let index = 0;
   
    switch(action.type) {
        
        //Case for adding a new comment
        case ADD_NEW_JOURNEY_COMMENT: 
                 index = action.payload.square-1;
                 copyOfSquare = Object.assign({},state[index]);
                copyOfSquare.comments.push(action.payload.comment);
                state[index] = copyOfSquare;
        return [...state];
        // CAse for adding a reply to a previous comment
        case ADD_NEW_JOURNEY_REPLY:

        index = action.payload.square-1;
        copyOfSquare = Object.assign({},state[index]);
        let commentIndex = Number(action.payload.comment)
        copyOfSquare.comments[commentIndex].replies.push(action.payload.reply);
        state[index] = copyOfSquare;

        return [...state]
        default: 
            return state;
    }
}

