import { createUserService } from "../services/userService.js";

export const createUserController = async (req, res) => {
  if (!req.body?.userName || !req.body?.email || !req.body?.password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  const user = await createUserService(req.body);
  return res.status(201).json({
    success: true,
    message: "User created successfully.",
    data: user,
  });
};
