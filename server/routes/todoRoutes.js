import express from 'express'
import protectedRoute from '../services/protectedRoute.js';
import todoController from '../controller/todo/todoController.js';


const todoRouter = express.Router();


todoRouter.post('/todo',protectedRoute,todoController)


export default todoRouter;