const express = require('express')
const { createTransaction } = require('../controllers/TransactionControllers/TransactionCreate.js')

const router = express.Router()


router.post('/', createTransaction)


module.exports = router