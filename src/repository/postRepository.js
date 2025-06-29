import Post from "../schema/post.js";

export const createPost = async (caption, image, user) => {
  try {
    const post = await Post.create({ caption, image, user });
    return post;
  } catch (error) {
    console.log(error);
  }
};

export const findAllPosts = async (page, limit) => {
  try {
    const posts = await Post.find()
      .skip((page - 1) * limit)
      .limit(limit);
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const findPostById = async (id) => {
  try {
    const post = await Post.findById(id);
    return post;
  } catch (error) {
    console.log(error);
  }
};

export const deletePostById = async (id) => {
  try {
    const post = await Post.findByIdAndDelete(id);
    return post;
  } catch (error) {
    console.log(error);
  }
};

export const updatePostById = async (id, updatedPost) => {
  try {
    const post = await Post.updateOne({ _id: id }, updatedPost);
    return post;
  } catch (error) {
    console.log(error);
  }
};
