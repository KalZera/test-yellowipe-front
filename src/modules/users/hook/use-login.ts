import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/authentication";
import { type AuthenticationBody, loginUserService } from "../services/login";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  // Define the form with default values
  const { register, handleSubmit } = useForm<AuthenticationBody>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginUser = async (data: AuthenticationBody) => {
    try {
      const response = await loginUserService(data);

      if (response.status === 200) {
        const { token, user, refreshToken } = response.data;
        login(token, user, refreshToken);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return {
    register,
    handleSubmit,
    loginUser,
  };
};
