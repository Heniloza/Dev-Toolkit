import express from "express";
import { checkAuth, loginController, logoutController, signupController, updateProfile } from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { generateOtpController, verifyOtpController } from "../controllers/otpControllers.js";
const router = express.Router();
router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);
router.get("/check", authMiddleware, checkAuth);
router.post("/update-profile", authMiddleware, updateProfile);
//OTP Routes
router.post("/generate", generateOtpController);
router.post("/verify", verifyOtpController);
export default router;
