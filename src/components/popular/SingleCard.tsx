"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar, FaMapMarkerAlt, FaMotorcycle } from "react-icons/fa";

const ScooterCard = ({ scooter }: { scooter: any }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-all duration-300 hover:scale-105"
    >
      <img
        src={scooter.image}
        alt={scooter.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold text-gray-100">
          {scooter.name}
        </h3>
        <div className="mb-2 flex items-center">
          <FaStar className="mr-1 text-yellow-400" />
          <span className="text-gray-300">{scooter.rating}</span>
        </div>
        <div className="flex items-center justify-between text-gray-300">
          <div className=" flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            <span>{scooter.location}</span>
          </div>
          <div className="flex items-center">
            <span className="text-[#1ECB15] font-bold">300</span>
            <span className="ml-1">Ron</span>
          </div>
        </div>
        <button className="mt-4 flex w-full items-center justify-center rounded-md bg-[#1ECB15] px-4 py-2 text-white transition-colors duration-300 hover:bg-[#1ECB15]">
          <FaMotorcycle className="mr-2" />
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default ScooterCard;
