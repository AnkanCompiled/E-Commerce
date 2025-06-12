"use client";
import AuthComponent from "@/components/AuthComponent";
import { api } from "@/configs/axios";
import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <div className="flex flex-col items-center h-[calc(100vh-60px)] bg-gradient-to-br from-neutral-700 to-neutral-500">
      <div className="w-full md:w-[70vw] xl:w-[40vw] h-full my-10 flex flex-col rounded-lg bg-white">
        <div className="space-y-3.5 p-5 mx-auto lg:mx-0">
          <h2 className="text-3xl/normal font-semibold">
            {"Looks like you're new here!"}
          </h2>
          <span className="text-xl/normal">
            Sign Up and start your fashion journey
          </span>
        </div>
        <div className="flex-1 bg-neutral-200 m-2 p-5 space-y-6 rounded-lg">
          <AuthComponent type={"register"} />
          <Link
            href={"/auth/login"}
            className="underline block text-center"
            replace
          >
            Already user! Sign In.
          </Link>
        </div>
      </div>
    </div>
  );
}
