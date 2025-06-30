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
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const countTotalPosts = async () => {
  const count = await Post.countDocuments();
  return count;
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
    const response = await Post.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updatePostById = async (id, updatedPost) => {
  try {
    const response = await Post.findByIdAndUpdate(id, updatedPost, {
      new: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
