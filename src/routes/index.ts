import { Router } from "express";
import todoRouter from "../modules/todo/todo.routes";
const globalRouter = Router();
globalRouter.use("/todo", todoRouter);
export default globalRouter;
