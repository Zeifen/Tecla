import { useState } from "react";
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';


function Login() {
    let navigate = useNavigate();
    let [user, setUser] = useState('');
    let [pass, setPass] = useState('');

    const submit = (e) => {
        e.preventDefault();
        const blog = { us:user, password:pass};
        setUser('');
        setPass('');
        console.log(blog);

          let url = 'http://localhost:3001/usuarios/login';
          fetch(url,{
              method: 'POST', // *GET, POST, PUT, DELETE, etc
              mode: 'cors',
              headers: {
                 'Content-Type': 'application/json',
              },body:JSON.stringify({
                  usuario:blog.us,
                  contrasena:blog.password
              })
            }).then((resp)=>{
                return resp.json();
            }).then((data)=>{
              if(data.user.length === 0){
                alert('Usuario no encontrado');
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

  return (
    <div>
      <Navbar/>
    <div className="create" >
      <h2>Login</h2>
      <form onSubmit={submit}>

      <label>Usuario</label>
      <input 
          type="text" 
          required 
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <label>Contraseña</label>
        <input 
          type="password" 
          required 
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        
        <button>Enviar</button>
        {/* <p>{title}</p> */}
      </form>
    </div>
    </div>
  );
}
 
export default Login;
