const Dci = require('../models')

exports.startapp =(req,res)=>{
    const {SavingsBalance,LoanBalance,investmentBalance} =req.body
    const generalData = new Dci({
        SavingsBalance,
        LoanBalance,
        investmentBalance
    })
    generalData.save((err,data)=>{
        if(err){
            res.send(err)
        }
        res.status(201).json({
            message:"Created",
            data
        })
    })
}