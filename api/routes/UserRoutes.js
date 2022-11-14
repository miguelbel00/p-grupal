const express = require('express')
const { editUser } = require('../controllers/User/userEdit')

const router = express.Router()

router.put('/',editUser)

module.exports = router