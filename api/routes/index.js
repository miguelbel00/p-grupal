const express = require('express')
const { get } = require('../controllers/index')
const userRoutes = require("./UserRoutes")
const transactionRoutes = require("./TransactionRoutes")
const categoryRoutes = require('./categoryRoutes')
const productRoutes = require("./productRoutes.js")



const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use("/transactions", transactionRoutes)
router.use('/categories', categoryRoutes)
router.use('/users',userRoutes)
router.use("/products", productRoutes)
router.use("/reviews", reviewsRoutes)

const  reviewsRoutes  = require('./reviewRoutes')



//router only on plural

module.exports = router