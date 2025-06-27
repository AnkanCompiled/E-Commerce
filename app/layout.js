import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar_Component from "@/components/Navbar_Component";

import AuthProvider from "../context/authContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fashion Store",
  icons: "/favicon.ico",
  keywords: ["E-Commerce", "Clothing", "Fashion"],
  description: "E-Commerce next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Navbar_Component />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
