const express = require('express')
const { createCategory,getCategories } = require('../../controllers/category')
const router =express.Router()


router.post('/category/create',createCategory)
router.get('/category/getCategory',getCategories)

module.exports =router