import mongoose from "mongoose";
const otpTokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    attemptCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });
const OTPTOKEN = mongoose.model("otpToken", otpTokenSchema);
export default OTPTOKEN;
