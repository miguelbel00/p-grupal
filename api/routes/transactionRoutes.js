const express = require('express')
const { createTransaction } = require('../controllers/Transaction/transactionCreate')
const { transactionUpdate } = require('../controllers/Transaction/transactionUpdate.js')

const router = express.Router()

router.post('/', createTransaction)
router.put('/', transactionUpdate)

module.exports = router