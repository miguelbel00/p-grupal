const express = require('express')
const { deleteProduct } = require('../controllers/Product/deleteProduct.js')

const router = express.Router()

router.delete('/:productId', deleteProduct)

module.exports = router