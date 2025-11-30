//build a connection to the database 
const mysql = require('mysql2')

const db = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',  
    user            :'root',
    password        : 'password',
    database        : 'christmasdb25'   
})

module.exports = pool