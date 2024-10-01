import express from 'express'
import { PORT } from './constants/index.js';
import { dbConnection } from './db/index.js';
import { logger } from './utils/logger.js';
import authRouter from './routes/authRoutes.js';
import todoRouter from './routes/todoRoutes.js';

const app = express();
// middlewares 
dbConnection.connect();
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api',todoRouter)
app.use(logger)
app.use((err,req,res,next)=>{
    console.log('Error occured ----->',err)
})
app.listen(PORT,()=>{
    console.log("server is running at ",PORT)
})