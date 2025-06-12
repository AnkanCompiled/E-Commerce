"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/configs/axios";

const AuthContext = createContext();

import React from "react";

export default function AuthProvider({ children }) {
  const [userID, setUserID] = useState(null);
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const result = await api.get("/api/auth/logged");
        setUserID(result.data.id);
      } catch (error) {
        setUserID("");
      }
    };
    checkLoginStatus();
  }, []);

  const logout = async () => {
    try {
      await api.get("/api/auth/logout");
      setUserID("");
      window.location.reload();
    } catch (error) {}
  };
  return (
    <AuthContext.Provider value={{ userID, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
