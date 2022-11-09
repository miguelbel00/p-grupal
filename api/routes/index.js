const express = require('express');
const router = express.Router();
const getAllProducts = require('../routes/RouterProductsGet');

// example of a route with index controller get function
/* router.get('/', get) */
router.use('/', getAllProducts)


module.exports = router;