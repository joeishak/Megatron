import {
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER
} from 'actions/types';
import _ from 'lodash';
export default function(state = [], action) {
    switch(action.type) {
        case  ADD_MULTI_FILTER:

        console.log(action.payload);
            let newFilter = {
                category: action.payload.category ,
                value: action.payload.value,
                index: state.length+1
            }
        console.log(newFilter);
           return [...state, newFilter];
        case REMOVE_MULTI_FILTER:
           let filterToBeRemoved = action.payload;
           console.log('The filter you want to remove', filterToBeRemoved);
           let newFilters = {...state};
           console.log('The new copy of state',newFilters);
           _.remove(newFilters,(n)=>{
               return n.index===filterToBeRemoved.index;
           });
           console.log('New filters after removing the match',newFilters);
        //    let parsedFilters = state.map(filter=>{
        //        return filter===action.payload;
        //    });
        //    console.log(newFilters);


           

            return newFilters;
        default: 
            return state;
    }
}