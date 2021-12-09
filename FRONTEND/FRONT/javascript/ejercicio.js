let formulario = document.getElementById("form");
let nombre = document.getElementById("inputNombre");
let username = document.getElementById("inputUsername");
let apellidoP = document.getElementById("inputApellidoPaterno");
let apellidoM = document.getElementById("inputApellidoMaterno");
let correo = document.getElementById("inputCorreo");
let password = document.getElementById("inputPassword");

formulario.addEventListener("submit", (element) =>{ 
    element.preventDefault();
    let url = 'http://localhost:3050/usuarios/agregarUsuario';
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        mode: 'cors',
        headers: {
           'Content-Type': 'application/json',
        },body:JSON.stringify({
            NOMBRE:nombre.value,
            APELLIDO_PATERNO: apellidoP.value,
            APELLIDO_MATERNO: apellidoM.value,
            USERNAME: username.value,
            CORREO: correo.value,
            PASSWORD: password.value
        })
    }
    ).then((respuesta)=>{
        console.log(respuesta);
        respuesta.json().then(data => {
            console.log(data);
            location.href = "http://127.0.0.1:5501/buscarUsuario.html?="+data.user.insertId;
            cargarDatos(data.user.insertId)
        })
        
    }).catch((err)=>{
        console.log(err);
    })
});


function cargarDatos(id) {
    let url = 'http://localhost:3050/usuarios/busqueda';
    console.log(id);
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        mode: 'cors',
        headers: {
           'Content-Type': 'application/json',
        },body:JSON.stringify({
           id: id
        })
    }).then((respuesta) => {
        
        respuesta.json().then(data => {
                console.log(data);   
                data = data.user[0];
                nombre.value = data.NOMBRE;
                username.value = data.USERNAME;
                apellidoP.value = data.APELLIDO_PATERNO;
                apellidoM.value = data.APELLIDO_MATERNO;
                correo.value = data.CORREO;
            })
        })
}

let id_URL = window.location.href.split('=');
if(id_URL[0].indexOf("buscarUsuario.html") >= 0 && id_URL[1] != undefined)
    cargarDatos(id_URL[1]);

    let edad = document.getElementById('inputEdad');
    let genero = document.getElementById("inputGenero");
    let pais = document.getElementById("inputPais");
    let ciudad = document.getElementById("inputCiudad");
    let estudios = document.getElementById("estudios");
    let linkdln = document.getElementById("inputLinkedln");
    let hobbies = document.getElementById("descriptionHobbies");
    formulario.removeAttribute("submit");
    formulario.addEventListener("submit", (element) =>{ 
        element.preventDefault();
        let url = 'http://localhost:3050/usuarios/:id';
        fetch(url,{
            method: 'PUT', // *GET, POST, PUT, DELETE, etc
            mode: 'cors',
            headers: {
               'Content-Type': 'application/json',
            },body:JSON.stringify({
                EDAD    :   edad.value,
                CIUDAD  :   ciudad.value
            })
        }
        ).then((respuesta)=>{
            console.log(respuesta);
            respuesta.json().then(data => {
                console.log(data);
                
            })
            
        }).catch((err)=>{
            console.log(err);
        })
    });