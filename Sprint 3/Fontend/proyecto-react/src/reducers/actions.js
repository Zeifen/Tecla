import * as type from './actionType';

export const login = (data) => {
    return{
        type: type.LOGIN,
        payload:data
    };
};

export const logout = () => {
    return{
        type: type.LOGOUT
        // payload:data
    };
};

export const actualizar = (data) => {
    return{
        type: type.ACTUALIZAR,
        payload:data
    };
};

// export const alerta_sucess = () =>{
//     return{
//         type: type.ALERTA_SUCCESS
//     }
// }















export const increment = (data) => {
    return{
        type: 'Increment',
        data:data
    };
};

export const decrement = (contador) => {
    return{
        type:'Decrement',
        datos:contador,
        otro:new Date()
    };
};

export const sing_in = (data) => {
    return{
        type: 'SIGN_IN',
        data:data
    };
};
