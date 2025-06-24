"use client";
import { useAuth } from "@/app/context/authContext";
import {
  Profile_Asset,
  Search_Asset,
  Cart_Asset,
  ArrowDown_Asset,
} from "@/assets";
import Link from "next/link";
import React from "react";

export default function Navbar_Component() {
  const { user, logout } = useAuth();
  const navButton = {
    profile: <Profile_Asset size="32px" color="#444" />,
    cart: <Cart_Asset size="32px" color="#444" />,
  };
  return (
    <>
      <nav className="sticky top-0 left-0 bg-white shadow-sm z-10 grid grid-cols-[1fr_2fr_1fr] h-[60px]">
        <div className="flex justify-center items-center mx-2">
          <Link
            href={"/"}
            className="font-extralight uppercase text-xl lg:text-3xl tracking-widest font-mono"
          >
            fashion
          </Link>
        </div>
        {/* Search Area */}
        <div className="flex justify-center items-center mx-2">
          <div className="group w-full lg:w-2/3 space-x-4 px-4 flex items-center rounded-xl border-[1px] border-[#ccc] bg-[#eee] focus-within:bg-white hover:border-[#aaa] duration-200">
            <Search_Asset color="#aaa" size="24px" />
            <input
              className="h-[35px] w-full text-sm focus:ring-0 focus:outline-0"
              placeholder="Search for t-shirts, jeans and more"
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mr-2">
          {/* Nav Button */}
          {user !== null
            ? Object.entries(navButton).map(([key, value], index) => (
                <div className="group relative h-full space-x-4" key={index}>
                  <Link
                    className="group flex items-center justify-center gap-1 h-full"
                    href={`/${key}`}
                  >
                    <span>{value}</span>
                    <span
                      className={`${
                        key !== "profile"
                          ? "hidden lg:block"
                          : user === "" && "animate-pulse"
                      } text-lg lg:font-semibold text-[#444]`}
                    >
                      {key === "profile" ? (
                        user !== "" ? (
                          <p>{user?.userName?.split(" ")[0]}</p>
                        ) : (
                          "Sign In"
                        )
                      ) : (
                        key.charAt(0).toUpperCase() + key.slice(1)
                      )}
                    </span>
                    {key === "profile" && (
                      <div className="hidden lg:block transition-transform duration-700 group-hover:rotate-[180deg] -ml-1">
                        <ArrowDown_Asset />
                      </div>
                    )}
                  </Link>
                  {/* Drop down */}
                  {key === "profile" && (
                    <div className="absolute hidden lg:group-hover:flex flex-col z-10 left-1/2 -translate-x-1/2 rounded-md top-full bg-[var(--background)] border-2 border-neutral-600 shadow-xl w-[200px]">
                      {user !== "" ? (
                        <>
                          {Object.entries({
                            "/profile?type=my_profile": "My Profile",
                            "/orders": "Orders",
                            "/wishlists": "Wishlists",
                          }).map(([key, value], index) => (
                            <Link
                              href={key}
                              key={index}
                              className="p-2 hover:bg-neutral-300 text-neutral-800 text-sm"
                            >
                              {value}
                            </Link>
                          ))}
                          <div className="bg-neutral-500 h-[2px] rounded-xl"></div>

                          <button
                            onClick={logout}
                            className="p-2 text-left hover:bg-neutral-300 text-neutral-800 text-sm cursor-pointer"
                          >
                            Logout
                          </button>
                        </>
                      ) : (
                        <div className="flex items-center p-2 gap-2">
                          <span className="text-sm">New Customer?</span>
                          <Link
                            href={"/auth/register"}
                            className="border-2 flex items-center justify-center border-neutral-700 p-2 rounded-xl w-full hover:bg-neutral-100 duration-200"
                          >
                            Sign Up
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            : Object.entries(navButton).map((_, index) => (
                <div
                  key={index}
                  className="w-[32px] h-[32px] bg-neutral-300 rounded-xl animate-pulse mx-2"
                ></div>
              ))}
        </div>
      </nav>
      {!user?.emailVerified && (
        <div className="fixed bottom-0 left-0 w-screen p-2 bg-neutral-700 flex justify-center gap-2 border-t-[1px] border-neutral-300">
          <span className="text-white lg:text-xl font-extralight">
            Email not verified.
          </span>
          <Link
            href={"/profile?type=my_profile"}
            className="text-white lg:text-xl font-light underline cursor-pointer hover:text-neutral-300 duration-200"
          >
            Verify
          </Link>
          <span className="text-white lg:text-xl font-extralight">Now!</span>
        </div>
      )}
    </>
  );
}
