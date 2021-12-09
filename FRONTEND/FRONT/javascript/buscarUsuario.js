let edad = document.getElementById('inputEdad');
let genero = document.getElementById("inputGenero");
let pais = document.getElementById("inputPais");
let ciudad = document.getElementById("inputCiudad");
let estudios = document.getElementById("estudios");
let linkdln = document.getElementById("inputLinkedln");
let hobbies = document.getElementById("descriptionHobbies");
let formulario = document.getElementById('form');
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