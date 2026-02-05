import mongoose from "mongoose"

// function to connect MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(
            `${process.env.MONGODB_URI}/edurech-assignment`
        )
        console.log("Database connected Successfully")
    } catch (error) {
        console.log("Database error : ", error)
        process.exit(1) // Exit process if DB connection fails
    }
}

// export connectDB
export default connectDB;