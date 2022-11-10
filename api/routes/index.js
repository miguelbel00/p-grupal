const express = require('express')
const { get } = require('../controllers/index')
const userRoutes = require("./UserRoutes")
const transactionRoutes = require("./TransactionRoutes")


const router = express.Router()

// example of a route with index controller get function
router.get('/', get)
router.use("/user", userRoutes)
router.use("/transaction", transactionRoutes)

module.exports = router