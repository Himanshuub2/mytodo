import { Sequelize } from 'sequelize';
import { DB_CONNECTION_STRING } from '../constants/index.js';


// export default async function dbConnect(){
//     const sequelize = new Sequelize(DB_CONNECTION_STRING , {dialect:'postgres'})
//     try{
//         await sequelize.authenticate();
//         console.log('Connection Established with DB')
//     }
//     catch(err){
//         console.log("Connection with DB failed")
//     }
//     return sequelize;
// }
class DbConnection{
    constructor(){
        this.sequelize = new Sequelize(DB_CONNECTION_STRING , {dialect:'postgres'})
    }

    async connect(){
        try{
            await this.sequelize.authenticate();
            //Creates table if does not exist otherwise does nothing
            await this.sequelize.sync();
            console.log("Connection Established with DB")
        }
        catch(err){
            console.log('Error connecting with DB',err)
        }
    }

    getInstance(){
        return this.sequelize;
    }

}


export const dbConnection = new DbConnection;
