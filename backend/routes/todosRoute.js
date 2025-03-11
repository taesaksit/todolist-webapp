import express from "express";
import {
  createTodo,
  deleteTodos,
  getTodos,
  updateTodos,
} from "../controller/todosController.js";
import { verifyToken } from "../middleware/auth.js";
const todoRouter = express.Router();

todoRouter.get("/todos", verifyToken, getTodos);
todoRouter.post("/todos", verifyToken, createTodo);
todoRouter.put("/todos/:id", verifyToken, updateTodos);
todoRouter.delete("/todos/:id", verifyToken, deleteTodos);
export default todoRouter;
