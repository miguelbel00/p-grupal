const express = require('express')
const { deleteProduct } = require('../controllers/Product/deleteProduct.js');
const { getAllProduct } = require('../controllers/Product/getAllProduct')

const router = express.Router()

router.delete('/:productId', deleteProduct)
router.get('/', getAllProduct)


module.exports = router