const { startapp } = require('../controllers')

const router =require('express').Router()

router.post('/data',startapp)
module.exports=router