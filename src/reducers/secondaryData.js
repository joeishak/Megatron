import {
    GET_SECONDARY_DATA,
    GET_SECONDARY_DETAIL_DATA,
    ADD_NEW_SECONDARY_COMMENT,
    ADD_NEW_SECONDARY_REPLY

    } from 'actions/types';
    import { SecondaryData } from '../variables.js';
    let copyOfSquare;
    let index = 0;
    let newState;
    let currentMulti;
    export default function(state = SecondaryData, action) {
        switch(action.type) {
            case  GET_SECONDARY_DATA:
            //Make a copy of state
            newState = Object.assign([], state);
            // //Finance
            newState[0].value = action.payload[0].data[0].NewARRActual;
            newState[0].target = action.payload[0].data[0].NewARRTarget;
            // //Gross New Arr
            newState[1].value = action.payload[0].data[0].GrossARRActual;
            newState[1].target = action.payload[0].data[0].GrossARRTarget;
            //  //Cacncellations
             newState[2].value = action.payload[0].data[0].CancelARRActual;
             newState[2].target = action.payload[0].data[0].CancelARRTarget;
            //   //Renewal
            newState[3].value = action.payload[0].data[0].RenewARRActual;
            newState[3].target = action.payload[0].data[0].RenewARRTarget;
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
            case GET_SECONDARY_DETAIL_DATA:

            console.log('Action Payload for Detail Data',action.payload);
            let netArr ={ actual: [], target:[], lq: [], ly: []},
                netCancellations = { actual: [], target:[], lq: [], ly: []},
                grossArr = { actual: [], target:[], lq: [], ly: []},
                termRenewal = { actual: [], target:[], lq: [], ly: []};
            newState = Object.assign([],state);


            //Get Financial Multichart values
            for(let i = 0; i< action.payload[0].data.length; i++) {
                 let item = action.payload[0].data[i];

                 netArr.actual.push(item.NewARRActual);
                 netArr.target.push(item.NewARRTarget);
                 netArr.ly.push(item.NewARRLY);
                 netArr.lq.push(item.NewARRLQ);

                 netCancellations.actual.push(item.CancelARRActual);
                 netCancellations.target.push(item.CancelARRTarget);
                 netCancellations.ly.push(item.CancelARRLY);
                 netCancellations.lq.push(item.CancelARRLQ);

                 grossArr.actual.push(item.GrossARRActual);
                 grossArr.target.push(item.GrossARRTarget);
                 grossArr.ly.push(item.GrossARRLY);
                 grossArr.lq.push(item.GrossARRLQ);

                 termRenewal.actual.push(item.RenewARRActual);
                 termRenewal.target.push(item.RenewARRTarget);
                 termRenewal.ly.push(item.RenewARRLY);
                 termRenewal.lq.push(item.RenewARRLQ);

             };
             // console.log('Local Variables', netArr, netCancellations,grossArr,termRenewal);
             // Get Journey G2 Multichart Values
             // Get Journey G3 Multichart Values
             for (let i = 0; i < newState.length; i++) {
                  switch(i){
                      case 0:
                      currentMulti  = [netArr.actual,netArr.target,netArr.ly,netArr.lq];
                      break;
                      case 1:
                      currentMulti  = [grossArr.actual,grossArr.target,grossArr.ly,grossArr.lq];
                      break;
                      case 2:
                      currentMulti  =  [netCancellations.actual,netCancellations.target,netCancellations.ly,netCancellations.lq];
                      break;
                      case 3:
                      currentMulti  = [termRenewal.actual,termRenewal.target,termRenewal.ly,termRenewal.lq];
                      break;
                      default:
                      break;
                  }
                  // console.log(currentMulti);
                  newState[i]['details'].multichart = currentMulti;

              }
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
            return [...state]
              default:
                return state;
        }
    }
