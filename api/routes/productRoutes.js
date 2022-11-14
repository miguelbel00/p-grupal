const express = require('express');
const router = express.Router();
const { createProducts } = require('../controllers/Product/productCreate');
const { deleteProduct } = require('../controllers/Product/deleteProduct.js');
const { getAllProduct } = require('../controllers/Product/getAllProduct')
const { getOneProduct } = require("../controllers/Product/getOneProduct")

router.post('/', createProducts);
router.delete('/:productId', deleteProduct)
router.get('/', getAllProduct),
router.get("/:productId", getOneProduct)

module.exports = router; 