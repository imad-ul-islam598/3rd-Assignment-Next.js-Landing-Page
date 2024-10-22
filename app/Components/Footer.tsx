import React from "react";
import Link from "next/link";
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#001845] text-white py-6 text-center">
      <div className="container mx-auto">
        <p className="text-sm md:text-base mb-4">
          &copy; 2024 Coursea.com, All rights reserved.
        </p>

        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href="https://facebook.com"
            aria-label="Facebook"
            className="p-3 bg-white text-blue-600 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            href="https://twitter.com"
            aria-label="Twitter"
            className="p-3 bg-white text-blue-600 rounded-full hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            className="p-3 bg-white text-pink-600 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="p-3 bg-white text-blue-600 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out"
          >
            <FaLinkedinIn size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
