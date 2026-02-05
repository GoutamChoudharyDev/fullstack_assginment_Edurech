import { Router } from "express"
import { createContact } from "../controllers/contact.controller.js";

const router = Router();

// api routes
router.post("/contact", createContact)

export default router;
