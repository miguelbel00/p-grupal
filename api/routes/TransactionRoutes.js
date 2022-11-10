const express = require('express')
const { transactionCreate } = require('../controllers/TransactionControllers/TransactionCreate.js')

const router = express.Router()


router.post('/', transactionCreate)


module.exports = router