import {
    ADD_MULTI_FILTER,
    REMOVE_MULTI_FILTER,
    UPDATE_MULTI_FILTER_VALUES
} from 'actions/types';
import _ from 'lodash';
export default function(state = [
    
], action) {
    switch(action.type) {

        case  ADD_MULTI_FILTER:

            let copyOfState = [...state];
            // console.log(action.payload);
            let cat = action.payload.category;
            // console.log('copy of state',copyOfState);
            let index = _.findIndex(copyOfState,{category:cat});
            if(index===-1){
                copyOfState.push(action.payload);
            } else {
                // console.log('found index',index);
                copyOfState.splice(index,1,action.payload);
            }
            


            
            return copyOfState;

        case UPDATE_MULTI_FILTER_VALUES:


            return state;
        case REMOVE_MULTI_FILTER:
            let filterToBeRemoved = action.payload;
            let newFilters = [...state];    
            console.log('The filter you want to remove', filterToBeRemoved);
            console.log('The new copy of state',newFilters);    
            _.remove(newFilters,(n)=>{
                return n.index===filterToBeRemoved;
            });
            console.log('New filters after removing the match',newFilters);
            return newFilters;

        default: 
            return state;
    }
}