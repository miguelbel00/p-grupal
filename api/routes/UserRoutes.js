const express = require('express')
const { editUser } = require('../controllers/User/userEdit')
const {getAllUser} = require('../controllers/User/getAllUsers')
const { createUser } = require('../controllers/User/userCreate')


const router = express.Router()

router.put('/',editUser)
router.get('/',getAllUser)
router.post('/', createUser)

module.exports = router