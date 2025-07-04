import express,{Request,Response} from "express"
import dotenv from "dotenv"
dotenv.config();
import { connectDb } from "./config/db.js";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes.js"
import snippetsRoutes from "./routes/snippetsRoute.js"
import cors from "cors"
const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

//Routes
app.use("/api/auth",authRoutes)
app.use("/api/snippets",snippetsRoutes)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});