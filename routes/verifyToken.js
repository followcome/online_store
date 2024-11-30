jwt = require("jsonwebtoken");
const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            if(err) res.status(403).json("token is not valid!");
            req.user = user; 
            next();
        })
        
    }else{
        res.status(401).json("You're not authenticated!")
    }
    // const verifyTokenAndAuthorization = (req,res,next)=>{
    //     verifyToken(req,res,()=>{
    //         if (req.user.id===user.id.params || req.user.isAdmin) {
    //             next();

                
    //         }else{
    //             res.status(403).json("you're not allowed to do that!");
    //         }
    //     })
    // }
   
};
const verifyTokenAndAuth=(req,res,next)=> {
    verifyToken(req,res,()=>{
        if (req.user.id===req.params.id|| req.user.isAdmin) {
                        next();
                        
                    } else{
                        res.status(403).json("you're not allowed to do that!");
                     }
    })
}
const verifyTokenAndAdmin=(req,res,next)=> {
    verifyToken(req,res,()=>{
        if ( req.user.isAdmin) {
                        next();
                        
                    } else{
                        res.status(403).json("you're not allowed to do that!");
                     }
    })
}

module.exports ={verifyToken,verifyTokenAndAuth ,verifyTokenAndAdmin}