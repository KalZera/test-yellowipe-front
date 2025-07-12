import api from "@/config/axios";
import { z } from "zod";

export const authenticationBodySchema = z.object({
  name: z.string(),
  email: z.email().optional(),
  password: z.string().min(6).optional(),
});

export type AuthenticationBody = z.infer<typeof authenticationBodySchema>;

export async function loginUserService(userData: AuthenticationBody) {
  return await api.post("/session", userData);
}
