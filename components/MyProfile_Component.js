"use client";
import { useAuth } from "@/context/authContext";
import { Logout_Asset } from "@/assets";
import { api } from "@/configs/axios";
import React, { useEffect, useRef, useState } from "react";

const LoadingTemplate = () => {
  return (
    <div className="flex flex-col gap-2">
      {[
        { width: 300, height: 55 },
        { width: 600, height: 50, margin_top: 10 },
        { width: 600, height: 70 },
        { width: 400, height: 50, margin_top: 5 },
      ].map((size, index) => (
        <div
          key={index}
          className={`bg-neutral-200 animate-pulse rounded-xl max-w-[60vw]`}
          style={{
            marginTop: size?.margin_top || 0,
            width: size.width,
            height: size.height,
          }}
        ></div>
      ))}
    </div>
  );
};

export default function MyProfile_Component() {
  const { logout } = useAuth();
  const initialUserData = useRef({});
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [edited, setEdited] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const user = await api.get("/api/user");
      initialUserData.current = user.data;
      setUserData(user.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (JSON.stringify(userData) !== JSON.stringify(initialUserData.current)) {
      setEdited(true);
    } else {
      setEdited(false);
    }
  }, [userData]);

  return loading ? (
    <LoadingTemplate />
  ) : Object.keys(userData).length > 0 ? (
    <div>
      <h1 className="text-2xl lg:text-4xl font-light border-l-8 px-4 py-2">
        Welcome, <span className="font-medium">{userData?.name}</span>
      </h1>
      <form className="w-max">
        {[
          {
            key: "name",
            heading: "Full Name",
            placeholder: "Enter full name",
          },
          {
            key: "email",
            type: "email",
            heading: "Email Address",
            placeholder: "Enter email address",
          },
          {
            key: "phone_number",
            type: "tel",
            heading: "Phone Number",
            placeholder: "Enter phone number",
          },
        ].map((field) => (
          <section key={field.key} className="my-5">
            <p className="text-sm lg:text-lg font-light">{field.heading}</p>
            <input
              value={userData[field.key] || ""}
              type={field?.type ? field?.type : "text"}
              onChange={(e) => {
                setEdited(true);
                setUserData((prev) => ({
                  ...prev,
                  [field.key]: e.target.value,
                }));
              }}
              placeholder={field.placeholder}
              className="text-lg lg:text-2xl font-light px-4 py-2 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 duration-200"
            />
            {field.key === "email" &&
              edited === false &&
              userData.email_verified === false && (
                <p className="uppercase text-emerald-600 border-b-2 border-emerald-600 font-semibold w-max mt-2 opacity-80 hover:opacity-100 duration-200 cursor-pointer">
                  Verify Email
                </p>
              )}
          </section>
        ))}
        {edited && (
          <section className="flex space-x-2 my-5">
            {["Confirm", "Cancel"].map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  index === 0 ? "" : setUserData(initialUserData.current);
                  e.preventDefault();
                }}
                className={`uppercase text-md font-semibold cursor-pointer w-max h-max rounded-lg py-2 px-4 duration-200 ${
                  index === 0
                    ? "bg-neutral-700 text-white hover:bg-neutral-600"
                    : "bg-neutral-300 hover:bg-neutral-400"
                }`}
              >
                {item}
              </button>
            ))}
          </section>
        )}
      </form>
      <div className="bg-neutral-700 h-[1px] my-5"></div>
      <div className="flex flex-col justify-baseline items-baseline gap-2">
        <button
          onClick={logout}
          className="flex gap-1 items-center cursor-pointer font-semibold bg-neutral-700 text-white hover:bg-neutral-600 rounded-lg py-2 px-6 duration-200"
        >
          <Logout_Asset color="#fff" size="24px" />
          Logout
        </button>
        <button className="cursor-pointer text-md text-rose-600">
          Deactivate Account
        </button>
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex items-baseline justify-center">
      <button
        onClick={() => window.location.reload()}
        className="opacity-80 mt-10 font-mono text-lg lg:text-2xl cursor-pointer hover:border-b-2"
      >
        Unexpected Error Occurred. Please refresh page.
      </button>
    </div>
  );
}
