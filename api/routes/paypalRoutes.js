const express = require('express')
const router = express.Router();
const {orderDelete} = require('../controllers/Paypal/orderDelete')
const {orderCreate} = require('../controllers/Paypal/orderCreate')
const {orderCapture} = require('../controllers/Paypal/orderCapture')

router.post('/checkout-order', orderCreate)
router.get('/capture-order', orderCapture)
router.get('/cancel-order', orderDelete)

module.exports = router