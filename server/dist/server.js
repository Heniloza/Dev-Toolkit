"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_1 = require("./config/db");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3000;
(0, db_1.connectDb)();
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true,
}));
//Middlewares
app.use(express_1.default.urlencoded(true));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
//Routes
app.use("/api/auth", authRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map