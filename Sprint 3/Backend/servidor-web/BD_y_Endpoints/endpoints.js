const express = require ('express');
const ruta = express.Router();
//Conexión con la base de datos:
const conexion = require('./db/conexion.js');
const jwt = require('jsonwebtoken');

//Middleware
function validarToken(req,res,next){
    try {
        let token =  jwt.verify(req.headers.authorization.split(" ")[1],process.env.SECRETO);;
        console.log(token);
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({msg:"Error del sistema, intenta mas tarde"});
    }
    
}

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

//Completar Datos
ruta.post('/completarDatosUs',validarToken, (req,res) => {
    let {edad, genero, pais, ciudad, perfil_link,idioma,hobbies,userLog} = req.body;
    let sql = `UPDATE usuarios SET edad='${edad}',
    genero='${genero}',
    pais='${pais}',
    cuidad='${ciudad}',
    perfil_link='${perfil_link}',
    hobbies='${hobbies}',
    idioma='${idioma}'
     WHERE usuario = '${userLog}';`;
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
    let sql = `INSERT INTO usuarios(usuario,contrasena,correo,nombre,apellidos) VALUES ('${usuario}','${contrasena}','${correo}','${nombre}','${apellidos}');`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log(results);
        res.status(200).json({
            msg:'Usuario encontrado.',
            user:results
        });
      });
});

//Mostrar todos los amigos para enviar solicitud
ruta.post('/amigos', validarToken ,(req,res) =>{
    console.log(req.body);
    let {id} = req.body;
    let sql= `SELECT * FROM usuarios WHERE id != ${id}`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log("Amistades",results);
        res.status(200).json({
            msg:'Listado de amistades',
            user:results
        });
      });
});

//Mostrar todos los datos en Perfil
ruta.post('/perfil', validarToken ,(req,res) =>{
    let {id} = req.body;
    let sql= `SELECT * FROM usuarios WHERE id = ${id}; `;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        let usuario = {
            id:results[0].id,  
            correo:results[0].correo,  
            usuario: results[0].usuario,
            nombre:results[0].nombre,
            apellido:results[0].apellidos,
            pais:results[0].pais,
            perfil:results[0].perfil_link,
            hobbies:results[0].hobbies,
            genero:results[0].genero,
            edad:results[0].edad,
            idioma:results[0].idioma,
            genero:results[0].genero
            }
        res.status(200).json({
            msg:'Usuario Completo',
            user:usuario
        });
      });
});

//Validar si hay solicitud de amistad pendiente
ruta.post('/solicitudes', validarToken ,(req,res) =>{
    console.log(req.body);
    let {id} = req.body;
    let sql= `SELECT usuarios.id, usuarios.nombre, usuarios.apellidos
    FROM usuarios 
    INNER JOIN solicitudes
    ON solicitudes.segundo_usuarioid = usuarios.id
    WHERE solicitudes.primer_usuarioid = ${id}
    AND solicitudes.activo = 1 ;`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log("Amistades",results);
        res.status(200).json({
            msg:'Listado de solicitudes',
            user:results
        });
      });
});

//Aceptar solicitudes pendientes
ruta.post('/pendientes', validarToken ,(req,res) =>{
    console.log(req.body);
    let {id,id_friend} = req.body;
    let sql= `UPDATE solicitudes 
    SET primer_usuarioid=${id},
    segundo_usuarioid=${id_friend},
    activo='0' WHERE primer_usuarioid = ${id};`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log("Amistades",results);
        res.status(200).json({
            msg:'Solicitud pendiente actualizada',
            user:results
        });
      });
});

//Agregar amigo de los mostrados
ruta.post('/enviarSolicitud', validarToken ,(req,res) =>{
    console.log(req.body);
    let {id,id_friend} = req.body;
    let sql= `INSERT INTO solicitudes 
    ( primer_usuarioid, segundo_usuarioid, activo) 
    VALUES ( '${id}', '${id_friend}', 1);`;
    conexion.query(sql, function (error, results, fields) {
        if (error) throw new Error (error);
        console.log("Amistades",results);
        res.status(200).json({
            msg:'Solicitud enviada',
            user:results
        });
      });
});

//Agregar Post a la bd
ruta.post('/post', validarToken ,(req,res) =>{
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
ruta.delete('/eliminarUsuario',validarToken, (req,res) =>{
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
    let sql = `SELECT * FROM usuarios WHERE correo = ('${correo}') AND contrasena =('${contrasena}');`;
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