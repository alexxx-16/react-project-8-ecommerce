import { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState(null);

  const onSubmit = (data) => {
    setUserData(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center p-6 rounded-xl text-xl gap-4 bg-white"
    >
      <h1 className="text-center text-2xl text-mauve-800">Sign Up Form</h1>
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
        className="outline-none border-b-2 border-pink-200 placeholder-mauve-500 font-light bg-transparent"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
        })}
        className="outline-none border-b-2 border-pink-200 placeholder-mauve-500 font-light"
      />
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
      )}

      <button
        type="submit"
        className="text-lg bg-pink-200 py-2 px-3 w-fit rounded-lg hover:bg-pink-300 active:scale-95 transition-all duration-200"
      >
        Create Account
      </button>
      {userData && (
        <>
          <h1>{userData.email}</h1>
          <h1>{userData.password}</h1>
        </>
      )}
    </form>
  );
};

export default SignUpForm;
