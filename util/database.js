const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'pinky',
    password: 'P&h@1927'
});

module.exports = pool.promise();