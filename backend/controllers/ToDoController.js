//here we will define how our data is going to save in the database.
//for this project we will have just a text filed which will be string
const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req,res) => {
    const toDo = await ToDoModel.find({}) //this will give us all the todo
    res.send(toDo);
}

module.exports.createToDo = async (req,res) => {
    const {text} = req.body

    ToDoModel
        .create({text})
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data);
        })
}

module.exports.updateToDo = async (req,res) => {
    const {_id,text}= req.body;
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(() => res.send("Updated Successfully...."))
    .catch((err) => console.log(err) )
}

module.exports.deleteToDo = async (req,res) => {
    const {_id}= req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully...."))
    .catch((err) => console.log(err) )
}