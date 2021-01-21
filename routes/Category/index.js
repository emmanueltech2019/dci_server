const express = require('express')
const { createCategory,getCategories } = require('../../controllers/category')
const { requireSignin, adminMiddleware } = require('../../common-middlewares/')
const router =express.Router()


router.post('/category/create',requireSignin,adminMiddleware,createCategory)
router.get('/category/getCategory',getCategories)

module.exports =router