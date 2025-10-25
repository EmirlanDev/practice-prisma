import { Router } from "express";
import todoControllers from "./todo.controllers";

const router = Router();

router.get("/get-all", todoControllers.getAllData);
router.post("/create", todoControllers.createData);
router.put("/update/:id", todoControllers.upadateData);
router.patch("/update/:id", todoControllers.patchData);
router.delete("/delete/:id", todoControllers.deteleData);

export default router;
