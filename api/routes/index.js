const express = require('express')
const { get } = require('../controllers/index')
const userRoutes = require("./UserRoutes")

const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use("/user", userRoutes)

module.exports = router