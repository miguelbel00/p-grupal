const express = require('express')
const { createUser } = require('../controllers/User/userCreate')
const { editUser } = require('../controllers/User/userEdit')

const router = express.Router()

router.post('/', createUser)
router.put('/',editUser)

module.exports = router