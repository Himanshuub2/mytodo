import { logger } from "../../utils/logger.js";
import { auth } from "../../services/auth.js";
import { registerSchema } from "../../utils/validator.js";
import { User } from "../../model/UserModel.js";
import isEmpty from 'lodash/isEmpty.js'
import { userService } from "../../services/user.js";

export default async function registerController (req,res){

    //validation
    const {error, value} = registerSchema.validate(req.body);
    if(error){
        // logger(error)
        return res.status(400).json({
            status:"error",
            message:"User Validation Failed"
        })
    }
    //user Exist ?
    const {username,fullname,email,password} = value;

    const userExist = userService.findUser(username);
    if(!isEmpty(userExist)){
        return res.status(400).json({
            status:"error",
            message:"User already Exist"
        })
    }
    // add User
    const hashedPass = auth.generateHash(password)

    const user = userService.addUser(username,email,hashedPass)
    //generate token
    const token  = auth.generateJWT(username);

    // res.cookie('jwt',token,{
    //     httpOnly:true,
    //     sameSite:'None',
    //     secure:true,
    //     maxAge:60*30
    // })
    //return response
    return res.status(200).json({
        message:"User Successfully Created",
        token:token
    })
}