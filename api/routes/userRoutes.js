const express = require('express')
const { editUser } = require('../controllers/User/userEdit')
const {getAllUser} = require('../controllers/User/getAllUsers')
const {getOneUser} = require('../controllers/User/getOneUser')




const router = express.Router()

router.put('/',editUser)
router.get('/',getAllUser)
router.get('/:userId',getOneUser)


module.exports = router