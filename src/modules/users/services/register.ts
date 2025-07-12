import api from "@/config/axios";
import { z } from "zod";

export const registerBodySchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string().min(6),
});

export type RegisterBody = z.infer<typeof registerBodySchema>;

export async function registerUserService(
  userData: RegisterBody,
) {
  return await api.post("/register", userData)
}
