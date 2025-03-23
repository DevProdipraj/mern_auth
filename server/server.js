import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/mongoDB.js"; 
import {authRouters} from "./routers/authRoutes.js"


dotenv.config(); 

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: '*' }));

app.get("/", (req, res) => res.send("API Is Working!!"));
app.use("/api/auth", authRouters)

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
