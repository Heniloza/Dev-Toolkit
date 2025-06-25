"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const otpTokenSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
const OTPTOKEN = mongoose_1.default.model("otpToken", otpTokenSchema);
exports.default = OTPTOKEN;
//# sourceMappingURL=optTokenModel.js.map