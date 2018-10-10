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

app.use(bodyParser.json());
app.use(bodyParser());
app.use(cors());

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    database: "estate",
    port: 3306
});

con.connect(function(err) {
    if(err){
        console.log(err);
    }else{
        console.log("Connected!");
    }

    /*var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });*/
});

function mysqlPromise(sql) {
    debugger
    return new Promise(function (resolve, reject) {
        con.query(sql, (err, res) => {
            if (!err) {
                return resolve(res);
            }
            reject(err);
        })
    });
}

function encrypt(text){
    var cipher = crypto.createCipher(algorithm,pas)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text){
    var decipher = crypto.createDecipher(algorithm,pas)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}

//Register
app.post('/register',(req,res)=>{
    if(req.body.password===undefined || req.body.name===undefined){
        return res.status(200).send({error:true,message:'Details are undefined'})
    }else{

        mysqlPromise("SELECT id FROM User WHERE email = '"+req.body.email+"'").then(data=>{
            if(data[0]===undefined){
                var password="",name="",email="",phone="";
                name=req.body.name===undefined?"":req.body.name;
                email=req.body.email===undefined?"":req.body.email;
                password=req.body.password;
                phone=req.body.phone===undefined?"":req.body.phone;
                let sql="INSERT INTO `User`(`id`,`name`, `email`, `password`, `phone`) VALUES (uuid(),'"+name+"','"+email+"','"+encrypt(password)+"','"+phone+"')";
                console.log("Register User : "+sql);
                mysqlPromise(sql).then(()=>{
                    return res.status(201).send({error:false,message:'Register Successfully'})
                }).catch(err=>{
                    console.log("error : "+err)
                    return res.status(200).send({error:true,message:err})
                })
            }else{
                return res.status(200).send({error:true,message:"User alredy exist"})
            }
        }).catch(err=>{
            console.log("error : "+err)
            return res.status(200).send({error:true,message:err})
        })

    }
});

//Register
app.post('/login',(req,res)=>{

    var lpassword = req.body.lpassword,lemail=req.body.lemail;
    let sql="Select email,password from User where email='"+lemail+"' and password='"+encrypt(lpassword)+"'";
    debugger
    mysqlPromise(sql).then(data=>{
        if(data[0].email===lemail && data[0].password===encrypt(lpassword)){
            return res.status(200).send({error:false,message:'Login successfully'});
        }else{
            return res.status(200).send({error:true,message:'Invalid email or password'});
        }
    }).catch(err=>{
        console.log("error : "+err)
        return res.status(200).send({error:true,message:'Invalid Email or Password'})
    })
});

app.post('/sell-rent',(req,res)=> {
    var cat_id=req.body.cat_id;
    let sql = "SELECT * from Property_sub_category where cat_id='"+cat_id+"'";
    mysqlPromise(sql).then(data=>{
        if(data[0].cat_id===cat_id){
            return res.status(200).send({error:false,message:'Data match',data:data});
        }else{
            return res.status(200).send({error:true,message:'Data not match',data:data});
        }
    }).catch(err=>{
        console.log("error : "+err);
        return res.status(200).send({error:true,message:'Something went wrong'});
    })
});

server.listen(4000,()=>{
    console.log('Port 4000');
});
