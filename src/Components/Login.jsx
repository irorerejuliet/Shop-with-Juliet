import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schema/auth";
import CustomInput from "./CustomInput";

const Login = ({ openSignUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <CustomInput
          label="Email"
          type="email"
          placeholder="Enter Email"
          register={register("email")}
          error={errors.email}
        />

        {/* Password */}
        <CustomInput
          label="Password"
          type="password"
          placeholder="Enter Password"
          register={register("password")}
          error={errors.password}
        />

        {/* Remember & Forgot */}
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-red-800">
            Forgot Password?
          </a>
        </div>

        {/* Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded"
          >
            Login
          </button>
        </div>
      </form>

      {/* Switch to Sign Up */}
      <div className="text-center">
        <span className="text-gray-700">Don't have an account?</span>
        <button className="text-red-800 ml-1" onClick={openSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
