const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const driverModel = new Schema({
    fullName:{type:String, require},
    email:{type:String, require},
    password:{type:String, require},
    contact:{type:String, require},
    address:{type:String, require}
})

const virtual = driverModel.virtual('id');
virtual.get(function(){
    return this._id;
})

driverModel.set('toJSON', {
    virtuals:true,
    versionKey:false,
    transform: function(doc,ret) { delete ret._id}

})

exports.Driver = mongoose.model('drivers', driverModel) || mongoose.models.drivers