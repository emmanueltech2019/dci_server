const slugify = require('slugify')
const Coupon = require('../models/Coupons')

exports.createCoupon=(req,res)=>{
    const {name,amount,percentage,isPercent,isAmount} =req.body
    Coupon.find({name},(err,coupon)=>{
        if(err) return res.status(400).json({err})
        if(coupon.length>0){
            console.log(coupon)
            res.status(400).json({
                message:"Coupon code already exist"
            })
        }
        if(coupon.length ==0){
            const coupon = new Coupon({
                name,
                amount,
                percentage,
                isPercent,
                isAmount,
                slug:slugify(name)
            })
            coupon.save((error,coupon)=>{
                console.log(coupon,error)
                if(error) return res.status(400).json({error})
                if(coupon){
                    res.status(201).json({
                        message:"Coupon created"
                    })
                }
            })
        }
    })
}

exports.allCoupons=(req,res)=>{
    Coupon.find({})
    .then(response=>{
        res.status(200).json({
            coupon:response
        })
    })
    .catch(err=>{
        res.status(400).json({
            error:err
        })
    })
}