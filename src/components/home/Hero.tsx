"use client";
import "./hero.modules.css";

import banner from "../../assets/images/hero-banner/Hero-banner.jpg";
import banner2 from "../../assets/images/hero-banner/Hero-banner-2.jpg";
import banner3 from "../../assets/images/hero-banner/Hero-banner-3.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="bg-black">
        <Image className="w-full" src={banner} alt="banner" />
      </div>
    </section>
  );
};

export default Hero;
