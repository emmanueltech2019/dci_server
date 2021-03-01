const express =require('express')
const { placeOrder } = require('../../controllers/order')
const router =express.Router()

router.post('/order/add',placeOrder)
module.exports = router