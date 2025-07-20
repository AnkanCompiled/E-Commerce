"use client";

import GoogleLogo_Asset from "@/assets/GoogleLogo_Asset";
import { api } from "@/configs/axios";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth_Component({ type }) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (data) => {
    try {
      const url = type === "login" ? "/api/auth/login" : "/api/auth/register";
      await api.post(url, data);
      window.location.reload();
    } catch (error) {
      const message =
        error?.response?.data?.message || "Something went wrong. Try again.";
      setError("root", {
        type: "manual",
        message,
      });
    }
  };

  const handleGoogleSignIn = async () => {
    // Add Google sign-in logic here if needed
    console.log("Google sign-in not implemented yet.");
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {type !== "login" && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Name cannot exceed 50 characters",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name can only contain letters and spaces",
                },
                validate: (value) =>
                  value.trim() !== "" || "Name cannot be just spaces",
              })}
              onFocus={() => clearErrors("root")}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            {...register("email", { required: "Email is required" })}
            onFocus={() => clearErrors("root")}
            className="w-full px-4 py-2 border rounded-md"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <div className="w-full flex border rounded-md">
            <input
              id="password"
              name="password"
              type={passwordVisible ? "text" : "password"}
              autoComplete={
                type === "login" ? "current-password" : "new-password"
              }
              {...register(
                "password",
                type === "register"
                  ? {
                      required: "Password is required",
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
                    }
                  : {
                      required: "Password is required",
                    }
              )}
              onFocus={() => clearErrors("root")}
              className="w-full px-4 py-2 rounded-md focus:outline-0"
            />
            <button
              onClick={() => setPasswordVisible((prev) => !prev)}
              className="hover:scale-105 duration-100 px-3 cursor-pointer"
              type="button"
            >
              {passwordVisible ? <EyeOff /> : <Eye />}
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

      {errors.root && (
        <p className="text-sm text-red-500">{errors.root.message}</p>
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
        <GoogleLogo_Asset size="24px" />
        Continue with Google
      </button>
    </div>
  );
}
