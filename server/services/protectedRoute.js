import { auth } from "./auth.js"


export default function protectedRoute(req,res,next){
    //get token
    const {token} = req.body
    // if not token , return no token error
    if(!token){
        return res.status(400).json({
            message:"Token is not passed",
            status:"Error"
        })
    }

    // validate token 
    const isValidToken = auth.verifyJWT(token)
    //if valid token move to the service
    if(!isValidToken){
        return res.status(400).json({
            message:"Invalid/Expired Token Provided",
            status:"Error"
        })
    }

    next();

}