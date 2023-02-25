require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Router = require('./router.js')
const cors = require('cors');


const app = express();


const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("server start")
})

app.use("/",Router);

//connection


mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
    useNewUrlParser:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("database connection established succesfully.");
})

app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING ON 5000 PORT.");
})


