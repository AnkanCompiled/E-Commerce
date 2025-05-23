import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar_Component from "@/components/Navbar_Component";
import Footer_Component from "@/components/Footer_Component";

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
        <Navbar_Component />
        {children}
        <Footer_Component />
      </body>
    </html>
  );
}
