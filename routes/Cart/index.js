const express = require('express')
const { addItemToCart } = require('../../controllers/cart')
const {userMiddleware,requireSignin} =require('../../common-middlewares')
const router =express.Router()


router.post('/user/cart/addtocart',requireSignin,userMiddleware,addItemToCart)
// router.get('/category/getCategory',getCategories)

module.exports =router