import { useState } from 'react';
import './form.css';


function Form() {
    const [visible, cambiarEstado ] = useState(false);
  return (
    <div>
      <button className="btn btn-primary" type="button" onClick={() => {cambiarEstado(visible? false:true)}}>Presiona aquí</button>
      <div className = {visible? "center show" : "center hide"}>
        <form>
         <label htmlFor="name">Nombre:</label>
         <input type="text" id="name" name="user_name" />

         <label htmlFor="mail">Correo electrónico:</label>
         <input type="email" id="mail" name="user_email" />

         <label htmlFor="msg">Mensaje:</label>
         <textarea id="msg" name="user_message"></textarea>
         </form>
    </div>
    </div>
  );
}




export default Form;
