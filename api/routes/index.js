const express = require('express')
const reviewsRoutes  = require('./reviewRoutes')
const userRoutes = require('./userRoutes')
const categoryRoutes = require('./categoryRoutes')
const productRoutes = require('./productRoutes')
const authRoutes = require('./authRoutes')
const paypalRoutes = require('./paypalRoutes')

const transactionRoutes = require('./transactionRoutes')
const emailRoutes = require('./emailRoutes')
const router = express.Router()

router.use('/categories', categoryRoutes)
router.use('/users',userRoutes)
router.use('/products', productRoutes)
router.use('/reviews', reviewsRoutes)
router.use('/auth',authRoutes)
router.use('/checkout', paypalRoutes)
router.use("/transactions", transactionRoutes)
router.use('/email', emailRoutes)





//router only on plural


module.exports = router