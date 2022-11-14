const express = require('express')

const reviewsRoutes  = require('./reviewRoutes')
const userRoutes = require('./userRoutes')
const categoryRoutes = require('./categoryRoutes')
const productRoutes = require('./productRoutes')
const authRoutes = require('./authRoutes')

const router = express.Router()

//router only on plural
router.use('/categories', categoryRoutes)
router.use('/users',userRoutes)
router.use('/products', productRoutes)
router.use('/reviews', reviewsRoutes)
router.use('/auth',authRoutes)



module.exports = router