import { Router } from "express"
import { applyForJob } from "../controllers/jobApplication.controller.js"

const router = Router();

router.post("/apply", applyForJob)

export default router;