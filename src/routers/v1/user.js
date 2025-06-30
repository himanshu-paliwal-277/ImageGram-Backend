import express from "express";
import { signup } from "../../controller/userControllers.js";
import { validate } from "../../validation/zodValidator.js";
import { zodSignUpSchema } from "../../validation/zodSignUpSchema.js";

const router = express.Router();

router.post("/signup", validate(zodSignUpSchema), signup);

export default router;
