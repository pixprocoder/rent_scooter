"use client";
import { carData } from "@/src/constants";
import SwiperCarousel from "../shared/SwiperCarousel";
import ScooterCard from "./SingleCard";

const PopularCar = () => {
  const scooters = [
    {
      id: 1,
      name: "City Cruiser",
      rating: 4.8,
      location: "Bucharest",
      image:
        "https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      name: "Beach Rider",
      rating: 4.5,
      location: "Bucharest",
      image:
        "https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      name: "Mountain Explorer",
      rating: 4.7,
      location: "Bucharest",
      image:
        "https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      name: "Mountain Explorer",
      rating: 4.7,
      location: "Bucharest",
      image:
        "https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 5,
      name: "Mountain Explorer",
      rating: 4.7,
      location: "Bucharest",
      image:
        "https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 6,
      name: "Mountain Explorer",
      rating: 4.7,
      location: "Bucharest",
      image:
        "https://images.unsplash.com/photo-1619771914272-e3c1ba17ba4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];
  return (
    <section className="lg:my-20 my-8 container mx-auto p-2">
      <div>
        <div className="px-4 lg:px-0">
          <h2 className="text-3xl mt-10 lg:text-5xl font-header font-bold text-center text-white mb-4">
            Explore <span className="text-[#1ECB15]">Popular vehicles</span>
          </h2>
          <h2 className=" font-light text-sm text-center font-body text-gray-300 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            nemo enim numquam <br /> distinctio eum earum mollitia ratione
            pariatur quibusdam, aperiam qui
          </h2>
          {/* <hr className="my-6 w-2/4 mx-auto text-gray-300 " /> */}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scooters?.map((scooter) => (
            <ScooterCard key={scooter.id} scooter={scooter} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCar;
