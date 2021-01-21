const jwt=require('jsonwebtoken')
exports.requireSignin =(req,res,next)=>{
    if(req.headers.authorization){
        const token =req.headers.authorization.split(" ")[1]
        const user = jwt.verify(token,process.env.SECRET_KEY)
        req.user=user
    }
    else{ 
        return res.status(400).json({message:"Authorization required"})
    }
    next()
    // jwt.decode(token,)
}
exports.userMiddleware =(req,res,next)=>{
    if(req.user.role !== "user"){
        res.status(400).json({
            message:"User Access denied"
        })
    }
    next()
}
exports.adminMiddleware =(req,res,next)=>{
    if(req.user.role !== "admin"){
        res.status(400).json({
            message:"Admin Access denied"
        })
    }
    next()
}