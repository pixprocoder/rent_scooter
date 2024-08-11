"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

const Scooter = () => {
  const scooters = useQuery(api.scooters.getScooter);

  return (
    <div className="container mx-auto min-h-screen ">
      <h1 className="text-white">All scooters</h1>
      {scooters?.map((scooter) => (
        <div key={scooter._id} className="text-white">
          {" "}
          <p>{scooter.name}</p>
          <p>{scooter.price}</p>
          <p> {scooter._id}</p>
        </div>
      ))}
    </div>
  );
};

export default Scooter;
