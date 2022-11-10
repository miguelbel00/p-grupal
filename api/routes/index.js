const express = require('express')
const { get } = require('../controllers/index')
const userRoutes = require("./UserRoutes")
const productsQuery = require('./ProductQueryRoutes')
const router = express.Router()

router.use("/user", userRoutes)
router.use("/products", productsQuery)


module.exports = router