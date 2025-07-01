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
    // const posts = await Post.aggregate([
    //   { $sort: { createdAt: -1 } },
    //   { $skip: (page - 1) * limit },
    //   { $limit: limit },
    //   {
    //     $lookup: {
    //       from: "users",
    //       localField: "user",
    //       foreignField: "_id",
    //       as: "userDetails",
    //     },
    //   },
    //   { $unwind: "$userDetails" },
    //   {
    //     $project: {
    //       "userDetails._id": 1,
    //       "userDetails.userName": 1,
    //       "userDetails.email": 1,
    //       // userName: "$userDetails.userName",
    //       __id: 1,
    //       caption: 1,
    //       image: 1,
    //     },
    //   },
    // ]);
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate({
        path: "user",
        select: "_id userName email",
      })
      .select("_id caption image user");
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
