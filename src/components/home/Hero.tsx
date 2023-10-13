"use client";
import "./hero.modules.css";

import banner from "../../assets/images/hero-banner/Hero-banner.jpg";
import banner2 from "../../assets/images/hero-banner/Hero-banner-2.jpg";
import banner3 from "../../assets/images/hero-banner/Hero-banner-3.jpg";
import Image from "next/image";
import Book from "../book/Book";

const Hero = () => {
  return (
    <section className="banner2">
      <div className=" flex justify-center items-center h-[800px]">
        <div className="container">
          <Book />
        </div>
      </div>
    </section>
  );
};

export default Hero;
