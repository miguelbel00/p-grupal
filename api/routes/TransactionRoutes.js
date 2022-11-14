const express = require('express')
const { createTransaction } = require('../controllers/transactionControllers/transactionCreate')

const router = express.Router()


router.post('/', createTransaction)


module.exports = router