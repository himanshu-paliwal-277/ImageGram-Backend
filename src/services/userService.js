import { createUser } from "../repository/userRepository.js";

export const createUserService = async (createUserObject) => {
  const userName = createUserObject?.userName?.trim();
  const email = createUserObject?.email?.trim();
  const password = createUserObject?.password?.trim();

  const user = await createUser(userName, email, password);
  return user;
};
