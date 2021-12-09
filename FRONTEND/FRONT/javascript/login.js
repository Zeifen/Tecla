let formulario = document.getElementById('formLogin');
let username = document.getElementById('username_id');
let password = document.getElementById('password_id');

formulario.addEventListener("submit", (element) => {
    element.preventDefault();
    let url = 'http://localhost:3050/usuarios/login';
    fetch(url,{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },body:JSON.stringify({
            USERNAME : username.value,
            PASSWORD: password.value
        })
    }).then((respuesta) => {
        console.log(respuesta);
        respuesta.json().then(data => {
            console.log(data.user[0].PASSWORD);
            console.log(username.value);
            if ((username.value === data.user[0].USERNAME) && (password.value === data.user[0].PASSWORD)){
                console.log('Usuario encontrado');
                location.href = "http://127.0.0.1:5501/buscarUsuario.html?="+data.user.insertId;
                cargarDatos(data.user.insertId)
            }else{
                console.log('Usuario no existe');
            }
        })
    }).catch((err) => {
        console.log(err);
    })
});

let id_URL = window.location.href.split('=');
if(id_URL[0].indexOf("DatosPersonales.html") >= 0 && id_URL[1] != undefined)
    cargarDatos(id_URL[1]);

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
                var arrayUs = [nombre.value,username.value,apellidoP.value,apellidoM.value,correo.value]
                localStorage.setItem("arrayUs", JSON.stringify(arrayUs));
                location.href = "http://127.0.0.1:5501/buscarUsuario.html?id="+data.user.insertId;
                
            })
        })
}