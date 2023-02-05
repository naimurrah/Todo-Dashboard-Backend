const router = require("express").Router();

const mongoose = require("mongoose");
let Todo = require("../models/todo-model.js");

router.route("/").get(async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error.message);
    }
});

router.route("/").post(async (req, res) => {
    try {
        const {date, isDone, description, tag, hasDue} = req.body;
        const todo = new Todo({
            description:description,
            date:new Date(date),
            isDone:isDone,
            tag:tag,
            hasDue:hasDue
        });

        await todo.save();
    
        res.json(todo);
    } catch (error) {
        console.error(error.message)
    }
});

router.route("/id=:id").get(async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.json(todo);
    } catch (error) {
        console.error(error.message);
    }
});


router.route("/id=:id").put(async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findOneAndUpdate({"_id":id}, req.body, {new:true});
        
        res.json(todo);
    } catch (error) {
        console.error(error.message)
    }
});

router.route("/id=:id").delete(async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findOneAndDelete({"_id":id});
        
        res.json(todo);
    } catch (error) {
        console.error(error.message)
    }
});



module.exports = router;