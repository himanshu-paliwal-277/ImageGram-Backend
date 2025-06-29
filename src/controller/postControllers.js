import {
  createPostService,
  deletePostByIdService,
  findAllPostsService,
  findPostByIdService,
  updatePostByIdService,
} from "../services/postService.js";

export const createPostController = async (req, res) => {
  if (!req.body?.caption)
    return res
      .status(400)
      .json({ success: false, message: "caption is required." });

  const post = await createPostService({
    caption: req.body.caption,
    image: req.file.path,
  });

  return res.status(201).json({
    success: true,
    message: "post created successfully.",
    data: post,
  });
};

export const findAllPostsController = async (req, res) => {
  const posts = await findAllPostsService();
  return res.status(200).json({
    success: true,
    message: "post fetch successfully",
    data: posts,
  });
};

export const deletePostByIdController = async (req, res) => {
  const { id } = req.params;

  const post = await deletePostByIdService(id);
  return res.status(200).json({
    success: true,
    message: "post deleted successfully",
    data: post,
  });
};

export const findPostByIdController = async (req, res) => {
  const { id } = req.params;

  const post = await findPostByIdService(id);
  return res.status(200).json({
    success: true,
    message: "post fetch successfully",
    data: post,
  });
};

export const updatePostByIdController = async (req, res) => {
  const { id } = req.params;

  const post = await updatePostByIdService(id, req.body);
  return res.status(200).json({
    success: true,
    message: "post updated successfully",
    data: post,
  });
};
