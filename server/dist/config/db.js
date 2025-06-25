"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = connectDb;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function connectDb() {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URL);
        console.log('Connected to mongoDb');
    }
    catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
}
//# sourceMappingURL=db.js.map