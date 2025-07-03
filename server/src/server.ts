import express,{Request,Response} from "express"
import dotenv from "dotenv"
dotenv.config();
import { connectDb } from "./config/db";
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes"
import snippetsRoutes from "./routes/snippetsRoute"
import cors from "cors"
import path from "path"
const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve()
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
app.use("/api/snippets",snippetsRoutes)

if(process.env.NODE_ENV="production"){
  app.use(express.static(path.join(__dirname,"../../client/dist")))

  app.get("*",(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"../../client","dist","index.html"))
  })

}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});