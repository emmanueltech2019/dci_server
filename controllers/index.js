const Dci = require('../models/index')
const User = require('../models/user/User')
const Admin = require('../models/admin/admin')

exports.updateProfile =(req,res)=>{
    const {type} =req.body
    if(req.body.type==="user"){
        User.findOneAndUpdate({_id:req.params.id},{occupation,phonenumber,ResidentialAddress,NearestBusStop,CityTown,State})
    }
    if(req.body.type==="admin"){

    }
}
exports.appdata =(req,res)=>{
    Dci.find({})
    .then(response=>{
        res.status(200).json({
            message:"found ",
            response
        })
    })
    .catch(err=>{
        res.send(err)
    })
}