const { startapp,appdata, updateProfile} = require('../controllers')

const router =require('express').Router()

router.post('/update/profile',updateProfile)
router.get('/data',appdata)
module.exports=router