const express = require ('express');
const ruta = express.Router();
//Conexión con la base de datos:
const conexion = require('./db/conexion.js');
const jwt = require('jsonwebtoken');


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
    let sql = `SELECT * FROM login WHERE id = '${id}';`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results);
        res.status(200).json({
            msg:'Usuario seleccionado: ',
            user:results
        });
      });
});

//Completar Datos
ruta.post('/completarDatosUs', (req,res) => {
    let {edad, genero, pais, ciudad, perfil_link,hobbies,userLog} = req.body;
    let sql = `UPDATE login SET edad='${edad}',
    genero='${genero}',
    pais='${pais}',
    cuidad='${ciudad}',
    perfil_link='${perfil_link}',
    hobbies='${hobbies}' WHERE usuario = '${userLog}';`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results);
        res.status(200).json({
            msg:'Datos Insertados.',
            user:results
        });
      });
});

//Agregar usuario a la bd
ruta.post('/agregarUsuario', (req,res) =>{
    console.log(req.body);
    let {usuario,contrasena,correo,nombre,apellidos} = req.body;
    let sql = `INSERT INTO login(usuario,contrasena,correo,nombre,apellidos) VALUES ('${usuario}','${contrasena}','${correo}','${nombre}','${apellidos}');`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results);
        res.status(200).json({
            msg:'Usuario encontrado.',
            user:results
        });
      });
});

//Agregar Post a la bd
ruta.post('/post', (req,res) =>{
    console.log(req.body);
    let {post_nuevo} = req.body;
    let sql = `INSERT INTO posts(post_nuevo) VALUES ('${post_nuevo}');`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results);
        res.status(200).json({
            msg:'Post Agregado.',
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
    let {correo,contrasena} = req.body;
    let sql = `SELECT * FROM login WHERE correo = ('${correo}') AND contrasena =('${contrasena}');`;
    console.log(sql);
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results.length);
        if(results.length > 0 ){
            console.log(results[0].correo);
            let usuario = {
            id:results[0].id,    
            usuario: results[0].usuario,
            nombre:results[0].nombre,
            apellido:results[0].apellidos
            }
            console.log("Usuario Existente.")
                const payload = {Loggin:  true, id:results[0].id, name: results[0].nombre};
                const token = jwt.sign(payload, process.env.SECRETO );
            res.status(201).json({
                msg:'Inicio correcto.',
                token:token,
                user:usuario});
        }else{
            res.status(401).json({msg:"Usuario o contraseña inválidos"});
            console.log("Usuario o contraseña inválidos ");
        }

      });
});


module.exports = ruta;