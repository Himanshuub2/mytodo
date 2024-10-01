import Joi from "joi";


export const registerSchema = Joi.object({
    username:Joi.string().alphanum().min(3).max(30).required(),
    fullname:Joi.string().required(),
    password:Joi.string().min(6).required(),
    email:Joi.string().email().required()
})


export const signin = Joi.object({
    username:Joi.string().alphanum().min(3).max(30).required(),
    password:Joi.string().min(6).required()
})
    

export const validTodo = Joi.object({
    todo:Joi.string().min(1).required(),
    user:Joi.string().min(6).required()
})
