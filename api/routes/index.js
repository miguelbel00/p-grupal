const express = require('express')
const categoryRoutes = require('./categoryRoutes')
const userRoutes = require("./UserRoutes")
const productRoutes = require("./productRoutes.js")
const router = express.Router()


router.use('/category', categoryRoutes)
router.use("/user", userRoutes)
router.use("/products", productRoutes)

module.exports = router