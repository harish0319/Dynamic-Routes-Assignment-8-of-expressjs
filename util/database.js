const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sys',
    password: 'P&h@1927'
});

module.exports = pool.promise();