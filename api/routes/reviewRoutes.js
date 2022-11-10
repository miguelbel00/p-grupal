const express = require('express')
const { reviewCreate } = require('../controllers/Review/reviewCreate')

const router = express.Router()

// example of a route with index controller get function
router.post('/', reviewCreate)


module.exports = router