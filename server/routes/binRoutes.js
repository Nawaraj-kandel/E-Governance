const express = require('express');
const { createBin, getBin, getSpecificBin, updateBin, deleteBin } = require('../controllers/binContoller');
const binRouter = express.Router();

binRouter.route('/create').post(createBin);
binRouter.route('/').get(getBin);
binRouter.route('/:id').get(getSpecificBin);
binRouter.route('/update/:id').patch(updateBin)
binRouter.route('/delete/:id').delete(deleteBin);

module.exports = binRouter;