const express = require('express');
const { createUser, checkUser } = require('../controllers/userController');
const userRouter = express.Router();

userRouter.route('/signup').post(createUser);
userRouter.route('/login').post(checkUser);

module.exports = userRouter;

