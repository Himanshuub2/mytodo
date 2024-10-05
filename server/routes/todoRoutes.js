import express from 'express'
import protectedRoute from '../services/protectedRoute.js';
import addTodoController from '../controller/todo/addTodoController.js';
import getTodoController from '../controller/todo/getTodoController.js';
import updateTodoController from '../controller/todo/updateTodoController.js';
import deleteTodoController from '../controller/todo/deleteTodoController.js';


const todoRouter = express.Router();


todoRouter.post('/todo',protectedRoute,addTodoController)
todoRouter.get('/todo',protectedRoute,getTodoController)
todoRouter.put('/todo',protectedRoute,updateTodoController)
todoRouter.delete('/todo',protectedRoute,deleteTodoController)




export default todoRouter;