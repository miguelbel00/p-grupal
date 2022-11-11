const express = require('express')
const { userCreate } = require('../controllers/User/UserCreate')
const router = express.Router()

router.post('/', userCreate)



module.exports = router