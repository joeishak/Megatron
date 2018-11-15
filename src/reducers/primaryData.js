import {
GET_PRIMARY_DATA,
ADD_NEW_PRIMARY_COMMENT,
ADD_NEW_PRIMARY_REPLY
} from 'actions/types';
import { PrimaryData } from '../variables.js';
let newState;
let copyOfSquare;
let index = 0;
let copyOfState;
export default function(state = PrimaryData, action) {
    switch(action.type) {
        case  GET_PRIMARY_DATA:
        console.log(action.payload);

            newState = Object.assign([], state);
            // //Finance
            newState[0].value = action.payload[0].data[0].NetNewARRActual;
            newState[0].target = action.payload[0].data[0].NetNewARRTarget;
            // //Discover
            newState[1].value = action.payload[1].data[0].TrafficActual;
            newState[1].target = action.payload[1].data[0].TrafficTarget;
            //  //Buy
             newState[2].value = action.payload[2].data[0].NewQfmActual;
             newState[2].target = action.payload[2].data[0].NewQfmTarget;
            //   //Try
            newState[3].value = action.payload[1].data[0].ConversionActual;
            newState[3].target = action.payload[1].data[0].ConversionTarget;
            //  //Use
             newState[4].value = action.payload[2].data[0].RepeatUserMauActual;
             newState[4].target = action.payload[2].data[0].RepeatUserMauTarget;
            //   //Renew
            newState[5].value = action.payload[1].data[0].UiCancelRateActual;
            newState[5].target = action.payload[1].data[0].UiCancelRateTarget;
            return newState;
            case ADD_NEW_PRIMARY_COMMENT: 
              index = action.payload.square;
              copyOfState = Object.assign([],state);
              copyOfState[index].comments.push(action.payload.comment);
              console.log('copy of state',copyOfState);
          return copyOfState;
          // CAse for adding a reply to a previous comment
          case ADD_NEW_PRIMARY_REPLY:
              index = action.payload.square;
              copyOfSquare = Object.assign({},state[index]);
              let commentIndex = Number(action.payload.comment)
              copyOfSquare.comments[commentIndex].replies.push(action.payload.reply);
              state[index] = copyOfSquare;
          return [...state]
          default: 
            return state;
    }
}