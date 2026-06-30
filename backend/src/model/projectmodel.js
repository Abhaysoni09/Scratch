const mongoose = require("mongoose")

const projectschema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","approved","reject"],
        default:"pending"
    },
    studentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    teacherId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},{timestamps:true})

const projectmodel = mongoose.model("projects",projectschema)

module.exports = projectmodel