const express = require('express');
const router = express.Router();
const { createProducts } = require('../controllers/Product/productCreate');


router.post('/', createProducts);


module.exports = router; 