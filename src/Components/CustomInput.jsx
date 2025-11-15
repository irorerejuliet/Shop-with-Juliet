import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const CustomInput = ({
  label,
  type = "text",
  placeholder,
  register,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Determine input type dynamically
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="mb-4 relative">
      <label className="block text-gray-700">{label}</label>

      <input
        type={inputType}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded ${
          error ? "border-red-500" : "border-gray-300"
        } pr-10`} // add padding for icon
        {...register}
      />

      {/* Show eye icon only for password fields */}
      {type === "password" && (
        <span
          className="absolute right-3 top-9 cursor-pointer text-gray-600"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiFillEyeInvisible size={20} />
          ) : (
            <AiFillEye size={20} />
          )}
        </span>
      )}

      {error && <p className="text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};

export default CustomInput;
