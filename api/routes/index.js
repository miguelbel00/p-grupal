const express = require('express')
const productRoutes = require("./productRoutes.js")
const router = express.Router()


router.use("/products", productRoutes)

module.exports = router