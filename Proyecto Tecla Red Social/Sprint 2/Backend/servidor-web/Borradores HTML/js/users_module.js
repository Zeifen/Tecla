class Usuario{
    cursosTotales = ["Matematicas", "Historia", "Economia"];

    total(){
       this.cursosTotales.forEach(curso => console.log(curso));
     //  return "Termine";
    }
}

module.exports = Usuario;
















 //cursosTotales = ["Matematicas", "Historia", "Economia"];

/*
let cursosTotales = [];
let numero = 1;
let cursos = parseInt(prompt("¿Cuantos cursos has terminado?"));
while( isNaN(cursos) ){
    cursos = parseInt(prompt ("El valor introducido es una letra, dame nuevamente tu valor"));
}
for(let i = 0; i < cursos; i++){
cursosTotales[i] = prompt("¿Cual es el nombre de tu curso numero " + numero+ "?");
numero++;
}

cursosTotales.forEach(curso => console.log("<br>" +curso));

module.exports = Usuario;

class Usuario{
constructor(nombrecurso){
    this._nombrecurso = nombrecurso;
   
}

get(){
    return this._nombrecurso;
}

set(nuevocurso){
this._nombrecurso = nuevocurso;
}

total(){
        cursosTotales.forEach(curso => console.log("<br>" +curso));
    }
}


module.exports = Usuario;

*/

