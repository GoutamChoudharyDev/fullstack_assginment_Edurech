import mongoose, { Schema } from "mongoose";

// create userScema
const userScema = new Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
},
    { timestamps: true }
)

// create model and export it
export const User = mongoose.model("User", userScema);