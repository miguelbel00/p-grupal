const express = require('express')
const reviewsRoutes  = require('./reviewRoutes')
const userRoutes = require('./userRoutes')
const categoryRoutes = require('./categoryRoutes')
const productRoutes = require('./productRoutes')
const authRoutes = require('./authRoutes')
const transactionRoutes = require('./transactionRoutes')

const router = express.Router()

router.use('/categories', categoryRoutes)
router.use('/users',userRoutes)
router.use('/products', productRoutes)
router.use('/reviews', reviewsRoutes)
router.use('/auth',authRoutes)
router.use("/transactions", transactionRoutes)

module.exports = router