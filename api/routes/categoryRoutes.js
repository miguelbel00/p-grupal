const express = require('express')
const {createCategory} = require('../controllers/Category/categoryCreate')

const router = express.Router()

router.post('/', createCategory)

module.exports = router