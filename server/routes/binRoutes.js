const express = require('express');
const { createBin, getBin, getSpecificBin, updateBin } = require('../controllers/binContoller');
const binRouter = express.Router();

binRouter.route('/create').post(createBin);
binRouter.route('/').get(getBin);
binRouter.route('/:id').get(getSpecificBin);
binRouter.route('/update/:id').patch(updateBin)

module.exports = binRouter;