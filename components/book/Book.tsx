import React from "react";
import Button from "../shared/Button";

const Book = () => {
  return (
    <section className="-mt-20 mb-6">
      <div className="card bg-white shadow-lg">
        <div className="py-14  px-6 flex flex-col lg:flex-row justify-between items-center">
          {/* Location */}
          <div className="">
            <h2 className="text-xl font-semibold my-2">Pickup Location</h2>
            <div>
              <input
                type="text"
                placeholder="Your Location"
                className="input  input-sm  w-full max-w-xs mt-2"
              />
            </div>
          </div>
          {/* Pickup date */}
          <div>
            <h2 className="text-xl font-semibold my-2">Pickup Date</h2>
            <div>
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
                <input
                  type="text"
                  placeholder="Date "
                  className="input  input-sm  w-full max-w-xs mt-2"
                />
                <input
                  type="text"
                  placeholder="Time "
                  className="input  input-sm  w-full max-w-xs mt-2"
                />
              </div>
            </div>
          </div>
          {/* Return date */}
          <div>
            <h2 className="text-xl font-semibold my-2">Return Date</h2>{" "}
            <div>
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
                <input
                  type="text"
                  placeholder="Date "
                  className="input  input-sm  w-full max-w-xs mt-2"
                />
                <input
                  type="text"
                  placeholder="Time "
                  className="input  input-sm  w-full max-w-xs mt-2"
                />
              </div>
            </div>
          </div>
          <div className="">
            <Button title="Search"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
