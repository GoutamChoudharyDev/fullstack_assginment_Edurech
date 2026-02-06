import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js";
import contactRouter from "./routes/contact.routes.js";
import jobApplicationRoutes from "./routes/jobAplicationRoutes.js";

// Build express app
const app = express();

// Enable Cors
app.use(cors({
    origin: "*",
    credentials: true
}));

// Middlewares
app.use(express.json())
app.use(cookieParser())

// Routes
app.use("/api/auth/user", userRouter)
app.use("/api", contactRouter)
app.use("/api/jobs", jobApplicationRoutes)

// export app
export default app;