import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
    required: true,
  },
  parentComment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "comments",
    default: null,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

const Comment = mongoose.model("comments", commentSchema);

export default Comment;
