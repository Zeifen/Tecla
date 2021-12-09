const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(express.urlencoded());
app.use(express.json());
const server = express.Router();

const { Config } = require('./scr/config/index');

app.use(cors({
    "origin": "*",
    "methods": "GET, DELETE, PUT, POST"
}));

app.listen(Config.port, ()=> console.log(`Server running on port ${Config.port}`));

//Prueba para solicitar el html
app.get("/",(req,res)=>{
    console.log(req.body)
    res.status(200).json({msg:'Prueba'});
});

const ruta = require('./scr/users/index');

app.use('/usuarios', (ruta));

app.use('/usuarios', (ruta));

app.use('/todos',(ruta));

app.use('/agregarUsuario',(ruta));

app.use('/actualizarUsuario', (ruta));

app.use('/busqueda', (ruta));

app.use('/login', (ruta));


//Middleware para manejo de endpoint no existente
server.use((req,res,next)=>{
    res.status(404).json({msg:'Tu solicitud no se puede atender en este momento'});
});

//Middleware para errores de sistema
server.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({msg:'Error del sistema. Tu solicitud no se puede atender en este momento', error:err});
});

