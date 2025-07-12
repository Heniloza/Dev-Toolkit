import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDb } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import snippetsRoutes from "./routes/snippetsRoute.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;
connectDb();
app.set('trust proxy', 1);
const allowedOrigins = [
    "http://localhost:5173",
    "https://dev-mate-a-developer-toolkit.onrender.com"
];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));
//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
//Routes
app.use("/api/auth", authRoutes);
app.use("/api/snippets", snippetsRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
