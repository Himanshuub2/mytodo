import { DataTypes, Model } from "sequelize";
import { dbConnection } from "../db/index.js";

export const Todo = dbConnection.getInstance().define(
    'Todo',
    {
    
    id :{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    todo:{
        type:DataTypes.STRING,
    },
    user_id:{
        type:DataTypes.INTEGER,
    },
},{
    modelName:'Todo',
    freezeTableName:true
}

)