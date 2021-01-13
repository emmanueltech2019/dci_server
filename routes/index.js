const { updateProfile,resetpassword, reset, resetPasswordChange} = require('../controllers')

const router =require('express').Router()

router.post('/update/profile/:id',updateProfile)
router.post('/pasword/reset-request',resetpassword)
router.post('/pasword/reset/:token',reset)
router.post('/pasword/change/:token',resetPasswordChange)
module.exports=router