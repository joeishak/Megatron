export default ({ dispatch }) => next => action => {
    
    //Does the action contain a promise
    //If so wait for resolve,
    //if not send the action on to the next middleware

    if(!action.payload || !action.payload.then){
        return next(action);
    }

    action.payload.then(function(response) {
        const newAction = {...action,payload: response};
        dispatch(newAction);
    });


};

        