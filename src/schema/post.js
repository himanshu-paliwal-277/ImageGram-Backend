import mongoose from "mongoose";
import { required } from "zod/v4-mini";

const postSchema = mongoose.Schema({
  caption: {
    type: String,
    required: true,
    minLength: 5,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});

const Post = mongoose.model("posts", postSchema);

export default Post;
