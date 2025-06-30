"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const snippetSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
}, { timestamps: true });
const SNIPPETS = mongoose_1.default.model("Snippets", snippetSchema);
exports.default = SNIPPETS;
//# sourceMappingURL=snippets.js.map