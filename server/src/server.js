import dotenv from "dotenv"
dotenv.config(); // config dotenv

// import app
import app from "./app.js"
import connectDB from "./db/db.js";


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port : ${process.env.PORT}`)
})

// Call connectDB
connectDB()