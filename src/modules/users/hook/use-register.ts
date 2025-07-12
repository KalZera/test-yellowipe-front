import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { type RegisterBody, registerUserService } from "../services/register";
import toast from "@/utils/toast";
import { useState } from "react";

export const useRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<RegisterBody>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const registerUser = async (data: RegisterBody) => {
    setLoading(true);
    try {
      const response = await registerUserService(data);
      if (response.status === 201) {
        toast.success("Cadastrado com sucesso!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    registerUser,
    loading,
  };
};
