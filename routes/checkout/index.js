const express = require('express')
const router = express.Router()
const {requireSignin,userMiddleware}= require('../../common-middlewares')
const {addressDetails,checkoutDelivery,paymentMethod}=require('../../controllers/checkout')
router.post('/checkout/add/address',requireSignin,userMiddleware,addressDetails)
router.post('/checkout/add/delivery',requireSignin,userMiddleware,checkoutDelivery)
router.post('/checkout/add/payment',requireSignin,userMiddleware,paymentMethod)
module.exports = router