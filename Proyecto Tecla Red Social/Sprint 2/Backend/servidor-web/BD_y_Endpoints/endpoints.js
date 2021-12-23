const express = require ('express');
const ruta = express.Router();
//Conexión con la base de datos:
const conexion = require('./db/conexion.js');

//Mostrar todos los usuarios
ruta.get('/todos', (req,res) => {
    let sql = 'SELECT * FROM usuarios;';
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log('The solution is: ', results);
        res.status(200).json({
            msg:'Lista de Us: ',
            user:results
        });
      });
});

//Si los campos están vacíos de ID (middleware)
function validacionId(req,res,next){
    if (req.body.id === "" || req.body.id === undefined){
        res.status(401).json('Hay al menos un campo vacío.');
    }else 
    next();
}

//Si los campos están vacíos de nombre y apellidos (middleware)
function validacionUs(req,res,next){
    if ((req.body.nombre === "" || req.body.nombre === undefined) || (req.body.apellido_p === "" || req.body.apellido_p === undefined) || (req.body.apellido_m === "" || req.body.apellido_m === undefined)){
        res.status(401).json('Hay al menos un campo vacío.');
    }else
    next();
}

//Busqueda por Id
ruta.get('/busqueda',validacionId, (req,res) => {
    let {id} = req.body;
    let sql = `SELECT * FROM usuarios WHERE id = '${id}';`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results);
        res.status(200).json({
            msg:'Usuario seleccionado: ',
            user:results
        });
      });
});

//Agregar usuario a la bd
ruta.post('/agregarUsuario',validacionUs, (req,res) =>{
    console.log(req.body);
    let {nombre,apellido_p,apellido_m} = req.body;
    let sql = `INSERT INTO usuarios(nombre,apellido_p,apellido_m) VALUES ('${nombre}','${apellido_p}','${apellido_m}');`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results);
        res.status(200).json({
            msg:'Usuario agregado.',
            user:results
        });
      });
});

//Borrar usuario por ID
ruta.delete('/eliminarUsuario', (req,res) =>{
    let sql = `DELETE FROM usuarios WHERE id = '${req.body.id}';`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results);
        res.status(200).json({
            msg:'Usuario eliminado.',
            user:results
        });
      });
});

//Login
ruta.post('/login', (req,res) =>{
    console.log(req.body);
    let {usuario,contrasena} = req.body;
    let sql = `SELECT * FROM login WHERE usuario = ('${usuario}') AND contrasena =('${contrasena}');`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results);
        res.status(200).json({
            msg:'Inicio exitoso.',
            user:results
        });
      });
});


module.exports = ruta;
