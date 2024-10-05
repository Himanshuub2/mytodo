import { todoService } from "../../services/todoService.js"
import { userService } from "../../services/user.js";


export default async function updateTodoController(req,res){
    //get the todo id to be updated
    const {todo,todoId,username} = req.body

    const user = await userService.findUser(username);
    const userId = user.get('user_id')
    //update the todo
    const updatedTodo = await todoService.updateTodo(todoId,todo,userId);
    
    res.status(200).json({
        message:"Successfully updated Todo"
    })
}