import { deleteCommentById } from "../repository/commentRepository.js";
import {
  createCommentService,
  findCommentService,
  toggleLikeInCommentService,
} from "../services/commentService.js";

export const createCommentController = async (req, res) => {
  try {
    const commentData = req.body;
    commentData.user = req.user._id;
    const response = await createCommentService(commentData);
    return res.status(201).json({
      success: true,
      message: "Comment created successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getCommentByIdController = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await findCommentService(commentId);
    return res.status(200).json({
      success: true,
      message: "Comment fetched successfully",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res
        .status(error.status)
        .json({ success: false, message: error.message });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const deleteCommentController = async (req, res) => {
  try {
    const commentId = req.params.id;
    const response = await deleteCommentById(commentId);
    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const toggleLikeInCommentController = async (req, res) => {
  try {
    const commentId = req.params.id;
    const user = req.user._id;
    const response = await toggleLikeInCommentService(commentId, user);
    return res.status(200).json({
      success: true,
      message: "comment updated successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
