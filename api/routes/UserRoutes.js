const express = require('express')
const { userCreate } = require('../controllers/User/userCreate')

const router = express.Router()

router.put('/',editUser)
router.get('/',getAllUser)

module.exports = router