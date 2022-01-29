const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'Increment':
            return state + 1
        case 'Decrement':
            console.log(action.otro);
            console.log(action.datos);
            return state - 1
        default:
            return state;
    }
}
export default counterReducer;

