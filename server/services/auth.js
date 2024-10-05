import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../constants/index.js'
import bcrypt from 'bcrypt'

class Auth{
    constructor(){
        this.saltRounds = 10
        this.generateHash = this.generateHash.bind(this);
        this.generateJWT = this.generateJWT.bind(this);
    }

    //generate JWT
    generateJWT(user){
        const token = jwt.sign({user},JWT_SECRET,{expiresIn:60*100})
        return token
    }
    //verify JWT
    verifyJWT(token){
        try{
            const decoded = jwt.verify(token,JWT_SECRET)
            return {token:decoded,message:"Success"}
        }
        catch(err){
            return {token:null,message:err}
        }
    }

    generateHash(pass){
        const hashedPassword = bcrypt.hashSync(pass,this.saltRounds)
        return hashedPassword;
    }

    validateHash(pass,hashedPass){
        const isValidPass = bcrypt.compareSync(pass,hashedPass)
        return isValidPass;
    }
}

export const auth = new Auth;