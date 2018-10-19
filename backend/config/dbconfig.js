const mysql = require('mysql');
const Sequelize = require('sequelize');
const debug = require('debug')('node-server:db');

const sequelize = new Sequelize('estate','root','root',{
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

sequelize
    .authenticate()
    .then(() => {
        debug('Connection has been established successfully.');
    })
    .catch((err) => {
        debug('Unable to connect to the database:', err);
    });

module.exports= { sequelize };
