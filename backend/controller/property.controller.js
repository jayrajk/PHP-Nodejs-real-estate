const db = require('../models/index');
const property = db.property;
const user = db.user;
const property_category = db.property_category;
const property_sub_category = db.property_sub_category;
const property_attributes = db.property_attributes;
const httpStatus = require('http-status');
const APIError = require('../helper/APIError');
const _ = require('lodash');

property.belongsTo(user,{foreignKey:'user_id',sourceKey :'id'});
property.belongsTo(property_category,{foreignKey: 'property_cat_id', sourceKey:'id'});
property.belongsTo(property_sub_category,{foreignKey:'property_sub_cat_id', sourceKey: 'id'});
property.belongsTo(property_attributes,{foreignKey: 'property_attr_id', sourceKey: 'id'});

module.exports = {
    getById(req, res, next) {
        return property.findOne({
            where: {
                id: req.params.id,
            }
        })
            .then((prop) => {
                if (!prop) {
                    const err = new APIError('No such property exists!', httpStatus.NOT_FOUND, true);
                    return Promise.reject(err);
                }
                return res.send(prop);
            })
    },

    getAll() {
        return property.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [{
                model: property_attributes,
                exclude: ['createdAt', 'updatedAt']
            },{
                model: property_category,
                exclude: ['createdAt', 'updatedAt']
            },{
                model: property_sub_category,
                exclude: ['createdAt', 'updatedAt']
            }]
        })
            .then(users => res.status(200).send({data: users}))
            .catch(e => next(e));
    },

    getByNameCity(req,res, next){
        return property.findAll({
            where:{
                $and:[
                    {
                        include: [
                            {
                                model: property_category,
                                exclude: ['createdAt', 'updatedAt'],
                            }
                        ]
                    },
                    {
                        $or:[
                            {
                                project_name: req.body.project_name
                            },
                            {
                                city: req.body.city
                            },
                        ]
                    }
                ]
            },
            exclude: ['createdAt', 'updatedAt']
        })
            .then((prop)=>{
                if(!prop){
                    const err = new APIError('Projects not found', httpStatus.NOT_FOUND, true)
                    return Promise.reject(err);
                }
                return res.send(prop);
            })
    },

    insert(req, res,next){
        return property_attributes.create({
            built_up_area: req.body.built_up_area,
            plot_area: req.body.plot_area,
            area_unit: req.body.area_unit,
            bedrooms: req.body.bedrooms,
            bathrooms:req.body.bathrooms,
            balconies:req.body.balconies,
            other_room: req.body.other_room,
            total_floors: req.body.total_floors,
            reserved_parking: req.body.reserved_parking,
            availability: req.body.availability,
            possession_by: req.body.possession_by,
            ownership: req.body.ownership,
            expected_price: req.body.expected_price,
            brokerage: req.body.brokerage,
            brokerage_type: req.body.brokerage_type,
            amenities: req.body.amenities,
            power_backup: req.body.power_backup,
            water_source: req.body.water_source,
            overlooking: req.body.overlooking,
            facing: req.body.facing,
            width_facing_road: req.body.width_facing_road,
            width_type: req.body.width_type,
            floring_type:req.body.floring_type,
            furnishing_type: req.body.furnishing_type,
            description: req.body.description,
            property_image: req.body.property_image,
        })
            .then((result) => {
                if (result !== null) {
                    return property.update({
                        user_id: req.body.user_id,
                        user_type: req.body.user_type,
                        property_for: req.body.property_for,
                        sale_type: req.body.sale_type,
                        property_cat_id: req.body.property_cat_id,
                        property_sub_cat_id: req.body.property_sub_cat_id,
                        property_attr_id: result.id,
                        city: req.body.city,
                        project_name: req.body.project_name,
                        locality: req.body.locality,
                        property_address: req.body.property_address
                    })
                        .then((prop)=>{
                            if(prop !== null){
                                res.status(200).send({Status: 'Added Successfully'});
                            }
                        })
                        .catch(()=>{
                            return Promise.reject(new APIError('No proper data inserted', httpStatus.NOT_FOUND, true))
                        })
                }
            })
            .catch(() => {
                return Promise.reject(new APIError('No proper data inserted', httpStatus.NOT_FOUND, true))
            })

    },

    update(req, res, next){
        return property_attributes.update({
            built_up_area: req.body.built_up_area,
            plot_area: req.body.plot_area,
            area_unit: req.body.area_unit,
            bedrooms: req.body.bedrooms,
            bathrooms:req.body.bathrooms,
            balconies:req.body.balconies,
            other_room: req.body.other_room,
            total_floors: req.body.total_floors,
            reserved_parking: req.body.reserved_parking,
            availability: req.body.availability,
            possession_by: req.body.possession_by,
            ownership: req.body.ownership,
            expected_price: req.body.expected_price,
            brokerage: req.body.brokerage,
            brokerage_type: req.body.brokerage_type,
            amenities: req.body.amenities,
            power_backup: req.body.power_backup,
            water_source: req.body.water_source,
            overlooking: req.body.overlooking,
            facing: req.body.facing,
            width_facing_road: req.body.width_facing_road,
            width_type: req.body.width_type,
            floring_type:req.body.floring_type,
            furnishing_type: req.body.furnishing_type,
            description: req.body.description,
            property_image: req.body.property_image,
        },{
            where:{
                id: req.params.property_attr_id,
            }
        })
            .then((result) => {
                if (result !== null) {
                    return property.update({
                        user_id: req.body.user_id,
                        user_type: req.body.user_type,
                        property_for: req.body.property_for,
                        sale_type: req.body.sale_type,
                        property_cat_id: req.body.property_cat_id,
                        property_sub_cat_id: req.body.property_sub_cat_id,
                        property_attr_id: result.id,
                        city: req.body.city,
                        project_name: req.body.project_name,
                        locality: req.body.locality,
                        property_address: req.body.property_address
                    },{
                        where:{
                            id: req.params.id,
                            property_attr_id: result.id
                        }
                    })
                        .then((prop)=>{
                            if(prop !== null){
                                res.status(200).send({Status: 'Added Successfully'});
                            }
                        })
                        .catch(()=>{
                            return Promise.reject(new APIError('No proper data inserted', httpStatus.NOT_FOUND, true))
                        })
                }
            })
            .catch(() => {
                return Promise.reject(new APIError('No proper data inserted', httpStatus.NOT_FOUND, true))
            })
    },

    delete(req, res, next){
        return property.delete({
            where:{
                id: req.params.id
            }
        })
            .then((result) => {
                res.send('Property Deleted Successfully');
            })
            .catch(() => {
                return Promise.reject(new APIError('Property not found', httpStatus.NOT_FOUND, true));
            })
    },
}