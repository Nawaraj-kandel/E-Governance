const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const userModel = new Schema({
   fullName:{type:String, require},
   localGoverment: {type:String, require},
   wardNo:{type:Number, require},
   village:{type:String, require},
   tollName : {type:String},
   email:{type:String, require},
   password :{type:String}
})

exports.User = mongoose.model('users', userModel) ||mongoose.models.users