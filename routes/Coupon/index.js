const express = require('express')
const { createCoupon,allCoupons } = require('../../controllers/coupon')
const { requireSignin, adminMiddleware } = require('../../common-middlewares/')
const router =express.Router()


router.post('/coupon/create',requireSignin,adminMiddleware,createCoupon)
router.get('/coupon/getCoupons',allCoupons)

module.exports =router