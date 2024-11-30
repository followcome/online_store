// const router = require("express").Router();
// const paystack = require("paystack")(process.env.PAYSTACK_KEY);
// router.post("/payment",(req,res)=>{
//     const {amount,email}=req.body;
//    try{
//     //initialize the transaction with paystack
//     paystack.transaction.initialize({
//         email:email,
//         amount:amount *100,
//         currency:"NGN"
//     });
//     res.status(200).json({paymentUrl:response.data.authorization_url,
//         reference:response.data.reference});
//    }catch(error){
//     console.log(error)
//     res.status(500).json({error:"payment inititialization failed",details:error});
//    }
// });
// router.post("/verify-payment/:reference",async(req,res)=>{
//     const {reference}= req.params //get the transaction from the url url 
//     try{
//         const response=await paystack.transaction.verify(reference);
//         if (response.data.status==="success") {
//             res.status(200).json({message:"payment successful",data:response.data})
            
//         }else{
//             res.status(400).json({message:"payment verification failed",data:response.data});
//         }
//     }catch(error){
//         res.status(500).json({message:"Error verifying payment",error});
//     }
// })

// module.exports= router;