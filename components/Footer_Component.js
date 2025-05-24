import Link from "next/link";
import React from "react";

export default function Footer_Component() {
  return (
    <footer className="bg-neutral-700 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-sm text-neutral-300">
            We are dedicated to providing high-quality services and products to
            our customers. Your satisfaction is our priority.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>Email: ankanb560@gmail.com</li>
            <li>Phone: +91 1234 5678 90</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="text-sm text-neutral-300 space-y-1">
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:underline">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} AnkanCompiled. All rights reserved.
      </div>
    </footer>
  );
}
