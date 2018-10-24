const db = require('../models/index');
const property = db.property;
const property_cat = db.property_category;
const property_sub_cat = db.property_sub_category;
const httpStatus = require('http-status');
const APIError = require('../helper/APIError');
const _ = require('lodash');

property_cat.hasMany(property,{foreignKey:'property_cat_id', sourceKey: 'id'});
property_cat.belongsTo(property_cat,{foreignKey: 'cat_id', sourceKey: 'id'});

module.exports={
    getById(){
        return property_sub_cat.findOne({
            where: {
                id: req.params.id,
            },
            include:[{
                model:property_cat,
                exclude: ['createdAt', 'updatedAt']
            }],
            exclude: ['createdAt', 'updatedAt']
        })
            .then((result) => {
                if (!result) {
                    return res.status(404).send({error:true,message:'Sub Category not found'});
                }else {
                    return res.status(200).send({error: false, message: 'Sub Category found', data: result});
                }
            })
    },

    getByName(){
        return property_sub_cat.findOne({
            where: {
                title: req.body.name,
            },
            include:[{
                model:property_cat,
                exclude: ['createdAt', 'updatedAt']
            }],
            exclude: ['createdAt', 'updatedAt']
        })
            .then((result) => {
                if (!result) {
                    return res.status(404).send({error:true,message:'Sub Category not found'});
                }else{
                    return res.status(200).send({error:false,message:'Sub Category found',data:result});
                }
            })
    },

    getAll(){
        return property_sub_cat.findAll({
            include:[{
                model:property_cat,
                exclude: ['createdAt', 'updatedAt']
            }],
            exclude: ['createdAt', 'updatedAt']
        })
            .then((result) => {
                if (!result) {
                    return res.status(404).send({error:true,message:'Sub Categories not found'});
                }else{
                    return res.status(200).send({error:false,message:'Sub Categories found'});
                }
            })
    },

    insert(req,res){
        return property_sub_cat.create({
            title: req.body.title,
            cat_id: req.body.cat_id
        })
            .then((result) => {
                return res.status(200).send({error:false,message:'Sub Category added'});
            })
            .catch(()=>{
                const err = new APIError('Error while adding sub category', httpStatus.NOT_FOUND, true);
                return Promise.reject(err);
            })
    },

    update(req,res){
        return property_sub_cat.update({
            title: req.body.title,
            cat_id: req.body.cat_id
        },{
            where:{
                id: req.params.id
            }
        })
            .then((result) => {
                return res.status(200).send({error:false,message:'Sub Category updated successfully'});
            })
            .catch(()=>{
                const err = new APIError('Error while updating sub category ', httpStatus.NOT_FOUND, true);
                return Promise.reject(err);
            })
    },

    deleteSubCat(req,res){
        return property_sub_cat.delete({
            where:{
                id: req.params.id
            }
        })
            .then((result) => {
                return res.status(200).send({error:false,message:'Sub Category deleted successfully'});
            })
            .catch(()=>{
                const err = new APIError('No such sub category', httpStatus.NOT_FOUND, true);
                return Promise.reject(err);
            })
    }
}