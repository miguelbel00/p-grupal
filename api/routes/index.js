const express = require('express')
const { get, post } = require('../controllers/Products/Products')

const router = express.Router()

// example of a route with index controller get function
//router.get('/', get)
router.get('/products', get)
router.post('/products', post)

module.exports = router