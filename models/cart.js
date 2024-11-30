const mongoose = require("mongoose");
CartSchema = new mongoose.Schema({
    UserId:{
        type:String, required:true,unique:true
    },
    Products:[
        {
            ProductId:{
                type:String,
            },
            Quantity:{
                type:Number,
                default:1,
            }
        }
    ]
    
},{timestamps:true});
module.export = mongoose.model("Cart",CartSchema)