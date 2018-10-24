const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var cors = require('cors');
var http = require('http');
const routes = require('./routes/routes');
var server = http.createServer(app);
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    pas = 'd6F3Efeq';
var config = require('./config/dbconfig');
app.use(bodyParser.json());
app.use(bodyParser());
app.use(cors());

app.use('/api', routes);

server.listen(4000,()=>{
    console.log('Server started on Port 4000');
});
