import {
  createComment,
  deleteCommentById,
  findCommentById,
  toggleLikeInComment,
} from "../repository/commentRepository.js";

export const createCommentService = async (commentData) => {
  try {
    const { content, user, post } = commentData;

    const comment = await createComment(content, user, post);
    return comment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const findCommentService = async (id) => {
  try {
    const comment = await findCommentById(id);
    if (!comment) {
      throw {
        status: 404,
        message: "Comment not found",
      };
    }
    return comment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteCommentService = async (id) => {
  try {
    const comment = await deleteCommentById(id);
    return comment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const toggleLikeInCommentService = async (commentId, user) => {
  const response = await toggleLikeInComment(commentId, user);
  return response;
};