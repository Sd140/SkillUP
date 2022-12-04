const mongoose = require("mongoose");
const skillup = new mongoose.Schema({
    firstname :{
        type:String,
        required:true
    },
    lastname :{
        type:String,
        required:true
    },
    username :{
        type:String,
        unique:true,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
    }
   
})

const Register = new mongoose.model("user",skillup);
module.exports = Register;