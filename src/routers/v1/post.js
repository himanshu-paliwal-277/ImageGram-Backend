import express from "express";
import {
  createPostController,
  deletePostByIdController,
  findAllPostsController,
  findPostByIdController,
  updatePostByIdController,
} from "../../controller/postControllers.js";
import { cloudinaryUploader } from "../../config/cloudinaryUploader.js";
import { validate } from "../../validation/zodValidator.js";
import { zodPostSchema } from "../../validation/zodPostSchema.js";
import { isAuthenticated } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", isAuthenticated, findAllPostsController);

router.get("/:id", findPostByIdController);

router.put(
  "/:id",
  cloudinaryUploader.single("image"),
  updatePostByIdController
);

router.post(
  "",
  isAuthenticated,
  cloudinaryUploader.single("image"),
  validate(zodPostSchema),
  createPostController
);

router.delete("/:id", isAuthenticated, deletePostByIdController);

export default router;
