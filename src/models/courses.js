const mongoose = require("mongoose");
const skillup = new mongoose.Schema({
    course_name :{
        type:String,
        required:true
    },
    fees :{
        type:Number,
        required:true
    },
    lectures :{
        type:Number,
        required:true
    },
    language :{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    level :{
        type:String,
        required:true
    },
    // image:{
    //     data: Buffer,
    //     contentType: String,
    //     // type:String,
    //     // required:true
    // },
    category :{
        type:String,
        required:true
    }
   
})

const Course = new mongoose.model("course",skillup);
module.exports = Course;