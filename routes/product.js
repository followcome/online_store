
const product = require("../models/product");
const   Product = require("../models/product");
 const { verifyToken,  verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");
  
 const router = require("express").Router();
// CREATE

router.post("/",verifyTokenAndAdmin,async(req,res)=>{
    const newproduct = new product(req.body);
    try{
        savedProduct = await newproduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json(err);
    }
});
//UPDATE

router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{
        try{
            const updatedproduct = await Product.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true}
        );
        res.status(200).json(updatedproduct);
        }catch(err){
            res.status(500).json(err);
        }
})
//     //DELETE
router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...")

    }catch(err){
        res.status(500).json(err)
    }

});
 //GET PRODUCT
 router.get("/find/:id",async(req,res)=>{
    try{
      const product =  await Product.findById(req.params.id);
      
      res.status(200).json(product);

    }catch(err){
        res.status(500).json(err)
    }

});
// GET ALL PRODUCT
router.get("/",async(req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try{
      let Products;
      if (qNew) {
        products= await Product.find().sort({createdAt: -1}).limit(1)
        
      }else if (qCategory){
        products = await Product.find({categories:{$in:
            [qCategory],
        }});
      }else{
        products = await Product.find();
        
      }
    //   console.log("products:",products)
      res.status(200).json(products);

    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }

});


module.exports = router;