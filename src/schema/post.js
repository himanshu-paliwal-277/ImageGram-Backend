import mongoose from "mongoose";

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
  },
});

const Post = mongoose.model("posts", postSchema);

export default Post;
