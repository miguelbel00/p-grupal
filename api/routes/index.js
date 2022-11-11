const express = require('express')
const categoryRoutes = require('./categoryRoutes')
const userRoutes = require("./UserRoutes")

const router = express.Router()

router.use('/category', categoryRoutes)
router.use("/user", userRoutes)

module.exports = router