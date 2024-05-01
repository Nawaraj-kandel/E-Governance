const bcrypt = require('bcrypt');
const { User } = require('../models/userModel');

exports.createUser = async(req, res)=>{
    const {email, password, fullname,localGoverment, wardNo, village, tollname} = req.body;

    if(!(email&& password && fullname && localGoverment && wardNo && village)){
        return res.status(400).json({message:"require field is empty"});
    }
    const existingUser = await User.findOne({email:email});

    if(existingUser){
        return res.status(400).json({message:"user already exist"});
     }

     const pattern = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?:[a-zA-Z0-9-]+\.)?user\.com$/;

     if(pattern.test(email)){
        const hashPass = await bcrypt.hash(password, 10);
  
        const user= await User.create({
           fullname,
           localGoverment,
           village,
           wardNo,
           tollname,
           email,
           password:hashPass,
  
        })
        user.password = undefined;
        res.status(201).json({message:"User created successfully", data:user})
  
     }
     else{
       return res.status(400).json({message:"Invalid email format"});
     }
}

exports.checkUser = async(req, res)=>{
    try{
      const {email, password} = req.body;
   
      if(!(email&& password)){
       return res.status(400).json({message:"please provide email and password"});
      }
    
      if(email){
       const check_email = await User.findOne({email:email});
       const comparePass = await bcrypt.compare(password , check_email.password);
    
        if(check_email.email == email && comparePass){
          return res.status(200).json({message:"login successfully"})
        }
        else{
          return res.status(400).json({message:"wrong credentials"})
        }
      }
    }
    catch(error){
      return res.status(500).json({message:"internal server problem"});
    }
   }