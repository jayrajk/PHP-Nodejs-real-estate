const db = require('../models/index');
const property = db.property;
const property_cat = db.property_category;
const property_sub_cat = db.property_sub_category;
const httpStatus = require('http-status');
const APIError = require('../helper/APIError');
const _ = require('lodash');

property_cat.hasMany(property,{foreignKey:'property_cat_id', sourceKey: 'id'});
property_cat.hasMany(property_sub_cat,{foreignKey: 'cat_id', sourceKey: 'id'});

module.exports={
    getById(){
        return property_cat.findOne({
            where: {
                id: req.params.id,
            },
            exclude: ['createdAt', 'updatedAt']
        })
            .then((result) => {
                if (!result) {
                    const err = new APIError('No such category', httpStatus.NOT_FOUND, true);
                    return Promise.reject(err);
                }
                res.status(200).send({data: result});
            })
    },

    getByName(){
        return property_cat.findOne({
            where: {
                title: req.body.name,
            },
            exclude: ['createdAt', 'updatedAt']
        })
            .then((result) => {
                if (!result) {
                    const err = new APIError('No such category', httpStatus.NOT_FOUND, true);
                    return Promise.reject(err);
                }
                res.status(200).send({data: result});
            })
    },

    getAll(){
        return property_cat.findAll({
            exclude: ['createdAt', 'updatedAt']
        })
            .then((result) => {
                if (!result) {
                    const err = new APIError('No such category', httpStatus.NOT_FOUND, true);
                    return Promise.reject(err);
                }
                res.status(200).send({data: result});
            })
    },

    insert(req,res){
        return property_cat.create({
            title: req.body.title
        })
            .then((result) => {
                res.status(200).send('Added Successfully');
            })
            .catch(()=>{
                const err = new APIError('No such category', httpStatus.NOT_FOUND, true);
                return Promise.reject(err);
            })
    },

    update(req,res){
        return property_cat.update({
            title: req.body.title
        },{
            where:{
                id: req.params.id
            }
        })
            .then((result) => {
                res.status(200).send('Updated Successfully');
            })
            .catch(()=>{
                const err = new APIError('No such category', httpStatus.NOT_FOUND, true);
                return Promise.reject(err);
            })
    },

    deleteCategory(req,res){
        return property_cat.delete({
            where:{
                id: req.params.id
            }
        })
            .then((result) => {
                res.status(200).send('Deleted Successfully');
            })
            .catch(()=>{
                const err = new APIError('No such category', httpStatus.NOT_FOUND, true);
                return Promise.reject(err);
            })
    }
}