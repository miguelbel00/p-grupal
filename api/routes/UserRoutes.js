const express = require('express')
const { userCreate } = require('../controllers/UserControllers/UserCreate')

const router = express.Router()

// example of a route with index controller get function
router.post('/', userCreate)


module.exports = router