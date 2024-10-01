import { User } from "../../model/UserModel.js";
import { auth } from "../../services/auth.js";
import { signin } from "../../utils/validator.js";


export default async function signinController(req,res){

    // validate the payload
    const {error,value} = signin.validate(req.body)
    
    if(error){
        res.status(400).json({
            message:"User Validation Failed",
            status:"Error"
        })
    }
    //check if the username exists
    const {username,password} = value;
    const user = await User.findAll({
        where:{
            username:username
        }
    })

    if(!user){
        res.status(400).json({
            message:"User does not exist",
            status:"Error"
        })
    }
    //check if password is correct
    const hashedPass = user[0].get('hashed_password')
    const isValidUser = auth.validateHash(password,hashedPass)

    if(!isValidUser){
        res.status(400).json({
            message:"Password is incorrect",
            status:"Error"
        })
    }
    //generate jwt
    const token = auth.generateJWT(username)
    //return final response
    return res.status(200).json({
        message:"User Logged in Successfully",
        status:"Successful",
        token:token
    })
}