import { Todo } from "../../model/TodoModel.js";
import { todoService } from "../../services/todoService.js";


export default async function getTodoController(req,res){
    
    const {username} = req.body;
    
    // get all todo's for particular user
    const todoList =await todoService.userTodos(username)
  
    // return todo's r
    return res.status(200).json({
        message:"Success",
        data:todoList
    })
    // console.log(todoList.get('todo'));
}