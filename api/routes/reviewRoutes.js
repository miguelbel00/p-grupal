const express = require('express')
const { reviewCreate } = require('../controllers/Review/reviewCreate')
const { reviewDelete } = require('../controllers/Review/reviewDelete')
const router = express.Router()

// example of a route with index controller get function
router.post('/', reviewCreate)
router.delete("/:reviewId", reviewDelete)

module.exports = router