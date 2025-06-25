import express from "express"
import { checkAuth, loginController, logoutController, signupController } from "../controllers/authController";
import { authMiddleware } from "../middleware/authMiddleware";
import { generateOtpController, verifyOtpController } from "../controllers/otpControllers";

const router = express.Router();

router.post("/signup",signupController)
router.post("/login",loginController)
router.post("/logout",logoutController)
router.get("/check",authMiddleware,checkAuth)

//OTP Routes
router.post("/generate",generateOtpController)
router.post("/verify",verifyOtpController)

export default router