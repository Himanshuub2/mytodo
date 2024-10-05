import { User } from "../model/UserModel.js"
import { Todo } from "../model/TodoModel.js"
import { userService } from "./user.js";

class TodoService{
    constructor(){

    }

    //add todo 
    async addTodo(todo,userId){
  
        //add todo to db
        const insertTodo = await Todo.create({
            todo:todo,
            user_id:userId
        })
    
        const todoId = insertTodo.get("id")
        return todoId;
    }

    //delete todo
    async deleteTodo(todoId,userId){

        const deletedTodo = Todo.destroy({
            where:{
                id:todoId,
                user_id:userId
            }
        })

        return deletedTodo;
    } 

    //all user todo's 
    async userTodos(username){

        //find userId from User
        const user = await userService.findUser(username);
        const userId = user.get('user_id');

        //get todo from Todo 
        const todoList = await Todo.findAll({
            where:{
                user_id: userId
            },
            attributes:['todo','id'],
            raw:true
        }) 
        return todoList;
        //return array of todo's with there id 
    }

    async updateTodo(todoId,todoContent,userId){

        const updatedTodo = await Todo.update({
            todo:todoContent
        },{
            where:{
                id:todoId,
                user_id:userId
            }
        })

        return updatedTodo;
    }
}

export const todoService = new TodoService;