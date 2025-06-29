"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = exports.updateProfile = exports.logoutController = exports.loginController = exports.signupController = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const signupController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All field are required"
            });
        }
        if (password.length <= 6) {
            return res.status(400).json({
                message: "Password must be at least 6 character"
            });
        }
        const existingUser = await userModel_1.default.findOne({ email, username });
        if (existingUser)
            return res.status(400).json({ suucess: false, message: "User already exist" });
        const hashedPassword = await bcryptjs_1.default.hash(password, 12);
        const newUser = await userModel_1.default.create({
            username,
            email,
            password: hashedPassword,
        });
        res.status(201).json({ user: newUser, message: "New User created" });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to signup",
            error
        });
    }
};
exports.signupController = signupController;
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "All field are required"
            });
        }
        if (password.length <= 6) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }
        const user = await userModel_1.default.findOne({ email });
        if (!user)
            return res.status(404).json({ message: "User not found" });
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invalid credentials" });
        res.status(200).json({
            user,
            message: "User logged in successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to Login",
            error
        });
    }
};
exports.loginController = loginController;
const logoutController = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "Logged out successfully" });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to lofout"
        });
    }
};
exports.logoutController = logoutController;
const updateProfile = async (req, res) => {
    try {
        const { profileImage } = req.body;
        const userId = req.user._id;
        if (!profileImage || !userId) {
            return res.status(404).json({
                message: "Image and userid are required"
            });
        }
        const uploadResponse = await cloudinary_1.default.uploader.upload(profileImage);
        const updateUser = await userModel_1.default.findByIdAndUpdate(userId, {
            profileImage: uploadResponse.secure_url
        }, { new: true });
        res.status(200).json({
            message: "Profile picture updated",
            user: updateUser
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error in updating profile."
        });
    }
};
exports.updateProfile = updateProfile;
const checkAuth = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await userModel_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.checkAuth = checkAuth;
//# sourceMappingURL=authController.js.map