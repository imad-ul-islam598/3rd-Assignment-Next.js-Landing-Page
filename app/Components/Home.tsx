"use client"; 
import Image from 'next/image';
import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section
      id="home" 
      className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Hero-image.jpg')" }} 
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-white p-4 md:p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Future is Here</h1>
        <p className="text-base md:text-lg mb-8 max-w-xl mx-auto">
         Now you don't need to go any where. Here is what's you want. Learn the Scopeable technologies and get industry level Experience together.
        </p>
        <a href="/Course-Guide.pdf" download>
          <button className="bg-[#001845] text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-300">
            Download Course Guide
          </button>
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
 