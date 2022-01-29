import * as type from './actionType'; 

const usuarioReducers = (state = {}, action) => {
    switch(action.type){
        case type.LOGIN:
            return action.payload
        case type.LOGOUT:
            return state = {}
        case type.ACTUALIZAR:
            return action.payload
        default:
            return state;
    }
}
export default usuarioReducers;

