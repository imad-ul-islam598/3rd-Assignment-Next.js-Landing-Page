import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#001845] text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#home "><h1 className="m-2 text-2xl font-bold text-[#007DFA] hover:text-white transition duration-300">COURSEA</h1></Link>
        <nav>
          <Link href="#home" className="mx-2 hover:text-[#007DFA] transition duration-300">
            Home
          </Link>
          <Link href="#courses" className="mx-2 hover:text-[#007DFA] transition duration-300">
            Courses
          </Link>
          <Link href="#about" className="mx-2 hover:text-[#007DFA] transition duration-300">
            About
          </Link>
          <Link href="#contact" className="mx-2 hover:text-[#007DFA] transition duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
