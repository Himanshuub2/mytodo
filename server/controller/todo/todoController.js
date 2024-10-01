import { Todo } from "../../model/TodoModel.js";
import { User } from "../../model/UserModel.js";
import { validTodo } from "../../utils/validator.js"


export default async function todoController(req,res){
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
    const getUser = await User.findOne({
        where:{
            username:user
        }
    })
    const userId = getUser.get('user_id')
    console.log(userId)
    if(!userId){
        return res.status(400).json({
            message:"User does not exist",
            status:"Error"
        })
    }
    //add todo to db
    const insertTodo = await Todo.create({
        todo:todo,
        user_id:userId
    })

    if(!insertTodo) {
        return res.status(400).json({
            message:"Failed to add todo",
            status:"Error"
        })
    }
    //return response as success

    return res.status(200).json({
        message:'Reached Here , Great !!',
        status:"Success"
    })
}