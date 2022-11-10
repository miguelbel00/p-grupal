const express = require('express')
const categoryRoutes = require('./categoryRoutes')

const router = express.Router()

router.use('/category', categoryRoutes)

module.exports = router