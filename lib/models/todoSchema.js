const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isComplete:{
        type:Boolean,
        default:false
    }
},{
    timeStamp:true
})

const todoModel =mongoose.models.todo || mongoose.model('todo',todoSchema);

module.exports = todoModel;