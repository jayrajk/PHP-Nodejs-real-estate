const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

router.route('/')
// GET /api/users. all the users.
    .get(userController.getAll);

router.route('/profile')
// GET /api/users/profile. all the users.
    .get(userController.getProfile);

router.route('/:id')
// GET /api/users/:userId. all the users.
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.deleteUser);

module.exports = router;