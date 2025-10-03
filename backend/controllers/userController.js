import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";




const loginUser = async (req, res) => {
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email});

        if(!user){
            return res.status(400).json({msg:"User does not exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg:"Invalid Credentials"})
        }
        const token = createToken(user._id);
        res.status(200).json({user,token})
        
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"Server Error"})
        
    }
    
    
}
const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1d"})
}
const registerUser = async (req, res) => {
   try{
    //cheking is user already exist
    const exists =await userModel.findOne({email})
    if(exists) {
        return res.json({success:false,message:"user already exist"})
    }
    //vALODATING
    if(!validator.isEmail(email)){
        return res.json({success:false,message:"email is not valid"})
    }
    if(password.length < 8){
        return res.json({success:false,message:"password length should be greater than 6"})
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt);

    const newUser = new userModel({
        name:name,
        email:email,
        password:hashPassword
    })
    const user = await newUser.save()
    const token = createToken(user._id)
    return res.json({success:true,message:"user created successfully",token})

    }catch(error){
        console.log(error)
        return res.json({success:false,message:"Erro"})

    }
}

export{loginUser,registerUser}