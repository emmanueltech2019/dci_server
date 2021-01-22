const {Schema,model} = require('mongoose')


const checkoutSchema= new Schema({
    Firstname:{
        type:String,
        required:true,
        trim:true,
    },
    Lastname:{
        type:String,
        required:true,
        trim:true,
    },
    Company:{
        type:String,
        trim:true,
    },
    Street:{
        type:String,
        required:true,
        trim:true,
    },
    Telephone:{
        type:String,
        required:true,
        trim:true,
    },
    Email:{
        type:String,
        required:true,
        trim:true,
    },
    deliveryMethod:{
        type:Object,
        default:{}
    },
    deliveryMethod:{
        type:Object,
        default:{}
    }

})


module.exports=model('Category',checkoutSchema) 