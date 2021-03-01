// const Order =require('../models/orders')
const User = require('../models/user/User')

exports.placeOrder=(req,res)=>{
    
    User.findById({_id:req.user.id},()=>{
        if(err){
            return res.status(400).json({
                message:'an error occured'
            })
        }
        if (user) {
            res.send(user)
        }
        if (!user) {
            return res.status(404).json({
                message:'user does not exist'
            })
        }
    })
}