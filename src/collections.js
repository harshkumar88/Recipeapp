const mongoose=require("mongoose");

const RegisterSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
        
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
    },
    confirmpass:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
    }
})

const Register=mongoose.model("Register",RegisterSchema);

module.exports={
    Register
};