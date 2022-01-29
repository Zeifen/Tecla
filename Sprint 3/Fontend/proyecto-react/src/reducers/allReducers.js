import counterReducer from "./counterReducer";
import loggedReducer from "./loggedReducer";
import { combineReducers } from "redux";
import {reducer} from 'redux-form';
import usuarioReducers from "./usuarioReducers";
// import alertReducer from "./alertReducer";

const allReducers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer,
    userLogin:usuarioReducers,
    // alert:alertReducer,
    form:reducer //Para el componente Help
})

export default allReducers;