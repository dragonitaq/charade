const express = require('express');

const { categoryController } = require('../Controllers/categoryController');

const router = express.Router();

router.route('/:language').get(categoryController);

module.exports = router;
