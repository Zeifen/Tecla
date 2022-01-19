import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewCourse = () =>{

  const [startDate, setStartDate] = useState(new Date());
  
    return (
      
        <div className="container pt-5" id="containerCurso">
      
        <div className="row justify-content-center text-center">
          <form id="form" className="col-5 card cardCurso">
            <h3>Nuevo curso</h3> 
              <div className="row">
                <div className="col">
                  <label htmlFor="inputNombreCurso" className="form-label labelLogin">Nombre del curso</label>
                  <input type="text" className="form-control inputRegistro" id="inputNombreCurso" />
               </div>
               </div>
           <div className="row">
            <div className="col">
              <label htmlFor="inputLugarCurso" className="form-label labelLogin">Lugar donde se realizo</label>
              <input type="text" className="form-control inputRegistro" id="inputLugar" />
           </div>
           </div>

                 

           <div className="row">
            <div className="col">
                <label htmlFor="inputFechaInicio" className="form-label labelLogin mt-4">Fecha de inicio</label>
            <div>
           <DatePicker selected={startDate} className="calendario" onChange={(date) => setStartDate(date)} />
            </div>      
        
              </div>
           </div>
         
           <div className="col">
                <label htmlFor="inputFechaTermino" className="form-label labelLogin mt-4">Fecha de termino</label>
               
                <div>
           <DatePicker selected={startDate} className="calendario" onChange={(date) => setStartDate(date)} />
            </div> 

              </div>

           


            <div className="d-grip gap-2 mt-4 mb-3">
              <div  className="col-12 text-center">
                <button type="submit" className="botonesTecla">Guardar</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      
      
    );
}

export default NewCourse;