const express = require('express');
const server = express.Router();
const hash = require('object-hash');
const {connection, errorMySQL} = require('../database/index'); 

//Si los campos están vacíos de ID (middleware)
function validacionId(req,res,next){
    if (req.body.id === "" || req.body.id === undefined){
        res.status(401).json('Hay al menos un campo vacío.');
    }else 
    next();
}
//Si los campos están vacíos de nombre y apellidos (middleware)
function validacionUs(req,res,next){
    if ((req.body.nombre === "" || req.body.nombre === undefined) || (req.body.apellido_paterno === "" || req.body.apellido_paterno === undefined) || (req.body.apellido_materno === "" || req.body.apellido_materno === undefined)|| (req.body.username === "" || req.body.username === undefined)|| (req.body.correo === "" || req.body.correo === undefined)|| (req.body.password === "" || req.body.password === undefined)){
        res.status(401).send('Hay al menos un campo vacío.');
    }else
    next();
}

//Mostrar todos los usuarios
server.get('/todos', (req,res) => {
    let sql = 'SELECT * FROM REGISTRO LEFT JOIN USUARIO ON REGISTRO.ID_REGISTRO = USUARIO.ID_REGISTRO;';
//  let resultado=results;
    connection.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log('The solution is: ', results);
       // resultado=results;
        res.status(200).json({
            msg:'Lista de Us: ',
            user:results
        });
      });
});

//Endpoint para login page
server.post('/login', (req, res) => {
    let {USERNAME, PASSWORD} = req.body;
    let sql = `SELECT * FROM REGISTRO WHERE USERNAME = '${USERNAME}' && PASSWORD = '${PASSWORD}';`;
    connection.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results);
        console.log('endpoint');
        res.status(404).json({
            msg: 'Usuario no encontrado',   
            user: results
        });
    });
});

//Busqueda por ID 
server.post('/busqueda',validacionId, (req,res) => {
    let {id} = req.body;
    let sql = `SELECT * FROM REGISTRO WHERE ID_REGISTRO = ${id};`;
    connection.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results);
        res.status(200).json({
            msg:'Usuario seleccionado: ',
            user:results
        });
      });
});

//Actualizar por ID
server.put('/:id', (req, res) => {
    let {CIUDAD, EDAD} = req.body;
    let id_us = req.params.id;
    let sql = `INSERT INTO USUARIO (CIUDAD, EDAD, ID_REGISTRO) VALUES ('${CIUDAD}', ${EDAD},${id_us});`;
    connection.query(sql, function (error, results, fields) {
        if(error) throw new Error (error);
        console.log(results);
        res.status(200).json({
            msg: 'Usuario actualizado',
            user:results
        });
    });
});

//Agregar usuario a la bd
server.post('/agregarUsuario', validacionUs, (req,res) =>{
    console.log(req.body);
    let {NOMBRE,USERNAME,APELLIDO_PATERNO, APELLIDO_MATERNO, CORREO, PASSWORD} = req.body;
    let sql = `INSERT INTO REGISTRO (NOMBRE, USERNAME, APELLIDO_PATERNO, APELLIDO_MATERNO, CORREO, PASSWORD) VALUES ('${NOMBRE}','${USERNAME}','${APELLIDO_MATERNO}','${APELLIDO_PATERNO}', '${CORREO}', '${PASSWORD}');`;
    connection.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results);
        res.status(200).json({
            msg:'Usuario agregado.',
            user:results
        });
      });
});

module.exports = server;


