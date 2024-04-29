const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const adminSchema = new Schema({
    name:{type:String, require},
    address: {type:String},
    email:{type:String, require},
    password:{type:String, require},
})

exports.admin = mongoose.model("admins", adminSchema) || mongoose.models.admins 