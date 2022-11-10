const express = require('express')

const  reviewsRoutes  = require('./reviewRoutes')
const userRoutes = require("./userRoutes")

const router = express.Router()



router.use("/user", userRoutes)
router.use("/reviews", reviewsRoutes)


module.exports = router