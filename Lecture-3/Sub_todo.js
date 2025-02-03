import mongoose from 'mongoose';
const subTodoSchema = new mongoose.Schema(
    {
        content : {
            type : String,
            required : true,
        },
        complete : {
            type : Boolean,
            default : false,
        },
        createBy :{
            type : mongoose.Schema.Types.ObjectId,
            ref : 'user',
        },
    },
    {timestamps : true}
);

export const subtodo = mongoose.model('sub_todo',subTodoSchema);