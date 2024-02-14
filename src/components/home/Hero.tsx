"use client";
import "./hero.modules.css";

import banner from "../../assets/images/hero-banner/Hero-banner.jpg";
import banner2 from "../../assets/images/hero-banner/Hero-banner-2.jpg";
import banner3 from "../../assets/images/hero-banner/Hero-banner-3.jpg";
import Image from "next/image";
import Book from "../book/Book";

const Hero = () => {
  return (
    <section className="bg-gray-900 bg-opacity-20  p-0 relative">
      <div
        className="absolute -bottom-1 right-[55vw] h-9 w-screen skew-x-[45deg] bg-black lg:right-[70vw] lg:h-24"
        aria-hidden="true"
      ></div>
      <div className=" flex justify-center items-center h-[800px]">
        <div className="container">
          <Book />
        </div>
      </div>
    </section>
  );
};

export default Hero;
