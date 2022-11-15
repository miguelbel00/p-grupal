const express = require('express')
const { reviewCreate } = require('../controllers/Review/reviewCreate')
const { reviewDelete } = require('../controllers/Review/reviewDelete')
const {getAllReview} = require('../controllers/Review/getAllReview')
const router = express.Router()

// example of a route with index controller get function
router.post('/', reviewCreate)
router.delete("/:reviewId", reviewDelete)
router.get('/',getAllReview)

module.exports = router