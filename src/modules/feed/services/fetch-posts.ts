import api from "@/config/axios";
import { z } from "zod";

export const fetchPostQuerySchema = z.object({
  page: z.number().default(1),
});

export type FetchPostQuery = z.infer<typeof fetchPostQuerySchema>;

export async function fetchPostService({ page }: FetchPostQuery) {
  return await api.get("/post", {
    params: {
      page,
      limit: 10,
    },
  });
}
