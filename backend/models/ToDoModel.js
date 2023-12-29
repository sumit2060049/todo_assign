//it will contain schema for the database or blueprint of how data will be stored or model
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})

const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;