"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2019/06/05/14/49/electric-scooter-4253790_1280.jpg')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Rent a Scooter and Explore the City
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">
          Discover the freedom of eco-friendly transportation with our modern
          scooter rental service.
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          onClick={() => console.log("Explore scooters clicked")}
        >
          <FaSearch className="inline-block mr-2" />
          Explore Scooters
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <p className="text-white text-center text-sm">
          Experience the city like never before with our eco-friendly scooters
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
