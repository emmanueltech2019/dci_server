const express = require('express')
const { createProduct } = require('../../controllers/Product')
const router =express.Router()
const multer =require('multer')
const shortid =require('shortid')
const path =require('path')
const { requireSignin, adminMiddleware } = require('../../common-middlewares')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),"uploads") )
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' +file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })
router.post('/product/create',requireSignin,adminMiddleware,upload.array('productPicture'),createProduct)

module.exports =router