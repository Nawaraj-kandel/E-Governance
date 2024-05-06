const express = require('express');
const { createDriver, checkDriver, getDriver } = require('../controllers/driverController');
const driverRouter = express.Router();

driverRouter.route('/signup').post(createDriver);
driverRouter.route('/login').post(checkDriver);
driverRouter.route('/').get(getDriver);
module.exports = driverRouter;

