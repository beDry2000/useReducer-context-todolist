function logger(reducer) {

    return (prevState, action) => {
        console.group(action.type);
        console.log('Action type: ', action.type);
        console.log('Prev State: ', prevState);
        const nextState = reducer(prevState,action)
        console.log('NextState: ', nextState);
        console.groupEnd();
        return nextState
    }
}

export default logger;