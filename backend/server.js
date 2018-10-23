const mysql = require('mysql');
var Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var cors = require('cors');
var http = require('http');
var server = http.createServer(app);
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    pas = 'd6F3Efeq';
var config = require('./config/dbconfig');
app.use(bodyParser.json());
app.use(bodyParser());
app.use(cors());

server.listen(4000,()=>{
    console.log('Port 4000');
});
