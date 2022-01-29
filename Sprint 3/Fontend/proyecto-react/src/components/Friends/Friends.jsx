import React, {useEffect, useState} from "react";
import avatar from "./avatar.jpg";
import {useSelector} from 'react-redux';
import Simplert from 'react-simplert';

function Friends(){
  let [listadoAmigos, setListadoAmigos] = useState([]);
  let userLogged = useSelector(state => state.userLogin.id);
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

    let agregarAmigo = (idAmigo) => {
    let url = 'http://localhost:3001/usuarios/enviarSolicitud';
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        mode: 'cors',
        headers: {
           'Content-Type': 'application/json',
           'Authorization': 'Bearer ' +localStorage.getItem('token')
        },body:JSON.stringify({
          id:userLogged,
          id_friend:idAmigo
        })
      }).then((resp)=>{
          return resp.json();
      }).then((data)=>{
        
        if(data.user.length === 0){
          setAlert({
            show: true,
            type: "Warning Alert",
            title: "Alerta",
            message: "Ha ocurrido un error",
            close:() => {setAlert({  show: false,
              type: "",
              title: "",
              message:""
            })}
          });
        }
        else{
          setAlert({
            show: true,
            type: "Success Alert",
            title: "Enhorabuena",
            message: "Solicitud enviada",
            close:() => {setAlert({  show: false,
              type: "",
              title: "",
              message:""
            })}
          });
        }
      })
      .catch((err)=>{
          console.log(err);
      })
    }

    useEffect(() => {
    let url2 = 'http://localhost:3001/usuarios/amigos';
    fetch(url2,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +localStorage.getItem('token')
    },body:JSON.stringify({
        id:userLogged
    })
    }).then((resp)=>{
        return resp.json()
        .then((data)=>{
        setListadoAmigos(data.user);
        console.log(data.user);
    })
    })
        .catch((err)=>{
        console.log(err);
    })
    },[])

  return (

  <div>
    <Simplert 
    showSimplert={alert.show} 
    type={alert.type} 
    title={alert.title} 
    message={alert.message}
    onClose={alert.close} 
    />
  <div className="row mt-5 NuevoAmigo">
  <div className="col-md-8 mt-2 justify-content-center">
    <div className="container-fluid">
      <h1>Usuarios que quizá conozcas</h1>
    </div>

    <div className="container-fluid">
          {listadoAmigos?(
          listadoAmigos.map(
          (elemento, i) => (
          <div className="row">
            <div className="col-3">
              <div className="card justify-content-center" key={i}>
              <img src={avatar} alt="avatar" className="rounded-circle centrar" />
              <label className="form-label label-Datos text-center">{elemento.nombre} {elemento.apellidos}</label>
              <button onClick={()=> {agregarAmigo(elemento.id)}} type="button" className="btn botonesTecla">Agregar Amigo</button>
              </div>
            </div>
        </div>
          )))
        :null
        }
        
    </div>
  </div>
</div>
</div>

);
}

export default Friends;