const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const driverModel = new Schema({
    fullName:{type:String, require},
    email:{type:String, require},
    password:{type:String, require},
    contact:{type:String, require},
    address:{type:String, require}
})

exports.Driver = mongoose.model('drivers', driverModel) || mongoose.models.drivers