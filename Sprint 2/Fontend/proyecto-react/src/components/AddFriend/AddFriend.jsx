import React from "react";
import avatar from "./avatar.jpg";


const AddFriend = () =>{
    return (
        
        <div className="row mt-5 NuevoAmigo">
        

        <div className="col-md-8 mt-2 justify-content-center">
          <div className="container-fluid">
              <h1>Amigos</h1> </div>
              
          <div className="container-fluid">
              <div className="row">

                  <div className="col-3">
                  <div className="card">
                  <img src={avatar} alt="avatar" className="rounded-circle img-fluid imagenUsuario"/>               
                      <p>Sebastian Ruiz</p>
                      <button type="button" className="btn botonesTecla">Agregar Amigo</button>  
                  </div>
                  </div>
                  
              </div>
          </div>
        </div>
     

      </div>
    

    );
}

export default AddFriend;