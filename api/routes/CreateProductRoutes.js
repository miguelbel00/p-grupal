
const express = require('express');
const router = express.Router();
const { createProducts } = require('../controllers/ProductCreateControllers/productCreate')

router.post('/', createProducts)


module.exports = router;