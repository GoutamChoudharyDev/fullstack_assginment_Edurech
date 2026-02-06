import { JobApplication } from "../models/jobApplication.model.js";

const applyForJob = async (req, res) => {
    try {
        const { jobId, fullName, email, phone, reason } = req.body;

        // validation
        if (!jobId || !fullName || !email || !phone || !reason) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        await JobApplication.create({
            jobId,
            fullName,
            email,
            phone,
            reason,
        });

        return res.status(201).json({
            success: true,
            message: "Job applied successfully",
        });
    } catch (error) {
        console.error("Job apply error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
}

export { applyForJob };