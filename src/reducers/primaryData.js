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
            //Actual, Targets, Vs QRf
            // //Finance
            newState[0].value = action.payload[0].data[0].NewARRActual;
            newState[0].target = action.payload[0].data[0].NewARRTarget;
            newState[0].vsqrf = action.payload[0].data[0].NewVsQrf;

            // //Discover
            newState[1].value = action.payload[1].data[0].TrafficActual;
            newState[1].target = action.payload[1].data[0].TrafficTarget;
            newState[1].vsqrf = action.payload[1].data[0].TrafficVSQrf;

            //  //Buy
             newState[2].value = action.payload[2].data[0].NewQfmActual;
             newState[2].target = action.payload[2].data[0].NewQfmTarget;
             newState[2].vsqrf = action.payload[2].data[0].NewQfmVsQrf;

            //   //Try
            newState[3].value = action.payload[1].data[0].ConversionActual;
            newState[3].target = action.payload[1].data[0].ConversionTarget;
            newState[3].vsqrf = action.payload[1].data[0].ConvcersionVsQrf;

            //  //Use
             newState[4].value = action.payload[2].data[0].RepeatUserMauActual;
             newState[4].target = action.payload[2].data[0].RepeatUserMauTarget;
             newState[4].vsqrf = action.payload[2].data[0].RepeatUserMauVsQrf;

            //   //Renew
            newState[5].value = action.payload[1].data[0].UiCancelRateActual;
            newState[5].target = action.payload[1].data[0].UiCancelRateTarget;
            newState[5].vsqrf = action.payload[1].data[0].UiCacncelRateVsQrf;

            return newState;
            case ADD_NEW_PRIMARY_COMMENT:
              index = action.payload.square;
              copyOfState = Object.assign([],state);
              copyOfState[index].comments.push(action.payload.comment);
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
