"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOtp = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendOtp = async (email, otp) => {
    const transporter = nodemailer_1.default.createTransport({
        secure: true,
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    });
    const mailOptions = {
        from: `"DevMate" <${process.env.MAIL_USER}>`,
        to: email,
        subject: "Yout OTP Code",
        text: `Your OTP is ${otp}.It will expire in 5 minutes`
    };
    await transporter.sendMail(mailOptions);
};
exports.sendOtp = sendOtp;
//# sourceMappingURL=sendOtp.js.map