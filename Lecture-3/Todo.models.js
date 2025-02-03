import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
    },
    complete : {
        type : Boolean,
        default : false,
    },
    createdBy : {//for relation in another dataase
         type : mongoose.Schema.Types.ObjectId,
         ref : 'user'//always take the name of under single quotes in export 
    },
    subTodos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'SubTodo',
        }
    ] //array of Sub-Todos
} , 
{timestamps : true}); //timestampe for when the will created and updated it will give

export const Todo = mongoose.model('Todo',todoSchema); //it will give todos name in mongoose(in mongoose name will convert to lowercase and convert in plural)