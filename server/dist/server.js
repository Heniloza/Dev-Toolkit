import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDb } from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import snippetsRoutes from "./routes/snippetsRoute.js";
import cors from "cors";
import path from "path";
const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();
connectDb();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
//Routes
app.use("/api/auth", authRoutes);
app.use("/api/snippets", snippetsRoutes);
const clientBuildPath = path.resolve(__dirname, "../../client/dist");
if (process.env.NODE_ENV === "production") {
    app.use(express.static(clientBuildPath));
    app.get("*", (req, res) => {
        res.sendFile(path.join(clientBuildPath, "index.html"));
    });
}
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
