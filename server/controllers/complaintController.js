const { Complaint } = require("../models/complaintsModel");
const { User } = require("../models/userModel");

exports.createComplaint = async(req, res)=>{
  const {user, fullName, complaint, address} = req.body;

  if(!(user && fullName && complaint && address)){
    return res.status(400).json({message:"requrie field is empty"});
  }

  const existing_user = await User.findOne({email:user});

  if(!existing_user){
    return res.status(400).json({message:"user is not valid"});
  }

  const response = await Complaint.create({
    name:fullName,
    user,
    complaint,
    address
  })

  res.status(200).json({message:"complain saved"});
}

exports.getComplaint= async(req,res)=>{
    const response = await Complaint.find();
    res.status(200).json({message:"ok" , data:response});
}