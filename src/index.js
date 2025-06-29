import express from "express";
import connectDB from "./config/dbConfig.js";
import { cloudinaryUploader } from "./config/cloudinaryUploader.js";
import { PORT } from "./config/serverConfig.js";
import {
  createPostController,
  deletePostByIdController,
  findAllPostsController,
  findPostByIdController,
  updatePostByIdController,
} from "./controller/postControllers.js";
import { createUserController } from "./controller/userControllers.js";

const app = express();

app.use(express.json());

app.get("/", findAllPostsController);

app.get("/:id", findPostByIdController);

app.put("/post/:id", updatePostByIdController);

app.post("/post", cloudinaryUploader.single("image"), createPostController);

app.delete("/posts/:id", deletePostByIdController);

app.post("/user", createUserController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
