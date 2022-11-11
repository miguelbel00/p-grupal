const express = require('express')

const  reviewsRoutes  = require('./reviewRoutes')
const userRoutes = require('./userRoutes')
const categoryRoutes = require('./categoryRoutes')
const productRoutes = require("./productRoutes.js")

const router = express.Router()

//router only on plural
router.use('/categories', categoryRoutes)
router.use('/users',userRoutes)
router.use("/products", productRoutes)
router.use("/reviews", reviewsRoutes)

module.exports = router