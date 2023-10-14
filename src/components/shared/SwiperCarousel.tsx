import { carData } from "@/src/constants";
import React from "react";
import SwiperCore from "swiper";
import { MdOutlineSpeed } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import { AspectRatio } from "../ui/aspect-ratio";

SwiperCore.use([Navigation, Pagination, Keyboard]);

const SwiperCarousel = () => {
  return (
    <>
      <Swiper watchSlidesProgress={true} slidesPerView={1} className="mySwiper">
        {carData.map((car) => (
          <SwiperSlide>
            <div className=" flex flex-col justify-center items-center  shadow-lg">
              <div className="w-[350px] h-[200px]  overflow-hidden flex-1">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={car.image}
                    alt="Image"
                    className="rounded-md  object-cover"
                  />
                </AspectRatio>
              </div>
              <div className=" flex-1 items-center text-center">
                <div className="mb-4">
                  <h2 className="card-title text-xl text-gray-100">
                    {"model"}
                  </h2>
                  <hr className="my-2 text-gray-300" />
                </div>
                <div className="grid gap-2  grid-cols-3 my-4 text-gray-300">
                  <div className="flex gap-2 items-center ">
                    <MdOutlineSpeed></MdOutlineSpeed>
                    {car.power}
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdOutlineSpeed></MdOutlineSpeed>
                    {car.transmission}
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdOutlineSpeed></MdOutlineSpeed>
                    {car.fuelType}
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdOutlineSpeed></MdOutlineSpeed>
                    {car.year}
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdOutlineSpeed></MdOutlineSpeed>
                    {car.power}
                  </div>

                  <div className="flex gap-2 items-center">
                    <MdOutlineSpeed></MdOutlineSpeed>
                    {car.capacity}
                  </div>
                </div>
                <div className="w-full ">
                  <div className="flex justify-between items-center bg-opacity-10  bg-gray-900 w-full p-3 font-semibold rounded-sm mb-2">
                    <p className="flex gap-2 items-center ">
                      <span className="text-sm  text-gray-300">
                        {car.location}
                      </span>
                    </p>
                    <div className="">
                      <p className="text-green-600 text-xl">{"price"}</p>
                    </div>
                  </div>
                  <button className="border border-green-700 text-[#1ECB15] hover:bg-green-700 hover:text-white transition-all duration-300 w-full p-3 font-bold rounded-md text-xl">
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
    // <Swiper
    //   navigation
    //   pagination={{ clickable: true }}
    //   autoplay={{ delay: 3000 }}
    //   className="mySwiper"
    // >
    //   {carData.map((item, index) => (
    //     <SwiperSlide key={index}>
    //       <img src={item.image} alt={item.image} />
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
  );
};

export default SwiperCarousel;
