const express = require('express')
const {sendEmailRegister} = require('../controllers/Email/emailRegister')
const { sendEmail } = require('../controllers/Email/emailSend')
const router = express.Router()

router.post("/register", sendEmailRegister)
router.post('/', sendEmail)

module.exports = router