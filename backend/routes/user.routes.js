const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

router.route('/')
// GET /api/users. all the users.
    .get(userController.getAll);

router.route('/login')
// POST /api/users/login To LOGIN into the system.
    .post(userController.login);

router.route('/register')
// POST /api/users/register To Register in the system.
    .post(userController.register);

router.route('/checkuser')
// POST /api/users/checkuser To checkuser in the system.
    .post(userController.getByEmail);

router.route('/profile')
// GET /api/users/profile. all the users.
    .post(userController.getProfile);

router.route('/:id')
// GET /api/users/:userId. all the users.
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.deleteUser);

module.exports = router;