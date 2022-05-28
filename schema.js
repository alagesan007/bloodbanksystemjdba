const mongoose = require("mongoose");

const User = new mongoose.Schema({
    RollNo:{
        type:String,
        required:true,
        trim:true
    },
    Age:{
        type:Number,
        required:true
    },
    BloodGroup:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Branch:{
        type:String,
        required:true
    },
    Dep:{
        type:String,
        required:true
    }
    
})

module.exports = mongoose.model('User',User)