import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();

// http://localhost:5000/auth/login
router.post("/login", authController.loginUser);

export const authRoutes = router;
