const mongoose = require('mongoose');

const UserInforSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    fullName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String },
        postalCode: { type: String },
        country: { type: String, default: "Sri Lanka" }
    },
    profilePicture: { type: String },
    gender: { type: String, enum: ['male', 'female', 'other', 'not-set'], default: 'not-set' },
    birthday: { type: Date },
    lastLogin: { type: Date },
    profileCompleted: { type: Boolean, default: false }
}, { timestamps: true });

const UserInfor = mongoose.model('UserInfor', UserInforSchema);

module.exports = UserInfor;