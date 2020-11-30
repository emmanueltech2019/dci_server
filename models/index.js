const {Schema,model} = require("mongoose")
const  uniqueValidator = require('mongoose-unique-validator');

const DciSchema = new Schema({
    SavingsBalance:{
        type:String,
        default:0
    },
    LoanBalance:{
        type:String,
        default:0    
    },
    investmentBalance:{
        type:String,
        default:0    
    },

},{ timestamps: true })

DciSchema.plugin(uniqueValidator);
module.exports=model("admin",DciSchema)