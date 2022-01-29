const express = require ('express');
const server = express();
//Cors
const cors = require('cors');
server.use(cors({"origin":"*" , "methods" : "GET, POST"}));
//Uso de Variables de entorno (.env)
require('dotenv').config();
//Para requerir dato por urlencoded: 
server.use(express.urlencoded());
//Para requerir dato por JSON Body -> JSON (Middleware):
server.use(express.json());

//Ruta
server.use('/usuarios',require('./endpoints.js'));

server.listen(process.env.PUERTO, () => {
    console.log('Servidor esta iniciado en el puerto 3001')
});

//prueba para solicitar el html
server.post("/",(req,res)=>{
    console.log(req.body)
    res.status(200).json({msg:'Prueba'});
});

//Middleware para manejo de endpoint no existente
server.use((req,res,next)=>{
    res.status(404).json({msg:'Endpoint no encontrado, redirecciona bien, carnal.'});
});

//Middleware para errores de sistema
server.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({msg:'Error del sistema. Tu solicitud no se puede atender en este momento', error:err});
});

