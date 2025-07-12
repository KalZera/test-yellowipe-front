import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { type AuthenticationBody } from "../services/login";
import { useLogin } from "../hook/use-login";

export const UserLogin = () => {
  const { register, handleSubmit, loginUser } = useLogin();
  const onSubmit = async (data: AuthenticationBody) => {
    loginUser(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">User Login</h1>
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password")}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Register
        </Button>
      </form>
    </div>
  );
};
