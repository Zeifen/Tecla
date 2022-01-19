import React , {useState} from "react";
import personas from "./personas.png";
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';


function DatosUsuario() {
    let navigate = useNavigate();
    let userLogged = useSelector(state => state.userLogin.usuario);

    let [gender, setGender] = useState('');
    let [country, setCountry] = useState('México');
    let [city, setCity] = useState('');
    let [profile, setProfile] = useState('');
    let [hobbies, setHobbies] = useState('');
    let [age, setAge] = useState('');


    const submit3 = (e) => {
        e.preventDefault();
        const blogUser = {

        age:age,
        gender:gender,
        country:country,
        city:city,
        profile:profile,
        hobbies:hobbies
        };

        setAge('');
        setGender('');
        setCountry('');
        setCity('');
        setProfile('');
        setHobbies('');

          let url = 'http://localhost:3001/usuarios/completarDatosUs';
          fetch(url,{
              method: 'POST', // *GET, POST, PUT, DELETE, etc
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json',
           },body:JSON.stringify({

                edad:blogUser.age,
                genero:blogUser.gender,
                pais:blogUser.country,
                ciudad:blogUser.city,
                perfil_link:blogUser.profile,
                hobbies:blogUser.hobbies,
                userLog:userLogged
           })
        }).then((resp)=>{
            return resp.json();
        }).then((data)=>{
          if(data.user.msg = 'Datos Insertados.'){
            alert('Usuario Actualizado.');
            navigate('/posts');
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

<div className="container px-4 py-5 mx-auto" id="ContainerDatosUsuario">
  <div className="cardDatos" id="card0">
    <div className="d-flex flex-lg-row flex-column-reverse">
      <div className="cardDatos" id="card1">
        <div className="row justify-content-center my-auto">
          <div className="col-md-11 col-10 my-5">
            <div className="containerDatos">
              <form className="row">

                <div className="row">
                  <div className="col-md-12 mb-3">
                    <label htmlFor="formFile" className="form-label label-Datos">
                      Seleccione foto de perfil
                    </label>
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                </div>


                <div className="row">
                  <div className="col">
                    <label htmlFor="inputEmail4" className="form-label label-Datos">Nombre</label>
                    <input required defaultValue={useSelector(state=> state.userLogin.nombre)}

                    type="text"
                    className="form-control inputRegistro" id="inputEmail4" />
                  </div>

                  <div className="col">
                    <label htmlFor="inputPassword4" className="form-label label-Datos">Apellido</label>
                    <input required defaultValue={useSelector(state=> state.userLogin.apellido)}

                    type="text"
                    className="form-control inputRegistro"
                    id="inputPassword4" />
                  </div>

                  <div className="col">
                    <label htmlFor="label_Usuario" className="form-label label-Datos">Usuario</label>
                    <div className="input-group">
                      <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                       <input required defaultValue={useSelector(state=> state.userLogin.usuario)}
 
                      type="text"
                      className="form-control label-Datos inputRegistro"
                      id="validationTooltipUsername"
                      aria-describedby="validationTooltipUsernamePrepend"
                      required
                      />
                    </div>
                  </div>
                </div>


                <div className="row">
                  <div className="col">
                    <label htmlFor="inputEmail4" className="form-label label-Datos">Edad</label>
                    <input required value={age} onChange={(e)=> setAge(e.target.value)}
                    type="text"
                    className="form-control inputRegistro"
                    id="inputEmail4" />
                  </div>

                  <div className="col">
                    <label htmlFor="inputState" className="form-label label-Datos">Genero</label>
                    <select value={gender} onChange={(e)=> setGender(e.target.value)}
                      id="inputState"
                      className="form-select">
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                    </select>
                  </div>

                  <div className="col selectPais">
                    <label htmlFor="inputState" className="form-label label-Datos">País</label>
                    <select value={country} onChange={(e)=> setCountry(e.target.value)}
                      id="inputState"
                      className="form-select">
                      <option value="México">México</option>
                      <option value="E.U.A">E.U.A</option>
                    </select>
                  </div>

                  <div className="col">
                    <label htmlFor="inputEmail4" className="form-label label-Datos">Ciudad</label>
                    <input required value={city} onChange={(e)=> setCity(e.target.value)}
                    type="text"
                    className="form-control inputRegistro"
                    id="inputEmail4" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="perfilLinkedIn" className="form-label label-Datos">Perfil de LinkedIn</label>
                    <input required value={profile} onChange={(e)=> setProfile(e.target.value)}
                    type="text"
                    className="form-control inputRegistro"
                    id="perfilLinkedIn" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-13 mb-3">
                    <label htmlFor="descriptionHobbies" className="form-label label-Datos">Hobbies</label>
                    <textarea required value={hobbies} onChange={(e)=> setHobbies(e.target.value)}
                                     className="form-control"
                                     id="descriptionHobbies"
                                     rows="3"
                                   ></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 text-center">
                    <button type="button" onClick={submit3} className="btn botonesTecla">Guardar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="cardDatos" id="card2">
        <div className="my-auto mx-md-5 px-md-5 right">
          <h3 className="text-white">¡Bienvenido a TECLA COMMUNITY!</h3> <small className="text-white">Queremos conocer
            más de ti</small>
          <div className="row">
            <img src={personas} alt="personas" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




);
}

export default DatosUsuario;