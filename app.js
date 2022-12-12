const express=require('express');
const app=express();
const bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
require("./database/database.js");


app.get("/",(req,res)=>{
})

app.post("/registerData",async(req,res)=>{
       const {username,email,password,confirmpass,phone}=req.body;
       
       if(username!=="" && email!=="" && password!=="" && confirmpass!=="" && phone!==""){
           return res.status(200).json("successfull")
       }

       else{
        return res.status(422).json("");
       }
})

app.listen(5000,(res,req)=>{
    console.log("hi")
})