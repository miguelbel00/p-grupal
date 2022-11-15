const express = require('express')
const {deleteCategory} = require('../controllers/Category/categoryDelete')
const {createCategory} = require('../controllers/Category/categoryCreate')
const {getAllCategory} = require('../controllers/Category/getAllCategory')

const router = express.Router()

router.post('/', createCategory)
router.delete('/:categoryId', deleteCategory)
router.get('/',getAllCategory)

module.exports = router