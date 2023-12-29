const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
const cors = require('cors'); 

const routes= require('./routes/ToDoRoutes')

require('dotenv').config()


//connect to database
connectDB();

const app=express();
const PORT= process.env.port|| 5000


app.use(express.json())
app.use(cors())

// mongoose
// .connect(process.env.MONGODB_URL)
// .then(() => console.log(`Connect To MongoDB...`))
// .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT,() => console.log(`Listening on: ${PORT}`))

//8EzvobRYKcWdKMxs