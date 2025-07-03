import { z } from "zod";

export const zodCommentSchema = z.object({
  content: z.string({ message: "Content is required" }).min(1),
  post: z.string({ message: "Post is required" }).min(1),
});
