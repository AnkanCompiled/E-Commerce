import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Commerce",
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
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
