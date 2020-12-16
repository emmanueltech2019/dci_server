const { startapp } = require('../controllers')

const router =require('express').Router()

router.post('/',startapp)
module.exports=router