const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const binModel = new Schema({
    binNumber : {type:Number, require},
    locality:{type:String, require},
    landMark:{type:String, require},
    village:{type:String, require},
    driverEmail:{type:String, require},
    driverName:{type:String, require},
    loadType:{type:String, enum:["low", "medium", "high"]},
    cyclePeriod:{type:String, enum:["daily", "twice", "weekly"]}
})

exports.Bin = mongoose.model('bins', binModel) || mongoose.models.bins;