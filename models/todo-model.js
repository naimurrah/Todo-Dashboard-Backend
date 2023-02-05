const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    description:{ type:String, required: true},
    date: {type:Date},
    isDone:{type:Boolean, required: true},
    tag: {type: String, required:true},
    hasDue:{type: Boolean, required:true}
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;