import express from "express";
import { signup, signin } from "../../controller/userControllers.js";
import { validate } from "../../validation/zodValidator.js";
import { zodSignUpSchema } from "../../validation/zodSignUpSchema.js";
import { zodSignInSchema } from "../../validation/zodSignInSchema.js";

const router = express.Router();

/**Add commentMore actions
 * @swagger
 * /users/signup:
 *  post:
 *      summary: Signup a new user
 *      description: Signup a new user
 * 
 */
router.post("/signup", validate(zodSignUpSchema), signup);

/**
 * @swagger
 * /users/signin:
 *  post:
 *      summary: Signin a new user
 *      description: Signin a new user
 * 
 */
router.post("/signin", validate(zodSignInSchema), signin);

export default router;
