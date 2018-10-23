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
                email : email
            },
        })
            .then(user => {
                if(user){
                    return res.status(404).send('Already exists');
                }else{
                    return res.status(200).send('Not exists');
                }
            })
    },

    getAll() {
        return user.findAll({
            where: {
                account_type: 0
            },
        })
        .then(users => res.status(200).send({data: users}))
        .catch(e => next(e));
    },

    getById(req, res) {
        return user.findOne({
            where: {
                id: req.params.id,
                account_type: 0
            }
        })
            .then((result) => {
                if (!result) {
                    const err = new APIError('No such user exists!', httpStatus.NOT_FOUND, true);
                    return Promise.reject(err);
                }
                res.status(200).send({data: result});
            })
    },

    getProfile(req, res) {
        const id = req.body.sessionid;
        return user.findOne({
            where: {
                id: id,
                account_type: 0
            }
        })
            .then((result) => {
                if (result) {
                    res.status(200).send({data: result});
                }
                const err = new APIError('No such user exists!', httpStatus.NOT_FOUND, true);
                return Promise.reject(err);
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
               return res.status(200).send({Status: 'Updated Successfully'});
            })
            .catch(() => {
                return Promise.reject(new APIError('User not found', httpStatus.NOT_FOUND, true));
            })
    },

    deleteUser(req, res, next) {
        return user.delete( {
            where: {
                id: req.params.id,
                account_type: 0
            }
        })
            .then((result) => {
                return res.status(200).send('User Deleted Successfully');
            })
            .catch(() => {
                return Promise.reject(new APIError('User not found', httpStatus.NOT_FOUND, true));
            })
    },

    login(req,res,next){
      return user.findOne({
          where:{
              email:req.body.email,
              password: req.body.password
          }
      })
          .then((userData)=>{
                return res.status(200).send('Login Successfully')
          })
          .catch((err)=>{
              return res.status(404).send('Invalid Email or Password')
          })
    },

    register(req,res,next) {
        return user.create({
            account_type: 0,
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
        })
            .then((savedUser) => {
                return res.status(200).send('Register Successfully');
            })
            .catch((error) => {
                return Promise.reject(new APIError('Something wrong in Registration', httpStatus.BAD_REQUEST, true));
            })
    }
};