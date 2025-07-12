import api from "@/config/axios";
import { z } from "zod";

export const updatePostQuerySchema = z.object({
  postId: z.number(),
  content: z.string(),
});

export type UpdatePostBody = z.infer<typeof updatePostQuerySchema>;

export async function updatePostService({ postId, content }: UpdatePostBody) {
  return await api.put(`/post/${postId}`, { content });
}
