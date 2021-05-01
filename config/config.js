//Mysql package
const mysql = require('mysql2');

//Connection with myqsl db
const pool = mysql.createPool({
    host: "localhost",
    database: "ngrx",
    user: "root",
    password: ""
})

//export pool
module.exports = pool.promise();
