const express = require('express');
const propertyCategoryController = require('../controller/property_category.controller');

const router = express.Router();

router.route('/')
// GET /api/property. all the property category
    .get(propertyCategoryController.getAll);

router.route('/insert')
// POST /api/property/insert To post the property
    .post(propertyController.insert);

router.route('/search')
// POST /api/property/search To search the property
    .post(propertyCategoryController.getByName);

router.route('/:id')
    .get(propertyCategoryController.getById)
    .put(propertyCategoryController.update)
    .delete(propertyCategoryController.deleteCategory);

module.exports = router;