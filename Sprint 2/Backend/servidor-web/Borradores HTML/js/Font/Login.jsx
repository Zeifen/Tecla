import { useState } from "react";
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import './styleLogin.css' 

function Login() {
    let navigate = useNavigate();
    let [mail, setMail] = useState('');
    let [pass, setPass] = useState('');
    let [name, setName] = useState('');
    let [user, setUser] = useState('');

    const submit = (e) => {
        e.preventDefault();
        const blog = { us:mail, password:pass};
        setUser('');
        setName('');
        setMail('');  
        setPass('');
        console.log(blog);

          let url = 'http://localhost:3001/usuarios/login';
          fetch(url,{
              method: 'POST', // *GET, POST, PUT, DELETE, etc
              mode: 'cors',
              headers: {
                 'Content-Type': 'application/json',
              },body:JSON.stringify({
                  correo:blog.us,
                  contrasena:blog.password
              })
            }).then((resp)=>{
                return resp.json();
            }).then((data)=>{
              if(data.user.length === 0){
                alert('Usuario no encontrado, intenta de nuevo.');
              }
              else{
                alert('Bienvenido: ' +data.user[0].usuario);
                navigate('/help');
              }
            })
            .catch((err)=>{
                console.log(err);
            })
        }

    const submit2 = (e) => {
      e.preventDefault();
        const blog2 = { us:mail, password:pass, name:name, user:user};
        setUser('');
        setName('');
        setMail('');  
        setPass('');
        console.log(blog2);

          let url = 'http://localhost:3001/usuarios/agregarUsuario';
          fetch(url,{
              method: 'POST', // *GET, POST, PUT, DELETE, etc
              mode: 'cors',
              headers: {
                 'Content-Type': 'application/json',
              },body:JSON.stringify({
                  correo:blog2.us,
                  contrasena:blog2.password,
                  usuario:blog2.user,
                  nombre_completo:blog2.name
              })
            }).then((resp)=>{
                return resp.json();
            }).then((data)=>{
              if(data.user.msg === 'Usuario agregado.'){
                alert('Usuario agregado exitosamente');
                navigate('/login');
              }
              else{
                alert('Ocurrio un error');
                
              }
            })
            .catch((err)=>{
                console.log(err);
            })
        }

       


  return (
<div>

<div className="general_margin">

    <div className="general_container">
        <div className="back_cointainer">
            <div className="container_login">
                <h3>¿Ya tienes cuenta?</h3>
                <p>Inicia sesión para entrar a la página</p>
                <button id="btn_login" >Iniciar Sesión</button>
            </div>
            <div className="container_register">
                <h3>¿Aún no tienes cuenta?</h3>
                <p>Registrate para entrar a la página</p>
                <button id="btn_register" >Registrarse</button>
            </div>
        </div>

        <div className="container_register-login">
            {/* <!--Login--> */}
            <form onSubmit={submit} className="form_login">
                <h2>Iniciar Sesión</h2>
                <input type="text" 
                required 
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="Correo Electronico"/>

                <input type="password" 
                required 
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Contraseña"/>

                <button>Entrar</button>
            </form>

            {/* <!--Registro--> */}
            <form onSubmit={submit2} className="form_register">
                <h2>Registro</h2>
                <input type="text" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)} placeholder="Nombre Completo"/>
                <input type="text" 
                required 
                value={user}
                onChange={(e) => setUser(e.target.value)} placeholder="Usuario"/>
                <input type="text" 
                required 
                value={mail}
                onChange={(e) => setMail(e.target.value)} placeholder="Correo Electronico"/>
                <input type="password" 
                required 
                value={pass}
                onChange={(e) => setPass(e.target.value)} placeholder="Contraseña"/>
                <button className="">Registrarse</button>
            </form>

        </div>
    </div>
</div>
</div>
  );
}

// window.addEventListener("resize", anchoPage);

// var container_register_login = document.querySelector(".container_register-login");
// var form_login = document.querySelector(".form_login");
// var form_register = document.querySelector(".form_register");
// var container_login = document.querySelector(".container_login");
// var container_register = document.querySelector(".container_register");

// function anchoPage(){
//     if(window.innerWidth > 850){
//         container_login.style.display = "block";
//         container_register.style.display = "block";
//     }else{
//         container_register.style.display = "block";
//         container_register.style.opacity = "1";
//         container_login.style.display = "none";
//         form_login.style.display = "block";
//         form_register.style.display = "none";
//         container_register_login.style.left = "0px";
//     }
// }

// anchoPage();

// function login(){
//     if(window.innerWidth > 850){
//         form_register.style.display = "none";
//         container_register_login.style.left = "10px";
//         form_login.style.display = "block";
//         container_register.style.opacity = "1";
//         container_login.style.opacity = "0";
//     }
//     else{
//         form_register.style.display = "none";
//         container_register_login.style.left = "0px";
//         form_login.style.display = "block";
//         container_register.style.display = "block";
//         container_login.style.display = "none";
//     }
// }

// function register(){

//     if(window.innerWidth > 850){
//         form_register.style.display = "block";
//         container_register_login.style.left = "410px";
//         form_login.style.display = "none";
//         container_register.style.opacity = "0";
//         container_login.style.opacity = "1";
//     }else{  
//         form_register.style.display = "block";
//         container_register_login.style.left = "0px";
//         form_login.style.display = "none";
//         container_register.style.display = "none";
//         container_login.style.display = "block";
//         container_login.style.display = "1";
//     }
// }
 
export default Login;
