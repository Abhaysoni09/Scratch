const projectmodel = require("../model/projectmodel")
const uploadfile = require("../services/cloud.service")
const usermodel = require("../model/usermodel")
const jwt = require("jsonwebtoken")

const submitproject= async (req,res) =>{
    try {
    const {title,description,teacherId} = req.body    
    const result = await uploadfile(req.file.buffer)
    const project = await projectmodel.create({
        image:result.url,
        title,
        description,
        studentId:req.user.id,
        teacherId
    })
    res.status(200).json({
        message:"Project Created Successfully"
    })
    } catch (error) {
        console.log(error)
    }
}

const allteachers=async(req,res)=>{
    const teachers = await usermodel.find({
        role:"teacher"
    })
    res.status(200).json({
        message:"fetch succesfully",
        teachers
    })
}
const approve = async (req,res)=>{
    const id = req.params.id
    const project = await projectmodel.findById(id)
    project.status = "approved"
    project.save()
    res.status(200).json({message:"Approved"})
}
const reject = async (req,res)=>{
    const id = req.params.id
    const project = await projectmodel.findById(id)
    project.status = "reject"
    project.save()
    res.status(200).json({message:"Rejected"})
}

const submittedproject=async (req,res)=>{
    const id = req.user.id
    const project = await projectmodel.find({
        teacherId: id
    })
    res.send(project)
}

const createdprojects=async(req,res)=>{
    const id = req.user.id
    console.log(id)
    const project = await projectmodel.find({
        studentId:id
    }).populate("teacherId")
    res.send(project)
}

const allstudent=async(req,res)=>{
    const stu = await usermodel.find({
        role:"student"
    })
    res.send(stu)
}
const allproject=async(req,res)=>{
    const project = await projectmodel.find()
    res.send(project)
}

module.exports ={submitproject,allteachers,createdprojects,submittedproject,reject,approve,allstudent,allproject}