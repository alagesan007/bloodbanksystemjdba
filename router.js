const express = require("express");
const User = require("./schema.js")
const route = express.Router();

//post method
route.post("/",async(req,res)=>{
    console.log(req.body);
    
    const data =new User({
        RollNo : req.body.RollNo,
        Age : req.body.Age,
        BloodGroup : req.body.BloodGroup,
        Email : req.body.Email,
        Branch : req.body.Branch,
        Dep:req.body.Dep        
    })
    
    await data.save();
    res.json(data);
})



//get method
route.get("/get",async(req,res)=>{
    var finddata = await User.find();
    res.json(finddata);
})


module.exports = route;