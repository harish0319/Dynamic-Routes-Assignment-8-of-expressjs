const Sequelize = require('sequelize');

const sequelize = new Sequelize('pinky', 'root', 'P&h@1927', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;