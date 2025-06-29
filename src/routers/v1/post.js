import express from "express";
import {
  createPostController,
  deletePostByIdController,
  findAllPostsController,
  findPostByIdController,
  updatePostByIdController,
} from "../../controller/postControllers.js";
import { cloudinaryUploader } from "../../config/cloudinaryUploader.js";
import { createUserController } from "../../controller/userControllers.js";

const router = express.Router();

router.get("/", findAllPostsController);

router.get("/:id", findPostByIdController);

router.put("/:id", updatePostByIdController);

router.post("", cloudinaryUploader.single("image"), createPostController);

router.delete("/:id", deletePostByIdController);

router.post("/user", createUserController);

export default router;
