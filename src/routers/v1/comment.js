import express from "express";
import {
  createCommentController,
  deleteCommentController,
  getCommentByIdController,
  toggleLikeInCommentController,
} from "../../controller/commentController.js";
import { isAuthenticated } from "../../middleware/authMiddleware.js";
import { zodCommentSchema } from "../../validation/zodCommentSchema.js";
import { validate } from "../../validation/zodValidator.js";

const router = express.Router();

router.post(
  "/",
  isAuthenticated,
  validate(zodCommentSchema),
  createCommentController
);
router.get("/:id", getCommentByIdController);
router.delete("/:id", isAuthenticated, deleteCommentController);
router.post("/:id/like", isAuthenticated, toggleLikeInCommentController);

export default router;
