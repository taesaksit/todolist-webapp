import express from "express";
import { createTodo, getTodos } from "../controller/todosController.js";
import { verifyToken } from "../middleware/auth.js";
const todoRouter = express.Router();

todoRouter.post("/todos", verifyToken, createTodo);
todoRouter.get("/todos", verifyToken, getTodos);

export default todoRouter;
