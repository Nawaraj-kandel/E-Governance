const express = require('express');
const { createComplaint, getComplaint } = require('../controllers/complaintController');
const complaintRouter = express.Router();

complaintRouter.route('/create').post(createComplaint);
complaintRouter.route('/').get(getComplaint);


module.exports = complaintRouter;