import mongoose, { Schema } from "mongoose";

const jobApplicationSchema = new Schema({
    jobId: {
        type: String,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
)

export const JobApplication = mongoose.model("JobApplication", jobApplicationSchema)