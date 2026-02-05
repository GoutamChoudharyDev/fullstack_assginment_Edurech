import { Router } from "express"
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";

const router = Router();

// api routes
router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/logout", logoutUser)

export default router;