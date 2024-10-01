import express from 'express'
import errorHandler from '../utils/errorHandler.js';
import registerController from '../controller/auth/registerController.js';
import signinController from '../controller/auth/signinController.js';


const authRouter = express.Router();


authRouter.post('/signup',errorHandler(registerController))
authRouter.post('/login',errorHandler(signinController))


export default authRouter;