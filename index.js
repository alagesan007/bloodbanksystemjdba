const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Router = require('./router.js')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use("/",Router);
const PORT = process.env.port || 5000;
const uri = process.env.MONGODB_CONNECTION_STRING;

app.get("/",(req,res)=>{
    res.json("server start")
})

//connection

mongoose.connect(uri,{
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


