import React, {useEffect, useState} from "react";
import avatar from "./avatar.jpg";
import {useSelector} from 'react-redux';
import Simplert from 'react-simplert';


function AwaitingRequests() {
  let userLogged = useSelector(state => state.userLogin.id);
  let [listadoAmigos, setListadoAmigos] = useState([]);
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


  useEffect(() => {
    let url2 = 'http://localhost:3001/usuarios/solicitudes';
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
        return resp.json();
    }).then((data)=>{
      if(data.user.length === 0){
        setAlert({
          show: true,
          type: "Warning Alert",
          title: "Alerta",
          message: "No hay solicitudes pendientes",
          close:() => {setAlert({  show: false,
            type: "",
            title: "",
            message:""
          })}
        });
      }
      else{
        setListadoAmigos(data.user);
        console.log(data.user);
      }
    })
    .catch((err)=>{
        console.log(err);
    })
      
  },[])


  let agregarAmigo = (idAmigo) => {
    let url = 'http://localhost:3001/usuarios/pendientes';
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
            message: "Usuario o contraseña no encontrados",
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
            message: "Usuario aceptado",
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
      <h1>Solicitudes pendientes</h1>
    </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          {listadoAmigos?(
          listadoAmigos.map(
          (elemento, i) => (
          <div className="card justify-content-center" key={i}>
            <img src={avatar} alt="avatar" className="rounded-circle img-fluid imagenUsuario" />
            <label className="form-label label-Datos">{elemento.nombre} {elemento.apellidos}</label>
            <button onClick={()=> {agregarAmigo(elemento.id)}} type="button" className="btn botonesTecla">Aceptar
              Amigo</button>
          </div>
          ))
          )
        :(<div className="card justify-content-center">
        <img src={avatar} alt="avatar" className="rounded-circle img-fluid imagenUsuario" />
        <label className="form-label label-Datos">No tienes amigos pendientes ;(</label>
      </div>)
        }
        </div>
      </div>
    </div>
  </div>
</div>
</div>

);
}

export default AwaitingRequests;