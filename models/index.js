const {Schema,model} = require("mongoose")
const  uniqueValidator = require('mongoose-unique-validator');

const DciSchema = new Schema({
    SavingsBalance:{
        type:Number,
        default:0
    },
    LoanBalance:{
        type:Number,x
        default:0    
    },
    investmentBalance:{
        type:Number,
        default:0    
    },

},{ timestamps: true,capped : true, size:4000,  max : 1 })

DciSchema.plugin(uniqueValidator);
module.exports=model("dci",DciSchema)