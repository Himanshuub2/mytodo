import {Sequelize, DataTypes, Model } from "sequelize";
import { dbConnection } from "../db/index.js";
// import dbConnect from "../db/index.js";
// class User extends Model{}
// User.init({
//     user_id:{
//         type:DataTypes.INTEGER,
//         primaryKey:true
//     },
//     username:{
//         type:DataTypes.STRING
//     },
//     hashed_password:{
//         type:DataTypes.STRING
//     },
//     email:{ 
//         type:DataTypes.STRING,
//         unique:true
//     }

    
// },    {
//     sequelize:dbConnection.getInstance(),
//     modelName:'User'

//     }
// )   


// export default User;



export const User = dbConnection.getInstance().define(
    'User',
    {
        user_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username:{
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING,
            unique:true
        },
        hashed_password:{
            type:DataTypes.STRING
        }

    },{
        modelName:'User',
        freezeTableName:true
    }
)