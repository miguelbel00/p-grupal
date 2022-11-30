const express = require('express')
const { createTransaction } = require('../controllers/Transaction/transactionCreate')
const { transactionUpdate } = require('../controllers/Transaction/transactionUpdate.js')
const { getAllTransaction } = require('../controllers/Transaction/getAlltransaction')
const { transactionDelete } = require('../controllers/Transaction/transactionDelete')
const router = express.Router()

router.post('/', createTransaction)
router.put('/', transactionUpdate)
router.get('/', getAllTransaction)
router.delete('/:transactionId', transactionDelete)


module.exports = router