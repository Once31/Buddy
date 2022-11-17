import express from "express";
const router = express.Router();

import todosController from "../controllers/todosController.js";

router.get("/", todosController);

export default router;
