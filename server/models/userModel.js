const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const userModel = new Schema({
   fullName:{type:String, require},
   localGoverment: {type:String, require},
   wardNo:{type:Number, require},
   village:{type:String, require},
   tollName : {type:String},
   email:{type:String, require},
   password :{type:String, require}
})

const virtual = userModel.virtual('id');
virtual.get(function(){
    return this._id;
})

userModel.set('toJSON', {
    virtuals:true,
    versionKey:false,
    transform: function(doc,ret) { delete ret._id}

})

exports.User = mongoose.model('users', userModel) ||mongoose.models.users