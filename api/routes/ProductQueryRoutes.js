const express = require('express')
const { getProductsQuery } = require('../controllers/ProductControllers/productQuery')

const router = express.Router()

router.get('/', getProductsQuery)


module.exports = router