const db = require('../models/index');
const user = db.user;
const httpStatus = require('http-status');
const APIError = require('../helper/APIError');
const _ = require('lodash');

user.hasMany(property);

module.exports = {
    getByEmail(email) {
        return user.findOne({
            where: {
                email : email
            },
        });
    },

    getAll() {
        return user.findAll({
            where: {
                account_type: 0
            },
        })
        .then(users => res.send(users))
        .catch(e => next(e));
    },

    getById(req, res, next) {
        return user.findOne({
            where: {
                id: req.params.id,
                account_type: 0
            }
        })
            .then((uniqueUser) => {
                if (!uniqueUser) {
                    const err = new APIError('No such user exists!', httpStatus.NOT_FOUND, true);
                    return Promise.reject(err);
                }
                return res.send(uniqueUser);
            })
    },

    getProfile(req, res, next) {

        return user.findOne({
            where: {
                id: id,
                account_type: 0
            }
        })
            .then((uniqueUser) => {
                if (uniqueUser) {
                    return res.json(uniqueUser);
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
                occupation: erq.body.occupation
            },
            {
                where: {
                    id: req.params.id
                }
            })
            .then((result) => {
                res.json('Updated Successfully');
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
                res.send('User Deleted Successfully');
            })
            .catch(() => {
                return Promise.reject(new APIError('User not found', httpStatus.NOT_FOUND, true));
            })
    },

    register(udata) {
        return user.create({
            account_type: 0,
            name: udata.name,
            phone: udata.phone,
            email: udata.email,
            password: udata.password,
        })
            .then((savedUser) => {
                return savedUser;
            })
            .catch((error) => {
                return Promise.reject(new APIError('Something wrong in Registration', httpStatus.BAD_REQUEST, true));
            })
    }
};