import {
  createPost,
  deletePostById,
  findAllPosts,
  findPostById,
  updatePostById,
} from "../repository/postRepository.js";

export const createPostService = async (createPostObject) => {
  const caption = createPostObject?.caption?.trim();
  const image = createPostObject?.image;

  const post = await createPost(caption, image, "685e59580072fb10f5f6f8e6");
  return post;
};

export const findAllPostsService = async (page, limit) => {
  const posts = await findAllPosts(page, limit);
  return posts;
};

export const deletePostByIdService = async (id) => {
  if (!id) return;
  const isPostExist = await findPostById(id);
  if (!isPostExist) return;

  const post = await deletePostById(id);
  return post;
};

export const findPostByIdService = async (id) => {
  const post = await findPostById(id);
  return post;
};

export const updatePostByIdService = async (id, updatedPost) => {
  const post = await updatePostById(id, updatedPost);
  return post;
};
