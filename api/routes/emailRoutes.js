const express = require('express')
const { sendEmail } = require('../controllers/Email/emailSend')
const router = express.Router()

router.post('/', sendEmail)

module.exports = router