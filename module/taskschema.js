const mongo = require('mongoose')

const Schema = mongo.Schema;

const taskSchema= new Schema({
    title:String,
     description:String,
     status:String,
     level:String,
     dueDate:String,
     user_id:String,
})

taskSchema.index({title:1})
taskSchema.index({dueDate:1})

const task = mongo.model("Task",taskSchema)

module.exports=task