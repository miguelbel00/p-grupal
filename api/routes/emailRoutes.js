const express = require('express')
const {sendEmailRegister} = require('../controllers/Email/emailRegister')
const { sendEmail } = require('../controllers/Email/emailSend')
const { recoverPassword } = require('../controllers/Email/recoverPassWord')
const router = express.Router()

router.post("/register", sendEmailRegister)
router.post("/recoverPass", recoverPassword)
router.post('/', sendEmail)

module.exports = router