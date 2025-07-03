import {
  countTotalPosts,
  createPost,
  deletePostById,
  findAllPosts,
  findPostById,
  toggleLikeInPost,
  updatePostById,
} from "../repository/postRepository.js";

export const createPostService = async (createPostObject) => {
  const caption = createPostObject?.caption?.trim();
  const image = createPostObject?.image;
  const user = createPostObject?.user;

  const post = await createPost(caption, image, user);
  return post;
};

export const findAllPostsService = async (page, limit) => {
  const posts = await findAllPosts(page, limit);
  const totalPosts = await countTotalPosts();
  const totalPage = Math.ceil(totalPosts / limit);

  return {
    posts: posts,
    totalPosts: totalPosts,
    totalPage: totalPage,
  };
};

export const deletePostByIdService = async (id, user) => {
  // the user who owner of the post can delete the post

  const post = await findPostById(id);

  if (!post) {
    throw {
      status: 404,
      message: "Post not found",
    };
  }

  if (post?.user.toString() !== user) {
    throw {
      status: 401,
      message: "Unauthorized",
    };
  }

  const response = await deletePostById(id);
  // also delete the image from cloudinary
  return response;
};

export const findPostByIdService = async (id) => {
  const post = await findPostById(id);
  return post;
};

export const updatePostByIdService = async (id, updatedPost) => {
  const response = await updatePostById(id, updatedPost);
  // also update the image and delete old image from cloudinary
  return response;
};

export const toggleLikeInPostService = async (postId, user) => {
  const response = await toggleLikeInPost(postId, user);
  return response;
};
