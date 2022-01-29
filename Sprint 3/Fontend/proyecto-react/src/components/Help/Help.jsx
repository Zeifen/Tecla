import React from "react";
import '../Help/help.css';
import {useSelector, useDispatch} from 'react-redux';
import {decrement} from '../../reducers/actions';
import {Field, reduxForm} from 'redux-form';


function Help(props) {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  let action = (formValues) => {
    console.log(formValues.Title);
    dispatch(decrement(formValues));
  }

return (
  <div className="create">
    <h2>Ejercicio</h2>
    <form onSubmit={props.handleSubmit(action)}>
    <label>Título:</label>
    <Field name="Title" component="input" type="text" className="Field"/>

    <label>Consulta:</label>
    <Field name="Consult" component="input" type="text" className="Field"/>

    <label>Problemas comunes:</label>
    <Field name="Problems" component="input" type="text" className="Field"/>
      
    <label>Selecciona tu opción</label>
    <Field name="Select" component="select">
            <option></option>
            <option value="No me permite publicar">No me permite publicar</option>
            <option value="Otro asunto">Otro asunto</option>
    </Field>

    <button>Enviar</button>
    <h1>Counter: {counter}</h1>
    </form>
  </div>
  );
}

export default reduxForm({form: 'helpForm'})(Help);

