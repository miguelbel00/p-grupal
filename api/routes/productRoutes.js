const express = require('express');
const router = express.Router();
const { createProducts } = require('../controllers/products/productCreate')

router.post('/', createProducts)


module.exports = router;