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
                    return res.status(404).send({error:true,message: 'Category not found'});

                }else{
                    return res.status(200).send({error:false,message:'Category found',data: result});
                }
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
                    return res.status(404).send({error:true,message:'Category Not found'});
                }else {
                    return res.status(200).send({error:false,message:'Category found',data: result});
                }
            })
    },

    getAll(){
        return property_cat.findAll({
            exclude: ['createdAt', 'updatedAt']
        })
            .then((result) => {
                if (!result) {
                    return res.status(404).send({error:true,message:'Categories not found'});
                }else{
                    return res.status(200).send({error:false,message:'Categories found',data: result});
                }
            })
    },

    insert(req,res){
        return property_cat.create({
            title: req.body.title
        })
            .then((result) => {
                return res.status(200).send({error:false,message:'Category added successfully',data: result});
            })
            .catch(()=>{
                const err = new APIError('Error while adding category', httpStatus.NOT_FOUND, true);
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
                return res.status(200).send({error:false,message:'Category updated successfully',data: result});
            })
            .catch(()=>{
                const err = new APIError('No such category found', httpStatus.NOT_FOUND, true);
                return Promise.reject(err);
            })
    },

    deleteCategory(req,res){
        return property_cat.destroy({
            where:{
                id: req.params.id
            }
        })
            .then((result) => {
                return res.status(200).send({error:false,message:'Category deleted successfully'});
            })
            .catch(()=>{
                const err = new APIError('No such category found', httpStatus.NOT_FOUND, true);
                return Promise.reject(err);
            })
    }
}