const express = require('express')
const { createUser } = require('../controllers/User/userCreate')
const router = express.Router()

router.post('/', createUser)



module.exports = router