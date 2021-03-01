const express =require('express')
const { placeOrder } = require('../../controllers/order')
const { userMiddleware,requireSignin } = require('../../common-middlewares')
const router =express.Router()

router.post('/order/add',requireSignin,userMiddleware,placeOrder)
module.exports = router