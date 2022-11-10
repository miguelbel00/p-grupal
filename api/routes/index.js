const express = require('express')
const productRoutes  = require('./productRoutes')
const router = express.Router();


router.use('/products', productRoutes)


module.exports = router