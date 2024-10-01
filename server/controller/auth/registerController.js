import { logger } from "../../utils/logger.js";
import { auth } from "../../services/auth.js";
import { registerSchema } from "../../utils/validator.js";
import { User } from "../../model/UserModel.js";
import isEmpty from 'lodash/isEmpty.js'

export default async function registerController (req,res){
    console.log(req.body);

    //validation
    const {error, value} = registerSchema.validate(req.body);
    console.log(value,error);
    if(error){
        // logger(error)
        return res.status(400).json({
            status:"error",
            message:"User Validation Failed"
        })
    }
    //user Exist ?
    const {username,fullname,email,password} = value;
    const userExist  = await User.findAll({
        where:{
            username:username
        }
    });

    if(!isEmpty(userExist)){
        console.log(userExist)
        return res.status(400).json({
            status:"error",
            message:"User already Exist"
        })
    }
    // add User
    const hashedPass = auth.generateHash(password)
    const user = await User.create({
        username:username,
        email:email,
        hashed_password:hashedPass,
    })
    //generate token
    const token  = auth.generateJWT(username);

    //return response
    return res.status(200).json({
        message:"User Successfully Created",
        token:token
    })
}