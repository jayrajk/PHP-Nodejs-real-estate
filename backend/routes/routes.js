const express = require('express');
const userRoutes = require('../routes/user.routes');
const propertyRoutes = require('../routes/property.routes');
// All the routes are defined here.

const router = express.Router();

// Load User Routes
router.use('/users', userRoutes);

// Load property Routes
router.use('/property', propertyRoutes);

module.exports = router;
