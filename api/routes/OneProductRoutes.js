const express = require('express')
const { oneProduct } = require('../controllers/OneProductControllers/oneProduct')

const router = express.Router()


router.get('/', oneProduct)


module.exports = router