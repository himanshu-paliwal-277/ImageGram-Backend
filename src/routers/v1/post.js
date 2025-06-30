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

const router = express.Router();

router.get("/", findAllPostsController);

router.get("/:id", findPostByIdController);

router.put(
  "/:id",
  cloudinaryUploader.single("image"),
  updatePostByIdController
);

router.post(
  "",
  cloudinaryUploader.single("image"),
  validate(zodPostSchema),
  createPostController
);

router.delete("/:id", deletePostByIdController);

export default router;
