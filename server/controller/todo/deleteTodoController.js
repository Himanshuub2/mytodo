import { todoService } from "../../services/todoService.js";
import { userService } from "../../services/user.js";


export default async function deleteTodoController(req,res){

    //get the payload
    const {username,todoId} = req.body;

    //get userId from username

    const user = await userService.findUser(username);
    const userId = user.get('user_id');

    //delete the todo

    const deletedTodo = await todoService.deleteTodo(userId,todoId);
    
    res.status(200).json({
        message:"successfully deleted Todo"
    })
}