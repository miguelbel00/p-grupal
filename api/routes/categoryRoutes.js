const express = require('express')
const {deleteCategory} = require('../controllers/Category/categoryDelete')
const {createCategory} = require('../controllers/Category/categoryCreate')

const router = express.Router()

router.post('/', createCategory)
router.delete('/:categoryId', deleteCategory)

module.exports = router