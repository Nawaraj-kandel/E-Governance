const bcrypt = require('bcrypt');
const { Driver } = require('../models/driverModel');

exports.createDriver = async(req, res)=>{

    const {email, password, fullName,address,contact} = req.body;

    if(!(email&& password && fullName && address && contact)){
        return res.status(400).json({message:"require field is empty"});
    }

    const existingUser = await Driver.findOne({email:email});

    if(existingUser){
        return res.status(400).json({message:"user already exist"});
     }
    
     const pattern = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?:[a-zA-Z0-9-]+\.)?driver\.com$/;
    
     if(pattern.test(email)){
        const hashPass = await bcrypt.hash(password, 10);
        const user= await Driver.create({
           fullName,
           address,
           contact,
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

exports.getDriver = async(req,res)=>{
  const data = await Driver.find();
  res.status(200).json({data:data});
}

exports.checkDriver = async(req, res)=>{
    try{
      const {email, password} = req.body;
   
      if(!(email&& password)){
       return res.status(400).json({message:"please provide email and password"});
      }
    
      if(email){
       const check_email = await Driver.findOne({email:email});
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