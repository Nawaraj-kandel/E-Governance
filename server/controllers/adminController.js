const {admin} = require('../models/adminModel');
const bcrypt = require('bcrypt');


//create admin
exports.createAdmin = async(req,res)=>{
  try{
   const {name,email, password ,address } = req.body;

   const existingUser = await admin.findOne({email:email});
   if(existingUser){
      return res.status(400).json({message:"user already exist"});
   }

   const pattern = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?:[a-zA-Z0-9-]+\.)?admin\.com$/;

   if(pattern.test(email)){
      const hashPass = await bcrypt.hash(password, 10);

      const user= await admin.create({
         name,
         address,
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
  catch(error){
   return res.status(500).json({message:"internal server error"});

  }
}


//check admin during login

exports.checkAdmin = async(req, res)=>{
 try{
   const {email, password} = req.body;

   if(!(email&& password)){
    return res.status(400).json({message:"please provide email and password"});
   }
 
   if(email){
    const check_email = await admin.findOne({email:email});
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
