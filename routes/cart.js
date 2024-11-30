
const Cart = require("../models/cart");
 const { verifyToken,  verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");
  
 const router = require("express").Router();
// CREATE CART

router.post("/",verifyToken,async(req,res)=>{
    const newCart = new Cart(req.body);
    try{
        savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err);
    }
});
//UPDATE CART

router.put("/:id",verifyTokenAndAuth,async(req,res)=>{
        try{
            const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true}
        );
        res.status(200).json(updatedCart);
        }catch(err){
            res.status(500).json(err);
        }
})
//     //DELETE CART
router.delete("/:id",verifyTokenAndAuth,async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...")

    }catch(err){
        res.status(500).json(err)
    }

});
//  //GET USER Cart
 router.get("/find/:U=userid",verifyTokenAndAuth,async(req,res)=>{
    try{
      const Cart =  await Cart.findOne({userId:req.params.userId});
      
      res.status(200).json(Cart);

    }catch(err){
        res.status(500).json(err)
    }

});
// // GET ALL Cart
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try{
     const carts = await Cart.find()
     res.status(200).json(carts);

    }catch(err){
        res.status(500).json(err);
    }

})
module.exports = router;