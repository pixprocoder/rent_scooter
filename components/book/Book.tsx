import React from "react";
import Button from "../shared/Button";

const Book = () => {
  return (
    <section className="m-0 lg:-mt-20 mb-6">
      <div className="rounded-lg bg-white shadow-lg">
        <div className="py-14  px-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Location */}
          <div className="w-full">
            <h2 className="text-xl font-semibold my-2">Pickup Location</h2>
            <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
              <input
                type="text"
                placeholder="Your Location"
                className=" p-4 rounded-md border-[#64CCC5] border outline-none mt-2"
              />
            </div>
          </div>
          {/* Pickup date */}
          <div className="w-full">
            <h2 className="text-xl font-semibold my-2">Pickup Date</h2>
            <div>
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
                <input
                  type="text"
                  placeholder="Date "
                  className="p-4 rounded-md border-[#64CCC5] border outline-none mt-2"
                />
                <input
                  type="text"
                  placeholder="Time "
                  className="p-4 rounded-md border-[#64CCC5] border outline-none mt-2"
                />
              </div>
            </div>
          </div>
          {/* Return date */}
          <div className="w-full">
            <h2 className="text-xl font-semibold my-2">Return Date</h2>{" "}
            <div>
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-4">
                <input
                  type="text"
                  placeholder="Date "
                  className="p-4 rounded-md border-[#64CCC5] border outline-none mt-2"
                />
                <input
                  type="text"
                  placeholder="Time "
                  className="p-4 rounded-md border-[#64CCC5] border outline-none mt-2"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex bottom-0">
            <Button title="Search"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
