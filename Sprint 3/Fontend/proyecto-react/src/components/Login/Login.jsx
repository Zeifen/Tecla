import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logoTecla from "./tecla_logo.png";
import './bg.css';
import { login } from '../../reducers/actions';
import { useDispatch } from 'react-redux';
import Simplert from 'react-simplert';


function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let [mail, setMail] = useState('');
  let [pass, setPass] = useState('');
  let [mail2, setMail2] = useState('');
  let [pass2, setPass2] = useState('');
  let [user, setUser] = useState('');
  let [name, setName] = useState('');
  let [lastname, setLastName] = useState('');
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


  const logeo = (e) => {
    e.preventDefault();
    const blog = { us: mail, password: pass };
    setMail('');
    setPass('');

    let url = 'http://localhost:3001/usuarios/login';
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +localStorage.getItem('token')
      }, body: JSON.stringify({
        correo: blog.us,
        contrasena: blog.password
      })
    }).then((resp) => {
      if (resp.status === 401) {
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
      } else {
        resp.json()
          .then((data) => {
            setAlert({
              show: true,
              type: "Success Alert",
              title: "Bienvenido: " +data.user.usuario,
              message: "Inicio exitoso",
              close:() =>{
                navigate('/datosUsuario');
              }
            });
            dispatch(login(data.user));
            localStorage.setItem('token', data.token);

          })
      }
    })
      .catch((err) => {
        console.log(err);
      })
  }

  const agregar = (e) => {
    e.preventDefault();
    const blog2 = { us: mail2, password: pass2, name: name, user: user, last: lastname };
    setUser('');
    setName('');
    setMail('');
    setPass('');
    setMail2('');
    setPass2('');
    setLastName('');

    let url = 'http://localhost:3001/usuarios/agregarUsuario';
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }, body: JSON.stringify({
        correo: blog2.us,
        contrasena: blog2.password,
        usuario: blog2.user,
        nombre: blog2.name,
        apellidos: blog2.last
      })
    }).then((resp) => {
      return resp.json();
    }).then((data) => {
      if (data.user.msg = 'Usuario agregado.') {
        
        setAlert({
          show: true,
          type: "Success",
          title: "Alerta",
          message: "Usuario agregado exitosamente.",
          close:() => {setAlert({  show: false,
            type: "",
            title: "",
            message:""
          })}
        });
       
       
      }
      else {
        setAlert({
          show: true,
          type: "Error",
          title: "Alerta",
          message: "Ocurrio un error.",
          close:() => {setAlert({  show: false,
            type: "",
            title: "",
            message:""
          })}
        });
      }
    })
      .catch((err) => {
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

      <div className="context">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="container pt-5" id="containerLogin">

            <div className="row justify-content-center text-center">
              <div className="col-5 card cardLogin">
                <form onSubmit={logeo} id="formLogin" className="formulario">
                  <img src={logoTecla} alt="logo" className="card-img-top mb-3 mt-3" />

                  <div className="mb-4">
                    <label className="col form-label labelLogin">
                      Correo
                    </label>

                    <input className="form-control inputLogin"
                      type="text"
                      required
                      value={mail}
                      onChange={(e) => setMail(e.target.value)}
                      placeholder="Ingrese correo"
                      aria-label="Usuario" id="username_id"
                    />

                  </div>
                  <div className="mb-3">
                    <label className="form-label labelLogin">
                      Password
                    </label>

                    <input
                      type="password"
                      required
                      value={pass} onChange={(e) => setPass(e.target.value)}
                      className="form-control inputLogin"
                      id="password_id"
                      placeholder="Ingrese su contraseña"
                    />
                  </div>

                  <div className="d-grip gap-2 mt-4 mb-4 text-align">
                    <button className="botonesTecla">Iniciar sesión</button>
                  </div>

                </form>
                <div className="row">
                  <label className="col-12 labelLogin">
                    ¿No tienes una cuenta?
                  </label>
                </div>

                <div className="row">

                  <div className="d-grip gap-2 mt-3 mb-5 text-align">
                    <button type="button" className="botonesTecla " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      Registrate
                    </button>
                  </div>

                  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabIndex="-1">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Registro</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        <div className="modal-body" id="modal">
                          <form onSubmit={agregar}>
                            <div className="row mt-4">
                              <div className="col-12">
                                <div className="input-container">
                                  <i className="fas fa-user icon"></i>
                                  <input
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="input-field"
                                    type="text"
                                    placeholder="Nombre"
                                    name="psw" />
                                </div>
                              </div>

                            </div>

                            <div className="row mt-4">
                              <div className="col-12">
                                <div className="input-container">
                                  <i className="fas fa-user icon"></i>
                                  <input
                                    required
                                    value={lastname}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="input-field"
                                    type="text"
                                    placeholder="Apellidos" name="psw" />
                                </div>
                              </div>

                            </div>

                            <div className="row mt-3">
                              <div className="col">
                                <div className="input-container">
                                  <i className="fas fa-at icon"></i>
                                  <input
                                    required
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                    className="input-field"
                                    type="text"
                                    placeholder="Usuario"
                                    name="usrnm" />
                                </div>
                              </div>
                            </div>


                            <div className="row mt-4">
                              <div className="col">
                                <div className="input-container">
                                  <i className="fa fa-envelope icon"></i>
                                  <input
                                    required
                                    value={mail2}
                                    onChange={(e) => setMail2(e.target.value)}
                                    className="input-field"
                                    type="text"
                                    placeholder="Email"
                                    name="email" />
                                </div>
                              </div>
                            </div>



                            <div className="row mt-4">
                              <div className="col-12">
                                <div className="input-container">
                                  <i className="fa fa-key icon"></i>
                                  <input
                                    required
                                    value={pass2}
                                    onChange={(e) => setPass2(e.target.value)}
                                    className="input-field"
                                    type="password"
                                    placeholder="Contraseña"
                                    name="psw" />
                                </div>
                              </div>

                            </div>


                            <div className="d-grip gap-2 mt-5 mb-5 text-align">
                              <button className="botonesTecla">Guardar</button>


                            </div>
                          </form>

                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Login;
