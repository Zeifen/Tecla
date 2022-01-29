import React, { useState} from "react";
import { useDispatch} from 'react-redux';
import {logout} from '../../reducers/actions';
import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Simplert from 'react-simplert';

function Navbar() {
  const userLog = useSelector(state => state.userLogin.usuario);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let [alert, setAlert] = useState({
    show: false,
    type: "",
    title: "",
    message: "",
    close:() => {setAlert({  show: false,
      type: "",
      title: "",
      message:""
    })}
  });

  const logoutUser = (e) =>{
    
    dispatch(logout())
    setAlert({
      show: true,
      type: "Warning Alert",
      title: "Ha salido de la sesión",
      message: "¡Hasta Luego!",
      close:() =>{
        navigate('/login');
      }
    });
  }

  const perfil = (e) =>{ 
    navigate('/perfil');

  }

  const course = (e) =>{ 
    navigate('/nuevoCurso');

  }

  const agregarAmigo = (e) =>{ 
    navigate('/agregarAmigo');
  }
  
  const post = (e) =>{ 
    navigate('/posts');
  }

  const amigos = (e) =>{ 
    navigate('/amigos');
  }

  return (
    <div>
        
      <Simplert
        showSimplert={alert.show}
        type={alert.type}
        title={alert.title}
        message={alert.message}
        onClose={alert.close}
      />
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
       onClick={post}>
          <i className="fas fa-chalkboard-teacher"></i>
       </button>

       <button 
       className="ms-2 btn btn_navbar"
       onClick={amigos}>
          <i className="fas fa-users"></i>
       </button>

       <button 
       className="ms-2 btn btn_navbar"
       onClick={agregarAmigo}>
          <i className="fas fa-user-friends"></i>
       </button>

       <button 
       className="ms-2 btn btn_navbar"
       onClick={perfil}>
          <i className="fas fa-user"></i>
       </button>

       <label className="form-label label-Datos">
        Usuario:{userLog}
      </label>

       <button 
       className="ms-2 btn btn_navbar"
       onClick={logoutUser}>
       <i className="fas fa-power-off"></i>
       </button>
     </div>
     </div>
     </nav>
    </div>
    </div>
  );
}

export default Navbar;
