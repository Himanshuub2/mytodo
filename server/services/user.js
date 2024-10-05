import { User } from "../model/UserModel.js";

class UserService{
    constructor(){}

    //add user

    async addUser(username,email,hashedPass){
        const user = await User.create({
            username:username,
            email:email,
            hashed_password:hashedPass,
        })

        return user;
    }

    //find user
    async findUser(username){

        const user = await User.findOne({
            where:{
                username:username
            }
        })

        return user;
    }

    //update user
    updateUser(){

    }   
}

export const userService = new UserService;