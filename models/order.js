const { type, status } = require("express/lib/response");
const mongoose = require("mongoose");
OrderSchema = new mongoose.Schema({
    userId:{
        type:String, required:true,
    },
    products:[
        {
            productId:{
                type:String,
            },
            quantity:{
                type:Number,
                default:1,
            },
        },
    ],
    amount:{
        type:String,required:true
    },
    address:{
        type:Object,required:true,
    },
    status:{
        type:String,default:"pending"
    },
    
},{timestamps:true});
module.exports = mongoose.model("Order",OrderSchema)