import React, {useState, useEffect} from "react";
import avatar from "./avatar.jpg"
import {useSelector} from 'react-redux';

function Profile(){

  let userLogged = useSelector(state => state.userLogin.id);
  let [listadoUsuario, setListadoUsuario] = useState([]);

  useEffect(() => {
          let url = 'http://localhost:3001/usuarios/perfil';
          fetch(url,{
              method: 'POST', // *GET, POST, PUT, DELETE, etc
              mode: 'cors',
              headers: {
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' +localStorage.getItem('token')
              },body:JSON.stringify({
                id:userLogged
              })
            }).then((resp)=>{
                return resp.json();
            }).then((data)=>{
              
              if(data.user.length === 0){
                alert('Usuario no encontrado, intenta de nuevo.');
              }
              else{
                setListadoUsuario(data.user);
                console.log(listadoUsuario);
              }
            })
            .catch((err)=>{
                console.log(err);
            })
          },[])

  return (

<div className="row">
  <div className="col-lg-4">
    <div className="card mb-5 mt-5">
      <div className="card-body text-center">
        <img src={avatar} alt="avatar" className="rounded-circle img-fluid" />
        <div className="row">
          <label className=" mb-1 form-label labelLogin">{listadoUsuario.nombre}</label>
        </div>

        <div className="row">
          <label className="text-muted mb-1 form-label labelLogin">Full Stack Developer</label>
        </div>

        <div className="row">
          <label className="text-muted mb-4 form-label labelLogin">{listadoUsuario.pais}</label>
        </div>
        <div className="d-flex justify-content-center mb-1">
          {/* <button type="button" onClick={datosUsuario} className="botonesTecla">Agregar Amigo</button> */}
        </div>

      </div>
    </div>

    <div className="card mb-4">
      <h5 className="card-header">Cursos <i className="fas fa-laptop-code"></i></h5>
      <div className="card-body">
        <div className="row">

          <div className="col-sm-3">
            <label className="mb-0">CSS</label>
          </div>
          <div className="col-sm-9">
            <label className=" mb-0"> 2020-2021</label>
          </div>
        </div>
        <hr>
        </hr>


        <div className="row">
          <div className="col-sm-3">
            <label className="mb-0">JavaScript</label>
          </div>
          <div className="col-sm-9">
            <label className="mb-0">2019-2020</label>
          </div>
        </div>
        <hr>
        </hr>


        <div className="row">
          <div className="col-sm-3">
            <label className="mb-0">Bootstrap</label>
          </div>
          <div className="col-sm-9">
            <label className="mb-0">2021</label>
          </div>
        </div>
        <hr>
        </hr>



        <div className="row">
          <div className="col-sm-3">
            <label className="mb-0">SQL</label>
          </div>
          <div className="col-sm-9">
            <label className="mb-0">2021</label>
          </div>
        </div>
        <hr>
        </hr>

        <div className="row">
          <div className="col-sm-3">
            <label className="mb-0">React</label>
          </div>
          <div className="col-sm-9">
            <label className="mb-0">2020-2021</label>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div className="col-lg-7">
    <div className="card mb-4 mt-5">
      <h5 className="card-header">Datos Personales<i className="fas fa-user-alt"></i></h5>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <label className="mb-0">Correo</label>
          </div>
          <div className="col-sm-9">
            <label className="mb-0">{listadoUsuario.correo}</label>
          </div>
        </div>
        <hr>
        </hr>

        <div className="row">
          <div className="col-sm-3">
            <label className="mb-0">Usuario</label>
          </div>
          <div className="col-sm-9">
            <label className="mb-0">{listadoUsuario.usuario}</label>
          </div>
        </div>
        <hr>
        </hr>
        <div className="row">
          <div className="col-sm-3">
            <label className="mb-0">Edad</label>
          </div>
          <div className="col-sm-9">
            <label className="mb-0">{listadoUsuario.edad}</label>
          </div>
        </div>
        <hr>
        </hr>
        <div className="row">
          <div className="col-sm-3">
            <label className="mb-0">Genero</label>
          </div>
          <div className="col-sm-9">
            <label className="mb-0">{listadoUsuario.genero}</label>
          </div>
        </div>

        <hr>
        </hr>
        <div className="row">
          <div className="col-sm-3">
            <label className="mb-0"> LinkedIn</label>
          </div>
          <div className="col-sm-9">
            <label className="mb-0">{listadoUsuario.perfil}</label>
          </div>
        </div>

      </div>
    </div>


    <div className="row">
      <div className="col-md-5">
        <div className="card  cardPerfil mb-4 mb-md-0">
          <h5 className="card-header ">Idiomas <i className="fas fa-globe-americas"></i></h5>
          <div className="card-body">
            <div className="row">
              <label className="mb-4">{listadoUsuario.idioma}</label>
            </div>
          </div>
        </div>
      </div>



      <div className="col-md-7">
        <div className="card cardPerfil mb-4 mb-md-0">
          <h5 className="card-header">Hobbies <i className="fas fa-puzzle-piece"></i></h5>
          <div className="card-body">

            <div className="row">
              <label className="mb-1">{listadoUsuario.hobbies}</label>
            </div>



          </div>
        </div>
      </div>

    </div>



  </div>
</div>

);
}

export default Profile;