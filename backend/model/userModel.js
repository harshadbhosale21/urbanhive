import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    password: {
        type: String,
        trime: true,
        require: true
    }
},
    { timestamps: true }
)

const User = mongoose.model('User', userModel);

export default User;