const { type } = require("express/lib/response");
const mongoose = require("mongoose");
UserSchema = new mongoose.Schema({
    username:{
        type:String, 
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female"]
    },
    address:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},{timestamps:true});
module.exports = mongoose.model("User",UserSchema)