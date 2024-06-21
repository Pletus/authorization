import express from "express";
import cors from "cors";
import connectDB from "./connectDB.js";
import postRouter from "./routes/posts.js";
import userRouter from "./routes/users.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors('http://http://localhost:5173'));
app.use(express.json());
connectDB();

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(8080, () => {
  console.log(`server is listening on port 8080`);
});
