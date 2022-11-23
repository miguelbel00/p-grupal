const express = require('express')


const reviewsRoutes  = require('./reviewRoutes')
const userRoutes = require('./userRoutes')
const categoryRoutes = require('./categoryRoutes')
const productRoutes = require('./productRoutes')
const authRoutes = require('./authRoutes')
const paypalRoutes = require('./paypalRoutes')


const router = express.Router()

// example of a route with index controller get function

router.use('/categories', categoryRoutes)
router.use('/users',userRoutes)
router.use('/products', productRoutes)
router.use('/reviews', reviewsRoutes)
router.use('/auth',authRoutes)
router.use('/checkout', paypalRoutes)






//router only on plural

module.exports = router