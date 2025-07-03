import Comment from "../schema/comment.js";

export const createComment = async (content, user, post) => {
  try {
    const comment = await Comment.create({ content, user, post });
    return comment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const findCommentById = async (id) => {
  try {
    const comment = await Comment.findById(id);
    return comment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteCommentById = async (id) => {
  try {
    const comment = await Comment.findByIdAndDelete(id);
    return comment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const toggleLikeInComment = async (id, user) => {
  try {
    const comment = await Comment.findById(id);
    if (!comment.likes.includes(user)) {
      comment.likes.push(user);
    } else {
      comment.likes = comment.likes.filter(
        (userId) => userId.toString() !== user
      );
    }
    const response = await comment.save();
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
