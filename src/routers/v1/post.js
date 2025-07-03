import express from "express";
import {
  createPostController,
  deletePostByIdController,
  findAllPostsController,
  findPostByIdController,
  toggleLikeInPostController,
  updatePostByIdController,
} from "../../controller/postControllers.js";
import { cloudinaryUploader } from "../../config/cloudinaryUploader.js";
import { validate } from "../../validation/zodValidator.js";
import { zodPostSchema } from "../../validation/zodPostSchema.js";
import { isAdmin, isAuthenticated } from "../../middleware/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /posts/:
 *   get:
 *     description: Returns all posts
 *     responses:
 *       200:
 *         description: Returns all posts
 */
router.get("/", findAllPostsController);

router.get("/:id", findPostByIdController);

router.put(
  "/:id",
  isAuthenticated,
  isAdmin,
  cloudinaryUploader.single("image"),
  updatePostByIdController
);

/**Add commentMore actions
 * @swagger
 * /posts/:
 *  post:
 *      summary: Create a new post
 *      description: Create a new post
 * 
 */
router.post(
  "/",
  isAuthenticated,
  cloudinaryUploader.single("image"),
  validate(zodPostSchema),
  createPostController
);

router.delete("/:id", isAuthenticated, deletePostByIdController);
router.post("/:id/like", isAuthenticated, toggleLikeInPostController);

export default router;
