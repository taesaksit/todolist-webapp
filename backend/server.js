import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./database.js";
import cors from 'cors'


import userRouter from "./routes/userRoute.js";
import todoRouter from "./routes/todosRoute.js";
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(process.env.PATH_API, userRouter);
app.use(process.env.PATH_API, todoRouter);
