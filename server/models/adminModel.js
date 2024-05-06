const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const adminSchema = new Schema({
    name:{type:String, require},
    address: {type:String},
    email:{type:String, require},
    password:{type:String, require},
})

const virtual = adminSchema.virtual('id');
virtual.get(function(){
    return this._id;
})

adminSchema.set('toJSON', {
    virtuals:true,
    versionKey:false,
    transform: function(doc,ret) { delete ret._id}

})

exports.admin = mongoose.model("admins", adminSchema) || mongoose.models.admins 