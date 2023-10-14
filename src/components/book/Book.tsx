"use client";

import { Picker } from "../shared/Picker";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Book = () => {
  // m-0 lg:-mt-20 mb-6
  return (
    <section className="">
      <div className="rounded-lg bg-gray-900 bg-opacity-40 shadow-lg p-6 flex flex-col">
        <div className="grid grid-col-1  lg:grid-cols-4 lg:place-items-end place-items-center gap-6">
          {/* Location */}
          <div className="w-full">
            <h2 className="text-xl text-white font-bold my-2">
              Pickup Location
            </h2>
            <Picker />
          </div>
          {/* Pickup date */}
          <div className="w-full">
            <h2 className="text-xl text-white font-bold my-2">Pick A Date</h2>
            <Picker />
          </div>
          {/* Return date */}
          <div className="w-full">
            <h2 className="text-xl text-white font-bold my-2">Return Date</h2>
            <Picker />
          </div>
          <Button className="lg:w-full ">Book Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Book;
