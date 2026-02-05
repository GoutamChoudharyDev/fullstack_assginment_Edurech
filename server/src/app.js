import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js";

// Build express app
const app = express();

// Enable Cors
app.use(cors());

// Middlewares
app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/api/auth/user", userRouter)

// export app
export default app;