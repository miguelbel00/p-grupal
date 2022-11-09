const express = require('express')
const { get } = require('../controllers/products/products')

const router = express.Router()

// example of a route with index controller get function
//router.get('/', get)
router.get('/products', get)

module.exports = router