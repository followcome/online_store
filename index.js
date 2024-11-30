const express = require("express");
const mongoose = require("mongoose");
const app = express();

const dotenv = require("dotenv");
dotenv.config();
const CryptoJS = require("crypto-js");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
// const paystackRoute = require("./routes/paystack");






mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Db connection successful!!")).catch((err)=>{
    console.log(err);
});
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
// app.use("/api/paystacks",paystackRoute);






// app.use("/api/user",userRoute);




// app.get("/",(req,res)=>{
//     res.send("hello")
//     console.log("it is working");
    

// })


app.listen(process.env.PORT || 6000,()=>{
 console.log("Backend server is running!!!");
 
});