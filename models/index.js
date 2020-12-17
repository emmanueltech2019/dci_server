const {Schema,model} = require("mongoose")
const  uniqueValidator = require('mongoose-unique-validator');

const DciSchema = new Schema({
    SavingsBalance:{
        type:Number,
        default:0
    },
    LoanBalance:{
        type:Number,
        default:0    
    },
    investmentBalance:{
        type:Number,
        default:0    
    },

},{ timestamps: true })

DciSchema.plugin(uniqueValidator);
module.exports=model("dci",DciSchema)