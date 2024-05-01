const express = require('express');
const { createBin } = require('../controllers/binContoller');
const binRouter = express.Router();

binRouter.route('/create').post(createBin);

module.exports = binRouter;