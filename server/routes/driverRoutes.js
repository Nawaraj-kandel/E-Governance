const express = require('express');
const { createDriver, checkDriver } = require('../controllers/driverController');
const driverRouter = express.Router();

driverRouter.route('/signup').post(createDriver);
driverRouter.route('/login').post(checkDriver);

module.exports = driverRouter;

