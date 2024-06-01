const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const binModel = new Schema({
    binNumber: { type: Number, required: true },
    locality: { type: String, required: true },
    landMark: { type: String, required: true },
    village: { type: String, required: true },
    driverEmail: { type: String, required: true },
    driverName: { type: String, required: true },
    status: { type: String, default: "In Complete" },
    loadType: { type: String, enum: ["low", "medium", "high"] },
    cyclePeriod: { type: String, enum: ["daily", "twice", "weekly"] },
    location: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
});

const virtual = binModel.virtual('id');
virtual.get(function () {
    return this._id;
});


binModel.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id; }
});

binModel.pre('save', function (next) {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    if (currentHour === 0 && currentMinutes === 42) {
        this.status = "Incomplete";
    }
    next();
});

exports.Bin = mongoose.model('bins', binModel) || mongoose.models.bins;
