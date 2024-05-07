const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const binModel = new Schema({
    binNumber : {type:Number, require},
    locality:{type:String, require},
    landMark:{type:String, require},
    village:{type:String, require},
    driverEmail:{type:String, require},
    driverName:{type:String, require},
    status:{type:String, enum:["On progress", "Completed", "In Complete"]},
    loadType:{type:String, enum:["low", "medium", "high"]},
    cyclePeriod:{type:String, enum:["daily", "twice", "weekly"]}
})

const virtual = binModel.virtual('id');
virtual.get(function(){
    return this._id;
})

binModel.set('toJSON', {
    virtuals:true,
    versionKey:false,
    transform: function(doc,ret) { delete ret._id}

})

exports.Bin = mongoose.model('bins', binModel) || mongoose.models.bins;