const db = require('../models/index');
const user = db.user;
const property = db.property;
const httpStatus = require('http-status');
const APIError = require('../helper/APIError');
const _ = require('lodash');

user.hasMany(property,{foreignKey: 'user_id', sourceKey: 'id'});

module.exports = {
    getByEmail(req,res) {
        return user.findOne({
            where: {
                email : req.body.email
            },
            exclude: ['createdAt', 'updatedAt']
        })
            .then(user => {
                if(user){
                    return res.status(200).send({error:true,message:'User already exists'});
                }else{
                    return res.status(200).send({error:false,message:'Not exists'});
                }
            })
    },

    getAll() {
        return user.findAll({
            where: {
                account_type: 0
            },
            exclude: ['createdAt', 'updatedAt']
        })
        .then(users => {
            return res.status(200).send({error:false,message:'users found',data: users})
        })
        .catch(e => next(e));
    },

    getById(req, res) {
        return user.findOne({
            where: {
                id: req.params.id,
                account_type: 0
            },
            exclude: ['createdAt', 'updatedAt']
        })
            .then((result) => {
                if (!result) {
                   return res.status(404).send({error:true,message:'user not found'});
                }else{
                    return res.status(200).send({error:false,message:'user found',data: result});
                }
            })
    },

    getProfile(req, res) {
        const id = req.body.sessionid;
        return user.findOne({
            where: {
                id: id,
                account_type: 0
            },
            exclude: ['createdAt', 'updatedAt']
        })
            .then((result) => {
                if (result) {
                    return res.status(200).send({error:false,message:'user found',data: result});
                }else{
                    return res.status(404).send({error:true,message:'user not found',data: result});
                }
            })
    },

    update(req, res, next) {
        return user.update({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                household_income: req.body.household_income,
                occupation: req.body.occupation
            },
            {
                where: {
                    id: req.params.id
                }
            })
            .then((result) => {
               return res.status(200).send({error:false,message: 'Updated Successfully'});
            })
            .catch((err) => {
                return res.status(404).send({error:true,message: err});
            })
    },

    deleteUser(req, res, next) {
        return user.destroy( {
            where: {
                id: req.params.id,
                account_type: 0
            }
        })
            .then((result) => {
                return res.status(200).send({error:false,message:'User Deleted Successfully'});
            })
            .catch((err) => {
                return res.status(200).send({error:true,message:err});
            })
    },

    login(req,res,next){
      return user.findOne({
          where:{
              email:req.body.email,
              password: req.body.password
          },
          exclude: ['createdAt', 'updatedAt']
      })
          .then((userData)=>{
              if(userData){
                  return res.status(200).send({error:false,message:'Login Successfully',data:{id:userData.id,email:userData.email,name:userData.name}})
              }else{
                  return res.status(200).send({error:true,message:'Invalid emailid or password'})
              }
          })
    },

    register(req,res,next) {
        return user.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        })
            .then((savedUser) => {
                return res.status(200).send({error:false,message:'Register Successfully',data:{id:savedUser.id,email:savedUser.email,name:savedUser.name}})
            })
            .catch((error) => {
                return res.status(200).send({error:true,message:'Error while registering'});
            })
    }
};