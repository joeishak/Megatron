import {
    GET_SECONDARY_DATA,
    ADD_NEW_SECONDARY_COMMENT,
    ADD_NEW_SECONDARY_REPLY
    
    } from 'actions/types';
    import { SecondaryData } from '../variables.js';
    let copyOfSquare;
    let index = 0;
    let newState;
    export default function(state = SecondaryData, action) {
        switch(action.type) {
            case  GET_SECONDARY_DATA:
            console.log(action.payload);
            newState = Object.assign([], state);
            // //Finance
            newState[0].value = action.payload[0].data[0].NetNewARRActual;
            newState[0].target = action.payload[0].data[0].NetNewARRTarget;
            // //Gross New Arr
            newState[1].value = action.payload[0].data[0].GrossNewARRActual;
            newState[1].target = action.payload[0].data[0].GrossNewARRTarget;
            //  //Cacncellations
             newState[2].value = action.payload[0].data[0].NetCancellationARRActual;
             newState[2].target = action.payload[0].data[0].NetCancellationARRTarget;
            //   //Renewal
            newState[3].value = action.payload[0].data[0].RenewalAtFPActual;
            newState[3].target = action.payload[0].data[0].RenewalAtFPTarget;
            //  //Target
             newState[5].value = action.payload[1].data[0].TrafficActual;
             newState[5].target = action.payload[1].data[0].TrafficTarget;
            //  //Marketable universe
             newState[5].value = action.payload[2].data[0].MarketableActual;
             newState[5].target = action.payload[2].data[0].MarketableTarget;
            //   //UQFM Conversions
            newState[6].value = action.payload[2].data[0].UQFMActual;
            newState[6].target = action.payload[2].data[0].UQFMTarget;
            // Paid Media Spend
            newState[7].value = action.payload[2].data[0].PaidMediaSpendActual;
            newState[7].target = action.payload[2].data[0].PaidMediaSpendTarget;
            return newState;
            case ADD_NEW_SECONDARY_COMMENT: 
                index = action.payload.square;
                copyOfSquare = Object.assign({},state[index]);
                copyOfSquare.comments.push(action.payload.comment);
                state[index] = copyOfSquare;
            return [...state];
            // CAse for adding a reply to a previous comment
            case ADD_NEW_SECONDARY_REPLY:
                index = action.payload.square;
                
                copyOfSquare = Object.assign({},state[index]);
                let commentIndex = Number(action.payload.comment)
                copyOfSquare.comments[commentIndex].replies.push(action.payload.reply);
                state[index] = copyOfSquare;
                console.log(state);
            return [...state]
              default: 
                return state;
        }
    }