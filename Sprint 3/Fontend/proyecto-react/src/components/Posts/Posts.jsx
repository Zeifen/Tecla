import React from "react";


const Publicaciones = () =>{
return (

<div className="row justify-content-center mt-5">
  <div className=" col-6 mt-6 card">
    <div className="card-header">
      <i className="fas fa-plus icon"></i> Nuevo Post
    </div>
    <div className="card-body">
      <textarea className="form-control mt-3 mb-4" id="descriptionHobbies" rows="3"></textarea>
      <div className="row">
        <div className="col-12 text-center">
          <button type="button" className="btn botonesTecla">Publicar</button>
        </div>
      </div>
    </div>
  </div>
</div>


);
}

export default Publicaciones;