const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const complaintModel = new Schema({
    user:{type:String, require},
    name:{type:String, require},
    complaint:{type:String, require},
    address:{type:String, require}
})

const virtual = complaintModel.virtual('id');
virtual.get(function(){
    return this._id;
})

complaintModel.set('toJSON', {
    virtuals:true,
    versionKey:false,
    transform: function(doc,ret) { delete ret._id}

})

exports.Complaint = mongoose.model("complaints", complaintModel) || mongoose.models.complaints;