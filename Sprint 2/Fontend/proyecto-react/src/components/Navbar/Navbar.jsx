import React, { } from "react";
import { useDispatch} from 'react-redux';
import {logout} from '../../reducers/actions';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const logoutUser = (e) =>{
    
    dispatch(logout())
    navigate('/login');
    alert("¡Hasta luego!");

  }

  const perfil = (e) =>{ 
    navigate('/perfil');

  }

  const course = (e) =>{ 
    navigate('/nuevoCurso');

  }

  return (
    <div className="navbarRedsocial">
     <nav className="navbar navbar-expand-lg">
     <div className="container-fluid">
   
     <button className="navbar-toggler btn btn_navbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
     <i className="fas fa-bars"></i>
     </button>

     <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
          <a className="nav-link dropdown-toggle" href="/#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Más
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="/#">Editar Datos de Usuario</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/#">Agregar curso</a></li>
          </ul>
      <form className="d-flex mx-auto barra_busqueda col-md-3  col-xs-2">
          <input className="form-control me-2 inputRegistro" type="search" placeholder="Search"></input>
          <button className="btn btn_navbar">
              <i className="fas fa-search"></i>
          </button>
        </form>

        <button className="ms-2 btn btn_navbar">
          <i className="far fa-bell"></i>
       </button>

       <button onClick={course} className="ms-2 btn btn_navbar">
       <i className="fas fa-user-edit"></i>
       </button>

       <button 
       className="ms-2 btn btn_navbar"
       onClick={perfil}>
          <i className="fas fa-user"></i>
       </button>

       <button 
       className="ms-2 btn btn_navbar"
       onClick={logoutUser}>
       <i className="fas fa-power-off"></i>
       </button>
     </div>
     </div>
     </nav>
    </div>
  );
}

export default Navbar;
