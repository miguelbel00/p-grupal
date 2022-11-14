const express = require('express')
const {createUser} = require('../controllers/User/userCreate')
const {loginUser} = require('../controllers/Auth/userLogin')

const router = express.Router()

router.post('/register',createUser)
router.post('/login', loginUser)

module.exports = router