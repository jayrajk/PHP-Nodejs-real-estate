const express = require('express');
const propertyController = require('../controller/property.controller');

const router = express.Router();

router.route('/')
// GET /api/properties. all the properties
    .get(propertyController.getAll);

router.route('/insert')
// POST /api/property/insert To post the property
    .post(propertyController.insert);

router.route('/search')
// POST /api/property/search To search the property
    .post(propertyController.getByNameCity);

router.route('/:id')
    .get(propertyController.getById)
    .put(propertyController.update)
    .delete(propertyController.delete);