import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schema/auth";
import CustomInput from "./CustomInput";

const Register = ({ openLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <CustomInput
          label="Name"
          type="name"
          placeholder="Enter Name"
          register={register("name")}
          error={errors.name}
        />

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
          placeholder="Enter password"
          register={register("password")}
          error={errors.password}
        />

        {/* Confirm Password */}
        <CustomInput
          label="Confirm Password"
          type="confirm Password"
          placeholder="Confirm password"
          register={register("Confirm password")}
          error={errors.confirmPassword}
        />

        {/* Submit */}
        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            Sign Up
          </button>
        </div>
      </form>

      {/* Switch to Login */}
      <div className="text-center">
        <span className="text-gray-700">Already have an account?</span>
        <button className="text-red-800 ml-1" onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
