const express = require('express')
const {deleteCategory} = require('../controllers/Category/categoryDelete')

const router = express.Router()

router.delete('/:categoryId', deleteCategory)

module.exports = router