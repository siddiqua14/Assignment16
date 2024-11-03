import express from "express";
const router = express.Router();
import * as taskController from "../app/controllers/taskController.js";


// Create Route
router.post("/createTask",taskController.createTask);

// Read Route
router.get("/readTask",taskController.readTask);

// Update Route
router.put("/updateTask",taskController.updateTask);

// Delete Route
router.delete("/deleteTask",taskController.deleteTask);


/*
// Request params & query string
router.post("/demo1/:name/:age/:city",taskController.demo1);

// Request Body JSON
router.post("/demo2",taskController.demo2)


// Request Form Data
router.post("/demo3",taskController.demo3)


// Upload A File
router.post("/demo4",taskController.demo4)



// Request Header
router.post("/demo5",taskController.demo5)
*/

export default router;