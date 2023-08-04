import { Router } from "express";
//import Task from "../models/Task";
import { renderTask } from "../controlers/task.controler";
import { createTask } from "../controlers/task.controler";
import { editTask } from "../controlers/task.controler";
import { updateTask } from "../controlers/task.controler";
import { toggleDoneTask } from "../controlers/task.controler";
import { deleteTask } from "../controlers/task.controler";
const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createTask);
router.get("/edit/:id", editTask);
router.post("/edit/:id", updateTask);

router.get("/delete/:id", deleteTask);

router.get("/toggleDone/:id", toggleDoneTask);

export default router;
