const User = require("../models/user/User")
let PayStack = require('paystack-node')
exports.payment=(req,res,next)=>{
    let APIKEY ="sk_test_876a88ad79c77f3336551a0e4815efffc68440d0"
    const environment = process.env.NODE_ENV
    const paystack = new PayStack(APIKEY, environment)
    const amount =req.body.amount*100
    console.log(req.body.amount)
    const paystckpayment = paystack.initializeTransaction({
        amount,
        email: req.body.email,
    })
       console.log(amount)
    paystckpayment
    .then(function (response){
    res.json({
        data:response.body.data.authorization_url
    }) 
    }).catch(function (error){
    res.send(error)
    })
}


exports.addTosavings=(req,res,next)=>{
    User.findOneAndUpdate({_id:req.params.id},{savingDets:req.body,AddSaveRequest:true},(err,user)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json({
                user
            })
        }
    })
}

