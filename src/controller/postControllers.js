import {
  createPostService,
  deletePostByIdService,
  findAllPostsService,
  findPostByIdService,
  updatePostByIdService,
} from "../services/postService.js";

export const createPostController = async (req, res) => {
  if (!req.file || !req.file.location) {
    return res.status(400).json({
      success: false,
      message: "Image is required",
    });
  }

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
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const paginatedPosts = await findAllPostsService(page, limit);
    return res.status(200).json({
      success: true,
      message: "post fetch successfully",
      data: paginatedPosts,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const deletePostByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await deletePostByIdService(id);
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "post not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "post deleted successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
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
  try {
    const { id } = req.params;
    const updateObject = req.body;

    if (req.file) {
      updateObject.image = req.file.path;
    }

    console.log("updateObject = ", updateObject);

    const response = await updatePostByIdService(id, updateObject);
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "post not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "post updated successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
