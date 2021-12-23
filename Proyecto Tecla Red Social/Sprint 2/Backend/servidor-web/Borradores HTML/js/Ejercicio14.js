const url = 'https://randomuser.me/api/?username=';
let resultado;

function obtenerUsuario (username){
    let urlTotal = url + username;
    fetch(urlTotal)
        .then(respuesta => respuesta.json())
        .then(json => {
            console.log(json)
            resultado = json
        })
        .catch (error => {
            console.log("Invalido")
        })
}

function nombre (funcionCall){
    setTimeout(funcionCall, 500);
}

let usuario = prompt("Dame el alias de tu usuario:");
obtenerUsuario(usuario);
console.log(resultado);
const myCallback = () => console.log(resultado.results[0].name.title,resultado.results[0].name.first, resultado.results[0].name.last );
nombre(myCallback);

