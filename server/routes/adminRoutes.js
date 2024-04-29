const express = require('express');
const { createAdmin, checkAdmin } = require('../controllers/adminController');
const adminRouter = express.Router();

adminRouter.route('/signup').post(createAdmin);
adminRouter.route('/login').post(checkAdmin);

module.exports = adminRouter;

