const { Bin } = require("../models/binModel");
const { Driver } = require("../models/driverModel");

exports.createBin = async(req, res)=>{
    const { binNumber,  locality,landMark,village,driverEmail,driverName,loadType, cyclePeriod} = req.body;

    if(!(binNumber && locality && landMark && village && driverEmail && driverName && loadType && cyclePeriod)){
        return res.status(400).json({
            message:"required field is empty"
        })
    }

    const pattern = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?:[a-zA-Z0-9-]+\.)?driver\.com$/;
    if(!(pattern.test(driverEmail))){
        return res.status(400).json({message:"invalid driver email format"});
    }

    const existingDriver = await Driver.findOne({email:driverEmail});
     
    if(!(existingDriver)){
        return res.status(400).json({message:"driver is not available"})
    }

    const bin =  await Bin.create({
        binNumber: +binNumber,
        locality,
        landMark,
        village,
        driverEmail,
        driverName,
        loadType,
        cyclePeriod
    })

    res.status(200).json({message:"bin created successfully"});
}

exports.getBin= async(req,res)=>{
    const response = await Bin.find();
    res.status(200).json({data:response});
}

exports.getSpecificBin= async(req,res)=>{

    const {id} = req.params;
    const response = await Bin.findById(id);
    res.status(200).json({data:response});

}



exports.updateBin = async(req, res)=>{
    const {id} = req.params;
    const response = await Bin.findByIdAndUpdate(id, req.body, {new:true});
    res.status(200).json({message:"updated successfully", data:response}); 
}


exports.deleteBin = async(req,res)=>{
    const {id} = req.params;
     const response = await Bin.findByIdAndDelete(id);
     res.status(200).json({message:"delete successfully"});
}