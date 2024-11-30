const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User = require("../models/user");
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
    // Register
    router.post("/register",async(req,res)=>{
        
        try{
            
            const newUser = new User({
                username:req.body.username,
                email:req.body.email,
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                password:CryptoJS.AES.encrypt(req.body.password, process.env.PassSecret)
                .toString(),
    
                
                
            });
           const savedUsers= await newUser.save()
           console.log(savedUsers);
           res.status(201).json(savedUsers);
           console.log(process.env.PassSecret)
          
        }catch(err){
            console.error("Error",err)
            res.status(500).json({error:"server Error",details:err.message});
            
            
        }
       
    });
    //LOGIN
    router.post("/login",async(req,res)=>{
        try{
            const user = await User.findOne({username:req.body.username})

            !user && res.status(401).json("Wrong credentials!")

            const hashedPassword= CryptoJS.AES.decrypt

            (user.password,process.env.PassSecret);

           const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

           originalPassword!==req.body.password&&

           res.status(401).json("Wrong credentials");
           
           const accessToken = jwt.sign({
            id:user._id,isAdmin:user.isAdmin,
           },process.env.JWT_SEC,  
            {expiresIn:"3d"}
        );

          const {password,...others}=user._doc

           res.status(200).json({...others,accessToken});

        }catch(err){

            console.error("Error",err)

            res.status(500).json({error:"server Error",details:err.message});
        }

    })

module.exports = router;