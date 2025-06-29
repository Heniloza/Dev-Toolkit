"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const otpControllers_1 = require("../controllers/otpControllers");
const router = express_1.default.Router();
router.post("/signup", authController_1.signupController);
router.post("/login", authController_1.loginController);
router.post("/logout", authController_1.logoutController);
router.get("/check", authMiddleware_1.authMiddleware, authController_1.checkAuth);
router.post("/update-profile", authMiddleware_1.authMiddleware, authController_1.updateProfile);
//OTP Routes
router.post("/generate", otpControllers_1.generateOtpController);
router.post("/verify", otpControllers_1.verifyOtpController);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map