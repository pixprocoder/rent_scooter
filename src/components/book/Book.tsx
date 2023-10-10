"use client";
import * as React from "react";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { cn } from "@/src/lib/utils";

const Book = () => {
  return (
    <section className="m-0 lg:-mt-20 mb-6">
      <div className="rounded-lg bg-white shadow-lg p-6 flex flex-col">
        <div className=" flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Location */}
          <div className="w-full">
            <h2 className="text-xl font-semibold my-2">Pickup Location</h2>
            location
          </div>
          {/* Pickup date */}
          <div className="w-full">
            <h2 className="text-xl font-semibold my-2">Pickup Date</h2>
            pick up
          </div>
          {/* Return date */}
          <div className="w-full">
            <h2 className="text-xl font-semibold my-2">Return Date</h2> return
          </div>
        </div>
        <Button className="w-2/4 mx-auto mt-4">Book</Button>
      </div>
    </section>
  );
};

export default Book;
