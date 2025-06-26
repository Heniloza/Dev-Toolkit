import express,{Request,Response} from "express"
import dotenv from "dotenv"
dotenv.config();
import { connectDb } from "./config/db";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes"
import cors from "cors"
const app = express();
const PORT = 3000;
connectDb();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Middlewares
app.use(express.urlencoded(true));
app.use(express.json());
app.use(cookieParser())

//Routes
app.use("/api/auth",authRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});