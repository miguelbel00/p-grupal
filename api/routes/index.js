const express = require('express')
const userRoutes = require('./userRoutes')
const categoryRoutes = require('./categoryRoutes')
const userRoutes = require("./UserRoutes")
const productRoutes = require("./productRoutes.js")

const router = express.Router()

//router only on plural
router.use('/categories', categoryRoutes)
router.use('/users',userRoutes)
router.use("/products", productRoutes)

module.exports = router