const express = require('express')
const { createTransaction } = require('../controllers/Transaction/transactionCreate')

const router = express.Router()


router.post('/', createTransaction)


module.exports = router