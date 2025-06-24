"use client";
import { GoogleLogo_Asset, VisibleOff_Asset, Visible_Asset } from "@/assets";
import { api } from "@/configs/axios";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

export default function Auth_Component({ type }) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleRegister = async (data) => {
    try {
      await api.post("/api/auth/register", data);
      window.location.reload();
    } catch (error) {
      const message =
        error?.response?.data?.message || "Registration failed. Try again.";
      setError("global", {
        type: "manual",
        message,
      });
    }
  };

  const handleLogin = async (data) => {
    try {
      await api.post("/api/auth/login", data);
      window.location.reload();
    } catch (error) {
      const message =
        error?.response?.data?.message || "Invalid email or password";
      setError("global", {
        type: "manual",
        message,
      });
    }
  };
  const handleGoogleSignIn = async () => {
    // try {
    //   await signIn("google");
    //   await api.get("/api/auth/login");
    //   window.location.reload();
    // } catch (error) {
    //   console.error("Google sign-in error:", error);
    // }
  };
  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit(type === "login" ? handleLogin : handleRegister)}
        className="space-y-4"
      >
        {type !== "login" && (
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            onChange={() => clearErrors("global")}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <div className="w-full flex border rounded-md">
            <input
              type={passwordVisible ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                ...(type === "register" && {
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  validate: {
                    uppercase: (v) =>
                      /[A-Z]/.test(v) ||
                      "At least one uppercase letter required",
                    lowercase: (v) =>
                      /[a-z]/.test(v) ||
                      "At least one lowercase letter required",
                    specialChar: (v) =>
                      /[^A-Za-z0-9]/.test(v) ||
                      "At least one special character required",
                  },
                }),
              })}
              onChange={() => clearErrors("global")}
              className="w-full px-4 py-2 rounded-md focus:outline-0"
            />
            <button
              onClick={() => setPasswordVisible((prev) => !prev)}
              className="hover:scale-105 duration-100 px-3 cursor-pointer"
              type="button"
            >
              {passwordVisible ? (
                <VisibleOff_Asset size="28px" />
              ) : (
                <Visible_Asset size="28px" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-lg/relaxed font-light tracking-wide disabled:shadow-none rounded-md duration-200 cursor-pointer"
        >
          {isSubmitting
            ? "Please wait..."
            : type === "login"
            ? "Sign In"
            : "Sign Up"}
        </button>
      </form>
      {errors.global && (
        <p className="text-sm text-red-500">{errors.global.message}</p>
      )}

      <span className="text-xs">
        By continuing, you agree to{" "}
        <Link href="/terms-of-service" className="hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        .
      </span>

      <div className="h-[2px] bg-neutral-700"></div>

      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-2 py-3 border rounded-md bg-white hover:bg-gray-100 duration-200"
      >
        <GoogleLogo_Asset size={"24px"} />
        Continue with Google
      </button>
    </div>
  );
}
