const mongoose = require("mongoose");
ProductSchema = new mongoose.Schema({
    title:{
        type:String, required:true,unique:true
    },
    desc:{
        type:String,required:true
    },
    img:{
        type:String,required:true
    },
    categories:{
        type:Array
    },
    size:{
        type:String
    },
    color:{
        type:String,required:true
    },
    price:{
        type:Number,required:true
    },
    
    isAdmin:{
        type:Boolean,
        default:false,
    }
},{timestamps:true});
module.exports = mongoose.model("Product",ProductSchema);