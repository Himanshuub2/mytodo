import { Todo } from "../../model/TodoModel.js";
import { User } from "../../model/UserModel.js";
import { todoService } from "../../services/todoService.js";
import { userService } from "../../services/user.js";
import { validTodo } from "../../utils/validator.js"


export default async function addTodoController(req,res){
    const {todo,user} = req.body
    //validate payload
    const {error, value}  = validTodo.validate({todo,user});

    //if error send response with error
    if(error){
        return res.status(400).json({
            message:"Validation error for Todo",
            status:"Error",
            Error:error
        })
    }
    //get userId from username 
    const username =await userService.findUser(user);
    const userId = username[0].get('user_id')
    console.log(username,userId);
    if(!userId){
        return res.status(500).json({
            message:"User does not exist",
            status:"Error"
        })
    }

    const todoId =await  todoService.addTodo(todo,userId);
    if(!todoId){
        res.status(500).json({
            message:"Failed to add Todo",
            status:"Error"
        })
    }
    //return response as success

    return res.status(200).json({
        message:"Todo Added Succesfully",
        status:'Success',
        data:todoId
    })
}