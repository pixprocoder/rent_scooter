"use client";
import React from "react";
import { FaStar, FaMapMarkerAlt, FaMotorcycle } from "react-icons/fa";

const ScooterCard = ({ scooter }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-105">
      <img
        src={scooter.image}
        alt={scooter.name}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          {scooter.name}
        </h3>
        <div className="mb-2 flex items-center">
          <FaStar className="mr-1 text-yellow-400" />
          <span className="text-gray-600">{scooter.rating}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="mr-1" />
          <span>{scooter.location}</span>
        </div>
        <button className="mt-4 flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700">
          <FaMotorcycle className="mr-2" />
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default ScooterCard;
