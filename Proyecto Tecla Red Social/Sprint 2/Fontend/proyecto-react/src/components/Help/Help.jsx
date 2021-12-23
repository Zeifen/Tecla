import { useState } from "react";
import './help.css';

function Help() {
    let [title, setTitle] = useState('');
    let [problems, setProblem] = useState('');
    let [consult, setConsult] = useState('');
    let [option, setOption] = useState('No me permite publicar');
    const Submit = (e) => {
        e.preventDefault();
        const blog = { title, problems, consult, option };
        alert('Tu solicitud a sido enviada');
        setTitle('');
        setProblem('');
        setConsult('');
        setOption('No me permite publicar');
        console.log(blog);
      }


  return (
    <div className="create">
      <h2>Ejercicio</h2>
      <form onSubmit={Submit}>
      <label>Título:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

      <label>Consulta:</label>
        <textarea
          required
          value={consult}
          onChange={(e) => setConsult(e.target.value)}
        ></textarea>

        <label>Problemas comunes:</label>
        <input 
          type="text" 
          required 
          value={problems}
          onChange={(e) => setProblem(e.target.value)}
        />
        
        <label>Selecciona tu opción</label>
        <select
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="Problemas al inicio de sesión">Problemas al inicio de sesión</option>
          <option value="No me permite publicar">No me permite publicar</option>
        </select>
        <button>Enviar</button>
        {/* <p>{title}</p> */}
      </form>
    </div>
  );
}
 
export default Help;