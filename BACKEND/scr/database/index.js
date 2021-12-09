const mysql = require('mysql');

const { Config } = require('../config/index');

const connection = mysql.createConnection({
    host    :   Config.host,
    user    :   Config.user,
    password:   Config.password,
    database:   Config.database
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('Id de conexion  ' + connection.threadId);
  });
function errorMySQL(err,res){
    console.log(err);
    res.status(500).json({
        msg:'Error del sistema, tu solicitud en base de datos no se puede atender en este momento!',
        error:err
    });
}
module.exports = {connection, errorMySQL};