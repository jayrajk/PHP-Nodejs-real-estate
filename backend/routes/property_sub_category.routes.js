const express = require('express');
const propertySubCategoryController = require('../controller/property_sub_category.controller');

const router = express.Router();

router.route('/')
// GET /api/subcategory. all the property category
    .get(propertySubCategoryController.getAll);

router.route('/insert')
// POST /api/subcategory/insert To post the property
    .post(propertySubCategoryController.insert);

router.route('/search')
// POST /api/propertysubcat/search To search the propertysubcategory
    .post(propertySubCategoryController.getByName);

router.route('/:id')
    .get(propertySubCategoryController.getById)
    .put(propertySubCategoryController.update)
    .delete(propertySubCategoryController.deleteSubCat);

module.exports = router;