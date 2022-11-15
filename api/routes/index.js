const express = require('express')
const { get } = require('../controllers/index')
const userRoutes = require("./userRoutes")
const transactionRoutes = require("./transactionRoutes")

const router = express.Router()

// example of a route with index controller get function

router.use("/user", userRoutes)
router.use("/transaction", transactionRoutes)
module.exports = router