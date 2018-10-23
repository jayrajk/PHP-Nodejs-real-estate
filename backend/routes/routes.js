const express = require('express');
const userRoutes = require('../routes/user.routes');
const propertyRoutes = require('../routes/property.routes');
const propertyCategory = require('../routes/property_category.routes');
const propertySubCat = require('../routes/property_sub_category.routes');
// All the routes are defined here.

const router = express.Router();

// Load User Routes
router.use('/users', userRoutes);

// Load property Routes
router.use('/property', propertyRoutes);

router.use('/category', propertyCategory);

router.use('/subcategory', propertySubCat);

module.exports = router;
