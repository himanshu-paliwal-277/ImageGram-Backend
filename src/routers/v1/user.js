import express from "express";
import { createUserController } from "../../controller/userControllers.js";

const router = express.Router();

router.post("/", createUserController);

export default router;
