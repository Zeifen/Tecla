let formulario = document.getElementById("form");
let nombre = document.getElementById("nombre");
let apellidoP = document.getElementById("apellido_m");
let apellidoM = document.getElementById("apellido_p");

formulario.addEventListener("submit", (element) =>{    
    element.preventDefault();
    let url = 'http://localhost:3000/usuarios/agregarUsuario';
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc
        mode: 'cors',
        headers: {
           'Content-Type': 'application/json',
        },body:JSON.stringify({
            nombre:nombre.value,
            apellido_p: apellidoP.value,
            apellido_m: apellidoM.value
        })
    }).then((resp)=>{
        console.log(resp);
    }).catch((err)=>{
        console.log(err);
    })
});
