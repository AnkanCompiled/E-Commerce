"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/configs/axios";

const AuthContext = createContext();

import React from "react";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const result = await api.get("/api/auth/logged");
        console.log("User ID:", result.data);
        setUser(result.data);
      } catch (error) {
        setUser("");
      }
    };
    checkLoginStatus();
  }, []);

  const logout = async () => {
    try {
      await api.get("/api/auth/logout");
      setUser("");
      window.location.reload();
    } catch (error) {}
  };
  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
