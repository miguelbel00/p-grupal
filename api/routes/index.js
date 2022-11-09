const express = require('express')
const { postProducts } = require('../controllers/products/postProducts')
const router = express.Router()

// example of a route with index controller get function
//router.get('/', get)
router.post('/products', postProducts)


module.exports = router