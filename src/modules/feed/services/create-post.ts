import api from "@/config/axios";
import { z } from "zod";

export const createPostBodySchema = z.object({
content: z.string(),
});

export type CreatePostBody = z.infer<typeof createPostBodySchema>;

export async function createPostService(
  {content}: CreatePostBody
) {
  return await api.post("/post", {content})
}
