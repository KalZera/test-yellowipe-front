import api from "@/config/axios";
import { z } from "zod";

export const deletePostQuerySchema = z.object({
  postId: z.number(),
});

export type DeletePostBody = z.infer<typeof deletePostQuerySchema>;

export async function deletePostService({ postId }: DeletePostBody) {
  return await api.delete(`/post/${postId}`);
}
