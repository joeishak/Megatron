import { GET_IBHEARTBEAT } from 'actions/types';
// import parser from 'fast-xml-parser';

export default function(state = [],action) {
    switch(action.type) {
        case GET_IBHEARTBEAT:
            // let data =  parser.parse(action.payload.data);
            return action.payload;
        default: 
            return state;
    }
}