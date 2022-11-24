const express = require('express')
const { createTransaction } = require('../controllers/Transaction/transactionCreate')
const { transactionUpdate } = require('../controllers/Transaction/transactionUpdate.js')
const { getAllTransaction } = require('../controllers/Transaction/getAlltransaction')
const router = express.Router()

router.post('/', createTransaction)
router.put('/', transactionUpdate)
router.get('/', getAllTransaction)


module.exports = router