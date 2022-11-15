const express = require('express')
const { editUser } = require('../controllers/User/userEdit')
const {getAllUser} = require('../controllers/User/getAllUsers')

const router = express.Router()

router.put('/',editUser)
router.get('/',getAllUser)

module.exports = router