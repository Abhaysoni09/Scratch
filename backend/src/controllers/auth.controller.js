const usermodel = require("../model/usermodel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function register(req,res){
    const {username,email,password,role} = req.body
    const userexist = await usermodel.findOne({
        $or:[
            {username},
            {email}
        ]
    })
    if(userexist){
        return res.status(401).json({
            message:"user already exist"
        })
    }
    const hash = await bcrypt.hash(password,10)
    const user = await usermodel.create({
        username,
        email,
        password:hash,
        role
    })
    const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(200).json({
        message:"Register Successfully"
    })
}
const search = async (req,res)=>{
    try {
            const {username} = req.query
            const user = await usermodel.findOne({username})
            if(user){
                return res.json({message:"Already there"})
            }
            res.json({message:"Available"})
        } catch (error) {
            res.json(error)
        }
}
const login= async (req,res)=>{
    const {identity,password} = req.body
    const user = await usermodel.findOne({
        $or:[
            {username:identity},
            {email:identity}
        ]
    })
    if(!user){
        return res.status(401).json({
            message:"user not registered"
        })
    }
    const ismatch = await bcrypt.compare(password,user.password)
    if(!ismatch){
        return res.status(401).json({
            message:"Invalid password"
        })
    }

    if(user.role){

    }
    const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(200).json({
        message:"Login Successfully"
    })
}

const me = (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        res.json({
            user: decoded,
        });
    } catch (error) {
        res.status(401).json({
            message: "Invalid token",
        });
    }
};

module.exports = {register,login,search,me}