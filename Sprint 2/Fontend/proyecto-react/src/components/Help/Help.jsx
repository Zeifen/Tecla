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


// import { useState } from "react";
// import '../Help/help.css';
// import {useSelector, useDispatch} from 'react-redux';
// import {increment,decrement,sing_in} from '../../reducers/actions';
// import {Field, reduxForm, reset} from 'redux-form';

// function Help() {
//     const counter = useSelector(state => state.counter);
//     const dispatch = useDispatch();

//   return (
//     <div className="create">
//       <h2>Contador {counter}</h2>
//       <button onClick={() => dispatch(increment())}>Incremento</button>
//       <button onClick={() => dispatch(decrement())}>Decremento</button>
//       <button onClick={() => dispatch(sing_in())}>Login</button>
//     </div>
//   );
// }
 
// export default reduxForm({form: 'helpForm'})(Help);





// function Help() {
//   let [title, setTitle] = useState('');
//   let [problems, setProblem] = useState('');
//   let [consult, setConsult] = useState('');
//   let [option, setOption] = useState('No me permite publicar');
//   const Submit = (e) => {
//       e.preventDefault();
//       const blog = { title, problems, consult, option };
//       alert('Tu solicitud a sido enviada');
//       setTitle('');
//       setProblem('');
//       setConsult('');
//       setOption('No me permite publicar');
//       console.log(blog);
//     }


// return (
//   <div className="create">
//     <h2>Ejercicio</h2>
//     <form onSubmit={Submit}>
//     <label>Título:</label>
//       <input 
//         type="text" 
//         required 
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//     <label>Consulta:</label>
//       <textarea
//         required
//         value={consult}
//         onChange={(e) => setConsult(e.target.value)}
//       ></textarea>

//       <label>Problemas comunes:</label>
//       <input 
//         type="text" 
//         required 
//         value={problems}
//         onChange={(e) => setProblem(e.target.value)}
//       />
      
//       <label>Selecciona tu opción</label>
//       <select
//         value={option}
//         onChange={(e) => setOption(e.target.value)}
//       >
//         <option value="Problemas al inicio de sesión">Problemas al inicio de sesión</option>
//         <option value="No me permite publicar">No me permite publicar</option>
//       </select>
//       <button>Enviar</button>
//       {/* <p>{title}</p> */}
//     </form>
//   </div>
// );
// }

// export default Help;

