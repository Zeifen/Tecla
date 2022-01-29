const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER_DB,
  password : process.env.PASSWORD_DB,
  database : process.env.NAME_DB
});



module.exports = connection;